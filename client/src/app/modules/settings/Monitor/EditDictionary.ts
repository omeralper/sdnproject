/**
 * Created by omeroz on 7/6/2017.
 */

export let MonitorMetaDataEditDictionary = {
	tr: {
		"monitorMetaDataEdit": {
			"basePerm": "common",
			"modes": {
				"edit": {
					"title": "Ölçer Düzenle",
					"icon": "fa fa-pencil",
					"perm": "#view",
				},
                "create": {
                    "title": "Ölçer Düzenle",
                    "icon": "fa fa-pencil",
                    "perm": "#view",
                },
			},
			"fields": {
				"name": {
					"label": "Ölçer Adı"
				},
				"label": {
					"label": "Etiket",
				},
				"lowAlarmThreshold":{
					"label": "Düşük Alarm Eşiği",
					"placeholder": "--select--",
					"help_line": "Bu değerin altına düşmesi durumunda alarm verilir",
					"help_block": "",
				},
				"highAlarmThreshold":{
					"label": "Yüksek Alarm Eşiği",
					"placeholder": "--select--",
					"help_line": "Bu değerin üstüne çıkması durumunda alarm kapatılır",
					"help_block": "",
				}
			},
			"messages": {
				"save_success": "'{{dto.name}}' isimli ölçer başarıyla güncellenmiştir.",
				"treshold_warning" : "Düşük alarm yüksek alarm eşiğinden daha az olmalıdır"
			},
			"warning": "Eşik değerlerini '0' (sıfır) olarak tanımlayarak ALARM sistemini devre dışı bırakabilirsiniz"
		}
	},
	en: {
		"monitorMetaDataEdit": {
			"basePerm": "common",
			"modes": {
				"edit": {
					"title": "Edit Monitor",
					"icon": "fa fa-pencil",
					"perm": "#view",
				},
                "create": {
                    "title": "Edit Monitor",
                    "icon": "fa fa-pencil",
                    "perm": "#view",
                },
			},
			"fields": {
				"name": {
					"label": "Monitor Name"
				},
				"label": {
					"label": "Label",
				},
				"lowAlarmThreshold":{
					"label": "Low Alarm Treshold",
					"placeholder": "--select--",
					"help_line": "In case of the value drops below the threshold, alarm appears.",
					"help_block": "",
				},
				"highAlarmThreshold":{
					"label": "Yüksek Alarm Eşiği",
					"placeholder": "--select--",
					"help_line": "In case of the value increases over the threshold, alarm disappears.",
					"help_block": "",
				}
			},
			"messages": {
				"save_success": "Monitor '{{dto.name}}' successfully updated",
				"treshold_warning" : "Low treshold must be lower than high treshold"
			},
			"warning": "You can disable the alarm system by setting the threshold to '0' (zero)"
		}
	}
};
