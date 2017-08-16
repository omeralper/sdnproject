// /**
//  * Created by ekinca on 16.11.2016.
//  */
// /**
//  * Created by ekinca on 11.11.2016.
//  */
// import {
//     ComponentFixture,
//     inject,
//     addProviders,setBaseTestProviders
// } from '@angular/core/testing';
// import { By }                                from '@angular/platform-browser';
// import { DebugElement }                      from '@angular/core';
// import {DocumentConverter} from '../modules/DocumentConverter';
// import {Logger} from "../modules/Logger";
// import {UIHelper} from "../modules/UIHelper";
// import {
//     TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
//     TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
// } from '@angular/platform-browser-dynamic/testing';
// setBaseTestProviders(
//     TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
//     TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
// );
//
// import {  Http}   from '@angular/http';
//
// describe('main app component', () => {
//
//     let comp: DocumentConverter;
//     let fixture: ComponentFixture<DocumentConverter>;
//     let componentUserService: Logger; // the actually injected service
//     let logger: Logger; // the TestBed injected service
//     let uiHelper: UIHelper;
//     let de: DebugElement;  // the DebugElement with the welcome message
//     let el: HTMLElement; // the DOM element with the welcome message
//
//     let Loggerr: {
//         isLoggedIn: boolean;
//         user: { name: string}
//     };
//
//     let UIHelperr = {};
//
//     beforeEach( () => {
//         Loggerr = {
//             isLoggedIn: true,
//             user: { name: 'Test User'}
//         };
//
//         UIHelperr = {};
//         addProviders([Http,   Logger, UIHelper]);
//     });
//
//     it('should inject dc component', inject([DocumentConverter], (app) => {
//         expect(app.physicalTopologyName).toBe("PrognetTopology");
//     }));
// });