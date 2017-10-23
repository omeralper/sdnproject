// // /**
// //  * Created by ekinca on 11.11.2016.
// //  */
// import {
//     inject,
//     addProviders
// } from '@angular/core/testing';
// import {Http,   Headers, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
//
// import {DocumentConverter} from "../modules/DocumentConverter";
// import {Injectable,Injector} from "@angular/core";
// import {UIHelper} from "../modules/UIHelper";
// import {Logger} from "../modules/Logger";
// import {HOSTTYPE} from "../swagger/HOSTTYPE";
// import {ApiHelper} from "../modules/ApiHelper";
// import {LogApi} from "../swagger/LogApi";
// import {mockAllTopoData, mockAllTopoDataConvertReturn} from "./mockTopologyData";
//
// @Injectable()
// export class mockUIHelperr extends UIHelper{
//     constructor(injector: Injector){
//         super(injector);
//     }
// }
//
// let mockTopoConvertResponse = {};
//
// let mockLog = {
//     isHost: function(){
//         return true;
//     },
//
//     debug: function(logMsg: any, ...optionalParams: any[]){
//         console.log(logMsg, optionalParams);
//     }
// };
//
// let mockUIHelper = {
//     h:1
// };
//
// let topoData = {};
//
// describe('main app component', () => {
//     beforeEach(() => {
//         addProviders([ { provide: Logger, useValue: mockLog}, {provide: UIHelper, useValue: mockUIHelper}, DocumentConverter ]);
//     });
//
//     it('convert done right?', inject([DocumentConverter], (dc) => {
//         topoData = dc.convert(mockAllTopoData.data);
//         expect(topoData).toBe(mockAllTopoDataConvertReturn);
//     }));
//
//     it('convert done not wrong?', inject([DocumentConverter], (dc) => {
//         expect(dc.convert(mockAllTopoData.data)).not.toBe("1");
//     }));
//
//     it('isHost(HOSTTYPE.COMPUTER) true?', inject([DocumentConverter], (dc) => {
//         expect(dc.isHost(HOSTTYPE.COMPUTER)).toBe(true);
//     }));
//
//     it('isHost(HOSTTYPE.COMPUTER) not wrong?', inject([DocumentConverter], (dc) => {
//         expect(dc.isHost(HOSTTYPE.COMPUTER)).not.toBe(1);
//     }));
//
//
// });