/**
 * Created by yildirayme on 21.09.2017.
 */
import 'reflect-metadata';
import {Injectable, Injector} from "@angular/core";
import {Http, Headers, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {EnumHelper} from "./EnumHelper";
import {Action} from "./Action";

fdescribe("Action Test Suite", () => {

    beforeAll(() => {
    });

    afterAll(() => {
    });

    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    let setUpTranslator = (value) => {
        let data = value;//create a closure here
        $.t = () => {
            return data;
        }
    };

    let checkAction = (action:Action,values) => {
        for(let key in values){
            if (is.existy(values[key])) {
                expect(action[key]).toBeDefined(key + ' value is undefined');
                expect(action[key]).toEqual(values[key], key + ' value is wrong');
            } else {
                expect(action[key]).toBeUndefined(key + ' value should be undefined');
            }
        }
    };

    it('Action(ID_STRING) object i18n result', () => {
        let translation = {
            title:'Action #1',
            title_short:'Act#1',
            icon:'Icon #1',
            color:'Color #1',
            perm:'Perm #1',
            states:['State #1'],
            isDropdown:true
        };
        setUpTranslator(translation);
        let action = new Action('test');
        checkAction(action,translation);
        checkAction(action,{
            id: 'test',
            subActions: null,
            index: null,
            callback : null
        });
    });

    it('Action(ID_STRING) object i18n with callback', () => {
        let translation = {
            title:'Action #1',
            title_short:'Act#1',
            icon:'Icon #1',
            color:'Color #1',
            perm:'Perm #1',
            states:['State #1'],
            isDropdown:true
        };
        setUpTranslator(translation);
        let callback = ()=> { console.log('dummy')};
        let action = new Action('test',callback);
        checkAction(action,translation);
        checkAction(action,{
            id: 'test',
            subActions: null,
            index: null,
            callback : callback
        });
    });


    it('Action(ID_STRING) object i18n with subActions', () => {
        let translation = {
            title:'Action #1',
            title_short:'Act#1',
            icon:'Icon #1',
            color:'Color #1',
            perm:'Perm #1',
            states:['State #1'],
            isDropdown:true
        };
        setUpTranslator(translation);
        let subActions = ['SubAction1','SubAction2'];
        let action = new Action('test',<any>subActions);
        checkAction(action,translation);
        checkAction(action,{
            id: 'test',
            subActions: subActions,
            index: null,
            callback : null
        });
    });

    it('Action(object)', () => {
        let config = {
            id: 'Action ID',
            title:'Action #1',
            title_short:'Act#1',
            icon:'Icon #1',
            color:'Color #1',
            perm:'Perm #1',
            states:['State #1'],
            isDropdown:true
        };
        let action = new Action(config);
        checkAction(action,config);
        checkAction(action,{
            subActions: null,
            index: null,
            callback : null
        });
    });

    it('Action(object) with callback', () => {
        let config = {
            id: 'Action ID',
            title:'Action #1',
            title_short:'Act#1',
            icon:'Icon #1',
            color:'Color #1',
            perm:'Perm #1',
            states:['State #1'],
            isDropdown:true
        };
        let callback = ()=> { console.log('dummy')};
        let action = new Action(config,callback);
        checkAction(action,config);
        checkAction(action,{
            subActions: null,
            index: null,
            callback : callback
        });
    });

    it('Action(object) with subActions', () => {
        let config = {
            id: 'Action ID',
            title:'Action #1',
            title_short:'Act#1',
            icon:'Icon #1',
            color:'Color #1',
            perm:'Perm #1',
            states:['State #1'],
            isDropdown:true
        };
        let subActions = ['SubAction1','SubAction2'];
        let action = new Action(config,<any>subActions);
        checkAction(action,config);
        checkAction(action,{
            subActions: subActions,
            index: null,
            callback : null
        });
    });

    it('Action.updateI18n()', ()=> {
        //TODO
    });

    it('Action.execute()', ()=> {
        //TODO
    });

});


