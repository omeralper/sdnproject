/**
 * Created by ekinca on 18.05.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, ViewChild} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {WanPortInfoDTO} from "../../../swagger/WanPortInfoDTO";
import {WanPortInfoApi} from "../../../swagger/WanPortInfoApi";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {SwitchListResponse} from "app/swagger/SwitchListResponse";
import {PortDetail} from "../../../swagger/PortDetail";
import {ClusterApi} from "../../../swagger/ClusterApi";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {ClusterDTO} from "../../../swagger/ClusterDTO";
import {BWUNIT} from "app/swagger/BWUNIT";
import {WanPortInfoRequest} from "app/swagger/WanPortInfoRequest";
import {WANDOMAINApi} from "../../../swagger/WANDOMAINApi";
import {WanDomainListResponse} from "../../../swagger/WanDomainListResponse";
import {EnumHelper} from "../../../commons/EnumHelper";
import {WANPORTTYPE} from "../../../swagger/WANPORTTYPE";

@Component({
	moduleId: module.id,
    selector: 'WlanLinksEditPopup',
    templateUrl: './WlanLinksEditPopup.html',
    providers: [ TopologyApi, WANDOMAINApi ]
})
export class WlanLinksEditPopup extends BasePopupEditPage<WanPortInfoDTO> implements OnInit, AfterViewInit, OnDestroy {

    //form values start
    switchList: Array<SwitchDTO>;
    selectedSwitch: SwitchDTO;

    portList: Array<PortDetail>;
    selectedPort: PortDetail;

    clusterList: Array<ClusterDTO>;
    selectedCluster: ClusterDTO;

    connectionSpeedUnits: Array<any> =  EnumHelper.getNames(BWUNIT);
    wanPortTypes: Array<any> = EnumHelper.getNames(WANPORTTYPE);

    description;
    @ViewChild('bw') bw;

    linkSpeed;
    //form values end

    constructor(baseServices:PageServices, elementRef:ElementRef, public wanApi: WanPortInfoApi, private topoService: TopologyApi, private clusterApi: ClusterApi, private wanDomainApi: WANDOMAINApi,
                public changeDetector: ChangeDetectorRef) {
        super(baseServices, elementRef);
        this.setI18NKey('wlan.edit');

        this.logger.debug('Data received:', this.data);

        this.setFormActions([
            this.createAction('dialogs.actions.save', ()=> {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', ()=> {
                this.close();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();

        if (!this.isNewItem)
        {
            switch (this.data.speedUnit){
                case BWUNIT.BPS:
                    this.linkSpeed = this.data.linkSpeed*1000000;
                    break;
                case BWUNIT.KBPS:
                    this.linkSpeed = this.data.linkSpeed*1000;
                    break;
                case BWUNIT.MBPS:
                    this.linkSpeed = this.data.linkSpeed;
                    break;
                case BWUNIT.GBPS:
                default:
                    this.linkSpeed = this.data.linkSpeed/1000;
                    break;
            }

        } else {
            this.linkSpeed = 1;
            this.data.speedUnit = BWUNIT.GBPS;
        }
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            this.populateSwitchAndPortList();
            this.populateTargetClusterList();
            this.populateConnectionType();
            this.populateConnectionDescription();
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    populateSwitchAndPortList(){
        let request: GenericListRequest = this.baseServices.apiHelper.genFullListRequest();

        this.topoService.topologySwitchListPOST(request).toPromise()
            .then((res: SwitchListResponse)=>{
                if(this.baseServices.uiHelper.processResponse(res)){
                    this.switchList = res.data.list;

                    if(this.data.sourceSwitchId){ //select switch
                        for(let i = 0; i < this.switchList.length; ++i){
                            if(this.switchList[i].id == this.data.sourceSwitchId){
                                this.selectedSwitch = this.switchList[i];
                                break;
                            }
                        }

                        if(!this.selectedSwitch){
                            this.baseServices.uiHelper.alert("no switch", DIALOG_TYPES.ERROR); //TODO
                        }
                    }else{
                        this.selectedSwitch = this.switchList[0];
                    }

                    // select port
                    if(this.selectedSwitch && this.selectedSwitch.portInfo && this.selectedSwitch.portInfo.portDetails && this.selectedSwitch.portInfo.portDetails.length > 0){

                        this.portList = this.selectedSwitch.portInfo.portDetails.filter((portDetail)=>{
                            return portDetail.number>=0;
                        });

                        if(this.data.sourcePortNumber){

                            for(let p = 0; p < this.portList.length; ++p){
                                if(this.portList[p].number == this.data.sourcePortNumber){
                                    this.selectedPort = this.portList[p];
                                }
                            }

                            if(!this.selectedPort){
                                this.baseServices.uiHelper.alert("no port", DIALOG_TYPES.ERROR); //TODO
                            }

                        }else{
                            this.selectedPort = this.portList[0];
                        }
                    }
                }else{
                    //TODO
                }
            });
    }

    switchChanged($event){
        this.selectedSwitch = $event;
        this.portList = this.selectedSwitch.portInfo.portDetails;
    }

    populateTargetClusterList(){
        let requestOptions = {
            "pageSize": 10,
            "startPage": 0,
            "queryOptions": { operator : QUERYOP.NOOP},
            "sortOptions": {"fieldName": "name", "isAscend": true},
            "fields": ["id","name"]
        };

        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>requestOptions
        });

        this.wanDomainApi.wanConfigurationWanDomainListPOST(request).toPromise()
            .then((res: WanDomainListResponse)=>{
                if(this.baseServices.uiHelper.processResponse(res)){
                    this.clusterList = res.data.list;

                    if(this.data.targetClusterName){
                        let index = this.getClusterIndexFromName(this.data.targetClusterName);
                        if(index > -1){
                            this.selectedCluster = this.clusterList[index];
                        }else{
                            this.baseServices.uiHelper.alert("no cluster", DIALOG_TYPES.ERROR); //TODO
                        }

                    }else{
                        this.selectedCluster = this.clusterList[0];
                    }
                }else{
                    //TODO
                }
            });
    }

    populateConnectionType(){

    }

    getClusterIndexFromName(name): number{
        for(let i = 0; i < this.clusterList.length; ++i){
            if (this.clusterList[i].name == name){
                return i;
            }
        }
        return -1;
    }

    populateConnectionDescription(){

    }

    changeBandWith(){
        // this.changeDetector.detectChanges();
        // this.bw.nativeElement.dispatchEvent(new Event('keyup'));
        // this.bw.nativeElement.dispatchEvent(new Event('change'));

        switch (this.data.speedUnit){
            case BWUNIT.BPS:
                this.data.linkSpeed = this.linkSpeed/10000000;
                break;
            case BWUNIT.KBPS:
                this.data.linkSpeed = this.linkSpeed/1000;
                break;
            case BWUNIT.MBPS:
                this.data.linkSpeed = this.linkSpeed;
                break;
            case BWUNIT.GBPS:
            default:
                this.data.linkSpeed = this.linkSpeed*1000;
                break;
        }
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];

        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        if (this.isNewItem){}

        //name is handled in the html
        this.data.sourceSwitchId = this.selectedSwitch.id;
        this.data.sourcePortNumber = this.selectedPort.number;
        this.data.targetClusterName = this.selectedCluster.name;

        this.changeBandWith();

        let request = this.baseServices.apiHelper.genRequest({
            data: <WanPortInfoDTO>  this.baseServices.apiHelper.genDTO(this.data)
        });

        this.wanApi
            .wanConfigurationWanPortInfoSavePOST(<WanPortInfoRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
                        this.close(true);
                    }
                },
                (error:any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }

}

