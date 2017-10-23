
import {ISessionInvalidator} from "./modules/AuthenticationManager";
import {InjectionToken} from "@angular/core";

export const ISessionInvalidatorToken = new InjectionToken<ISessionInvalidator>('ISessionInvalidator');