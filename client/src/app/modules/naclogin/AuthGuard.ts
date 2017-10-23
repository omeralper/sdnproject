/**
 * Created by omeroz on 7/22/2017.
 */
import {Injectable}       from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanLoad, Route
}                           from '@angular/router';
import {NacAuthenticator} from "./component/NacAuthenticator";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private nacAuthenticator: NacAuthenticator, private router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.nacAuthenticator.getUser().name) {
			return true;
		}

		this.router.navigate(['/naclogin/login']);
		return false;
	}

	canLoad(route: Route): boolean {//this is for child routes
		let url = `/${route.path}`;

		//return this.checkLogin(url);
		return false;
	}
}