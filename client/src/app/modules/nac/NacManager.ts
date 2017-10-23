/**
 * Created by yildirayme on 10.01.2017.
 */
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {PageServices} from "../PageServices";
import {Action} from "../../commons/Action";
import "rxjs/add/operator/toPromise";
import {NacUserApi} from "../../swagger/NacUserApi";
import {NACSTATUS} from "../../swagger/NACSTATUS";
import {NacUserStatusResponse} from "../../swagger/NacUserStatusResponse";
import {NacUserStatusRequest} from "../../swagger/NacUserStatusRequest";
import {NacUserStatusDTO} from "../../swagger/NacUserStatusDTO";

/**
 * General Utility functions.
 */
@Injectable()
export class NacManager {


    constructor(public router: Router, public nacUserApi: NacUserApi, public baseServices: PageServices) {

    }

    public changeUserStatus(username: string, ipv4: string, status: NACSTATUS, callback: (res: NacUserStatusResponse) => void) {
        let isDeactivate = (status == NACSTATUS.PASSIVE);
        this.baseServices.uiHelper.confirm(this.t(isDeactivate ? 'users.change_status.messages.deactivate_confirm' : 'users.change_status.messages.activate_confirm', {dto: {username: username}}), (selected: Action) => {
            if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {

                let data = <NacUserStatusDTO>{
                    username: username,
                    //ipv4: ipv4,
                    status: status
                };

                if (ipv4) data.ipv4 = ipv4;

                let request = <NacUserStatusRequest>this.baseServices.apiHelper.genRequest(data);

                this.nacUserApi
                    .userStatusPOST(<NacUserStatusRequest>request).toPromise()
                    .then(
                        (res) => {
                            if (this.baseServices.uiHelper.processResponse(res, this.t(isDeactivate ?'users.change_status.messages.deactivate_success':'users.change_status.messages.activate_success', {dto: {username: username}}))) {
                                callback(res);
                            }
                        },
                        (error: any) => {
                            this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                        }
                    );

            }
        })
    }


    public t(key: string, options?: any): string {
        return this.baseServices.i18n.t('nac_management.' + key, options);
    }

}
