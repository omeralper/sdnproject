'use strict';

var url = require('url');


var NFV = require('./NFVService');


module.exports.nsdDeletePOST = function nsdDeletePOST (req, res, next) {
  NFV.nsdDeletePOST(req.swagger.params, res, next);
};

module.exports.nsdGetPOST = function nsdGetPOST (req, res, next) {
  NFV.nsdGetPOST(req.swagger.params, res, next);
};

module.exports.nsdListPOST = function nsdListPOST (req, res, next) {
  NFV.nsdListPOST(req.swagger.params, res, next);
};

module.exports.nsdSavePOST = function nsdSavePOST (req, res, next) {
  NFV.nsdSavePOST(req.swagger.params, res, next);
};

module.exports.nsrDeletePOST = function nsrDeletePOST (req, res, next) {
  NFV.nsrDeletePOST(req.swagger.params, res, next);
};

module.exports.nsrGetPOST = function nsrGetPOST (req, res, next) {
  NFV.nsrGetPOST(req.swagger.params, res, next);
};

module.exports.nsrListPOST = function nsrListPOST (req, res, next) {
  NFV.nsrListPOST(req.swagger.params, res, next);
};

module.exports.nsrSavePOST = function nsrSavePOST (req, res, next) {
  NFV.nsrSavePOST(req.swagger.params, res, next);
};

module.exports.nsrUpdatePOST = function nsrUpdatePOST (req, res, next) {
  NFV.nsrUpdatePOST(req.swagger.params, res, next);
};

module.exports.vimComputeHostGetByIpPOST = function vimComputeHostGetByIpPOST (req, res, next) {
  NFV.vimComputeHostGetByIpPOST(req.swagger.params, res, next);
};

module.exports.vimComputeHostGetStatisticPOST = function vimComputeHostGetStatisticPOST (req, res, next) {
  NFV.vimComputeHostGetStatisticPOST(req.swagger.params, res, next);
};

module.exports.vimComputeHostListPOST = function vimComputeHostListPOST (req, res, next) {
  NFV.vimComputeHostListPOST(req.swagger.params, res, next);
};

module.exports.vimGetAllComputeHostStatisticPOST = function vimGetAllComputeHostStatisticPOST (req, res, next) {
  NFV.vimGetAllComputeHostStatisticPOST(req.swagger.params, res, next);
};

module.exports.vimListPOST = function vimListPOST (req, res, next) {
  NFV.vimListPOST(req.swagger.params, res, next);
};

module.exports.vimVmRestartPOST = function vimVmRestartPOST (req, res, next) {
  NFV.vimVmRestartPOST(req.swagger.params, res, next);
};

module.exports.vimVmStartPOST = function vimVmStartPOST (req, res, next) {
  NFV.vimVmStartPOST(req.swagger.params, res, next);
};

module.exports.vimVmStatusInfoPOST = function vimVmStatusInfoPOST (req, res, next) {
  NFV.vimVmStatusInfoPOST(req.swagger.params, res, next);
};

module.exports.vimVmStopPOST = function vimVmStopPOST (req, res, next) {
  NFV.vimVmStopPOST(req.swagger.params, res, next);
};

module.exports.vimZoneGetByIpPOST = function vimZoneGetByIpPOST (req, res, next) {
  NFV.vimZoneGetByIpPOST(req.swagger.params, res, next);
};

module.exports.vimZoneGetByNamePOST = function vimZoneGetByNamePOST (req, res, next) {
  NFV.vimZoneGetByNamePOST(req.swagger.params, res, next);
};

module.exports.vimZoneListPOST = function vimZoneListPOST (req, res, next) {
  NFV.vimZoneListPOST(req.swagger.params, res, next);
};

module.exports.vnfDeletePOST = function vnfDeletePOST (req, res, next) {
  NFV.vnfDeletePOST(req.swagger.params, res, next);
};

module.exports.vnfDeregisterVnfFailOverPOST = function vnfDeregisterVnfFailOverPOST (req, res, next) {
  NFV.vnfDeregisterVnfFailOverPOST(req.swagger.params, res, next);
};

module.exports.vnfGetPOST = function vnfGetPOST (req, res, next) {
  NFV.vnfGetPOST(req.swagger.params, res, next);
};

module.exports.vnfListPOST = function vnfListPOST (req, res, next) {
  NFV.vnfListPOST(req.swagger.params, res, next);
};

module.exports.vnfRegisterVnfFailOverPOST = function vnfRegisterVnfFailOverPOST (req, res, next) {
  NFV.vnfRegisterVnfFailOverPOST(req.swagger.params, res, next);
};

module.exports.vnfRemoveVnfPOST = function vnfRemoveVnfPOST (req, res, next) {
  NFV.vnfRemoveVnfPOST(req.swagger.params, res, next);
};

module.exports.vnfSavePOST = function vnfSavePOST (req, res, next) {
  NFV.vnfSavePOST(req.swagger.params, res, next);
};

module.exports.vnfSearchVnfInstanceInfoPOST = function vnfSearchVnfInstanceInfoPOST (req, res, next) {
  NFV.vnfSearchVnfInstanceInfoPOST(req.swagger.params, res, next);
};

module.exports.vnfStartVnfPOST = function vnfStartVnfPOST (req, res, next) {
  NFV.vnfStartVnfPOST(req.swagger.params, res, next);
};

module.exports.vnfUpdatePOST = function vnfUpdatePOST (req, res, next) {
  NFV.vnfUpdatePOST(req.swagger.params, res, next);
};

module.exports.vnfVnfciStartByIpPOST = function vnfVnfciStartByIpPOST (req, res, next) {
  NFV.vnfVnfciStartByIpPOST(req.swagger.params, res, next);
};

module.exports.vnfVnfciStartPOST = function vnfVnfciStartPOST (req, res, next) {
  NFV.vnfVnfciStartPOST(req.swagger.params, res, next);
};

module.exports.vnfVnfciStopByIpPOST = function vnfVnfciStopByIpPOST (req, res, next) {
  NFV.vnfVnfciStopByIpPOST(req.swagger.params, res, next);
};

module.exports.vnfVnfciStopPOST = function vnfVnfciStopPOST (req, res, next) {
  NFV.vnfVnfciStopPOST(req.swagger.params, res, next);
};
