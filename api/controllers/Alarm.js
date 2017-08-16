'use strict';

var url = require('url');


var Alarm = require('./AlarmService');


module.exports.alarmDefinitionGetPOST = function alarmDefinitionGetPOST (req, res, next) {
  Alarm.alarmDefinitionGetPOST(req.swagger.params, res, next);
};

module.exports.alarmDefinitionListPOST = function alarmDefinitionListPOST (req, res, next) {
  Alarm.alarmDefinitionListPOST(req.swagger.params, res, next);
};

module.exports.alarmDefinitionUpdatePOST = function alarmDefinitionUpdatePOST (req, res, next) {
  Alarm.alarmDefinitionUpdatePOST(req.swagger.params, res, next);
};

module.exports.alarmEditPOST = function alarmEditPOST (req, res, next) {
  Alarm.alarmEditPOST(req.swagger.params, res, next);
};

module.exports.alarmGetPOST = function alarmGetPOST (req, res, next) {
  Alarm.alarmGetPOST(req.swagger.params, res, next);
};

module.exports.alarmListPOST = function alarmListPOST (req, res, next) {
  Alarm.alarmListPOST(req.swagger.params, res, next);
};

module.exports.alarmLogGetPOST = function alarmLogGetPOST (req, res, next) {
  Alarm.alarmLogGetPOST(req.swagger.params, res, next);
};

module.exports.alarmLogListPOST = function alarmLogListPOST (req, res, next) {
  Alarm.alarmLogListPOST(req.swagger.params, res, next);
};

module.exports.alarmLogSearchPOST = function alarmLogSearchPOST (req, res, next) {
  Alarm.alarmLogSearchPOST(req.swagger.params, res, next);
};

module.exports.alarmNotificationDeletePOST = function alarmNotificationDeletePOST (req, res, next) {
  Alarm.alarmNotificationDeletePOST(req.swagger.params, res, next);
};

module.exports.alarmNotificationGetPOST = function alarmNotificationGetPOST (req, res, next) {
  Alarm.alarmNotificationGetPOST(req.swagger.params, res, next);
};

module.exports.alarmNotificationListPOST = function alarmNotificationListPOST (req, res, next) {
  Alarm.alarmNotificationListPOST(req.swagger.params, res, next);
};

module.exports.alarmNotificationSavePOST = function alarmNotificationSavePOST (req, res, next) {
  Alarm.alarmNotificationSavePOST(req.swagger.params, res, next);
};

module.exports.alarmSearchPOST = function alarmSearchPOST (req, res, next) {
  Alarm.alarmSearchPOST(req.swagger.params, res, next);
};
