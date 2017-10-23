/**
 * Created by omeroz on 7/6/2017.
 */

export let MonitorMetaDataListDictionary = {
	tr: {
		"monitorMetaDataList": {
			"title": "Ağ Ölçer Listesi",
			"icon": "fa fa-list",
			"perm": "common:view",
			"actions": {
				"editAll": {
					"title": "Ağ Ölçer Düzenle",
					"title_short": "Seçilenleri Düzenle",
					"icon": "fa fa-pencil",
					"color": "green-meadow",
				},
				"editSingle": {
					"title": "Ağ Ölçer Düzenle",
					"title_short": "Düzenle",
					"icon": "fa fa-pencil",
					"color": "green-meadow",
				}
			},
			"fields": {
				"name": "Ölçer Adı",
				"owner": "Sahibi",
				"limit": "Düşük/Yüksek Limit",
				"alarm" : "Düşük/Yüksek Alarm Eşiği",
				"tags": "Etiketler",
				"type": "Tipi",
				"select" : "Seç"
			},
			"messages": {
				"select_items" : "Lütfen listeden öğe seçiniz"
			}
		}
	},
	en: {
		"monitorMetaDataList": {
			"basePerm": "common",
			"title": "Monitor List",
			"icon": "fa fa-list",
			"perm": "common:view",
			"actions": {
				"editAll": {
					"title": "Edit Monitor",
					"title_short": "Edit",
					"icon": "fa fa-pencil",
					"color": "green-meadow",
				},
				"editSingle": {
					"title": "Edit Monitors",
					"title_short": "Edit Selected Monitors",
					"icon": "fa fa-pencil",
					"color": "green-meadow",
				}
			},
			"fields": {
				"name": "Monitor Name",
				"owner": "Owner",
				"loLimit": "Low Threshold",
				"hiLimit": "High Threshold",
				"tags": "Tags",
				"type": "Type",
				"select" : "Select"
			},
            "messages": {
                "select_items" : "Please select some items from list"
            }
		}
	}
};
