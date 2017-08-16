/**
 * Created by omeroz on 11.01.2017.
 */
import {Component, OnInit, ElementRef, ChangeDetectorRef, ViewChild, Renderer} from "@angular/core";
import {PageServices} from "../../../../../PageServices";
import {DhcpScopeDTO} from "../../../../../../swagger/DhcpScopeDTO";
import {DhcpApi} from "../../../../../../swagger/DhcpApi";
import {BasePage} from "../../../../../../commons/BasePage";
import {ListOptions} from "../../../../../../swagger/ListOptions";
import {MvtnListResponse} from "../../../../../../swagger/MvtnListResponse";
import {MvtnApi} from "../../../../../../swagger/MvtnApi";
import {MvtnDTO} from "../../../../../../swagger/MvtnDTO";
import {DhcpScopeRequest} from "../../../../../../swagger/DhcpScopeRequest";
import {DIALOG_TYPES} from "../../../../../UIHelper";
import {EnumHelper} from "../../../../../../commons/EnumHelper";
import {IPVERSIONTYPE} from "../../../../../../swagger/IPVERSIONTYPE";
import {QUERYOP} from "../../../../../../swagger/QUERYOP";
import {DhcpOptionDTODef} from "../../../../../../swagger/DhcpOptionDTO";
import {GenericSearchRequest} from "../../../../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../../../../swagger/SearchOptions";

@Component({ moduleId: module.id,
    selector: 'DhcpScopeInfo',
    templateUrl: './DhcpScopeInfo.html',
    providers: [DhcpApi, MvtnApi],
    inputs: ['scope'],
})
export class DhcpScopeInfo extends BasePage implements OnInit {
    public scope: DhcpScopeDTO = <DhcpScopeDTO>{};
    public originalScope: DhcpScopeDTO;

    public virtualNetworks: Array<MvtnDTO> = [];
    public ipVersions = EnumHelper.getNames(IPVERSIONTYPE);
    @ViewChild('addDomainServerLink')
    public addDomainServerLink;
    @ViewChild('addRouterAddressLink')
    public addRouterAddressLink;

    public dnsInput;
    public routerInput;

    public get hasChange():boolean{
        if (is.existy(this.scope) && is.existy(this.originalScope)) {
            let result = is.not.existy(this.scope.id);
            result = result || this.scope.name != this.originalScope.name;
            result = result ||  this.scope.routerAddresses !=this.originalScope.routerAddresses;
            result = result ||  this.scope.domainServers !=this.originalScope.domainServers;
            return result;
        }
        return false;
    }

    constructor(public changeDetector: ChangeDetectorRef,
                public renderer: Renderer,
                public dhcpApi: DhcpApi,
                public mvtnApi: MvtnApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('settings.dhcp.edit');

        $(this.elementRef.nativeElement).on('keyup', (e) => {
            if (e.keyCode == 13) {
                e.stopPropagation();
                this.save();
            }
        });
    }

    ngOnInit() {
        super.ngOnInit();
        this.initVirtualNetworks();
        this.scope.vlanId = this.scope.vlanId == -1 ? undefined : this.scope.vlanId;
        this.originalScope = this.baseServices.apiHelper.cloneObject(this.scope);
    }

    addRouterAddress(address) {
        if (!(address.checkValidity() && address.value))return;
        let routers = this.scope.routerAddresses ? this.scope.routerAddresses.split(',') : [];
        routers.push(address.value);
        let unique = routers.filter((v, i, a) => a.indexOf(v) === i);
        if (unique.length == routers.length) {
            this.scope.routerAddresses = routers.join(',');
            address.value = "";
        } else {
            this.baseServices.uiHelper.notify(this.t("messages.router-already-exists",{ address : address.value }),DIALOG_TYPES.WARNING);
        }
    }

    removeRouterAddress(address) {
        let addresses = this.scope.routerAddresses.split(',');
        addresses.splice(addresses.indexOf(address), 1);
        this.scope.routerAddresses = addresses.join(',');
    }

    addDomainServer(server) {
        if (!(server.checkValidity() && server.value))return;
        let servers = this.scope.domainServers ? this.scope.domainServers.split(',') : [];
        servers.push(server.value);
        let unique = servers.filter((v, i, a) => a.indexOf(v) === i);
        if (unique.length == servers.length) {
            this.scope.domainServers = servers.join(',');
            server.value = "";
        } else {
            this.baseServices.uiHelper.notify(this.t("messages.dns-server-already-exists",{ address : server.value }),DIALOG_TYPES.WARNING);
        }
    }

    removeDomainServer(server) {
        let servers = this.scope.domainServers.split(',');
        servers.splice(servers.indexOf(server), 1);
        this.scope.domainServers = servers.join(',');
    }

    initVirtualNetworks() {
        let request = this.baseServices.apiHelper.genRequest({
            "options": <ListOptions>{
                "startPage": 0
            }
        });
        this.mvtnApi
            .virtualListPOST(request)
            .subscribe(
                (res: MvtnListResponse) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.virtualNetworks = res.data.list;
                    }
                });
        this.changeDetector.detectChanges();
    }

    save() {
        let event = new MouseEvent('click', {bubbles: false});
        this.renderer.invokeElementMethod(this.addDomainServerLink.nativeElement, 'dispatchEvent', [event]);
        this.renderer.invokeElementMethod(this.addRouterAddressLink.nativeElement, 'dispatchEvent', [event]);

        this.changeDetector.detectChanges();
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        this.scope.vlanId = this.scope.vlanId ? +this.scope.vlanId : -1;

        let request: DhcpScopeRequest = <DhcpScopeRequest>this.baseServices.apiHelper.genRequest({
            data: <DhcpScopeDTO> this.scope
        });

        this.dhcpApi
            .dhcpWebScopeSavePOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res,
                            this.t(this.scope.id ? 'messages.save_success' : 'messages.create_success', {dto: res.data}))) {
                        this.scope.id = res.data.id;
                        //update original object with changes
                        this.originalScope = this.baseServices.apiHelper.cloneObject(this.scope);
                        this.initScopeOptions(this.scope.id);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }

    /**
     * This requests scope's options just after saving a new scope, because there will be default option values for a new scope
     * @param scopeId
     */
    initScopeOptions(scopeId) {
        let optionSearchRequest: GenericSearchRequest = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>{
                fields: Object.keys(DhcpOptionDTODef.fields),
                queryOptions: {
                    operator: QUERYOP.VALUE,
                    fieldName: "dhcpScopeId",
                    fieldValue: scopeId
                },
                startPage: 0
            }
        });

        this.dhcpApi
            .dhcpWebOptionSearchPOST(optionSearchRequest)
            .subscribe((optionResults) => {
                if (this.baseServices.uiHelper.processResponse(optionResults)) {
                    this.scope.dhcpOptionDtos = optionResults.data.list;
                    this.changeDetector.detectChanges();
                }
            });
    }

    cancel(){
        this.scope.name = this.originalScope.name; //only restore the name
        this.scope.routerAddresses =this.originalScope.routerAddresses;
        this.scope.domainServers =this.originalScope.domainServers;
        this.routerInput = "";
        this.dnsInput = "";
    }

}

