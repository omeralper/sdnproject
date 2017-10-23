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

export enum TESTENUM {
    KEY1 = <any>'KEY1',
    KEY2 = <any>'KEY2'
}

export enum TESTENUM2 {
    KEY1,
    KEY2
}

export enum TESTENUM3 {
    KEY1 = 1,
    KEY2 = 2
}

export enum TESTENUM4 {
    KEY1 = <any>'1',
    KEY2 = <any>'2'
}

export enum TESTENUM5 {
    KEY1,
    KEY2 = KEY1
}
fdescribe("ApiHelper Test Suite", () => {

    beforeAll(() => {
    });

    afterAll(() => {
        TestBed.resetTestingModule();
    });

    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it('getNamesAndValues(TESTENUM)', () => {
        let expectedResult = [
            { name: 'KEY1', value: 'KEY1' },
            { name: 'KEY2', value: 'KEY2' },
        ];
        let getNamesAndValues = EnumHelper.getNamesAndValues(TESTENUM);
        expect(getNamesAndValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getNames(TESTENUM)', () => {
        let expectedResult = ['KEY1','KEY2'];
        let getNames = EnumHelper.getNames(TESTENUM);
        expect(getNames).toEqual(expectedResult, "Return wrong values");
    });

    it('getValues(TESTENUM)', () => {
        let expectedResult = [];
        let getValues = EnumHelper.getValues(TESTENUM);
        expect(getValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getObjValues(TESTENUM)', () => {
        let expectedResult = ['KEY1','KEY2'];
        let getObjValues = EnumHelper.getObjValues(TESTENUM);
        expect(getObjValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getNamesAndValues(TESTENUM2)', () => {
        let expectedResult = [
            { name: 'KEY1', value: 0 },
            { name: 'KEY2', value: 1 },
        ];
        let getNamesAndValues = EnumHelper.getNamesAndValues(TESTENUM2);
        expect(getNamesAndValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getNames(TESTENUM2)', () => {
        let expectedResult = ['KEY1','KEY2'];
        let getNames = EnumHelper.getNames(TESTENUM2);
        expect(getNames).toEqual(expectedResult, "Return wrong values");
    });

    it('getValues(TESTENUM2)', () => {
        let expectedResult = [0, 1];
        let getValues = EnumHelper.getValues(TESTENUM2);
        expect(getValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getObjValues(TESTENUM2)', () => {
        let expectedResult = ['KEY1','KEY2', 0, 1];
        let getObjValues = EnumHelper.getObjValues(TESTENUM2);
        expect(getObjValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getNamesAndValues(TESTENUM3)', () => {
        let expectedResult = [
            { name: 'KEY1', value: 1 },
            { name: 'KEY2', value: 2 },
        ];
        let getNamesAndValues = EnumHelper.getNamesAndValues(TESTENUM3);
        expect(getNamesAndValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getNames(TESTENUM3)', () => {
        let expectedResult = ['KEY1','KEY2'];
        let getNames = EnumHelper.getNames(TESTENUM3);
        expect(getNames).toEqual(expectedResult, "Return wrong values");
    });

    it('getValues(TESTENUM3)', () => {
        let expectedResult = [1, 2];
        let getValues = EnumHelper.getValues(TESTENUM3);
        expect(getValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getObjValues(TESTENUM3)', () => {
        let expectedResult = ['KEY1','KEY2', 1, 2];
        let getObjValues = EnumHelper.getObjValues(TESTENUM3);
        expect(getObjValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getNamesAndValues(TESTENUM4)', () => {
        let expectedResult = [
            { name: 'KEY1', value: '1'},
            { name: 'KEY2', value: '2'},
            { name: '1', value: 'KEY1'},
            { name: '2', value: 'KEY2'},
        ];
        let getNamesAndValues = EnumHelper.getNamesAndValues(TESTENUM4);
        expect(getNamesAndValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getNames(TESTENUM4)', () => {
        let expectedResult = ['KEY1','KEY2', '1', '2'];
        let getNames = EnumHelper.getNames(TESTENUM4);
        expect(getNames).toEqual(expectedResult, "Return wrong values");
    });

    it('getValues(TESTENUM4)', () => {
        let expectedResult = [];
        let getValues = EnumHelper.getValues(TESTENUM4);
        expect(getValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getObjValues(TESTENUM4)', () => {
        let expectedResult = ['KEY1', 'KEY2', '1', '2'];
        let getObjValues = EnumHelper.getObjValues(TESTENUM4);
        expect(getObjValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getNamesAndValues(TESTENUM5)', () => {
        let expectedResult = [
            { name: 'KEY2', value: 0}
        ];
        let getNamesAndValues = EnumHelper.getNamesAndValues(TESTENUM5);
        expect(getNamesAndValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getNames(TESTENUM5)', () => {
        let expectedResult = ['KEY2'];
        let getNames = EnumHelper.getNames(TESTENUM5);
        expect(getNames).toEqual(expectedResult, "Return wrong values");
    });

    it('getValues(TESTENUM5)', () => {
        let expectedResult = [0, 0];
        let getValues = EnumHelper.getValues(TESTENUM5);
        expect(getValues).toEqual(expectedResult, "Return wrong values");
    });

    it('getObjValues(TESTENUM5)', () => {
        let expectedResult = ['KEY2', 0, 0];
        let getObjValues = EnumHelper.getObjValues(TESTENUM5);
        expect(getObjValues).toEqual(expectedResult, "Return wrong values");
    });
});


