'use strict';

var url = require('url');


var Config = require('./ConfigService');


module.exports.configConfigDefinitionDeletePOST = function configConfigDefinitionDeletePOST (req, res, next) {
  Config.configConfigDefinitionDeletePOST(req.swagger.params, res, next);
};

module.exports.configConfigDefinitionGetPOST = function configConfigDefinitionGetPOST (req, res, next) {
  Config.configConfigDefinitionGetPOST(req.swagger.params, res, next);
};

module.exports.configConfigDefinitionListPOST = function configConfigDefinitionListPOST (req, res, next) {
  Config.configConfigDefinitionListPOST(req.swagger.params, res, next);
};

module.exports.configConfigDefinitionSavePOST = function configConfigDefinitionSavePOST (req, res, next) {
  Config.configConfigDefinitionSavePOST(req.swagger.params, res, next);
};

module.exports.configModuleNodeConfigDeletePOST = function configModuleNodeConfigDeletePOST (req, res, next) {
  Config.configModuleNodeConfigDeletePOST(req.swagger.params, res, next);
};

module.exports.configModuleNodeConfigGetPOST = function configModuleNodeConfigGetPOST (req, res, next) {
  Config.configModuleNodeConfigGetPOST(req.swagger.params, res, next);
};

module.exports.configModuleNodeConfigListPOST = function configModuleNodeConfigListPOST (req, res, next) {
  Config.configModuleNodeConfigListPOST(req.swagger.params, res, next);
};

module.exports.configModuleNodeConfigSavePOST = function configModuleNodeConfigSavePOST (req, res, next) {
  Config.configModuleNodeConfigSavePOST(req.swagger.params, res, next);
};

module.exports.configModuleNodesListPOST = function configModuleNodesListPOST (req, res, next) {
  Config.configModuleNodesListPOST(req.swagger.params, res, next);
};
