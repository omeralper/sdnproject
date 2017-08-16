'use strict';

//Override Data File for PermDTO.js

exports.init = function (mockup_exports) {

    var mockup = require('../helpers/mockup');

    function genPerm(tag, name, isReal) {
        var dto = mockup.genDTO('PermDTO', {
            "id": tag + ":" + name,
            "name": name,
            "tag": tag,
            "status": isReal ? "ACTIVE" : mockup.genState("ACTIVE", "PASSIVE")
        });
        return dto;
    }

    var permData = [
        genPerm('common', 'print', true),
        genPerm('common', 'export_pdf', true),
        genPerm('common', 'export_excel', true),
        genPerm('common', 'view', true),
        genPerm('common', 'list', true),

        genPerm('users', 'list', true),
        genPerm('users', 'view', true),
        genPerm('users', 'edit', true),
        genPerm('users', 'delete', true),
        genPerm('users', 'create', true),
        genPerm('users', 'change_pwd', true),
        genPerm('users', 'set_pwd', true),
        genPerm('users', 'lost_pwd', true),
        genPerm('roles', 'list', true),
        genPerm('roles', 'view', true),
        genPerm('roles', 'edit', true),
        genPerm('roles', 'delete', true),
        genPerm('roles', 'create', true),
        genPerm('phy_topo', 'view', true),
        genPerm('phy_topo', 'edit', true),
        genPerm('vir_topo', 'list', true),
        genPerm('vir_topo', 'view', true),
        genPerm('vir_topo', 'edit', true),
        genPerm('vir_topo', 'create', true),
        genPerm('vir_topo', 'delete_request', true),
        genPerm('vir_topo', 'delete_approve', true),
        genPerm('vir_topo', 'create_request', true),
        genPerm('vir_topo', 'create_approve', true),
        genPerm('flows', 'delete', true),
        genPerm('flows', 'list', true),
        genPerm('paths', 'list', true),
        genPerm('paths', 'view', true),
        genPerm('paths', 'delete', true),
        genPerm('paths', 'create', true),
        genPerm('log', 'list', true),
        genPerm('log', 'edit', true),
        genPerm('version', 'list', true),
        genPerm('nacusers', 'list', true),
        genPerm('nacusers', 'view', true),
        genPerm('nacusers', 'edit', true),
        genPerm('nacusers', 'delete', true),
        genPerm('nacusers', 'create', true),
        genPerm('nacusers', 'change_pwd', true),
        genPerm('nacusers', 'set_pwd', true),
        genPerm('nacusers', 'lost_pwd', true),
        genPerm('nac_profiles', 'list', true),
        genPerm('nac_profiles', 'view', true),
        genPerm('nac_profiles', 'edit', true),
        genPerm('nac_profiles', 'delete', true),
        genPerm('nac_profiles', 'create', true),
        genPerm('nac_devices', 'list', true),
        genPerm('nac_devices', 'view', true),
        genPerm('nac_devices', 'edit', true),
        genPerm('nac_devices', 'delete', true),
        genPerm('nac_devices', 'create', true),
        genPerm('nac_access_ports', 'list', true),
        genPerm('nac_access_ports', 'view', true),
        genPerm('nac_access_ports', 'edit', true),
        genPerm('nac_access_ports', 'delete', true),
        genPerm('nac_access_ports', 'create', true),
        genPerm('switches', 'list', true),
        genPerm('switches', 'view', true),
        genPerm('switches', 'edit', true),
        genPerm('switches', 'delete', true),
        genPerm('switches', 'create', true),
        genPerm('links', 'list', true),
        genPerm('links', 'view', true),
        genPerm('links', 'edit', true),
        genPerm('links', 'delete', true),
        genPerm('links', 'create', true),
        genPerm('alarms', 'list', true),
        genPerm('alarms', 'view', true),
        genPerm('alarm_def', 'view', true),
        genPerm('alarm_def', 'edit', true),
        genPerm('alarm_def', 'list', true),
        genPerm('alarm_notif', 'view', true),
        genPerm('alarm_notif', 'edit', true),
        genPerm('alarm_notif', 'list', true),

        genPerm('alarm_logs', 'list', true),
        genPerm('alarm_logs', 'view', true),
        genPerm('vir_topo', 'suspend', true),
        genPerm('permissions', 'list', true),
        genPerm('tsdb_metric', 'list', true),
        genPerm('tsdb_metric', 'list_defs', true),
        genPerm('tsdb_metric', 'list_tags', true),
        genPerm('stats', 'list_switch_stats', true),
        genPerm('stats', 'list_port_stats', true),
        genPerm('stats', 'list_meter_stats', true),
        genPerm('access_policy', 'list', true),
        genPerm('access_policy', 'view', true),
        genPerm('access_policy', 'edit', true),
        genPerm('access_policy', 'delete', true),
        genPerm('access_policy', 'create', true),
        genPerm('phy_topo', 'manage', true),
        genPerm('service_quality', 'list', true),
        genPerm('service_quality', 'view', true),
        genPerm('service_quality', 'edit', true),
        genPerm('service_quality', 'delete', true),
        genPerm('service_quality', 'create', true),
        genPerm('traffic_class', 'list', true),
        genPerm('traffic_class', 'view', true),
        genPerm('traffic_class', 'edit', true),
        genPerm('traffic_class', 'delete', true),
        genPerm('traffic_class', 'create', true),
        genPerm('vir_topo', 'toggle_state', true),
        genPerm('nac_userdevices', 'list', true),
        genPerm('nac_userdevices', 'view', true),
        genPerm('nac_userdevices', 'edit', true),
        genPerm('nac_userdevices', 'delete', true),
        genPerm('nac_userdevices', 'create', true),
        genPerm('nacgroup', 'list', true),
        genPerm('nacgroup', 'view', true),
        genPerm('nacgroup', 'edit', true),
        genPerm('nacgroup', 'delete', true),
        genPerm('nacgroup', 'create', true),
        genPerm('server', 'list', true),
        genPerm('server', 'view', true),
        genPerm('server', 'edit', true),
        genPerm('server', 'delete', true),
        genPerm('server', 'create', true),
        genPerm('ports', 'list', true),
        genPerm('ports', 'view', true),
        genPerm('vir_topo', 'delete', true),
        genPerm('networkdevice', 'list', true),
        genPerm('networkdevice', 'view', true),
        genPerm('networkdevice', 'edit', true),
        genPerm('networkdevice', 'delete', true),
        genPerm('networkdevice', 'create', true),
        genPerm('overlay_policy', 'list', true),
        genPerm('overlay_policy', 'view', true),
        genPerm('overlay_policy', 'edit', true),
        genPerm('overlay_policy', 'delete', true),
        genPerm('overlay_policy', 'create', true),

        genPerm('moduleNodeConfig', 'list', true),
        genPerm('moduleNodeConfig', 'view', true),
        //genPerm('moduleNodeConfig','edit',true), //not defined
        genPerm('moduleNodeConfig', 'delete', true),
        genPerm('moduleNodeConfig', 'create', true),

        genPerm('configDefinition', 'list', true),
        genPerm('configDefinition', 'view', true),
        //genPerm('configDefinition','edit',true),  //not defined
        genPerm('configDefinition', 'delete', true),
        genPerm('configDefinition', 'create', true),

        genPerm('vir_topo_req', 'view', true),
        genPerm('vir_topo_req', 'list', true),
        genPerm('vir_topo_req', 'edit', true),
        genPerm('vir_topo_req', 'delete', true),
        genPerm('vir_topo_req', 'create', true),


        genPerm('dhcp', 'view', true),
        genPerm('dhcp', 'list', true),
        genPerm('dhcp', 'edit', true),
        genPerm('dhcp', 'delete', true),
        genPerm('dhcp', 'create', true),


        genPerm('cluster', 'list', true),
        genPerm('cluster', 'view', true),
        genPerm('cluster', 'edit', true),
        genPerm('cluster', 'delete', true),
        genPerm('cluster', 'create', true),
        genPerm('moduleNodes', 'list', true),

        genPerm('nfva_nsd', 'list', true),
        genPerm('nfva_nsd', 'view', true),
        genPerm('nfva_nsd', 'edit', true),
        genPerm('nfva_nsd', 'delete', true),
        genPerm('nfva_nsd', 'create', true),

        genPerm('nfva_nsr', 'list', true),
        genPerm('nfva_nsr', 'view', true),
        genPerm('nfva_nsr', 'edit', true),
        genPerm('nfva_nsr', 'delete', true),
        genPerm('nfva_nsr', 'create', true),

        genPerm('nfva_vim', 'list', true),

        genPerm('bgp', 'list', true),
        genPerm('bgp', 'view', true),
        genPerm('bgp', 'edit', true),
        genPerm('bgp', 'delete', true),
        genPerm('bgp', 'create', true),

        genPerm('wan_domain', 'list', true),
        genPerm('wan_domain', 'view', true),
        genPerm('wan_domain', 'edit', true),
        genPerm('wan_domain', 'delete', true),
        genPerm('wan_domain', 'create', true)
    ];

    for (var i in permData) {
        mockup_exports.saveData(permData[i]);
    }
};