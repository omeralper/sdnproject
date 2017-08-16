/**
 * Created by omeroz on 14.11.2016.
 */
import {Injectable} from "@angular/core";
// import {Router} from "@angular/router-deprecated";
import {Router} from "@angular/router";
import {Headers} from "@angular/http";
import {Utils} from "../../Utils";
import {NacAuthApi} from "../../../swagger/NacAuthApi";
import {UIHelper} from "../../UIHelper";
import {ApiHelper} from "../../ApiHelper";
import {NacLoginOpts} from "../../../swagger/NacLoginOpts";
import {NacLoginRequest} from "../../../swagger/NacLoginRequest";
import {GenericIdRequest} from "../../../swagger/GenericIdRequest";
import {NacUserDTO} from "../../../swagger/NacUserDTO";
import {NacSessionManager} from "./NacSessionManager";
import {NacLoginResponse} from "../../../swagger/NacLoginResponse";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {NACENTITYTYPE} from "../../../swagger/NACENTITYTYPE";

@Injectable()
export class NacAuthenticator {
	public count: number = 0;


	constructor(public router: Router,
	            public apiHelper: ApiHelper,
	            public uiHelper: UIHelper,
	            public nacUserApi: NacAuthApi,
	            public nacSessionManager: NacSessionManager,
	            public utils: Utils) {

	}


	inc() {
		this.count++;
	}

	dec() {
		this.count--;
	}

	getCount(): number {
		return this.count;
	}


	login(loginData, returnPath) {
		let localLoginData = $.extend({}, loginData);
		this.utils.getClientIp((ip: string) => {
			let loginRequest: NacLoginOpts = $.extend(localLoginData, {
				params: {
					"user_agent": navigator.userAgent,
					"user_ip": ip
				}
			});

			let request: NacLoginRequest = <NacLoginRequest>this.apiHelper.genRequest({
				data: loginRequest
			});

			let authorizationHeaders = new Headers();
			authorizationHeaders.set('Authorization', this.apiHelper.getAuthorizationKey());

			this.nacUserApi
				.loginPOST(<NacLoginRequest>request, true, authorizationHeaders)
				.subscribe(
					(res: NacLoginResponse) => {
						if (this.uiHelper.processResponse(res, null, true)) {
							if (localLoginData.isRemember) {
								this.nacSessionManager.loginData = localLoginData;
							}

							// let mockUser = <NacUserDTO>{
							// 	name: "John",
							// 	surname: "Doe",
							// 	userType: NACENTITYTYPE.GUEST,
							// 	username: "Johnny",
							// 	status: NACSTATUS.ACTIVE,
							// 	securityLevel: 1
							// };
							// this.nacSessionManager.currentUser = mockUser;

							if (res.data && res.data.user) {
								this.nacSessionManager.currentUser = res.data.user;
							}


							if (is.existy(returnPath) && is.url(returnPath)) {
								window.location.href = returnPath
							} else {
								this.router.navigate(['naclogin/nacloginsuccess']);
							}
						}
					},
					(error: any) => {
						this.uiHelper.processResponse(error._body);
					}
				);

		}, '{inject:ip}');
	}

	logout() {
		let user: NacUserDTO = this.getUser();
		let request = <GenericIdRequest>this.apiHelper.genRequest({
			id: user.id
		});
		this.nacSessionManager.removeLoginData();
		this.nacSessionManager.removeUserData();

		this.nacUserApi.logoutPOST(request).subscribe(() => {
			//this.router.navigate(['naclogin']);
            $(".body").fadeOut(500, ()=>{
                window.location.assign('/naclogin/login');
            });
		});
	}

	getUser(): NacUserDTO {
		return this.nacSessionManager.currentUser || <NacUserDTO>{};
	}

	getLoginData(): any {
		return this.nacSessionManager.loginData;
	}
}
