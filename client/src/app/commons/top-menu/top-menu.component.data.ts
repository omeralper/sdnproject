export interface ITopMenuItem {
    key: string;
    link?: string | Array<any>;
    menu?: Array<ITopMenuItem>;
}

export var TOP_MENU_DATA: Array<ITopMenuItem> = [
    {
        key: "network_vis",
        //link: "",
        menu: [
            {
                key: "network_vis.topology",
                link: "/topology/view"
            },
            {
                key: "statistics.dashboard.list",
                //perm: "stats:list_port_stats & stats:list_switch_stats & stats:list_meter_stats",
                link: "/statistics/dashboard"
            }
        ]
    },
    {
        key: "top_menu.network_management",
        menu: [
            {
                key: "network_vis.controller_management",
                menu: [
                    {
                        key: "network_vis.controller_management.wanDomain",
                        link: ['/topology/wan_domain']
                    },
                    {
                        key: "network_vis.controller_management.controllerSettings.controllerList",
                        link: ['/topology/controller_management', {mode: 'ctrl'}]
                    },
                    {
                        key: "top_menu.network_management.controller_management.controller_settings",
                        link: ['/settings/systemconfiglist', {nodeType: 'CONTROLLER'}]
                    }
                ]
            },
            {
                key: "top_menu.network_management.device_management",
                menu: [
                    {
                        key: "network_vis.controller_management.switchSettings.list",
                        link: ['/topology/controller_management', {mode: 'switch'}]
                    },
                    {
                        key: "settings.networkDevice.list",
                        link: "/settings/networkDevice"
                    }
                ]
            },
            {
                key: "policy_management",
                menu: [
                    {
                        key: "policy_management.access_control.list",
                        link: "/policies/accesscontrol"
                    },
                    {
                        key: "policy_management.preliminary_path_policies.list",
                        link: "/policies/preliminarypath"
                    },
                    {
                        key: "policy_management.service_quality.list",
                        link: "/policies/servicequality"
                    },
                    {
                        key: "policy_management.overlay.list",
                        link: "/policies/overlay"
                    },
                    {
                        key: "policy_management.traffic_categories.list",
                        link: "/policies/trafficcategories"
                    },
                    {
                        key: "policy_management.sfc.list",
                        link: "/policies/sfc"
                    },
                    {
                        key: "settings.ip_location.list",
                        link: "/settings/iplocationlist"
                    },
                    {
                        key: "policy_management.emergency.list",
                        link: "/policies/emergency"
                    }
                ]
            },
            {
                key: "top_menu.network_management.traffic_management",
                menu: [
                    {
                        key: "bgp_management",
                        link: ['/topology/bgp_management', {mode: 'router'}],
                        menu: [
                            {
                                key: "bgp_management.router.list",
                                link: ['/topology/bgp_management', {mode: 'router'}]
                            },
                            {
                                key: "bgp_management.peer.list",
                                link: ['/topology/bgp_management', {mode: 'peer'}]
                            },
                            {
                                key: "bgp_management.route.list",
                                link: ['/topology/bgp_management', {mode: 'route'}]
                            }
                        ]
                    },
	                {
		                key: "bgp_filter",
		                link: ['/topology/bgp_filter', {mode: 'set'}],
		                menu: [
			                {
				                key: "bgp_filter.set.list",
				                link: ['/topology/bgp_filter', {mode: 'set'}]
			                },
			                {
				                key: "bgp_filter.policy.list",
				                link: ['/topology/bgp_filter', {mode: 'policy'}]
			                },
			                {
				                key: "bgp_filter.assign_policy.list",
				                link: ['/topology/bgp_filter', {mode: 'assignPolicy'}]
			                }
		                ]
	                },
                    {
                        key: "wlan.list",
                        link: "/settings/wlanlist"
                    }
                    //TODO In-Band Kontrol
                    //STP management
                ]
            },
            {
                key: "top_menu.network_management.network_services",
                menu: [
                    {
                        key: "top_menu.network_management.network_services.dhcp",
                        menu: [
                            {
                                key: "settings.dhcp.list",
                                link: "/settings/dhcplist"
                            },
                            {
                                key: "settings.dhcp.configuration",
                                link: "/settings/dhcpconfiguration"
                            },
                            {
                                key: "top_menu.network_management.network_services.dhcp.dhcp_settings",
                                link: ['/settings/systemconfiglist', {nodeType: 'DHCP'}]
                            }
                        ]
                    },
                    // {
                    //     key: "top_menu.network_management.network_services.nat",
                    //     menu: [
                    //         //TODO NAT service menu here
                    //     ]
                    // }
                ]
            },
        ]
    },
    {
        key: "top_menu.network_virtualization",
        menu: [
            {
                key: "top_menu.network_virtualization.virtual_network",
                menu: [
                    {
                        key: "network_vis.virtual_topo.list",
                        link: "/topology/topology_virtual_list"
                    },
                    {
                        key: "network_vis.virtual_topo_req.list",
                        link: "/topology/topology_virtual_req_list"
                    },
                    {
                        key: "wan_vtn_management",
                        link: "/topology/wan_vtn_management_list"
                    }
                ]
            },
            {
                key: "network_function_virtualization",
                menu: [
                    {
                        key: "network_function_virtualization.network_service_decriptor.list",
                        link: "/nfv/network_service_decriptor"
                    },
                    {
                        key: "network_function_virtualization.network_service_record.list",
                        link: "/nfv/network_service_record"
                    },
                    {
                        key: "network_function_virtualization.virtual_network_function.list",
                        link: "/nfv/virtual_network_function"
                    },
                    {
                        key: "network_function_virtualization.vnf_instance.list",
                        link: "/nfv/vnf_instance"
                    }
                ]
            }
        ]
    },
    {
        key: "top_menu.authentication",
        menu: [
            {
                key: "user_management",
                menu: [
                    {
                        key: "user_management.users.list",
                        link: "/aaa/aaauserslist"
                    },
                    {
                        key: "user_management.roles.list",
                        link: "/aaa/aaaroleslist"
                    }
                ]
            },
            {
                key: "nac_management",
                menu: [
                    {
                        key: "nac_management.users.list",
                        link: "/nac/nacuserslist",
                        menu: [
                            {
                                key: "nac_management.users.list",
                                link: "/nac/nacuserslist"
                            }, {
                                key: "nac_management.users.search",
                                link: "/nac/nacusersearch"
                            }, {
                                key: "user_management.user_logs.list",
                                link: "/aaa/aaauserloglist"
                            }
                        ]
                    },
                    {
                        key: "nac_management.profiles.list",
                        link: "/nac/nacprofileslist"
                    },
                    {
                        key: "nac_management.devices.list",
                        link: "/nac/nacdeviceslist"
                    },
                    {
                        key: "top_menu.authentication.nac.nac_settings",
                        link: ['/settings/systemconfiglist', {nodeType: 'NAS'}]
                    }
                ]
            },
            {
                key: "top_menu.authentication.security_management",
                menu: [
                    {
                        key: "nac_management.server.list",
                        link: "/aaa/aaaserverlist"
                    },
                    {
                        key: "user_management.third_party.list",
                        link: "/aaa/thirdpartylist"
                    },
                    {
                        key: "nac_management.nac_user_app.list",
                        link: "/nac/nacuserapplist"
                    }
                ]
            }
        ]
    },
    {
        key: "alarms",
        menu: [
            {
                key: "alarms.list",
                link: ['/alarms/alarmlist', {type: 'ALARM'}]
            },
            {
                key: "alarm_events.list",
                link: ['/alarms/alarmlist', {type: 'EVENT'}]
            },
            {
                key: "alarm_logs.list",
                link: "/alarms/alarmloglist"
            },
            {
                key: "top_menu.alarm.notifications",
                menu: [
                    {
                        key: "alarm_notif.list",
                        link: "/alarms/alarmnotiflist"
                    },
                    {
                        key: "alarm_sources.list",
                        link: "/alarms/alarmsourcelist"
                    }
                ]
            },
            {
                key: "top_menu.alarm.alarm_settings",
                link: ['/settings/systemconfiglist', {nodeType: 'ALARM_MANAGER'}]
            }
        ]
    },
    {
        key: "logs",
        menu: [
            {
                key: "logs.list",
                link: "/logslist"
            },
            {
                key: "components.log-levels.list",
                link: "/settings/loglevelslist"
            }
        ]
    },
    {
        key: "components",
        menu: [
            {
                key: "components.versions.list",
                link: "/settings/versionslist"
            },
            {
                key: "settings.system.parameters.list",
                link: "/settings/systemconfiglist"
            },
            {
                key: "settings.system.definitions.list",
                link: "/settings/systemdefinitionlist"
            }
        ]
    }
];