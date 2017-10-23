/**
 * Created by yildirayme on 21.09.2017.
 */
import 'reflect-metadata';
import {Injectable, Injector} from "@angular/core";
import {Http, Headers, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {Utils} from "./Utils";
import {SessionManager} from "./SessionManager";
// import {AUTHORIZATION_MODE, UserInfo} from "app/modules/AuthenticationManager";

describe("SessionManager Test Suite", () => {
    let sessionManager : SessionManager;

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [] //WARN Do not specify singleton providers here, user test.ts file
        });
        sessionManager = TestBed.get(SessionManager);
        sessionManager.clear();
    });

    afterAll(() => {
        TestBed.resetTestingModule();
    });

    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
        sessionManager.clear();
    });

    it('setItem & getItem should work',()=>{
        sessionManager.setItem('TEST_KEY_1',"TEST_VALUE_1",false);
        sessionManager.setItem('TEST_KEY_2',"TEST_VALUE_2",false);

        expect(sessionManager.getItem("TEST_KEY_1",null,false)).toBe("TEST_VALUE_1","Key 'TEST_KEY_1' should return 'TEST_VALUE_1'");
        expect(sessionManager.getItem("TEST_KEY_2", null,false)).toBe("TEST_VALUE_2","Key 'TEST_KEY_2' should return 'TEST_VALUE_2'");

        let testObject3 = { value : "TEST_VALUE_3"};
        let testObject4 = { value : "TEST_VALUE_4"};
        sessionManager.setItem('TEST_KEY_3',testObject3,false);
        sessionManager.setItem('TEST_KEY_4',testObject4,false);

        expect(sessionManager.getItem("TEST_KEY_3",null,false)).toEqual(testObject3,"Key 'TEST_KEY_3' should return 'TEST_VALUE_3' object");
        expect(sessionManager.getItem("TEST_KEY_4",null,false)).toEqual(testObject4,"Key 'TEST_KEY_4' should return 'TEST_VALUE_4' object");

        sessionManager.removeItem('TEST_KEY_1');
        sessionManager.removeItem('TEST_KEY_2');
        sessionManager.removeItem('TEST_KEY_3');
        sessionManager.removeItem('TEST_KEY_4');

        expect(sessionManager.getItem("TEST_KEY_1",null,false)).toBeNull("Key 'TEST_KEY_1' should be removed.");
        expect(sessionManager.getItem("TEST_KEY_2",null,false)).toBeNull("Key 'TEST_KEY_2' should be removed.");
        expect(sessionManager.getItem("TEST_KEY_3",null,false)).toBeNull("Key 'TEST_KEY_3' should be removed.");
        expect(sessionManager.getItem("TEST_KEY_4",null,false)).toBeNull("Key 'TEST_KEY_3' should be removed.");

    });

    it('setItem & getItem should work with encyption',()=>{
        sessionManager.setItem('TEST_KEY_1',"TEST_VALUE_1");
        sessionManager.setItem('TEST_KEY_2',"TEST_VALUE_2");

        expect(sessionManager.getItem("TEST_KEY_1")).toBe("TEST_VALUE_1","Key 'TEST_KEY_1' should return 'TEST_VALUE_1'");
        expect(sessionManager.getItem("TEST_KEY_2")).toBe("TEST_VALUE_2","Key 'TEST_KEY_2' should return 'TEST_VALUE_2'");

        let testObject3 = { value : "TEST_VALUE_3"};
        let testObject4 = { value : "TEST_VALUE_3"};
        sessionManager.setItem('TEST_KEY_3',testObject3);
        sessionManager.setItem('TEST_KEY_4',testObject4);

        expect(sessionManager.getItem("TEST_KEY_3")).toEqual(testObject3,"Key 'TEST_KEY_3' should return 'TEST_VALUE_3' object");
        expect(sessionManager.getItem("TEST_KEY_4")).toEqual(testObject4,"Key 'TEST_KEY_4' should return 'TEST_VALUE_3' object");

        sessionManager.removeItem('TEST_KEY_1');
        sessionManager.removeItem('TEST_KEY_2');
        sessionManager.removeItem('TEST_KEY_3');
        sessionManager.removeItem('TEST_KEY_4');

        expect(sessionManager.getItem("TEST_KEY_1")).toBeUndefined("Key 'TEST_KEY_1' should be removed.");
        expect(sessionManager.getItem("TEST_KEY_2")).toBeUndefined("Key 'TEST_KEY_2' should be removed.");
        expect(sessionManager.getItem("TEST_KEY_3")).toBeUndefined("Key 'TEST_KEY_3' should be removed.");
        expect(sessionManager.getItem("TEST_KEY_4")).toBeUndefined("Key 'TEST_KEY_3' should be removed.");

        expect(sessionManager.getItem("TEST_KEY_1",null)).toBeNull("Key 'TEST_KEY_1' should be removed.");
        expect(sessionManager.getItem("TEST_KEY_2",null)).toBeNull("Key 'TEST_KEY_2' should be removed.");
        expect(sessionManager.getItem("TEST_KEY_3",null)).toBeNull("Key 'TEST_KEY_3' should be removed.");
        expect(sessionManager.getItem("TEST_KEY_4",null)).toBeNull("Key 'TEST_KEY_3' should be removed.");


    });


    it('parseSettings() empty settings should be accepted',()=>{
        sessionManager.parseSettings(null);
        expect(sessionManager.webSocketId).toBeUndefined("'webSockerId' must be undefined");
        expect(sessionManager.sessionTimeout).toBe(SessionManager.DEFAULT_SESSION_TIMEOUT,"'sessionTimeout' must be "+SessionManager.DEFAULT_SESSION_TIMEOUT);
        expect(sessionManager.isLdapEnabled).toBe(false,"'isLdapEnabled' must be False");
    });

    it('parseSettings() full settings should be correctly parsed',()=>{
        let settings:any = {
            webSocketId : "WEBSOCKETID",
            sessionTimeout : 10000,
            isLdapEnabled : true
        };
        sessionManager.parseSettings(settings);
        expect(sessionManager.webSocketId).toBe(settings.webSocketId,"1- 'webSockerId' must be "+settings.webSocketId);
        expect(sessionManager.sessionTimeout).toBe(settings.sessionTimeout,"1- 'sessionTimeout' must be "+settings.sessionTimeout);
        expect(sessionManager.isLdapEnabled).toBe(settings.isLdapEnabled,"1- 'isLdapEnabled' must be "+settings.isLdapEnabled);

        settings.isLdapEnabled = false;
        sessionManager.parseSettings(settings);
        expect(sessionManager.isLdapEnabled).toBe(settings.isLdapEnabled,"2- 'isLdapEnabled' must be "+settings.isLdapEnabled);

        settings.isLdapEnabled = "true";
        sessionManager.parseSettings(settings);
        expect(sessionManager.isLdapEnabled).toBe(true,"3- 'isLdapEnabled' must be true");

        settings.isLdapEnabled = "false";
        sessionManager.parseSettings(settings);
        expect(sessionManager.isLdapEnabled).toBe(false,"4- 'isLdapEnabled' must be false");

        settings.isLdapEnabled = "GarbaGe";
        sessionManager.parseSettings(settings);
        expect(sessionManager.isLdapEnabled).toBe(false,"5- 'isLdapEnabled' must be false");

        delete settings.isLdapEnabled;
        sessionManager.parseSettings(settings);
        expect(sessionManager.isLdapEnabled).toBe(false,"6- 'isLdapEnabled' must be False");

    });

    it('sessionTimeout property should work properly',()=>{
        let TEST_VALUE = Math.round(1000* Math.random());
        sessionManager.sessionTimeout = TEST_VALUE;
        expect(sessionManager.sessionTimeout).toEqual(TEST_VALUE ,'sessionTimeout should be '+TEST_VALUE);
    });

    it('webSocketId property should work properly',()=>{
        let TEST_VALUE = "NEW_WEBSOCKET_ID";
        sessionManager.webSocketId = TEST_VALUE;
        expect(sessionManager.webSocketId).toEqual(TEST_VALUE ,'webSocketId should be '+TEST_VALUE);
    });

    it('isLdapEnabled property should work properly',()=>{
        let TEST_VALUE = false;
        sessionManager.isLdapEnabled = TEST_VALUE;
        expect(sessionManager.isLdapEnabled).toEqual(TEST_VALUE ,'isLdapEnabled should be '+TEST_VALUE);
        TEST_VALUE = true;
        sessionManager.isLdapEnabled = TEST_VALUE;
        expect(sessionManager.isLdapEnabled).toEqual(TEST_VALUE ,'isLdapEnabled should be '+TEST_VALUE);
    });

    it('language property should work properly',()=>{
        let TEST_VALUE = "tr";
        sessionManager.language = TEST_VALUE;
        expect(sessionManager.language).toEqual(TEST_VALUE ,'language should be '+TEST_VALUE);
    });

    it('serverData property should work properly',()=>{
        let TEST_VALUE = {
            value1: "sdfsdf",
            value2: Math.random(),
            value3: true,
            value4: "false"
        };
        sessionManager.serverData = TEST_VALUE;
        expect(sessionManager.serverData).toEqual(TEST_VALUE ,'serverData should be '+TEST_VALUE);
    });

    it('currentUser property should work properly',()=>{
        let TEST_VALUE:any = {
            authorizationMode : "ADMIN",//AUTHORIZATION_MODE.ADMIN,
            userDTO : {
                username : "osman",
                name: "Osman"
            }
        };
        sessionManager.currentUser = TEST_VALUE;
        expect(sessionManager.currentUser).toEqual(TEST_VALUE ,'currentUser should be '+TEST_VALUE);
    });

});

