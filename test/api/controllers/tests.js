
// https://github.com/shouldjs/should.js
var should          = require('should');
// https://github.com/visionmedia/supertest
var request         = require('supertest');

var main            = require('../../../main');

// SHOULD API DOCS
// http://shouldjs.github.io/

describe('controllers', function() {
    describe('saveLog', function() {
        describe('POST ' + main.get_base_path() + '/log/save', function() {
            it('should return a JSON response', function(done) {
                var log = {
                    "token": {
                        "requestId": "R1",
                        "timestamp": "2016-03-24T09:39:50.123Z"
                    },
                    "etag": "E1",
                    "digest": "D1",
                    "data": {
                        "id": "1",
                        "version": 2,
                        "revision": 3,
                        "timestamp": "2016-03-24T09:39:50.123Z",
                        "level": "OFF",
                        "message": "hello world",
                        "extras": {}
                    }
                };

                request(main.app)
                    .post(main.get_base_path() + '/log/save')
                    .send(log)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);

                        //res.body.should.have.property('token').property('requestId', 'R1');
                        //res.body.should.have.property('token').property('timestamp', '2016-03-24T09:39:50.123Z');
                        //res.body.should.have.property('etag', 'E1');
                        //res.body.should.have.property('digest', 'D1');
                        res.body.should.have.property('status', 'SUCCESS');
                        res.body.should.have.property('data');

                        done();
                    });
            });
        });
    });

    describe('saveLogList', function() {
        describe('POST ' + main.get_base_path() + '/log/saveList', function() {
            it('should return a JSON response', function(done) {
                var logs = {
                    "token": {
                        "requestId": "R2",
                        "timestamp": "2016-03-24T10:40:51.456Z"
                    },
                    "etag": "E2",
                    "digest": "D2",
                    "data": [
                        {
                            "id": "2",
                            "version": 3,
                            "revision": 4,
                            "timestamp": "2016-03-24T10:40:51.456Z",
                            "level": "OFF",
                            "message": "ODL",
                            "extras": {}
                        },
                        {
                            "id": "3",
                            "version": 5,
                            "revision": 6,
                            "timestamp": "2016-03-24T10:40:51.456Z",
                            "level": "OFF",
                            "message": "ONOS",
                            "extras": {}
                        }
                    ]
                };

                request(main.app)
                    .post(main.get_base_path() + '/log/saveList')
                    .send(logs)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);

                        //res.body.should.have.property('token').property('requestId', 'R2');
                        //res.body.should.have.property('token').property('timestamp', '2016-03-24T10:40:51.456Z');
                        //res.body.should.have.property('etag', 'E2');
                        //res.body.should.have.property('digest', 'D2');
                        res.body.should.have.property('status', 'SUCCESS');
                        res.body.should.have.property('data');

                        done();
                    });
            });
        });
    });

    describe('/topology/get', function() {
        describe('POST ' + main.get_base_path() + '/topology/get', function() {
            it('should return a JSON response', function(done) {
                var topo = {
                    "token": {
                        "requestId": "R3",
                        "timestamp": "2016-03-24T13:15:59.789Z"
                    },
                    "etag": "E3",
                    "digest": "D3",
                    "options": {
                        "id": "4",
                        "version": 7,
                        "revision": 8,
                        "timestamp": "2016-03-24T13:15:59.789Z",
                        "type": "PHYSICAL"
                    }
                };

                request(main.app)
                    .post(main.get_base_path() + '/topology/get')
                    .send(topo)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);

                        //res.body.should.have.property('token').property('requestId', 'R3');
                        //res.body.should.have.property('token').property('timestamp', '2016-03-24T13:15:59.789Z');
                        //res.body.should.have.property('etag', 'E3');
                        //res.body.should.have.property('digest', 'D3');
                        res.body.should.have.property('status', 'SUCCESS');
                        res.body.should.have.property('data');

                        done();
                    });
            });
        });
    });

    describe('rmq-test', function() {
        describe('POST /rmq-test', function() {
            it('should return a PLAIN TEXT response', function(done) {
                var topo = {
                    "token": {
                        "requestId": "R4",
                        "timestamp": "2016-04-05T06:46:26.798Z"
                    },
                    "etag": "E4",
                    "digest": "D4",
                    "options": {
                        "id": "",
                        "version": 1,
                        "revision": 1,
                        "timestamp": "2016-04-05T06:46:26.798Z",
                        "type": "PHYSICAL"
                    }
                };

                request(main.app)
                    .post('/rmq-test')
                    .send(topo)
                    .set('Content-Type', 'application/json')
                    .expect('Content-Type', /plain/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);

                        should.equal(res.text, 'message published');

                        done();
                    });
            });
        });
    });
});
