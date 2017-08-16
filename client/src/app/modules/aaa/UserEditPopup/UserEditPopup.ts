/**
 * Created by yildirayme on 28.04.2016.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, ViewChild} from "@angular/core";
import {AAARolesApi} from "../../../swagger/AAARolesApi";
import {PageServices} from "../../PageServices";
import {AAASTATUS} from "../../../swagger/AAASTATUS";
import {AAAUsersApi} from "../../../swagger/AAAUsersApi";
import {UserDTO} from "../../../swagger/UserDTO";
import {UserRequest} from "../../../swagger/UserRequest";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {AppsApi} from "../../../swagger/AppsApi";
import {AppDTO} from "../../../swagger/AppDTO";
import {Observable} from 'rxjs/Rx';
import {SessionManager} from "../../SessionManager";

@Component({
    moduleId: module.id,
    selector: 'UserEditPopup',
    templateUrl: './UserEditPopup.html',
    providers: [AAAUsersApi, AAARolesApi]
})
export class UserEditPopup extends BasePopupEditPage<UserDTO> implements OnInit, AfterViewInit, OnDestroy {

	AAASTATUS = AAASTATUS;
    public password1: string;
    public password2: string;

    public roleList = [];
    public $select: JQuery;

    public apps: Array<AppDTO> = [];
    public isMilatMainUser: boolean = false;
    public isLdapEnabled: boolean = false;
    @ViewChild('pass1') pass1;
    @ViewChild('pass2') pass2;

    constructor(public changeDetector: ChangeDetectorRef,
                public usersApi: AAAUsersApi,
                public rolesApi: AAARolesApi,
                public appsApi: AppsApi,
                public sessionManager: SessionManager,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('user_management.users.edit');

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);

        this.isMilatMainUser = this.p('phy_topo:manage');

        if (this.isNewItem) { // && !this.isMilatMainUser){
            this.data.appId = (<UserDTO>this.sessionManager.currentUser.userDTO).appId;
        }
    }

    ngOnInit() {
        super.ngOnInit();
        this.isLdapEnabled = this.sessionManager.isLdapEnabled;
        //this.fetchLdap();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    //INFO: ldap ayarları login sırasında bildirilecektir, aşağıdaki şekilde çekilmemelidir. (kullanıcının permission'ı olmayacabilir bu istek için)
    // fetchLdap() {
    //     let request = this.baseServices.apiHelper.genRequest({
    //         data: <ModuleNodeConfigSearchDTO>this.baseServices.apiHelper.genDTO({
    //             nodeType: "API_CORE",
    //             nodeVersion: ApiConfig.getVersion() == "Milat-UI-x.y.z-b999" ? "1.3.0" : ApiConfig.getVersion()
    //         }, true)
    //     });
    //
    //     this.configApi
    //         .configModuleNodeConfigListPOST(<ModuleNodeConfigListRequest>request)
    //         .subscribe(
    //             (res) => {
    //                 if (this.baseServices.uiHelper.processResponse(res)) {
    //                     this.isLdapEnabled = !!res.data.list.find((node: ModuleNodeConfigDTO) => {
    //                         return node.configDefinition.configKey == "isLdapEnabled" && node.configValue == "true";
    //                     })
    //                 }
    //             }
    //         );
    // }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            this.$select = $('#js_role_list', this.$container);

            if (this.p('roles:list')) {
                $('select.multi-select', this.$container).multiSelect({
                    selectableHeader: '<div class="multiselect_selectableHeader">' + this.t('fields.roleList.selectableHeader') + '</div>',
                    selectionHeader: '<div class="multiselect_selectionHeader">' + this.t('fields.roleList.selectionHeader') + '</div>',
                    afterSelect: function () {
                        if (this.$container.hasClass('validation-error-multi'))
                            this.$container.removeClass('validation-error-multi');
                    }
                });

                this.fetchAppsAndRoles();
            }

            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    fetchAppsAndRoles() {

        let request = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'name', isAscend: true},
            }
        });
        let requests = [
            this.rolesApi.aaaRoleListPOST(<GenericListRequest>request),
            this.appsApi.aaaAppListPOST(<GenericListRequest>request)];

        Observable
            .forkJoin(requests)
            .subscribe((responses) => {
                let roleResponse = responses[0];
                let appResponse = responses[1];
                if (this.baseServices.uiHelper.processResponse(roleResponse) && this.baseServices.uiHelper.processResponse(appResponse)) {
                    this.apps = appResponse.data.list;
                    this.changeDetector.detectChanges();
                    this.appChanged(this.data.appId);

                    let selectedList = this.data.roleList.map(role => role.id);
                    this.$select.val(selectedList);
                    $('select.multi-select', this.$container).multiSelect('refresh');
                }
            }, (error: any) => {
                this.baseServices.uiHelper.processResponse(error._body);
                this.close(false);
            });
    }

    appChanged(appId) {
        let selectedApp = this.apps.find((app) => {
            return app.id == appId + "";
        });
        this.roleList = selectedApp ? selectedApp.roleList : [];
        this.changeDetector.detectChanges();
        $('select.multi-select', this.$container).multiSelect('refresh');
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }


        //TODO -check parameters , check permissions if editing current user.
        this.logger.debug('Save new data');
        this.submitted = true;

        if (this.p('roles:list')) {

            let select = $(':selected', this.$select);

            //this.data.securityLevel = parseInt((this.data.securityLevel || 1).toString(), 10); MLAT-776

            this.data.roleList = [];
            select.each((i, selected) => {
                //var item = this.roleList.filter(role => role.id == $(selected).val());
                this.data.roleList.push(this.roleList[parseInt(<any>$(selected).data('index'), 10)]);
            });
        } else if (this.isNewItem) {
            this.data.roleList = [];
        }

        if (this.isNewItem) {
            this.data.password = this.password1; //this.baseServices.utils.hmacSHA1(this.password1,this.baseServices.utils.hmacSHA1(this.data.username));
        }

        this.data.version = this.data.version || 1;
        this.data.revision = this.data.revision || 0;
        this.data.timestamp = this.data.timestamp || new Date();
        this.data.image = "";

        let request = this.baseServices.apiHelper.genRequest({
            data: <UserDTO> this.data
        });

        this.usersApi
            .aaaUserSavePOST(<UserRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
                        //debugger;
                        this.baseServices.authenticationManager.checkAndUpdateUserDTO(res.data);
                        this.close(true);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }

    //INFO: do not remove, used in HTML template
    public get selectedApp(){
        if (is.existy(this.data) && is.existy(this.data.appId) && is.existy(this.apps)){
            let selectedApp = this.apps.find((app) => {
                return app.id == this.data.appId + "";
            });
            return selectedApp;
        }
        return null;
    }

}

