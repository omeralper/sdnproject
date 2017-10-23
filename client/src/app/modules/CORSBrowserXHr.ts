/*
    ref: http://stackoverflow.com/questions/36527149/angular2-support-for-withcredentials-and-usexdomain
 */
import {Injectable} from '@angular/core';
import {BrowserXhr } from '@angular/http';

@Injectable()
export class CORSBrowserXHr extends BrowserXhr {

    build(): any {
        let xhr = super.build();
        xhr.withCredentials = true;
        return <any>(xhr);
    }
}