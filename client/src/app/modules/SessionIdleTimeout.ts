/**
 * Created by omeroz on 11.10.2016.
 */
import {Injectable} from "@angular/core";
import {AuthenticationManager, AUTHENTICATION_EVENT_TYPE, UserInfo} from "./AuthenticationManager";
import {Action} from "../commons/Action";
import {PageServices} from "./PageServices";
import {SessionManager} from "./SessionManager";
import {AAAApi} from "../swagger/AAAApi";
import {EventsManager} from "./EventsManager";

@Injectable()
export class SessionIdleTimeout {
	public static isLoaded = false;

	constructor(public authenticationManager:AuthenticationManager,
	            public eventsManager:EventsManager,
	            public pageServices:PageServices,
	            public sessionManager:SessionManager,
	            public aaaApi:AAAApi) {
		if (SessionIdleTimeout.isLoaded) {
			throw "SessionIdleTimeout is singleton!";
		}
		SessionIdleTimeout.isLoaded = true;

	}

	//INFO idleTimer may not be loaded, so we defer initialization
	init() {
		let $document = $(document);
		if ($document.idleTimer) {

			// this.authenticationManager.events.subscribe((event: AuthenticationEvent)=> {
			//     let user = this.authenticationManager.getCurrentUser();
			//     let isRemember = false;
			//     if (user) {
			//         let authMode = user.authorizationMode;
			//         isRemember = this.authenticationManager.getSavedCredentials(authMode).isRemember;
			//     }
			//
			//     switch (event.type) {
			//         case AUTHENTICATION_EVENT_TYPE.LOGIN:
			//             if (!isRemember) {
			//                 let sessionTimeout = this.sessionManager.sessionTimeout;
			//                 this.pageServices.logger.info('IdleTimer started:',{ sessionTimeout: sessionTimeout });
			//                 $document.idleTimer(sessionTimeout);
			//             }
			//             break;
			//         case AUTHENTICATION_EVENT_TYPE.LOGOUT:
			//             this.pageServices.logger.info('IdleTimer stoped');
			//             $document.idleTimer("pause");
			//             break;
			//         case AUTHENTICATION_EVENT_TYPE.USER_INFO_UPDATED:
			//             //Info ignore no need
			//             break;
			//     }
			// });

			this.eventsManager.on<UserInfo>(AUTHENTICATION_EVENT_TYPE.LOGIN, (event) => {
				this.pageServices.logger.debug("ADMIN USER LOGIN", event.eventData);
				let user = this.authenticationManager.getCurrentUser();
				let isRemember = false;
				if (is.existy(user)) {
					let authMode = user.authorizationMode;
					let savedCredentials = this.authenticationManager.getSavedCredentials(authMode);
					isRemember = (is.existy(savedCredentials) && savedCredentials.isRemember);
				}
				if (!isRemember){
					let sessionTimeout = this.sessionManager.sessionTimeout;
					this.pageServices.logger.info('IdleTimer started:',{ sessionTimeout: sessionTimeout });
					$document.idleTimer(sessionTimeout);
				}
			});

			this.eventsManager.on(AUTHENTICATION_EVENT_TYPE.LOGOUT, (event) => {
				this.pageServices.logger.debug("ADMIN USER LOGOUT");
				this.pageServices.logger.info('IdleTimer stoped');
				$document.idleTimer("pause");
			});

			$document.on("idle.idleTimer", (event, elem, obj) => {
				$document.idleTimer("pause");
				let i = 15;
				var t = document.title;

				var popup = this.pageServices.uiHelper.confirm($.t("common.messages.idle_timeout", { "seconds" : i})
					, (selected: Action) => {
						if (selected === this.pageServices.uiHelper.DIALOG_BUTTONS.YES) {
							let request = this.pageServices.apiHelper.genRequest({ });
							this.aaaApi.aaaPingPOST(request)
								.subscribe((res) => {
										this.pageServices.uiHelper.processResponse(res);
									}
								);
							$document.idleTimer("reset");
							document.title = t;
							clearInterval(intId);
						} else {
							this.authenticationManager.logout();
						}
					});


				let intId = setInterval(() => {
					document.title = $.t("common.messages.idle_timeout_title",{ "seconds" : i});
					$(".bootbox-body", popup[0]).text($.t("common.messages.idle_timeout", { "seconds" : i}));
					i--;
					if (i < 0) {
						document.title = t;
						clearInterval(intId);
						this.pageServices.uiHelper.clearConfirmations();
						this.authenticationManager.logout();
					}
				}, 1000);

			});
		}
	}
}
