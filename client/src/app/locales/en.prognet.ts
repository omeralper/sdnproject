export var en_resources = {
    "translation": {
        "common": {
            "project_title": "ProgNET",
            "logo": "/assets/img/prognet.png",
            "logo_reverse": "/assets/img/prognet_reversed.png",
            "server_url": "Server Address",
            "refresh": "Refresh",
            "username": "User Name",
            "password": "Password",
            "name": "Name",
            "surname": "Surname",
            "status": "Status",
            "type": "Type",
            "date": "Date",
            "actions": "Actions",
            "search": "Search",
            "time_format": "HH:mm",
            "date_format": "YYYY.MM.DD",
            "date_format_short": "YY.MM.DD",
            "datetime_format": "YYYY.MM.DD HH:mm",
            "datetime_format_short": "YY.MM.DD HH:mm",
            "units": {
                "bytes": "bytes",
                "packets": {
                    "0": "pkts",
                    "1": "k",
                    "2": "m",
                    "3": "b",
                    "4": "tri"
                },
                "data_rate": {
                    "0": "b/s",
                    "1": "kb/s",
                    "2": "Mb/s",
                    "3": "Gb/s",
                    "4": "Tb/s"
                }
            },
            "buttons": {
                "tools": {
                    "title": "Tools",
                    "icon": "icon-wrench"
                },
                "print": {
                    "title": "Print",
                    "icon": "fa fa-print",
                    "perm": "@print"//@ önce mevcut sayfanın permissionlarına bak eeğr yoksa common permissiona bak
                },
                "export_pdf": {
                    "title": "Export to PDF",
                    "icon": "fa fa-file-pdf-o",
                    "perm": "@export_pdf"
                },
                "copy_clipboard": {
                    "title": "Copy to Clipboard",
                    "icon": "fa fa-files-o",
                    "perm": "@export_pdf"
                },
                "export_excel": {
                    "title": "Export to Excel",
                    "icon": "fa fa-file-excel-o",
                    "perm": "@export_excel"
                },
                "refresh": {
                    "title": "Refresh",
                    "icon": "icon-refresh",
                    "perm": "@refresh"
                },
                "close": {
                    "title": "Close",
                    "icon": "fa fa-times",
                },
                "clear": {
                    "title": "Clear",
                    "icon": "fa fa-times",
                },
                "logout": {
                    "title": "Logout",
                    "icon": "fa fa-sign-out",
                },
                "change_pwd": {
                    "title": "Change Password",
                    "icon": "fa fa-key",
                },
                "help" : {
                	"title" : "Help",
	                "icon" : "fa fa-question"
                },
                "graph": "icon-graph",
                "dropdown_icon": "fa fa-angle-down",
                "list_icon": "fa fa-list-ul",
                "eye_icon": {"icon": "fa fa-eye", "title": "Start Network Discovery"},
                "add_icon": "fa fa-plus-circle",
                "level_up": {"icon": "fa fa-level-up", "title": "Get Central Network"}
            },
            "fields": {
                "actions": "Actions",
                "actions_help": "This column contains actions that could be applicable to each row."
            },
            "messages": {
                "RETURN_STATUS": {
                    "SUCCESS": "Operation succesfully completed.",
                    "ERROR": "Operation failed; \n{{message}}",
                    "SERVER_ERROR": "An error occured during operation.\n Please try again later.",
                    "ACCESS_DENIED": "You don't have permission for this operation.",
                    "ACCESS_LIMITED": "Access is limited for this operation, please try again later.",
                    "NOT_MODIFIED": "Data not modified.",
                    "NOT_IMPLEMENTED": "This operation is not supported.",
                    "DEPRECATED": "This operation is deprecated.",
                    "INVALID_SESSION": "Your session is terminated, please relogin."
                },
                "ERROR_CODES": {},
                "return_home": "Home",
                "idle_timeout": "You session will be locked in {{seconds}} seconds. Do you want to continue your session?",
                "idle_timeout_title": "{{seconds}} seconds until log out ",
                "no_tab": "Tab name is invalid or no tab is present at this time. Try clicking on a tab and refresh",
                "data_load_error": "An error occured while loading data. Please try again later.",
                "validation_error": "Form fields have some errors or empty. Please check your input.",
                "wan_selection_error": "Please select at least 2 local domains.",
                "validation": {
                    'badInput': 'Bad input.',
                    'patternMismatch': 'Please enter appropriate value.',
                    'rangeOverflow': 'You can enter at most "{{input.max}}" as a value.',
                    'rangeUnderflow': 'You must enter at least "{{input.min}}" as a value.',
                    'stepMismatch': 'Please enter appropriate step value.',
                    'tooLong': 'You can enter at most {{input.maxLength}} characters.',
                    'tooShort': 'You must enter at least {{input.minLength}} characters.',
                    'typeMismatch': "Please enter a valid '{{input.type}}' value.",
                    'valueMissing': 'This field is required.',
                    "vl_minlength_error": "You must enter at least {{value}} characters.",
                    "vl_maxlength_error": "You can enter at most {{value}} characters.",
                    "pm_error": "Passwords do not match. Please check your password entries.",
                    "cm_error": "Password must be at least 6 characters in lenght and should contain at least 1 upper case, 1 lower case letter, 1 numerical value and 1 special character (!@#\\$%^&*).",
                    "ip_format_error": "Please enter a proper IP address",
                    "mac_format_error": "Enter proper mac address",
                    "mobile_phone_error": "Please enter a proper mobile phone number",
                    "datapath_error": "Please enter a correct data path"
                },
                "no_topo": "Couldn't find permission to show Physical Network. Virtual Network Operations can be handled from the Virtual Network Management tab.",
                "bandwidth_field_value_error_max": "Please enter a bandwidth value max 1.000.000 kbps",
                "bandwidth_field_value_error_min": "Please enter a bandwidth value min 100 kbps",
                "vlan_tag_value_error_max": "ID can't be bigger than 4096",
                "switch_certificate_download": "Switch certificate download process has been started",
                "controller_certificate_download": "Controller certificate download process has been started",
                "switch_certificate_confirm": "Are you sure to download the switch certificate?",
                "unsaved_data": "You have unsaved changes, do you still want to continue?"
            },
            "labels": {
                "loading": "In progress, please wait...",
                "VIRTUAL": "Virtual",
                "PHYSICAL": "Physical",
                "input_type": {
                    "color": "Color",
                    "date": "Date",
                    "datetime-local": "Date Time",
                    "email": "E-mail",
                    "month": "Month",
                    "number": "Number",
                    "range": "Range",
                    "tel": "Phone Number",
                    "time": "Time",
                    "url": "URL",
                    "week": "Week"
                }
            },
            "datatables": {
                "zerorecords": "No data available in table",
                "nomatch": "No matching records found",
                "emptyTable": "No data available in table",
	            "loading": "Loading...",
                "loadingRecords": "Loading...",
                "first": "<i class='fa fa-step-backward'></i> First",
                "first_notext": "<i class='fa fa-step-backward'></i>",
                "last": "Last <i class='fa fa-step-forward'></i>",
                "last_notext": "<i class='fa fa-step-forward'></i>",
                "prev_notext": "<i class='fa fa-chevron-left'></i>",
                "next_notext": "<i class='fa fa-chevron-right'></i>",
                "prev": "<i class='fa fa-chevron-left'></i> Prev",
                "next": "Next <i class='fa fa-chevron-right'></i>",
                "search": "Search : ",
                "lengthmenu": "_MENU_ records per page",
                "info": "Showing <span>_START_</span> to <span>_END_</span> of <span>_TOTAL_</span> records",
                "infoFiltered": "(filtered from <span>_MAX_</span> total records)",
                "infoEmpty": "No records found.",
                "search_here": "Search here...",
                "lengthMenu": {
                    "5": "5",
                    "10": "10",
                    "15": "15",
                    "20": "20",
                    "All": "-1"
                },
                "search_parse_error": "Syntax Error: Please check character at column {{error.location.start.column}}."
            },
            "highChart": {
                "exporting": {
                    "contextButtonTitle": "Chart Context Menu",
                    "printChart": "Print",
                    "downloadJPEG": "Downlad as JPEG",
                    "downloadPDF": "Downlad as PDF",
                    "downloadPNG": "Downlad as PNG",
                    "downloadSVG": "Downlad as SVG",
                },
                "noData": "No Data to Display",
                "resetZoom": "Reset Zoom",
            },
            "datetimerangepicker": {
                "locale": {
                    "format": "MM/DD/YYYY hh:mm",
                    "separator": " - ",
                    "applyLabel": "Apply",
                    "cancelLabel": "Clear",
                    "fromLabel": "From",
                    "toLabel": "To",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    "monthNames": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ],
                    "firstDay": 1
                },
                "ranges": {
                    'today': 'Today',
                    'yesterday': 'Yesterday',
                    'last7days': 'Last 7 Days',
                    'last30days': 'Last 30 Days',
                    'thisMonth': 'This Month',
                    'lastMonth': 'Last Month'
                }
            },
            "timeago_templates": {
                prefix: "",
                suffix: " ago",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years"
            },
            "timeago_short_templates": {
                prefix: "",
                suffix: " ago",
                seconds: "<1 min.",
                minute: "~1 min.",
                minutes: "%d min.",
                hour: "~1 hr.",
                hours: "%d hr.",
                day: "~1 day",
                days: "%d days",
                month: "~1 mnt.",
                months: "%d mnt.",
                year: "~1 year",
                years: "%d years"
            },
            "time_templates": {
                miliseconds: "%d ms",
                seconds: "%d sec",
                minutes: "%d min",
                hours: "%d hr",
                days: "%d dy",
                months: "%d mt",
                years: "%d yr"
            }
        },
        "enums": {
            "BOOLEAN": {
                "true": {icon: 'fa fa-check', color: 'black', title: 'Yes', bool_title: 'True'},
                "false": {icon: 'fa fa-minus', color: 'black', title: 'No', bool_title: 'False'}
            },
            "ACCESSACTIONTYPE": {
                "ACCESS": {icon: 'fa fa-check', color: 'black', title: 'Permitted'},
                "DENIED": {icon: 'fa fa-minus', color: 'black', title: 'Prohibited'}
            },
            "AAASTATUS": {
                ACTIVE: {icon: 'fa fa-power-off', color: 'yellow-gold', title: 'Active'},
                PASSIVE: {icon: 'fa fa-power-off', color: 'grey-silver', title: 'Passive'}
            },
            "BWUNIT": {
                BPS: "BPS",
                KBPS: "KBPS",
                MBPS: "MBPS",
                GBPS: "GBPS"
            },
            "AAAPROTOCOL": {
                RADIUS: "Radius",
                LDAP: "LDAP"
            },
            "NACSTATUS": {
                ACTIVE: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Active'},
                PASSIVE: {icon: 'fa fa-ban', color: 'red-mint', title: 'Blocked'}
            },
            "NACENTITYTYPE": {
                GUEST: {icon: 'fa fa-user-o', color: 'grey-salsa', title: 'Guest'},
                STAFF: {icon: 'fa fa-id-card', color: 'blue-hoki', title: 'Staff'}
            },
            "HOSTTYPE": {
                COMPUTER: {icon: 'fa fa-laptop', color: 'blue-steel', title: 'Computer', fontCode: '\uf109'},
                PRINTER: {icon: 'fa fa-print', color: 'green-turquoise', title: 'Printer', fontCode: '\uf02f'},
                PHONE: {icon: 'fa fa-phone', color: 'purple-wisteria', title: 'Phone', fontCode: '\uf095'},
                IPTV_STB: {icon: 'fa fa-hdd-o', color: 'red-soft', title: 'IPTV STB', fontCode: '\uf0a0'},
                SMART_TV: {icon: 'fa fa-television', color: 'yellow-soft', title: 'Smart TV', fontCode: '\uf26c'},
                MEDIA_PLAYER: {
                    icon: 'fa fa-play-circle',
                    color: 'green-jungle',
                    title: 'Media Player',
                    fontCode: '\uf144'
                },
                CELL_PHONE: {
                    icon: 'fa fa-1halfx fa-mobile',
                    color: 'purple-studio',
                    title: 'Mobile Phone',
                    fontCode: '\uf10b'
                },
                CAMERA: {icon: 'fa fa-video-camera', color: 'green-jungle', title: 'Camera', fontCode: '\uf03d'},
                SERVER: {icon: 'fa fa-server', color: 'green-jungle', title: 'Server', fontCode: '\uf233'},
                FIREWALL: {icon: 'fa fa-shield', color: 'yellow-casablanca', title: 'Firewall', fontCode: '\uf132'},
                LOAD_BALANCER: {
                    icon: 'fa fa-random',
                    color: 'green-turquoise',
                    title: 'Load Balancer',
                    fontCode: '\uf074'
                },
                DPI: {icon: 'fa fa-eye', color: 'blue-hoki', title: 'DPI', fontCode: '\uf06e'},
                PF_SENSE: {icon: 'fa fa-search', color: 'blue-hoki', title: 'PF_SENSE', fontCode: '\uf002'},
                UNKNOWN: {icon: 'fa fa-question', color: 'dark', title: 'Unknown', fontCode: '\uf128'}
            },
            "HOSTSTATUS": {
                LIVE: {icon: 'fa fa-check-circle', color: 'blue', title: 'Live'},
                GRANTED: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Live (Granted)'}
            },
            "DOMAINSTATUS": {
                UP: {icon: 'fa fa-check-circle', color: 'blue', title: 'Up'},
                "false": {icon: 'fa fa-check-circle', color: 'blue', title: 'Up'},
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
                EMERGENCY: {icon: 'fa fa-exclamation-triangle', color: 'yellow-gold', title: 'Emergency'},
                POWER_SAVER: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Power Saver'}
            },
            "NETWORKDEVICETYPE": {
                GATEWAY: {icon: 'fa fa-arrows-alt', color: 'blue', title: 'Gateway'},
                ACCESS_POINT: {icon: 'fa fa-wifi', color: 'green-jungle', title: 'Access Point'},
                DHCP_SERVER: {icon: 'fa fa-sitemap', color: 'yellow-mint', title: 'DHCP Server'},
                VIRTUAL_GATEWAY: {icon: 'fa fa-arrows-alt', color: 'yellow-gold', title: 'Virtual Gateway'},
                VRR: {icon: 'fa fa-map-signs', color: 'blue-hoki', title: 'VRR Device'},
                NTOP: {icon: 'fa fa-fire', color: 'grey-gallery', title: 'NTOP Server'},
                FIREWALL: {icon: 'fa fa-shield', color: 'red-mint', title: 'Firewall'},
                INTERNAL_GATEWAY: {icon: 'fa fa-arrows-alt', color: 'default', title: 'Internal Gateway'}
            },
            "NETWORKDEVICESTATUS": {
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
                UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Up'},
            },
            "CONTROLLERSTATE": {
                ACTIVE: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Active'},
                READY: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Active (Ready)'},//{icon: 'fa fa-star', color: 'green-jungle', title: 'Hazır'},
                INACTIVE: {icon: 'fa fa-exclamation-triangle', color: 'red-soft', title: 'Inactive'}
            },
            "SECURITYLEVELS": {
                LEVEL_1: "Level 1",
                LEVEL_2: "Level 2",
                LEVEL_3: "Level 3",
                LEVEL_4: "Level 4",
                LEVEL_5: "Level 5",
                LEVEL_6: "Level 6",
                LEVEL_7: "Level 7"
            },
            "SECURITYMODE": {
                OFF: {icon: 'fa fa-unlock-alt', color: 'dark', title: "No Encryption"},
                TLS: {icon: 'fa fa-lock', color: 'dark', title: "TLS Encryption On"},
            },
            "LINKMEDIUM": {
                COPPER: "Copper",
                OPTICAL: "Optical",
                WIRELESS: "Wireless"
            },
            "SEVERITY": {
                MINOR: {icon: 'fa fa-arrow-circle-down', color: 'grey-silver', title: 'Minor'},
                MAJOR: {icon: 'fa fa-arrow-circle-up', color: 'green-seagreen', title: 'Major'},
                CRITICAL: {icon: 'fa fa-exclamation-triangle', color: 'yellow-gold', title: 'Critical'},
                FATAL: {icon: 'fa fa-bomb', color: 'red-mint', title: 'Fatal'}
            },
            "ALARMTYPE": {
                ALARM: 'Alarm',
                EVENT: 'Alarm Event'
            },
            "ALARMSTATUS": {
                ON: {icon: 'fa fa-flag', color: 'red-mint', title: 'On'},
                OFF: {icon: 'fa fa-check-circle', color: 'green-turquoise', title: 'Off'},
                NONE: {icon: 'fa fa-minus', color: 'grey-steel', title: 'None'}
            },
            "ALARM_NAMES": { /*loaded from AlarmCodes.ts file under swagger folder */ },
            "FLOWSTATE": {
                PENDING_ADD: {icon: 'fa fa-hourglass-half', color: 'yellow-soft', title: 'Pending Add'},
                ADDED: {icon: 'fa fa-check', color: 'green-jungle', title: 'Added'},
                PENDING_REMOVE: {icon: 'fa fa-recycle', color: 'yellow-gold', title: 'Pending Remove'},
                REMOVED: {icon: 'fa fa-trash', color: 'dark', title: 'Removed'},
                FAILED: {icon: 'fa fa-exclamation-circle', color: 'red-mint', title: 'Failed'}
            },
            "MVTNSTATUS": {
                SUBMITTED: {icon: 'fa fa-commenting', color: 'yellow-gold', title: 'Requested'},
                REJECTED: {icon: 'fa fa-thumbs-down', color: 'red-mint', title: 'Denied'},
                ACTIVE: {icon: 'fa fa-play', color: 'green-jungle', title: 'Active'},
                SUSPENDED: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'Suspended'},
                INVALID: {icon: 'fa fa-times', color: 'yellow', title: 'Invalid'}
            },
            "WANSTATUS": {
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
                UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Up'},
                DISABLED: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'Disabled'}
            },
            "MVTNREQUESTSTATUS": {
                CREATED: {icon: 'fa fa-commenting', color: 'yellow-gold', title: 'Requested'},
                CREATE_REJECTED: {icon: 'fa fa-thumbs-down', color: 'red-mint', title: 'Denied'},
                ACCEPTED: {icon: 'fa fa-play', color: 'green-jungle', title: 'Active'},
                EDIT_REJECTED: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'Invalid Edit'},
                EDITED: {icon: 'fa fa-times', color: 'yellow', title: 'Edit'}
            },
            "PORTSTATUS": {
                DEAD: {icon: 'fa fa-chain-broken', color: 'red-mint', title: 'Down'},
                PORT_DOWN: {icon: 'fa fa-warning', color: 'dark', title: 'Port Error'},
                BLOCKED: {icon: 'fa fa-ban', color: 'yellow-lemon', title: 'Blocked'},
                LIVE: {icon: 'fa fa-link', color: 'green-jungle', title: 'Up'},//exchange, signal
                NO_STP: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'No STP'},
                NO_RECV: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'No Data Received'},
                NO_RECV_STP: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'No STP Received'},
                NO_FLOOD: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'Not Flooding'},
                NO_FWD: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'Not Forwarding'},
                NO_PACKET_IN: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'No Packet Received'},
                LINK_DOWN: {icon: 'fa fa-times', color: 'red', title: 'Link Down'},
                STP_LISTEN: {icon: 'fa fa-assistive-listening-systems', color: 'purple', title: 'STP Listen'},
                STP_LEARN: {icon: 'fa fa-book', color: 'purple', title: 'STP Learn'},
                STP_FORWARD: {icon: 'fa fa-share', color: 'purple', title: 'STP Forward'},
                STP_BLOCK: {icon: 'fa fa-ban', color: 'purple', title: 'STP Block'},
                STP_MASK: {icon: 'fa fa-asterisk', color: 'purple', title: 'STP Mask'},
            },
            "PATHSTATE": {
                INSTALL_REQ: {icon: 'fa fa-gift', color: 'blue-sharp', title: 'Install Request'},
                COMPILING: {icon: 'fa fa-cogs', color: 'yellow-lemon', title: 'Compiling'},
                INSTALLING: {icon: 'fa fa-wrench', color: 'yellow-gold', title: 'Installing'},
                INSTALLED: {icon: 'fa fa-check', color: 'green-jungle', title: 'Installed'},
                RECOMPILING: {icon: 'fa fa-cog', color: 'yellow-saffron', title: 'Recompiling'},
                WITHDRAW_REQ: {icon: 'fa fa-eraser', color: 'grey-cascade', title: 'Withdraw Request'},
                WITHDRAWN: {icon: 'fa fa-trash', color: 'dark', title: 'Withdrawn'},
                FAILED: {icon: 'fa fa-exclamation-circle', color: 'red-thunderbird', title: 'Failed'},
                CORRUPT: {icon: 'fa fa-bug', color: 'purple-plum', title: 'Corrupt'},
                PURGE_REQ: {icon: 'fa fa-recycle', color: 'yellow-soft', title: 'Purge Request'},
            },
            "TRANSPORTPROTOCOL": {
                TCP: {text_icon: 'TCP', color: 'blue-steel', title: 'Transmission Control Protocol'},
                UDP: {text_icon: 'UDP', color: 'yellow-gold', title: 'User Datagram Protocol'}
            },
            "RESERVEDPATH": {
                NONE: "None",
                ACTIVE: {icon: 'fa fa-bookmark', color: 'blue-sharp', title: 'Reserve Path'},
                DEACTIVE: {icon: 'fa fa-bookmark-o', color: 'red-mint', title: 'Do Not Reserve Path'},
            },
            "NTOPROUTE": {
                ACTIVE: "Using NTOP",
                DEACTIVE: "Inactive",
            },
            "PPPSTATUS": {
                NONE: {icon: 'fa fa-times', color: 'yellow', title: 'None'},
                ON_HOLD: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'On Hold'},
                ACTIVE: {icon: 'fa fa-play', color: 'green-jungle', title: 'Active'},
                FINISHED: {icon: 'fa fa-commenting', color: 'yellow-gold', title: 'Finished'}
            },
            "IPVERSIONTYPE": {
                IPV4: 'IPv4',
                IPV6: 'IPV6'
            },
            "NODETYPE": {
                CONTROLLER: "ControllerSettings",
                API_CORE: "API Core",
                ALARM_MANAGER: "Alarm System",
                STATISTICS_MANAGER: "Statistics System",
                NAS: "NAS System",
                DHCP: "DHCP System",
                EDR: "EDR System",
                SDNIP: "BGP Settings"
            },
            "CONFIGVALUETYPE": {
                STRING: "String",
                BYTE: "Byte",
                INTEGER: "Int",
                LONG: "Long",
                FLOAT: "Float",
                DOUBLE: "Double",
                BOOLEAN: "Boolean"
            },
            "EDRTYPE": {
                SUCCESS: {icon: 'fa fa-check-circle', color: 'green-turquoise', title: 'Success'},
                FAIL: {icon: 'fa fa-minus', color: 'grey-steel', title: 'Fail'}
            },
            "PROCESSINGSTATUS": {
                FAILED: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Error'},
                SUCCESS: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Working'},
                NONE: {icon: 'fa fa-circle', color: 'grey-steel', title: 'None'},
            },
            "SWITCHSTATUS": {
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Not Working'},
                UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Working'},
            },
            "OFFLINEMODE": {
                "SECURE": "Secure",
                "STANDALONE": "Standalone"
            },
            "CONNECTIONMODE": {
                "INBAND": "Inband",
                "OUTBAND": "Outband"
            },
            "LINKTYPE": {
                "COPPER": "Copper",
                "FIBER": "Fiber",
                "PACKET": "Packet",
                "ODUCLT": "ODUCLT",
                "OCH": "OCH",
                "OMS": "OMS",
                "VIRTUAL": "Virtual",
                "OTU": "OTU",
                "SECURE": "Secure"
            },
            "LINKSTATUS": {
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Down'},
                BLOCKED: {icon: 'fa fa-ban', color: 'red-mint', title: 'Blocked'},
                LIVE: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Live'},
                LEGACY: {icon: 'fa fa-tty', color: 'default', title: 'Legacy'},
                INDIRECT: {icon: 'fa fa-random', color: 'purple', title: 'Indirect'}
            },
            "FLOWBALANCECONSTRAINTTYPE": {
                AVAILABLE_BANDWITDH_CONSTRAINT: "According to bandwidth",
                FLOW_COUNT_CONSTRAINT: "According to minimum flow count"
            },
            "ROUTERTYPE": {
                "SPEAKER": {icon: 'fa fa-bullhorn', color: 'purple-sharp', title: 'Speaker'},
                "PEER": {icon: 'fa fa-comments', color: 'yellow-casablanca', title: 'Peer'},
	            "ROUTE_REFLECTOR": {icon: 'fa fa-rss', color: 'green-sharp', title: 'Route Reflector'},
            },
            DEVICETYPE: {
                PHISICAL_SWITCH: {icon: 'fa fa-exchange', color: 'purple-sharp', title: 'Switch'},
                VIRTUAL_SWITCH: {icon: 'fa fa-exchange', color: 'purple-sharp', title: 'Virtual Switch'},
                LEGACY_SWITCH: {icon: 'fa fa-exchange', color: 'purple-sharp', title: 'Legacy Switch'},
                ROUTER: {icon: 'fa fa-arrows-alt', color: 'purple-sharp', title: 'Router'},
                MODEM: {icon: 'fa fa-tty', color: '', title: 'Modem'},
                ACCESS_POINT: {icon: 'fa fa-wifi', color: '', title: 'Access Point'},
                IP_PHONE: {icon: 'fa fa-phone-square', color: '', title: 'Ip Phone'},
                APPLIANCE: {icon: 'fa fa-server', color: '', title: 'Appliance'},
                UNKNOWN: {icon: 'fa fa-question-circle', color: '', title: 'Unknown'},
            },
            "WANDOMAINSTATUS": {
                ACTIVE: {icon: 'fa fa-power-off', color: 'green-meadow', title: 'Active'},
                INACTIVE: {icon: 'fa fa-power-off', color: 'grey-cascade', title: 'Inactive'},
                FAILED: {icon: 'fa fa-exclamation-triangle', color: 'yellow-casablanca', title: 'Failed'}
            },
            "VNFDTYPE": {
                FIREWALL: "Firewall",
                DPI: "DPI",
                LOAD_BALANCER: "LB",
                PF_SENSE: "PF Sense"
            },
            "SFCSTATUS": {
                "ACTIVE": {icon: 'fa fa-circle', color: 'font-green-meadow', title: 'Active'},
                "FAILED": {icon: 'fa fa-exclamation-triangle', color: 'font-yellow-gold', title: 'Failed'},
                "INACTIVE": {icon: 'fa fa-circle-o', color: 'font-red-sunglo', title: 'Inactive'}
            },
	        "SDNIPRESOURCETYPE":{
		        "GLOBAL": "Global",
	        },
	        "SDNIPPOLICYTYPE":{
		        "IMPORT" : "Import",
		        "EXPORT" : "Export"
	        },
	        "SDNIPDEFINEDSETTYPE" : {
		        "AS_PATH" : "AS Path",
		        "NEIGHBOR" : "Neighbor",
		        "PREFIX" : "Prefix"
	        },
	        "SDNIPMATCHTYPE" : {
		        "ANY" : "Any",
		        "ALL" : "All",
		        "INVERT" : "Invert"
	        },
	        "SDNIPROUTEACTION" : {
		        "ACCEPT" : "Accept",
		        "REJECT" : "Reject"
	        }
            /*
             "TOPOLOGYSTATUS": {
             DOWN: {icon: '', title: 'Down'},
             PARTIAL_DOWN: {icon: '', title: 'Partial Down'},
             UP: {icon: '', title: 'Up'},
             DESIGNED: {icon: '', title: 'Designed'},
             WAIT_APPROVAL: {icon: '', title: 'Wait Approval'},
             SETUP: {icon: '', title: 'Setup'}
             }*/
        },
        "dialogs": {
            "types": {
                "info": {
                    "title": "Info",
                    "icon": "fa fa-info-circle",
                    "color": "font-blue-steel",
                },
                "success": {
                    "title": "Success",
                    "icon": "fa fa-check-circle",
                    "color": "font-green-meadow bold"
                },
                "warning": {
                    "title": "Warning",
                    "icon": "fa fa-exclamation-triangle",
                    "color": "font-yellow-gold bold"
                },
                "error": {
                    "title": "Error",
                    "icon": "fa fa-exclamation-circle",
                    "color": "font-red-sunglo bold"
                },
                "question": {
                    "title": "Question",
                    "icon": "fa fa-question-circle",
                    "color": "font-blue-steel"
                },
            },
            "actions": {
                "ok": {
                    "title": "Ok",
                    "title_short": "Ok",
                    "icon": "fa fa-check-circle",
                    "color": "uppercase green-meadow",
                    "perm": "@ok"
                },
                "cancel": {
                    "title": "Cancel",
                    "title_short": "Cncl",
                    "icon": "fa fa-ban",
                    "color": "btn-outline lowercase red-sunglo",
                    "perm": "@cancel"
                },
                "abort": {
                    "title": "Abort",
                    "title_short": "Abrt",
                    "icon": "fa fa-times-circle",
                    "color": "btn-outline lowercase yellow-gold",
                    "perm": "@abort"
                },
                "yes": {
                    "title": "Yes",
                    "title_short": "Yes",
                    "icon": "fa fa-thumbs-up",
                    "color": "uppercase green-meadow",
                    "perm": "@yes"
                },
                "no": {
                    "title": "No",
                    "title_short": "No",
                    "icon": "fa fa-thumbs-down",
                    "color": "uppercase yellow-gold",
                    "perm": "@no"
                },
                "close": {
                    "title": "Close",
                    "title_short": "Cls",
                    "icon": "fa fa-times-circle",
                    "color": "btn-default",
                    "perm": "@close"
                },
                "save": {
                    "title": "Save",
                    "title_short": "Save",
                    "icon": "fa fa-floppy-o",
                    "color": "uppercase green-meadow",
                    "perm": "@save"
                },
                "change": {
                    "title": "Change",
                    "title_short": "Chng",
                    "icon": "fa fa-floppy-o",
                    "color": "uppercase yellow-gold",
                    "perm": "@change"
                },
                "add": {
                    "title": "Add",
                    "title_short": "Add",
                    "icon": "fa fa-plus",
                    "color": "uppercase yellow-gold",
                    "perm": "@save"
                },
                "send": {
                    "title": "Send",
                    "title_short": "send",
                    "icon": "fa fa-paper-plane",
                    "color": "uppercase purple-plum",
                    "perm": "@ok"
                },
                "start": {
                    "title": "Start",
                    "title_short": "start",
                    "icon": "fa fa-play",
                    "color": "uppercase green-meadow",
                    "perm": "@change"
                }
            }
        },
        "login": {
            "page_title": {
                "login": "ProgNET | Login",
                "admin": "ProgNET | Admin"
            },
            "title": "Admin Login",
            "info": "Please login with your username and password.",
            "remember_me": "Remember Me",
            "rememberme": {
                "label": "Remember me",
                "label_icon": "<i class='fa fa-bars'></i>",
                "placeholder": "",
                "help_line": "",
                "help_block": "",
                "onText": "&nbsp;&nbsp;&nbsp;", //"Yes",
                "offText": "&nbsp;&nbsp;&nbsp;", //"No",
                "onLabel": "Remember me",
                "offLabel": "Don't Remember me",
            },
            "forgot_password": "Forgot Password?",
            "sign_in": "Sign In"
        },
        "dashboard": {
            "title": "Dashboard",
            "icon": "fa fa-dashboard",
            "perm": "common:view",
            "labels": {
                "title": "ProgNET",
                "motto": "Smart Network Technologies",
                "contact_us": "CONTACT US"
            }
        },
        "network_vis": {
            "title": "Network Monitoring",
            "icon": "fa fa-eye",
            "perm": "common:view",
            "topology": {
                "title": "Topology",
                "icon": "fa fa-share-alt",
                "basePerm": "common",
                "perm": "phy_topo:view | vir_topo:view",
                "speed": "Speed",
                "virtual": "Virtual",
                "virtual_list": "Virtual Network List",
                "flows": "Flows",
                "address": "Address",
                "device_info": "Device Info",
                "support": "OF Version",
                "security_level": "Security Level",
                "active_since": "Active Since",
                "power_usage": "Power Usage",
                "port_info": "Port Info",
                "port_states": "Port State",
                "port_configs": "Port Config",
                "isWanLink": "WAN Link",
                "measureDelay": "Measure Delay",
                "cspeed": "Current Speed",
                "avg_speed": "Average Speed",
                "mspeed": "Max Speed",
                "source_port": "Source Port",
                "dest_port": "Target Port",
                "last_seen": "Last Seen",
                "alternative": "Alternative",
                "alternative_paths_title": "Alternative Paths",
                "signal_quality": "Signal Quality",
                "connectionType": "Connection Type",
                "loss": "Loss",
                "delay": "Delay",
                "jitter": "Jitter",
                "physical_topology": "Physical Network",
                "virtual_topology": "Virtual Network",
                "hide_footer": "Hide Footer",
                "show_footer": "Show Footer",
                "hide_detail_info": "Hide Detail Info",
                "show_detail_info": "Show Detail Info",
                "hide_hosts": "Hide Hosts",
                "show_hosts": "Show Hosts",
                "show_networkdevices": "Show Network Devices",
                "hide_networkdevices": "Hide Network Devices",
                "hide_vgateway": "Hide Virtual Gateways",
                "show_vgateway": "Show Virtual Gateways",
                "hide_controllers_tab": "Hide Controllers Tab",
                "show_controllers_tab": "Show Controllers Tab",
                "show_ports": "Show Ports (R)",
                "hide_ports": "Hide Ports (R)",
                "show_link_sensitivity": "Show BW Sensitivity",
                "hide_link_sensitivity": "Hide BW Sensitivity",
                "show_trmap": "Show Map",
                "hide_trmap": "Hide Map",
                "new_tab": "Show in new Tab",
                "show_flow_list": "List Flows",
                "show_port_list": "List Ports",
                "delete_switch_node": "Delete Switch",
                "block_for_mvtn": "Block Switch",
                "allow_for_mvtn": "Allow Switch",
                "no_data": "No Data Found",
                "settings": {
                    "icon": "icon-settings",
                    "title": "View Settings"
                },
                "toggle_fullscreen": {title: "Toggle Fullscreen"},
                "connectionTypes": {
                    "COPPER": "Copper",
                    "FIBER": "Fiber",
                    "PACKET": "Packet",
                    "ODUCLT": "ODUCLT",
                    "OCH": "OCH",
                    "OMS": "OMS",
                    "VIRTUAL": "Virtual",
                    "OTU": "OTU"
                },
                "footer_fields": {
                    "switch": "Switch",
                    "domain": "Domain",
                    "legacy_switch": "Legacy Switch",
                    "gateway": "Network Device",
                    "network_device": "Network Device",
                    "link": "Link",
                    "host": "Host",
                    "cloud": "Wan Port",
                    "bgp_router": "BGP Router",
                    "id": "ID",
                    "status": "Status",
                    "name": "Name",
                    "ip": "IP",
                    "mac": "MAC",
                    "port":{"address": "Adress"},
                    "srcPort": {
                        "number": "Source Port #"
                    },
                    "destPort": {
                        "number": "Dest Port #"
                    }
                },
                "node_properties": {
                    "id": "ID",
                    "ip": "IP",
                    "status": "Status",
                    "name": "Name",
                    "vtn": "Virtual Network",
                    "address": "Address",
                    "deviceInfo": "Device Info",
                    "securityLevel": "Security Level",
                    "activeSince": "Active Since",
                    "lastSeen": "Last Seen",
                    "powerUsage": "Power Usage",
                    "portInfo": "Port Info",
                    "port": "Port",
                    "port_number": "Port Number",
                    "port_states": "Port States",
                    "port_configs": "Port Config",
                    "port_speed": "Port Speed",
                    "port_avg_speed": "Port Avg. Speed",
                    "profile": "Profile",
                    "flows": "Flows",
                    "add_switch": "Add Switch",
                    "add_link": "Add Link",
                    "select": "Node Selection",
                    "bandwidthUtilization": "B.W Util.",
                    "userInfo": "User Info",
                    "edit": "Edit",
                    "bandwidth": "Bandwidth",
                    "totalBandwidth": "Total Bandwidth",
                    "openflow_version": "OpenFlow Version",
                    "openflowVersions": "OpenFlow Version",
                    "device_vendor": "Device Vendor",
                    "device_model": "Device Model",
                    "device_version": "Device Version",
                    "managementPort": "Management Port",
                    "CONNECTIONMODE": "Connection Type",
                    "OFFLINEMODE": "Ofline Mode",
                    "SWITCHMODE": "Switch Mode",
                    "LINKTYPE": "Link Type",
                    "CONTROLLERSTATE": "Controller State",
                    "SECURITYMODE": "Security Mode",
                    "source_port": "Source Device",
                    "target_port": "Dest. Device",
                    "queueId": "Queue ID",
                    "signalQuality": "Signal Quality",
                    "mac": "MAC Address",
                    "as_number": "Numeric",
                    "neighbour_list": "Neighbour List",
                    "deviceCount": "Switch Count",
                    "vlanid": "VLAN ID",
                    "messages": {
                        "no_profile": "Couldn't find relevant profile in Physical Network."
                    },
                    "labels": {
                        "utilization_value": "{{utilization}}%",
                        "utilization": "Utilization",
                        "details": "Details",
                        "detail_less": "Show Less",
                        "detail_more": "Show More",
                        "stats": "Statistics",
                        "stat_real_time": "Real-Time",
                        "stat_average": "Average",
                        "source": "Source",
                        "target": "Dest.",
                        "sent": "Sent",
                        "recv": "Recv.",
                        "real_time": "Real Time",
                        "average_5min": "5min. Average",
                        "virtual": "Virtual",
                        "link": "Link",
                        "switch": "Switch",
                        "controller": "Controller",
                        "network_device": "Network Device",
                        "host_granted": "Granted",
                        "click_for_more": "Click for more.",
                        "stat_fields": {
                            "bandwidth": {title: "Bandwidth", icon: "fa fa-road"},
                            "utilization": {title: "Utilization", icon: "fa fa-pie-chart"},
                            "speed": {title: "Speed", icon: "fa fa-tachometer"},
                            "bytes": {title: "Bytes", icon: "fa fa-database"},
                            "packets": {title: "Packets", icon: "fa fa-cubes"},
                            "errors": {title: "Errors", icon: "fa fa-exclamation-circle"},
                            "drops": {title: "Drops", icon: "fa fa-trash"},
                            "collisions": {title: "Collisions", icon: "fa fa-bomb"},
                            "loss": {title: "Loss", icon: "fa fa-eye-slash"},
                            "delay": {title: "Delay", icon: "fa fa-clock-o"},
                            "jitter": {title: "Jitter", icon: "fa fa-bolt"},
                        }
                    },
                    "icons": {
                        "isControllerDevice": {title: "Control Plane Device", icon: "fa fa-gavel", color: "grey-mint"},
                        "isMeterEnabled": {title: "Meter Enabled", icon: "fa fa-bar-chart", color: "default"},
                        "powerSaverModeEnabled": {
                            title: "Power Save Mode Enabled",
                            icon: "fa fa-recycle",
                            color: "green-turquoise"
                        },
                        "isBlockedForMvtn": {title: "Blocked Switch", icon: "fa fa-ban", color: "red-mint"},
                        "isEdgeSwitch": {
                            title: "Edge Switch",
                            icon: "fa fa-object-ungroup",
                            color: "yellow-casablanca"
                        },
                        "dpdk": {title: "DPDK Enabled", textIcon: "DPDK", color: "blue"},
                        "measureDelay": {title: "Delay Measurement Enabled", icon: "fa fa-clock-o", color: "default"},
                        "blocked": {title: "Loop Detected", icon: "fa fa-retweet", color: "red-mint"},
                        "isWanLink": {title: "WAN Link", icon: "fa fa-external-link", color: "blue"}
                    }
                },
                "controller_properties": {
                    "controller": "ControllerSettings",
                    "name": "ControllerSettings Name",
                    "ip": "IP",
                    "deviceCount": "Managed Switch Count",
                    "securityMode": "Security Mode",
                    "controller_type": "ControllerSettings Type",
                    "openflow_version": "OF Version"
                },
                "path_actions": {
                    "title": "Path Actions",
                    "list_reactive_paths": {
                        title: "List Reactive Paths",
                        icon: "icon-graph icon_sub icon_sub-list"
                    },
                    "list_proactive_paths": {
                        title: "List Proactive Paths",
                        icon: "icon-direction icon_sub icon_sub-list"
                    },
                    "show_path": {title: "Show Proactive Path", icon: "icon-direction icon_sub icon_sub-eye"},
                    "show_reactive_path": {title: "Show Reactive Path", icon: "icon-graph icon_sub icon_sub-eye"},
                    "clear_path": {title: "Cancel Path Operation", icon: "fa fa-ban"},
                    "add_preliminary_path_policy": {
                        title: "Add Proactive Path Policy",
                        icon: "icon-direction icon_sub icon_sub-plus"
                    }
                },
                "path_confirmation_popup": {
                    //"basePerm": "common",
                    "modes": {
                        "edit": {
                            "title": "Edit Path",
                            "icon": "fa fa-pencil",
                            //"perm": "#edit",
                        },
                        "create": {
                            "title": "Create Path",
                            "icon": "fa fa-plus",
                            //"perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "source": {
                            "label": "Source Host",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "dest": {
                            "label": "Target Host",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "securityLevel": {
                            "label": "Security Level",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "bandwidth_constraint": {
                            "label": "Minimum Bandwidth",
                            "placeholder": "default value",
                            "help_line": "Please enter minimum bandwidth in mbit/s.",
                            "help_block": "",
                        },
                        "max_bandwidth_constraint": {
                            "label": "Maximum Bandwidth",
                            "placeholder": "default value",
                            "help_line": "Please enter maximum bandwidth in mbit/s.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "save_success": "Path is succesfully updated.",
                        "create_success": "Path is succesfully created.",
                        "bandwidth_error": "'Minimum Bandwidth' data must be between 0-1000000, please check the value.",
                        "max_bandwidth_error": "'Maximum Bandwidth' data must be between 0-1000000, please check the value.",
                        "max_bandwidth_smaller_error": "'Maximum Bandwidth' must be greater than 'Minimum Bandwidth' value.",
                        "securitylevel_required": "Please select 'Security Level' value"
                    },
                    "labels": {}
                },
                "create_virtual_topology_popup": {
                    "modes": {
                        "edit": {
                            "title": "Edit Virtual Network",
                            "icon": "fa fa-pencil"
                        },
                        "create": {
                            "title": "Add Virtual Network",
                            "icon": "fa fa-circle"
                        }
                    },
                    "title": "Add Virtual Network",
                    "icon": "fa fa-plus-circle",
                    "virtual_topology_name": "Virtual Topology Name",
                    "vlan_tag": {
                        "title": "VLAN Tag",
                        "placeholder": "Write a VLAN ID value..."
                    },
                    "maximum_number_of_user": {
                        "title": "Max. Number of Users",
                        "unit": "Person(s)"
                    },
                    "qos_params": {
                        "title": "Default QoS Parameters",
                        "fields": {
                            "bandwidth": "Bandwidth",
                            "switch_security_level": "Switch Security Level",
                            "link_security_level": "Link Security Level",
                            "jitter": {
                                "title": "Jitter",
                                "unit": "ms"
                            },
                            "delay": {
                                "title": "Delay",
                                "unit": "ms"
                            },
                            "packet_loss_rate": {
                                "title": "Packet Loss Rate",
                                "unit": "packet/s"
                            },
                            "collision": {
                                "title": "Collision",
                                "unit": "packet/s"
                            }
                        }
                    },
                    "address_range": {
                        "title": "DHCP Settings",
                        "field": "Adress Range",
                        "placeholder": "0.0.0.0/24",
                        "label": "Write one Address Range per line."
                    },
                    "dns_servers": {
                        "title": "DNS Servers",
                        "field": "DNS Servers",
                        "placeholder": "dns.domain.com\n0.0.0.0",
                        "label": "Write one DNS address per line."
                    },
                    "mac_list": {
                        "title": "MAC Address List",
                        "field": "MAC Adresses",
                        "placeholder": "0.0.0.0",
                        "label": "Write one MAC address per line."
                    },
                    "l4_port_list": {
                        "title": "L4 Port List",
                        "field": "L4 Ports",
                        "placeholder": "80",
                        "label": "Write one L4 port per line."
                    },
                    "gateway_definition": {
                        "title": "Gateway",
                        "fields": {
                            "hasGateway": "Gateway Enabled",
                            "gateway_ip": "Gateway IP",
                            "gateway_subnet_mask": "Gateway Subnet Mask"
                        }
                    },
                    "vtn_type": {
                        "title": "VTN Type"
                    },
                    "local_network": "Local Network",
                    "local_clusters": "Local Clusters",
                    "local_cluster_name": "Local Cluster Name",
                    "local_vtn_name": "Local VTN Name",
                    "local_vtn_status": "Local VTN Status",
                    "name_error": "Please enter a valid network name",
                    "unique_name_err": "This virtual network name is already in use. Please write a unique name.",
                    "unique_vlan_err": "This vlan tag is already in use. Please write a unique vlan tag."
                },
                "add_edit_switch_popup": {
                    "title": "Edit Switch Info",
                    "switch_name": "Switch Name",
                    "host_count": "Host Ports",
                    "profile": "Profile",
                    "success": "Successfuly created Switch, now you can place it.",
                    "cancel": "Cancelled switch creation process",
                    "add_a_switch": "Start creating a network by adding a Switch by pressing S on the left menu",
                    "name_field_error": "Please fill the name field with maximum 3 letters.",
                    "port_field_error": "Please fill the port count field between 0-10",
                    "profile_field_error": "Please select a profile",
                    "securityLevel": "Security Level",
                    "no_available_profile_exists": "No available items found in 'Profile' list. Please try again later."
                },
                "add_edit_link_popup": {
                    "title": "Edit Link Info",
                    "source_bandwidth": "Source Bandwidth",
                    "target_bandwidth": "Target Bandwidth",
                    "securityLevel": "Security Level",
                    "jitter": "Jitter",
                    "delay": "Delay",
                    "packet_loss_rate": "Packet Loss Rate",
                    "collision": "Collision",
                    "bandwidth_field_error": "Please enter a bandwith value",
                },
                "vnf_conversion_popup":{
                    "title": "Convert to VNF",
                    "fields":{
                        "id": "ID",
                        "type": "VNF Type",
                        "name": "Name"
                    }
                },
                "statistics": {
                    "source": "Source",
                    "dest": "Dest",
                    "packet": "Pckts",
                    "error": "Errors",
                    "drop": "Drops",
                    "byte": "Bytes",
                    "rate": "Rate",
                    "collisions": "Collisions",
                    "load": "Load",
                    "bandwidth": "Bandwidth",
                    "received": "Recv",
                    "sent": "Sent"
                },
                "messages": {
                    'no_path_found': 'No path found between selected hosts!',
                    "path_created": "Path Created",
                    'select_source_dest': "Please select 'Source' and 'Target' hosts.",
                    'select_source_host': "Please select 'Source' host.",
                    'select_dest_host': "Please select a 'Target' host or de-select the 'Source' if your choice is wrong.",
                    'no_host_to_create': "The path can't be created because there is no host",
                    'no_host_to_show': "The path can't be shown because there is no host",
                    'deselect_source_host': "'Source' host de-selected! Please choose a new source host.",
                    'deselect_target_host': "'Target' host de-selected! Please choose a new target host.",
                    'only_two_hosts_allowed': "Please de-select one of the hosts in order to choose another one. Maximum selected host number must be 2.",
                    'confirm_selection': "If your selection is correct, would you like to proceed?",
                    "confirm_switch_delete": "Are you sure you want to remove this switch from the topology?",
                    "confirm_cancel_design_mode": "Virtual Network Design operation will be CANCELED.\nDo you want to proceed?",
                    "convert_to_ap": "Please enter a VLANID",
                    "to_ap": "Convert To Access Point",
                    "to_vnf": "Convert to VNF",
                    "conroller_changed": "ControllerSettings State Changed",
                    "is_mapped_version_save_error": "Please switch to virtual network view in order to save this network",
                    "block_user": "Block User",
                    'alternative_path_save_success': 'Successfully updated Alternative path',
                    'alternative_path_save_error': 'Failed to update Alternative path',
                    "draw_path_success": "Path is being shown on the network."
                },
                "list": {
                    "title": "{{type}} Networks",
                    "icon": "fa fa-share-alt",
                    "basePerm": "common",//THIS value is dynamically generated in the code
                    "perm": "#list",
                    "actions": {
                        "add_topology": {
                            "title": "Add Network",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_topology": {
                            "title": "View Network",
                            "title_short": "View",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_topology": {
                            "title": "Edit Network",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_topology": {
                            "title": "Delete Network",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete_request"
                        }
                    },
                    "fields": {
                        "status": "State",
                        "name": "Network Name",
                        "type": "Network Type",
                        "date": "Created"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete '{{dto.name}}' network?",
                        "delete_success": "'{{dto.name}}' network is succesfully deleted!"
                    }
                },
                "alarm_status_popover": {
                    "title": "Alarm Status",
                    "fatal": "Fatal",
                    "critical": "Critical",
                    "important": "Important",
                    "unimportant": "Unimportant"
                }
            },
            "switch": {
                "title": "Switch",
                "legacy_title": "Legacy Switch",
                "ip_phone_title": "IP Phone",
                "flow_list": {
                    "title": "Flow List of Switch '{{name}}'",
                    "icon": "fa fa-map-signs",
                    "basePerm": "flows",
                    "perm": "#list",
                    "actions": {
                        "create_flow": {
                            "title": "Add Flow",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_flow": {
                            "title": "View Flow",
                            "title_short": "View",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_flow": {
                            "title": "Edit Flow",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_flow": {
                            "title": "Delete Flow",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "state": "State",
                        "id": "Id",
                        "grp_tbl_id": "Group / Table",
                        "priority": "Priority",
                        "instruction_list": "Instruction List",
                        "match_list": "Match List",
                        "app": "App",
                        "life_idle": "Life / Idle",
                        "life": "Lifetime",
                        "packets": "Packets",
                        "bytes": "Bytes",
                        "controller": "Controller"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete flow #{{dto.id}}?",
                        "delete_success": "Flow #{{dto.id}} is succesfully deleted!",
                        "delete_not_allowed": "Flow #{{dto.id}} cannot be deleted!"
                    }
                },
                "port_list": {
                    "title": "Port List of Switch '{{name}}'",
                    "icon": "fa fa-list",
                    "basePerm": "ports",
                    "perm": "#list",
                    "actions": {
                        "view_port": {
                            "title": "Port Details",
                            "title_short": "Details",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                    },
                    "fields": {
                        "states": "State",
                        "configs": "Configs",
                        "number": "No",
                        "name": "Name",
                        "address": "Address",
                        "linkType": "Link Type",
                        "speed": "Speed",
                        "rates": "Rate",
                        "packets_sent": "Sent Packets",
                        "packets_received": "Recv. Packets",
                        "bytes_sent": "Sent Bytes",
                        "bytes_received": "Recv. Bytes",
                    },
                    "messages": {
                        "blocked": "Blocked",
                        "link_down": "Link Down",
                        "live": "Live",
                        "port_down": "Port Down",
                        "stp_active": "STP Active",
                        "no_fwd": "No Forwarding",
                        "no_packet_in": "No Packet In",
                        "no_recv": "No Receive"
                    }
                },
            },
            "host": "Host",
            "link": "Link",
            "gateway": {
                "title": "Network Device",
                "ip": "IP",
                "name": "Name",
                "mac": "MAC"
            },
            "messages": {
                "node_type_error": "Host type not found"
            },
            "virtual_topo": {
                "title": "Virtual Networks",
                "req_title": "Virtual Network Requests",
                "icon": "fa fa-share-alt-square",
                "perm": "common:view",
                "list": {
                    "title": "Virtual Networks",
                    "icon": "fa fa-share-alt-square",
                    "basePerm": "vir_topo",
                    "perm": "#list",
                    "actions": {
                        "create_topology": {
                            "title": "Create Virtual Network",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "create_topology_request": {
                            "title": "Request Virtual Network",
                            "title_short": "Request",
                            "icon": "fa fa-plus",
                            "color": "blue-madison",
                            "perm": "#create_request & !(#create)",
                        },
                        "view_topology": {
                            "title": "View Virtual Topology",
                            "title_short": "View",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_topology": {
                            "title": "Edit Virtual Network",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                            "states": ['SUSPENDED', 'REJECTED']
                        },
                        "delete_topology": {
                            "title": "Delete Virtual Network",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                            "states": ['SUSPENDED', 'REJECTED', 'SUBMITTED', 'INVALID']
                        },
                        "create_deny": {
                            "title": "Deny Virtual Network Request",
                            "title_short": "Deny Request",
                            "icon": "fa fa-thumbs-down",
                            "color": "red-mint",
                            "perm": "#create_approve",
                            "states": ['SUBMITTED']
                        },
                        "create_approve": {
                            "title": "Approve Virtual Network Request",
                            "title_short": "Approve Request",
                            "icon": "fa fa-thumbs-up",
                            "color": "green-jungle",
                            "perm": "#create_approve",
                            "states": ['SUBMITTED']
                        },
                        "delete_deny": {
                            "title": "Deny Virtual Network Deletion",
                            "title_short": "Deny Deletion",
                            "icon": "fa fa-thumbs-down",
                            "color": "red-mint",
                            "perm": "#delete_approve"
                        },
                        "delete_approve": {
                            "title": "Approve Virtual Network Deletion",
                            "title_short": "Approve Deletion",
                            "icon": "fa fa-thumbs-up",
                            "color": "green-jungle",
                            "perm": "#delete_approve"
                        },
                        "activate_topology": {
                            "title": "Activate Virtual Network",
                            "title_short": "Activate",
                            "icon": "fa fa-play",
                            "color": "green-jungle",
                            "perm": "#toggle_state",
                            "states": ['SUSPENDED']
                        },
                        "deactivate_topology": {
                            "title": "Deactivate Virtual Network",
                            "title_short": "Deactivate",
                            "icon": "fa fa-pause",
                            "color": "grey-cascade",
                            "perm": "#toggle_state",
                            "states": ['ACTIVE']
                        },
                        "change_mvtnType": {
                            "title": "Change Virtual Network Type",
                            "title_short": "Change Type",
                            "icon": "fa fa-refresh",
                            "color": "grey-cascade"
                        },
                        "action_menu": {
                            "title": "Actions",
                            "title_short": "Actions",
                            "icon": "fa fa-cog",
                            "color": "btn-default"
                        },
                    },
                    "fields": {
                        "mvtnStatus": "State",
                        "name": "Virtual Network Name",
                        "username": "Username",
                        "creationDate": "Created",
                        "lastUpdateDate": "Last Updated",
                        "mvtnType": "MVTN Type"
                    },
                    "messages": {
                        "approve_confirm": "Do you want to <b>approve</b> virtual network request '{{dto.name}}'?",
                        "approve_success": "Virtual network '{{dto.name}}' has been succesfully approved!",
                        "deny_confirm": "Do you want to <b>deny</b> virtual network request '{{dto.name}}'?",
                        "deny_success": "Virtual network '{{dto.name}}' has been succesfully denied!",
                        "delete_request_confirm": "Do you want to <b>delete</b> virtual network request '{{dto.name}}'?",
                        "delete_request_success": "Virtual network request '{{dto.name}}' has been succesfully deleted!",
                        "delete_confirm": "Do you want to <b>delete</b> virtual network '{{dto.name}}'?",
                        "delete_success": "Virtual network '{{dto.name}}' has been succesfully deleted!",
                        "activate_confirm": "Do you want to <b>activate</b> virtual network request '{{dto.name}}'?",
                        "activate_success": "Virtual network '{{dto.name}}' has been succesfully activated!",
                        "deactivate_confirm": "Do you want to <b>deactivate</b> virtual network request '{{dto.name}}'?",
                        "deactivate_success": "Virtual network '{{dto.name}}' has been succesfully deactivated!",
                        "change_mvtn_type_confirm": "Do you want to change type of virtual network '{{dto.name}}' ?"
                    }
                },
            },
            "virtual_topo_req": {
                "title": "Virtual Network Requests",
                "req_title": "Virtual Network Requests",
                "icon": "fa fa-share-alt-square",
                "perm": "common:view",
                "list": {
                    "title": "Virtual Network Requests",
                    "icon": "fa fa-share-alt-square",
                    "basePerm": "vir_topo_req",
                    "perm": "#list",
                    "actions": {
                        "create_topology_request": {
                            "title": "Request Virtual Network",
                            "title_short": "Request",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "create_approve": {
                            "title": "Approve Virtual Network Request",
                            "title_short": "Approve",
                            "icon": "fa fa-thumbs-up",
                            "color": "green-jungle",
                            "perm": "#toggle_state",
                            "states": ['CREATED', 'EDITED']
                        },
                        "create_deny": {
                            "title": "Reject Virtual Network Request",
                            "title_short": "Reject",
                            "icon": "fa fa-thumbs-down",
                            "color": "red-mint",
                            "perm": "#toggle_state",
                            "states": ['CREATED', 'EDITED']
                        },
                        "view_topology": {
                            "title": "View Virtual Network Request",
                            "title_short": "View",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_topology": {
                            "title": "Edit Virtual Network Request",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#create",
                            "states": ['CREATED', 'EDITED']
                        },
                        "delete_topology": {
                            "title": "Delete Virtual Network Request",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                            "states": ['CREATE_REJECTED', 'EDIT_REJECTED', 'ACCEPTED']
                        },
                        "change_mvtn_type": {
                            "title": "Change Virtual Network Type",
                            "title_short": "Tip Değiştir",
                            "icon": "fa fa-refresh",
                            "color": "green-meadow",
                            "perm": "#view"
                        },
                        "action_menu": {
                            "title": "Actions",
                            "title_short": "Actions",
                            "icon": "fa fa-cog",
                            "color": "btn-default"
                        },
                    },
                    "fields": {
                        "mvtnStatus": "Status",
                        "name": "VTN Name",
                        "username": "Username",
                        "creationDate": "Creation Date",
                        "lastUpdateDate": "Last Update Date",
                        "mvtnType": "Type"
                    },
                    "messages": {
                        "approve_confirm": "Do you want to <b>approve</b> '{{dto.mvtnName}}' ?",
                        "approve_success": "VTN: '{{dto.mvtnName}}' has been succesfully approved!",
                        "deny_confirm": "Do you want to <b>reject</b> '{{dto.mvtnName}}' ?",
                        "deny_success": "VTN: '{{dto.mvtnName}}' has been succesfully rejected!",
                        "delete_request_confirm": "Do you want to <b>delete</b> '{{dto.mvtnName}}' ?",
                        "delete_request_success": "VTN: '{{dto.mvtnName}}' has been succesfully deleted!",
                        "delete_confirm": "Do you really want to  <b>delete</b> '{{dto.mvtnName}}' ?",
                        "delete_success": "VTN: '{{dto.mvtnName}}' has been succesfully deleted!",
                        "activate_confirm": "Do you want to <b>activate</b> '{{dto.mvtnName}}' ?",
                        "activate_success": "VTN: '{{dto.mvtnName}}' has been succesfully activated!",
                        "deactivate_confirm": "Do you want to <b>deactivate</b> '{{dto.mvtnName}}' ?",
                        "deactivate_success": "VTN: '{{dto.mvtnName}}' has been succesfully deactivated!"
                    }
                },
                "edit": {
                    "modes": {
                        "edit": {
                            "title": "Confirm",
                            "icon": "fa fa-question-circle",
                            "color": "font-blue-steel"
                        },
                        "create": {
                            "title": "Confirm",
                            "icon": "fa fa-question-circle",
                            "color": "font-blue-steel"
                        }
                    },
                    "fields": {
                        "mvtnType": "Vtn Type"
                    },
                    "messages": {
                        "approve_confirm": "Do you want to approve '{{dto.mvtnName}}' ?",
                        "approve_success": "VTN: '{{dto.mvtnName}}' has been succesfully approved!",
                        "deny_confirm": "Do you want to reject '{{dto.mvtnName}}' ?",
                        "deny_success": "VTN: '{{dto.mvtnName}}' has been succesfully rejected!",
                        "delete_request_confirm": "Do you want to delete '{{dto.mvtnName}}' ?",
                        "delete_request_success": "VTN: '{{dto.mvtnName}}' has been succesfully deleted!",
                        "delete_confirm": "Do you really want to  delete '{{dto.mvtnName}}' ?",
                        "delete_success": "VTN: '{{dto.mvtnName}}' has been succesfully deleted!",
                        "activate_confirm": "Do you want to activate '{{dto.mvtnName}}' ?",
                        "activate_success": "VTN: '{{dto.mvtnName}}' has been succesfully activated!",
                        "deactivate_confirm": "Do you want to deactivate '{{dto.mvtnName}}' ?",
                        "deactivate_success": "VTN: '{{dto.mvtnName}}' has been succesfully deactivated!",
                        "select_mvtn_type": "Please select a network type"
                    }
                },
                "notify": {
                    "messages": {
                        "MvtnCreated": "Virtual Network request for '{{dto.vtnName}}' has been approved.",
                        "MvtnRejected": "Virtual Network request for '{{dto.vtnName}}' has been rejected.",
                        "MvtnUpdateAccepted": "Virtual Network update request for '{{dto.vtnName}}' has been approved.",
                        "MvtnUpdateRejected": "Virtual Network update request for '{{dto.vtnName}}' has been rejected.",
                    }
                }
            },
            "controller_management": {
                "title": "Controller Management",
                "req_title": "Controller Management",
                "icon": "fa fa-gavel",
                "basePerm": "cluster",
                "perm": "#view",
                "controllerSettings": {
                    "title": "Controller Settings",
                    "clusterTree": {
                        "title": "Controller Clusters",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "parameters": "Parameters",
                        "tasks": "Tasks",
                        "switches": "Switches"
                    },
                    "controllerList": {
                        "title": "Network Cluster Controllers",
                        "icon": "fa fa-sitemap",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "actions": {
                            "tls": {
                                "title": "Create TLS Certificate",
                                "title_short": "Create Certificate",
                                "icon": "fa fa-download",
                                "color": "blue-madison",
                                "perm": "#view"
                            },
                            "edit": {
                                "title": "Edit Controller",
                                "title_short": "Edit",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#edit"
                            },
                            "parameters": {
                                "title": "Parameters",
                                "title_short": "Parameters",
                                "icon": "fa fa-sliders",
                                "color": "yellow-casablanca",
                                "perm": "#view"
                            },
                            "tasks": {
                                "title": "Tasks",
                                "title_short": "Tasks",
                                "icon": "fa fa-tasks",
                                "color": "blue-hoki",
                                "perm": "#view"
                            },
                            "switches": {
                                "title": "Switches",
                                "title_short": "Switch",
                                "icon": "fa fa-exchange",
                                "color": "red-sunglo",
                                "perm": "#view"
                            }
                        },
                        "fields": {
                            "status": "Status",
                            "controllerName": "Controller Name",
                            "nm": "Linked NM",
                            "ip": "IP Address",
                            "port": "Port",
                            "ofVersion": "OF Version"
                        }
                    },
                    "tls": {
                        "title": "Create Controller Certificate",
                        "icon": "fa fa-download",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "fields": {
                            "name": {
                                "label": "Controller Name",
                                "placeholder": "",
                                "help_line": "",
                                "help_block": "",
                            },
                            "mac": {
                                "label": "MAC Address",
                                "placeholder": "",
                                "help_line": "",
                                "help_block": "",
                            },
                            "ip": {
                                "label": "IP Address",
                                "placeholder": "",
                                "help_line": "",
                                "help_block": "",
                            }
                        }
                    },
                    "controller": {
                        "icon": "fa fa-users",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "fields": {
                            "name": "Controller Name",
                            "ip": "IP Address",
                            "port": "Port",
                            "location": "Location",
                            "ofVersion": "OF Version",
                            "edit": "Edit",
                            "parameters": "Parameters",
                            "tasks": "Tasks",
                            "switches": "Switches"
                        }
                    },
                    "controllerEdit": {
                        "title": "Network Cluster Controllers",
                        "icon": "fa fa-users",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "fields": {
                            "name": "Controller Name",
                            "ip": "IP Address",
                            "port": "Port",
                            "location": "Location",
                            "edit": "Edit",
                            "parameters": "Parameters",
                            "tasks": "Tasks",
                            "switches": "Switches"
                        },
                        "messages": {
                            "save_success": "'{{dto.name}}' isimli kontrolcü başarıyla güncellenmiştir.",
                            "create_success": "'{{dto.name}}' isimli kontrolcü başarıyla oluşturulmuştur.",
                        }
                    },
                    "parameters": {
                        "title": "Network Cluster Controllers",
                        "icon": "fa fa-sliders",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "actions": {
                            "edit": {
                                "title": "Edit Parameter",
                                "title_short": "Edit",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#edit"
                            },
                        },
                        "fields": {
                            "componentName": "Component Name",
                            "configKey": "Config Key",
                            "nodeVersion": "Version",
                            "configValue": "Config Value",
                        }
                    },
                    "tasks": {
                        "title": "Tasks",
                        "icon": "fa fa-tasks",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "fields": {
                            "workStatus": "Work Status",
                            "actionStatus": "Action Status",
                            "name": "Task Name",
                            "version": "Version",
                            "startTime": "Start Time"
                        },
                        "messages": {
                            "save_success": "The task '{{dto.name}}' successfully updated."
                        }
                    },
                    "switches": {
                        "title": "Switches",
                        "icon": "fa fa-exchange",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "actions": {
                            "edit": {
                                "title": "Edit Switch",
                                "title_short": "Edit",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#view"
                            },
                            "link": {
                                "title": "Assign the switch",
                                "title_short": "Assign",
                                "icon": "fa fa-link",
                                "color": "blue-madison",
                                "perm": "#view"
                            },
                            "unlink": {
                                "title": "Unassign the switch",
                                "title_short": "Unassign",
                                "icon": "fa fa-unlink",
                                "color": "red-flamingo",
                                "perm": "#view"
                            }
                        },
                        "fields": {
                            "status": "Status",
                            "type": "Type",
                            "name": "Controller Name",
                            "controller": "Controller",
                            "mac": "MAC Address"
                        },
                        "messages": {
                            "unlink_confirm": "Do you want to unassign the switch from controller '{{dto.name}}'?",
                            "unlink_success": "The switch successfully unassigned from the controller '{{dto.name}}'!"
                        },
                        "link": {
                            "basePerm": "cluster",
                            "modes": {
                                "edit": {
                                    "title": "Assign Controller",
                                    "icon": "fa fa-plus",
                                    "perm": "#view",
                                },
                            },
                            "fields": {
                                "name": "Controller Name",
                                "switches": "Switch"
                            },
                            "messages": {
                                "link_success": "The switch successfully assigned to the controller '{{dto.name}}'."
                            }
                        }
                    }
                },
                "switchSettings": {
                    "title": "Switch Settings",
                    "edit": {
                        "basePerm": "cluster",
                        "modes": {
                            "edit": {
                                "title": "Edit Switch",
                                "icon": "fa fa-pencil",
                                "perm": "#view",
                            },
                            "create": {
                                "title": "Add Switch",
                                "icon": "fa fa-plus",
                                "perm": "#create",
                            }
                        },
                        "fields": {
                            "name": "Switch Name",
                            "cluster": "Cluster",
                            "masterController": "Master Controller",
                            "slaveControllers": "Slave Controllers",
                            "mac": "MAC Address",
                            "ip": "IP Address",
                            "id": "ID",
                            "datapathId": "Data Path Id",
                            "protocol": "Protocol",
                            "port": "Port",
                            "ovsdbSupport": "OVSDB Support",
                            "ovsdbPort": "OVSDB Port",
                            "powersavermode": "Power Saver Mode",
                            "is_controller_device": "Controller Device",
                            "switchmetermode": "Meter Support",
                            "connectionType": "Connection Type",
                            "offlineType": "Offline Type",
                            "location": "Location",
                            "securityLevel": "Security Level",
                            "powerUsage": "Daily Power Usage",
                            "powerUsageUnit": "kWh",
                            "totalBandwidth": "Total Bandwidth",
                            "totalBandwidthUnit": "Mbps",
                            "dpdk": "DPDK",
                            "ssl": "SSL Support",
                            "ncName": "Name",
                            "ncPassword": "Password"
                        },
                        "messages": {
                            "save_success": "'{{dto.name}}' switch is successfully updated.",
                            "create_success": "'{{dto.name}}' switch is successfully created.",
                            "delete_confirm": "Do you want to delete switch '{{dto.name}}' ?",
                            "delete_success": "Switch '{{dto.name}}' deleted successfully."
                        },
                        "level": "Level"
                    },
                    "list": {
                        "title": "Switches",
                        "icon": "fa fa-exchange",
                        "basePerm": "cluster",
                        "perm": "#list",
                        "actions": {
                            "create": {
                                "title": "Add Switch",
                                "title_short": "Add",
                                "icon": "fa fa-plus-circle",
                                "color": "blue-madison",
                                "perm": "#create"
                            },
                            "info": {
                                "title": "Switch Details",
                                "title_short": "Details",
                                "icon": "fa fa-info-circle",
                                "color": "default",
                                "perm": "#view"
                            },
                            "edit": {
                                "title": "Edit Switch",
                                "title_short": "Switch",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#view"
                            },
                            "delete": {
                                "title": "Delete Switch",
                                "title_short": "Delete",
                                "icon": "fa fa-trash-o",
                                "color": "btn-outline uppercase red-sunglo",
                                "perm": "#delete"
                            },
                            "tls": {
                                "title": "Download TLS Certificate",
                                "title_short": "Download",
                                "icon": "fa fa-download",
                                "color": "yellow-gold",
                                "perm": "#view"
                            }
                        },
                        "fields": {
                            "status": "State",
                            "type": "Type",
                            "name": "Switch Name",
                            "controllers": "Controllers",
                            "ipv4": "IP Address",
                            "mac": "MAC Address"
                        },
                        "messages": {
                            "save_success": "'{{dto.name}}' switch is successfully updated.",
                            "create_success": "'{{dto.name}}' switch is successfully created.",
                            "delete_confirm": "Do you want to delete switch '{{dto.name}}' ?",
                            "delete_success": "Switch '{{dto.name}}' deleted successfully."
                        }
                    }
                },
	            "wanDomain": {
		            "title": "WAN Domain",
		            "icon": "fa fa-globe",
		            "edit": {
			            "basePerm": "cluster",
			            "modes": {
				            "edit": {
					            "title": "Edit Domain",
					            "icon": "fa fa-pencil",
					            "perm": "#view",
				            },
				            "create": {
					            "title": "Create Domain",
					            "icon": "fa fa-plus",
					            "perm": "#create",
				            }
			            },
			            "fields": {
				            "name": "Domain Name",
				            "domainId": "Domain Id",
				            "domainList": "Domain List"
			            },
			            "messages": {
				            "save_success": "Domain '{{dto.name}}' is successfully updated.",
				            "create_success": "Domain '{{dto.name}}' is successfully created.",
				            "create_all_success": "Wan domains are created successfully"
			            },
			            "help":"Enter DomainID and Domain Name by separating with ';' (semicolon) one entry at single line. Eg: 1;domainname"
		            },
		            "list": {
			            "title": "Domain Descriptions",
			            "icon": "fa fa-globe",
			            "basePerm": "cluster",
			            "perm": "#list",
			            "actions": {
				            "create": {
					            "title": "Create Domain",
					            "title_short": "Create",
					            "icon": "fa fa-plus-circle",
					            "color": "blue-madison",
					            "perm": "#create"
				            },
				            "multiCreate":{
					            "title": "Create Multiple",
					            "title_short": "Create Multiple",
					            "icon": "fa fa-plus-circle",
					            "color": "blue-madison",
					            "perm": "#create"
				            },
				            "edit": {
					            "title": "Edit Domain",
					            "title_short": "Edit",
					            "icon": "fa fa-pencil",
					            "color": "green-meadow",
					            "perm": "#view"
				            },
				            "delete": {
					            "title": "Delete Domain",
					            "title_short": "Delete",
					            "icon": "fa fa-trash-o",
					            "color": "btn-outline uppercase red-sunglo",
					            "perm": "#delete"
				            },
			            },
			            "fields": {
				            "name": "Domain Name",
				            "domainId": "Domain Id",
				            "status": "Status",
			            },
			            "messages": {
				            "delete_confirm": "Do you want to delete domain '{{dto.name}}'?",
				            "delete_success": "Domain '{{dto.name}}' is deleted successfully."
			            }
		            }
	            }
            },
        },
        "user_management": {
            "title": "User Management",
            "icon": "fa fa-user-secret",
            "perm": "common:view",
            "roles": {
                "list": {
                    "title": "Roles",
                    "icon": "icon-shield",
                    "basePerm": "roles",
                    "perm": "#list",
                    "actions": {
                        "create_role": {
                            "title": "Add Role",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_role": {
                            "title": "Role Details",
                            "title_short": "Details",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_role": {
                            "title": "Edit Role",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_role": {
                            "title": "Delete Role",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "status": "Status",
                        "name": "Role Name",
                        "securityLevel": "Security Level",
                        "created": "Created",
                        "modified": "Modified"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete '{{dto.name}}' role?",
                        "delete_success": "'{{dto.name}}' role is succesfully deleted!"
                    }
                },
                "edit": {
                    "basePerm": "roles",
                    "modes": {
                        "edit": {
                            "title": "Edit Role",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add Role",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "status": {
                            "label": "Role Status",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "name": {
                            "label": "Role Name",
                            "placeholder": "Enter role name...",
                            "help_line": "Please enter a unique Role name..",
                            "help_block": "",
                        },
                        "notes": {
                            "label": "Notes",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "securityLevel": {
                            "label": "Security Level",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "created": {
                            "label": "Created Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "modified": {
                            "label": "Modified Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "permList": {
                            "label": "Permissions",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                            "selectableHeader": "Available Perm.",
                            "selectionHeader": "Assigned Perm.",
                        },
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' role is successfully updated.",
                        "create_success": "'{{dto.name}}' role is succesfully created.",
                    },
                    "labels": {
                        "permissions": "All Permissions"
                    }
                },
                "create": {
                    "title": "Add Role",
                    "icon": "fa fa-plus",
                    "basePerm": "roles",
                    "perm": "#create",
                }
            },
            "users": {
                "list": {
                    "title": "Users",
                    "icon": "icon-user",
                    "basePerm": "users",
                    "perm": "#list",
                    "actions": {
                        "create_user": {
                            "title": "Add User",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_user": {
                            "title": "User Details",
                            "title_short": "Details",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_user": {
                            "title": "Edit User",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete_user": {
                            "title": "Delete User",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        },
                        "set_pwd": {
                            "title": "Set Password",
                            "title_short": "Set Pwd",
                            "icon": "fa fa-key",
                            "color": "yellow-gold",
                            "perm": "common:view", //page handles the permission check
                        },
                        "reports": {
                            "title": "Call Reports",
                            "title_short": "Reports",
                            "icon": "fa-file-text",
                            "color": "blue-steel",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "status": "Status",
                        "username": "User Name",
                        "name": "Name",
                        "surname": "Surname",
                        "email": "E-mail",
                        "created": "Created",
                        "modified": "Modified",
                        "lastAccessed": "L. Access",
                        "tcNo": "ID Number",
                        "accessDateStart": "First Accessibility Date",
                        "accessDateEnd": "Last Accessibility Date",
                        "userType": "User Type",
                        "AccessGroup": "Access Group",
                        "byodGroup": "BYOD Group"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete user '{{dto.username}}'?",
                        "delete_success": "User '{{dto.username}}' is succesfully deleted!",
                        "delete_self_not_allowed": "You cannot delete your own user!"
                    }
                },
                "edit": {
                    "basePerm": "users",
                    "help_page": "http://www.google.com",
                    "modes": {
                        "edit": {
                            "title": "Edit User",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add User",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "status": {
                            "label": "Account Status",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "username": {
                            "label": "User Name",
                            "placeholder": "Enter username...",
                            "help_line": "Please enter a unique username with at least 5 characters.",
                            "help_block": "",
                        },
                        "password": {
                            "label": "Password",
                            "placeholder": "Enter password...",
                            "help_line": "Please enter a password with at least 6 characters. \n Password must contain at least 1 upper case, 1 lower case letter, 1 numerical value and 1 special character (!@#\\$%^&*).",
                            "help_block": "",
                        },
                        "passwordRetype": {
                            "label": "Password (Retype)",
                            "placeholder": "Retype password...",
                            "help_line": "Please enter the password once more for security purposes.",
                            "help_block": "",
                        },
                        "name": {
                            "label": "Name",
                            "placeholder": "Enter name...",
                            "help_line": "",
                            "help_block": "",
                        },
                        "surname": {
                            "label": "Surname",
                            "placeholder": "Enter surname...",
                            "help_line": "",
                            "help_block": "",
                        },
                        "email": {
                            "label": "E-mail Address",
                            "placeholder": "Please enter an e-mail address.",
                            "help_line": "",
                            "help_block": "",
                        },
                        "notes": {
                            "label": "Notes",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "securityLevel": {
                            "label": "Security Level",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "created": {
                            "label": "Created Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "modified": {
                            "label": "Modified Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "lastAccessed": {
                            "label": "Last Access Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "roleList": {
                            "label": "Roles",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                            "selectableHeader": "Available Roles",
                            "selectionHeader": "Assigned Roles",
                        },
                        "tcNo": {
                            "label": "ID No",
                            "placeholder": "Enter Id No",
                            "help_line": "",
                            "help_block": "",
                        },
                        "accessDateStart": {
                            "label": "First Accessibility Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "accessDateEnd": {
                            "label": "Last Accessibility Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "userType": {
                            "label": "User Type",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "nacGroup": {
                            "label": "Access Group",
                            "placeholder": "Select Access Group",
                            "help_line": "",
                            "help_block": "",
                        },
                        "byodGroup": {
                            "label": "Auto BYOD Access Group",
                            "placeholder": "Select Auto BYOD Access Group",
                            "help_line": "",
                            "help_block": "",
                        },
                        "thirdparty": {
                            "label": "3th Party App"
                        }
                    },
                    "messages": {
                        "save_success": "User '{{dto.username}}' is succesfully updated.",
                        "create_success": "User '{{dto.username}}' is succesfully created.",
                        "unmatched_passwords": "Passwords must match"
                    },
                    "labels": {
                        "accessDateSettings": "Set Access Time",
                        "personalDevices": "Personnal Devices"
                    }
                },
                "create": {
                    "title": "Add User",
                    "icon": "fa fa-plus",
                    "basePerm": "users",
                    "perm": "#create",
                },
                "change_pwd": {
                    "title": "Change Password",
                    "icon": "fa fa-key",
                    "basePerm": "users",
                    "perm": "#change_pwd",
                    "actions": {},
                    "fields": {
                        "currentPassword": {
                            "label": "Current Password",
                            "placeholder": "Please enter your current password...",
                            "help_line": "",
                            "help_block": "",
                        },
                        "newPassword": {
                            "label": "New Password",
                            "placeholder": "Please enter your new password...",
                            "help_line": "Please enter a password with at least 6 characters. \n Password must contain at least 1 upper case, 1 lower case letter, 1 numerical value and 1 special character (!@#\\$%^&*).",
                            "help_block": "",
                        },
                        "newPasswordRetype": {
                            "label": "New Password (Retype)",
                            "placeholder": "Please re-enter your new password...",
                            "help_line": "Please enter the password once more for security purposes.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "change_success": "Your password has been succesfully updated.",
                        "passwords_mismatch": "Your new passwords mismatch. Please re-enter your new password.",
                    },
                    "labels": {}
                },
                "set_pwd": {
                    "title": "Set Password",
                    "icon": "fa fa-key",
                    "basePerm": "users",
                    "perm": "#set_pwd",
                    "actions": {},
                    "fields": {
                        "username": {
                            "label": "User Name",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "newPassword": {
                            "label": "New Password",
                            "placeholder": "Enter new password...",
                            "help_line": "Please enter a password with at least 6 characters. \n Password must contain at least 1 upper case, 1 lower case letter, 1 numerical value and 1 special character (!@#\\$%^&*).",
                            "help_block": "",
                        },
                        "newPasswordRetype": {
                            "label": "New Password (Retype)",
                            "placeholder": "Re-enter password.",
                            "help_line": "Please re-enter password again for security purposes.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "change_success": "Password of user '{{dto.username}}' is succesfully updated.",
                        "passwords_mismatch": "Password do not match, please re-enter again.",
                    },
                    "labels": {}
                },
            },
            "user_logs": {
                "title": "Query User Activities",
                "icon": "fa fa-list-alt",
                "perm": "common:view",
                "query_criteria": "Query Criteria",
                "query": "Query",
                "list": {
                    "title": "Query User Activities",
                    "icon": "fa fa-list-alt",
                    "basePerm": "alarm_logs",
                    "perm": "#list",
                    "actions": {
                        "view": {
                            "title": "Details",
                            "title_short": "Detail",
                            "icon": "fa fa-info-circle",
                            "color": "default",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "status": "Status",
                        "severity": "Severity",
                        "name": "Name",
                        "surname": "Surname",
                        "source": "Module",
                        "resource": "Unit",
                        "time": "Date",
                        "ip": "IP",
                        "description": "Description",
                        "type": "Type",
                        "alarmStatus": "User Status",
                        "sourceHost": "Source Host",
                        "sourceInstance": "Source Instance",
                        "vtnName": "Virtual Name",
                        "srcIP": "Source",
                        "dstIP": "Target",
                        "device": "Device",
                        "user": "User",
                        "begin_time": "Begin Time",
                        "end_time": "End Time",
                        "bytes": "Bytes",
                        "life": "Life",
                        "packets": "Packets",
                        "rate": "Rate",
                        "protocol": "Protocol"
                    },
                    "messages": {
                        "select_item": "Lütfen detaylar için listeden bir günlük kaydı seçiniz. ",
                        "no_user": "User could not be found",
                        "no_ip": "IP could not be found.",
                        "select_user": "Please select a user",
                        "write_ip": "Please enter an IP",
                        "no_data": "Couldn't find any logs for this user",
                        "select_date": "Please select a date"
                    },
                    "labels": {
                        "all": "Hepsi"
                    }
                },
                "details": {
                    "title": "'{{dto.name}}' Details",
                    "title_no_selection": "Details",
                    "icon": "fa fa-list-alt",
                    "basePerm": "alarm_logs",
                    "perm": "#view",
                    "actions": {},
                    "fields": {
                        "status": "Status",
                        "severity": "Severity",
                        "name": "Name",
                        "source": "Module",
                        "resource": "Unit",
                        "time": "Date",
                        "description": "Description",
                        "type": "Type",
                        "alarmStatus": "User Status",
                        "sourceHost": "Source Host",
                        "sourceInstance": "Source Instance",
                        "srcIP": "Source",
                        "dstIP": "Target",
                        "device": "Device",
                        "vtnName": "Virtual Name"
                    },
                    "messages": {},
                },
            },
            "third_party": {
                "list": {
                    "title": "3. Party Applications",
                    "icon": "fa fa-puzzle-piece",
                    "basePerm": "apps",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Add Application",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Application Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit": {
                            "title": "Edit Application",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete": {
                            "title": "Delete Application",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        },
                        "reports": {
                            "title": "Call Reports",
                            "title_short": "Reports",
                            "icon": "fa-file-text",
                            "color": "blue-steel",
                            "perm": "tsdb_metric:list"
                        }
                    },
                    "fields": {
                        "status": "Status",
                        "name": "Name",
                        "roleList": "Roles",
                        "userCount": "User Count",
                        "call_count": "Call Count (Denied/Allowed)"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete '{{dto.name}}' application?",
                        "delete_success": "Application '{{dto.name}}' successfully deleted!",
                    }
                },
                "edit": {
                    "basePerm": "apps",
                    "modes": {
                        "edit": {
                            "title": "Edit Application",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add Application",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "status": "Status",
                        "name": "Applicaiton Name",
                        "authorizedRoles": "Authorized Roles",
                        "maxUserCount": "Max User Count",
                        "maxPolicyPriority": "Max. Policy Priority",
                        "select": "Select",
                        "roles": "Roles",
                        "type": "Type",
                        "editable": "Editable",
                        "noneditable": "Not Editable",
                        "active": "Active",
                        "passive": "Passive"
                    },
                    "messages": {
                        "save_success": "Applicaiton '{{dto.name}}' is updated successfully",
                        "create_success": "Applicaiton '{{dto.name}}' is created successfully",
                    }
                },
                "call_reports": {
                    "title": "Call Reports",
                    "basePerm": "tsdb_metric",
	                "perm": "#list",
	                "icon": "fa fa-pencil",
                    "fields": {
                        "method": "API Method",
                        "allowed": "Allowed",
                        "denied": "Denied",
                        "call_reports": "Call Reports"
                    },
                    "messages": {
                        "save_success": "Applicaiton '{{dto.name}}' is updated successfully",
                        "create_success": "Applicaiton '{{dto.name}}' is created successfully",
                    }
                }
            },
        },
        "policy_management": {
            "title": "Policy Management",
            "icon": "fa fa-shield",
            "perm": "common:view",
            "traffic_categories": {
                "list": {
                    "title": "Traffic Classes",
                    "icon": "icon-map",
                    "basePerm": "traffic_class",
                    "perm": "#list",
                    "actions": {
                        "create_traffic_category": {
                            "title": "Add Traffic Class",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_traffic_category": {
                            "title": "View Traffic Class",
                            "title_short": "View",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_traffic_category": {
                            "title": "Edit Traffic Class",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete_traffic_category": {
                            "title": "Delete Traffic Class",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        }
                    },
                    "fields": {
                        "cat_name": "Category Name",
                        "class_level": "Class Level",
                        "bandwidth": "Bandwidth",
                        "jitter": "Jitter",
                        "delay": "Delay",
                        "collision": "Collision",
                        "collision_unit": "packet/s"
                    },
                    "messages": {
                        "delete_confirm": "Are you sure you want to delete '{{dto.serviceClassName}}' ?",
                        "delete_success": "'{{dto.serviceClassName}}' deleted!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "traffic_class",
                    "modes": {
                        "edit": {
                            "title": "Edit Traffic Class",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add Traffic Class",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "status": {
                            "label": "Status",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": ""
                        },
                        "traffic_cat_name": {
                            "label": "Traffic Class Name",
                            "placeholder": "Enter a Traffic Class name...",
                            "help_line": "Enter a Traffic Class name.",
                            "help_block": ""
                        },
                        "bandwidth": {
                            "label": "Bandwidth",
                            "placeholder": "Enter a bandwidth value...",
                            "help_line": "Enter a bandwidth value.",
                            "help_block": ""
                        },
                        "jitter": {
                            "label": "Jitter",
                            "placeholder": "Enter a jitter value...",
                            "help_line": "Enter a jitter value.",
                            "help_block": ""
                        },
                        "delay": {
                            "label": "Delay",
                            "placeholder": "Enter a delay value...",
                            "help_line": "Enter a delay value.",
                            "help_block": ""
                        },
                        "collision": {
                            "label": "Collision",
                            "placeholder": "Enter a collision value...",
                            "help_line": "Enter a collision value.",
                            "help_block": "",
                            "unit": "packet/s"
                        },
                        "loss": {
                            "label": "Loss",
                            "placeholder": "Enter a loss value...",
                            "help_line": "Enter a loss value.",
                            "help_block": "",
                            "unit": "packet/s"
                        },
                        "class_level": "Class Level",
                    },
                    "messages": {
                        "save_success": "'{{dto.username}}' updated.",
                        "create_success": "'{{dto.username}}' added.",
                    },
                    "labels": {}
                }
            },
            "service_quality": {
                "list": {
                    "title": "Service Quality Policies",
                    "icon": "fa fa-envira",
                    "basePerm": "service_quality",
                    "perm": "#list",
                    "actions": {
                        "create_service_quality_policy": {
                            "title": "Add Service Q. Policy",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_service_quality_policy": {
                            "title": "Service Q. Policy Details",
                            "title_short": "Details",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_service_quality_policy": {
                            "title": "Edit Service Q. Policy",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_service_quality_policy": {
                            "title": "Delete Service Q. Policy",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "cat_name": "Policy Name",
                        "class": "Traffic Class",
                        "priority": "Priority",
                        "security_level": "Security Level",
                        "bandwidth": "Bandwidth",
                        "required_devices": "Required Devices",
                        "mvtnId": "Virtual Network",
                        "blocked_devices": "Blocked Devices",
                        "rules": "Active Rules"
                    },
                    "messages": {
                        "delete_confirm": "Are you sure you want to delete '{{dto.policyName}}' ?",
                        "delete_success": "'{{dto.policyName}}' deleted!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "service_quality",
                    "modes": {
                        "edit": {
                            "title": "Edit Service Quality Policy",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add Service Quality Policy",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "title": "Actions",
                        "add": "Add",
                        "delete": "Delete",
                        "dscp_marking": {
                            "title": "DSCP Marking",
                            "settings_title": "DSCP Marking Settings"
                        },
                        "ip_header_change": {
                            "title": "IP Header Change",
                            "settings_title": "IP Header Change Settings",
                            "target_ip": "Target IP",
                            "mac": "MAC"
                        },
                        "vlan": {
                            "title": "VLAN Labeling",
                            "settings_title": "VLAN Labeling Settings",
                            "popValue": "Pop Value",
                            "pushValue": "Push Value",
                            "pushToPacket": "Push To Packet"
                        },
                        "traffic_hopping": {
                            "title": "Traffic Hopping",
                            "settings_title": "Traffic Hopping Settings",
                            "max_hop": "Max Hop Count",
                            "period": "Hop Period",
                            "periodUnit": "second(s)",
                            "hop_period_error": "Please enter hop period a value greater than 30"
                        },
                        "path_reduce": {
                            "title": "Path Control",
                            "settings_title": "Path Control Settings",
                            "flow_control_management": "Reservation",
                            "flow_control_priority": "Reservation Priority",
                            "setPath": "Set Path",
                            "useLowFlowSwitch": "Use low flowed switches",
                            "useMinHOP": "Set with min HOP number"
                        },
                        "internet": {
                            "title": "Internet",
                            "settings_title": "Internet Settings",
                            "access_control": "Access Control",
                        },
                        "encrypted_path": {
                            "title": "Encrypted Path",
                            "settings_title": "Encrypted Path Settings",
                            "info": "Encrypted path setup is active."
                        },
                        "flow_balancer": {
                            "title": "Flow Balancer",
                            "settings_title": "Flow Balancer Settings",
                            "method": "Balancing Method"
                        },
                        "sfc": {
                            "title": "Service Chaining",
                            "settings_title": "Service Chaining Settings",
                            "method": "Service Chain Type",
                        },
                        "control_channel": {
                            "title": "Use of Control Channel",
                            "settings_title": "Use of Control Channel Settings",
                            "label": "Control Channel will be used for data flow.",
                        },
                        "nothing_selected": "Please choose an action from the left menu or create a new action."
                    },
                    "fields": {
                        "blocked_devices": {
                            "label": "Blocked Devices",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": ""
                        },
                        "policy_name": {
                            "label": "Policy Name",
                            "placeholder": "Enter a policy Name...",
                            "help_line": "Enter a policy Name.",
                            "help_block": ""
                        },
                        "traffic_category": {
                            "label": "Traffic Class",
                            "placeholder": "Enter Traffic Class value...",
                            "help_line": "Enter Traffic Class value.",
                            "help_block": ""
                        },
                        "traffic_category_add": {
                            "label": "Add",
                            "placeholder": "Enter Traffic Class value...",
                            "help_line": "Enter Traffic Class value.",
                            "help_block": ""
                        },
                        "priority": {
                            "label": "Priority",
                            "placeholder": "Enter a priority value...",
                            "help_line": "Enter a priority value.",
                            "help_block": "",
                            "priority_error": "Please enter a valid priority"
                        },
                        "virtual_network": {
                            "label": "Virtual Network",
                            "placeholder": "Select a Virtual Network",
                            "help_line": "",
                            "help_block": ""
                        },
                        "security_level": {
                            "label": "Security Level",
                            "placeholder": "Enter a Security Level value...",
                            "help_line": "Enter a Security Level value.",
                            "help_block": ""
                        },
                        "link_type": {
                            "label": "Required Link Type",
                            "placeholder": "Select a Link Type...",
                            "help_line": "",
                            "help_block": ""
                        },
                        "required_devices": {
                            "label": "Required Devices",
                            "placeholder": "Enter Required Devices...",
                            "help_line": "Enter Required Devices.",
                            "help_block": ""
                        },
                        "max_bw": {
                            "label": "Maximum Bandwidth",
                            "placeholder": "Enter Maximum Bandwidth...",
                            "help_line": "Enter Maximum Bandwidth.",
                            "help_block": ""
                        },
                        "energyConsumption": {
                            "label": "Max. Energy Consumption",
                            "placeholder": "Enter Consumption value...",
                            "help_line": "Enter Maximum Energy Consumption value.",
                            "help_block": "",
                            "unit":"kWh"
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.username}}' edited.",
                        "create_success": "'{{dto.username}}' created.",
                    },
                    "labels": {
                        "title_actions": "Header Actions",
                        "path_actions": "Path Actions",
                        "no_mvtn": "-No Virtual Network-",
                        "no_link_type": "-No Link Type-"
                    }
                }
            },
            "access_control": {
                "list": {
                    "title": "Access Control Policies",
                    "icon": "fa fa-universal-access",
                    "basePerm": "access_policy",
                    "perm": "#list",
                    "actions": {
                        "create_access_control_policy": {
                            "title": "Create Access Control Policy",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_access_control_policy": {
                            "title": "Access Control Policy Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_access_control_policy": {
                            "title": "Edit Access Control Policy",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_access_control_policy": {
                            "title": "Delete Access Control Policy",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "cat_name": "Policy Name",
                        "definitions": "Definitions",
                        "rule_length": "Total Rule Count",
                        "priority": "Priority",
                        "mvtnId": "Virtual Network",
                        "src": "Source",
                        "dst": "Target"
                    },
                    "messages": {
                        "delete_confirm": "Are you sure you want to delete '{{dto.profileName}}'?",
                        "delete_success": "'{{dto.profileName}}' deleted!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "access_policy",
                    "modes": {
                        "edit": {
                            "title": "Edit Access Control Policy",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add Access Control Policy",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "policy_name": {
                            "label": "Policy Name",
                            "placeholder": "Enter Policy Name...",
                            "help_line": "Enter a Policy Name.",
                            "help_block": ""
                        },
                        "priority": {
                            "label": "Priority",
                            "placeholder": "Select a Priority value",
                            "help_line": "Priority",
                            "help_block": ""
                        },
                        "virtualNetwork": {
                            "label": "Virtual Network",
                            "placeholder": "Select a Virtual Network",
                            "help_line": "",
                            "help_block": ""
                        },
                        "allowed_nac_groups": {
                            "label": "Allowed NAC groups",
                            "all": "Select All",
                            "custom": "Custom",
                            "placeholder": "Select NAC group(s)",
                            "help_line": "Priority",
                            "help_block": ""
                        },
                        "rule": "Rule",
                        "actions": {
                            "title": "Actions",
                            "add": "Add Rule",
                            "rule_title": "Rule#",
                            "delete": "Delete",
                            "rule": {
                                "name": "Name",
                                "mode": "Rule Mode",
                                "access_all": "Accessed",
                                "block_all": "Restricted",
                                "mac_params": "MAC Parameters (L2)",
                                "source": "Source",
                                "target": "Target",
                                "app_name": "Application Name",
                                "ip_params": "IP Parameters (L3)",
                                "port_params": "Port Parameters (L4)",
                                "user_params": "End Users",
                                "ip_loc": "IP Location",
                                "user_apps": "End User Application",
                                "time": "Time",
                                "one_time": "One Time",
                                "start_time": "Start Date",
                                "end_time": "End Date",
                                "service_quality_rule": "Service Quality Policy",
                                "protocol": "Protocol",
                                "vlan_tags": "VLAN Tags",
                                "mpls_tags": "MPLS Tags",
                                "inport_tags": "Inport",
                                "selection": "-Select-"
                            },
                            "nothing_selected": "Please select a rule from the left menu or create a new one."
                        }
                    },
                    "messages": {
                        "hasConflict": "Policy has been saved but there are conflicts among rules. Do you want to continue?",
                        "conflictedRules": "This rule has conflicts with these rules: ",
                        "last_rule": "Can not delete last rule",
                        "service_action_list_server_error": "Failed to get Service Action List From Server",
                        "save_success": "'{{dto.profileName}}' updated.",
                        "create_success": "'{{dto.profileName}}' created.",
                        "ip_validation_fail": "IP validation has failed. Please enter a valid format. Ex: 10.0.0.8/32, 10.0.0.7/32",
                        "no_switch": "Couldn't find the relevant switch in the network."
                    },
                    "labels": {
                        "no_mvtn": "-No Virtual Network-"
                    }
                }
            },
            "preliminary_path_policies": {
                "list": {
                    "title": "Proactive Path Policies",
                    "icon": "icon-direction",
                    "basePerm": "pro_path_policy",
                    "perm": "#list",
                    "actions": {
                        "create_preliminary_path_policy": {
                            "title": "Create Proactive Path Policies",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_preliminary_path_policy": {
                            "title": "Proactive Path Policies Details",
                            "title_short": "Details",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#get",
                        },
                        "edit_preliminary_path_policy": {
                            "title": "Edit Proactive Path Policies",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#create",
                        },
                        "delete_preliminary_path_policy": {
                            "title": "Delete Proactive Path Policies",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        }
                    },
                    "fields": {
                        "name": "Policy Name",
                        "status": "Status",
                        "topology": "Topology",
                        "source_host": "Source Host",
                        "target_host": "Target Host",
                        "priority": "Priority",
                        "mvtn_name": "VTN Name",
                        "mvtn_name_short": "VTN",
                        "service_quality_policy": "Service Quality Policy",
                        "service_quality_policy_short": "Qos Policy",
                        "start_date": "Start Date",
                        "start_date_short": "Start",
                        "end_date": "End Date",
                        "end_date_short": "End"
                    },
                    "messages": {
                        "delete_confirm": "Delete '{{dto.name}}'?",
                        "delete_success": "'{{dto.name}}' deleted!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "pro_path_policy",
                    "modes": {
                        "edit": {
                            "title": "Edit Proactive Path Policies",
                            "icon": "fa fa-pencil",
                            "perm": "#create",
                        },
                        "create": {
                            "title": "Create Proactive Path Policies",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "priority": {
                            "label": "Priority",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": ""
                        },
                        "topology": {
                            "label": "Topology"
                        },
                        "name": {
                            "label": "Policy Name",
                            "placeholder": "Enter a Proactive Path Policy name",
                            "help_line": "Enter a Proactive Path Policy name.",
                            "help_block": ""
                        },
                        "service_quality_policy": {
                            "label": "Service Quality Policy",
                            "help_block": "Network {{dto.name}}  doesn't have any service quality policies"
                        },
                        "source_host": {
                            "label": "Source Host",
                            "help_block": ""
                        },
                        "target_host": {
                            "label": "Target Host",
                            "help_block": ""
                        },
                        "start_date": {
                            "label": "Start Date"
                        },
                        "end_date": {
                            "label": "End Date"
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' edited.",
                        "create_success": "'{{dto.name}}' created.",
                    },
                    "labels": {}
                }
            },
            "overlay": {
                "list": {
                    "title": "Overlay Policies",
                    "icon": "fa fa-university",
                    "basePerm": "overlay_policy",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Create Overlay Policy",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Overlay Policy Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit": {
                            "title": "Edit Overlay Policy",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete": {
                            "title": "Delete Overlay Policy",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "policyName": "Policy Name",
                        "accessPolicyAction": "Rule Mode",
                        "priority": "Priority",
                        "serviceAction": "S.A. Policy",
                        "details": "Details",
                        "updateTime": "Last Updated",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete '{{dto.policyName}}'?",
                        "delete_success": "'{{dto.policyName}}' is deleted!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "overlay_policy",
                    "modes": {
                        "edit": {
                            "title": "Edit Overlay Policy",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Create Overlay Policy",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "title": "Actions",
                        "add": "Create",
                        "delete": "Delete",
                    },
                    "fields": {
                        "name": "Name",
                        "mode": "Rule Mode",
                        "priority": "Policy Priority",
                        "access_all": "Open",
                        "block_all": "Restricted",
                        "mac_params": "MAC Parameters (L2)",
                        "source": "Source",
                        "target": "Target",
                        "ip_params": "IP Parameters (L3)",
                        "port_params": "Port Parameters (L4)",
                        "end_user": "End User",
                        "end_user_application": "End User Application",
                        "vlan_tag": "VLAN Tag",
                        "mpls_tag": "MPLS Tag",
                        "inport": "Inport",
                        "selection": "-Select-",
                        "time": "Time",
                        "one_time": "One Time",
                        "start_time": "Start Time",
                        "end_time": "End Time",
                        "service_quality_rule": "Service Quality Policy",
                        "protocol": "Protocol"
                    },
                    "messages": {
                        "save_success": "'{{dto.policyName}}' is succesfully updated.",
                        "create_success": "'{{dto.policyName}}' is succesfully created.",
                    },
                    "labels": {}
                }
            },
            "sfc": {
                "list": {
                    "title": "Service Function Chaining",
                    "icon": "fa fa-server",
                    "basePerm": "sfc",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Create Service Chain",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Service Chain Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "delete": {
                            "title": "Delete Service Chain",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "status": "Status",
                        "sfcName": "Service Chain Name",
                        "type": "Type",
                        "chainList": "Chain List",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete '{{dto.policyName}}'?",
                        "delete_success": "'{{dto.policyName}}' is deleted!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "sfc",
                    "modes": {
                        "create": {
                            "title": "Create Service Chain",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "title": "Actions",
                        "add": "Create",
                        "delete": "Delete",
                    },
                    "fields": {
                        "name": "Service Chain Name",
                        "type": "Type",
                        "lb": "LB",
                        "firewall": "Firewall",
                        "dpi": "DPI"
                    },
                    "messages": {
                        "save_success": "'{{dto.policyName}}' is succesfully updated.",
                        "create_success": "'{{dto.policyName}}' is succesfully created.",
                    },
                    "labels": {
                        "vnfChain": "VNF Chain"
                    }
                }
            },
            "emergency": {
                "list": {
                    "title": "Emergency Policies",
                    "icon": "fa fa-shield",
                    "basePerm": "emergency_pol",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Create Emergency Policy",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Emergency Policy Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit": {
                            "title": "Edit Emergency Policy",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete": {
                            "title": "Delete Emergency Policy",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "policyName": "Policy Name",
                        "capacityLoss": "Capacity Loss",
                        "trafficThreshold": "Traffic Threshold",
                        "routeTransfer": "Route Transfer",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete '{{dto.name}}'?",
                        "delete_success": "'{{dto.name}}' is deleted!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "emergency_pol",
                    "modes": {
                        "edit": {
                            "title": "Edit Emergency Policy",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Create Emergency Policy",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "title": "Actions",
                        "add": "Create",
                        "delete": "Delete",
                    },
                    "fields": {
                        "name": "Policy Name",
                        "capacityLoss": "Total Capacity Loss",
                        "trafficThreshold": "Traffic Threshold",
                        "actions": "Actions",
                        "stopVNFList": "VNF Types to Stop",
                        "startVNFList": "VNF Types to Start",
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' is succesfully updated.",
                        "create_success": "'{{dto.name}}' is succesfully created.",
                    },
                    "labels": {
                        "route": "Transfer route definitions to other clusters."
                    }
                }
            }
        },
        "nac_management": {
            "title": "Network Access Management",
            "icon": "fa fa-key",
            "perm": "common:view",
            "server": {
                "list": {
                    "title": "AAA Servers",
                    "icon": "fa fa-server",
                    "basePerm": "server",
                    "perm": "#list",
                    "actions": {
                        "create_aaaServer": {
                            "title": "Add AAA Server",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_aaaServer": {
                            "title": "AAA Server Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_aaaServer": {
                            "title": "Edit AAA Server",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_aaaServer": {
                            "title": "Delete AAA Server",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "list_aaaServer": {
                            "title": "List AAA Server",
                            "title_short": "List",
                            "icon": "fa fa-list",
                            "color": "blue-madison",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "name": "Server Name",
                        "userName": "User Name",
                        "address": "Server IP",
                        "protocol": "Protocol",
                        "deadTime": "Dead Time",
                        "retransmission": "Retransmission",
                        "port": "Port"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete '{{dto.name}}' server?",
                        "delete_success": "'{{dto.name}}' server is deleted",
                    }
                },
                "edit": {
                    "basePerm": "server",
                    "modes": {
                        "edit": {
                            "title": "Edit AAA Server",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add AAA Server",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        },

                    },
                    "actions": {},
                    "fields": {
                        "name": {
                            "label": "Server Name",
                            "placeholder": "Enter server name",
                            "help_line": "",
                            "help_block": "",
                        },
                        "userName": {
                            "label": "User Name",
                            "placeholder": "Enter user name",
                            "help_line": "",
                            "help_block": "",
                        },
                        "password": {
                            "label": "Password",
                            "placeholder": "Enter password",
                            "help_line": "",
                            "help_block": "",
                        },
                        "secretKey": {
                            "label": "Secret Key",
                            "placeholder": "Enter secret key",
                            "help_line": "",
                            "help_block": "",
                        },
                        "address": {
                            "label": "Server IP Address",
                            "placeholder": "Enter server IP address",
                            "help_line": "",
                            "help_block": "",
                        },
                        "port": {
                            "label": "Port",
                            "placeholder": "Enter port number",
                            "help_line": "",
                            "help_block": "",
                        },
                        "deadTime": {
                            "label": "Dead Time",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "retransmission": {
                            "label": "Retransmission",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "protocol": {
                            "label": "Protocol",
                            "placeholder": "Choose",
                            "help_line": "",
                            "help_block": "",
                        },
                        "ldapUseSSL": {
                            "label": "LDAP over SSL",
                            "placeholder": "Choose",
                            "help_line": "",
                            "help_block": "",
                        },
                        "usingDB": {
                            "label": "AAA Source",
                            "placeholder": "Choose",
                            "help_line": "",
                            "help_block": "",
                            "true": "Internal Database",
                            "false": "LDAP Server"
                        }
                    },
                    "messages": {
                        "save_success": "Group '{{dto.name}}' is successfully updated",
                        "create_success": "Group '{{dto.name}}' is successfully created",
                    },
                    "labels": {
                        "ldapSettings": "LDAP Settings",
                        "radiusSettings": "Radius Settings"
                    },
                },
                "create": {
                    "title": "Add AAA Server",
                    "icon": "fa fa-plus",
                    "basePerm": "server",
                    "perm": "#create",
                }
            },
            "profiles": {
                "list": {
                    "title": "Profiles",
                    "icon": "fa fa-tags",
                    "basePerm": "nacgroup",
                    "perm": "#list",
                    "actions": {
                        "create_profile": {
                            "title": "Add Profile",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_profile": {
                            "title": "Profile Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_profile": {
                            "title": "Edit Profile",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_profile": {
                            "title": "Delete Profile",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "list_group": {
                            "title": "Assigned Device List",
                            "title_short": "List",
                            "icon": "fa fa-list",
                            "color": "blue-madison",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "status": "Status",
                        "groupType": "Group Type",
                        "name": "Group Name",
                        "servicePolicy": "Service Policy",
                        "accessPolicy": "Access Policy",
                        "aaaServer": "AAA Server",
                        "mvtnId": "Virtual Network",
                        "allowAutoBYOD": "BYOD",
                        "userNumber": "Online/Total People Count",
                        "userNumber_short": "People",
                        "created": "Created",
                        "modified": "Modified",
                        "priority": "Priority"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete profile '{{dto.name}}'?",
                        "delete_success": "Profile '{{dto.name}}' is succesfully deleted!"
                    }
                },
                "edit": {
                    "basePerm": "nacgroup",
                    "modes": {
                        "edit": {
                            "title": "Edit Profile",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add Profile",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "newPolicy": "New Policy",
                        "newAAAServer": "New AAA Server",
                        "sfcProfile": "New SFC Profile"
                    },
                    "fields": {
                        "groupType": {
                            "label": "Group Type",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "status": {
                            "label": "Status",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "name": {
                            "label": "Profile Name",
                            "placeholder": "Enter profile name...",
                            "help_line": "Enter a unique profile name..",
                            "help_block": "",
                        },
                        "notes": {
                            "label": "Notes",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "securityLevel": {
                            "label": "Secuity Level",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "created": {
                            "label": "Created Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "modified": {
                            "label": "Modified Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "servicePolicy": {
                            "label": "Service Policy",
                            "placeholder": "Select a Policy",
                            "help_line": "",
                            "help_block": ""
                        },
                        "accessPolicy": {
                            "label": "Access Policy",
                            "placeholder": "Select a Policy",
                            "help_line": "",
                            "help_block": ""
                        },
                        "virtualNetwork": {
                            "label": "Virtual Network",
                            "placeholder": "Select a Virtual Network",
                            "help_line": "",
                            "help_block": ""
                        },
                        "aaaServer": {
                            "label": "AAA Server",
                            "placeholder": "Select AAA Server",
                            "help_line": "",
                            "help_block": ""
                        },
                        "sfcProfile": {
                            "label": "SFC Profile",
                            "placeholder": "Select SFC Profile",
                            "help_line": "",
                            "help_block": ""
                        },
                        "allowAutoBYOD": {
                            "label": "Allow Auto BYOD",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                            "allow": "Unidentified BYOD devices will be allowed",
                            "notAllow": "Unidentified BYOD devices cannot be used"
                        },
                        "isVerified": {
                            "label": "Verification Required"
                        },
                        "priority": {
                            "label": "Priority",
                            "placeholder": "--Select--",
                            "help_line": "",
                            "help_block": ""
                        }
                    },
                    "messages": {
                        "save_success": "Profile '{{dto.name}}' is succesfully updated.",
                        "create_success": "Profile '{{dto.name}}' is succesfully created.",
                    },
                    "labels": {
                        "no_mvtn": "-No Virtual Network-"
                    }
                },
                "create": {
                    "title": "Add Access Group",
                    "icon": "fa fa-plus",
                    "basePerm": "nacgroup",
                    "perm": "#create",
                }
            },
            "users": {
                "title": "End Users",
                "list": {
                    "title": "End Users",
                    "icon": "fa fa-users",
                    "basePerm": "nacusers",
                    "perm": "#list",
                    "actions": {
                        "create_user": {
                            "title": "Add End User",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_user": {
                            "title": "End User Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_user": {
                            "title": "Edit End User",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete_user": {
                            "title": "Delete End User",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        },
                        "set_pwd": {
                            "title": "Change Password",
                            "title_short": "ChPwd",
                            "icon": "fa fa-key",
                            "color": "yellow-gold",
                            "perm": "common:view", //page handles the permission check
                        },
                        "device_list": {
                            "title": "Network Device List",
                            "title_short": "Devices",
                            "icon": "fa fa-list",
                            "color": "blue-steel",
                            "perm": "#view",
                        },
                        "user_statistics": {
                            "title": "End User statistics",
                            "title_short": "statistics",
                            "icon": "fa fa-pie-chart",
                            "color": "grey-mint",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "status": "Status",
                        "username": "User Name",
                        "name": "Name",
                        "surname": "Surname",
                        "email": "E-mail",
                        "created": "Created",
                        "modified": "Modified",
                        "lastAccessed": "Last Accessed",
                        "tcNo": "ID Number",
                        "accessDateStart": "First Accessibility Date",
                        "accessDateEnd": "Last Accessibility Date",
                        "userType": "User Type",
                        "nacGroup": "Access Group",
                        "byodGroup": "BYOD Group",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete end user '{{dto.username}}'?",
                        "delete_success": "End User '{{dto.username}}' is succesfully deleted!",
                    }
                },
                "search": {
                    "title": "Search End User",
                    "icon": "fa fa-search",
                    "basePerm": "nacusers",
                    "perm": "#list",
                    "searchPart": {
                        "title": "Query Criteria",
                        "notificationMessage": "You can use this form to search user details by IP",
                        "fields": {
                            "ip": {
                                "label": "IP Address",
                                "placeholder": "Enter IP Address",
                            },
                        },
                        "searchButton": "Search"
                    },
                    "resultPart": {
                        "title": "Search Result",
                        "fields": {
                            "userName": "User Name",
                            "nacGroup": "NAC Group",
                            "device": "Device",
                            "switch": "Linked Switch",
                            "status": "Status",
                            "name": "Name",
                            "surname": "Surname"
                        },
                        "buttons": {
                            "editUser": "Edit User",
                            "editNacGroup": "Edit NAC Group",
                            "editDevice": "Edit Device",
                        }
                    },
                    "enums": {
                        "0": "IDLE",
                        "1": "LOGIN",
                        "2": "EAP_AUTHENTICATION",
                        "3": "EX_AUTHENTICATION_PENDING",
                        "4": "ACCESS_DENIED",
                        "5": "ACCESS_GRANTED"
                    },
                    "messages": {
                        "search_success": "User Found",
                        "search_fail": "User is not found",
                    }
                },

                "user_statistics": {
                    "title": "End User statistics",
                    "icon": "fa fa-pie-chart",
                    "basePerm": "nacusers",
                    "perm": "#edit",
                    "fields": {
                        "userType": {
                            "label": "User Type"
                        },
                        "username": {
                            "label": "User Name"
                        },
                        "name": {
                            "label": "Name"
                        },
                        "surname": {
                            "label": "Surname"
                        },
                        "email": {
                            "label": "E-mail Address"
                        },
                        "securityLevel": {
                            "label": "Security Level"
                        },
                        "statistics_data": {
                            "label": "Data Usage"
                        },
                        "statistics_protocol": {
                            "label": "Protocol Usage"
                        },
                        "statistics_chart": {
                            "label": "User History"
                        },
                        "srcIP": {
                            "label": "Source IP"
                        },
                        "dstIP": {
                            "label": "Target IP"
                        },
                        "down": {
                            "label": "Down"
                        },
                        "direction": {
                            "label": "Down/up"
                        },
                        "up": {
                            "label": "Up"
                        },
                        "bytes": {
                            "label": "Byte"

                        },
                        "lifeTime": {
                            "label": "LifeTime (sec)"

                        },
                        "packets": {
                            "label": "Packets"

                        },
                        "rate": {
                            "label": "Rate"
                        },
                        "protocol": {
                            "label": "Protocol"
                        },
                        "table": {
                            "label": "Table"
                        },
                        "graph": {
                            "label": "Graph"
                        }
                    },
                    "actions": {
                        "date": {
                            "title": "1 Day",
                            "title_short": "1 Day",
                            "isDropdown": true,
                            "icon": "fa fa-clock-o",
                            "color": "blue-steel",
                        },
                        "onehour": {
                            "title": "1 Hour",
                            "title_short": "1 Hour",
                        },
                        "twohours": {
                            "title": "2 Hours",
                            "title_short": "2 Hours",
                        },
                        "fourhours": {
                            "title": "4 Hours",
                            "title_short": "4 Hours",
                        },
                        "twelvehours": {
                            "title": "12 Hours",
                            "title_short": "12 Hours",
                        },
                        "oneday": {
                            "title": "1 Day",
                            "title_short": "1 Day",
                        },
                        "threedays": {
                            "title": "3 Days",
                            "title_short": "3 Days",
                        },
                        "oneweek": {
                            "title": "1 Week",
                            "title_short": "1 Week",
                        },
                        "graphType": {
                            "title": "byte",
                            "title_short": "byte",
                            "isDropdown": true,
                            "icon": "fa fa-bars",
                            "color": "green",
                        },
                        "byte": {
                            "title": "byte",
                            "title_short": "byte",
                        },
                        "life": {
                            "title": "life",
                            "title_short": "life",
                        },
                        "packets": {
                            "title": "packets",
                            "title_short": "packets",
                        },
                        "rate": {
                            "title": "rate",
                            "title_short": "rate",
                        }
                    },
                    "details": "Details…",
                    "history": "User History",
                    "duration": {
                        "title": {
                            "last": "Last"
                        },
                        "display": {
                            "minute": "Minute",
                            "hour": "Hour",
                            "day": "Day",
                            "week": "Week"
                        }
                    },
                    "exporting": {
                        "contextButtonTitle": "Chart Context Menu",
                        "printChart": "Print",
                        "downloadJPEG": "Downlad as JPEG",
                        "downloadPDF": "Downlad as PDF",
                        "downloadPNG": "Downlad as PNG",
                        "downloadSVG": "Downlad as SVG",
                        "filename": "user_statistics"
                    },
                    "ajax": {
                        "error": "AN ERROR OCCURRED"
                    },
                    "chart": {
                        "data": {
                            "title": "Data Usage",
                            "subTitle": "Upload | Download",
                            "ratio": "Ratio",
                            "download": "Download",
                            "upload": "Upload"
                        },
                        "noData": "No Data",
                        "protocol": {
                            "title": "Protocol Usage",
                            "subTitle": "TCP | UDP",
                            "ratio": "Ratio",
                            "tcp": "TCP",
                            "udp": "UDP",
                            "upTcp": "Upload TCP",
                            "downTcp": "Download TCP",
                            "upUdp": "Upload UDP",
                            "downUdp": "Download UDP",
                        },
                        "x_axis": "Time",
                        "y_axis": "Usage (%)",
                        "resetZoom": "Reset Zoom",
                        "date": "Date",
                        "bytes": {
                            "title": "Byte Graph",
                            "upload": "Upload Bytes",
                            "download": "Download Bytes"
                        },
                        "life": {
                            "title": "Life Graph",
                            "upload": "Upload Life",
                            "download": "Download Life"
                        },
                        "packets": {
                            "title": "Packet Graph",
                            "upload": "Upload Packets",
                            "download": "Download Packets"
                        },
                        "rate": {
                            "title": "Rate Graph",
                            "upload": "Upload Rate",
                            "download": "Download Rate"
                        },
                        "totalBytes": {
                            "upload": "Upload",
                            "download": "Download"
                        }
                    }
                },
                "create": {
                    "title": "Add End User",
                    "icon": "fa fa-plus",
                    "basePerm": "nacusers",
                    "perm": "#create",
                },
                "change_pwd": {
                    "title": "Change Password",
                    "icon": "fa fa-key",
                    "basePerm": "nacusers",
                    "perm": "#change_pwd",
                    "actions": {},
                    "fields": {
                        "currentPassword": {
                            "label": "Current Password",
                            "placeholder": "Enter your current password...",
                            "help_line": "",
                            "help_block": "",
                        },
                        "newPassword": {
                            "label": "New Password",
                            "placeholder": "Enter password...",
                            "help_line": "Please enter a password with at least 6 characters.",
                            "help_block": "",
                        },
                        "newPasswordRetype": {
                            "label": "New Password (Retype)",
                            "placeholder": "Retype password...",
                            "help_line": "Please enter the password once more for security purposes.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "change_success": "Your password is succesfully updated.",
                        "passwords_mismatch": "Password do not match, please re-enter again.",
                    },
                    "labels": {}
                },
                "set_pwd": {
                    "title": "Set Password",
                    "icon": "fa fa-key",
                    "basePerm": "nacusers",
                    "perm": "#set_pwd",
                    "actions": {},
                    "fields": {
                        "username": {
                            "label": "User Name",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "newPassword": {
                            "label": "New Password",
                            "placeholder": "Enter new password...",
                            "help_line": "Please enter a password with at least 6 characters.",
                            "help_block": "",
                        },
                        "newPasswordRetype": {
                            "label": "New Password (Retype)",
                            "placeholder": "Re-enter password.",
                            "help_line": "Please re-enter password again for security purposes.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "change_success": "Password of user '{{dto.username}}' is succesfully updated.",
                        "passwords_mismatch": "Password do not match, please re-enter again.",
                    },
                    "labels": {}
                },
                "change_status": {
                    "title": "Change State",
                    "icon": "fa fa-eye-slash",
                    "basePerm": "nacusers",
                    "perm": "#edit", //#change_status
                    "actions": {},
                    "fields": {},
                    "messages": {
                        "deactivate_confirm": "Do you want to block end user '{{dto.username}}'?",
                        "activate_confirm": "Do you want to activate end user '{{dto.username}}'?",
                        "success": "State of end user '{{dto.username}}' is successfully changed.",
                        "deactivate_success": "End user '{{dto.username}}' is successfully blocked.",
                        "activate_success": "End user '{{dto.username}}' is successfully activated.",
                        "no_user_info": "No user info found for selected host.",
                        "no_ip_info": "No IP address found for selected host."
                    },
                    "labels": {}
                },
            },
            "nac_user_app": {
                "list": {
                    "title": "End User Applications",
                    "icon": "fa fa-server",
                    "basePerm": "end_user_app",
                    "perm": "#list",
                    "actions": {
                        "create_nac_user_app": {
                            "title": "Create End User Application",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit_nac_user_app": {
                            "title": "Edit End User Application",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_nac_user_app": {
                            "title": "Delete End User Application",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "nac_app_name": "End User App. Name",
                        "ports": "Ports",
                        "priority": "Priority",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete end user app. '{{dto.name}}'?",
                        "delete_success": "'{{dto.name}}' is succesfully deleted!",
                    }
                },
                "edit": {
                    "basePerm": "end_user_app",
                    "modes": {
                        "edit": {
                            "title": "Edit End User Application",
                            "icon": "fa fa-pencil",
                            "perm": "#edit"
                        },
                        "create": {
                            "title": "Create End User Application",
                            "icon": "fa fa-plus",
                            "perm": "#create"
                        }
                    },
                    "actions": {},
                    "fields": {
                        "app_name": {
                            "label": "Application Name",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": ""
                        },
                        "priority": {
                            "label": "Priority",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": ""
                        },
                        "ports": {
                            "label": "IP:Port",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "Enter a port and ip address at each line separately. '*' " +
                            "character is wild card. Ex: 192.168.1.1:* " +
                            "or *:80 or 192.168.1.1:80"
                        },
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' is succesfully updated.",
                        "create_success": "'{{dto.name}}' is succesfully created.",
                        "invalid_ip": "invalid ip"
                    },
                    "labels": {
                        "info": "Write one port per line."
                    }
                }
            },
            "devices": {
                "list": {
                    "title": "Devices",
                    "icon": "fa fa-desktop",
                    "basePerm": "nac_devices",
                    "perm": "#list",
                    "autoDeviceName": "Auto Generated BYOD",
                    "actions": {
                        "create_device": {
                            "title": "Add Device",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_device": {
                            "title": "Device Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_device": {
                            "title": "Edit Device",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_device": {
                            "title": "Delete Device",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "list_access_ports": {
                            "title": "List Access Ports",
                            "title_short": "Access Ports",
                            "icon": "fa fa-server",
                            "color": "blue-steel",
                            "perm": "nac_access_ports:list && nac_access_ports:view"
                        },
                    },
                    "fields": {
                        "status": "Status",
                        "name": "Device Name",
                        "securityLevel": "Security Level",
                        "securityLevel_short": "SL",
                        "created": "Created",
                        "modified": "Modified",
                        "mac": "Mac Address",
                        "type": "Type",
                        "ip": "IP Address",
                        "nacGroup": "Authentication",
                        "isExempt": "Is Exempt Device?",
                        "isExempt_short": "IED",
                        "mvtnId": "Virtual Network",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete device '{{dto.name}}'?",
                        "delete_success": "Device '{{dto.name}}' is succesfully deleted!"
                    }
                },
                "edit": {
                    "title": "Edit Device",
                    "icon": "fa fa-pencil",
                    "perm": "#edit",
                    "basePerm": "nac_devices",
                    "modes": {
                        "edit": {
                            "title": "Edit Device",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add Device",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "create_access_port": {
                            "title": "Add Access Port",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_access_port": {
                            "title": "View Access Port Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_access_port": {
                            "title": "Edit Access Port",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_access_port": {
                            "title": "Delete Access Port",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "edit_device": {
                            "title": "Edit User Device",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_device": {
                            "title": "Delete User Device",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },

                    },
                    "fields": {
                        "switchName": {
                            "label": "Switch Name"
                        },
                        "portNumbers": {
                            "label": "Access Ports",
                            "help_line": "Select Access Ports"
                        },
                        "status": {
                            "label": "Device Status",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "name": {
                            "label": "Device Name",
                            "placeholder": "Enter device name...",
                            "placeholder2": "Select device name...",
                            "help_line": "Enter a unique device name..",
                            "help_block": "",
                        },
                        "mac": {
                            "label": "MAC Address",
                            "placeholder": "Enter MAC address...",
                            "placeholder2": "Select MAC address...",
                            "help_line": "Enter devices MAC address..",
                            "help_block": "",
                        },
                        "ipv4": {
                            "label": "IPv4 Address",
                            "placeholder": "Enter IPv4 address...",
                            "help_line": "Enter devices IPv4 address..",
                            "help_block": "",
                        },
                        "ipv6": {
                            "label": "IPv6 Address",
                            "placeholder": "Enter IPv6 address...",
                            "help_line": "Enter devices IPv6 address..",
                            "help_block": "",
                        },
                        "type": {
                            "label": "Device Type",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "notes": {
                            "label": "Notes",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "securityLevel": {
                            "label": "Secuity Level",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "created": {
                            "label": "Created Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "modified": {
                            "label": "Modified Date",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "userList": {
                            "label": "End Users",
                            "placeholder": "Permitted End Users",
                            "help_line": "",
                            "help_block": "",
                            "selectableHeader": "Selectable End Users",
                            "selectionHeader": "Permitted End Users",
                        },
                        "nacGroup": {
                            "label": "Authentication",
                            "placeholder": "Select",
                            "help_line": "",
                            "help_block": "",
                        },
                        "has8021xSupport": {
                            "label": "802.1x",
                            "placeholder": "Select",
                            "help_line": "",
                            "help_block": "",
                        },
                        "byodNacGroup": {
                            "label": "BYOD Access Group",
                            "placeholder": "Select",
                            "help_line": "",
                            "help_block": "",
                        },
                        "username": {
                            "label": "User Name",
                        },
                        "isExempt": {
                            "label": "Exempted Device",
                            "help_line": "",
                            "help_block": ""
                        },
                        "virtual_network": {
                            "label": "Virtual Network",
                            "placeholder": "Select a Virtual Network",
                            "help_line": "",
                            "help_block": ""
                        },
                        "isBYOD": {
                            "label": "BYOD Device",
                            "help_line": "",
                            "help_block": ""
                        }
                    },
                    "messages": {
                        "save_success": "Device '{{dto.name}}' is succesfully updated.",
                        "create_success": "Device '{{dto.name}}' is succesfully created.",
                        "select_device_warning": "Please select switch and access port",
                        "delete_confirm": "Do you want to remove Device?",
                        "delete_success": "Device removed succesfully.",
                        "empty_table": "No data",
                    },
                    "labels": {
                        "accessPortWarning": "Please select a switch first",
                        "exemptedDevice": "Exempted Device",
                        "no_mvtn": "-No Virtual Network-"
                    }
                },
                "create": {
                    "title": "Add Device",
                    "icon": "fa fa-plus",
                    "basePerm": "nac_devices",
                    "perm": "#create",
                }
            },
            "devicesOfUser": {
                "list": {
                    "title": "Devices",
                    "icon": "fa fa-desktop",
                    "basePerm": "nac_devices",
                    "perm": "#list",
                    "actions": {
                        "create_device": {
                            "title": "Add User Device",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "back": {
                            "title": "Back",
                            "title_short": "Back",
                            "icon": "fa fa-arrow-left",
                            "color": "red-haze",
                        },
                        "edit_device": {
                            "title": "Edit User's Device",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_device": {
                            "title": "Remove Device From User",
                            "title_short": "Remove",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                    },
                    "fields": {
                        "name": "Device Name",
                        "mac": "MAC Address",
                        "created": "Create Date",
                        "modified": "Modify Date",
                        "has8021xSupport": "802.1x",
                        "byodNacGroup": "BYOD Access Group",
                        "isExempt": "Exempted Device",
                        "isBYOD": "Is BYOD Device"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to remove '{{dto.nacDevice.name}}' device from the user?",
                        "delete_success": "Device '{{dto.nacDevice.name}}' removed from the user"
                    }
                },
                "edit": {
                    "title": "Edit User's Device",
                    "icon": "fa fa-pencil",
                    "perm": "#edit",
                    "basePerm": "nac_devices",
                    "modes": {
                        "edit": {
                            "title": "Edit User's Device",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Adds User's Device",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "name": {
                            "label": "Device Name",
                        },
                        "mac": {
                            "label": "MAC Address",
                        },
                        "nacGroup": {
                            "label": "NAC Access Group",
                        },
                        "has8021xSupport": {
                            "label": "802.1x",
                            "help_line": "",
                            "help_block": "",
                        },
                        "byodNacGroup": {
                            "label": "BYOD Access Group",
                            "help_line": "",
                            "help_block": "",
                        },
                        "isBYOD": {
                            "label": "BYOD Device",
                            "help_line": "",
                            "help_block": ""
                        }
                    },
                    "messages": {
                        "save_success": "The device '{{dto.nacDevice.name}}' successfully updated ",
                        "create_success": "The device '{{dto.nacDevice.name}}' successfully created",
                    }
                },
            },
            "accessPorts": {
                "list": {
                    "title": "Access Ports",
                    "icon": "fa fa-server",
                    "basePerm": "nac_access_ports",
                    "perm": "#list",
                    "actions": {
                        "create_access_port": {
                            "title": "Add Access Port",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_access_port": {
                            "title": "Access Port Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_access_port": {
                            "title": "Edit Access Port",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_access_port": {
                            "title": "Delete Access Port",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "status": "Status",
                        "switchId": "Switch",
                        "portNumber": "Port"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete access port '{{dto.switchId}}:{{dto.portNumber}}'?",
                        "delete_success": "Access Port '{{dto.switchId}}:{{dto.portNumber}}' is succesfully deleted!"
                    }
                },
                "edit": {
                    "basePerm": "nac_access_ports",
                    "modes": {
                        "edit": {
                            "title": "Edit Access Port",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add Access Port",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "status": {
                            "label": "Access Port Status",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "switchId": {
                            "label": "Switch",
                            "placeholder": "--select--",
                            "help_line": "Please select switch form list",
                            "help_block": "",
                        },
                        "portNumber": {
                            "label": "Port",
                            "placeholder": "--select--",
                            "help_line": "Please select a port",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "save_success": "Access Port '{{dto.switchId}}:{{dto.portNumber}}' is succesfully updated.",
                        "create_success": "Access Port '{{dto.switchId}}:{{dto.portNumber}}' is succesfully created.",
                    },
                    "labels": {}
                },
                "create": {
                    "title": "Add Access Port",
                    "icon": "fa fa-plus",
                    "basePerm": "nac_access_ports",
                    "perm": "#create",
                }
            },
        },
        "naclogin": {
            "title": "End User Login",
            "info": "To gain network access, please login.",
            "logo": "./assets/img/arg.png",
            "icon": "fa fa-signin",
            "welcome": "Welcome",
            "success": "Successful login",
            "actions": {
                "login": {
                    "title": "Login",
                    "title_short": "Login",
                    "icon": "fa fa-login",
                    "color": "",
                    //"perm": "#login"
                },
                "logout": {
                    "title": "Logout",
                    "title_short": "Logout",
                    "icon": "fa fa-logout",
                    "color": "",
                }
            },
            "fields": {
                "username": {
                    "label": "User Name",
                    "placeholder": "User Name",
                    "help_line": "",
                    "help_block": "",
                },
                "password": {
                    "label": "Password",
                    "placeholder": "Password",
                    "help_line": "",
                    "help_block": "",
                },
                "rememberme": {
                    "label": "Remember me",
                    "label_icon": "<i class='fa fa-bars'></i>",
                    "placeholder": "",
                    "help_line": "",
                    "help_block": "",
                    "onText": "&nbsp;&nbsp;&nbsp;", //"Yes",
                    "offText": "&nbsp;&nbsp;&nbsp;", //"No",
                    "onLabel": "Remember me",
                    "offLabel": "Don't Remember me",
                }
            },
            "messages": {
                "login_failure": "Authentication failed, please try again."
            },
            "labels": {
                "title": "MILAT",
                "motto": "National Network Technologies",
                "contact_us": "CONTACT US",
                "timepassed": "Time passed",
                "lastAccess": "Last Access",
                "accessTimeEnd": "Last Accessibility"
            },
            "register": "Register",
            "remind": "Remind",
            "guest": {
                "title": "Register Guest",
                "icon": "fa fa-user-plus",
                "fields": {
                    "email": {
                        "label": "e-mail",
                        "placeholder": "Enter your e-mail"
                    },
                    "phoneNumber": {
                        "label": "Mobile Phone",
                        "placeholder": "Enter your mobile phone number",
                        "help_line": "WARNING: Your password will be sent to your phone. Please be sure that you wrote the correct number",
                    },
                    "tcno": {
                        "label": "TC Id Number",
                        "placeholder": "Enter your TC Identity Number"
                    },
                    "name": {
                        "label": "Name",
                        "placeholder": "Enter your name"
                    },
                    "surname": {
                        "label": "Surname",
                        "placeholder": "Enter your surname"
                    },
                },
                "messages": {
                    "sms_sent": "The password has been sent to phone '{{dto.phoneNumber}}' ",
                }
            },
            "remindPassword": {
                "title": "Remind Password",
                "icon": "fa fa-question-circle",
                "fields": {
                    "emailorphone": {
                        "label": "E-mail address/ Mobile Phone",
                        "placeholder": "Enter your e-mail address/mobile phone",
                        "help_line": "Enter the phone number or e-mail address you used at registeration. Your new password will be sent to your phone by SMS",
                    },
                },
                "messages": {
                    "password_sent": "Guest account '{{dto.name}}' created successfully",
                }
            }
        },
        "network_function_virtualization": {
            "title": "Virtual Network Functions",
            "icon": "fa fa-bandcamp",
            "perm": "common:view",
            "network_service_decriptor": {
                "list": {
                    "title": "Network Service Descriptor",
                    "icon": "fa fa-cubes",
                    "basePerm": "nfva_nsd",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Create Network Service",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Network Service Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit": {
                            "title": "Edit Network Service",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete": {
                            "title": "Delete Network Service",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "start": {
                            "title": "Start Network Service",
                            "title_short": "Start",
                            "icon": "fa fa-play",
                            "color": "yellow-gold",
                            "perm": "#edit",
                        },
                        "stop": {
                            "title": "Stop Network Service",
                            "title_short": "Stop",
                            "icon": "fa fa-stop",
                            "color": "red-intense",
                            "perm": "#edit",
                        },
                        "vnf": {
                            "title": "Virtual Network Features",
                            "title_short": "Virtual Network",
                            "icon": "fa fa-cogs",
                            "color": "purple-studio",
                            "perm": "#edit",
                        }
                    },
                    "fields": {
                        "name": "Name",
                        "vendor": "Vendor",
                        "nsdVersion": "Version",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete network service '{{dto.name}}' ?",
                        "delete_success": "Network service '{{dto.name}}' is deleted successfully",
                        "stop_confirm": "Do you want to stop network service '{{dto.name}}'?",
                        "stop_success": "Network service '{{dto.name}}' is stopped"
                    }
                },
                "edit": {
                    "basePerm": "nfva_nsd",
                    "modes": {
                        "edit": {
                            "title": "Edit Network Service",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Create Network Service",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "View Network Service",
                            "icon": "fa fa-eye",
                            "perm": "#view",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "networkDecriptor": "Network Service Descriptor (JSON)",
                        "upload": "Upload File",
	                    "preview": "Preview",
	                    "rawView": "Raw Data"
                    },
                    "messages": {
                        "save_success": "Network service '{{dto.name}}' is updated successfully",
                        "create_success": "Network service is created successfully",
                        "file_type_error": "JSON format error. Please upload a properly JSON formatted file"
                    }
                },
                "start": {
                    "perm": "nfva_nsr",
                    "fields": {
                        "name": "AST Name",
                        "openstackvim": "Openstack VIM",
                        "zone": "Zone",
                        "vnfdName": "VNFD Name",
                        "advancedView": "Advanced Selectio",
                        "basicView": "Basic Selection"
                    },
                    "messages": {
                        "start_success": "Network service '{{dto.name}}' is started",
                    }
                }
            },
            "network_service_record": {
                "list": {
                    "title": "Network Service Record",
                    "icon": "fa fa-cubes",
                    "basePerm": "nfva_nsr",
                    "perm": "#list",
                    "actions": {
                        "delete": {
                            "title": "Delete Network Service Record",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "start": {
                            "title": "Start Network Record",
                            "title_short": "Start",
                            "icon": "fa fa-play",
                            "color": "yellow-gold",
                            "perm": "#edit",
                        },
                        "stop": {
                            "title": "Stop Network Record",
                            "title_short": "Stop",
                            "icon": "fa fa-stop",
                            "color": "red-intense",
                            "perm": "#edit",
                        },
                        "view": {
                            "title": "Network Record Details",
                            "title_short": "Details",
                            "icon": "fa fa-eye",
                            "color": "blue",
                            "perm": "#edit",
                        }
                    },
                    "fields": {
                        "name": "Name",
                        "state": "State",
                        "task": "Task",
                        "version": "Version",
	                    "timestamp" : "Registration Date"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete network service record '{{dto.name}}'?",
                        "delete_success": "Network service record '{{dto.name}}' is deleted successfully!",
                        "start_confirm": "Do you want to start network service record '{{dto.name}}'?",
                        "start_success": "Network service record '{{dto.name}}' is started",
                        "stop_confirm": "Do you want to stop network service record '{{dto.name}}'?",
                        "stop_success": "Network service record '{{dto.name}}' is stopped"
                    }
                },
                "view": {
                    "title": "Network Service Record",
                    "icon": "fa fa-eye",
                    "basePerm": "nfva_nsr",
                    "perm": "#view",
                    "fields": {
                        "networkDecriptor": "Network Service Record (JSON)",
	                    "preview": "Preview",
	                    "rawView": "Raw Data"
                    }
                }
            },
            "virtual_network_function": {
                "list": {
                    "title": "Virtual Network Function",
                    "icon": "fa fa-cogs",
                    "basePerm": "nfva_nsr",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Create Virtual Network Function",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "edit": {
                            "title": "Edit Virtual Network Function",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete": {
                            "title": "Delete Virtual Network Function",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "nsr": {
                            "title": "Network Service Records",
                            "title_short": "Records",
                            "icon": "fa fa-cubes",
                            "color": "purple-studio",
                            "perm": "#edit",
                        }
                    },
                    "fields": {
                        "name": "Name",
                        "vendor": "Vendor",
                        "version": "Version",
                        "type": "Type",
	                    "vnfType" : "Type",
	                    "vnfVersion" : "Version"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete virtual network function '{{dto.name}}'?",
                        "delete_success": "Virtual network function '{{dto.name}}' is deleted!",
                    }
                },
                "edit": {
                    "basePerm": "nfva_nsr",
                    "modes": {
                        "edit": {
                            "title": "Edit Virtual Network Function",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Create Virtual Network Function",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "networkDecriptor": "Virtual Network Function Descriptor (JSON)",
                        "upload": "Upload File",
	                    "preview": "Preview",
	                    "rawView": "Raw Data"
                    },
                    "messages": {
                        "save_success": "Virtual network function '{{dto.name}}' is updated successfully",
                        "create_success": "Virtual network function '{{dto.name}}' is created successfully",
                    }
                }
            },
            "vnf_instance": {
                "list": {
                    "title": "VNF Instance List",
                    "icon": "fa fa-cubes",
                    "basePerm": "nfva_nsr",
                    "perm": "#list",
                    "actions": {
                        "view": {
                            "title": "View VNF Instance",
                            "title_short": "View VNF Instance",
                            "icon": "fa fa-eye",
                            "color": "blue",
                            "perm": "#view",
                        },
                        "failover": {
                            "title": "Define Failover",
                            "title_short": "Define Failover",
                            "icon": "fa fa-retweet",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "failover_cancel": {
                            "title": "Cancel Failover",
                            "title_short": "Cancel Failover",
                            "icon": "fa fa-times-circle",
                            "color": "blue",
                            "perm": "#view",
                        },
                        "instance_start": {
                            "title": "Start Instance",
                            "title_short": "Start",
                            "icon": "fa fa-play",
                            "color": "green-meadow",
                            "perm": "#view",
                        },
                        "instance_stop": {
                            "title": "Stop Instance",
                            "title_short": "Stop",
                            "icon": "fa fa-stop",
                            "color": "red-sunglo",
                            "perm": "#view",
                        },
                        "instance_stop_soft": {
                            "title": "Soft",
                            "title_short": "Soft",
                            "icon": "fa fa-angle-right",
                            "color": "grey-cascade",
                            "perm": "#view",
                        },
                        "instance_stop_hard": {
                            "title": "Hard",
                            "title_short": "Hard",
                            "icon": "fa fa-angle-right",
                            "color": "grey-cascade",
                            "perm": "#view",
                        },
                        "delete": {
                            "title": "Delete VNF Instance",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                    },
                    "fields": {
                        "name": "VNF Instance Name",
                        "status": "Status",
                        "settings": "Failover Settings",
                        "VIM": "VIM",
                        "ip": "IP",
                        "failoverIp": "Failover Server Ip: "
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete VNF Instance '{{dto.vnfciHostname}}'?",
                        "delete_success": "'{{dto.vnfciHostname}}' is successfully deleted!",
                        "failover_cancel": "Do you want to delete failover settings that are defined for '{{dto.vnfciHostname}}'?",
                        "failover_cancel_success": "Failover settings that are defined for '{{dto.vnfciHostname}}' are successfully deleted!",
                        "instance_start": "Do you want to start VNF Instance '{{dto.vnfciHostname}}'?",
                        "instance_start_success": "'{{dto.vnfciHostname}}' is successfully started!",
                        "instance_stop": "Do you want to stop VNF Instance '{{dto.vnfciHostname}}'?",
                        "instance_stop_success": "'{{dto.vnfciHostname}}' is successfully stopped!",
                    }
                },
                "edit": {
                    "basePerm": "nfva_nsr",
                    "modes": {
                        "edit": {
                            "title": "Defining Failover",
                            "icon": "fa fa-retweet",
                            "perm": "#edit",
                        },
                    },
                    "fields": {
                        "vnf_name": "VNF Instance Name",
                        "failover_ip": "Failover Server IP  "
                    },
                    "messages": {
                        "create_success": "Failover for '{{dto.vnfciHostname}}' is successfully defined.",
                    }
                },
                "view": {
                    "basePerm": "nfva_nsr",
                    "title": "VNF Instance(JSON)",
                    "icon": "fa fa-eye",
                    "perm": "#edit",
	                "fields":{
		                "preview": "Preview",
		                "rawView": "Raw Data"
	                }
                }
            }
        },
        "alarm_management": {
            "title": "Alarm Management",
            "icon": "fa fa-bell",
            "alarms": {
                "title": "Alarm List",
                "icon": "fa fa-list-ul",
                "actions": {
                    "??": {
                        "title": "??",
                        "title_short": "??",
                        "icon": "fa fa-plus",
                        "color": "blue"
                    }
                },
                "fields": {
                    "status": "Status",
                    "name": "Name",
                    "thresholds": "Thresholds",
                    "modified": "Modified",
                }
            }
        },
        "paths": {
            "title": "Path Management",
            "icon": "icon-graph",
            "perm": "common:view",
            "list": {
                "title": "Reactive Path List",
                "icon": "icon-graph",
                "basePerm": "paths",
                "perm": "#list",
                "actions": {
                    "create_path": {
                        "title": "Add Path",
                        "title_short": "Add",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#create"
                    },
                    "view_path": {
                        "title": "View Path",
                        "title_short": "View",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "edit_path": {
                        "title": "Edit Path",
                        "title_short": "Edit",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    },
                    "delete_path": {
                        "title": "Delete Path",
                        "title_short": "Delete",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete"
                    },
                    "test_pack": {
                        "title": "Send Test Packet",
                        "title_short": "Send",
                        "icon": "fa fa-bug",
                        "color": "btn uppercase yellow-gold",
                        "perm": "#validate"
                    }
                },
                "fields": {
                    "state": "State",
                    "source": "Source",
                    "dest": "Destination",
                    "protocol": "Protocol",
                    "srcDeviceId": "Source MAC",
                    "srcHostId": "Source IP",
                    "srcPort": "Source Port",
                    "dstDeviceId": "Dest. MAC",
                    "dstHostId": "Dest. IP",
                    "dstPort": "Dest. Port",
                    "links": "Hop Count",
                    "links_short": "HOP",
                    "bandwidth_constraint": "Max Bandwidth (MB/s)",
                    "name": "Policy Name",
                    "topology": "Topology",
                    "source_host": "Source Host",
                    "target_host": "Target Host",
                    "priority": "Priority",
                    "service_quality_policy": "Service Quality Policy",
                    "start_date": "Start Date",
                    "end_date": "End Date"
                },
                "messages": {
                    "delete_confirm": "Do you want to delete path '{{dto.id}}'?",
                    "delete_success": "Path '{{dto.id}}' is succesfully deleted!",
                    "bandwidth_error": "Bandwidth needs to be either blank or between 1 and 1.000.000"
                }
            },
            "edit": {
                "basePerm": "paths",
                "modes": {
                    "edit": {
                        "title": "Edit Path",
                        "icon": "fa fa-pencil",
                        "perm": "#edit",
                    },
                    "create": {
                        "title": "Add Path",
                        "icon": "fa fa-plus",
                        "perm": "#create",
                    }
                },
                "actions": {},
                "fields": {
                    "src": {
                        "label": "Source",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "dest": {
                        "label": "Target",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "bandwidth": {
                        "label": "Bandwidth",
                        "placeholder": "Bandwidth value...",
                        "help_line": "Numberical bandwidth value in Bit/m format.",
                        "help_block": "",
                    },
                    "securityLevel": {
                        "label": "Security Level",
                        "placeholder": "--select--",
                        "help_line": "",
                        "help_block": "",
                    }
                },
                "messages": {
                    "save_success": "Path '{{dto.id}}' is succesfully updated.",
                    "create_success": "Path '{{dto.id}}' is succesfully created.",
                },
                "labels": {}
            },
            "test": {
                "basePerm": "paths",
                "title": "Network Test",
                "icon": "fa fa-bug",
                "perm": "#validate",
                "actions": {},
                "fields": {
                    "path_info": {
                        "label": "Path Info",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "pack_interval": {
                        "label": "Packet Interval",
                        "placeholder": "",
                        "help_line": "Second(s)",
                        "help_block": "",
                    },
                    "pack_count": {
                        "label": "Test Packet Count",
                        "placeholder": "",
                        "help_line": "Packet(s)",
                        "help_block": "",
                    },
                },
                "messages": {
                    "time_error": "Total test time should not exceed 120 seconds!"
                },
                "labels": {
                    "start_test": "Start Test",
                    "test_pack": "Packet Count",
                    "test_delay": "Average Delay",
                    "pack_delay": "Delay",
                    "pack": "Pack"
                }
            },
            "view": {
                "messages": {
                    "no_path_links": "Selected path could not be displayed due to pending link discovery."
                }
            }
        },
        "perms": {
            "common": {
                "title": "General Perms.",
                "perms": {
                    "view": "View Screen",
                    "print": "Print",
                    "copy": "Copy to Clipboard",
                    "export_pdf": "Export PDF",
                    "export_excel": "Export Excel",
                    "refresh": "Refresh",
                }
            },
            "users": {
                "title": "User Management",
                "perms": {
                    "list": "List Users",
                    'view': "View User",
                    'edit': "Edit User",
                    'delete': "Delete User",
                    'create': "Add User",
                    'change_pwd': "Change User Password",
                    'set_pwd': "Set Password",
                    'lost_pwd': "Remind Password"
                }
            },
            "roles": {
                "title": "Role Management",
                "perms": {
                    "list": "List Roles",
                    'view': "View Role",
                    'edit': "Edit Role",
                    'delete': "Delete Role",
                    'create': "Add Role"
                }
            },
            "permissions": {
                "title": "Permission Man.",
                "perms": {
                    "list": "List Permissions",
                }
            },
            "phy_topo": {
                "title": "Physical Topology Management",
                "perms": {
                    'view': "View P. Topology",
                    'edit': "Edit P. Topology",
                    'manage': "Manage Networks",
                }
            },
            "vir_topo": {
                "title": "Virtual Topology Management",
                "perms": {
                    "create": "Create V. Network",
                    "delete": "Delete V. Network",
                    "list": "List V. Networks",
                    'view': "View V. Network",
                    'edit': "Edit V. Network",
                    'delete_request': "Request 'Delete V. Topology'",
                    'delete_approve': "Approve 'Delete V. Topology'",
                    'create_request': "Request 'Add V. Topology'",
                    'create_approve': "Approve 'Add V. Topology'",
                    'suspend': "Suspend V. Topology",
                    'toggle_state': "Toggle V. Topo. State",
                }
            },
            "flows": {
                "title": "Flow Management",
                "perms": {
                    "list": "List Flows",
                    'view': "View Flow",
                    'edit': "Edit Flow",
                    'delete': "Delete Flow",
                    'create': "Add Flow"
                }
            },
            "ports": {
                "title": "Port Management",
                "perms": {
                    "list": "List Ports",
                    'view': "View Port"
                }
            },
            "paths": {
                "title": "Reactive Path Management",
                "perms": {
                    "list": "List Reactive Paths",
                    'view': "View Reactive Path",
                    'edit': "Edit Reactive Path",
                    'delete': "Delete Reactive Path",
                    'create': "Add Reactive Path",
                    'validate': "Validate Reactive Path"
                }
            },
            "version": {
                "title": "Version Management",
                "perms": {
                    "list": "List Versions",
                }
            },
            "log": {
                "title": "Log Management",
                "perms": {
                    "list": "List Log Levels",
                    'edit': "Edit Log Levels",
                }
            },
            "nacusers": {
                "title": "NAC User Management",
                "perms": {
                    "list": "List End Users",
                    'view': "View End User",
                    'edit': "Edit End User",
                    'delete': "Delete End User",
                    'create': "Add End User",
                    'change_pwd': "Change End User Password",
                    'set_pwd': "Set End User Password",
                    'lost_pwd': "Remind End User Password",
                    'statistics': 'View End User statistics'
                }
            },
            "nacgroup": {
                "title": "NAC Group Management",
                "perms": {
                    "list": "List NAC Groups",
                    'view': "View NAC Groups",
                    'edit': "Edit NAC Groups",
                    'delete': "Delete NAC Groups",
                    'create': "Add NAC Groups"
                }
            },
            "nac_devices": {
                "title": "NAC Device Management",
                "perms": {
                    "list": "List Devices",
                    'view': "View Device",
                    'edit': "Edit Device",
                    'delete': "Delete Device",
                    'create': "Add Device"
                }
            },
            "nac_userdevices": {
                "title": "User Device Management",
                "perms": {
                    "list": "List User Devices",
                    'view': "View User Device",
                    'edit': "Edit User Device",
                    'delete': "Delete User Device",
                    'create': "Add User Device"
                }
            },
            "nac_access_ports": {
                "title": "NAC Access Port Man.",
                "perms": {
                    "list": "List Access Ports",
                    'view': "View Access Port",
                    'edit': "Edit Access Port",
                    'delete': "Delete Access Port",
                    'create': "Add Access Port"
                }
            },
            "switches": {
                "title": "Switch Management",
                "perms": {
                    "list": "List Switches",
                    'view': "View Switch",
                    'edit': "Edit Switch",
                    'delete': "Delete Switch",
                    'create': "Add Switch"
                }
            },
            "links": {
                "title": "Link Management",
                "perms": {
                    "list": "List Links",
                    'view': "View Link",
                    'edit': "Edit Link",
                    'delete': "Delete Link",
                    'create': "Add Link"
                }
            },
            "alarms": {
                "title": "Alarm Management",
                "perms": {
                    "list": "List Alarms",
                    'view': "View Alarm",
                    'edit': "Edit Alarm",
                }
            },
            "alarm_logs": {
                "title": "Event Management",
                "perms": {
                    "list": "List Events",
                    'view': "View Event",
                }
            },
            "stats": {
                "title": "Stats Management",
                "perms": {
                    "list_port_stats": "List Port Stats",
                    "list_switch_stats": "List Switch Stats",
                    "list_meter_stats": "List Meter Stats",
                }
            },
            "tsdb_metric": {
                "title": "Metric Management",
                "perms": {
                    "list": "List Metrics",
                    "list_defs": "List Definitions",
                    "list_tags": "List Tags",
                }
            },
            "access_policy": {
                "title": "Access Policy Management",
                "perms": {
                    "list": "List Access Policies",
                    'view': "View Access Policy",
                    'edit': "Edit Access Policy",
                    'delete': "Delete Access Policy",
                    'create': "Add Access Policy"
                }
            },
            "service_quality": {
                "title": "Service Policy Management",
                "perms": {
                    "list": "List Service Policies",
                    'view': "View Service Policy",
                    'edit': "Edit Service Policy",
                    'delete': "Delete Service Policy",
                    'create': "Add Service Policy"
                }
            },
            "traffic_class": {
                "title": "Traffic Class Management",
                "perms": {
                    "list": "List Traffic Classes",
                    'view': "View Traffic Class",
                    'edit': "Edit Traffic Class",
                    'delete': "Delete Traffic Class",
                    'create': "Add Traffic Class"
                }
            },
            "server": {
                "title": "AAA Server Management",
                "perms": {
                    "list": "List AAA Servers",
                    'view': "View AAA Server",
                    'edit': "Edit AAA Server",
                    'delete': "Delete AAA Server",
                    'create': "Add AAA Server"
                }
            },
            "flow_stats": {
                "title": "Flow Stats Management",
                "perms": {
                    "list": "List Flow Stats",
                }
            },
            "networkdevice": {
                "title": "Network Device",
                "perms": {
                    "list": "List Network Device",
                    "view": "View Network Device",
                    "edit": "Edit Network Device",
                    "delete": "Delete Network Device",
                    "create": "Add Network Device"
                }
            },
            "vir_topo_req": {
                "title": "Virtual Topology Request",
                "perms": {
                    "list": "List Virtual Topology Request",
                    "view": "View Virtual Topology Request",
                    "edit": "Edit Virtual Topology Request",
                    "delete": "Delete Virtual Topology Request",
                    "create": "Add Virtual Topology Request",
                    "toggle_state": "Toggle State"
                }
            },
            "moduleNodeConfig": {
                "title": "Module Node Config",
                "perms": {
                    "list": "List Module Node Config",
                    "view": "View Module Node Config",
                    "edit": "Edit Module Node Config",
                    "delete": "Delete Module Node Config",
                    "create": "Add Module Node Config"
                }
            },
            "configDefinition": {
                "title": "Config Definition",
                "perms": {
                    "list": "List Config Definition",
                    "view": "View Config Definition",
                    "edit": "Edit Config Definition",
                    "delete": "Delete Config Definition",
                    "create": "Add Config Definition"
                }
            },
            "moduleNodes": {
                "title": "Module Nodes",
                "perms": {
                    "list": "List Module Nodes",
                    "view": "View Module Nodes",
                    "edit": "Edit Module Nodes",
                    "delete": "Delete Module Nodes",
                    "create": "Add Module Nodes"
                }
            },
            "nacsession": {
                "title": "NAC Session",
                "perms": {
                    "list": "List NAC Sessions",
                    "view": "View NAC Sessions",
                    "edit": "Edit NAC Sessions",
                    "delete": "Delete NAC Sessions",
                    "create": "Add NAC Sessions"
                }
            },
            "alarm_def": {
                "title": "Alarm Definition",
                "perms": {
                    "list": "List Alarm Definition",
                    "view": "View Alarm Definition",
                    "edit": "Edit Alarm Definition",
                    "delete": "Delete Alarm Definition",
                    "create": "Add Alarm Definition"
                }
            },
            "alarm_notif_conf": {
                "title": "Alarm Notifications Configuration",
                "perms": {
                    "list": "List Alarm Notifications Configuration",
                    "view": "View Alarm Notifications Configuration",
                    "edit": "Edit Alarm Notifications Configuration",
                    "delete": "Delete Alarm Notifications Configuration",
                    "create": "Add Alarm Notifications Configuration"
                }
            },
            "alarm_notif": {
                "title": "Alarm Notifications",
                "perms": {
                    "list": "List Alarm Notifications",
                    "view": "View Alarm Notifications",
                    "edit": "Edit Alarm Notifications",
                    "delete": "Delete Alarm Notifications",
                    "create": "Add Alarm Notifications"
                }
            },
            "dhcp": {
                "title": "DHCP",
                "perms": {
                    "list": "List DHCP",
                    "view": "View DHCP",
                    "edit": "Edit DHCP",
                    "delete": "Delete DHCP",
                    "create": "Add DHCP"
                }
            },
            "pro_path_policy": {
                "title": "Proactive Path Policy",
                "perms": {
                    "list": "List Proactive Path Policy",
                    "view": "View Proactive Path Policy",
                    "edit": "Edit Proactive Path Policy",
                    "delete": "Delete Proactive Path Policy",
                    "create": "Add Proactive Path Policy",
                    "get": "Get Proactive Path Policy",
                    'search': "Search Proactive Path Policy",
                }
            },
            "overlay_policy": {
                "title": "Overlay Policy",
                "perms": {
                    "list": "List Overlay Policy",
                    "view": "View Overlay Policy",
                    "edit": "Edit Overlay Policy",
                    "delete": "Delete Overlay Policy",
                    "create": "Add Overlay Policy"
                }
            },
            "nfva_nsd": {
                "title": "Network Service Descriptor",
                "perms": {
                    "list": "List Network Service Descriptors",
                    "view": "View Network Service Descriptor",
                    "edit": "Edit Network Service Descriptor",
                    "delete": "Delete Network Service Descriptor",
                    "create": "Add Network Service Descriptor",
                }
            },
            "nfva_nsr": {
                "title": "Network Service Record",
                "perms": {
                    "list": "List Network Service Records",
                    "view": "View Network Service Record",
                    "edit": "Edit Network Service Record",
                    "delete": "Delete Network Service Record",
                    "create": "Add Network Service Record",
                }
            },
            "nfva_vim": {
                "title": "Virtual Infrastructure Manager",
                "perms": {
                    "list": "List Virtual Infrastructure Managers",
                }
            },
            "apps": {
                "title": "3. Party App Management",
                "perms": {
                    "list": "List Apps",
                    'view': "View App",
                    'edit': "Edit App",
                    'delete': "Delete App",
                    'create': "Add App"
                }
            },
            "bgp": {
                "title": "BGP Management",
                "perms": {
                    "list": "List BGPs",
                    'view': "View BGP",
                    'edit': "Edit BGP",
                    'delete': "Delete BGP",
                    'create': "Add BGP"
                }
            },
            "certificate": {
                "title": "Certificate Management",
                "perms": {
                    "generate": "Generate Certificate"
                }
            },
            "edr": {
                "title": "EDR Management",
                "perms": {
                    "view": "View EDR"
                }
            },
            "cluster": {
                "title": "Cluster Management",
                "perms": {
                    "list": "List Clusters",
                    'view': "View Cluster",
                    'edit': "Edit Cluster",
                    'delete': "Delete Cluster",
                    'create': "Add Cluster"
                }
            },
            "controller": {
                "title": "Controller Management",
                "perms": {
                    "list": "List Controllers",
                    'view': "View Controller",
                    'edit': "Edit Controller",
                    'delete': "Delete Controller",
                    'create': "Add Controller"
                }
            },
            "end_user_app": {
                "title": "End User App Management",
                "perms": {
                    "list": "List Apps",
                    'view': "View App",
                    'edit': "Edit App",
                    'delete': "Delete App",
                    'create': "Add App"
                }
            },
            "feature": {
                "title": "Controller Feature Management",
                "perms": {
                    "list": "List Features",
                    'view': "View Feature",
                    'edit': "Edit Feature",
                    'delete': "Delete Feature",
                    'create': "Add Feature"
                }
            },
            "ip_loc": {
                "title": "IP Location Management",
                "perms": {
                    "list": "List Locations",
                    'view': "View Location",
                    'edit': "Edit Location",
                    'delete': "Delete Location",
                    'create': "Add Location"
                }
            },
            "nfva_vnf": {
                "title": "Virtual Network Function Management",
                "perms": {
                    "list": "List Virtual Network Functions",
                    'view': "View Virtual Network Function",
                    'edit': "Edit Virtual Network Function",
                    'delete': "Delete Virtual Network Function",
                    'create': "Add Virtual Network Function"
                }
            },
            "ovsdb": {
                "title": "OVSDB Management",
                "perms": {}
            },
            "ovsdb_controller": {
                "title": "OVSDB Management",
                "perms": {
                    "get": "Get OVSDB Details",
                    'get_desc': "Get OVSDB Description",
                    'get_number': "Get OVSDB Number",
                    'delete': "Delete OVSDB",
                    'create': "Add OVSDB"
                }
            },
            "ovsdb_bridge": {
                "title": "OVSDB Management",
                "perms": {
                    'add': "Add OVSDB Bridge"
                }
            },
            "ports:list": {
                "title": "Port Management",
                "perms": {}
            },
            "proactivePathPolicy": {
                "title": "ProActive Path Policy Management",
                "perms": {}
            },
            "prognet_device": {
                "title": "Network Device Management",
                "perms": {
                    "list": "List Devices",
                    'view': "View Device",
                    'edit': "Edit Device",
                    'delete': "Delete Device",
                    'create': "Add Device"
                }
            },
            "wanPortInfo": {
                "title": "WAN Link Management",
                "perms": {
                    "list": "List WAN Links",
                    'view': "View WAN Link",
                    'edit': "Edit WAN Link",
                    'delete': "Delete WAN Link",
                    'create': "Add WAN Link"
                }
            },
            "dhcpcentralwan": {
                "title": "Central DHCP Management",
                "perms": {
                    "list": "List Central DHCP Records",
                    'view': "View Central DHCP",
                    'edit': "Edit Central DHCP",
                    'delete': "Delete Central DHCP",
                    'create': "Add Central DHCP"
                }
            },
            "monitor": {
                "title": "Net Monitor Management",
                "perms": {
                    'view': "View Monitor",
                    'create': "Add Monitor"
                }
            },
            "sfc": {
                "title": "Service Function Chaining (SFC) Management",
                "perms": {
                    "list": "List SFCs",
                    'view': "View SFC",
                    'get': "View SFC",
                    'edit': "Edit SFC",
                    'delete': "Delete SFC",
                    'create': "Add SFC"
                }
            },
            "sfcType": {
                "title": "SFC Types Management",
                "perms": {
                    "list": "List SFC Types"
                }
            },
            "sfcVnfd": {
                "title": "SFC VNF Definition Management",
                "perms": {
                    "list": "List SFC VNF Definitions"
                }
            },
            "sfcVnfr": {
                "title": "SFC Virtual Network Function Records Management",
                "perms": {
                    "list": "List SFC Virtual Network Function Records",
                    'view': "View SFC Virtual Network Function Record",
                    'get': "View SFC Virtual Network Function Record",
                    'edit': "Edit SFC Virtual Network Function Record",
                    'delete': "Delete SFC Virtual Network Function Record",
                    'create': "Add SFC Virtual Network Function Record"
                }
            },
            "wan_alarm": {
                "title": "WAN Alarm Management",
                "perms": {
                    "view": "View WAN Alarms"
                }
            },
            "wanDomainInfo": {
                "title": "WAN Domain Management",
                "perms": {
                    "list": "List WAN Domains",
                    'view': "View WAN Domain",
                    'edit': "Edit WAN Domain",
                    'delete': "Delete WAN Domain",
                    'create': "Add WAN Domain"
                }
            },
            "wanMvtn": {
                "title": "WAN Virtual Network Management",
                "perms": { }
            },
            "wan_mvtn": {
                "title": "WAN Virtual Network Management",
                "perms": {
                    "list": "List WAN Virtual Networks",
                    'view': "View WAN Virtual Network",
                    'edit': "Edit WAN Virtual Network",
                    'delete': "Delete WAN Virtual Network",
                    'create': "Add WAN Virtual Network"
                }
            },
            "emergency_pol": {
                "title": "Emergency Policy Management",
                "perms": {
                    "list": "List Emergency Policies",
                    'view': "View Emergency Policy",
                    'edit': "Edit Emergency Policy",
                    'delete': "Delete Emergency Policy",
                    'create': "Add Emergency Policy",
                    'start_stop_vnf': "Start/Stop VNF"
                }
            },
            "spr_topo": {
                "title": "Central Topology Management",
                "perms": {
                    'view': "View Central Topology",
                }
            },
        },
        "components": {
            "title": "Settings",
            "icon": "fa fa-gears",
            "perm": "common:view",
            "versions": {
                "list": {
                    "title": "Versions",
                    "icon": "fa fa-code-fork",
                    "basePerm": "version",
                    "perm": "#list",
                    "fields": {
                        "name": "Name",
                        "version": "Version",
                        "buildDate": "Build Date",
                        "startUpDate": "Start-Up Date"
                    }
                }
            },
            "log-levels": {
                "list": {
                    "title": "Log Levels",
                    "icon": "fa fa-file-text-o",
                    "basePerm": "log",
                    "perm": "#list",
                    "fields": {
                        "id": "ID",
                        "version": "Version",
                        "revision": "Revision",
                        "timestamp": "Timestamp",
                        "displayName": "displayName",
                        "level": "level"
                    },
                    "actions": {
                        "edit_level": {
                            "title": "Edit Log Level",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                    },
                },
                "edit": {
                    "basePerm": "log",
                    "modes": {
                        "edit": {
                            "title": "Edit Log Level",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Add Log Level",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "serverType": {
                            "label": "System Type",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "name": {
                            "label": "Component Name",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "log-levels": {
                            "label": "Log Level",
                            "placeholder": "--select--",
                            "help_line": "",
                            "help_block": "",
                        },
                    },
                    "messages": {
                        "save_success": "'{{dto.displayName}}' is succesfully updated.",
                    },
                    "labels": {}
                },
            }
        },
        "settings": {
            "networkDevice": {
                "title": "Network Device",
                "perm": "common:view",
                "list": {
                    "basePerm": "networkdevice",
                    "title": "Network Devices",
                    "icon": "fa fa-cloud-upload",
                    "perm": "#view",
                    "actions": {
                        "create_networkDevice": {
                            "title": "Add Network Device",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_networkDevice": {
                            "title": "Network Device Details",
                            "title_short": "Details",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_networkDevice": {
                            "title": "Edit Network Device",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#create",
                        },
                        "delete_networkDevice": {
                            "title": "Delete Network Device",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        }
                    },
                    "fields": {
                        "name": "Name",
                        "mac": "MAC",
                        "ip": "IP",
                        "vlan_id": "VLAN ID",
                        "actions": "Actions",
                        "switch_list": "Switch List",
                        "port_no": "Port",
                        "type": "Type",
                        "switch": "Switch"
                    },
                    "messages": {
                        "no_relevant_switch": "Couldn't find specified switch in the switch list",
                        "delete_confirm": "Are you sure you want to delete this device?",
                        "delete_success": "Deleted successfully!",
                        "save_error": "Server error while saving this device",
                        "save_success": "Saved successfully."
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "networkdevice",
                    "modes": {
                        "edit": {
                            "title": "Edit Network Device",
                            "icon": "fa fa-pencil",
                            "perm": "#create",
                        },
                        "create": {
                            "title": "Add Network Device",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "switch_list": {
                            "label": "Switch List"
                        },
                        "port_no": {
                            "label": "Port"
                        },
                        "networkDevice_name": {
                            "label": "Network Device Name",
                            "placeholder": "Enter name...",
                            "help_line": "Enter a Network Device name",
                            "help_block": ""
                        },
                        "type": {
                            "label": "Type"
                        },
                        "dhcp": {
                            "label": "DHCP"
                        },
                        "mac": {
                            "label": "MAC",
                            "placeholder": "Enter MAC...",
                            "help_line": "Enter MAC value.",
                            "help_block": ""
                        },
                        "IP": {
                            "label": "IP",
                            "placeholder": "Enter IP...",
                            "help_line": "Enter IP value.",
                            "help_block": ""
                        },
                        "vlan_id": {
                            "label": "VLAN ID",
                            "placeholder": "Enter VLAN...",
                            "help_line": "Enter VLAN value.",
                            "help_block": ""
                        },
                        "redundancy_devices": {
                            "label": "Redundancy Devices"
                        },
                        "add": "Add"
                    },
                    "messages": {
                        "no_relevant_switch": "Specified switch is couldn't found in the list",
                        "save_success": "Device successfully updated",
                        "create_success": "Device successfully created",
                    },
                    "labels": {}
                }
            },
            "dhcp": {
                "title": "Dhcp",
                "perm": "common:view",
                "list": {
                    "basePerm": "dhcp",
                    "title": "DHCP Scopes",
                    "icon": "fa fa-globe",
                    "perm": "#view",
                    "actions": {
                        "create_dhcp": {
                            "title": "Add Dhcp",
                            "title_short": "Add",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_dhcp": {
                            "title": "Dhcp Details",
                            "title_short": "Detail",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_dhcp": {
                            "title": "Edit Dhcp",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#create",
                        },
                        "delete_dhcp": {
                            "title": "Delete Dhcp",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        },
                        "assigned": {
                            "title": "Address Usage",
                            "title_short": "Address Usage",
                            "icon": "fa fa-users",
                            "color": "yellow-gold",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "name": "Field Name",
                        "networkId": "Network Type",
                        "vlanId": "VLAN",
                        "ipVersionType": "IP Version",
                        "dhcpIpRangeDtos": "IP Range",
                        "dhcpOptionDtos": "DHCP Option",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete Dhcp?",
                        "delete_success": "Dhcp is deleted successfully",
                        "save_error": "Error occured while saving Dhcp",
                        "save_success": "Dhcp is created successfully."
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "dhcp",
                    "modes": {
                        "edit": {
                            "title": "Edit Dhcp",
                            "icon": "fa fa-pencil",
                            "perm": "#create",
                        },
                        "create": {
                            "title": "Add Dhcp",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "propertyList": {
                        "scopeInfo": "Scope Information",
                        "scopeIpRanges": "Scope IP Ranges",
                        "dhcpOptions": "DHCP Options",
                        "scopeIpRange": "Scope IP Range",
                        "dhcpOption": "DHCP Option",
                        "addProperty": "Add",
                        "removeProperty": "Remove",
                        "newRange": "New Range",
                        "newOption": "New Option"
                    },
                    "range": {
                        "scopeName": "Scope Name",
                        "ipVersion": "IP Version",
                        "networkType": "Network Type",
                        "vlan": "VLAN",
                        "scopeIpRange": "Scope IP Range",
                        "excludedAddresses": "Excluded Addresses",
                        "reservedAddresses": "Reserved Addresses",
                        "addressPool": "Adres Havuzu",
                        "ipStart": "Starting IP Address",
                        "ipEnd": "Ending IP Address",
                        "subnetMask": "Subnet Mask",
                        "subnetLength": "Subnet Length",
                        "startAddress": "Start Address",
                        "endAddress": "End Address",
                        "description": "Description",
                        "macAddress": "MAC Address",
                        "ipAddress": "IP Address",
                        "actions": "Actions",
                        "save": "Save"
                    },
                    "option": {
                        "title": "Option Details",
                        "type": "Option Types",
                        "value": "Option Value",
                        "save": "Save",
                        "cancel": "Cancel",
                        "minute": "Minute",
                        "hour": "Hour",
                        "day": "Day",
                        "week": "Week",
                        "month": "Month",
                        "year": "Year"
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' is updated successfully.",
                        "create_success": "'{{dto.name}}' created successfully.",
                        "delete_confirm": "Do you want to delete?",
                        "save_success_option": "DHCP Option '[{{dto.dhcpOptionKey}}] {{optionKey.name}}' is succesfully updated.",
                        "create_success_option": "DHCP Option '[{{dto.dhcpOptionKey}}] {{optionKey.name}}' is succesfully created.",
                        "delete_confirm_option": "Do you want to delete '{{dto.keyName}}' option?",
                        "delete_success_option": "Option '{{dto.keyName}}' successfully deleted. ",
                        "save_success_range": "Interval {{dto.ipStart}} - {{dto.ipEnd}} successfully updated.",
                        "create_success_range": "Interval {{dto.ipStart}} - {{dto.ipEnd}} succesfully created.",
                        "delete_confirm_range": "Do you want to delete {{dto.ipStart}} - {{dto.ipEnd}} address range?",
                        "delete_success_range": "Interval {{dto.ipStart}} - {{dto.ipEnd}} successfully removed.",
                        "create_success_reservedAddress": "Mac address {{dto.mac}} created successfully.",
                        "delete_success_reservedAddress": "Mac address {{dto.mac}} removed successfully.",
                        "create_success_excludedAddress": "Address interval {{dto.ipStart}} - {{dto.ipEnd}} created successfully.",
                        "delete_success_excludedAddress": "Address interval {{dto.ipStart}} - {{dto.ipEnd}} removed successfully.",
                        "networkmask_format_error": "Erroneous network mask.",
                        "router-already-exists": "Router '{{address}}' already exists in the list.",
                        "dns-server-already-exists": "DNS Server '{{address}}' already exists in the list."
                    },
                    "scope": {
                        "name": "Field Name",
                        "ipVersionType": "IP Version",
                        "networkId": "Network Type",
                        "vlanId": "VLAN",
                        "physicalNetwork": "Pyhsical Network",
                        "routerAddress": "Router Address",
                        "domainServer": "Domain Server",
                        "save": "Save",
                        "cancel": "Cancel"
                    },
                    "labels": {}
                },
                "assigned": {
                    "basePerm": "dhcp",
                    "title": "DHCP Address Usage",
                    "modes": {
                        "edit": {
                            "title": "DHCP Address Usage",
                            "icon": "fa fa-users",
                            "perm": "#edit",
                        }
                    },
                    "fields": {
                        "hostName": "Host Name",
                        "IP": "IP",
                        "MAC": "MAC",
                        "userName": "User Name",
                        "assignmentDate": "Assignment Date",
                        "expireDate": "Expire Date",
                    }
                },
                "configuration": {
                    "basePerm": "dhcp",
                    "title": "Central DHCP Management",
                    "icon": "fa fa-globe",
                    "clusters": "Clusters",
                    "list": {
                        "basePerm": "dhcp",
                        "title": "Central DHCP Management",
                        "icon": "fa fa-globe",
                        "perm": "#view",
                        "fields": {
                            "ipAddress": "IP Address",
                            "subnetMask": "Subnet Mask"
                        },
                        "actions": {
                            "create": {
                                "title": "Create Domain",
                                "title_short": "Create",
                                "icon": "fa fa-plus-circle",
                                "color": "blue-madison",
                                "perm": "#create",
                            }
                        }
                    },
                    "edit": {
                        "basePerm": "dhcp",
                        "modes": {
                            "edit": {
                                "title": "Edit DHCP Domain",
                                "icon": "fa fa-pencil",
                                "perm": "#edit",
                            },
                            "create": {
                                "title": "Create DHCP Domain",
                                "icon": "fa fa-plus",
                                "perm": "#create",
                            }
                        },
                        "fields": {
                            "ip": "IP Address",
                            "endIP": "End IP Address",
                            "subnetMask": "Subnet Mask"
                        }
                    }
                }
            },
            "system": {
                "definitions": {
                    "title": "System Config Definitions",
                    "perm": "common:view",
                    "list": {
                        "basePerm": "configDefinition",
                        "title": "System Config Definitions",
                        "icon": "fa fa-puzzle-piece",
                        "perm": "#view",
                        "actions": {
                            "create": {
                                "title": "Add System Config Definition",
                                "title_short": "Add",
                                "icon": "fa fa-plus-circle",
                                "color": "blue-madison",
                                "perm": "#create",
                            },
                            "view": {
                                "title": "System Configs",
                                "title_short": "Details",
                                "icon": "fa fa-wrench",
                                "color": "default",
                                "perm": "#view",
                            },
                            "edit": {
                                "title": "Edit System Config Definition",
                                "title_short": "Edit",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#create",
                            },
                            "delete": {
                                "title": "Delete System Config Definition",
                                "title_short": "Delete",
                                "icon": "fa fa-trash-o",
                                "color": "btn-outline uppercase red-sunglo",
                                "perm": "#delete",
                            }
                        },
                        "fields": {
                            "nodeType": "Module",
                            "componentName": "Component",
                            "configKey": "Parameter",
                            "valueType": "Parameter Type",
                            "valueType_short": "P. Type",
                            "defaultValue": "Default Value",
                            "defaultValue_short": "D. Value",
                            "description": "Description"
                        },
                        "messages": {
                            "delete_confirm": "Do you want to delete System Config Definition?",
                            "delete_success": "System Config Definition is deleted successfully",
                            "save_error": "Error occured while saving System Config Definition",
                            "save_success": "System Config Definition is added successfully."
                        }
                    },
                    "create": {},
                    "edit": {
                        "basePerm": "configDefinition",
                        "modes": {
                            "edit": {
                                "title": "Edit System Config Definition",
                                "icon": "fa fa-pencil",
                                "perm": "#create",
                            },
                            "create": {
                                "title": "Add System Config Definition",
                                "icon": "fa fa-plus",
                                "perm": "#create",
                            }
                        },
                        "actions": {},
                        "fields": {
                            "nodeType": {
                                "label": "Module",
                                "help_line": "Select a Module.",
                            },
                            "componentName": {
                                "label": "Component",
                                "placeholder": "Enter the Component name...",
                                "help_line": "Enter the Component name.",
                                "help_block": ""
                            },
                            "configKey": {
                                "label": "Parameter Name",
                                "placeholder": "Enter the Parameter name...",
                                "help_line": "Enter the Parameter name.",
                                "help_block": ""
                            },
                            "valueType": {
                                "label": "Parameter Type",
                                "help_line": "Select a Parameter Type.",
                            },
                            "defaultValue": {
                                "label": "Default Value",
                                "placeholder": "Enter the Default Value...",
                                "help_line": "Enter the Default Value.",
                                "help_block": ""
                            },
                            "description": {
                                "label": "Description",
                                "placeholder": "Enter a Description...",
                                "help_line": "Enter a Description.",
                                "help_block": ""
                            }
                        },
                        "messages": {
                            "save_success": "System Config Definition is saved successfully.",
                            "create_success": "System Config Definition is added successfully.",
                        },
                        "labels": {}
                    }
                },
                "parameters": {
                    "title": "System Config",
                    "perm": "common:view",
                    "list": {
                        "basePerm": "moduleNodeConfig",
                        "title": "List of System Configs",
                        "icon": "fa fa-cogs",
                        "perm": "#view",
                        "actions": {
                            "create": {
                                "title": "Add System Config",
                                "title_short": "Add",
                                "icon": "fa fa-plus-circle",
                                "color": "blue-madison",
                                "perm": "#create",
                            },
                            "view": {
                                "title": "System Config Details",
                                "title_short": "Details",
                                "icon": "fa fa-eye",
                                "color": "default",
                                "perm": "#view",
                            },
                            "edit": {
                                "title": "Edit System Config",
                                "title_short": "Edit",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#create",
                            },
                            "delete": {
                                "title": "Delete System Config",
                                "title_short": "Delete",
                                "icon": "fa fa-trash-o",
                                "color": "btn-outline uppercase red-sunglo",
                                "perm": "#delete",
                            }
                        },
                        "fields": {
                            "nodeType": "Module",
                            "componentName": "Component",
                            "nodeVersion": "Version",
                            "nodeId": "Node",
                            "configKey": "Parameter Name",
                            "configValue": "Parameter Value"
                        },
                        "messages": {
                            "delete_confirm": "Do you want to delete System Config?",
                            "delete_success": "System Config is deleted successfully",
                            "save_error": "Error occured while saving System Config",
                            "save_success": "System Config is added successfully."
                        },
                        "labels": {
                            "ALL": "All"
                        }
                    },
                    "create": {},
                    "edit": {
                        "basePerm": "moduleNodeConfig",
                        "modes": {
                            "edit": {
                                "title": "Edit System Config",
                                "icon": "fa fa-pencil",
                                "perm": "#create",
                            },
                            "create": {
                                "title": "Add System Config",
                                "icon": "fa fa-plus",
                                "perm": "#create",
                            }
                        },
                        "actions": {},
                        "fields": {
                            "nodeType": {
                                "label": "Module",
                            },
                            "componentName": {
                                "label": "Component",
                            },
                            "configKey": {
                                "label": "Parameter Name",
                            },
                            "nodeVersion": {
                                "label": "Version"
                            },
                            "nodeId": {
                                "label": "Node",
                            },
                            "configValue": {
                                "label": "Parameter Value",
                                "placeholder": "Enter the Parametre Value...",
                                "help_line": "Enter the Parametre Value.",
                                "help_block": ""
                            }
                        },
                        "messages": {
                            "save_success": "System Config is saved successfully.",
                            "create_success": "System Config is added successfully.",
                        },
                        "labels": {
                            "ALL": "All"
                        }
                    }
                },
            },
            "ip_location": {
                "list": {
                    "title": "IP Location List",
                    "icon": "fa fa-server",
                    "basePerm": "ip_loc",
                    "perm": "#list",
                    "actions": {
                        "create_ip_location": {
                            "title": "Create IP Location",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit_ip_location": {
                            "title": "Edit IP Location",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_ip_location": {
                            "title": "Delete IP Location",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "ip_location_name": "IP Location Name",
                        "ip_blocks": "IP Blocks"
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete Ip Location '{{dto.name}}'?",
                        "delete_success": "Ip Location '{{dto.name}}' is successfully deleted!",
                    }
                },
                "edit": {
                    "basePerm": "ip_loc",
                    "modes": {
                        "edit": {
                            "title": "Edit IP Location",
                            "icon": "fa fa-pencil",
                            "perm": "#edit"
                        },
                        "create": {
                            "title": "Create IP Location",
                            "icon": "fa fa-plus",
                            "perm": "#create"
                        }
                    },
                    "actions": {},
                    "fields": {
                        "ip_location_name": {
                            "label": "IP Location Name",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": ""
                        },
                        "ip_blocks": {
                            "label": "Access IP Address",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "Please write one ip block per line." +
                            "E.g.: 192.168.1.1/8"
                        },
                    },
                    "messages": {
                        "save_success": "IP Location '{{dto.name}}' is successfully edited.",
                        "create_success": "IP Location '{{dto.name}}' is successfully created.",
                        "invalid_ip": "Invalid ip address!"
                    }
                }
            },
        },
        "statistics": {
            "title": "statistics",
            "icon": "fa fa-bar-chart",
            "perm": "common:view",
            "dashboard": {
                "list": {
                    "title": "Dashboard",
                    "icon": "fa fa-dashboard",
                    "portlet": {
                        "port": "Switch statistics",
                        "meter": "Virtual Switch statistics",
                    },
                    "basePerm": "stats",
                    "perm": "#list_port_stats | #list_switch_stats | #list_meter_stats",
                    "titles": {
                        "controller": {
                            "icon": "fa fa-chevron-circle-right",
                            "title": "Controllers"
                        },
                        "application": {
                            "icon": "fa fa-server",
                            "title": "Applications"
                        },
                        "switch": {
                            "icon": "fa fa-exchange",
                            "title": "Switches"
                        },
                        "link": {
                            "icon": "fa fa-expand",
                            "title": "Links"
                        },
                        "terminal": {
                            "icon": "fa fa-mobile",
                            "title": "Terminals"
                        },
                        "virtual": {
                            "icon": "fa fa-map",
                            "title": "Virtual Networks"
                        },
                        "moreInfo": "More Info"
                    }
                },
                "metrics": {
                    "portstat": {
                        "bytesReceived": "Bytes Received",
                        "bytesSent": "Bytes Sent",
                        "collisions": "Collisions",
                        "errorRate": "Error Rate",
                        "packetsReceived": "Packets Received",
                        "packetsRxDropped": "Packets Rx Dropped",
                        "packetsRxErrors": "Packets Rx Errors",
                        "packetsSent": "Packets Sent",
                        "packetsTxDropped": "Packets Tx Dropped",
                        "packetsTxErrors": "Packets Tx Errors",
                        "receiveRate": "Receive Rate",
                        "sendRate": "Send Rate"
                    },
                    "meterstat": {
                        "bytes": "Total Bytes",
                        "life": "Life Duration",
                        "packets": "Total Packets"
                    },
                    "cpu": {
                        "idle": "Idle Resource"
                    },
                    "proc": {
                        "meminfo": {
                            "memfree": "Idle RAM",
                            "memtotal": "Total RAM",
                            "swapfree": "Idle SWAP",
                            "swaptotal": "Total SWAP"
                        }
                    }
                },
                "units": {
                    "count": "count",
                    "seconds": "sec",
                    "packets/sec": "packets/sec",
                    "bytes/sec": "bytes/sec"
                },
                "duration": {
                    "title": {
                        "last": "Last"
                    },
                    "display": {
                        "minute": "Minute",
                        "hour": "Hour",
                        "day": "Day",
                        "week": "Week"
                    }
                },
                "exporting": {
                    "contextButtonTitle": "Chart Context Menu",
                    "printChart": "Print",
                    "downloadJPEG": "Downlad as JPEG",
                    "downloadPDF": "Downlad as PDF",
                    "downloadPNG": "Downlad as PNG",
                    "downloadSVG": "Downlad as SVG",
                    "filename": "prognet_statistics_"
                },
                "filter": {
                    "mvtn": "Virtual Network",
                    "devices": "Switches",
                    "metrics": "Metrics",
                    "ports": "Ports",
                    "duration": "Duration",
                    "hosts": "Servers"
                },
                "port": {
                    "prefix": "Port",
                    "all": "All Ports",
                    "zero": "Totals"
                },
                "host": {
                    "prefix": "Host",
                    "all": "All Servers",
                    "zero": "Totals"
                },
                "meter": {
                    "prefix": "Meter",
                    "all": "All Meters",
                    "zero": "Totals"
                },
                "titles": {
                    "ram": "RAM Statistics",
                    "cpu": "CPU Statistics",
                    "switch": "Switch Statistics",
                    "virtual": "Virtual Network Statistics",
                },
                "placeholder": {
                    "mvtn": "Select a virtual network",
                    "devices": "Select a switch",
                    "hosts": "Select a host",
                    "metrics": "Select metrics",
                    "ports": "Select a port",
                    "duration": "Select a duration"
                },
                "reload": {
                    "btn": "Error - Reload"
                },
                "dummy": {
                    "y_axis": "Load (%)"
                },
                "ajax": {
                    "error": "AN ERROR OCCURRED",
                    "no_data": "NO DATA",
                    "no_device": "NO SWITCH"
                },
                "msg": {
                    "sameDevice": "For each switch only one selection can be made."
                }
            }
        },
        "switches": {
            "title": "Switches",
            "icon": "fa fa-server",
            "perm": "common:view",
            "list": {
                "title": "Switch List",
                "icon": "fa fa-server",
                "basePerm": "switches",
                "perm": "#list",
                "actions": {
                    "create": {
                        "title": "Add Switch",
                        "title_short": "Add",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#create"
                    },
                    "view": {
                        "title": "View Switch",
                        "title_short": "View",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "edit": {
                        "title": "Edit Switch",
                        "title_short": "Edit",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    },
                    "delete": {
                        "title": "Delete Switch",
                        "title_short": "Delete",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete"
                    }
                },
                "fields": {
                    "status": "Status", //isEdgeSwitch
                    "mac": "MAC",
                    "name": "Name",
                    "mode": "Mode",
                    "securityMode": "Securiry Mode",
                    "flows": "Flows",
                    "deviceInfo": "Device Info",
                },
                "messages": {
                    "delete_confirm": "Do you want to delete switch '{{dto.id}}'?",
                    "delete_success": "Switch '{{dto.id}}' is succesfully deleted!",
                }
            },
            "edit": {
                "basePerm": "switches",
                "modes": {
                    "edit": {
                        "title": "Edit Switch",
                        "icon": "fa fa-pencil",
                        "perm": "#edit",
                    },
                    "create": {
                        "title": "Add Switch",
                        "icon": "fa fa-plus",
                        "perm": "#create",
                    }
                },
                "actions": {},
                "fields": {
                    "id": {
                        "label": "ID",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "name": {
                        "label": "Name",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "securityMode": {
                        "label": "Security Mode",
                        "placeholder": "--seçiniz--",
                        "help_line": "",
                        "help_block": "",
                    },
                    "securityLevel": {
                        "label": "Security Level",
                        "placeholder": "--select--",
                        "help_line": "",
                        "help_block": "",
                    },
                    "location": {
                        "label": "Location",
                        "placeholder_y": "longitude (y)",
                        "placeholder_x": "latitude (x)",
                        "help_line": "",
                        "help_block": "",
                    },
                    "isEdgeSwitch": {
                        "label": "Is Edge Switch",
                        "placeholder": "This switch will be used for connecting Host devices.",
                        "help_line": "",
                        "help_block": "",
                    }
                },
                "messages": {
                    "save_success": "Switch '{{dto.id}}' is succesfully updated.",
                    "create_success": "Switch '{{dto.id}}' is succesfully created.",
                    "create_not_allowed": "Manually adding switch data is not allowed.",
                    "securityLevel_required": "Please select a 'Security Level' value!",
                    "securityMode_required": "Please select a 'Security Mode' value!"
                },
                "labels": {}
            },
        },
        "links": {
            "title": "Links",
            "icon": "icon-shuffle",
            "perm": "common:view",
            "list": {
                "title": "Links List",
                "icon": "icon-shuffle",
                "basePerm": "links",
                "perm": "#list",
                "actions": {
                    "create": {
                        "title": "Add Link",
                        "title_short": "Add",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#create"
                    },
                    "view": {
                        "title": "View Link",
                        "title_short": "View",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "edit": {
                        "title": "Edit Link",
                        "title_short": "Edit",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    },
                    "delete": {
                        "title": "Delete Link",
                        "title_short": "Delete",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete"
                    }
                },
                "fields": {
                    "status": "Status",
                    "srcPort": "Source",
                    "destPort": "Target",
                    "securityLevel": "Security Level",
                    "medium": "Medium"
                },
                "messages": {
                    "delete_confirm": "Do you want to delete link '{{dto.id}}'?",
                    "delete_success": "Link '{{dto.id}}' is succesfully deleted!",
                }
            },
            "edit": {
                "basePerm": "links",
                "modes": {
                    "edit": {
                        "title": "Edit Link",
                        "icon": "fa fa-pencil",
                        "perm": "#edit",
                    },
                    "create": {
                        "title": "Add Link",
                        "icon": "fa fa-plus",
                        "perm": "#create",
                    }
                },
                "actions": {
                    "edit_uplink": {
                        "title": "Edit Uplink",
                        "perm": "#edit"
                    },
                    "edit_downlink": {
                        "title": "Edit Downlink",
                        "perm": "#edit"
                    },
                    "edit_delay": {
                        "title": "Measure Delay",
                        "perm": "#edit"
                    },
                    "start_delay": {
                        "title": "Start",
                        "perm": "#edit"
                    },
                    "stop_delay": {
                        "title": "Stop",
                        "perm": "#edit"
                    },
                    "measure_delay_jitter": {
                        "title": "Measure Delay and Jitter",
                        "perm": "#edit"
                    },
                    "measure_delay_jitter_not": {
                        "title": "Don't Measure Delay and Jitter",
                        "perm": "#edit"
                    }
                },
                "fields": {
                    "id": {
                        "label": "ID",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "securityLevel": {
                        "label": "Security Level",
                        "placeholder": "--select--",
                        "help_line": "",
                        "help_block": "",
                    },
                    "wanLink": {
                        "label": "WAN Link",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "measureDelay": {
                        "label": "Measure Delay",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "medium": {
                        "label": "Medium",
                        "placeholder": "--select--",
                        "help_line": "",
                        "help_block": "",
                    },
                    "destQueue": {
                        "label": "Destination Queue No",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "sourceQueue": {
                        "label": "Source Queue No",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    }
                },
                "messages": {
                    "save_success": "Link '{{dto.id}}' is succesfully updated.",
                    "create_success": "Link '{{dto.id}}' is succesfully created.",
                    "measure_delay_jitter": "Successfully started measuring Delay & Jitter",
                    "measure_delay_jitter_not": "Delay & Jitter measurement has been sucessfully stopped.",
                    "create_not_allowed": "Manually adding link data is not allowed.",
                    "securityLevel_required": "Please select a 'Security Level' value!",
                    "title_src2dest": "{{title}} [{{dto.srcPort.id}} -> {{dto.destPort.id}}]"
                },
                "labels": {}
            },
        },
        "alarms": {
            "title": "Alarms",
            "icon": "fa fa-bell",
            "perm": "common:view",
            "list": {
                "title": "Alarms",
                "icon": "fa fa-bell",
                "basePerm": "alarms",
                "perm": "#list",
                "actions": {
                    "view": {
                        "title": "View Alarm Details",
                        "title_short": "View",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "view_logs": {
                        "title": "Alarm Logs",
                        "title_short": "Logs",
                        "icon": "fa fa-list-alt",
                        "color": "default",
                        "perm": "alarm_logs:list"
                    },
                    "resolve": {
                        "title": "Resolve",
                        "title_short": "Resolve",
                        "icon": "fa fa-gavel",
                        "color": "green-turquoise",
                        "perm": "alarm_logs:list"
                    },
                    "edit": {
                        "title": "Edit Alarm Definition",
                        "title_short": "Edit",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    },
                    "emergency": {
                        "title": "Use Policy Actions",
                        "title_short": "Use Policy Actions",
                        "icon": "fa fa-medkit",
                        "color": "red-sunglo",
                        "perm": "emergency_pol:start_stop_vnf"
                    }
                },
                "fields": {
                    "id": "Alarm ID",
                    "id_short": "ID",
                    "status": "Status",
                    "status_short": "St",
                    "severity": "Severity",
                    "severity_short": "Sv",
                    "name": "Name",
                    "sourceHost": "Source Host",
                    "resource": "Resource",
                    "time": "Time",
                    "vtnname": "VTN Name"
                },
                "messages": {
                    "emergency": "Emergency Scenario '{{dto.name}}' has been created. Do you want to start Policy Actions?",
                    "emergency_confirm": "Policy Actions have been started."
                }
            },
            "notify": {
                "title": "Alarms",
                "labels": {
                    "alarm_on": "{{count}} {{iconOptions.title}} Alarm(s) On!",
                    "alarm_off": "{{count}} {{iconOptions.title}} Alarm(s) Off!",
                    "view_all": "view all",
                    "alarm_count": '<span class="bold">{{count}}</span> notifications'
                }
            },
            "notify_event": {
                "title": "Alarm Events",
                "labels": {
                    "alarm_on": "{{count}} {{iconOptions.title}} Alarm Event(s) On!",
                    "alarm_off": "{{count}} {{iconOptions.title}} Alarm Event(s) Off!",
                    "view_all": "view all",
                    "alarm_count": '<span class="bold">{{count}}</span> notifications'
                }
            }
        },
        "alarm_events": {
            "title": "Alarm Events",
            "icon": "fa fa-warning",
            "perm": "common:view",
            "list": {
                "title": "Alarm Events",
                "icon": "fa fa-warning",
                "basePerm": "alarms",
                "perm": "#list",
                "actions": {
                    "view": {
                        "title": "View Alarm Events",
                        "title_short": "View",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "view_logs": {
                        "title": "Alarm Event Logs",
                        "title_short": "Events",
                        "icon": "fa fa-list-alt",
                        "color": "default",
                        "perm": "alarm_logs:list"
                    },
                    "edit": {
                        "title": "Edit Alarm Event",
                        "title_short": "Edit",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    }
                },
                "fields": {
                    "id": "Alarm ID",
                    "id_short": "ID",
                    "status": "Status",
                    "status_short": "St",
                    "severity": "Severity",
                    "severity_short": "Sv",
                    "name": "Name",
                    "sourceHost": "Source Host",
                    "resource": "Resource",
                    "time": "Time",
                    "vtnname": "VTN Name"
                },
                "messages": {}
            },
        },
        "alarm_sources": {
            "title": "Alarm Sources",
            "icon": "fa fa-database",
            "perm": "common:view",
            "list": {
                "title": "Alarm Sources",
                "icon": "fa fa-database",
                "basePerm": "alarms",
                "perm": "#list",
                "actions": {
                    "edit_source": {
                        "title": "Edit Alarm Source",
                        "title_short": "Edit",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "source": "Alarm Source Name",
                    "severity": "Alarm Severity",
                    "correction": "Correction Action",
                },
            },
            "edit": {
                "basePerm": "alarms",
                "modes": {
                    "edit": {
                        "title": "Edit Alarm Source",
                        "icon": "fa fa-pencil",
                        "perm": "#view",
                    },
                },
                "actions": {},
                "fields": {
                    "name": {
                        "label": "Component Name",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                    "alarm_severity": {
                        "label": "Severity",
                        "placeholder": "--select--",
                        "help_line": "",
                        "help_block": ""
                    },
                    "alarm_correction": {
                        "label": "Correction Action",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                },
                "messages": {
                    "save_success": "'{{dto.name}}' is succesfully updated.",
                },
                "labels": {}
            },
        },
        "alarm_notif": {
            "title": "Alarm Notifications",
            "icon": "fa fa-envelope",
            "perm": "common:view",
            "list": {
                "title": "Alarm Notifications",
                "icon": "fa fa-envelope",
                "basePerm": "alarm_notif",
                "perm": "#view",
                "actions": {
                    "edit_notif": {
                        "title": "Edit Alarm Notification",
                        "title_short": "Edit",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#view"
                    },
                    "create_notif": {
                        "title": "Create Alarm Notification",
                        "title_short": "Create",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#view"
                    },
                    "delete_notif": {
                        "title": "Delete Alarm Notification",
                        "title_short": "Sil",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "source": "Alarm Sources",
                    "severity": "Alarm Degrees",
                    "mvtn": "Virtual Networks",
                    "email": "E-mail List"
                },
                "messages": {
                    "delete_confirm": "Do you want to delete selected alarm notification?",
                    "delete_success": "Selected notification is succesfully deleted!",
                },
            },
            "edit": {
                "basePerm": "alarms",
                "modes": {
                    "create": {
                        "title": "Create Alarm Notification",
                        "icon": "fa fa-plus",
                        "perm": "#view",
                    },
                    "edit": {
                        "title": "Edit Alarm Notification",
                        "icon": "fa fa-pencil",
                        "perm": "#view",
                    },
                    "delete": {
                        "title": "Delete Alarm Notification",
                        "title_short": "Delete",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete"
                    }
                },
                "actions": {},
                "fields": {
                    "alarm_source": {
                        "label": "Alarm Sources",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                    "mvtn": {
                        "label": "Virtual Networks",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                    "alarm_severity": {
                        "label": "Alarm Degrees",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                    "email": {
                        "label": "E-mail List",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                },
                "messages": {
                    "save_success": "Alarm notification is succesfully updated!",
                },
                "labels": {
                    "emails_help": "Write one e-mail address per line.",
                }
            },
        },
        "alarm_logs": {
            "title": "Alarm Logs",
            "icon": "fa fa-list-alt",
            "perm": "common:view",
            "list": {
                "title": "Alarm Logs",
                "icon": "fa fa-list-alt",
                "basePerm": "alarm_logs",
                "perm": "#list",
                "actions": {
                    "view": {
                        "title": "Details",
                        "title_short": "Details",
                        "icon": "fa fa-info-circle",
                        "color": "default",
                        "perm": "#view"
                    },
                    "archive": {
                        "title_short": "Archive",
                        "icon": "fa fa-archive",
                        "color": "blue-madison",
                        "perm": "#view"
                    },
                    "current": {
                        "title_short": "Current",
                        "icon": "fa fa-calendar",
                        "color": "blue-madison",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "id": "Alarm ID",
                    "id_short": "ID",
                    "status": "Status",
                    "status_short": "St",
                    "severity": "Severity",
                    "severity_short": "Sv",
                    "name": "Name",
                    "source": "Source",
                    "resource": "Resource",
                    "time": "Time",
                    "description": "Description",
                    "type": "Type",
                    "alarmStatus": "Status",
                    "sourceHost": "Source Host",
                    "sourceInstance": "Source Instance",
                    "vtnName": "VTN Name",
                    "solveTime": "Resolution Time",
                    "reportingMethod": "Reporting Method",
                    "resolver": "Resolver",
                    "resolveNote": "Resolution Notes"
                },
                "messages": {
                    "select_item": "Please select an Alarm Log from the list, to see details. "
                },
                "labels": {
                    "all": "All"
                }
            },
            "details": {
                "title": "{{type}} : {{name}}",
                "title_no_selection": "No Details",
                "icon": "fa fa-list-alt",
                "basePerm": "alarm_logs",
                "perm": "#view",
                "actions": {},
                "fields": {
                    "id": "Alarm ID",
                    "id_short": "ID",
                    "status": "Status",
                    "status_short": "St",
                    "severity": "Severity",
                    "severity_short": "Sv",
                    "name": "Name",
                    "source": "Source",
                    "resource": "Resource",
                    "time": "Created",
                    "solveTime": "Solve Time",
                    "description": "Description",
                    "type": "Type",
                    "alarmStatus": "Alarm Status",
                    "sourceHost": "Source Host",
                    "targetHost": "Target Host",
                    "sourceInstance": "Source Instance",
                    "vtnName": "VTN Name",
                    "reportingMethod": "Reporting Method",
                    "resolver": "Resolver",
                    "detail": "Detail",
                    "resolveNote": "Resolution Note"
                },
                "messages": {},
            },
            "resolve": {
                "title": "Resolve Alarm",
                "icon": "fa fa-gavel",
                "basePerm": "alarm_logs",
                "perm": "#view",
                "fields": {
                    "resolveNote": "Resolution Notes"
                },
                "messages": {
                    "save_success": "Resolutin note is successfully added.",
                }
            }
        },
        "logs": {
            "title": "Logs",
            "icon": "fa fa-file-text",
            "perm": "common:view",
            "list": {
                "title": "Logs",
                "icon": "fa fa-file-text",
                "basePerm": "alarm_logs",
                "perm": "#list",
                "actions": {
                    "view": {
                        "title": "Details",
                        "title_short": "Detail",
                        "icon": "fa fa-info-circle",
                        "color": "default",
                        "perm": "#view"
                    },
                    "select_column": {
                        "title": "Select Table Columns",
                        "title_short": "Select Columns",
                        "icon": "fa fa-columns",
                        "color": "default",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "status": "Status",
                    "status_short": "Sts",
                    "name": "Name",
                    "source": "Source",
                    "time": "Time",
                    "description": "Description",
                    "type": "Type",
                    "sourceIP": "Source IP",
                    "sourceMAC": "Source MAC",
                    "sourcePort": "Source Port",
                    "destinationIP": "Dest. IP",
                    "destinationMAC": "Dest. MAC",
                    "destinationPort": "Dest. Port",
                    "sourceInstance": "Source Inst.",
                    "protocol": "Protocol",
                    "username": "Username",
                    "module": "Module",
                    "xid": "Request ID",
                    "data": "Description"
                },
                "messages": {
                    "select_item": "Please select a row for details."
                },
                "labels": {
                    "all": "All"
                },
                "enums": {
                    "EDRSTATUS": {
                        "SUCCESS": {icon: 'fa fa-check-circle', color: 'green-turquoise', title: 'Success'},
                        "FAIL": {icon: 'fa fa-minus', color: 'grey-steel', title: 'Fail'}
                    }
                }
            },
            "details": {
                "title": "Log Details",//"'{{name}}' Detayları",
                "title_no_selection": "No Detail",
                "icon": "fa fa-list-alt",
                "basePerm": "alarm_logs",
                "perm": "#view",
                "actions": {
                    "view": {
                        "title": "Details",
                        "title_short": "Detail",
                        "icon": "fa fa-info-circle",
                        "color": "default",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "status": "Status",
                    "status_short": "Sts",
                    "name": "Name",
                    "source": "Source",
                    "time": "Time",
                    "description": "Description",
                    "type": "Type",
                    "sourceIP": "Source IP",
                    "sourceMAC": "Source MAC",
                    "sourcePort": "Source Port",
                    "destinationIP": "Dest. IP",
                    "destinationMAC": "Dest. MAC",
                    "destinationPort": "Dest. Port",
                    "sourceInstance": "Source Inst.",
                    "protocol": "Protocol",
                    "detail": "Detail",
                    "module": "Module",
                    "related_fields": "Related Logs",
                    "raw_edr_data": "RAW EDR Data",
                    "query": "Query",
                    "xid": "Request ID",
                    "username": "Username",
                    "key": "Key",
                    "value": "Value",
                    "data": "Description"
                },
                "messages": {},
                "labels": {
                    "all": "All"
                },
                "enums": {
                    "EDRSTATUS": {
                        "SUCCESS": {icon: 'fa fa-check-circle', color: 'green-turquoise', title: 'Success'},
                        "FAIL": {icon: 'fa fa-minus', color: 'grey-steel', title: 'Fail'}
                    }
                }
            },
        },
        "tests": {
            "UIHelperTest": {
                "title": "UIHelper Tests",
                "icon": "fa fa-check-square-o",
                "basePerm": "common",
                "perm": "#view",
                "actions": {}
            }
        },
        "wlan": {
            "title": "WLAN Link Management",
            "icon": "fa fa-shield",
            "perm": "common:view",
            "list": {
                "title": "WAN Link List",
                "icon": "icon-map",
                "basePerm": "wanPortInfo",
                "perm": "#list",
                "actions": {
                    "create_wlan": {
                        "title": "Add WLAN",
                        "title_short": "Add",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#create",
                    },
                    "view_wlan": {
                        "title": "WLAN Details",
                        "title_short": "Details",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view",
                    },
                    "edit_wlan": {
                        "title": "Edit WLAN",
                        "title_short": "Edit",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#create",
                    },
                    "delete_wlan": {
                        "title": "Delete WLAN",
                        "title_short": "Delete",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete",
                    }
                },
                "fields": {
                    "status": "Status",
                    "wlan_link_name": "WAN Link Name",
                    "src_cluster": "Source Switch",
                    "dst_cluster": "Target Cluster",
                    "super_port": "Super Port",
                    "delay": "Delay",
                    "jitter": "Jitter",
                    "loss": "Loss",
                    "desc": "Description"
                },
                "messages": {
                    "delete_confirm": "Do you really want to delete '{{dto.name}}' WLAN?",
                    "delete_success": "'{{dto.name}}' named WLAN is deleted successfully!",
                }
            },
            "create": {},
            "edit": {
                "basePerm": "wanPortInfo",
                "title": "WAN Link",
                "modes": {
                    "edit": {
                        "title": "Edit WAN Link",
                        "icon": "fa fa-pencil",
                        "perm": "#create",
                    },
                    "create": {
                        "title": "Add WAN Link",
                        "icon": "fa fa-plus",
                        "perm": "#create",
                    }
                },
                "actions": {},
                "fields": {
                    "wan_link_name": {
                        "label": "WAN Link Name",
                        "placeholder": "Enter Link Name..",
                        "help_line": "",
                        "help_block": ""
                    },
                    "switch": {
                        "label": "Switch",
                        "placeholder": "Select a Switch...",
                        "help_line": "Select.",
                        "help_block": ""
                    },
                    "port": {
                        "label": "Port",
                        "placeholder": "Select a Port...",
                        "help_line": "Select.",
                        "help_block": ""
                    },
                    "super_port": {
                        "label": "Super Port",
                        "placeholder": "Port değeri seçiniz...",
                        "help_line": "Port değeri seçiniz.",
                        "help_block": ""
                    },
                    "dst_cluster": {
                        "label": "Target Cluster",
                        "placeholder": "Choose a target Cluster...",
                        "help_line": "Choose a target Cluster.",
                        "help_block": ""
                    },
                    "link_speed": {
                        "label": "Link Speed",
                        "placeholder": "Enter a speed value...",
                        "help_line": "Enter a speed value.",
                        "help_block": ""
                    },
                    "link_type": {
                        "label": "Link Type",
                        "placeholder": "Select a Link Type...",
                        "help_line": "Select a Link Type.",
                        "help_block": ""
                    },
                    "description": {
                        "label": "Description"
                    }
                },
                "messages": {
                    "save_success": "'{{dto.name}}' named WLAN is updated successfully.",
                    "create_success": "'{{dto.name}}' named WLAN is created successfully.",
                },
                "labels": {}
            }
        },
        "wan_vtn_management": {
            "title": "Wide Area Network Management",
            "icon": "fa fa-cloud",
            "fields": {
                "name": "Name",
                "vlan_tag": "VLAN Tag",
                "people_count": "People Count",
                "active_cluster": "Active Cluster Names"
            },
            "actions":{
                "create_wan": {
                    "title": "Create WAN",
                    "title_short": "Create",
                    "icon": "fa fa-plus-circle",
                    "color": "blue-madison",
                    //"perm": "#create",
                },
                "edit_wan": {
                    "title": "Edit WAN",
                    "title_short": "Edit",
                    "icon": "fa fa-pencil",
                    "color": "green-meadow",
                    "perm": "#edit",
                },
                "delete_wan": {
                    "title": "Delete WAN",
                    "title_short": "Delete",
                    "icon": "fa fa-trash-o",
                    "color": "btn-outline uppercase red-sunglo",
                    "perm": "#delete",
                }
            },
            "messages": {
                "delete_confirm": "Do you want to <b>delete</b> WAN '__dto.name__'?",
                "delete_success": "WAN '__dto.name__' has been succesfully deleted!"
            }
        },
        "bgp_management": {
            "title": "BGP Management",
            "icon": "fa fa-cloud",
            "fields": {
                "router": "Routers",
                "peer": "Router Descriptions",
                "route": "Route Descriptions"
            },
            "router": {
                "list": {
                    "title": "Router List",
                    "icon": "fa fa-list",
                    "basePerm": "bgp",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Create Router",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit": {
                            "title": "Edit Router",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete": {
                            "title": "Delete Router",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "type": "Type",
                        "name": "Name",
                        "asNumber": "Autonomous System Number",
                        "deviceId": "Switch",
                        "ip": "IP Block",
                        "controlPlaneIp": "Control Plane IP",
                        "mac": "MAC",
                        "vlanId": "VLAN Id",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete router '{{dto.name}}'?",
                        "delete_success": "Router '{{dto.name}}' has been deleted successfully!"
                    }
                },
                "edit": {
                    "icon": "fa fa-pencil",
                    "basePerm": "bgp",
                    "perm": "#edit",
                    "modes": {
                        "edit": {
                            "title": "Edit Router",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Create Router",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "type": "Router Type",
                        "name": "Router Name",
                        "asNumber": "Autonomous System Number",
                        "deviceId": "Switch Id",
                        "port": "Port",
                        "ip": "IP Block",
                        "controlPlaneIp": "Control Plane IP",
                        "bgpPort": "BGP Port",
                        "bgpPassword": "BGP Password",
                        "mac": "MAC Address",
                        "vlanId": "VLAN Id",
                    },
                    "messages": {
                        "save_success": "Rotuer '{{dto.name}}' successfully updated",
                        "create_success": "Router '{{dto.name}}' has been created successfully"
                    }
                }
            },
            "peer": {
                "list": {
                    "title": "Neighbor Description List",
                    "icon": "fa fa-list",
                    "basePerm": "bgp",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Create Neighbor",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit": {
                            "title": "Edit Neighbor",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "relation": {
                            "title": "Neighbor Communication Status",
                            "title_short": "Neighbor",
                            "icon": "fa fa-heartbeat",
                            "color": "green-meadow",
                            "perm": "#list"
                        },
                        "delete": {
                            "title": "Delete Neighbor",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "name": "Name",
                        "peerList": "Peer List",
                        "connectRetry": "Connection Retry",
                        "holdTime": "Hold Time",
                        "keepaliveInterval": "Keep Alive Interval",
                        "minimumAdvertisementInterval": "Minimum Advertisement Interval",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete neighbor description?",
                        "delete_success": "Neighbor description has been deleted successfully!"
                    }
                },
                "edit": {
                    "icon": "fa fa-pencil",
                    "basePerm": "bgp",
                    "perm": "#edit",
                    "modes": {
                        "edit": {
                            "title": "Edit Neighbor",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Create Neighbor",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "speaker": "Speaker",
                        "connectRetry": "Connection Retry",
                        "holdTime": "Hold Time",
                        "keepaliveInterval": "Keep Alive Interval",
                        "minimumAdvertisementInterval": "Minimum Advertisement Interval",
                        "peerList": "Peer Routes",
                    },
                    "name": "Name",
                    "asNumber": "Autonomous System Number",
                    "ip": "IP Block",
                    "second": "second"
                },
                "relation": {
                    "icon": "fa fa-heartbeat",
                    "basePerm": "bgp",
                    "perm": "#list",
                    "title": "Komşuluk İletişim Durumu",
                    "fields": {
                        "name": "Peer Name",
                        "asNumber": "Autonomous System Number",
                        "peerStatus": "Peer Status",
                        "description": "Description"
                    }
                }
            },
            "route": {
                "list": {
                    "title": "Route List",
                    "icon": "fa fa-list",
                    "basePerm": "bgp",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Create Route",
                            "title_short": "Create",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit": {
                            "title": "Edit Route",
                            "title_short": "Edit",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete": {
                            "title": "Delete Route",
                            "title_short": "Delete",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "name": "Route Name",
                        "prefix": "Prefix",
                        "nextHop": "Next Hop",
                        "origin": "Protocol",
                    },
                    "messages": {
                        "delete_confirm": "Do you want to delete the route?",
                        "delete_success": "Route has been deleted successfully!"
                    }
                },
	            "edit": {
		            "icon": "fa fa-pencil",
		            "basePerm": "bgp",
		            "perm": "#edit",
		            "modes": {
			            "create": {
				            "title": "Create Route",
				            "icon": "fa fa-plus",
				            "perm": "#create",
			            }
		            },
		            "fields": {
			            "routes": "Routes",
		            },
		            "ip_error" : "Some IP's are not well formatted",
		            "warning" : "Enter an IP at each row. ex: 192.168.1.1/24",
		            "messages": {
			            "create_success": "Route has been created successfully"
		            }
	            },
            }
        },
	    "bgp_filter": {
		    "title": "BGP Filter",
		    "icon": "fa fa-cloud",
		    "fields": {
			    "set": "Defined Sets",
			    "policy": "Policies",
			    "assignPolicy": "Assign Policy"
		    },
		    "set": {
			    "list": {
				    "title": "Defined Sets",
				    "icon": "fa fa-list",
				    "basePerm": "bgp",
				    "perm": "#list",
				    "actions": {
					    "create": {
						    "title": "Create Set",
						    "title_short": "Create",
						    "icon": "fa fa-plus-circle",
						    "color": "blue-madison",
						    "perm": "#create"
					    },
					    "edit": {
						    "title": "Edit Set",
						    "title_short": "Edit",
						    "icon": "fa fa-pencil",
						    "color": "green-meadow",
						    "perm": "#edit"
					    },
					    "delete": {
						    "title": "Delete Set",
						    "title_short": "Delete",
						    "icon": "fa fa-trash-o",
						    "color": "btn-outline uppercase red-sunglo",
						    "perm": "#delete"
					    }
				    },
				    "fields": {
					    "definedSetType": "Type",
					    "name": "Name",
					    "list": "List",
					    "prefixList": "Prefix List",
				    },
				    "messages": {
					    "delete_confirm": "Do you want to delete set '{{dto.name}}'?",
					    "delete_success": "Set '{{dto.name}}' has been successfully deleted!"
				    }
			    },
			    "edit": {
				    "icon": "fa fa-pencil",
				    "basePerm": "bgp",
				    "perm": "#edit",
				    "modes": {
					    "edit": {
						    "title": "Edit Set",
						    "icon": "fa fa-pencil",
						    "perm": "#edit",
					    },
					    "create": {
						    "title": "Create Set",
						    "icon": "fa fa-plus",
						    "perm": "#create",
					    }
				    },
				    "fields": {
					    "definedSetType": "Set Type",
					    "name": "Name",
					    "list": "List",
					    "ipPrefix" : "IP Prefix",
					    "minMask" : "Min Mask",
					    "maxMask" : "Max Mask"
				    },
				    "messages": {
					    "save_success": "Set '{{dto.name}}' has been successfully updated",
					    "create_success": "Set '{{dto.name}}' has been successfully created"
				    },
				    "labels":{
				    	"warning" : "Enter a value for each line. You can use 'Regex'"
				    }
			    }
		    },
		    "policy": {
			    "list": {
				    "title": "Policies",
				    "icon": "fa fa-list",
				    "basePerm": "bgp",
				    "perm": "#list",
				    "actions": {
					    "create": {
						    "title": "Create Policy",
						    "title_short": "Create",
						    "icon": "fa fa-plus-circle",
						    "color": "blue-madison",
						    "perm": "#create"
					    },
					    "edit": {
						    "title": "Edit Policy",
						    "title_short": "Edit",
						    "icon": "fa fa-pencil",
						    "color": "green-meadow",
						    "perm": "#edit"
					    },
					    "delete": {
						    "title": "Delete Policy",
						    "title_short": "Delete",
						    "icon": "fa fa-trash-o",
						    "color": "btn-outline uppercase red-sunglo",
						    "perm": "#delete"
					    }
				    },
				    "fields": {
					    "name": "Policy Name",
					    "statementList": "Statements List",
				    },
				    "messages": {
					    "delete_confirm": "Do you want to delete Bgp policy?",
					    "delete_success": "Bgp policy has been deleted successfully!"
				    }
			    },
			    "edit": {
				    "icon": "fa fa-pencil",
				    "basePerm": "bgp",
				    "perm": "#edit",
				    "modes": {
					    "edit": {
						    "title": "Edit Policy",
						    "icon": "fa fa-pencil",
						    "perm": "#edit",
					    },
					    "create": {
						    "title": "Create Policy",
						    "icon": "fa fa-plus",
						    "perm": "#create",
					    }
				    },
				    "fields": {
					    "name": "Policy Name",
					    "statementName" : "Statement Name",
						"asPathMatchSet" : "AS Path Match Set",
					    "neighborMatchSet" : "Neighbor Match Set",
					    "prefixMatchSet" : "Prefix Match Set",
					    "routeAction" : "Route Action"
				    },
				    "name": "Name",
				    "conditionType": "Condition Type",
				    "definedSets": "Defined Sets",
				    "peerMode": "Peer Mode",
				    "add" : "Add",
				    "condition" : "Condition",
				    "action" : "Action",
				    "newStatementName" : "New Statement",
				    "select" : "Select",
				    "messages": {
					    "save_success": "Policy '{{dto.name}}' has been updated successfully",
					    "create_success": "Policy '{{dto.name}}' has been created successfully"
				    }
			    },
		    },
		    "assign_policy": {
			    "list": {
				    "title": "Assign Policy",
				    "icon": "fa fa-list",
				    "basePerm": "bgp",
				    "perm": "#list",
				    "actions": {
					    "edit": {
						    "title": "Assign Policy",
						    "title_short": "Edit",
						    "icon": "fa fa-pencil",
						    "color": "green-meadow",
						    "perm": "#edit"
					    }
				    },
				    "fields": {
					    "resourceType": "Resource Type",
					    "policyType": "Policy Type",
					    "defaultRouteAction": "Default Route Action",
					    "policyList": "Policy List",
				    },
				    "messages": {
				    }
			    },
			    "edit": {
				    "icon": "fa fa-pencil",
				    "basePerm": "bgp",
				    "perm": "#edit",
				    "modes": {
					    "edit": {
						    "title": "Assign Policy",
						    "icon": "fa fa-pencil",
						    "perm": "#edit",
					    },
				    },
				    "fields": {
					    "resourceType": "Resource Type",
					    "policyType": "Policy Type",
					    "defaultRouteAction": "Default Route Action",
					    "policyList": "Policy List",
				    },
				    "messages": {
					    "save_success" : "Policy assign successfully updated",
					    "create_success" : "Policy assigned"
				    }
			    }
		    }
	    },
        "top_menu": {
            "network_management": {
                "title": "Network Management",
                "icon": "fa fa-share-alt",
                "perm": "common:view",
                "controller_management": {
                    "controller_settings": {
                        "title": "Controller Settings",
                        "icon": "fa fa-wrench fa-sub fa-sub-gavel",
                        "perm": "common:view"
                    }
                },
                "device_management": {
                    "title": "Net. Components Management",
                    "icon": "fa fa-server",
                    "perm": "common:view"
                },
                "traffic_management": {
                    "title": "Traffic Management",
                    "icon": "fa fa-map-signs",
                    "perm": "common:view"
                },
                "network_services": {
                    "title": "Net. Services Managment",
                    "icon": "icon-layers",
                    "perm": "common:view",
                    "dhcp": {
                        "title": "DHCP Management",
                        "icon": "fa fa-globe",
                        "perm": "common:view",
                        "dhcp_settings": {
                            "title": "DHCP Settings",
                            "icon": "fa fa-wrench fa-sub fa-sub-globe",
                            "perm": "moduleNodeConfig:view"
                        }
                    },
                    "nat": {
                        "title": "NAT Management",
                        "icon": "",
                        "perm": "common:view"
                    }
                }
            },
            "network_virtualization": {
                "title": "Network Virtualization",
                "icon": "fa fa-cloud",
                "perm": "common:view",
                "virtual_network": {
                    "title": "Virtual Net. Management",
                    "icon": "fa fa-share-alt-square",
                    "perm": "common:view"
                }
            },
            "authentication": {
                "title": "Authentication",
                "icon": "fa fa-id-card-o",
                "perm": "common:view",
                "nac": {
                    "nac_settings": {
                        "title": "NAS Settings",
                        "icon": "fa fa-wrench fa-sub fa-sub-key",
                        "perm": "moduleNodeConfig:view"
                    }
                },
                "security_management": {
                    "title": "Security Management",
                    "icon": "fa fa-shield",
                    "perm": "common:view",
                }
            },
            "alarm": {
                "notifications": {
                    "title": "Alarm Notifications",
                    "icon": "fa fa-flag",
                    "perm": "common:view",
                },
                "alarm_settings": {
                    "title": "Alarm Settings",
                    "icon": "fa fa-wrench fa-sub fa-sub-bell",
                    "perm": "moduleNodeConfig:view"
                }
            },
	        "centralDomain": "Center",
	        "noDomain": "There is no subdomain",
	        "messages": {
		        "confirm_domain": "Do you want to switch your domain to {{name}}?",
		        "confirm_central": "Do you want to switch to central domain?",
		        "fetch_domain_fail" : "Domain data couldn't been fetched",
		        "domain_change_success" : "You switched to {{name}} domain successfully",
		        "domain_change_fail" : "Couldn't have switched to {{name}} domain"
	        },
        }
    }
};
