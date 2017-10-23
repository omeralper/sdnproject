/**
 * Created by yildirayme on 26.04.2017.
 */
import 'reflect-metadata';
import {Injectable, Injector} from "@angular/core";
import {Http, Headers, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {Utils} from "./Utils";

declare var $;



describe("Utils Test Suite", () => {
    let utils: Utils;
    let test_string = "TEST_DATA";
    let test_object = {
        name: "test name",
        arr: [1, 3, 6],
        obj: {field1: 'field1', field2: 34}
    }

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [] //WARN Do not specify singleton providers here, user test.ts file
        });
        utils = TestBed.get(Utils);
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

    it('genUUID() should return valid UUID', () => {
        let uuid = utils.genUUID();
        expect(uuid).toBeDefined();
        expect(uuid).not.toBeNull();
        expect(uuid.length).toEqual(32, "UUID lenght is not 32 characters");
        expect(uuid).toMatch(/[0-9a-f]{8}[0-9a-f]{4}[0-9a-f]{4}[0-9a-f]{4}[0-9a-f]{12}/, 'UUID is not valid');
    });


    it('genTimestamp() should return valid Date', () => {
        let currentTime = new Date();
        jasmine.clock().mockDate(currentTime);
        let timestamp = utils.genTimestamp();
        expect(timestamp).toBeDefined();
        expect(timestamp).not.toBeNull();
        expect(timestamp).toEqual(currentTime, "No timestamp returned");
    });

    it('hmacSHA1() should return valid HMAC', () => {
        let hmac = utils.hmacSHA1(test_string);
        expect(hmac).toBeDefined();
        expect(hmac).not.toBeNull();
        expect(hmac).toEqual('0c6b53c95389597c70735758c0f86f810bd3e0aa', 'HMAC is not valid with default key');
        hmac = utils.hmacSHA1(test_string, "TEST_KEY");
        expect(hmac).toBeDefined();
        expect(hmac).not.toBeNull();
        expect(hmac).toEqual('7010c600b35bd230ca57a4b1d89da7ab48e351e5', 'HMAC is not valid with key "TEST_KEY"');
    });

    it('AESencrypt(string)<->AESdecrypt(string) should match', () => {
        let encrypted = utils.AESencrypt(test_string);
        expect(encrypted).toBeDefined();
        expect(encrypted).not.toBeNull();
        let decrypted = utils.AESdecrypt(encrypted);
        expect(decrypted).toBeDefined();
        expect(decrypted).not.toBeNull();
        expect(decrypted).toEqual(test_string, 'AESencrypt is not valid with default key');

        encrypted = utils.AESencrypt(test_string, "TEST_KEY");
        expect(encrypted).toBeDefined();
        expect(encrypted).not.toBeNull();
        decrypted = utils.AESdecrypt(encrypted, "TEST_KEY");
        expect(decrypted).toBeDefined();
        expect(decrypted).not.toBeNull();
        expect(decrypted).toEqual(test_string, 'AESencrypt is not valid with key "TEST_KEY"');
    });

    it('AESencrypt(object)<->AESdecrypt(object) should match', () => {
        let encrypted = utils.AESencrypt(test_object);
        expect(encrypted).toBeDefined();
        expect(encrypted).not.toBeNull();
        let decrypted = utils.AESdecrypt(encrypted);
        expect(decrypted).toBeDefined();
        expect(decrypted).not.toBeNull();
        expect(decrypted).toEqual(test_object, 'AESencrypt is not valid with default key');

        encrypted = utils.AESencrypt(test_object, "TEST_KEY");
        expect(encrypted).toBeDefined();
        expect(encrypted).not.toBeNull();
        decrypted = utils.AESdecrypt(encrypted, "TEST_KEY");
        expect(decrypted).toBeDefined();
        expect(decrypted).not.toBeNull();
        expect(decrypted).toEqual(test_object, 'AESencrypt is not valid with key "TEST_KEY"');

    });

    it('checkEmptyValues() should return non-null items.', () => {
        expect(utils.checkEmptyValues(null)).toBeNull();
        expect(utils.checkEmptyValues(undefined)).toBeNull('Undefined should return null');
        expect(utils.checkEmptyValues('null')).toBeNull('"null" should return null');
        expect(utils.checkEmptyValues('')).toEqual('');
        expect(utils.checkEmptyValues(0)).toEqual(0);
        expect(utils.checkEmptyValues([])).toEqual([]);
        expect(utils.checkEmptyValues([0, null, 2, 'null', 4, undefined, ''])).toEqual([0, 2, 4, '']);
        expect(utils.checkEmptyValues({
            a: 0,
            b: null,
            c: "c",
            d: "null",
            e: undefined,
            f: "",
            arr: [0, null, 2, 'null', 4, undefined, '']
        })).toEqual(
            {
                a: 0,
                c: "c",
                f: "",
                arr: [0, 2, 4, '']
            }
        );
    });

    it('optimizeDTO() should return DTO with missing required fields', () => {
        var baseTime = new Date("2017-04-26T00:00:00.000Z");
        jasmine.clock().mockDate(baseTime);

        let EnumDef = {
            meta: {
                className: 'enum',
                isObject: false,
                isEnum: true,
            },
            map: {
                E1: 0,
                E2: 1
            },
            toString: () => {
                return 'enum';
            }
        };

        let ObjectDef = {
            meta: {
                className: 'object1',
                isObject: true,
                isEnum: false,
            },
            fields: {
                opt_str: {type: 'string'},
                opt_date: {type: 'Date'},
                opt_num: {type: 'number'},
                opt_bool: {type: 'boolean'},
                opt_arr: {type: 'Array'},

                str: {type: 'string', required: true},
                date: {type: 'Date', required: true},
                num: {type: 'number', required: true},
                bool: {type: 'boolean', required: true},
                arr: {type: 'Array', required: true}
            },
            toString: () => {
                return 'object1';
            }
        };

        let dtoDef = {
            meta: {
                className: 'dto',
                isObject: true,
                isEnum: false,
            },
            fields: {
                opt_str: {type: 'string'},
                opt_date: {type: 'Date'},
                opt_num: {type: 'number'},
                opt_bool: {type: 'boolean'},
                opt_enm: {type: EnumDef},
                opt_obj: {type: ObjectDef},
                opt_arr: {type: 'Array'},

                str: {type: 'string', required: true},
                date: {type: 'Date', required: true},
                num: {type: 'number', required: true},
                bool: {type: 'boolean', required: true},
                enm: {type: EnumDef, required: true},
                obj: {type: ObjectDef, required: true},
                arr: {type: 'Array', required: true}
            },
            toString: () => {
                return 'dto';
            }
        };

        let expectedObject = {
            str: "",
            date: baseTime.toISOString(),
            num: -1,
            bool: false,
            enm: "E1",
            obj: {str: "", date: baseTime.toISOString(), num: -1, bool: false, arr: []},
            arr: []
        }

        let opt_object = {opt_str: "string", opt_num: 1};
        let opt_expectedObject = $.extend({}, expectedObject, opt_object);

        let optimizedObject = utils.optimizeDTO(dtoDef, {});
        expect(optimizedObject).toEqual(expectedObject, 'Required fields must be added');

        optimizedObject = utils.optimizeDTO(dtoDef, {ne: "1", ne2: 2});
        expect(optimizedObject).toEqual(expectedObject, 'Non existing fields must be removed');

        optimizedObject = utils.optimizeDTO(dtoDef, opt_object);
        expect(optimizedObject).toEqual(opt_expectedObject, 'Optional fields must be allowed');

        optimizedObject = utils.optimizeDTO(dtoDef, opt_object, {onlyRequriedFields: true});
        expect(optimizedObject).toEqual(expectedObject, 'Optional fields must be removed when "onlyRequriedFields" option is enabled');
    });

    it('uniqueArray() should return and Array with only unique values', () => {
        let nonUniqueArray = [1, 2, 3, 1, 2, 3];
        let expectedUniqueArray = [1, 2, 3];

        let unifiedArray = utils.uniqueArray(nonUniqueArray);
        expect(unifiedArray).toEqual(expectedUniqueArray, 'Only uniqued values must be returned');
    });

    it('sortedObjectKeysByValue() should return object Keys sorted according to their values', () => {
        let testObject = {
            "key1":"3",
            "key2":"2",
            "key3":"1",
        };
        let expectedKeysArray = ["key3","key2","key1"];

        let keysArray = utils.sortedObjectKeysByValue(testObject);
        expect(keysArray).toEqual(expectedKeysArray, 'Keys must be sorted according to values');
    });

    it('delayedExec() should execute the callback function after specified delay', () => {
        let callbackValue = false;
        utils.delayedExec('TestDelayedExec',2500,()=>{
           callbackValue = true;
        });
        expect(callbackValue).toBe(false, 'Function should not run immediatelty');
        jasmine.clock().tick(1000);
        expect(callbackValue).toBe(false, 'Function should not run after 1 sec');
        jasmine.clock().tick(1000);
        expect(callbackValue).toBe(false, 'Function should not run after 2 sec');
        jasmine.clock().tick(600);
        expect(callbackValue).toBe(true, 'Function must run after the delay');
    });

});

