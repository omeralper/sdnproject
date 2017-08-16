/**
 * Created by omeroz on 4/6/2017.
 */

import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    OnChanges,
    ElementRef, ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {MODAL_SIZE} from "../../ModalComponent";
import {NFVApi} from "../../../swagger/NFVApi";
import {NetServiceRecordLaunchRequest} from "../../../swagger/NetServiceRecordLaunchRequest";
import {VimInfoDTO} from "../../../swagger/VimInfoDTO";
import {NetServiceDescDTO} from "../../../swagger/NetServiceDescDTO";
import {VirtualNetFunctionDTO} from "../../../swagger/VirtualNetFunctionDTO";
import {NetServiceRecordLaunchDTO} from "../../../swagger/NetServiceRecordLaunchDTO";
import {VnfdTypeVimInstancesMap} from "../../../swagger/VnfdTypeVimInstancesMap";
import {Vnfd} from "../../../swagger/Vnfd";
import {VnfdTypeVimInstancesItem} from "../../../swagger/VnfdTypeVimInstancesItem";
import {VimInstanceBase} from "../../../swagger/VimInstanceBase";
import {ApiHelper} from "../../ApiHelper";

@Component({
    moduleId: module.id,
    selector: 'StartNsdPopup',
    templateUrl: './StartNsdPopup.html',
    providers: [NFVApi],
})

export class StartNsdPopup extends BasePopupEditPage<NetServiceDescDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    public vims: Array<VimInfoDTO> = [];
    public detailView: boolean = false;
    public launcher: NetServiceRecordLaunchDTO = <NetServiceRecordLaunchDTO>{};

    dummyModel;
    dummyModel2;
    test;
    test2;

    constructor(public nfvApi: NFVApi,
                public apiHelper: ApiHelper,
                public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        this.modalSize = MODAL_SIZE.NORMAL;
        this.setI18NKey('network_function_virtualization.network_service_decriptor.start');

        this.setFormActions([
            this.createAction('dialogs.actions.start', () => {
                this.start();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
        this.launcher.vduVimInstancesMap = this.apiHelper.genDTO(<VnfdTypeVimInstancesMap>{
            vimInstances: []
        });
        this.data.vnfdSumamryList.forEach((vnf: VirtualNetFunctionDTO) => {
            let vnfdTypeVimInstancesItem: VnfdTypeVimInstancesItem = <VnfdTypeVimInstancesItem>{};
            vnfdTypeVimInstancesItem.vimInstances = [];
            vnfdTypeVimInstancesItem.vnfd = <Vnfd>{};
            vnfdTypeVimInstancesItem.vnfd.name = vnf.name;

            this.launcher.vduVimInstancesMap.vimInstances.push(vnfdTypeVimInstancesItem);
        });

        this.fetchVIMs();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {



            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }


    fetchVIMs() {
        let request = this.baseServices.apiHelper.genFullListRequest();
        this.nfvApi
            .vimListPOST(request)
            .subscribe((res) => {
                this.vims = res.data.list;
                this.changeDetector.detectChanges();
            });
    }

    vimSelectedForAll(selectedVimIds: Array<string>) {
        let selectedVims = [];
        selectedVimIds.forEach((vimId) => {
            let vim = this.vims.find(f => f.id == vimId);
            let vimInstanceBase = <VimInstanceBase>{
                name: vim.name,
                type: vim.type
            };
            selectedVims.push(vimInstanceBase);
        });

        this.launcher.vduVimInstancesMap.vimInstances.forEach((v) => {
            v.vimInstances = selectedVims;
        });
    }

    vimSelected(selectedVimIds: Array<string>, vnf: VirtualNetFunctionDTO) {
        let vimInLauncher = this.launcher.vduVimInstancesMap.vimInstances.find((v: VnfdTypeVimInstancesItem) => {
            return v.vnfd.name == vnf.name;
        });
        vimInLauncher.vimInstances = [];

        selectedVimIds.forEach((vimId) => {
            let vim = this.vims.find(f => f.id == vimId);
            let vimInstanceBase = <VimInstanceBase>{
                name: vim.name,
                type: vim.type
            };
            vimInLauncher.vimInstances.push(vimInstanceBase);
        });
    }


    start() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        let request = <NetServiceRecordLaunchRequest>this.baseServices.apiHelper.genRequest({
            data: this.launcher,
            nsdId: this.data.id
        });

        this.nfvApi
            .nsrSavePOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.start_success', {dto: this.data}))) {
                        this.close(true, res.data);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }
}

