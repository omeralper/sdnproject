/**
 * Created by omeroz on 7/5/2017.
 */

export let MonitorDictionary = {
	tr: {
		"monitor": {
			"basePerm": "cluster",
			"modes": {
				"edit": {
					"title": "Ölçer Ayarları",
					"icon": "fa fa-pencil",
					"perm": "#edit",
				},
				"create": {
					"title": "Ölçer Ekle",
					"icon": "fa fa-plus",
					"perm": "#create",
				}
			},
			"actions": {
			},
			"messages": {
				"save_success": "'{{dto.name}}' isimli ölçer başarıyla güncellenmiştir.",
				"create_success": "'{{dto.name}}' isimli ölçer başarıyla oluşturulmuştur.",
			},
			"labels": {
				"type": "Ölçer Tipi",
				"name": "Ölçer Adı"
			}
		}
	},
	en: {
		"monitor": {
			"basePerm": "cluster",
			"modes": {
				"edit": {
					"title": "Monitor Settings",
					"icon": "fa fa-pencil",
					"perm": "#edit",
				},
				"create": {
					"title": "Create Monitor",
					"icon": "fa fa-plus",
					"perm": "#create",
				}
			},
			"actions": {
			},
			"messages": {
				"save_success": "Monitor '{{dto.name}}' is succesfully updated.",
				"create_success": "Monitor '{{dto.name}}' is succesfully created.",
			},
			"labels": {
				"type": "Monitor Type",
				"name": "Monitor Name"
			}
		}
	}
};
