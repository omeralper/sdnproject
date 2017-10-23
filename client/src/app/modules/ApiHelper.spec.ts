/**
 * Created by yildirayme on 21.09.2017.
 */
import 'reflect-metadata';
import {Injectable, Injector} from "@angular/core";
import {Http, Headers, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ApiHelper} from "./ApiHelper";

describe("ApiHelper Test Suite", () => {
    let apiHelper: ApiHelper;

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [] //WARN Do not specify singleton providers here, user test.ts file
        });
        apiHelper = TestBed.get(ApiHelper);
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

    let checkRequestID = (requestID) => {
        expect(requestID).toBeDefined();
        expect(requestID).not.toBeNull();
        expect(requestID.length).toEqual(32, "RequestID lenght is not 32 characters");
        expect(requestID).toMatch(/(UI)[0-9a-f]{8}[0-9a-f]{4}[0-9a-f]{4}[0-9a-f]{4}[0-9a-f]{10}/, 'RequestID is not valid');
    };

    it('genRequestID()', () => {
        let requestID = apiHelper.genRequestID();
        checkRequestID(requestID);
    });

    let checkTimestamp = (timestamp, expectedTimestamp) => {
        expect(timestamp).toBeDefined();
        expect(timestamp).not.toBeNull();
        expect(timestamp).toEqual(expectedTimestamp, "No timestamp returned");
    };

    it('genSecurityToken()', () => {
        let currentTime = new Date();
        jasmine.clock().mockDate(currentTime);
        let timestamp = apiHelper.utils.genTimestamp();

        let securityToken = apiHelper.genSecurityToken();

        checkRequestID(securityToken.requestId);
        checkTimestamp(securityToken.timestamp, timestamp);
    });

    let checkDigest = (digest,digestValue) =>{
        expect(digest).not.toBeNull('digest field must NOT be null');
        expect(digest.length).toEqual(40, "digest field lenght is not 40 characters");
        expect(digest).toMatch(/[0-9a-f]{40}/, 'digest field format is not valid');
        expect(digest).toEqual(digestValue, 'digest value is not correct');

    };

    it('secureRequest()', () => {
        let request = {
            data1: "data1",
            data2: "data2",
            digest: null
        };

        expect(request.digest).toBeNull('digest field must be null');

        apiHelper.secureRequest(request);

        checkDigest(request.digest,'39dd6aa5b29994fdc29d1c88703e115be608e544');
    });

    let checkRequest = (request, timestamp) => {
        expect(request.token).toBeDefined('SecurityToken does not exists.');
        checkRequestID(request.token.requestId);
        checkTimestamp(request.token.timestamp, timestamp);
        expect(request.digest).toBeDefined('digest does not exists.');
    };

    it('genRequest()', () => {
        let currentTime = new Date();
        jasmine.clock().mockDate(currentTime);
        let timestamp = apiHelper.utils.genTimestamp();

        let dto = {
            data1:"data1",
            data2:"data2"
        };
        let request = apiHelper.genRequest(dto);

        checkRequest(request,timestamp);

        jasmine.clock().mockDate(new Date());
        timestamp = apiHelper.utils.genTimestamp();
        let customSecurityToken = apiHelper.genSecurityToken();
        request = apiHelper.genRequest(dto,customSecurityToken);

        checkRequest(request,timestamp);

    });

    it('genFullListRequest()', () => {
        let currentTime = new Date();
        jasmine.clock().mockDate(currentTime);
        let timestamp = apiHelper.utils.genTimestamp();

        let request = apiHelper.genFullListRequest();
        checkRequest(request,timestamp);
        expect(request.options).toBeDefined('options field is missing');
        expect(request.options.startPage).toEqual(0,"options.startPage is not '0'");
        expect(request.options.pageSize).toEqual(0,"options.pageSize is not '0'");
        expect(request.options.sortOptions).toBeUndefined("options.sortOptions is not 'Undefined'");
        expect(request.options.fields).toBeUndefined("options.fields is not 'Undefined'");

        let sortOptions = {
            fieldName : 'field1',
            isAscend : true
        };

        let fields = ['field1','field2'];

        request = apiHelper.genFullListRequest(sortOptions,fields);
        checkRequest(request,timestamp);
        expect(request.options).toBeDefined('options field is missing');
        expect(request.options.startPage).toEqual(0,"options.startPage is not '0'");
        expect(request.options.pageSize).toEqual(0,"options.pageSize is not '0'");
        expect(request.options.sortOptions).toBeDefined("options.sortOptions is 'Undefined'");
        expect(request.options.sortOptions).toEqual(sortOptions,"options.sortOptions is not correct object");
        expect(request.options.fields).toBeDefined("options.fields is 'Undefined'");
        expect(request.options.fields).toEqual(fields,"options.fields is not correct object");

    });

    it('genDTO()', () => {
        let currentTime = new Date();
        jasmine.clock().mockDate(currentTime);
        let timestamp = apiHelper.utils.genTimestamp();

        let dto = {
            data1:"data1",
            data2:2,
            nullField: null,
            undefinedField: undefined,
            falseField:false,
            emptyStringField:"",
        }

        let genDto = apiHelper.genDTO(dto);
        expect(genDto.version).toBeDefined('version field is missing');
        expect(genDto.version).toEqual(1,"version is not '1'");
        expect(genDto.revision).toBeDefined('revision field is missing');
        expect(genDto.revision).toEqual(1,"revision is not '1'");
        checkTimestamp(genDto.timestamp, timestamp);
        //expect(genDto).toEqual(dto,'DTO object is not equal');
        expect(genDto.nullField).toBeNull('genDto.nullField is not null');
        expect(genDto.undefinedField).toBeUndefined('genDto.undefinedField is not undefined');
        expect(genDto.falseField).toBe(false,'genDto.falseField is not false');
        expect(genDto.emptyStringField).toEqual('','genDto.emptyStringField is not empty string');

        jasmine.clock().mockDate(new Date());
        timestamp = apiHelper.utils.genTimestamp();
        genDto = apiHelper.genDTO(genDto,true);
        expect(genDto.version).toBeDefined('version field is missing');
        expect(genDto.version).toEqual(1,"version is not '1'");
        expect(genDto.revision).toBeDefined('revision field is missing');
        expect(genDto.revision).toEqual(2,"revision is not '2'");
        checkTimestamp(genDto.timestamp, timestamp);
        //expect(genDto).toEqual(dto,'DTO object is not equal');
        expect(genDto.hasOwnProperty("nullField")).toBe(false,'genDto.nullField is exists in the object');
        expect(genDto.hasOwnProperty("undefinedField")).toBe(false,'genDto.undefinedField is exists in the object');
        expect(genDto.hasOwnProperty("falseField")).toBe(true,'genDto.falseField is NOT exists in the object');
        expect(genDto.hasOwnProperty("emptyStringField")).toBe(true,'genDto.emptyStringField is NOT exists in the object');
    });

    it('copyObject()', () => {
        let sourceObj = {
            data1:"data1",
            data2:2,
            nullField: null,
            undefinedField: undefined,
            falseField:false,
            emptyStringField:"",
        };

        let targetObj:any = {};
        apiHelper.copyObject(targetObj,sourceObj);
        expect(targetObj).toBe(targetObj,"Target object is not same anymore");
        expect(targetObj).not.toBe(sourceObj,"Target object is Source object");
        expect(targetObj).toEqual(sourceObj,"Copied object is not identical to source");

        let targetData = "targetData";
        targetObj = {
            targetData : targetData,
            data2: 4
        };
        apiHelper.copyObject(targetObj,sourceObj);
        expect(targetObj).toBe(targetObj,"Target object is not same anymore");
        expect(targetObj).not.toBe(sourceObj,"Target object is Source object");
        expect(targetObj).not.toEqual(sourceObj,"Copied object is identical to source");
        expect(targetObj.targetData).toEqual(targetData,"TargetData is lost");

        $.each(sourceObj, (key, value) => {
            expect(targetObj[key]).toEqual(value,key +" value is not copied to target");
        });

    });

    it('cloneObject()', () => {
        let sourceObj:any = {
            data1:"data1",
            data2:2,
            nullField: null,
            falseField:false,
            emptyStringField:"",
        };

        let targetObj:any = apiHelper.cloneObject(sourceObj);
        expect(targetObj).not.toBe(sourceObj,"Target object is Source object");
        expect(targetObj).toEqual(sourceObj,"Cloned object is not identical to source");

        sourceObj = {
            data1:"data1",
            data2:2,
            nullField: null,
            undefinedField: undefined,
            falseField:false,
            emptyStringField:"",
        };
        let targetObj2:any = apiHelper.cloneObject(sourceObj);
        expect(targetObj2).not.toBe(sourceObj,"targetObj2 object is Source object");
        expect(targetObj2).not.toBe(targetObj,"targetObj2 object is targetObj object");
        expect(targetObj2).not.toEqual(sourceObj,"Cloned object is identical to source");
        expect(targetObj2.hasOwnProperty('undefinedField')).toBe(false,"undefinedField is not cloned");
    });

});


