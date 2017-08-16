/**
 * Created by yildirayme on 13.04.2017.
 */
import {ChangeDetectorRef, Component, ElementRef, OnInit} from "@angular/core";
import {EventsManager} from "../../modules/EventsManager";
import {AUTHENTICATION_EVENT_TYPE, UserInfo} from "../../modules/AuthenticationManager";
import {PasswordPopup} from "../../modules/aaa/PasswordPopup/PasswordPopup";
import {BaseComponent} from "../BaseComponent";
import {PageServices} from "../../modules/PageServices";
import {TOP_MENU_DATA} from "./top-menu.component.data";
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {SessionManager} from "../../modules/SessionManager";
import {WANDOMAINApi} from "../../swagger/WANDOMAINApi";
import {WanDomainResponse} from "../../swagger/WanDomainResponse";
import {Action} from "../Action";
import {WanDomainDTO} from "../../swagger/WanDomainDTO";
import {RETURNSTATUS} from "../../swagger/RETURNSTATUS";
import {DIALOG_TYPES} from "../../modules/UIHelper";
import {WanDomainListResponse} from "../../swagger/WanDomainListResponse";
import {UI_TOPOLOGY_ACTION} from "../enums/UI_TOPOLOGY_ACTION";

@Component({
	moduleId: module.id,
	selector: 'commons-top-menu-component',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent extends BaseComponent implements OnInit {
	routerEvents: Subscription;
	// public _navLi: JQuery;
	// public _navChild: JQuery;

	public isAuthenticated: boolean = false;
	public isLoginPage: boolean = false;
	public currentUser: string;

	public rootMenu;
	public domains: Array<WanDomainDTO> = [];
	public centralDomain: WanDomainDTO = <WanDomainDTO>{};
	public currentDomain: WanDomainDTO = <WanDomainDTO>{};

	domainChangeSub: Subscription;

	constructor(public eventsManager: EventsManager,
	            public wanDOMAINApi: WANDOMAINApi,
	            public router: Router,
	            public changeDetector: ChangeDetectorRef,
	            public sessionManager: SessionManager,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.usePermCache = false; //disable cache, because with user authentication events permissions may change.
		this.logger.info("TopMenu Component Initialized");
		this.setI18NKey('top_menu');

		eventsManager.on<UserInfo>(AUTHENTICATION_EVENT_TYPE.LOGIN, (event) => {
			this.isAuthenticated = true;
			this.fetchDomain();
			this.routerEvents = router.events.subscribe((val) => {
				if (val instanceof NavigationEnd) {
					//console.log(val);
					// let url = val.url.split(";")[0];
					// let resursiveSearch = (url, menu) => {
					//     for (let index in menu) {
					//         let item = menu[index];
					//
					//         if (item.link) {
					//             if (item.link[0].indexOf(url) >= 0) {
					//                 return item;
					//             }
					//         }
					//
					//         if (item.menu) {
					//             let result = resursiveSearch(url, item.menu);
					//             if (result) return result;
					//         }
					//     }
					// }
					// let item = resursiveSearch(url, this.rootMenu);

					//if (item) {
					this.isLoginPage = val.url == "/naclogin/login";
					let $item = $("a.argela-child-link[data-url='" + val.url + "']", this.$container);
					this.highlightMenu($item);
					//}
					//console.log(this.route.snapshot.params["mode"]);
					//this._mode = this.route.snapshot.params["mode"];
					//this.changeDetector.detectChanges();

				}
			});
		});

		eventsManager.on<UserInfo>(AUTHENTICATION_EVENT_TYPE.LOGOUT, (event) => {
			this.isAuthenticated = false;
			this.routerEvents.unsubscribe();
		});

		eventsManager.on<UserInfo>(AUTHENTICATION_EVENT_TYPE.USER_INFO_UPDATED, (event) => {
			if (is.existy(event.eventData) && is.existy(event.eventData.userDTO)) {
				this.currentUser = [event.eventData.userDTO.name, event.eventData.userDTO.surname].join(' ');
				this.updateRootMenu();
			} else {
				this.currentUser = "";
				this.rootMenu = null;
			}

			this.changeDetector.detectChanges();
		});

		this.domainChangeSub = baseServices.sharedService.domainChange$.subscribe((domain: WanDomainDTO)=>{
			this.changeDomain(domain);
		});
	}

	ngOnInit() {

	}

	fetchDomain() {
		let req = this.baseServices.apiHelper.genRequest({});
		this.wanDOMAINApi
			.wanConfigurationWanDomainCurrentPOST(req)
			.subscribe((res: WanDomainResponse) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					this.currentDomain = res.data;
					if (res.data && res.data.name) { //subdomain'de olduğumuzu gösterir
						this.centralDomain = <WanDomainDTO>this.baseServices.apiHelper.genDTO({
							ip: res.data.centerAddress,
							name: this.t('centralDomain'),
							domainId: ''
						});
					}
				}else{
					this.baseServices.uiHelper.notify(this.t('messages.fetch_domain_fail'), DIALOG_TYPES.ERROR);
				}
			});

		let listReq = this.baseServices.apiHelper.genFullListRequest();
		this.wanDOMAINApi
			.wanConfigurationWanDomainListPOST(listReq)
			.subscribe((res: WanDomainListResponse) => {
				if (res.data && res.data.list)
					this.domains = res.data.list.filter(d => !!d.ip);
			})
	}

	changeDomain(domain: WanDomainDTO) {
		this.baseServices.uiHelper.confirm(this.t('messages.confirm_domain', domain), (selected: Action) => {
			if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
				this.baseServices.authenticationManager.switchController(domain.ip, (status: RETURNSTATUS) => {
					if (status == RETURNSTATUS.SUCCESS) {
						this.fetchDomain();
						this.baseServices.uiHelper.notify(this.t('messages.domain_change_success', domain), DIALOG_TYPES.SUCCESS);
                        this.router.navigate(['/topology/view'],  {queryParams: {action: UI_TOPOLOGY_ACTION.NEW_SUPER_TOPOLOGY, domainId: domain.id} });
					} else {
						this.baseServices.uiHelper.notify(this.t('messages.domain_change_fail', domain), DIALOG_TYPES.ERROR);
					}
				});
			}
		})
	}

	logout() {
		//this.sharedService.announceLogout();
		this.baseServices.authenticationManager.logout();
	}

	change_pwd() {

		this.baseServices.sharedService.showModal(PasswordPopup, this.baseServices.authenticationManager.getCurrentUser().userDTO, (result) => {

		});
	}

	// ngAfterViewInit(): any {
	//     let result = super.ngAfterViewInit();
	//     // this._navChild = $('li.argela-main-nav-child, a.argela-main-nav-child');
	//     // this._navLi = $('.argela-main-nav-li');
	//     //
	//     // var that = this;
	//     // this._navChild.click(function (e) {
	//     //     if (e.target !== this)
	//     //         return;
	//     //
	//     //     if (that._navLi.hasClass('active')) {
	//     //         that._navLi.removeClass('active open selected');
	//     //         $(this).closest('li').addClass('active open selected');
	//     //     }
	//     // });
	//
	//     // $('ul.nav.navbar-nav', this.$container).on("click", 'a.argela-child-link', (event) => {
	//     //     let $this = $(event.currentTarget);
	//     //     this.highlightMenu($this);
	//     // });
	//
	//     return result;
	// }

	ngOnDestroy() {
		this.domainChangeSub.unsubscribe();
		this.routerEvents.unsubscribe();
	}

	public updateRootMenu() {
		//debugger;
		let permChecker = (i18nData) => {
			let realPerm = this.resolvePermKey(i18nData.perm, i18nData.basePerm);
			let result;
			try {
				result = this.p(realPerm);
			} catch (e) {
				this.logger.error("PermChecker Error:", e);
				result = false;
			}
			this.logger.log("PermChecker:", {realPerm: realPerm, result: result, i18n: i18nData});
			return result;
		};

		let menuGenerator = (menuData) => {
			let newMenu = [];
			if (is.existy(menuData) && is.not.empty(menuData)) {
				for (let index in menuData) {
					let item = menuData[index];
					let i18nData = this.baseServices.i18n.t(item.key);

					let subMenuData;
					if (is.existy(item.menu) && is.not.empty(item.menu)) {
						if (i18nData.perm == "children(all)") {
							let currentCount = item.menu.length;
							subMenuData = menuGenerator(item.menu);
							if (subMenuData.length != currentCount) continue;
						} else if (i18nData.perm == "children(any)") {
							subMenuData = menuGenerator(item.menu);
							if (is.empty(subMenuData)) continue;
						} else if (permChecker(i18nData)) {
							subMenuData = menuGenerator(item.menu);
						} else {
							continue;
						}
					} else if (!permChecker(i18nData)) {
						continue;
					}

					if (!item.menu || (subMenuData && subMenuData.length > 0)) {
						let link = (is.existy(item.link) ? (is.array(item.link) ? item.link : [item.link]) : null);
						newMenu.push({
							title: i18nData.title,
							icon: i18nData.icon,
							link: link,
							url: link ? this.router.serializeUrl(this.router.createUrlTree(link)) : null,
							menu: subMenuData || []
						})
					}
				}
			}
			return newMenu;
		}
		this.rootMenu = menuGenerator(TOP_MENU_DATA);
	}

	public highlightMenu($this: any) {
		let $parentMenu = $this.parents('li.argela-main-nav-child');
		let $rootItems = $('li.argela-main-nav-child', this.$container);
		let $allLinks = $('a.argela-child-link', this.$container);
		$rootItems.removeClass('active selected');
		$allLinks.parent("li").removeClass('active selected');
		$parentMenu.addClass('active selected');
		$this.parent("li").addClass('active selected');
	}

	public get hasPwdChangePerms() {
		return this.baseServices.permManager.userHasPermissions("users:change_pwd") && !this.sessionManager.isLdapEnabled;
	}
}

