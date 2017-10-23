/**
 * Created by omeroz on 6/29/2017.
 */
export let NacUserEditPopupDictionary = {
	tr: {
		"mykey": {
			"basePerm": "nacusers",
			"modes": {
				"edit": {
					"title": "Son Kullanıcı Düzenle",
					"icon": "fa fa-pencil",
					"perm": "#edit",
				},
				"create": {
					"title": "Son Kullanıcı Ekle",
					"icon": "fa fa-plus",
					"perm": "#create",
				}
			},
			"actions": {
				"newNacGroup": "Yeni Grup",
				"newByodGroup": "Yeni Grup",
				"email": "Şifreyi E-posta",
				"password": "Şifre?",
				"deviceList": "Ağ Cihazları Listesi",
				"personalDevices": "Personel Cihazları"
			},
			"fields": {
				"status": {
					"label": "Hesap Durumu",
					"placeholder": "--seçiniz--",
					"help_line": "",
					"help_block": "",
				},
				"username": {
					"label": "Kullanıcı Adı",
					"placeholder": "Kullanıcı adı yazınız...",
					"help_line": "Tekil bir Kulanıcı Adı yazınız.",
					"help_block": "",
				},
				"password": {
					"label": "Şifre",
					"placeholder": "Şifre yazınız...",
					"help_line": "En az 6 karakterden oluşan bir şifre yazınız.",
					"help_block": "",
				},
				"passwordRetype": {
					"label": "Şifre (Tekrar)",
					"placeholder": "Şifreyi tekrar yazınız...",
					"help_line": "Güvenlik amacıyla şifreyi tekrar yazınız.",
					"help_block": "",
				},
				"name": {
					"label": "Adı",
					"placeholder": "Adını yazınız...",
					"help_line": "",
					"help_block": "",
				},
				"surname": {
					"label": "Soyadı",
					"placeholder": "Soyadını yazınız...",
					"help_line": "",
					"help_block": "",
				},
				"email": {
					"label": "E-posta Adresi",
					"placeholder": "E-posta adresini yazınız...",
					"help_line": "",
					"help_block": "",
				},
				"phoneNumber": {
					"label": "Telefon Numarası",
					"placeholder": "Telefon numarasını yazınız...",
				},
				"notes": {
					"label": "Notlar",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
				},
				"securityLevel": {
					"label": "Güvenlik Seviyesi",
					"placeholder": "--seçiniz--",
					"help_line": "",
					"help_block": "",
				},
				"bandwidthLimit": {
					"label": "Bant Genişiği Limiti",
					"placeholder": "Bant genişliği limiti giriniz...",
					"help_line": "Bant genişliği değeri Mbit/s cinsinden giriniz..",
					"help_block": "",
				},
				"created": {
					"label": "Oluşturma Tarihi",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
				},
				"modified": {
					"label": "Değişiklik Tarihi",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
				},
				"lastAccessed": {
					"label": "Son Erişim Tarihi",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
				},
				"profileList": {
					"label": "Gruplar",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
					"selectableHeader": "Seçilebilir Gruplar",
					"selectionHeader": "Atanmış Gruplar",
				},
				"deviceList": {
					"label": "Cihazlar",
					"placeholder": "Kullanım yetkisi olan cihazlar.",
					"help_line": "",
					"help_block": "",
					"selectableHeader": "Seçilebilir Cihazlar",
					"selectionHeader": "Yetkili Cihazlar",
				},
				"tcNo": {
					"label": "TC Kimlik No",
					"placeholder": "TC Kimlik No Giriniz",
					"help_line": "",
					"help_block": "",
				},
				"accessDateStart": {
					"label": "İlk Erişilebilirlik Tarihi",
					"placeholder": "İlk Erişilebilirlik Tarihi Giriniz",
					"help_line": "",
					"help_block": "",
				},
				"accessDateEnd": {
					"label": "Son Erişilebilirlik Tarihi",
					"placeholder": "Son Erişilebilirlik Tarihi Giriniz",
					"help_line": "",
					"help_block": "",
				},
				"userType": {
					"label": "Kullanıcı Tipi",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
				},
				"nacGroup": {
					"label": "Erişim Grubu",
					"placeholder": "Erişim Grubu Seçiniz",
					"help_line": "",
					"help_block": "",
				},
				"byodNacGroup": {
					"label": "BYOD Erişim Grubu",
					"placeholder": "Otomatik BYOD Erişim Grubu Seçiniz",
					"help_line": "",
					"help_block": "",
				},
				"mac": {
					"label": "MAC",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
				},
				"has8021xSupport": {
					"label": "802.1x",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
				},

			},
			"messages": {
				"save_success": "'{{dto.username}}' isimli son kullanıcı başarıyla güncellenmiştir.",
				"create_success": "'{{dto.username}}' isimli son kullanıcı başarıyla oluşturulmuştur.",
			},
			"labels": {
				"accessDateSettings": "Erişim Zaman Ayarları",
				"personalDevices": "Personel Cihazları"
			}
		}
	},
	en: {
		"mykey": {
			"basePerm": "nacusers",
			"modes": {
				"edit": {
					"title": "Edit End User",
					"icon": "fa fa-pencil",
					"perm": "#edit",
				},
				"create": {
					"title": "Add End User",
					"icon": "fa fa-plus",
					"perm": "#create",
				}
			},
			"actions": {
				"newNacGroup": "New Group",
				"newByodGroup": "New Group",
				"email": "EMail password",
				"password": "Password?",
				"deviceList": "Network Devices List",
				"personalDevices": "Staff Devices"
			},
			"fields": {
				"status": {
					"label": "Account Status",
					"placeholder": "--select--",
					"help_line": "",
					"help_block": "",
				},
				"username": {
					"label": "User Name",
					"placeholder": "Enter user name...",
					"help_line": "Please enter a unique user name.",
					"help_block": "",
				},
				"password": {
					"label": "Password",
					"placeholder": "Enter password...",
					"help_line": "Please enter a password with at least 6 characters.",
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
				"phoneNumber": {
					"label": "Phone Number",
					"placeholder": "Enter phone number...",
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
				"bandwidthLimit": {
					"label": "Bandwidth Limit",
					"placeholder": "Enter bandwidth limit...",
					"help_line": "Please enter bandwidth limit as Mbit/s.",
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
				"profileList": {
					"label": "Profiles",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
					"selectableHeader": "Available Profiles",
					"selectionHeader": "Selected Profiles",
				},
				"deviceList": {
					"label": "Devices",
					"placeholder": "List of permitted devices.",
					"help_line": "",
					"help_block": "",
					"selectableHeader": "Selectable Devices",
					"selectionHeader": "Permitted Devices",
				},
				"tcNo": {
					"label": "ID Number",
					"placeholder": "Enter TC Identity Number",
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
					"placeholder": "Enter Last Access Date",
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
				"byodNacGroup": {
					"label": "BYOD Access Group",
					"placeholder": "Select Auto BYOD Access Group",
					"help_line": "",
					"help_block": "",
				},
				"mac": {
					"label": "MAC",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
				},
				"has8021xSupport": {
					"label": "802.1x",
					"placeholder": "",
					"help_line": "",
					"help_block": "",
				},

			},
			"messages": {
				"save_success": "End User '{{dto.username}}' is succesfully updated.",
				"create_success": "End User '{{dto.username}}' is succesfully created.",
			},
			"labels": {
				"accessDateSettings": "Access Time Settings",
				"personalDevices": "Staff Devices"
			}
		}
	}
};
