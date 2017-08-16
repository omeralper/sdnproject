export var tr_resources = {
    "translation": {
        "common": {
            "project_title": "ProgNET",
            "logo": "/assets/img/prognet.png",
            "logo_reverse": "/assets/img/prognet_reversed.png",
            "server_url": "Sunucu Adresi",
            "refresh": "Yenile",
            "username": "Kullanıcı Adı",
            "password": "Şifre",
            "name": "Ad",
            "surname": "Soyad",
            "status": "Durum",
            "type": "Tip",
            "date": "Tarih",
            "actions": "İşlemler",
            "search": "Ara",
            "time_format": "HH:mm",
            "date_format": "YYYY.MM.DD",
            "date_format_short": "YY.MM.DD",
            "datetime_format": "YYYY.MM.DD HH:mm",
            "datetime_format_short": "YY.MM.DD HH:mm",
            "units": {
                "bytes": "bayt",
                "packets": {
                    "0": "paket",
                    "1": "k",
                    "2": "ml",
                    "3": "mr",
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
                    "title": "Araçlar",
                    "icon": "icon-wrench"
                },
                "print": {
                    "title": "Yazdır",
                    "icon": "fa fa-print",
                    "perm": "@print"//@ önce mevcut sayfanın permissionlarına bak eeğr yoksa common permissiona bak
                },
                "export_pdf": {
                    "title": "PDF Çıktı Al",
                    "icon": "fa fa-file-pdf-o",
                    "perm": "@export_pdf"
                },
                "copy_clipboard": {
                    "title": "Kopyala",
                    "icon": "fa fa-files-o",
                    "perm": "@export_pdf"
                },
                "export_excel": {
                    "title": "Excel Çıktı Al",
                    "icon": "fa fa-file-excel-o",
                    "perm": "@export_excel"
                },
                "refresh": {
                    "title": "Yenile",
                    "icon": "icon-refresh",
                    "perm": "@refresh"
                },
                "close": {
                    "title": "Kapat",
                    "icon": "fa fa-times",
                },
                "clear": {
                    "title": "Temizle",
                    "icon": "fa fa-times",
                },
                "logout": {
                    "title": "Çıkış",
                    "icon": "fa fa-sign-out",
                },
                "change_pwd": {
                    "title": "Şifre Değiştir",
                    "icon": "fa fa-key",
                },
                "help" : {
                	"title" : "Yardım",
	                "icon" : "fa fa-question"
                },
                "graph": "icon-graph",
                "dropdown_icon": "fa fa-angle-down",
                "list_icon": "fa fa-list-ul",
                "eye_icon": {"icon": "fa fa-eye", "title": "Ağ Keşfini Başlat"},
                "add_icon": "fa fa-plus-circle",
                "level_up": {"icon": "fa fa-level-up", "title": "Merkezi Topolojiyi Çağır"}
            },
            "fields": {
                "actions": "İşlemler",
                "actions_help": "Bu kolonda her satır için uygulanabilecek işlemler bulunmaktadır."
            },
            "messages": {
                "RETURN_STATUS": {
                    "SUCCESS": "İşlem başarıyla tamamlanmıştır.",
                    "ERROR": "İşlem başarısız; \n{{message}}",
                    "SERVER_ERROR": "İşlem sırasında sunucuda bir hata oluştu.\n Lütfen daha sonra tekrar deneyiniz.",
                    "ACCESS_DENIED": "Bu işlemi yapmaya yetkiniz bulunmamaktadır.",
                    "ACCESS_LIMITED": "Bu işleme erişim sınırlandırılmıştır, lütfen bir süre sonra tekrar deneyiniz.",
                    "NOT_MODIFIED": "Verilerde değişiklik yoktur.",
                    "NOT_IMPLEMENTED": "Bu işlem desteklenmemktedir.",
                    "DEPRECATED": "Bu işlem geçersizdir.",
                    "INVALID_SESSION": "Oturumunuz kapanmıştır, lütfen tekrar giriş yapınız."
                },
                "ERROR_CODES": {},
                "return_home": "Anasayfa",
                "idle_timeout": "Oturumunuz {{seconds}} saniye içinde kapatılıyor. Oturuma devam etmek istiyor musunuz?",
                "idle_timeout_title": "{{seconds}} saniye sonra kapanıyor",
                "no_tab": "Açık sekme yok ya da bu geçerli bir sekme değil. Geçerli bir sekmeye basıp tekrar deneyin.",
                "data_load_error": "Veriler yüklenirken bir hata oluştu. Daha sonra tekrar deneyiniz",
                "validation_error": "Form verileri hatalı veya eksik, lütfen kontrol ediniz.",
                "wan_selection_error": "Lütfen en az 2 yerel küme seçiniz.",
                "validation": {
                    'badInput': 'Hatalı veri girişi.',
                    'patternMismatch': 'Uygun formatta giriş yapınız.',
                    'rangeOverflow': 'En fazla "{{input.max}}" değeri girilebilir.',
                    'rangeUnderflow': 'En az "{{input.min}}" değeri girilebilir.',
                    'stepMismatch': 'Uygun adım değeri giriniz.',
                    'tooLong': 'En fazla {{input.maxLength}} karakter girilebilir.',
                    'tooShort': 'En az {{input.minLength}} karakter girilmelidir.',
                    'typeMismatch': "Lütfen geçerli bir '{{input.type}}' giriniz.",
                    'valueMissing': 'Bu alan zorunludur.',
                    "vl_minlength_error": "Bu alan en az {{value}} karakterden oluşmalıdır.",
                    "vl_maxlength_error": "Bu alan en fazla {{value}} karakterden oluşmalıdır.",
                    "pm_error": "Şifreler uyuşmuyor. Lütfen şifrenizi kontrol ediniz.",
                    "cm_error": "Şifreniz en az 6 karakter uzunluğunda ve içinde en az 1 büyük, 1 küçük harf, 1 sayısal değer ve 1 özel karakter (!@#\\$%^&*) olmalıdır.",
                    "ip_format_error": "Lütfen IP adresini doğru giriniz",
                    "mac_format_error": "Doğru mac adresi giriniz",
                    "mobile_phone_error": "Lütfen doğru bir cep telefonu numarası giriniz",
                    "datapath_error": "Lütfen doğru veri katmanı adresi giriniz"
                },
                "no_topo": "Fiziksel Topoloji görüntüleme yetkisi bulunmamaktadır. Sanal Ağ görüntüleme ya da yaratma işlemlerini Sanallaştırma bölümünün Sanal Ağlar kısmından yapabilirsiniz.",
                "bandwidth_field_value_error_max": "Lütfen en fazla 1.000.000 kbps değer girin",
                "bandwidth_field_value_error_min": "Lütfen en az 100 kbps değer girin",
                "vlan_tag_value_error_max": "Lütfen 4096'dan büyük ID girmeyiniz",
                "switch_certificate_download": "Anahtarlayıcı sertifikası indirme işlemi başladı",
                "controller_certificate_download": "Kontrolcü sertifikası indirme işlemi başladı",
                "switch_certificate_confirm": "Anahtarlayıcı sertifikası indirmek istediğinize emin misiniz?",
                "unsaved_data": "Değişiklikleriniz kaydedilmedi, yine de devam etmek istiyor musunuz?"
            },
            "labels": {
                "loading": "İşlem sürüyor, lütfen bekleyin...",
                "VIRTUAL": "Sanal",
                "PHYSICAL": "Fiziksel",
                "input_type": {
                    "color": "Renk Değeri",
                    "date": "Tarih",
                    "datetime-local": "Tarih Zaman",
                    "email": "E-posta",
                    "month": "Ay",
                    "number": "Sayı",
                    "range": "Sayı",
                    "tel": "Telefon No",
                    "time": "Zaman",
                    "url": "URL",
                    "week": "Hafta"
                }
            },
            "datatables": {
                "zerorecords": "Tabloda veri bulunamadı",
                "nomatch": "Eşleşen veri bulunamadı",
                "emptyTable": "Tabloda veri bulunamadı",
                "loading": "Yükleniyor...",
                "loadingRecords": "Yükleniyor...",
                "first": "<i class='fa fa-step-backward'></i> İlk",
                "first_notext": "<i class='fa fa-step-backward'></i>",
                "last": "Son <i class='fa fa-step-forward'></i>",
                "last_notext": "<i class='fa fa-step-forward'></i>",
                "prev_notext": "<i class='fa fa-chevron-left'></i>",
                "next_notext": "<i class='fa fa-chevron-right'></i>",
                "prev": "<i class='fa fa-chevron-left'></i> Önceki",
                "next": "Sonraki <i class='fa fa-chevron-right'></i>",
                "search": "Ara : ",
                "lengthmenu": "Sayfa başına _MENU_ ",
                "info": "<span>_TOTAL_</span> kayıttan <span>_START_</span> ile <span>_END_</span> aralığını gösteriyor ",
                "infoFiltered": "(<span>_MAX_</span> kayıt içerisinden filtrelenmiştir)",
                "infoEmpty": "Kayıt bulunamadı.",
                "search_here": "Burada ara...",
                "lengthMenu": {
                    "5 kayıt": "5",
                    "10 kayıt": "10",
                    "15 kayıt": "15",
                    "20 kayıt": "20",
                    "tüm kayıtlar": "-1"
                },
                "search_parse_error": "Yazım Hatası: Lütfen {{error.location.start.column}}. karakteri kontrol ediniz."
            },
            "highChart": {
                "exporting": {
                    "contextButtonTitle": "Grafik içerik menüsü",
                    "printChart": "Yazıcıya gönder",
                    "downloadJPEG": "JPEG olarak indir",
                    "downloadPDF": "PDF olarak indir",
                    "downloadPNG": "PNG olarak indir",
                    "downloadSVG": "SVG olarak indir",
                },
                "noData": "Görüntülenecek veri bulunamadı",
                "resetZoom": "Zoom'u Sıfırla",
            },
            "datetimerangepicker": {
                "locale": {
                    "format": "DD/MM/YYYY hh:mm",
                    "separator": " - ",
                    "applyLabel": "Uygula",
                    "cancelLabel": "Sil",
                    "fromLabel": "Başlama",
                    "toLabel": "Bitiş",
                    "customRangeLabel": "Özel",
                    "weekLabel": "H",
                    "daysOfWeek": [
                        "Pz",
                        "Pt",
                        "Sl",
                        "Çr",
                        "Pr",
                        "Cu",
                        "Ct"
                    ],
                    "monthNames": [
                        "Ocak",
                        "Şubat",
                        "Mart",
                        "Nisan",
                        "Mayıs",
                        "Haziran",
                        "Temmuz",
                        "Ağustos",
                        "Eylül",
                        "Ekim",
                        "Kasım",
                        "Aralık"
                    ],
                    "firstDay": 1
                },
                "ranges": {
                    'today': 'Bugün',
                    'yesterday': 'Dün',
                    'last7days': 'Son 7 Gün',
                    'last30days': 'Son 30 Gün',
                    'thisMonth': 'Bu Ay',
                    'lastMonth': 'Geçen Ay'
                }
            },
            "timeago_templates": {
                prefix: "",
                suffix: " önce",
                seconds: "az",
                minute: "bir dakika",
                minutes: "%d dakika",
                hour: "bir saat",
                hours: "yaklaşık %d saat",
                day: "bir gün",
                days: "%d gün",
                month: "yaklaşık bir ay",
                months: "%d ay",
                year: "yaklaşık bir yıl",
                years: "%d yıl"
            },
            "timeago_short_templates": {
                prefix: "",
                suffix: " önce",
                seconds: "az",
                minute: "~1 dk.",
                minutes: "%d dk.",
                hour: "~1 st.",
                hours: "%d st.",
                day: "~1 gün",
                days: "%d gün",
                month: "~1 ay",
                months: "%d ay",
                year: "~1 yıl",
                years: "%d yıl"
            },
            "time_templates": {
                miliseconds: "%d ms",
                seconds: "%d sn",
                minutes: "%d dk",
                hours: "%d st",
                days: "%d gn",
                months: "%d ay",
                years: "%d yl"
            },
        },
        "enums": {
            "BOOLEAN": {
                "true": {icon: 'fa fa-check', color: 'black', title: 'Evet', bool_title: 'Doğru'},
                "false": {icon: 'fa fa-minus', color: 'black', title: 'Hayır', bool_title: 'Yanlış'}
            },
            "ACCESSACTIONTYPE": {
                "ACCESS": {icon: 'fa fa-check', color: 'black', title: 'İzinli'},
                "DENIED": {icon: 'fa fa-minus', color: 'black', title: 'Engelli'}
            },
            "AAASTATUS": {
                ACTIVE: {icon: 'fa fa-power-off', color: 'yellow-gold', title: 'Aktif'},
                PASSIVE: {icon: 'fa fa-power-off', color: 'grey-silver', title: 'Pasif'}
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
                ACTIVE: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Aktif'},
                PASSIVE: {icon: 'fa fa-ban', color: 'red-mint', title: 'Engellenmiş'}
            },
            "NACENTITYTYPE": {
                GUEST: {icon: 'fa fa-user-o', color: 'grey-salsa', title: 'Misafir'},
                STAFF: {icon: 'fa fa-id-card', color: 'blue-hoki', title: 'Personel'}
            },
            "HOSTTYPE": {
                COMPUTER: {icon: 'fa fa-laptop', color: 'blue-steel', title: 'Bilgisayar', fontCode: '\uf109'},
                PRINTER: {icon: 'fa fa-print', color: 'green-turquoise', title: 'Yazıcı', fontCode: '\uf02f'},
                PHONE: {icon: 'fa fa-phone', color: 'purple-wisteria', title: 'Telefon', fontCode: '\uf095'},
                IPTV_STB: {icon: 'fa fa-hdd-o', color: 'red-soft', title: 'IPTV Kutusu', fontCode: '\uf0a0'},
                SMART_TV: {icon: 'fa fa-television', color: 'yellow-soft', title: 'Smart TV', fontCode: '\uf26c'},
                MEDIA_PLAYER: {
                    icon: 'fa fa-play-circle',
                    color: 'green-jungle',
                    title: 'Medya Oynatıcı',
                    fontCode: '\uf144'
                },
                CELL_PHONE: {
                    icon: 'fa fa-1halfx fa-mobile',
                    color: 'purple-studio',
                    title: 'Cep Telefonu',
                    fontCode: '\uf10b'
                },
                CAMERA: {icon: 'fa fa-video-camera', color: 'green-jungle', title: 'Kamera', fontCode: '\uf03d'},
                SERVER: {icon: 'fa fa-server', color: 'green-jungle', title: 'Sunucu', fontCode: '\uf233'},
                FIREWALL: {icon: 'fa fa-shield', color: 'yellow-casablanca', title: 'Firewall', fontCode: '\uf132'},
                LOAD_BALANCER: {
                    icon: 'fa fa-random',
                    color: 'green-turquoise',
                    title: 'Yük Dengeleyici',
                    fontCode: '\uf074'
                },
                DPI: {icon: 'fa fa-eye', color: 'blue-hoki', title: 'DPI', fontCode: '\uf06e'},
                PF_SENSE: {icon: 'fa fa-search', color: 'blue-hoki', title: 'PF_SENSE', fontCode: '\uf002'},
                UNKNOWN: {icon: 'fa fa-question', color: 'dark', title: 'Bilinmiyor', fontCode: '\uf128'}
            },
            "HOSTSTATUS": {
                LIVE: {icon: 'fa fa-check-circle', color: 'blue', title: 'Bağlı'},
                GRANTED: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Bağlı (Doğrulanmış)'}
            },
            "DOMAINSTATUS": {
                UP: {icon: 'fa fa-check-circle', color: 'blue', title: 'Bağlı'},
                "false": {icon: 'fa fa-check-circle', color: 'blue', title: 'Bağlı'},
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Çalışmıyor'},
                EMERGENCY: {icon: 'fa fa-exclamation-triangle', color: 'yellow-gold', title: 'Acil'},
                POWER_SAVER: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Enerji Tasarrufu'}
            },
            "NETWORKDEVICETYPE": {
                GATEWAY: {icon: 'fa fa-arrows-alt', color: 'blue', title: 'Ağ Geçidi'},
                ACCESS_POINT: {icon: 'fa fa-wifi', color: 'green-jungle', title: 'Erişim Noktası'},
                DHCP_SERVER: {icon: 'fa fa-sitemap', color: 'yellow-mint', title: 'DHCP Sunucusu'},
                VIRTUAL_GATEWAY: {icon: 'fa fa-arrows-alt', color: 'yellow-gold', title: 'Sanal Ağ Geçidi'},
                VRR: {icon: 'fa fa-map-signs', color: 'blue-hoki', title: 'VRR Cihazı'},
                NTOP: {icon: 'fa fa-fire', color: 'grey-gallery', title: 'NTOP Sunucusu'},
                FIREWALL: {icon: 'fa fa-shield', color: 'red-mint', title: 'Firewall'},
                INTERNAL_GATEWAY: {icon: 'fa fa-arrows-alt', color: 'default', title: 'İç Ağ Geçidi'}
            },
            "NETWORKDEVICESTATUS": {
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Çalışmıyor'},
                UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Çalışıyor'},
            },
            "CONTROLLERSTATE": {
                ACTIVE: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Çalışıyor'},
                READY: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Çalışıyor (Hazır)'},//{icon: 'fa fa-star', color: 'green-jungle', title: 'Hazır'},
                INACTIVE: {icon: 'fa fa-exclamation-triangle', color: 'red-soft', title: 'Çalışmıyor'}
            },
            "SECURITYLEVELS": {
                LEVEL_1: "Seviye 1",
                LEVEL_2: "Seviye 2",
                LEVEL_3: "Seviye 3",
                LEVEL_4: "Seviye 4",
                LEVEL_5: "Seviye 5",
                LEVEL_6: "Seviye 6",
                LEVEL_7: "Seviye 7"
            },
            "SECURITYMODE": {
                OFF: {icon: 'fa fa-unlock-alt', color: 'dark', title: "Şifreleme Yok"},
                TLS: {icon: 'fa fa-lock', color: 'dark', title: "TLS Şifreleme Aktif"},
            },
            "LINKMEDIUM": {
                COPPER: "Bakır",
                OPTICAL: "Optik",
                WIRELESS: "Kablosuz"
            },
            "SEVERITY": {
                MINOR: {icon: 'fa fa-arrow-circle-down', color: 'grey-silver', title: 'Önemsiz'},
                MAJOR: {icon: 'fa fa-arrow-circle-up', color: 'green-seagreen', title: 'Önemli'},
                CRITICAL: {icon: 'fa fa-exclamation-triangle', color: 'yellow-gold', title: 'Kritik'},
                FATAL: {icon: 'fa fa-bomb', color: 'red-mint', title: 'Onulmaz'}
            },
            "ALARMTYPE": {
                ALARM: 'Alarm',
                EVENT: 'Alarm Olay'
            },
            "ALARMSTATUS": {
                ON: {icon: 'fa fa-flag', color: 'red-mint', title: 'Açık'},
                OFF: {icon: 'fa fa-check-circle', color: 'green-turquoise', title: 'Kapalı'},
                NONE: {icon: 'fa fa-minus', color: 'grey-steel', title: 'Yok'}
            },
            "ALARM_NAMES": { /*loaded from AlarmCodes.ts file under swagger folder */ },
            "FLOWSTATE": {
                PENDING_ADD: {icon: 'fa fa-hourglass-half', color: 'yellow-soft', title: 'Ekleniyor'},
                ADDED: {icon: 'fa fa-check', color: 'green-jungle', title: 'Eklenmiş'},
                PENDING_REMOVE: {icon: 'fa fa-recycle', color: 'yellow-gold', title: 'Kaldırılıyor'},
                REMOVED: {icon: 'fa fa-trash', color: 'dark', title: 'Kaldırılmış'},
                FAILED: {icon: 'fa fa-exclamation-circle', color: 'red-mint', title: 'Başarısız'}
            },
            "MVTNSTATUS": {
                SUBMITTED: {icon: 'fa fa-commenting', color: 'yellow-gold', title: 'Talep Edilmiş'},
                REJECTED: {icon: 'fa fa-thumbs-down', color: 'red-mint', title: 'Red Edilmiş'},
                ACTIVE: {icon: 'fa fa-play', color: 'green-jungle', title: 'Aktif'},
                SUSPENDED: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'Durdurulmuş'},
                INVALID: {icon: 'fa fa-times', color: 'yellow', title: 'Geçersiz'}
            },
            "WANSTATUS": {
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Çalışmıyor'},
                UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Çalışıyor'},
                DISABLED: {icon: 'fa fa-bookmark-o', color: 'red-mint', title: 'Devre Dışı'}
            },
            "MVTNREQUESTSTATUS": {
                CREATED: {icon: 'fa fa-commenting', color: 'yellow-gold', title: 'Talep Edilmiş'},
                CREATE_REJECTED: {icon: 'fa fa-times', color: 'red-mint', title: 'Reddedilmiş'},
                ACCEPTED: {icon: 'fa fa-play', color: 'green-jungle', title: 'Aktif'},
                EDIT_REJECTED: {icon: 'fa fa-thumbs-down', color: 'grey-cascade', title: 'Geçersiz Düzenleme'},
                EDITED: {icon: 'fa fa-pencil-square-o', color: 'yellow', title: 'Düzenleme'}
            },
            "PORTSTATUS": {
                DEAD: {icon: 'fa fa-chain-broken', color: 'red-mint', title: 'Pasif'},
                PORT_DOWN: {icon: 'fa fa-warning', color: 'dark', title: 'Port Arızalı'},
                BLOCKED: {icon: 'fa fa-ban', color: 'yellow-lemon', title: 'Bloklu'},
                LIVE: {icon: 'fa fa-link', color: 'green-jungle', title: 'Aktif'},//exchange, signal
                NO_STP: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'STP Yok'},
                NO_RECV: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'Veri Almıyor'},
                NO_RECV_STP: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'STP Almıyor'},
                NO_FLOOD: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'Flood Yapmıyor'},
                NO_FWD: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'İletme Yapmıyor'},
                NO_PACKET_IN: {icon: 'fa fa-low-vision', color: 'blue-dark', title: 'Paket almıyor'},
                LINK_DOWN: {icon: 'fa fa-times', color: 'red', title: 'Bağlantı yok'},
                STP_LISTEN: {icon: 'fa fa-assistive-listening-systems', color: 'purple', title: 'STP Dinleme'},
                STP_LEARN: {icon: 'fa fa-book', color: 'purple', title: 'STP Öğrenme'},
                STP_FORWARD: {icon: 'fa fa-share', color: 'purple', title: 'STP İletim'},
                STP_BLOCK: {icon: 'fa fa-ban', color: 'purple', title: 'STP Bloklu'},
                STP_MASK: {icon: 'fa fa-asterisk', color: 'purple', title: 'STP Maskeli'},
            },
            "PATHSTATE": {
                INSTALL_REQ: {icon: 'fa fa-gift', color: 'blue-sharp', title: 'Kurulum İsteği'},
                COMPILING: {icon: 'fa fa-cogs', color: 'yellow-lemon', title: 'Derleniyor'},
                INSTALLING: {icon: 'fa fa-wrench', color: 'yellow-gold', title: 'Kuruluyor'},
                INSTALLED: {icon: 'fa fa-check', color: 'green-jungle', title: 'Kurulu'},
                RECOMPILING: {icon: 'fa fa-cog', color: 'yellow-saffron', title: 'Tekrar Derleniyor'},
                WITHDRAW_REQ: {icon: 'fa fa-eraser', color: 'grey-cascade', title: 'İptal İsteği'},
                WITHDRAWN: {icon: 'fa fa-trash', color: 'dark', title: 'İptal Edilmiş'},
                FAILED: {icon: 'fa fa-exclamation-circle', color: 'red-thunderbird', title: 'Başarısız'},
                CORRUPT: {icon: 'fa fa-bug', color: 'purple-plum', title: 'Bozulmuş'},
                PURGE_REQ: {icon: 'fa fa-recycle', color: 'yellow-soft', title: 'Silme İsteği'},
            },
            "TRANSPORTPROTOCOL": {
                TCP: {text_icon: 'TCP', color: 'blue-steel', title: 'İletim Kontrol Protokolü'},
                UDP: {text_icon: 'UDP', color: 'yellow-gold', title: 'Kullanıcı Veribirimi Protokolü'}
            },
            "RESERVEDPATH": {
                NONE: "Tanımsız",
                ACTIVE: {icon: 'fa fa-bookmark', color: 'blue-sharp', title: 'Patika Rezervasyonu Yap'},
                DEACTIVE: {icon: 'fa fa-bookmark-o', color: 'red-mint', title: 'Patika Rezervasyonu Yapma'},
            },
            "NTOPROUTE": {
                ACTIVE: "NTOP Kullanılarak",
                DEACTIVE: "Devre Dışı"
            },
            "PPPSTATUS": {
                NONE: {icon: 'fa fa-times', color: 'yellow', title: 'Tanımsız'},
                ON_HOLD: {icon: 'fa fa-pause', color: 'grey-cascade', title: 'Beklemede'},
                ACTIVE: {icon: 'fa fa-play', color: 'green-jungle', title: 'Aktif'},
                FINISHED: {icon: 'fa fa-commenting', color: 'yellow-gold', title: 'Tamamlanmış'}
            },
            "IPVERSIONTYPE": {
                IPV4: 'IPv4',
                IPV6: 'IPV6'
            },
            "NODETYPE": {
                CONTROLLER: "Kontrolcü",
                API_CORE: "API Sistemi",
                ALARM_MANAGER: "Alarm Sistemi",
                STATISTICS_MANAGER: "İstatistik Sistemi",
                NAS: "NAS Sistemi",
                DHCP: "DHCP Sistemi",
                EDR: "EDR Sistemi",
                SDNIP: "BGP Ayarları"
            },
            "CONFIGVALUETYPE": {
                STRING: "Metin",
                BYTE: "Sayı (Byte)",
                INTEGER: "Sayı (Int)",
                LONG: "Sayı (Long)",
                FLOAT: "Sayı (Float)",
                DOUBLE: "Sayı (Double)",
                BOOLEAN: "Boolean"
            },
            "EDRTYPE": {
                SUCCESS: {icon: 'fa fa-check-circle', color: 'green-turquoise', title: 'Başarılı'},
                FAIL: {icon: 'fa fa-minus', color: 'grey-steel', title: 'Başarısız'}
            },
            "PROCESSINGSTATUS": {
                FAILED: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Hatalı'},
                SUCCESS: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Çalışıyor'},
                NONE: {icon: 'fa fa-circle', color: 'grey-steel', title: 'Yok'},
            },
            "SWITCHSTATUS": {
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Çalışmıyor'},
                UP: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Çalışıyor'},
            },
            "OFFLINEMODE": {
                "SECURE": "Güvenli",
                "STANDALONE": "Bağımsız"
            },
            "CONNECTIONMODE": {
                "INBAND": "Inband",
                "OUTBAND": "Outband"
            },
            "LINKTYPE": {
                "COPPER": "Bakır",
                "FIBER": "Fiber",
                "PACKET": "Paket",
                "ODUCLT": "ODUCLT",
                "OCH": "OCH",
                "OMS": "OMS",
                "VIRTUAL": "Sanal",
                "OTU": "OTU",
                "SECURE": "Güvenli"
            },
            "LINKSTATUS": {
                DOWN: {icon: 'fa fa-minus-circle', color: 'red-soft', title: 'Çalışmıyor'},
                BLOCKED: {icon: 'fa fa-ban', color: 'red-mint', title: 'Bloklu'},
                LIVE: {icon: 'fa fa-check-circle', color: 'green-jungle', title: 'Çalışıyor'},
                LEGACY: {icon: 'fa fa-tty', color: 'default', title: 'Geleneksel'},
                INDIRECT: {icon: 'fa fa-random', color: 'purple', title: 'Dolaylı'}
            },
            "FLOWBALANCECONSTRAINTTYPE": {
                AVAILABLE_BANDWITDH_CONSTRAINT: "Bant genişliğine göre",
                FLOW_COUNT_CONSTRAINT: "Minimum akış sayısına göre"
            },
            "ROUTERTYPE": {
                "SPEAKER": {icon: 'fa fa-bullhorn', color: 'purple-sharp', title: 'Sözcü'},
                "PEER": {icon: 'fa fa-comments', color: 'yellow-casablanca', title: 'Eş'},
	            "ROUTE_REFLECTOR": {icon: 'fa fa-rss', color: 'green-sharp', title: 'Hat Yansıtıcı'},
            },
            DEVICETYPE: {
                PHISICAL_SWITCH: {icon: 'fa fa-exchange', color: 'purple-sharp', title: 'Anahtarlayıcı'},
                VIRTUAL_SWITCH: {icon: 'fa fa-exchange', color: 'purple-sharp', title: 'Sanal Anahtarlayıcı'},
                LEGACY_SWITCH: {icon: 'fa fa-exchange', color: 'purple-sharp', title: 'Geleneksel Anahtarlayıcı'},
                ROUTER: {icon: 'fa fa-arrows-alt', color: 'purple-sharp', title: 'Router'},
                MODEM: {icon: 'fa fa-tty', color: '', title: 'Modem'},
                ACCESS_POINT: {icon: 'fa fa-wifi', color: '', title: 'Erişim Noktası'},
                IP_PHONE: {icon: 'fa fa-phone-square', color: '', title: 'IP Telefon'},
                APPLIANCE: {icon: 'fa fa-server', color: '', title: 'Uygulama'},
                UNKNOWN: {icon: 'fa fa-question-circle', color: '', title: 'Bilinmiyor'},
            },
            "WANDOMAINSTATUS": {
                ACTIVE: {icon: 'fa fa-power-off', color: 'green-meadow', title: 'Aktif'},
                INACTIVE: {icon: 'fa fa-power-off', color: 'grey-cascade', title: 'Pasif'},
                FAILED: {icon: 'fa fa-exclamation-triangle', color: 'yellow-casablanca', title: 'Başarısız'}
            },
            "VNFDTYPE": {
                FIREWALL: "Firewall",
                DPI: "DPI",
                LOAD_BALANCER: "LB",
                PF_SENSE: "PF Sense"
            },
            "SFCSTATUS": {
                "ACTIVE": {icon: 'fa fa-circle', color: 'font-green-meadow', title: 'Aktif'},
                "FAILED": {icon: 'fa fa-exclamation-triangle', color: 'font-yellow-gold', title: 'Başarısız'},
                "INACTIVE": {icon: 'fa fa-circle-o', color: 'font-red-sunglo', title: 'İnaktif'}
            },
            "SDNIPRESOURCETYPE":{
	            "GLOBAL": "Global",
            },
            "SDNIPPOLICYTYPE":{
            	"IMPORT" : "İçe Aktarım",
	            "EXPORT" : "Dışa Aktarım"
            },
            "SDNIPDEFINEDSETTYPE" : {
            	"AS_PATH" : "OS Patika",
	            "NEIGHBOR" : "Komşu",
	            "PREFIX" : "Prefix"
            },
            "SDNIPMATCHTYPE" : {
            	"ANY" : "Herhangi",
	            "ALL" : "Hepsi",
	            "INVERT" : "Ters"
            },
            "SDNIPROUTEACTION" : {
            	"ACCEPT" : "Kabul",
	            "REJECT" : "Red"
            }
            /*
             "TOPOLOGYSTATUS": {
             DOWN: {icon: '', title: 'Devredışı'},
             PARTIAL_DOWN: {icon: '', title: 'Kısmi Devredışı'},
             UP: {icon: '', title: 'Aktif'},
             DESIGNED: {icon: '', title: 'Tasarlanmış'},
             WAIT_APPROVAL: {icon: '', title: 'Onay Bekliyor'},
             SETUP: {icon: '', title: 'Kuruluyor'}
             }*/
        },
        "dialogs": {
            "types": {
                "info": {
                    "title": "Bilgi",
                    "icon": "fa fa-info-circle",
                    "color": "font-blue-steel",
                },
                "success": {
                    "title": "Başarılı",
                    "icon": "fa fa-check-circle",
                    "color": "font-green-meadow bold"
                },
                "warning": {
                    "title": "Uyarı",
                    "icon": "fa fa-exclamation-triangle",
                    "color": "font-yellow-gold bold"
                },
                "error": {
                    "title": "Hata",
                    "icon": "fa fa-exclamation-circle",
                    "color": "font-red-sunglo bold"
                },
                "question": {
                    "title": "Soru",
                    "icon": "fa fa-question-circle",
                    "color": "font-blue-steel"
                },
            },
            "actions": {
                "ok": {
                    "title": "Tamam",
                    "title_short": "Tmm",
                    "icon": "fa fa-check-circle",
                    "color": "uppercase green-meadow",
                    "perm": "@ok"
                },
                "cancel": {
                    "title": "İptal",
                    "title_short": "İpt",
                    "icon": "fa fa-ban",
                    "color": "btn-outline lowercase red-sunglo",
                    "perm": "@cancel"
                },
                "abort": {
                    "title": "Durdur",
                    "title_short": "Drdr",
                    "icon": "fa fa-times-circle",
                    "color": "btn-outline lowercase yellow-gold",
                    "perm": "@abort"
                },
                "yes": {
                    "title": "Evet",
                    "title_short": "Evt",
                    "icon": "fa fa-thumbs-up",
                    "color": "uppercase green-meadow",
                    "perm": "@yes"
                },
                "no": {
                    "title": "Hayır",
                    "title_short": "Hyr",
                    "icon": "fa fa-thumbs-down",
                    "color": "uppercase yellow-gold",
                    "perm": "@no"
                },
                "close": {
                    "title": "Kapat",
                    "title_short": "Kpt",
                    "icon": "fa fa-times-circle",
                    "color": "btn-default",
                    "perm": "@close"
                },
                "save": {
                    "title": "Kaydet",
                    "title_short": "Kydt",
                    "icon": "fa fa-floppy-o",
                    "color": "uppercase green-meadow",
                    "perm": "@save"
                },
                "change": {
                    "title": "Değiştir",
                    "title_short": "Dğştr",
                    "icon": "fa fa-floppy-o",
                    "color": "uppercase yellow-gold",
                    "perm": "@change"
                },
                "add": {
                    "title": "Ekle",
                    "title_short": "Ekle",
                    "icon": "fa fa-plus",
                    "color": "uppercase yellow-gold",
                    "perm": "@save"
                },
                "send": {
                    "title": "Yolla",
                    "title_short": "yolla",
                    "icon": "fa fa-paper-plane",
                    "color": "uppercase purple-plum",
                    "perm": "@ok"
                },
                "start": {
                    "title": "Başlat",
                    "title_short": "başla",
                    "icon": "fa fa-play",
                    "color": "uppercase green-meadow",
                    "perm": "@change"
                }
            }
        },
        "login": {
            "page_title": {
                "login": "ProgNET | Giriş",
                "admin": "ProgNET | Yönetici"
            },
            "title": "Yönetici Giriş",
            "info": "Lütfen kullanıcı adı ve şifrenizle giriş yapınız.",
            "remember_me": "Beni hatırla",
            "rememberme": {
                "label": "Beni hatırla",
                "label_icon": "<i class='fa fa-bars'></i>",
                "placeholder": "",
                "help_line": "",
                "help_block": "",
                "onText": "&nbsp;&nbsp;&nbsp;", //"Evet",
                "offText": "&nbsp;&nbsp;&nbsp;", //"Hayır",
                "onLabel": "Beni hatırla",
                "offLabel": "Beni hatırlama"
            },
            "forgot_password": "Şifrenizi mi Unuttunuz?",
            "sign_in": "Giriş"
        },
        "dashboard": {
            "title": "Ana Panel",
            "icon": "fa fa-dashboard",
            "perm": "common:view",
            "labels": {
                "title": "ProgNET",
                "motto": "Akıllı Ağ Teknolojileri.",
                "contact_us": "İLETİŞİM"
            }
        },
        "network_vis": {
            "title": "Ağ Gözlem",
            "icon": "fa fa-eye",
            "perm": "common:view",
            "topology": {
                "title": "Topoloji",
                "icon": "fa fa-share-alt",
                "basePerm": "common",
                "perm": "phy_topo:view | vir_topo:view",
                "speed": "Hız",
                "virtual": "Sanal",
                "virtual_list": "Sanal Ağ Listesi",
                "flows": "Akışlar",
                "address": "Adres",
                "device_info": "Cihaz Bilgisi",
                "support": "OF Sürüm",
                "security_level": "Güvenlik Seviyesi",
                "active_since": "Çalışma Tarihi",
                "power_usage": "Güç Kullanımı",
                "port_info": "Port Bilgisi",
                "port_states": "Port Durumu",
                "port_configs": "Port Ayarları",
                "isWanLink": "WAN Bağlantısı",
                "measureDelay": "Gecikme Ölçme",
                "cspeed": "Anlık Hız",
                "avg_speed": "Ortalama Hız",
                "mspeed": "Max Hız",
                "source_port": "Kaynak Port",
                "dest_port": "Hedef Port",
                "last_seen": "Son Görülme",
                "alternative": "Alternatif",
                "alternative_paths_title": "Alternatif Patikalar",
                "signal_quality": "Sinyal Kalitesi",
                "connectionType": "Bağlantı Tipi",
                "loss": "Kayıp",
                "delay": "Gecikme",
                "jitter": "Seyirme",
                "physical_topology": "Fiziksel Ağ",
                "virtual_topology": "Sanal Ağ",
                "hide_footer": "Alt Detayları Gizle",
                "show_footer": "Alt Detayları Göster",
                "hide_detail_info": "Yan Detayları Gizle",
                "show_detail_info": "Yan Detayları Göster",
                "hide_hosts": "Uç Birimleri Gizle",
                "show_hosts": "Uç Birimleri Göster",
                "show_networkdevices": "Ağ Geçitlerini Göster",
                "hide_networkdevices": "Ağ Geçitlerini Gizle",
                "hide_vgateway": "Sanal Ağ Geçitlerini Gizle",
                "show_vgateway": "Sanal Ağ Geçitlerini Göster",
                "hide_controllers_tab": "Kontrolcü Bölümünü Gizle",
                "show_controllers_tab": "Kontrolcü Bölümünü Göster",
                "show_ports": "Port Numaralarını Göster (R)",
                "hide_ports": "Port Numaralarını Gizle (R)",
                "show_link_sensitivity": "BG Hassasiyetini Göster",
                "hide_link_sensitivity": "BG Hassasiyetini Gizle",
                "show_trmap": "Haritayı Göster",
                "hide_trmap": "Haritayı Gizle",
                "new_tab": "Ayrı Sekmede Göster",
                "show_flow_list": "Akışları Listele",
                "show_port_list": "Portları Listele",
                "delete_switch_node": "Anahtarlayıcıyı Kaldır",
                "block_for_mvtn": "Anahtarlayıcıyı Engelle",
                "allow_for_mvtn": "Anahtarlayıcıya İzin Ver",
                "no_data": "Data Bulunamadı",
                "settings": {
                    icon: "icon-settings",
                    title: "Görünüm Ayarları"
                },
                "toggle_fullscreen": {title: "Tam Ekran Geç/Çık"},
                "connectionTypes": {
                    "COPPER": "Bakır",
                    "FIBER": "Fiber",
                    "PACKET": "Paket",
                    "ODUCLT": "ODUCLT",
                    "OCH": "OCH",
                    "OMS": "OMS",
                    "VIRTUAL": "Sanal",
                    "OTU": "OTU"
                },
                "footer_fields": {
                    "switch": "Anahtarlayıcı",
                    "domain": "Küme",
                    "legacy_switch": "Geleneksel Anahtarlayıcı",
                    "gateway": "Ağ Geçidi",
                    "network_device": "Ağ Cihazı",
                    "link": "Bağlantı",
                    "host": "Uç Birim",
                    "cloud": "Wan Port",
                    "bgp_router": "BGP Router",
                    "id": "ID",
                    "status": "Durum",
                    "name": "Ad",
                    "ip": "IP",
                    "mac": "MAC",
                    "port":{"address": "Adres"},
                    "srcPort": {
                        "number": "Kaynak Port Sayısı"
                    },
                    "destPort": {
                        "number": "Hedef Port Sayısı"
                    }
                },
                "node_properties": {
                    "id": "ID",
                    "ip": "IP",
                    "status": "Durum",
                    "name": "İsim",
                    "vtn": "Sanal Ağ",
                    "address": "Adres",
                    "deviceInfo": "Cihaz Bilgisi",
                    "securityLevel": "Güvenlik Seviyesi",
                    "activeSince": "Çalışma Tarihi",
                    "lastSeen": "Son Bağlantı Tarihi",
                    "powerUsage": "Güç Kullanımı",
                    "portInfo": "Port Durumu (A/P/T)",
                    "port": "Port",
                    "port_number": "Port No",
                    "port_states": "Port Durumu",
                    "port_configs": "Port Ayarları",
                    "port_speed": "Port Hızı",
                    "port_avg_speed": "Port Ortalama Hız",
                    "profile": "Profil",
                    "flows": "Akış Sayısı",
                    "add_switch": "Anahtarlayıcı Ekle",
                    "add_link": "Bağlantı Ekle",
                    "select": "Birim Seç",
                    "bandwidthUtilization": "Ağ Kullanımı",
                    "userInfo": "Kullanıcı Bilgisi",
                    "edit": "Düzenleme",
                    "bandwidth": "Bant Genişliği",
                    "totalBandwidth": "Toplam Bant Genişliği",
                    "openflow_version": "OpenFlow Sürümü",
                    "openflowVersions": "OpenFlow Sürümü",
                    "device_vendor": "Cihaz Üreticisi",
                    "device_model": "Cihaz Modeli",
                    "device_version": "Cihaz Sürümü",
                    "managementPort": "Yönetim Portu",
                    "CONNECTIONMODE": "Bağlantı Tipi",
                    "OFFLINEMODE": "Çevrim Dışı Modu",
                    "SWITCHMODE": "Anahtr. Modu",
                    "LINKTYPE": "Bağlantı Tipi",
                    "CONTROLLERSTATE": "Kontrolcü Durumu",
                    "SECURITYMODE": "Güvenlik Modu",
                    "source_port": "Kaynak Cihaz",
                    "target_port": "Hedef Cihaz",
                    "queueId": "Kuyruk No",
                    "signalQuality": "Sinyal Kalitesi",
                    "mac": "MAC Adresi",
                    "deviceCount": "Anahtarlayıcı Sayısı",
                    "as_number": "Sayısal Değer",
                    "neighbour_list": "Komşu Listesi",
                    "vlanid": "VLAN ID",
                    "messages": {
                        "no_profile": "Fiziksel ağda uygun bir profil bulunamadı."
                    },
                    "labels": {
                        "utilization_value": "%{{utilization}}",
                        "utilization": "Kullanım Oranı",
                        "details": "Detaylar",
                        "detail_less": "Daha Az",
                        "detail_more": "Daha Fazla",
                        "stats": "İstatistikler",
                        "stat_real_time": "Gerçek Zamanlı",
                        "stat_average": "Ortalama",
                        "source": "Kaynak",
                        "target": "Hedef",
                        "sent": "Gönderilen",
                        "recv": "Alınan",
                        "real_time": "Gerçek Zaman",
                        "average_5min": "5dk. Ortalama",
                        "virtual": "Sanal",
                        "link": "Bağlantı",
                        "switch": "Anahtarlayıcı",
                        "controller": "Kontrolcü",
                        "network_device": "Ağ Cihazı",
                        "host_granted": "Doğrulanmış",
                        "click_for_more": "Detaylar için tıklayın.",
                        "stat_fields": {
                            "bandwidth": {title: "Bant Geniş.", icon: "fa fa-road"},
                            "utilization": {title: "Kull. Oranı", icon: "fa fa-pie-chart"},
                            "speed": {title: "Hız", icon: "fa fa-tachometer"},
                            "bytes": {title: "Veri", icon: "fa fa-database"},
                            "packets": {title: "Paket", icon: "fa fa-cubes"},
                            "errors": {title: "Hatalı Paket", icon: "fa fa-exclamation-circle"},
                            "drops": {title: "Atılan Paket", icon: "fa fa-trash"},
                            "collisions": {title: "Çakışma", icon: "fa fa-bomb"},
                            "loss": {title: "Kayıp", icon: "fa fa-eye-slash"},
                            "delay": {title: "Gecikme", icon: "fa fa-clock-o"},
                            "jitter": {title: "Seğirme", icon: "fa fa-bolt"},
                        }
                    },
                    "icons": {
                        "isControllerDevice": {title: "Kontrol Kanalı Cihazı", icon: "fa fa-gavel", color: "grey-mint"},
                        "isMeterEnabled": {title: "Meter Etkin", icon: "fa fa-bar-chart", color: "default"},
                        "powerSaverModeEnabled": {
                            title: "Enerji Tasarrufu Etkin",
                            icon: "fa fa-recycle",
                            color: "green-turquoise"
                        },
                        "isBlockedForMvtn": {title: "Anahtarkayıcı Engelli", icon: "fa fa-ban", color: "red-mint"},
                        "isEdgeSwitch": {
                            title: "Uç Birim Bağlanabilir",
                            icon: "fa fa-object-ungroup",
                            color: "yellow-casablanca"
                        },
                        "dpdk": {title: "DPDK Etkin", textIcon: "DPDK", color: "blue"},
                        "measureDelay": {title: "Gecikme Ölçme Etkin", icon: "fa fa-clock-o", color: "default"},
                        "blocked": {title: "Döngü Önleme Etkin", icon: "fa fa-retweet", color: "red-mint"},
                        "isWanLink": {title: "WAN Bağlantısı", icon: "fa fa-external-link", color: "blue"}
                    }
                },
                "controller_properties": {
                    "controller": "Kontrolcü",
                    "name": "Kontrolcü Adı",
                    "ip": "IP",
                    "deviceCount": "Yönetilen Anahtarlayıcı Sayısı",
                    "securityMode": "Güvenlik Modu",
                    "controller_type": "Kontrolcü Tipi",
                    "openflow_version": "OF Versiyonu"
                },
                "path_actions": {
                    "title": "Patika İşlemleri",
                    "list_reactive_paths": {
                        title: "Reaktif Patikaları Listele",
                        icon: "icon-graph icon_sub icon_sub-list"
                    },
                    "list_proactive_paths": {
                        title: "Önetkin Patikaları Listele",
                        icon: "icon-direction icon_sub icon_sub-list"
                    },
                    "show_path": {title: "Önetkin Patika Görüntüle", icon: "icon-direction icon_sub icon_sub-eye"},
                    "show_reactive_path": {title: "Reaktif Patika Görüntüle", icon: "icon-graph icon_sub icon_sub-eye"},
                    "clear_path": {title: "Patika işlemini iptal et", icon: "fa fa-ban"},
                    "add_preliminary_path_policy": {
                        title: "Önetkin Patika Politikası Ekle",
                        icon: "icon-direction icon_sub icon_sub-plus"
                    }
                },
                "path_confirmation_popup": {
                    //"basePerm": "common",
                    "modes": {
                        "edit": {
                            "title": "Patika Düzenle",
                            "icon": "fa fa-pencil",
                            //"perm": "#edit",
                        },
                        "create": {
                            "title": "Patika Oluştur",
                            "icon": "fa fa-plus",
                            //"perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "source": {
                            "label": "Kaynak Uç Birim",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "dest": {
                            "label": "Hedef Uç Birim",
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
                        "bandwidth_constraint": {
                            "label": "Minimum Bant Genişliği",
                            "placeholder": "varsayılan değer",
                            "help_line": "Lütfen minimum bant genişliği değerini mbit/s olarak giriniz.",
                            "help_block": "",
                        },
                        "max_bandwidth_constraint": {
                            "label": "Maksimum Bant Genişliği",
                            "placeholder": "varsayılan değer",
                            "help_line": "Lütfen maksimum bant genişliği değerini mbit/s olarak giriniz.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "save_success": "Patika başarıyla güncellenmiştir.",
                        "create_success": "Patika başarıyla oluşturulmuştur.",
                        "bandwidth_error": "'Minimum Bant Genişliği' verisi hatalı (0-1000000 arasında olmalı), lütfen kontrol ediniz.",
                        "max_bandwidth_error": "'Maksimum Bant Genişliği' verisi hatalı (0-1000000 arasında olmalı), lütfen kontrol ediniz.",
                        "max_bandwidth_smaller_error": "'Maksimum Bant Genişliği' , 'Minimum Bant Genişliği' değerinden büyük olmalıdır.",
                        "securitylevel_required": "Lütfen 'Güvenlik Seviyesi' değeri seçiniz."
                    },
                    "labels": {}
                },
                "create_virtual_topology_popup": {
                    "modes": {
                        "edit": {
                            "title": "Sanal Ağ Düzenle",
                            "icon": "fa fa-pencil"
                        },
                        "create": {
                            "title": "Sanal Ağ Ekle",
                            "icon": "fa fa-plus"
                        }
                    },
                    "title": "Sanal Ağ Ekle",
                    "icon": "fa fa-plus-circle",
                    "virtual_topology_name": "Sanal Ağ Adı",
                    "vlan_tag": {
                        "title": "VLAN Etiketi",
                        "placeholder": "VLAN ID değeri yazınız..."
                    },
                    "maximum_number_of_user": {
                        "title": "Maks. Kullanıcı Sayısı",
                        "unit": "Kişi"
                    },
                    "qos_params": {
                        "title": "Varsayılan QoS Parametreleri",
                        "fields": {
                            "bandwidth": "Bant Genişliği",
                            "switch_security_level": "Anahtarlayıcı Güvenlik Seviyesi",
                            "link_security_level": "Bağlantı Güvenlik Seviyesi",
                            "jitter": {
                                "title": "Seğirme",
                                "unit": "ms"
                            },
                            "delay": {
                                "title": "Gecikme",
                                "unit": "ms"
                            },
                            "packet_loss_rate": {
                                "title": "Paket Kayıp Oranı",
                                "unit": "paket/s"
                            },
                            "collision": {
                                "title": "Çakışma",
                                "unit": "paket/s"
                            }
                        }
                    },
                    "address_range": {
                        "title": "DHCP Ayarları",
                        "field": "IP Aralıkları",
                        "placeholder": "0.0.0.0/24",
                        "label": "Her satırda tek ip aralık tanımı olacak şekilde giriş yapınız."
                    },
                    "dns_servers": {
                        "title": "DNS Sunucuları",
                        "field": "DNS Sunucuları",
                        "placeholder": "dns.domain.com\n0.0.0.0",
                        "label": "Her satırda tek dns adresi olacak şekilde giriş yapınız."
                    },
                    "mac_list": {
                        "title": "MAC Adres Listesi",
                        "field": "MAC Adresleri",
                        "placeholder": "00:00:00:00:00:00",
                        "label": "Her satırda tek MAC adresi olacak şekilde giriş yapınız."
                    },
                    "l4_port_list": {
                        "title": "L4 Port Listesi",
                        "field": "L4 Portları",
                        "placeholder": "80",
                        "label": "Her satırda tek L4 port değeri olacak şekilde giriş yapınız."
                    },
                    "gateway_definition": {
                        "title": "Ağ Geçidi",
                        "fields": {
                            "hasGateway": "Ağ Geçidi Etkin",
                            "gateway_ip": "Ağ Geçidi IP Adresi",
                            "gateway_subnet_mask": "Ağ Geçidi Subnet Maskesi"
                        }
                    },
                    "vtn_type": {
                        "title": "Sanal Ağ Tipi"
                    },
                    "local_network": "Yerel Topoloji",
                    "local_clusters": "Yerel Kümeler",
                    "local_cluster_name": "Yerel Küme Adı",
                    "local_vtn_name": "Yerel Sanal Ağ Adı",
                    "local_vtn_status": "Yerel Sanal Ağ Durumu",
                    "name_error": "Lütfen geçerli bir ağ ismi giriniz.",
                    "unique_name_err": "Yazdığınız sanal ağ ismi kullanılmaktadır. Lütfen başka bir isim giriniz.",
                    "unique_vlan_err": "Yazdığınız VLAN etiketi kullanılmaktadır. Lütfen başka bir VLAN etiketi giriniz."
                },
                "add_edit_switch_popup": {
                    "title": "Sanal Anahtarlayıcı Düzenle",
                    "switch_name": "Sanal Anahtarlayıcı Adı",
                    "host_count": "Uç Birim Portları",
                    "profile": "Profil",
                    "success": "Anahtarlayıcı başarılı bir şekilde oluşturuldu, yerleştirilmeye hazır.",
                    "cancel": "Anahtarlayıcı oluşturma işlemi iptal edildi",
                    "add_a_switch": "Soldaki menüden S'ye basarak bir anahtarlayıcı ile ağ oluşturmaya başlayabilirsiniz",
                    "name_field_error": "Lütfen isim alanını maximum 3 karakter olacak şekilde doldurun.",
                    "port_field_error": "Lütfen port sayısı alanını 0 ile 10 arası bir sayıyla doldurun",
                    "profile_field_error": "Lütfen bir profil seçin",
                    "securityLevel": "Güvenlik Seviyesi",
                    "no_available_profile_exists": "'Profil' listesinde uygun öğe bulunamamıştır. Daha sonra tekrar deneyiniz."
                },
                "add_edit_link_popup": {
                    "title": "Sanal Bağlantı Düzenle",
                    "source_bandwidth": "Gidiş Bant Genişliği",
                    "target_bandwidth": "Geliş Bant Genişliği",
                    "securityLevel": "Güvenlik Seviyesi",
                    "jitter": "Seğirme",
                    "delay": "Gecikme",
                    "packet_loss_rate": "Paket Kayıp Oranı",
                    "collision": "Çakışma",
                    "bandwidth_field_error": "Lütfen bir Bant Genişliği değeri girin",
                },
                "vnf_conversion_popup":{
                    "title": "VNF'e dönüştür",
                    "fields":{
                        "id": "ID",
                        "type": "VNF Tipi",
                        "name": "İsim"
                    }
                },
                "statistics": {
                    "source": "Kaynak",
                    "dest": "Hedef",
                    "packet": "Paket",
                    "error": "Hata",
                    "drop": "Düşük",
                    "byte": "Veri",
                    "rate": "Debi",
                    "collisions": "Çakışma",
                    "load": "Yük",
                    "bandwidth": "Bant genişliği",
                    "received": "Gelen",
                    "sent": "Giden"
                },
                "messages": {
                    'no_path_found': 'Seçilen uç birimler arasında herhangi bir patika bulunamadı!',
                    "path_created": "Patika Oluşturuldu",
                    'select_source_dest': "Lütfen 'Kaynak' ve 'Hedef' uç birimlerini seçiniz.",
                    'select_source_host': "Lütfen 'Kaynak' uç birimi seçiniz.",
                    'select_dest_host': "Lütfen 'Hedef' uç birimi seçiniz.",
                    'no_host_to_create': "Hiç Uç Birim olmadığı için patika oluşturulamaz.",
                    'no_host_to_show': "Hiç Uç Birim olmadığı için patika görüntüleme yapılamaz.",
                    'deselect_source_host': "'Kaynak' uç birim seçim iptal edildi, Lütfen yeni bir uç birim seçiniz.",
                    'deselect_target_host': "'Hedef' uç birim seçimi iptal edildi, Lütfen yeni bir uç birim seçiniz.",
                    'only_two_hosts_allowed': "En fazla 2 uç birim seçebilirsiniz, lütfen seçimlerinizden birini iptal ediniz.",
                    'confirm_selection': "Uç birim seçimini tamamladınız, işleme devam etmek istiyor musunuz?",
                    "confirm_switch_delete": "Bu anahtarlayıcıyı gerçekten silmek istiyor musunuz?",
                    "confirm_cancel_design_mode": "Sanal Ağ Tasarım işlemi İPTAL edilecektir.\nDevam etmek istiyor musunuz?",
                    "convert_to_ap": "Lütfen bir VLANID giriniz",
                    "to_ap": "Erişim Noktası yap",
                    "to_vnf": "VNF'e dönüştür",
                    "conroller_changed": "Kontrolcü Durumu Değişti",
                    "is_mapped_version_save_error": "Lütfen ağı kaydetmek için sanal ağ görüntüsüne dönün",
                    "block_user": "Kullanıcıyı Engelle",
                    'alternative_path_save_success': 'Alternatif patika başarıyla güncellendi.',
                    'alternative_path_save_error': 'Alternatif patika güncellenemedi.',
                    "draw_path_success": "Uç birimler arasındaki patika topoloji üzerinden gösterilmektedir."
                },
                "list": {
                    "title": "{{type}} Ağ Listesi",
                    "icon": "fa fa-share-alt",
                    "basePerm": "common",//THIS value is dynamically generated in the code
                    "perm": "#list",
                    "actions": {
                        "add_topology": {
                            "title": "Ağ Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_topology": {
                            "title": "Ağ Görüntüle",
                            "title_short": "Görüntüle",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_topology": {
                            "title": "Ağ Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_topology": {
                            "title": "Ağ Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete_request"
                        }
                    },
                    "fields": {
                        "status": "Durum",
                        "name": "Ağ Adı",
                        "type": "Ağ Tipi",
                        "date": "Oluşturma"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli topolojiyi silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli topoloji başarıyla silinmiştir!"
                    }
                },
                "alarm_status_popover": {
                    "title": "Alarm Durumları",
                    "fatal": "Onulmaz",
                    "critical": "Kritik",
                    "important": "Önemli",
                    "unimportant": "Önemsiz"
                }
            },
            "switch": {
                "title": "Anahtarlayıcı",
                "legacy_title": "Geleneksel Anahtarlayıcı",
                "ip_phone_title": "IP Telefon",
                "flow_list": {
                    "title": "Anahtarlayıcı '{{name}}' Akış Listesi",
                    "icon": "fa fa-map-signs",
                    "basePerm": "flows",
                    "perm": "#list",
                    "actions": {
                        "create_flow": {
                            "title": "Akış Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_flow": {
                            "title": "Akış Görüntüle",
                            "title_short": "Görüntüle",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_flow": {
                            "title": "Akış Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_flow": {
                            "title": "Akış Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "state": "Durum",
                        "id": "Id",
                        "grp_tbl_id": "Grup / Tablo",
                        "priority": "Öncelik",
                        "instruction_list": "İşlem Listesi",
                        "match_list": "Eşleşme Listesi",
                        "app": "Uygulama",
                        "life_idle": "Aktif / Pasif",
                        "life": "Ömür",
                        "packets": "Paketler",
                        "bytes": "Veriler",
                        "controller": "Kontrolcü"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.id}}' kodlu akışı silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.id}}' kodlu akış başarıyla silinmiştir!",
                        "delete_not_allowed": "'{{dto.id}}' kodlu akışı silemezsiniz!"
                    }
                },
                "port_list": {
                    "title": "Anahtarlayıcı '{{name}}' Port Listesi",
                    "icon": "fa fa-list",
                    "basePerm": "ports",
                    "perm": "#list",
                    "actions": {
                        "view_port": {
                            "title": "Port Detayları",
                            "title_short": "Detaylar",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                    },
                    "fields": {
                        "states": "Durum",
                        "configs": "Ayarlar",
                        "number": "No",
                        "name": "Adı",
                        "address": "Adresler",
                        "linkType": "Bağlantı Tipi",
                        "speed": "Maksimum Hız",
                        "rates": "Debi",
                        "packets_sent": "Gönderilen Paket",
                        "packets_received": "Alınan Paket",
                        "bytes_sent": "Gönderilen Veri",
                        "bytes_received": "Alınan Veri"
                    },
                    "messages": {
                        "blocked": "Bloklanmış",
                        "link_down": "Kopuk Bağlantı",
                        "live": "Canlı",
                        "stp_active": "STP Aktif",
                        "port_down": "Kapalı Bağlantı Noktası",
                        "no_fwd": "Yönlendirme yok",
                        "no_packet_in": "Paket Alımı yok",
                        "no_recv": "Alım yok"
                    }
                },
            },
            "host": "Uç Birim",
            "link": "Bağlantı",
            "gateway": {
                "title": "Ağ Geçidi",
                "ip": "IP",
                "name": "Adı",
                "mac": "MAC"
            },
            "messages": {
                "node_type_error": "Cihaz tipi bulunamadı",
            },
            "virtual_topo": {
                "title": "Sanal Ağlar",
                "req_title": "Sanal Ağ İstekleri",
                "icon": "fa fa-share-alt-square",
                "perm": "common:view",
                "list": {
                    "title": "Sanal Ağlar",
                    "icon": "fa fa-share-alt-square",
                    "basePerm": "vir_topo",
                    "perm": "#list",
                    "actions": {
                        "create_topology": {
                            "title": "Sanal Ağ Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "create_topology_request": {
                            "title": "Sanal Ağ Talebi Oluştur",
                            "title_short": "Talep Oluştur",
                            "icon": "fa fa-plus",
                            "color": "blue-madison",
                            "perm": "#create_request & !(#create)",
                        },
                        "view_topology": {
                            "title": "Sanal Ağ Görüntüle",
                            "title_short": "Görüntüle",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_topology": {
                            "title": "Sanal Ağ Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                            "states": ['SUSPENDED', 'REJECTED']
                        },
                        "delete_topology": {
                            "title": "Sanal Ağ Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                            "states": ['SUSPENDED', 'REJECTED', 'SUBMITTED', 'INVALID']
                        },
                        "create_deny": {
                            "title": "Sanal Ağ Talebini Red Et",
                            "title_short": "Talep Red Et",
                            "icon": "fa fa-thumbs-down",
                            "color": "red-mint",
                            "perm": "#create_approve",
                            "states": ['SUBMITTED']
                        },
                        "create_approve": {
                            "title": "Sanal Ağ Talebini Onayla",
                            "title_short": "Talep Onayla",
                            "icon": "fa fa-thumbs-up",
                            "color": "green-jungle",
                            "perm": "#create_approve",
                            "states": ['SUBMITTED']
                        },
                        "delete_deny": {
                            "title": "Sanal Ağ Silmeyi Red Et",
                            "title_short": "Silme Red Et",
                            "icon": "fa fa-thumbs-down",
                            "color": "red-mint",
                            "perm": "#delete_approve"
                        },
                        "delete_approve": {
                            "title": "Sanal Ağ Silmeyi Onayla",
                            "title_short": "Silme Onayla",
                            "icon": "fa fa-thumbs-up",
                            "color": "green-jungle",
                            "perm": "#delete_approve"
                        },
                        "activate_topology": {
                            "title": "Sanal Ağı Başlat",
                            "title_short": "Başlat",
                            "icon": "fa fa-play",
                            "color": "green-jungle",
                            "perm": "#toggle_state",
                            "states": ['SUSPENDED']
                        },
                        "deactivate_topology": {
                            "title": "Sanal Ağı Durdur",
                            "title_short": "Durdur",
                            "icon": "fa fa-pause",
                            "color": "grey-cascade",
                            "perm": "#toggle_state",
                            "states": ['ACTIVE']
                        },
                        "change_mvtnType": {
                            "title": "Sanal Ağ tipini değiştir",
                            "title_short": "Değiştir",
                            "icon": "fa fa-refresh",
                            "color": "grey-cascade"
                        },
                        "action_menu": {
                            "title": "İşlemler",
                            "title_short": "İşlemler",
                            "icon": "fa fa-cog",
                            "color": "btn-default"
                        },
                    },
                    "fields": {
                        "mvtnStatus": "Durum",
                        "name": "Sanal Ağ Adı",
                        "username": "Kullanıcı",
                        "creationDate": "Oluşturma Zamanı",
                        "lastUpdateDate": "Son Güncelleme Zamanı",
                        "mvtnType": "Tipi"
                    },
                    "messages": {
                        "approve_confirm": "'{{dto.name}}' isimli Sanal Ağı Talebini <b>onaylamak</b> istediğinize emin misiniz?",
                        "approve_success": "'{{dto.name}}' isimli Sanal Ağ başarıyla onaylanmıştır!",
                        "deny_confirm": "'{{dto.name}}' isimli Sanal Ağı Talebini <b>red etmek</b> istediğinize emin misiniz?",
                        "deny_success": "'{{dto.name}}' isimli Sanal Ağ başarıyla reddedilmiştir!",
                        "delete_request_confirm": "'{{dto.name}}' isimli Sanal Ağı Talebini <b>silmek</b> istediğinize emin misiniz?",
                        "delete_request_success": "'{{dto.name}}' isimli Sanal Ağ Talebi başarıyla silinmiştir!",
                        "delete_confirm": "'{{dto.name}}' isimli Sanal Ağı <b>silmek</b> istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli Sanal Ağ başarıyla silinmiştir!",
                        "activate_confirm": "'{{dto.name}}' isimli Sanal Ağı <b>başlatmak</b> istediğinize emin misiniz?",
                        "activate_success": "'{{dto.name}}' isimli Sanal Ağ başarıyla başlatılmıştır!",
                        "deactivate_confirm": "'{{dto.name}}' isimli Sanal Ağı <b>durdurmak</b> istediğinize emin misiniz?",
                        "deactivate_success": "'{{dto.name}}' isimli Sanal Ağ başarıyla durdurulmuştur!",
                        "change_mvtn_type_confirm": "'{{dto.name}}' isimli Sanal Ağın tipini değiştirmek istediğinize emin misiniz?"
                    }
                },
            },
            "virtual_topo_req": {
                "title": "Sanal Ağ İstekleri",
                "req_title": "Sanal Ağ İstekleri",
                "icon": "fa fa-share-alt-square",
                "perm": "common:view",
                "list": {
                    "title": "Sanal Ağ İstekleri",
                    "icon": "fa fa-share-alt-square",
                    "basePerm": "vir_topo_req",
                    "perm": "#list",
                    "actions": {
                        "create_topology_request": {
                            "title": "Sanal Ağ Talebi Oluştur",
                            "title_short": "Talep Oluştur",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "create_approve": {
                            "title": "Sanal Ağ Talebini Onayla",
                            "title_short": "Talep Onayla",
                            "icon": "fa fa-thumbs-up",
                            "color": "green-jungle",
                            "perm": "#toggle_state",
                            "states": ['CREATED', 'EDITED']
                        },
                        "create_deny": {
                            "title": "Sanal Ağ Talebini Reddet",
                            "title_short": "Talep Red Et",
                            "icon": "fa fa-thumbs-down",
                            "color": "red-mint",
                            "perm": "#toggle_state",
                            "states": ['CREATED', 'EDITED']
                        },
                        "view_topology": {
                            "title": "Sanal Ağ İsteği Görüntüle",
                            "title_short": "Görüntüle",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_topology": {
                            "title": "Sanal Ağ İsteği Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#create",
                            "states": ['CREATED', 'EDITED']
                        },
                        "delete_topology": {
                            "title": "Sanal Ağ Talebini Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                            "states": ['CREATE_REJECTED', 'EDIT_REJECTED', 'ACCEPTED']
                        },
                        "change_mvtn_type": {
                            "title": "Sanal Ağ Tipini Değiştir",
                            "title_short": "Tip Değiştir",
                            "icon": "fa fa-refresh",
                            "color": "green-meadow",
                            "perm": "#view"
                        },
                        "action_menu": {
                            "title": "İşlemler",
                            "title_short": "İşlemler",
                            "icon": "fa fa-cog",
                            "color": "btn-default"
                        },
                    },
                    "fields": {
                        "mvtnStatus": "Durum",
                        "name": "Sanal Ağ Adı",
                        "username": "Kullanıcı",
                        "creationDate": "Oluşturma Zamanı",
                        "lastUpdateDate": "Son Güncelleme Zamanı",
                        "mvtnType": "Tipi"
                    },
                    "messages": {
                        "approve_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı Talebini <b>onaylamak</b> istediğinize emin misiniz?",
                        "approve_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla onaylanmıştır!",
                        "deny_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı Talebini <b>red etmek</b> istediğinize emin misiniz?",
                        "deny_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla reddedilmiştir!",
                        "delete_request_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı Talebini <b>silmek</b> istediğinize emin misiniz?",
                        "delete_request_success": "'{{dto.mvtnName}}' isimli Sanal Ağ Talebi başarıyla silinmiştir!",
                        "delete_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı <b>silmek</b> istediğinize emin misiniz?",
                        "delete_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla silinmiştir!",
                        "activate_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı <b>başlatmak</b> istediğinize emin misiniz?",
                        "activate_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla başlatılmıştır!",
                        "deactivate_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı <b>durdurmak</b> istediğinize emin misiniz?",
                        "deactivate_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla durdurulmuştur!"
                    }
                },
                "edit": {
                    "modes": {
                        "edit": {
                            "title": "Onay",
                            "icon": "fa fa-question-circle",
                            "color": "font-blue-steel"
                        },
                        "create": {
                            "title": "Onay",
                            "icon": "fa fa-question-circle",
                            "color": "font-blue-steel"
                        }
                    },
                    "fields": {
                        "mvtnType": "Sanal Ağ Tipi"
                    },
                    "messages": {
                        "approve_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı Talebini onaylamak istediğinize emin misiniz?",
                        "approve_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla onaylanmıştır!",
                        "deny_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı Talebini red etmek istediğinize emin misiniz?",
                        "deny_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla reddedilmiştir!",
                        "delete_request_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı Talebini silmek istediğinize emin misiniz?",
                        "delete_request_success": "'{{dto.mvtnName}}' isimli Sanal Ağ Talebi başarıyla silinmiştir!",
                        "delete_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla silinmiştir!",
                        "activate_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı başlatmak istediğinize emin misiniz?",
                        "activate_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla başlatılmıştır!",
                        "deactivate_confirm": "'{{dto.mvtnName}}' isimli Sanal Ağı durdurmak istediğinize emin misiniz?",
                        "deactivate_success": "'{{dto.mvtnName}}' isimli Sanal Ağ başarıyla durdurulmuştur!",
                        "select_mvtn_type": "Lütfen Sanal Ağ tipi belirtiniz."
                    }
                },
                "notify": {
                    "messages": {
                        "MvtnCreated": "'{{dto.vtnName}}' isimli sanal ağ isteği onaylanmıştır.",
                        "MvtnRejected": "'{{dto.vtnName}}' isimli sanal ağ isteği reddedilmiştir.",
                        "MvtnUpdateAccepted": "'{{dto.vtnName}}' isimli sanal ağ güncelleme isteği onaylanmıştır.",
                        "MvtnUpdateRejected": "'{{dto.vtnName}}' isimli sanal ağ güncelleme isteği reddedilmiştir.",
                    }
                }
            },
            "controller_management": {
                "title": "Kontrolcü Yönetimi",
                "req_title": "Kontrolcü Yönetimi",
                "icon": "fa fa-gavel",
                "basePerm": "cluster",
                "perm": "#view",
                "controllerSettings": {
                    "title": "Kontrolcü Yapılandırma",
                    "clusterTree": {
                        "title": "Kontrolcü Kümeleri",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "parameters": "Parametreler",
                        "tasks": "Görevler",
                        "switches": "Anahtarlayıcılar"
                    },
                    "controllerList": {
                        "title": "Ağ Küme Kontrolcüleri",
                        "icon": "fa fa-sitemap",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "actions": {
                            "tls": {
                                "title": "TLS Sertifikası Oluştur",
                                "title_short": "Sertifika Oluştur",
                                "icon": "fa fa-download",
                                "color": "blue-madison",
                                "perm": "#view"
                            },
                            "edit": {
                                "title": "Kontrolcüyü Düzenle",
                                "title_short": "Düzenle",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#edit"
                            },
                            "parameters": {
                                "title": "Parametreler",
                                "title_short": "Parametreler",
                                "icon": "fa fa-sliders",
                                "color": "yellow-casablanca",
                                "perm": "#view"
                            },
                            "tasks": {
                                "title": "Görevler",
                                "title_short": "Görev",
                                "icon": "fa fa-tasks",
                                "color": "blue-hoki",
                                "perm": "#view"
                            },
                            "switches": {
                                "title": "Anahtarlayıcılar",
                                "title_short": "Anahtarlayıcı",
                                "icon": "fa fa-exchange",
                                "color": "red-sunglo",
                                "perm": "#view"
                            }
                        },
                        "fields": {
                            "status": "Durum",
                            "controllerName": "Kontrolcü Adı",
                            "nm": "Bağlı NM",
                            "ip": "IP Adresi",
                            "port": "Port",
                            "ofVersion": "OF Versiyonu"
                        }
                    },
                    "tls": {
                        "title": "Kontrolcü Sertifikası Oluştur",
                        "icon": "fa fa-download",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "fields": {
                            "name": {
                                "label": "Kontrolcü Adı",
                                "placeholder": "",
                                "help_line": "",
                                "help_block": "",
                            },
                            "mac": {
                                "label": "MAC Adresi",
                                "placeholder": "",
                                "help_line": "",
                                "help_block": "",
                            },
                            "ip": {
                                "label": "IP Adresi",
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
                            "name": "Kontrolcü Adı",
                            "ip": "IP Adresi",
                            "port": "Port",
                            "location": "Lokasyonu",
                            "ofVersion": "OF Versiyonu",
                            "edit": "Düzenle",
                            "parameters": "Parametreler",
                            "tasks": "Görevler",
                            "switches": "Anahtarlayıcılar"
                        }
                    },
                    "controllerEdit": {
                        "title": "Ağ Küme Kontrolcüleri",
                        "icon": "fa fa-users",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "fields": {
                            "name": "Kontrolcü Adı",
                            "ip": "IP Adresi",
                            "port": "Port",
                            "location": "Lokasyonu",
                            "edit": "Düzenle",
                            "parameters": "Parametreler",
                            "tasks": "Görevler",
                            "switches": "Anahtarlayıcılar"
                        },
                        "messages": {
                            "save_success": "'{{dto.name}}' isimli kontrolcü başarıyla güncellenmiştir.",
                            "create_success": "'{{dto.name}}' isimli kontrolcü başarıyla oluşturulmuştur.",
                        }
                    },
                    "parameters": {
                        "title": "Ağ Küme Kontrolcüleri",
                        "icon": "fa fa-sliders",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "actions": {
                            "edit": {
                                "title": "Parametreyi Düzenle",
                                "title_short": "Düzenle",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#edit"
                            },
                        },
                        "fields": {
                            "componentName": "Bileşen",
                            "configKey": "Parametre Adı",
                            "nodeVersion": "Sürüm",
                            "configValue": "Parametre Değeri",
                        }
                    },
                    "tasks": {
                        "title": "Görevler",
                        "icon": "fa fa-tasks",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "fields": {
                            "workStatus": "Çalışma Durumu",
                            "actionStatus": "İşlem Durumu",
                            "name": "Görev Adı",
                            "version": "Sürüm",
                            "startTime": "Çalışma Zamanı"
                        },
                        "messages": {
                            "save_success": "'{{dto.name}}' isimli görev başarıyla güncellenmiştir."
                        }
                    },
                    "switches": {
                        "title": "Anahtarlayıcılar",
                        "icon": "fa fa-exchange",
                        "basePerm": "cluster",
                        "perm": "#view",
                        "actions": {
                            "edit": {
                                "title": "Anahtarlayıcı Düzenle",
                                "title_short": "Düzenle",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#view"
                            },
                            "link": {
                                "title": "Anahtarlayıcı Bağlantısı Ekle",
                                "title_short": "Bağlantı Ekle",
                                "icon": "fa fa-link",
                                "color": "blue-madison",
                                "perm": "#view"
                            },
                            "unlink": {
                                "title": "Anahtarlayıcı Bağlantısı Kopar",
                                "title_short": "Bağlantı Kopar",
                                "icon": "fa fa-unlink",
                                "color": "red-flamingo",
                                "perm": "#view"
                            }
                        },
                        "fields": {
                            "status": "Durum",
                            "type": "Tipi",
                            "name": "Anahtarlayıcı Adı",
                            "controller": "Kontrolcüler",
                            "mac": "MAC Adresi"
                        },
                        "messages": {
                            "unlink_confirm": "'{{dto.name}}' isimli anahtarlayıcıyı kontrolcüden koparmak istediğinize emin misiniz?",
                            "unlink_success": "'{{dto.name}}' isimli anahtarlayıcı başarıyla kontrolcüden koparılmıştır silinmiştir!"
                        },
                        "link": {
                            "basePerm": "cluster",
                            "modes": {
                                "edit": {
                                    "title": "Anahtarlayıcı Atama",
                                    "icon": "fa fa-plus",
                                    "perm": "#view",
                                },
                            },
                            "fields": {
                                "name": "Kontrolcü Adı",
                                "switches": "Anahtarlayıcı"
                            },
                            "messages": {
                                "link_success": "'{{dto.name}}' isimli kontrolcüye başarıyla anahtarlayıcı atanmıştır"
                            }
                        }
                    }
                },
                "switchSettings": {
                    "title": "Anahtarlayıcı Yapılandırma",
                    "edit": {
                        "basePerm": "cluster",
                        "modes": {
                            "edit": {
                                "title": "Anahtarlayıcı Düzenle",
                                "icon": "fa fa-pencil",
                                "perm": "#view",
                            },
                            "create": {
                                "title": "Anahtarlayıcı Ekle",
                                "icon": "fa fa-plus",
                                "perm": "#create",
                            }
                        },
                        "fields": {
                            "name": "Anahtarlayıcı Adı",
                            "cluster": "Kontrolcü Kümesi",
                            "masterController": "Usta Kontrolcü",
                            "slaveControllers": "Yamak Kontrolcüler",
                            "mac": "MAC Adresi",
                            "ip": "IP Adresi",
                            "id": "ID",
                            "datapathId": "Veri Katmanı",
                            "protocol": "Protokol",
                            "port": "Port",
                            "ovsdbSupport": "OVSDB Desteği",
                            "ovsdbPort": "OVSDB Port",
                            "powersavermode": "Enerji Tasarruf Modu",
                            "is_controller_device": "Kontrol Kanalı Cihazı",
                            "switchmetermode": "Meter Desteği",
                            "connectionType": "Bağlantı Tipi",
                            "offlineType": "Çevrimdışı Çalışma Tipi",
                            "location": "Yeri",
                            "securityLevel": "Güvenlik Seviyesi",
                            "powerUsage": "Günlük Enerji Kullanımı",
                            "powerUsageUnit": "kWh",
                            "totalBandwidth": "Toplam Bant Genişliği",
                            "totalBandwidthUnit": "Mbps",
                            "dpdk": "DPDK",
                            "ssl": "SSL Desteği",
                            "ncName": "İsim",
                            "ncPassword": "Şifre"
                        },
                        "messages": {
                            "save_success": "'{{dto.name}}' isimli anahtarlayıcı başarıyla güncellenmiştir.",
                            "create_success": "'{{dto.name}}' isimli anahtarlayıcı başarıyla oluşturulmuştur.",
                            "delete_confirm": "'{{dto.name}}' isimli anahtarlayıcıyı silmek istediğinze emin misiniz?",
                            "delete_success": "'{{dto.name}}' isimli anahtarlayıcı başarıyla silindi."
                        },
                        "level": "Seviye"
                    },
                    "list": {
                        "title": "Anahtarlayıcılar",
                        "icon": "fa fa-exchange",
                        "basePerm": "cluster",
                        "perm": "#list",
                        "actions": {
                            "create": {
                                "title": "Anahtarlayıcı Ekle",
                                "title_short": "Ekle",
                                "icon": "fa fa-plus-circle",
                                "color": "blue-madison",
                                "perm": "#create"
                            },
                            "info": {
                                "title": "Anahtarlayıcı Detayları",
                                "title_short": "Detay",
                                "icon": "fa fa-info-circle",
                                "color": "default",
                                "perm": "#view"
                            },
                            "edit": {
                                "title": "Anahtarlayıcı Düzenle",
                                "title_short": "Düzenle",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#view"
                            },
                            "delete": {
                                "title": "Anahtarlayıcı Sil",
                                "title_short": "Sil",
                                "icon": "fa fa-trash-o",
                                "color": "btn-outline uppercase red-sunglo",
                                "perm": "#delete"
                            },
                            "tls": {
                                "title": "TLS Sertifikasını İndir",
                                "title_short": "İndir",
                                "icon": "fa fa-download",
                                "color": "yellow-gold",
                                "perm": "#view"
                            }
                        },
                        "fields": {
                            "status": "Durum",
                            "type": "Tipi",
                            "name": "Anahtarlayıcı Adı",
                            "controllers": "Kontrolcüler",
                            "ipv4": "IP Adresi",
                            "mac": "MAC Adresi"
                        },
                        "messages": {
                            "save_success": "'{{dto.name}}' isimli anahtarlayıcı başarıyla güncellenmiştir.",
                            "create_success": "'{{dto.name}}' isimli anahtarlayıcı başarıyla oluşturulmuştur.",
                            "delete_confirm": "'{{dto.name}}' isimli anahtarlayıcıyı silmek istediğinze emin misiniz?",
                            "delete_success": "'{{dto.name}}' isimli anahtarlayıcı başarıyla silindi."
                        }
                    }
                },
                "wanDomain": {
                    "title": "Alan Yönetimi",
                    "icon": "fa fa-globe",
                    "edit": {
                        "basePerm": "cluster",
                        "modes": {
                            "edit": {
                                "title": "Alan Düzenle",
                                "icon": "fa fa-pencil",
                                "perm": "#view",
                            },
                            "create": {
                                "title": "Alan Ekle",
                                "icon": "fa fa-plus",
                                "perm": "#create",
                            }
                        },
                        "fields": {
                            "name": "Alan Adı",
                            "domainId": "Alan Id",
	                        "domainList": "Alan Listesi"
                        },
                        "messages": {
                            "save_success": "'{{dto.name}}' isimli alan başarıyla güncellenmiştir.",
                            "create_success": "'{{dto.name}}' isimli alan başarıyla oluşturulmuştur.",
	                        "create_all_success": "Wan alanları başarıyla oluşturulmuştur."
                        },
	                    "help":"AlanID ve Alan adı çiftlerini ';' (noktalı virgül) ile ayrılmış olarak giriniz. Her satırda tek veri çifti olacak şekilde giriş yapınız. Örn: 1;alanadı"
                    },
                    "list": {
                        "title": "Alan Tanımları",
                        "icon": "fa fa-globe",
                        "basePerm": "cluster",
                        "perm": "#list",
                        "actions": {
                            "create": {
                                "title": "Alan Ekle",
                                "title_short": "Ekle",
                                "icon": "fa fa-plus-circle",
                                "color": "blue-madison",
                                "perm": "#create"
                            },
	                        "multiCreate":{
		                        "title": "Toplu Ekle",
		                        "title_short": "Toplu Ekle",
		                        "icon": "fa fa-plus-circle",
		                        "color": "blue-madison",
		                        "perm": "#create"
	                        },
                            "edit": {
                                "title": "Alan Düzenle",
                                "title_short": "Düzenle",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#view"
                            },
                            "delete": {
                                "title": "Alan Sil",
                                "title_short": "Sil",
                                "icon": "fa fa-trash-o",
                                "color": "btn-outline uppercase red-sunglo",
                                "perm": "#delete"
                            },
                        },
                        "fields": {
                            "name": "Alan Adı",
                            "domainId": "Alan Id",
                            "status": "Durumu",
                        },
                        "messages": {
                            "delete_confirm": "'{{dto.name}}' isimli alanı silmek istediğinze emin misiniz?",
                            "delete_success": "'{{dto.name}}' isimli alan başarıyla silindi."
                        }
                    }
                }
            }
        },
        "user_management": {
            "title": "Kullanıcı Yönetimi",
            "icon": "fa fa-user-secret",
            "perm": "common:view",
            "roles": {
                "list": {
                    "title": "Roller",
                    "icon": "icon-shield",
                    "basePerm": "roles",
                    "perm": "#list",
                    "actions": {
                        "create_role": {
                            "title": "Rol Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_role": {
                            "title": "Rol Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_role": {
                            "title": "Rol Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_role": {
                            "title": "Rol Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "status": "Durum",
                        "name": "Rol Adı",
                        "securityLevel": "Güvenlik Seviyesi",
                        "created": "Oluşturma",
                        "modified": "Değişiklik"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli rolü silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli rol başarıyla silinmiştir!"
                    }
                },
                "edit": {
                    "basePerm": "roles",
                    "modes": {
                        "edit": {
                            "title": "Rol Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Rol Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "status": {
                            "label": "Rol Durumu",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "name": {
                            "label": "Rol Adı",
                            "placeholder": "Rol adı giriniz...",
                            "help_line": "Tekil bir Rol adı giriniz..",
                            "help_block": "",
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
                        "permList": {
                            "label": "Yetkiler",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                            "selectableHeader": "Seçilebilir Yetkiler",
                            "selectionHeader": "Atanmış Yetkiler",
                        },
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli rol başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli rol başarıyla oluşturulmuştur.",
                    },
                    "labels": {
                        "permissions": "Tüm İzinler"
                    }
                },
                "create": {
                    "title": "Rol Ekle",
                    "icon": "fa fa-plus",
                    "basePerm": "roles",
                    "perm": "#create",
                }
            },
            "users": {
                "list": {
                    "title": "Kullanıcılar",
                    "icon": "icon-user",
                    "basePerm": "users",
                    "perm": "#list",
                    "actions": {
                        "create_user": {
                            "title": "Kullanıcı Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_user": {
                            "title": "Kullanıcı Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_user": {
                            "title": "Kullanıcı Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete_user": {
                            "title": "Kullanıcı Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        },
                        "set_pwd": {
                            "title": "Şifre Değiştir",
                            "title_short": "Şfr Dğştr",
                            "icon": "fa fa-key",
                            "color": "yellow-gold",
                            "perm": "common:view", //page handles the permission check
                        },
                        "reports": {
                            "title": "Çağrı Raporları",
                            "title_short": "Raporlar",
                            "icon": "fa fa-file-text",
                            "color": "blue-steel",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "status": "Durum",
                        "username": "Kullanıcı Adı",
                        "name": "Adı",
                        "surname": "Soyadı",
                        "email": "E-posta",
                        "created": "Eklenme",
                        "modified": "Değişiklik",
                        "lastAccessed": "Son Erişim",
                        "tcNo": "TC Kimlik No",
                        "accessDateStart": "İlk Erişebilirlik Tarihi",
                        "accessDateEnd": "Son Erişebilirlik Tarihi",
                        "userType": "Kullanıcı Tipi",
                        "nacGroup": "Erişim Grubu",
                        "byodGroup": "BYOD Grubu"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.username}}' isimli kullanıcıyı silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.username}}' isimli kullanıcı başarıyla silinmiştir!",
                        "delete_self_not_allowed": "Kendi kullanıcınızı silemezsiniz!"
                    }
                },
                "edit": {
                    "basePerm": "users",
                    "help_page": "http://www.google.com",
                    "modes": {
                        "edit": {
                            "title": "Kullanıcı Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Kullanıcı Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
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
                            "help_line": "En az 5 karakterden oluşan bir kullanıcı adı yazınız.",
                            "help_block": "",
                        },
                        "password": {
                            "label": "Şifre",
                            "placeholder": "Şifre yazınız...",
                            "help_line": "En az 6 karakterden oluşan bir şifre yazınız. \n Şifrenizde en az 1 büyük, 1 küçük harf, 1 sayısal değer ve 1 özel karakter (!@#\\$%^&*) olmalıdır.",
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
                        "roleList": {
                            "label": "Roller",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                            "selectableHeader": "Seçilebilir Roller",
                            "selectionHeader": "Atanmış Roller",
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
                            "placeholder": "Son Erişilebilirlik Tarihi",
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
                        "byodGroup": {
                            "label": "Otomatik BYOD Erişim Grubu",
                            "placeholder": "Otomatik BYOD Erişim Grubu Seçiniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "thirdparty": {
                            "label": "3. Parti Uygulama"
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.username}}' isimli kullanıcı başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.username}}' isimli kullanıcı başarıyla oluşturulmuştur.",
                        "unmatched_passwords": "Şifreler uyuşmuyor. Lütfen şifrenizi kontrol ediniz."
                    },
                    "labels": {
                        "accessDateSettings": "",
                        "personalDevices": "Personel Cihazları"
                    }
                },
                "create": {
                    "title": "Kullanıcı Ekle",
                    "icon": "fa fa-plus",
                    "basePerm": "users",
                    "perm": "#create",
                },
                "change_pwd": {
                    "title": "Şifre Değiştir",
                    "icon": "fa fa-key",
                    "basePerm": "users",
                    "perm": "#change_pwd",
                    "actions": {},
                    "fields": {
                        "currentPassword": {
                            "label": "Mevcut Şifreniz",
                            "placeholder": "Mevcut şifrenizi yazınız...",
                            "help_line": "",
                            "help_block": "",
                        },
                        "newPassword": {
                            "label": "Yeni Şifreniz",
                            "placeholder": "Yeni şifrenizi yazınız...",
                            "help_line": "En az 6 karakterden oluşan bir şifre yazınız. \n Şifrenizde en az 1 büyük, 1 küçük harf, 1 sayısal değer ve 1 özel karakter(!@#\\$%^&*) olmalıdır.",
                            "help_block": "",
                        },
                        "newPasswordRetype": {
                            "label": "Yeni Şifreniz (Tekrar)",
                            "placeholder": "Yeni şifrenizi tekrar yazınız...",
                            "help_line": "Güvenlik amacıyla şifreyi tekrar yazınız.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "change_success": "Şifreniz başarıyla güncellenmiştir.",
                        "passwords_mismatch": "Yeni şifre girişleriniz birbiri ile uyuşmuyor, lütfen tekrar giriş yapınız.",
                    },
                    "labels": {}
                },
                "set_pwd": {
                    "title": "Şifre Tanımla",
                    "icon": "fa fa-key",
                    "basePerm": "users",
                    "perm": "#set_pwd",
                    "actions": {},
                    "fields": {
                        "username": {
                            "label": "Kullanıcı Adı",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "newPassword": {
                            "label": "Yeni Şifre",
                            "placeholder": "Yeni şifreyi yazınız...",
                            "help_line": "En az 6 karakterden oluşan bir şifre yazınız. \n Şifrenizde en az 1 büyük, 1 küçük harf, 1 sayısal değer ve 1 özel karakter(!@#\\$%^&*) olmalıdır.",
                            "help_block": "",
                        },
                        "newPasswordRetype": {
                            "label": "Yeni Şifre (Tekrar)",
                            "placeholder": "Yeni şifreyi tekrar yazınız...",
                            "help_line": "Güvenlik amacıyla şifreyi tekrar yazınız.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "change_success": "'{{dto.username}}' isimli kullanıcının şifresi başarıyla güncellenmiştir.",
                        "passwords_mismatch": "Yeni şifre girişleriniz birbiri ile uyuşmuyor, lütfen tekrar giriş yapınız.",
                    },
                    "labels": {}
                },
            },
            "user_logs": {
                "title": "Kullanıcı Aktiviteleri Sorgula",
                "icon": "fa fa-list-alt",
                "perm": "common:view",
                "query_criteria": "Sorgulama Kriteri",
                "query": "Sorgula",
                "list": {
                    "title": "Kullanıcı Aktiviteleri Sorgula",
                    "icon": "fa fa-list-alt",
                    "basePerm": "alarm_logs",
                    "perm": "#list",
                    "actions": {
                        "view": {
                            "title": "Detaylar",
                            "title_short": "Detay",
                            "icon": "fa fa-info-circle",
                            "color": "default",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "status": "Durumu",
                        "severity": "Aciliyet",
                        "name": "Adı",
                        "surname": "Soyadı",
                        "source": "Modül",
                        "resource": "Bölüm",
                        "time": "Zaman",
                        "ip": "IP",
                        "description": "Açıklama",
                        "type": "Alarm Tipi",
                        "alarmStatus": "Alarm Durumu",
                        "sourceHost": "Kaynak Birim",
                        "sourceInstance": "Kaynak Instans",
                        "vtnName": "Sanal Ağ",
                        "srcIP": "Kaynak",
                        "dstIP": "Hedef",
                        "device": "Cihaz",
                        "user": "Kullanıcı",
                        "begin_time": "Başlangıç",
                        "end_time": "Bitiş",
                        "bytes": "Bayt",
                        "life": "Ömür (sn)",
                        "packets": "Paket",
                        "rate": "Hız",
                        "protocol": "Protokol"
                    },
                    "messages": {
                        "select_item": "Lütfen detaylar için listeden bir günlük kaydı seçiniz. ",
                        "no_user": "Kullanıcı bulunamadı.",
                        "no_ip": "IP bulunamadı.",
                        "select_user": "Lütfen bir kullanıcı seçiniz",
                        "write_ip": "Lütfen bir IP giriniz",
                        "no_data": "Bu kullanıcıya ait girdi bulunamadı",
                        "select_date": "Lütfen tarih aralığı seçiniz"
                    },
                    "labels": {
                        "all": "Hepsi"
                    }
                },
                "details": {
                    "title": "'{{dto.name}}' Detayları",
                    "title_no_selection": "Detaylar",
                    "icon": "fa fa-list-alt",
                    "basePerm": "alarm_logs",
                    "perm": "#view",
                    "actions": {},
                    "fields": {
                        "status": "Durumu",
                        "severity": "Aciliyet",
                        "name": "Adı",
                        "source": "Modül",
                        "resource": "Bölüm",
                        "time": "Zaman",
                        "description": "Açıklama",
                        "type": "Alarm Tipi",
                        "alarmStatus": "Alarm Durumu",
                        "sourceHost": "Kaynak Birim",
                        "sourceInstance": "Kaynak Instans",
                        "srcIP": "Kaynak",
                        "dstIP": "Hedef",
                        "device": "Cihaz",
                        "vtnName": "Sanal Ağ"
                    },
                    "messages": {},
                },
            },
            "third_party": {
                "list": {
                    "title": "3. Parti Uygulamalar",
                    "icon": "fa fa-puzzle-piece",
                    "basePerm": "apps",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Uygulama Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Uygulama Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit": {
                            "title": "Uygulama Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete": {
                            "title": "Uygulama Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        },
                        "reports": {
                            "title": "Çağrı Raporları",
                            "title_short": "Raporlar",
                            "icon": "fa fa-file-text",
                            "color": "blue-steel",
                            "perm": "tsdb_metric:list"
                        }
                    },
                    "fields": {
                        "status": "Durum",
                        "name": "Uygulama Adı",
                        "roleList": "Roller",
                        "userCount": "Kullanıcı Sayısı",
                        "call_count": "Çağrı Sayıları (İzinsiz/İzinli)"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli uygulamayı silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli uygulama başarıyla silinmiştir!",
                    }
                },
                "edit": {
                    "basePerm": "apps",
                    "modes": {
                        "edit": {
                            "title": "Uygulama Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Uygulama Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "status": "Durum",
                        "name": "Uygulama Adı",
                        "authorizedRoles": "Erişim İzni Verilen Roller",
                        "maxUserCount": "Maks. Kullanıcı Sayısı",
                        "maxPolicyPriority": "Maks. Politika Önceliği",
                        "select": "Seç",
                        "roles": "Roller",
                        "type": "Tip",
                        "editable": "Düzenlenebilir",
                        "noneditable": "Düzenlenemez",
                        "active": "Aktif",
                        "passive": "Pasif"
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli uygulama başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli uygulama başarıyla oluşturulmuştur.",
                    }
                },
                "call_reports": {
                    "title": "Çağrı Raporları",
                    "basePerm": "tsdb_metric",
	                "perm": "#list",
	                "icon": "fa fa-pencil",
                    "fields": {
                        "method": "API Metodu",
                        "allowed": "İzinli",
                        "denied": "İzinsiz",
                        "call_reports": "Çağrı Raporları"
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli uygulama başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli uygulama başarıyla oluşturulmuştur.",
                    }
                }
            }
        },
        "policy_management": {
            "title": "Politika Yönetimi",
            "icon": "fa fa-shield",
            "perm": "common:view",
            "traffic_categories": {
                "list": {
                    "title": "Trafik Sınıfları",
                    "icon": "icon-map",
                    "basePerm": "traffic_class",
                    "perm": "#list",
                    "actions": {
                        "create_traffic_category": {
                            "title": "Trafik Sınıfı Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_traffic_category": {
                            "title": "Kullanıcı Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_traffic_category": {
                            "title": "Trafik Sınıfı Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete_traffic_category": {
                            "title": "Trafik Sınıfı Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        }
                    },
                    "fields": {
                        "cat_name": "Sınıf Adı",
                        "class_level": "Sınıf Seviyesi",
                        "bandwidth": "Bant Genişliği",
                        "jitter": "Seğirme",
                        "delay": "Gecikme",
                        "collision": "Çakışma",
                        "collision_unit": "paket/s"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.serviceClassName}}' isimli Trafik Sınıfını silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.serviceClassName}}' isimli Trafik Sınıfı başarıyla silinmiştir!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "traffic_class",
                    "modes": {
                        "edit": {
                            "title": "Trafik Sınıfı Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Trafik Sınıfı Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "status": {
                            "label": "Hesap Durumu",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": ""
                        },
                        "traffic_cat_name": {
                            "label": "Trafik Sınıfı Adı",
                            "placeholder": "Trafik Sınıfı Adı yazınız...",
                            "help_line": "Tekil bir Trafik Sınıfı Adı yazınız.",
                            "help_block": ""
                        },
                        "bandwidth": {
                            "label": "Bant Genişliği",
                            "placeholder": "Bant Genişliği değeri yazınız...",
                            "help_line": "Bir Bant Genişliği değeri yazınız.",
                            "help_block": ""
                        },
                        "jitter": {
                            "label": "Seğirme",
                            "placeholder": "Seğirme değeri yazınız...",
                            "help_line": "Bir Seğirme değeri yazınız.",
                            "help_block": ""
                        },
                        "delay": {
                            "label": "Gecikme",
                            "placeholder": "Gecikme değeri yazınız...",
                            "help_line": "Bir Gecikme değeri yazınız.",
                            "help_block": ""
                        },
                        "collision": {
                            "label": "Çakışma",
                            "placeholder": "Çakışma değeri yazınız...",
                            "help_line": "Bir Çakışma değeri yazınız.",
                            "help_block": "",
                            "unit": "paket/s"
                        },
                        "loss": {
                            "label": "Kayıp",
                            "placeholder": "Kayıp değeri yazınız...",
                            "help_line": "Bir Kayıp değeri yazınız.",
                            "help_block": "",
                            "unit": "paket/s"
                        },
                        "class_level": "Sınıf Seviyesi"
                    },
                    "messages": {
                        "save_success": "'{{dto.serviceClassName}}' isimli Trafik Sınıfı başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.serviceClassName}}' isimli Trafik Sınıfı başarıyla oluşturulmuştur.",
                    },
                    "labels": {}
                }
            },
            "service_quality": {
                "list": {
                    "title": "Hizmet Kalitesi Politikaları",
                    "icon": "fa fa-envira",
                    "basePerm": "service_quality",
                    "perm": "#list",
                    "actions": {
                        "create_service_quality_policy": {
                            "title": "Hizmet K. Politikası Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_service_quality_policy": {
                            "title": "Kullanıcı Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_service_quality_policy": {
                            "title": "Hizmet K. Politikası Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_service_quality_policy": {
                            "title": "Hizmet K. Politikası Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "cat_name": "Politika Adı",
                        "class": "Trafik Sınıfı",
                        "priority": "Öncelik",
                        "security_level": "Güvenlik Seviyesi",
                        "bandwidth": "Bant Genişliği",
                        "required_devices": "Zorunlu Cihazlar",
                        "mvtnId": "Sanal Ağ",
                        "blocked_devices": "Engelli Cihazlar",
                        "rules": "Tanımlı Kurallar"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.policyName}}' isimli Hizmet Kalitesi Politikasını silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.policyName}}' isimli Hizmet Kalitesi Politikası başarıyla silinmiştir!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "service_quality",
                    "modes": {
                        "edit": {
                            "title": "Hizmet Kalitesi Politikası Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Hizmet Kalitesi Politikası Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "title": "İşlemler",
                        "add": "Ekle",
                        "delete": "Sil",
                        "dscp_marking": {
                            "title": "DSCP İşaretleme",
                            "settings_title": "DSCP İşaretleme Ayarları"
                        },
                        "ip_header_change": {
                            "title": "IP Başlık Değiştirme",
                            "settings_title": "IP Başlık Değiştirme Ayarları",
                            "target_ip": "Hedef IP",
                            "mac": "MAC"
                        },
                        "vlan": {
                            "title": "VLAN Etiketleme",
                            "settings_title": "VLAN Etiketleme Ayarları",
                            "popValue": "Çıkarma Değeri",
                            "pushValue": "Ekleme Değeri",
                            "pushToPacket": "Paket İşaretleme"
                        },
                        "traffic_hopping": {
                            "title": "Trafik Atlatma",
                            "settings_title": "Trafik Atlatma Ayarları",
                            "max_hop": "Maksimum Atlama Sayısı",
                            "period": "Atlama Periyodu",
                            "periodUnit": "saniye",
                            "hop_period_error": "Lütfen Atlatma Periyoduna 30'dan büyük bir değer girin."
                        },
                        "path_reduce": {
                            "title": "Patika Kontrol",
                            "settings_title": "Patika Kontrol Ayarları",
                            "flow_control_management": "Rezervasyon",
                            "flow_control_priority": "Rezervasyon Önceliği",
                            "setPath": "Patika Kurma",
                            "useLowFlowSwitch": "Düşük akış tanımı bulunan anahtarlayıcıları kullan",
                            "useMinHOP": "Minimum HOP sayısı ile patika kur"
                        },
                        "internet": {
                            "title": "Internet",
                            "settings_title": "Internet Ayarları",
                            "access_control": "Erişim Kontrol"
                        },
                        "encrypted_path": {
                            "title": "Şifreli Patika",
                            "settings_title": "Şifreli Patika Ayarları",
                            "info": "Sifreli patika kurulumu aktiftir."
                        },
                        "flow_balancer": {
                            "title": "Yük Dengeleme",
                            "settings_title": "Yük Dengeleme Ayarları",
                            "method": "Dengeleme Yöntemi",
                        },
                        "sfc": {
                            "title": "Servis Zincirleme",
                            "settings_title": "Servis Zincirleme Ayarları",
                            "method": "Servis Zinciri Tipi",
                        },
                        "control_channel": {
                            "title": "Kontrol Kanalı Kullanımı",
                            "settings_title": "Kontrol Kanalı Kullanımı Ayarları",
                            "label": "Kontrol Kanalı veri akışı için kullanılacaktır.",
                        },
                        "nothing_selected": "Lütfen sol bölümden bir aksiyon seçiniz veya yeni bir aksiyon tanımlayınız.",
                    },
                    "fields": {
                        "blocked_devices": {
                            "label": "Engelli Cihazlar",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": ""
                        },
                        "policy_name": {
                            "label": "Politika Adı",
                            "placeholder": "Politika Adı yazınız...",
                            "help_line": "Tekil bir Politika Adı yazınız.",
                            "help_block": ""
                        },
                        "traffic_category": {
                            "label": "Trafik Sınıfı",
                            "placeholder": "Trafik Sınıfı yazınız...",
                            "help_line": "Trafik Sınıfı yazınız.",
                            "help_block": ""
                        },
                        "traffic_category_add": {
                            "label": "Ekle",
                            "placeholder": "Trafik Sınıfı yazınız...",
                            "help_line": "Trafik Sınıfı yazınız.",
                            "help_block": ""
                        },
                        "priority": {
                            "label": "Öncelik",
                            "placeholder": "Öncelik değeri yazınız...",
                            "help_line": "Bir Öncelik değeri yazınız.",
                            "help_block": "",
                            "priority_error": "Lütfen geçerli bir öncelik girin."
                        },
                        "virtual_network": {
                            "label": "Sanal Ağ",
                            "placeholder": "Sanal Ağ Seçiniz",
                            "help_line": "",
                            "help_block": ""
                        },
                        "security_level": {
                            "label": "Güvenlik Seviyesi",
                            "placeholder": "Güvenlik Seviyesi değeri yazınız...",
                            "help_line": "Bir Güvenlik Seviyesi değeri yazınız.",
                            "help_block": ""
                        },
                        "link_type": {
                            "label": "Zorunlu Bağlantı Tipi",
                            "placeholder": "Bağlantı Tipi seçiniz...",
                            "help_line": "",
                            "help_block": ""
                        },
                        "required_devices": {
                            "label": "Zorunlu Cihazlar",
                            "placeholder": "Cihazlar değeri yazınız...",
                            "help_line": "Bir Cihazlar değeri yazınız.",
                            "help_block": ""
                        },
                        "max_bw": {
                            "label": "Maksimum Bant Genişliği",
                            "placeholder": "Maks. Bant Genişliği değeri yazınız...",
                            "help_line": "Maksimum Bant Genişliği değeri yazınız.",
                            "help_block": ""
                        },
                        "energyConsumption": {
                            "label": "Maks. Enerji Tüketimi",
                            "placeholder": "Tüketim değeri yazınız...",
                            "help_line": "Maksimum Enerji Tüketimi değeri yazınız.",
                            "help_block": "",
                            "unit":"kWh"
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.policyName}}' isimli kullanıcı başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.policyName}}' isimli kullanıcı başarıyla oluşturulmuştur.",
                    },
                    "labels": {
                        "title_actions": "Başlık İşlemleri",
                        "path_actions": "Patika İşlemleri",
                        "no_mvtn": "-Sanal Ağ Yok-",
                        "no_link_type": "-Bağlantı Tipi Yok-"
                    }
                }
            },
            "access_control": {
                "list": {
                    "title": "Erişim Kontrol Politikaları",
                    "icon": "fa fa-universal-access",
                    "basePerm": "access_policy",
                    "perm": "#list",
                    "actions": {
                        "create_access_control_policy": {
                            "title": "Erişim Kontrol Politikası Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_access_control_policy": {
                            "title": "Erişim Kontrol Politikası Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_access_control_policy": {
                            "title": "Erişim Kontrol Politikası Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_access_control_policy": {
                            "title": "Erişim Kontrol Politikası Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "cat_name": "Politika Adı",
                        "definitions": "Tanımlar",
                        "rule_length": "Kural Sayısı",
                        "priority": "Öncelik",
                        "mvtnId": "Sanal Ağ",
                        "src": "Kaynak",
                        "dst": "Hedef"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.profileName}}' isimli Erişim Kontrol Politikasını silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.profileName}}' isimli Erişim Kontrol Politikası başarıyla silinmiştir!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "access_policy",
                    "modes": {
                        "edit": {
                            "title": "Erişim Kontrol Politikası Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Erişim Kontrol Politikası Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "policy_name": {
                            "label": "Politika Adı",
                            "placeholder": "Politika Adı yazınız...",
                            "help_line": "Tekil bir Politika Adı yazınız.",
                            "help_block": ""
                        },
                        "priority": {
                            "label": "Öncelik",
                            "placeholder": "Öncelik yazınız...",
                            "help_line": "Öncelik",
                            "help_block": ""
                        },
                        "virtualNetwork": {
                            "label": "Sanal Ağ",
                            "placeholder": "Sanal Ağ Seçiniz",
                            "help_line": "",
                            "help_block": ""
                        },
                        "allowed_nac_groups": {
                            "label": "İzinli NAC grupları",
                            "all": "Hepsine İzin Ver",
                            "custom": "Özel",
                            "placeholder": "NAC grup(ları) seçiniz.",
                            "help_line": "Priority",
                            "help_block": ""
                        },
                        "rule": "Kural",
                        "actions": {
                            "title": "İşlemler",
                            "add": "Kural Ekle",
                            "rule_title": "Kural#",
                            "delete": "Sil",
                            "rule": {
                                "name": "Adı",
                                "mode": "Kural Modu",
                                "access_all": "Serbest",
                                "block_all": "Kısıtlı",
                                "mac_params": "MAC Parametreleri (L2)",
                                "source": "Kaynak",
                                "target": "Hedef",
                                "app_name": "Uygulama Adı",
                                "ip_params": "IP Parametreleri (L3)",
                                "port_params": "Port Parametreleri (L4)",
                                "user_params": "Son Kullanıcılar",
                                "ip_loc": "IP Lokasyon",
                                "user_apps": "Son Kullanıcı Uygulaması",
                                "time": "Zaman",
                                "one_time": "Tek Sefer",
                                "start_time": "Başlangıç Tarihi",
                                "end_time": "Bitiş Tarihi",
                                "service_quality_rule": "Hizmet Kalitesi Politikası",
                                "protocol": "Protokol",
                                "vlan_tags": "VLAN Etiketi",
                                "mpls_tags": "MPLS Etiketi",
                                "inport_tags": "Inport",
                                "selection": "-Seçiniz-"
                            },
                            "nothing_selected": "Lütfen sol bölümden bir kural seçiniz veya yeni bir kural tanımlayınız."
                        }
                    },
                    "messages": {
                        "hasConflict": "Politika kaydedildi ancak kural çakışması var. Devam etmek istiyor musunuz?",
                        "conflictedRules": "Bu kuralın şu kurallarla çakışması var: ",
                        "last_rule": "Son kuralı silemezsiniz",
                        "service_action_list_server_error": "Servis Aksiyon Listesi Sunucudan çekilemedi.",
                        "save_success": "'{{dto.profileName}}' isimli kullanıcı başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.profileName}}' isimli kullanıcı başarıyla oluşturulmuştur.",
                        "ip_validation_fail": "IP alanı istenilen formatta değil. Lütfen IPleri 10.0.0.8/32, 10.0.0.7/32 şeklinde girin.",
                        "no_switch": "İlgili anahtarlayıcı, ağda bulunamadı."
                    },
                    "labels": {
                        "no_mvtn": "-Sanal Ağ Yok-"
                    }
                }
            },
            "preliminary_path_policies": {
                "list": {
                    "title": "Önetkin Patika Politikaları",
                    "icon": "icon-direction",
                    "basePerm": "pro_path_policy",
                    "perm": "#list",
                    "actions": {
                        "create_preliminary_path_policy": {
                            "title": "Önetkin Patika Politikası Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_preliminary_path_policy": {
                            "title": "Önetkin Patika Politikası Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#get",
                        },
                        "edit_preliminary_path_policy": {
                            "title": "Önetkin Patika Politikası Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#create",
                        },
                        "delete_preliminary_path_policy": {
                            "title": "Önetkin Patika Politikası Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        }
                    },
                    "fields": {
                        "name": "Politika Adı",
                        "status": "Durum",
                        "topology": "Ağ",
                        "source_host": "Kaynak Uç Birim",
                        "target_host": "Hedef Uç Birim",
                        "priority": "Öncelik",
                        "mvtn_name": "VTN Adı",
                        "mvtn_name_short": "VTN",
                        "service_quality_policy": "Hizmet K. Politikası",
                        "service_quality_policy_short": "Hizmet Kalitesi Politikası",
                        "start_date": "Başlangıç Zamanı",
                        "start_date_short": "Başlangıç",
                        "end_date": "Bitiş Zamanı",
                        "end_date_short": "Bitiş"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli Önetkin Patika Politikasını silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli Önetkin Patika Politikası başarıyla silinmiştir!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "pro_path_policy",
                    "modes": {
                        "edit": {
                            "title": "Önetkin Patika Politikası Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#create",
                        },
                        "create": {
                            "title": "Önetkin Patika Politikası Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "priority": {
                            "label": "Öncelik",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": ""
                        },
                        "topology": {
                            "label": "Ağ"
                        },
                        "name": {
                            "label": "Politika Adı",
                            "placeholder": "Önetkin Patika Adı yazınız...",
                            "help_line": "Tekil bir Önetkin Patika Adı yazınız.",
                            "help_block": ""
                        },
                        "service_quality_policy": {
                            "label": "Servis Kalite Politikası",
                            "help_block": "{{dto.name}} isimli ağa bağlı servis politikası bulunamadı"
                        },
                        "source_host": {
                            "label": "Kaynak Uç Birim",
                            "help_block": ""
                        },
                        "target_host": {
                            "label": "Hedef Uç Birim",
                            "help_block": ""
                        },
                        "start_date": {
                            "label": "Başlama Zamanı"
                        },
                        "end_date": {
                            "label": "Bitiş Zamanı"
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli politika başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli politika başarıyla oluşturulmuştur.",
                    },
                    "labels": {}
                }
            },
            "overlay": {
                "list": {
                    "title": "Bindirme Politikaları",
                    "icon": "fa fa-university",
                    "basePerm": "overlay_policy",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Bindirme Politikası Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Bindirme Politikası Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit": {
                            "title": "Bindirme Politikası Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete": {
                            "title": "Bindirme Politikası Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "policyName": "Politika Adı",
                        "accessPolicyAction": "Kural Modu",
                        "priority": "Öncelik",
                        "serviceAction": "Hizmet Kalitesi Politikası",
                        "details": "Detaylar",
                        "updateTime": "Güncelleme Zamanı",
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.policyName}}' isimli Bindirme Politikasını silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.policyName}}' isimli Bindirme Politikasını başarıyla silinmiştir!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "overlay_policy",
                    "modes": {
                        "edit": {
                            "title": "Bindirme Politikası Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Bindirme Politikası Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "title": "İşlemler",
                        "add": "Ekle",
                        "delete": "Sil",
                    },
                    "fields": {
                        "name": "Adı",
                        "mode": "Kural Modu",
                        "priority": "Politika Önceliği",
                        "access_all": "Serbest",
                        "block_all": "Kısıtlı",
                        "mac_params": "MAC Parametreleri (L2)",
                        "source": "Kaynak",
                        "target": "Hedef",
                        "ip_params": "IP Parametreleri (L3)",
                        "port_params": "Port Parametreleri (L4)",
                        "end_user": "Son Kullanıcı",
                        "end_user_application": "Son Kullanıcı Uygulaması",
                        "vlan_tag": "VLAN Etiketi",
                        "mpls_tag": "MPLS Etiketi",
                        "inport": "Inport",
                        "selection": "-Seçiniz-",
                        "time": "Zaman",
                        "one_time": "Tek Sefer",
                        "start_time": "Başlangıç Tarihi",
                        "end_time": "Bitiş Tarihi",
                        "service_quality_rule": "Hizmet Kalitesi Politikası",
                        "protocol": "Protokol"
                    },
                    "messages": {
                        "save_success": "'{{dto.policyName}}' isimli Bindirme Politikası başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.policyName}}' isimli Bindirme Politikası başarıyla oluşturulmuştur.",
                    },
                    "labels": {}
                }
            },
            "sfc": {
                "list": {
                    "title": "Servis Zincirleme Politikaları",
                    "icon": "fa fa-server",
                    "basePerm": "sfc",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Servis Zinciri Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Servis Zinciri Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "delete": {
                            "title": "Servis Zinciri Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "status": "Durum",
                        "sfcName": "Servis Zinciri Adı",
                        "type": "Tipi",
                        "chainList": "Zincir Listesi",
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.policyName}}' isimli Servis Zincirini silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.policyName}}' isimli Servis Zinciri başarıyla silinmiştir!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "sfc",
                    "modes": {
                        "create": {
                            "title": "Servis Zinciri Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "title": "İşlemler",
                        "add": "Ekle",
                        "delete": "Sil",
                    },
                    "fields": {
                        "name": "Servis Zinciri Adı",
                        "type": "Tipi",
                        "lb": "LB",
                        "firewall": "Firewall",
                        "dpi": "DPI"
                    },
                    "messages": {
                        "save_success": "'{{dto.policyName}}' isimli Servis Zinciri başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.policyName}}' isimli Servis Zinciri başarıyla oluşturulmuştur.",
                    },
                    "labels": {
                        "vnfChain": "VNF Zinciri"
                    }
                }
            },
            "emergency": {
                "list": {
                    "title": "Acil Durum Politikaları",
                    "icon": "fa fa-shield",
                    "basePerm": "emergency_pol",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Acil Durum Politikası Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Acil Durum Politikası Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit": {
                            "title": "Acil Durum Politikası Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete": {
                            "title": "Acil Durum Politikası Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "policyName": "Politika Adı",
                        "capacityLoss": "Kapasite Kaybı",
                        "trafficThreshold": "Trafik Eşiği Aşılması",
                        "routeTransfer": "Rota Aktarma",
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli Acil Durum Politikasını silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli Acil Durum Politikası başarıyla silinmiştir!",
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "emergency_pol",
                    "modes": {
                        "edit": {
                            "title": "Acil Durum Politikası Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Acil Durum Politikası Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "title": "İşlemler",
                        "add": "Ekle",
                        "delete": "Sil",
                    },
                    "fields": {
                        "name": "Politika İsmi",
                        "capacityLoss": "Toplam Kapasite Kaybı",
                        "trafficThreshold": "Trafik Eşiği Aşılması",
                        "actions": "Aksiyonlar",
                        "stopVNFList": "Durdurulacak VNF Tipleri",
                        "startVNFList": "Başlatılacak VNF Tipleri",
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli Acil Durum Politikası başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli Acil Durum Politikası başarıyla oluşturulmuştur.",
                    },
                    "labels": {
                        "route": "Rotalama tanımlarını diğer kümelere aktar."
                    }
                }
            }
        },
        "nac_management": {
            "title": "Ağ Erişim Yönetimi",
            "icon": "fa fa-key",
            "perm": "common:view",
            "server": {
                "list": {
                    "title": "AAA Sunucuları",
                    "icon": "fa fa-server",
                    "basePerm": "server",
                    "perm": "#list",
                    "actions": {
                        "create_aaaServer": {
                            "title": "AAA Sunucu Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_aaaServer": {
                            "title": "AAA Sunucu Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_aaaServer": {
                            "title": "AAA Sunucu Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_aaaServer": {
                            "title": "AAA Sunucu Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "list_aaaServer": {
                            "title": "",
                            "title_short": "Liste",
                            "icon": "fa fa-list",
                            "color": "blue-madison",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "name": "Sunucu Adı",
                        "userName": "Kullanıcı Adı",
                        "address": "Sunucu IP",
                        "protocol": "Protokol",
                        "deadTime": "Ölü Zaman",
                        "retransmission": "Tekrar İletim",
                        "port": "Port"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli serveri silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli server başarıyla silinmiştir.",
                    }
                },
                "edit": {
                    "basePerm": "server",
                    "modes": {
                        "edit": {
                            "title": "AAA Sunucu Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "AAA Sunucu Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        },

                    },
                    "actions": {},
                    "fields": {
                        "name": {
                            "label": "Sunucu Adı",
                            "placeholder": "Sunucu adı giriniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "userName": {
                            "label": "Kullanıcı Adı",
                            "placeholder": "Kullanıcı adı giriniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "password": {
                            "label": "Şifre",
                            "placeholder": "Şifresi giriniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "secretKey": {
                            "label": "Gizli Anahtar",
                            "placeholder": "Gizli anahtar giriniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "address": {
                            "label": "Sunucu IP Adresi",
                            "placeholder": "Sunucu IP adresi giriniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "port": {
                            "label": "Port",
                            "placeholder": "Port numarası giriniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "deadTime": {
                            "label": "Ölü Zaman",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "retransmission": {
                            "label": "Tekrar İletim",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "protocol": {
                            "label": "Protokol",
                            "placeholder": "Seçiniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "ldapUseSSL": {
                            "label": "LDAP over SSL",
                            "placeholder": "Seçiniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "usingDB": {
                            "label": "AAA Kaynağı",
                            "placeholder": "Seçiniz",
                            "help_line": "",
                            "help_block": "",
                            "true": "Dahili Veritabanı",
                            "false": "LDAP Sunucusu"
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli grubu başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli grup başarıyla oluşturulmuştur.",
                    },
                    "labels": {
                        "ldapSettings": "LDAP Ayarları",
                        "radiusSettings": "Radius Ayarları"
                    },
                },
                "create": {
                    "title": "AAA Sunucu Ekle",
                    "icon": "fa fa-plus",
                    "basePerm": "server",
                    "perm": "#create",
                }
            },
            "profiles": {
                "list": {
                    "title": "Erişim Grupları",
                    "icon": "fa fa-tags",
                    "basePerm": "nacgroup",
                    "perm": "#list",
                    "actions": {
                        "create_profile": {
                            "title": "Profil Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_profile": {
                            "title": "Profil Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_profile": {
                            "title": "Grup Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_profile": {
                            "title": "Grup Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "list_group": {
                            "title": "Bağlı Cihazları Listele",
                            "title_short": "Liste",
                            "icon": "fa fa-list",
                            "color": "blue-madison",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "status": "Durum",
                        "groupType": "Tipi",
                        "name": "Grup Adı",
                        "servicePolicy": "Kalite Politikası",
                        "accessPolicy": "Erişim Politikası",
                        "aaaServer": "Kimlik Denetimi",
                        "mvtnId": "Sanal Ağ",
                        "allowAutoBYOD": "BYOD",
                        "userNumber": "Çevrim İçi/Toplam Kişi Sayısı",
                        "userNumber_short": "Kişi",
                        "created": "Oluşturma",
                        "modified": "Değişiklik",
                        "priority": "Öncelik"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli grubu silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli grup başarıyla silinmiştir!"
                    }
                },
                "edit": {
                    "basePerm": "nacgroup",
                    "modes": {
                        "edit": {
                            "title": "Erişim Grubu Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Erişim Grubu Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "newPolicy": "Yeni Politika",
                        "newAAAServer": "Yeni AAA Sunucusu",
                        "sfcProfile": "Yeni SFC Grubu"
                    },
                    "fields": {
                        "groupType": {
                            "label": "Grup Tipi",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "status": {
                            "label": "Durumu",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "name": {
                            "label": "Grup Adı",
                            "placeholder": "Erişim Grubu adı giriniz...",
                            "help_line": "Tekil bir grup adı giriniz..",
                            "help_block": "",
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
                        "servicePolicy": {
                            "label": "Hizmet Kalitesi Politikası",
                            "placeholder": "Politika Seçiniz",
                            "help_line": "",
                            "help_block": ""
                        },
                        "accessPolicy": {
                            "label": "Erişim Kontrol Politikası",
                            "placeholder": "Politika Seçiniz",
                            "help_line": "",
                            "help_block": ""
                        },
                        "virtualNetwork": {
                            "label": "Sanal Ağ",
                            "placeholder": "Sanal Ağ Seçiniz",
                            "help_line": "",
                            "help_block": ""
                        },
                        "aaaServer": {
                            "label": "Kimlik Denetim Sunucusu",
                            "placeholder": "Kimlik Denetim Grubu Seçiniz",
                            "help_line": "",
                            "help_block": ""
                        },
                        "sfcProfile": {
                            "label": "SFC Grubu",
                            "placeholder": "SFC Grubu Seçiniz",
                            "help_line": "",
                            "help_block": ""
                        },
                        "allowAutoBYOD": {
                            "label": "Otomatik BYOD Ekleme",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                            "allow": "Tanınmayan BYOD cihazlara izin verilecektir",
                            "notAllow": "Tanınmayan BYOD cihazları kullanılamaz"
                        },
                        "isVerified": {
                            "label": "Doğrulama Gerekliliği"
                        },
                        "priority": {
                            "label": "Öncelik Seviyesi",
                            "placeholder": "--Seçiniz--",
                            "help_line": "",
                            "help_block": ""
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli grubu başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli grup başarıyla oluşturulmuştur.",
                    },
                    "labels": {
                        "no_mvtn": "-Sanal Ağ Yok-"
                    }
                },
                "create": {
                    "title": "Erişim Grubu Ekle",
                    "icon": "fa fa-plus",
                    "basePerm": "nacgroup",
                    "perm": "#create",
                }
            },
            "users": {
                "title": "Son Kullanıcılar",
                "list": {
                    "title": "Son Kullanıcılar",
                    "icon": "fa fa-users",
                    "basePerm": "nacusers",
                    "perm": "#list",
                    "actions": {
                        "create_user": {
                            "title": "Son Kullanıcı Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_user": {
                            "title": "Son Kullanıcı Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_user": {
                            "title": "Son Kullanıcı Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete_user": {
                            "title": "Son Kullanıcı Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        },
                        "set_pwd": {
                            "title": "Şifre Değiştir",
                            "title_short": "Şfr Dğştr",
                            "icon": "fa fa-key",
                            "color": "yellow-gold",
                            "perm": "common:view", //page handles the permission check
                        },
                        "device_list": {
                            "title": "Ağ Cihazları Listesi",
                            "title_short": "Cihazlar",
                            "icon": "fa fa-list",
                            "color": "blue-steel",
                            "perm": "#view",
                        },
                        "user_statistics": {
                            "title": "Son Kullanıcı İstatistikleri",
                            "title_short": "İstatistik",
                            "icon": "fa fa-pie-chart",
                            "color": "grey-mint",
                            "perm": "#view"
                        }
                    },
                    "fields": {
                        "status": "Durum",
                        "username": "Kullanıcı Adı",
                        "name": "Adı",
                        "surname": "Soyadı",
                        "email": "E-posta",
                        "created": "Eklenme",
                        "modified": "Değişiklik",
                        "lastAccessed": "Son Erişim",
                        "tcNo": "TC Kimlik No",
                        "accessDateStart": "İlk Erişebilirlik Tarihi",
                        "accessDateEnd": "Son Erişebilirlik Tarihi",
                        "userType": "Kullanıcı Tipi",
                        "nacGroup": "Erişim Grubu",
                        "byodGroup": "BYOD Grubu",
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.username}}' isimli son kullanıcıyı silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.username}}' isimli son kullanıcı başarıyla silinmiştir!",
                    }
                },
                "search": {
                    "title": "Son Kullanıcı Sorgulama",
                    "icon": "fa fa-search",
                    "basePerm": "nacusers",
                    "perm": "#list",
                    "searchPart": {
                        "title": "Sorgu Kriterleri",
                        "notificationMessage": "Kullanıcı detaylarını öğrenmek için IP adresi ile bu ekrandan sorgulama yapabilirsiniz",
                        "fields": {
                            "ip": {
                                "label": "IP Adresi",
                                "placeholder": "IP Adresi Giriniz",
                            },
                        },
                        "searchButton": "Sorgula"
                    },
                    "resultPart": {
                        "title": "Sorgu Sonucu",
                        "fields": {
                            "userName": "Kullanıcı Adı",
                            "nacGroup": "NAC Grubu",
                            "device": "Kullanılan Cihaz",
                            "switch": "Bağlı Anahtarlayıcı",
                            "status": "Durumu",
                            "name": "Ad",
                            "surname": "Soyad"
                        },
                        "buttons": {
                            "editUser": "Kullanıcı Düzenle",
                            "editNacGroup": "NAC Grubu Düzenle",
                            "editDevice": "Cihazı Düzenle",
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
                        "search_success": "Kullanıcı bulundu",
                        "search_fail": "Kullanıcı bulunamadı",
                    }
                },

                "user_statistics": {
                    "title": "Son Kullanıcı İstatistikleri",
                    "icon": "fa fa-pie-chart",
                    "basePerm": "nacusers",
                    "perm": "#edit",
                    "fields": {
                        "userType": {
                            "label": "Kullanıcı Tipi"
                        },
                        "username": {
                            "label": "Kullanıcı Adı"
                        },
                        "name": {
                            "label": "Adı"
                        },
                        "surname": {
                            "label": "Soyadı"
                        },
                        "email": {
                            "label": "E-posta Adresi"
                        },
                        "securityLevel": {
                            "label": "Güvenlik Seviyesi"
                        },
                        "statistics_data": {
                            "label": "Veri Kullanımı"
                        },
                        "statistics_protocol": {
                            "label": "Protokol Kullanımı"
                        },
                        "statistics_chart": {
                            "label": "Kullanıcı Hareketleri"
                        },
                        "srcIP": {
                            "label": "Kaynak IP"
                        },
                        "dstIP": {
                            "label": "Hedef IP"
                        },
                        "down": {
                            "label": "İndirme"
                        },
                        "direction": {
                            "label": "İndir/Yükle"
                        },
                        "up": {
                            "label": "Yükleme"
                        },
                        "bytes": {
                            "label": "Bayt"

                        },
                        "lifeTime": {
                            "label": "Ömür (sn)"

                        },
                        "packets": {
                            "label": "Paket"

                        },
                        "rate": {
                            "label": "Hız"
                        },
                        "protocol": {
                            "label": "Protocol"
                        },
                        "table": {
                            "label": "Tablo"
                        },
                        "graph": {
                            "label": "Grafiksel"
                        }
                    },
                    "actions": {
                        "date": {
                            "title": "1 Gün",
                            "title_short": "1 Gün",
                            "isDropdown": true,
                            "icon": "fa fa-clock-o",
                            "color": "blue-steel",
                        },
                        "onehour": {
                            "title": "1 Saat",
                            "title_short": "1 Saat",
                        },
                        "twohours": {
                            "title": "2 Saat",
                            "title_short": "2 Saat",
                        },
                        "fourhours": {
                            "title": "4 Saat",
                            "title_short": "4 Saat",
                        },
                        "twelvehours": {
                            "title": "12 Saat",
                            "title_short": "12 Saat",
                        },
                        "oneday": {
                            "title": "1 Gün",
                            "title_short": "1 Gün",
                        },
                        "threedays": {
                            "title": "3 Gün",
                            "title_short": "3 Gün",
                        },
                        "oneweek": {
                            "title": "1 Hafta",
                            "title_short": "1 Hafta",
                        },
                        "graphType": {
                            "title": "bayt",
                            "title_short": "bayt",
                            "isDropdown": true,
                            "icon": "fa fa-bars",
                            "color": "green",
                        },
                        "byte": {
                            "title": "bayt",
                            "title_short": "bayt",
                        },
                        "life": {
                            "title": "ömür",
                            "title_short": "ömür",
                        },
                        "packets": {
                            "title": "paket",
                            "title_short": "paket",
                        },
                        "rate": {
                            "title": "hız",
                            "title_short": "hız",
                        }
                    },
                    "details": "Ayrıntılar…",
                    "history": "Kullanıcı Hareketleri",
                    "duration": {
                        "title": {
                            "last": "Son"
                        },
                        "display": {
                            "minute": "Dakika",
                            "hour": "Saat",
                            "day": "Gün",
                            "week": "Hafta"
                        }
                    },
                    "exporting": {
                        "contextButtonTitle": "Grafik içerik menüsü",
                        "printChart": "Yazıcıya gönder",
                        "downloadJPEG": "JPEG olarak indir",
                        "downloadPDF": "PDF olarak indir",
                        "downloadPNG": "PNG olarak indir",
                        "downloadSVG": "SVG olarak indir",
                        "filename": "user_statistics"
                    },
                    "ajax": {
                        "error": "BİR HATA OLUŞTU"
                    },
                    "chart": {
                        "data": {
                            "title": "Veri Kullanımı",
                            "subTitle": "Yükleme | İndirme",
                            "ratio": "Oran",
                            "download": "İndirme",
                            "upload": "Yükleme"
                        },
                        "noData": "Veri Yok",
                        "protocol": {
                            "title": "Protokol Kullanımı",
                            "subTitle": "TCP | UDP",
                            "ratio": "Oran",
                            "tcp": "TCP",
                            "udp": "UDP",
                            "upTcp": "Yükleme TCP",
                            "downTcp": "İndirme TCP",
                            "upUdp": "Yükleme UDP",
                            "downUdp": "İndirme UDP",
                        },
                        "x_axis": "Zaman",
                        "y_axis": "Kullanım (%)",
                        "resetZoom": "Zoom'u Sıfırla",
                        "date": "Tarih",
                        "bytes": {
                            "title": "Bayt Grafiği",
                            "upload": "Yükleme Miktarı",
                            "download": "İndirme Miktarı"
                        },
                        "life": {
                            "title": "Ömür Grafiği",
                            "upload": "Yükleme Ömrü",
                            "download": "İndirme Ömrü"
                        },
                        "packets": {
                            "title": "Paket Grafiği",
                            "upload": "Yükleme Paketleri",
                            "download": "İndirme Paketleri"
                        },
                        "rate": {
                            "title": "Hız Grafiği",
                            "upload": "Yükleme Hızı",
                            "download": "İndirme Hızı"
                        },
                        "totalBytes": {
                            "upload": "Yükleme",
                            "download": "İndirme"
                        }
                    }
                },
                "create": {
                    "title": "Son Kullanıcı Ekle",
                    "icon": "fa fa-plus",
                    "basePerm": "nacusers",
                    "perm": "#create",
                },
                "change_pwd": {
                    "title": "Şifre Değiştir",
                    "icon": "fa fa-key",
                    "basePerm": "nacusers",
                    "perm": "#change_pwd",
                    "actions": {},
                    "fields": {
                        "currentPassword": {
                            "label": "Mevcut Şifreniz",
                            "placeholder": "Mevcut şifrenizi yazınız...",
                            "help_line": "",
                            "help_block": "",
                        },
                        "newPassword": {
                            "label": "Yeni Şifreniz",
                            "placeholder": "Yeni şifrenizi yazınız...",
                            "help_line": "En az 6 karakterden oluşan bir şifre yazınız.",
                            "help_block": "",
                        },
                        "newPasswordRetype": {
                            "label": "Yeni Şifreniz (Tekrar)",
                            "placeholder": "Yeni şifrenizi tekrar yazınız...",
                            "help_line": "Güvenlik amacıyla şifreyi tekrar yazınız.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "change_success": "Şifreniz başarıyla güncellenmiştir.",
                        "passwords_mismatch": "Yeni şifre girişleriniz birbiri ile uyuşmuyor, lütfen tekrar giriş yapınız.",
                    },
                    "labels": {}
                },
                "set_pwd": {
                    "title": "Şifre Tanımla",
                    "icon": "fa fa-key",
                    "basePerm": "nacusers",
                    "perm": "#set_pwd",
                    "actions": {},
                    "fields": {
                        "username": {
                            "label": "Kullanıcı Adı",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "newPassword": {
                            "label": "Yeni Şifre",
                            "placeholder": "Yeni şifreyi yazınız...",
                            "help_line": "En az 6 karakterden oluşan bir şifre yazınız.",
                            "help_block": "",
                        },
                        "newPasswordRetype": {
                            "label": "Yeni Şifre (Tekrar)",
                            "placeholder": "Yeni şifreyi tekrar yazınız...",
                            "help_line": "Güvenlik amacıyla şifreyi tekrar yazınız.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "change_success": "'{{dto.username}}' isimli son kullanıcının şifresi başarıyla güncellenmiştir.",
                        "passwords_mismatch": "Yeni şifre girişleriniz birbiri ile uyuşmuyor, lütfen tekrar giriş yapınız.",
                    },
                    "labels": {}
                },
                "change_status": {
                    "title": "Durum Değiştir",
                    "icon": "fa fa-eye-slash",
                    "basePerm": "nacusers",
                    "perm": "#edit", //#change_status
                    "actions": {},
                    "fields": {},
                    "messages": {
                        "deactivate_confirm": "'{{dto.username}}' isimli son kullanıcıyı engellemek istediğinize emin misiniz?",
                        "activate_confirm": "'{{dto.username}}' isimli son kullanıcıyı aktive etmek istediğinize emin misiniz?",
                        "success": "'{{dto.username}}' isimli son kullanıcını durumu başarıyle değiştirilmiştir.",
                        "deactivate_success": "'{{dto.username}}' isimli son kullanıcını başarıyle engellenmiştir.",
                        "activate_success": "'{{dto.username}}' isimli son kullanıcını başarıyle aktive edilmiştir.",
                        "no_user_info": "Seçilen uç birim'e ait kullanıcı verileri bulunmamaktadır.",
                        "no_ip_info": "Seçilen uç birim'e ait IP adresi bulunmamaktadır."
                    },
                    "labels": {}
                },
            },
            "nac_user_app": {
                "list": {
                    "title": "Son Kullanıcı Uygulamaları",
                    "icon": "fa fa-server",
                    "basePerm": "end_user_app",
                    "perm": "#list",
                    "actions": {
                        "create_nac_user_app": {
                            "title": "Son Kullanıcı Uygulaması Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit_nac_user_app": {
                            "title": "Son Kullanıcı Uygulaması Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_nac_user_app": {
                            "title": "Son Kullanıcı Uygulaması Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "nac_app_name": "Son K. Uygulama Adı",
                        "ports": "Portlar",
                        "priority": "Öncelik",
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli Son Kullanıcı Uygulamasını silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli Son Kullanıcı Uygulaması başarıyla silinmiştir!",
                    }
                },
                "edit": {
                    "basePerm": "end_user_app",
                    "modes": {
                        "edit": {
                            "title": "Son Kullanıcı Uygulaması Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit"
                        },
                        "create": {
                            "title": "Son Kullanıcı Uygulaması Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create"
                        }
                    },
                    "actions": {},
                    "fields": {
                        "app_name": {
                            "label": "Uygulama Adı",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": ""
                        },
                        "priority": {
                            "label": "Öncelik",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": ""
                        },
                        "ports": {
                            "label": "IP:Port Tanımları",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "Her satırda bir port bilgisi olacak şekilde giriş yapınız. '*' " +
                            "karakteri kullanarak tüm ip veya portlar için tanım yapabilirsiniz. Ör: 192.168.1.1:* " +
                            "veya *:80 veya 192.168.1.1:80"
                        },
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli Son Kullanıcı Uygulaması başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli Son Kullanıcı Uygulaması başarıyla oluşturulmuştur.",
                        "invalid_ip": "ip adresi hatalıdır"
                    },
                    "labels": {
                        "info": "Her satıra tek bir port yazınız."
                    }
                }
            },
            "devices": {
                "list": {
                    "title": "Ağ Envanteri",
                    "icon": "fa fa-desktop",
                    "basePerm": "nac_devices",
                    "perm": "#list",
                    "autoDeviceName": "Otomatik BYOD Cihazı",
                    "actions": {
                        "create_device": {
                            "title": "Cihaz Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_device": {
                            "title": "Cihaz Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_device": {
                            "title": "Cihaz Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_device": {
                            "title": "Cihaz Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "list_access_ports": {
                            "title": "Erişim Portlarını Listele",
                            "title_short": "Erişim Portları",
                            "icon": "fa fa-server",
                            "color": "blue-steel",
                            "perm": "nac_access_ports:list && nac_access_ports:view"
                        },
                    },
                    "fields": {
                        "status": "Durum",
                        "name": "Cihaz Adı",
                        "securityLevel": "Güvenlik Seviyesi",
                        "securityLevel_short": "GS",
                        "created": "Oluşturma",
                        "modified": "Değişiklik",
                        "mac": "Mac Adresi",
                        "type": "Tipi",
                        "ip": "IP Adresi",
                        "nacGroup": "Kimlik Denetimi",
                        "isExempt": "Kimlik Denetim Dışı",
                        "isExempt_short": "KDD",
                        "mvtnId": "Sanal Ağ"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli cihazı silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli cihaz başarıyla silinmiştir!"
                    }
                },
                "edit": {
                    "title": "Cihaz Düzenle",
                    "icon": "fa fa-pencil",
                    "perm": "#edit",
                    "basePerm": "nac_devices",
                    "modes": {
                        "edit": {
                            "title": "Cihaz Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Cihaz Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {
                        "create_access_port": {
                            "title": "Erişim Portu Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_access_port": {
                            "title": "Erişim Portu Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_access_port": {
                            "title": "Erişim Portu Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_access_port": {
                            "title": "Erişim Portu Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "edit_device": {
                            "title": "Kullanıcı Cihazını Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_device": {
                            "title": "Kullanıcı Cihazını Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },

                    },
                    "fields": {
                        "switchName": {
                            "label": "Anahtarlayıcı Adı"
                        },
                        "portNumbers": {
                            "label": "Erişim Portları",
                            "help_line": "Erişim Portlarını Seçiniz"
                        },
                        "status": {
                            "label": "Cihaz Durumu",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "name": {
                            "label": "Cihaz Adı",
                            "placeholder": "Cihaz adı giriniz...",
                            "placeholder2": "Cihaz adı seçiniz...",
                            "help_line": "Tekil bir Cihaz adı giriniz..",
                            "help_block": "",
                        },
                        "mac": {
                            "label": "MAC Adresi",
                            "placeholder": "MAC Adresi giriniz...",
                            "placeholder2": "MAC adresi seçiniz...",
                            "help_line": "",
                            "help_block": "",
                        },
                        "ipv4": {
                            "label": "IPv4 Adresi",
                            "placeholder": "IPv4 Adresi giriniz...",
                            "help_line": "Varsa IPv4 adresini giriniz..",
                            "help_block": "",
                        },
                        "ipv6": {
                            "label": "IPv6 Adresi",
                            "placeholder": "IPv6 Adresi giriniz...",
                            "help_line": "Varsa IPv6 adresini giriniz..",
                            "help_block": "",
                        },
                        "type": {
                            "label": "Cihaz Tipi",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": "",
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
                        "userList": {
                            "label": "Son Kullanıcılar",
                            "placeholder": "Cihazı kullanma yetkisi olan son kullanıcılar.",
                            "help_line": "",
                            "help_block": "",
                            "selectableHeader": "Seçilebilir S. Kullanıcılar",
                            "selectionHeader": "Yetkili S. Kullanıcılar",
                        },
                        "nacGroup": {
                            "label": "Erişim Grup",
                            "placeholder": "Seçiniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "has8021xSupport": {
                            "label": "802.1x",
                            "placeholder": "Seçiniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "byodNacGroup": {
                            "label": "BYOD Erişim Grubu",
                            "placeholder": "Seçiniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "username": {
                            "label": "Kullanıcı Adı",
                        },
                        "isExempt": {
                            "label": "Kimlik Denetim Dışı Cihaz",
                            "help_line": "",
                            "help_block": ""
                        },
                        "virtual_network": {
                            "label": "Sanal Ağ",
                            "placeholder": "Sanal Ağ Seçiniz",
                            "help_line": "",
                            "help_block": "",
                        },
                        "isBYOD": {
                            "label": "BYOD Cihazı",
                            "help_line": "",
                            "help_block": ""
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli cihaz başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli cihaz başarıyla oluşturulmuştur.",
                        "select_device_warning": "Önce anahtarlayıcı adı ve erişim portu seçiniz",
                        "delete_confirm": "Cihazı çıkarmak istediğinizden emin misiniz?",
                        "delete_success": "Cihaz başarıyla güncellenmiştir.",
                        "empty_table": "Veri yok",
                    },
                    "labels": {
                        "accessPortWarning": "Önce bir anahtarlayıcı seçiniz",
                        "exemptedDevice": "Kimlik Dışı Cihaz",
                        "no_mvtn": "-Sanal Ağ Yok-"
                    }
                },
                "create": {
                    "title": "Cihaz Ekle",
                    "icon": "fa fa-plus",
                    "basePerm": "nac_devices",
                    "perm": "#create",
                }
            },
            "devicesOfUser": {
                "list": {
                    "title": "Kullanıcısının Cihazları",
                    "icon": "fa fa-desktop",
                    "basePerm": "nac_devices",
                    "perm": "#list",
                    "actions": {
                        "create_device": {
                            "title": "Kullanıcı Cihazı Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "back": {
                            "title": "Geri",
                            "title_short": "Geri",
                            "icon": "fa fa-arrow-left",
                            "color": "red-haze",
                        },
                        "edit_device": {
                            "title": "Kullanıcı Cihazını Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_device": {
                            "title": "Cihazı Kullanıcıdan Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                    },
                    "fields": {
                        "name": "Cihaz Adı",
                        "mac": "MAC Adresi",
                        "created": "Oluşturma Tarihi",
                        "modified": "Değişiklik Tarihi",
                        "has8021xSupport": "802.1x",
                        "byodNacGroup": "BYOD Erişim Grubu",
                        "isExempt": "Kimlik Denetim Dışı Cihaz",
                        "isBYOD": "BYOD Cihazı"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.nacDevice.name}}' isimli cihazı bu kullanıcıdan silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.nacDevice.name}}' isimli cihaz bu kullanıcıdan alınmıştır!"
                    }
                },
                "edit": {
                    "title": "Kullanıcı Cihazı Düzenle",
                    "icon": "fa fa-pencil",
                    "perm": "#edit",
                    "basePerm": "nac_devices",
                    "modes": {
                        "edit": {
                            "title": "Kullanıcı Cihazı Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Kullanıcı Cihazı Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "name": {
                            "label": "Cihaz Adı",
                        },
                        "mac": {
                            "label": "MAC Adresi",
                        },
                        "nacGroup": {
                            "label": "Erişim Grup",
                        },
                        "has8021xSupport": {
                            "label": "802.1x",
                            "help_line": "",
                            "help_block": "",
                        },
                        "byodNacGroup": {
                            "label": "BYOD Erişim Grubu",
                            "help_line": "",
                            "help_block": "",
                        },
                        "isBYOD": {
                            "label": "BYOD Cihazı",
                            "help_line": "",
                            "help_block": ""
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.nacDevice.name}}' isimli cihaz başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.nacDevice.name}}' isimli cihaz başarıyla oluşturulmuştur.",
                    }
                },
            },
            "accessPorts": {
                "list": {
                    "title": "Erişim Portları",
                    "icon": "fa fa-server",
                    "basePerm": "nac_access_ports",
                    "perm": "#list",
                    "actions": {
                        "create_access_port": {
                            "title": "Erişim Portu Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "view_access_port": {
                            "title": "Erişim Portu Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view"
                        },
                        "edit_access_port": {
                            "title": "Erişim Portu Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_access_port": {
                            "title": "Erişim Portu Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "status": "Durum",
                        "switchId": "Anahtarlayıcı",
                        "portNumber": "Port"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.switchId}}:{{dto.portNumber}}' erişim portunu silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.switchId}}:{{dto.portNumber}}' erişim portu başarıyla silinmiştir!"
                    }
                },
                "edit": {
                    "basePerm": "nac_access_ports",
                    "modes": {
                        "edit": {
                            "title": "Erişim Portu Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Erişim Portu Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "status": {
                            "label": "Erişim Portu Durumu",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": "",
                        },
                        "switchId": {
                            "label": "Anahtarlayıcı",
                            "placeholder": "--seçiniz--",
                            "help_line": "Lütfen listeden bir anahtarlayıcı seçiniz",
                            "help_block": "",
                        },
                        "portNumber": {
                            "label": "Port",
                            "placeholder": "--seçiniz--",
                            "help_line": "Lütfen bir port seçiniz.",
                            "help_block": "",
                        }
                    },
                    "messages": {
                        "save_success": "'{{dto.switchId}}:{{dto.portNumber}}' erişim portu başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.switchId}}:{{dto.portNumber}}' erişim portu başarıyla oluşturulmuştur.",
                    },
                    "labels": {}
                },
                "create": {
                    "title": "Erişim Portu Ekle",
                    "icon": "fa fa-plus",
                    "basePerm": "nac_access_ports",
                    "perm": "#create",
                }
            },
        },
        "naclogin": {
            "title": "Son Kullanıcı Girişi",
            "info": "Ağ erişimi sağlamak için lütfen giriş yapınız.",
            "logo": "./assets/img/arg.png",
            "icon": "fa fa-signin",
            "welcome": "Hoş Geldiniz",
            "success": "Giriş Başarılı",
            "actions": {
                "login": {
                    "title": "Giriş",
                    "title_short": "Giriş",
                    "icon": "fa fa-login",
                    "color": "",
                    //"perm": "#login"
                },
                "logout": {
                    "title": "Çıkış",
                    "title_short": "Çıkış",
                    "icon": "fa fa-logout",
                    "color": "",
                }
            },
            "fields": {
                "username": {
                    "label": "Kullanıcı Adı",
                    "placeholder": "Kullanıcı Adı",
                    "help_line": "",
                    "help_block": "",
                },
                "password": {
                    "label": "Şifre",
                    "placeholder": "Şifre",
                    "help_line": "",
                    "help_block": "",
                },
                "rememberme": {
                    "label": "Beni hatırla",
                    "label_icon": "<i class='fa fa-bars'></i>",
                    "placeholder": "",
                    "help_line": "",
                    "help_block": "",
                    "onText": "&nbsp;&nbsp;&nbsp;", //"Evet",
                    "offText": "&nbsp;&nbsp;&nbsp;", //"Hayır",
                    "onLabel": "Beni hatırla",
                    "offLabel": "Beni hatırlama",
                }
            },
            "messages": {
                "login_failure": "Kimlik denetimi başarısız, lütfen tekrar deneyiniz."
            },
            "labels": {
                "title": "ProgNET",
                "motto": "Akıllı Ağ Teknolojileri.",
                "contact_us": "İLETİŞİM",
                "timepassed": "Geçen zaman",
                "lastAccess": "Son erişim zamanı",
                "accessTimeEnd": "Son erişim izin zamanı"
            },
            "register": "Kayıt Ol",
            "remind": "Hatırlat",
            "guest": {
                "title": "Misafir Kayıt",
                "icon": "fa fa-user-plus",
                "fields": {
                    "email": {
                        "label": "E-posta Adresi",
                        "placeholder": "E-posta adresini yazınız"
                    },
                    "phoneNumber": {
                        "label": "Cep Telefonu",
                        "placeholder": "Cep telefon numaranızı yazınız",
                        "help_line": "DİKKAT: Şifreniz cep telefonunuza SMS ile iletilecektir. Lütfen doğru yazdığınıza emin olunuz",
                    },
                    "tcno": {
                        "label": "TC Kimlik No",
                        "placeholder": "TC kimlik numaraınız yazınız"
                    },
                    "name": {
                        "label": "Ad",
                        "placeholder": "Adınızı yazınız"
                    },
                    "surname": {
                        "label": "Soyad",
                        "placeholder": "Soyadınızı yazınız"
                    },
                },
                "messages": {
                    "sms_sent": "'{{dto.phoneNumber}}' numarasına şifre SMS olarak yollandı.",
                }
            },
            "remindPassword": {
                "title": "Şifre Hatırlat",
                "icon": "fa fa-question-circle",
                "fields": {
                    "emailorphone": {
                        "label": "E-posta Adresi/ Cep Telefonu",
                        "placeholder": "E-posta adresinizi/cep telefonunuzu yazınız",
                        "help_line": "Kayıt olurken kullandığınız E-posta adresinizi veya cep telefonu numaranızı giriniz. Yeni şifreniz SMS ile cep telefonunuza iletilecektir",
                    },
                },
                "messages": {
                    "password_sent": "'{{dto.name}}' isimli misafir başarıyla oluşturulmuştur.",
                }
            }
        },
        "network_function_virtualization": {
            "title": "Ağ Fonksiyonları Sanallaştırma",
            "icon": "fa fa-bandcamp",
            "perm": "common:view",
            "network_service_decriptor": {
                "list": {
                    "title": "Ağ Servisi Tanımlayıcı",
                    "icon": "fa fa-cubes",
                    "basePerm": "nfva_nsd",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Ağ Servisi Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Ağ Servisi Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit": {
                            "title": "Ağ Servisi Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit",
                        },
                        "delete": {
                            "title": "Ağ Servisi Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "start": {
                            "title": "Ağ Servisini Başlat",
                            "title_short": "Başlat",
                            "icon": "fa fa-play",
                            "color": "yellow-gold",
                            "perm": "#edit",
                        },
                        "stop": {
                            "title": "Ağ Servisini Durdur",
                            "title_short": "Durdur",
                            "icon": "fa fa-stop",
                            "color": "red-intense",
                            "perm": "#edit",
                        },
                        "vnf": {
                            "title": "Sanal Ağ Özellikleri",
                            "title_short": "Sanal Ağ",
                            "icon": "fa fa-cogs",
                            "color": "purple-studio",
                            "perm": "#edit",
                        }
                    },
                    "fields": {
                        "name": "Adı",
                        "vendor": "Ürün Sağlayıcı",
                        "nsdVersion": "Sürüm"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli Ağ Servisini silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli Ağ Servisi başarıyla silinmiştir!",
                        "stop_confirm": "'{{dto.name}}' isimli ağ servisini durdurmak istediğinize emin misiniz?",
                        "stop_success": "'{{dto.name}}' isimli ağ servisi durduruldu"
                    }
                },
                "edit": {
                    "basePerm": "nfva_nsd",
                    "modes": {
                        "edit": {
                            "title": "Ağ Servisi Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Ağ Servisi Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Ağ Servisi Görüntüle",
                            "icon": "fa fa-eye",
                            "perm": "#view",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "networkDecriptor": "Ağ Servis Tanımı (JSON)",
                        "upload": "Dosya Yükle",
	                    "preview" : "Ön İzleme",
	                    "rawView" : "Ham Data"
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli ağ servisi başarıyla güncellenmiştir.",
                        "create_success": "Ağ servisi başarıyla oluşturulmuştur.",
                        "file_type_error": "JSON format hatası. Sadece json formatında text dosyaları yükleyiniz"
                    }
                },
                "start": {
                    "perm": "nfva_nsr",
                    "fields": {
                        "name": "AST Adı",
                        "openstackvim": "Openstack VIM",
                        "zone": "Zone",
                        "vnfdName": "VNFD Adı",
                        "advancedView": "Gelişmiş Seçim",
                        "basicView": "Temel Seçim"
                    },
                    "messages": {
                        "start_success": "'{{dto.name}}' isimli ağ servisi başlatıldı.",
                    }
                }
            },
            "network_service_record": {
                "list": {
                    "title": "Ağ Servis Kaydı",
                    "icon": "fa fa-cubes",
                    "basePerm": "nfva_nsr",
                    "perm": "#list",
                    "actions": {
                        "delete": {
                            "title": "Ağ Servisi Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "start": {
                            "title": "Ağ Servisini Başlat",
                            "title_short": "Başlat",
                            "icon": "fa fa-play",
                            "color": "yellow-gold",
                            "perm": "#edit",
                        },
                        "stop": {
                            "title": "Ağ Servisini Durdur",
                            "title_short": "Durdur",
                            "icon": "fa fa-stop",
                            "color": "red-intense",
                            "perm": "#edit",
                        },
                        "view": {
                            "title": "Ağ Servisi Detayı",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "blue",
                            "perm": "#edit",
                        }
                    },
                    "fields": {
                        "name": "Adı",
                        "state": "Durumu",
                        "task": "Görevi",
                        "version": "Sürümü",
	                    "timestamp" : "Kayıt Tarihi"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli ağ servis kaydını silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli ağ servis kaydı başarıyla silinmiştir!",
                        "start_confirm": "'{{dto.name}}' isimli ağ servis kaydı başlatılsın mı?",
                        "start_success": "'{{dto.name}}' isimli ağ servis kaydı başlatıldı",
                        "stop_confirm": "'{{dto.name}}' isimli ağ servis kaydı durdurulsun mu?",
                        "stop_success": "'{{dto.name}}' isimli ağ servis kaydı durduruldu"
                    }
                },
                "view": {
                    "title": "Ağ Servis Kaydı",
                    "icon": "fa fa-eye",
                    "basePerm": "nfva_nsr",
                    "perm": "#view",
                    "fields": {
                        "networkDecriptor": "Ağ Servis Kaydı (JSON)",
	                    "preview": "Ön İzleme",
	                    "rawView": "Ham Data"
                    }
                }
            },
            "virtual_network_function": {
                "list": {
                    "title": "Sanal Ağ Fonksiyonu",
                    "icon": "fa fa-cogs",
                    "basePerm": "nfva_nsr",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Sanal Ağ Fonksiyonu Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view": {
                            "title": "Sanal Ağ Fonksiyonu Detayları",
                            "title_short": "Detaylar",
                            "icon": "fa fa-eye",
                            "color": "blue",
                            "perm": "#view",
                        },
                        "delete": {
                            "title": "Sanal Ağ Fonksiyonu Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                        "nsr": {
                            "title": "Ağ Servis Kayıtları",
                            "title_short": "Kayıtlar",
                            "icon": "fa fa-cubes",
                            "color": "purple-studio",
                            "perm": "#edit",
                        }
                    },
                    "fields": {
                        "name": "Adı",
                        "vendor": "Ürün Sağlayıcı",
                        "version": "Sürüm",
                        "type": "Tip",
	                    "vnfType" : "Tip",
	                    "vnfVersion" : "Sürüm"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli sanal ağ fonksiyonunu silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli sanal ağ fonksiyonu başarıyla silinmiştir!",
                    }
                },
                "edit": {
                    "basePerm": "nfva_nsr",
                    "modes": {
                        "edit": {
                            "title": "Sanal Ağ Fonksiyonu Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Sanal Ağ Fonksiyonu Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "networkDecriptor": "Sanal Ağ Fonksiyonu Tanımı (JSON)",
                        "upload": "Dosya Yükle",
	                    "preview": "Ön İzleme",
	                    "rawView": "Ham Data"
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli sanal ağ fonksiyonu başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli sanal ağ fonksiyonu başarıyla oluşturulmuştur.",
                    }
                }
            },
            "vnf_instance": {
                "list": {
                    "title": "VNF Instance Listesi",
                    "icon": "fa fa-cubes",
                    "basePerm": "nfva_nsr",
                    "perm": "#list",
                    "actions": {
                        "view": {
                            "title": "VNF Instance Tanımı",
                            "title_short": "VNF Instance Tanımı",
                            "icon": "fa fa-eye",
                            "color": "blue",
                            "perm": "#view",
                        },
                        "failover": {
                            "title": "Failover tanımlama",
                            "title_short": "Failover Tanımla",
                            "icon": "fa fa-retweet",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "failover_cancel": {
                            "title": "Failover İptal Etme",
                            "title_short": "Failover İptal",
                            "icon": "fa fa-times-circle",
                            "color": "red-sunglo",
                            "perm": "#view",
                        },
                        "instance_start": {
                            "title": "Instance'ı Başlat",
                            "title_short": "Başlat",
                            "icon": "fa fa-play",
                            "color": "green-meadow",
                            "perm": "#view",
                        },
                        "instance_stop": {
                            "title": "Instance'ı Durdur",
                            "title_short": "Durdur",
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
                            "title": "VNF Instance Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        },
                    },
                    "fields": {
                        "name": "VNF Instance Adı",
                        "status": "Durumu",
                        "settings": "Failover Ayarları",
                        "VIM": "VIM",
                        "ip": "IP",
                        "failoverIp": "Failover Sunucu Ip: "
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.vnfciHostname}}' isimli VNF Instance'ı silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.vnfciHostname}}' isimli VNF Instance başarıyla silinmiştir!",
                        "failover_cancel": "'{{dto.vnfciHostname}}' için tanımlı olan failover ayarlarını silmek istediğinize emin misiniz?",
                        "failover_cancel_success": "'{{dto.vnfciHostname}}' için tanımlı olan failover ayarları başarıyla silinmiştir!",
                        "instance_start": "'{{dto.vnfciHostname}}' isimli VNF Instance'ı başlatmak istediğinize emin misiniz?",
                        "instance_start_success": "'{{dto.vnfciHostname}}' isimli VNF Instance başarıyla başlatılmıştır!",
                        "instance_stop": "'{{dto.vnfciHostname}}' isimli VNF Instance'ı durdurmak istediğinize emin misiniz?",
                        "instance_stop_success": "'{{dto.vnfciHostname}}' isimli VNF Instance başarıyla durdurulmuştur!",
                    }
                },
                "edit": {
                    "basePerm": "nfva_nsr",
                    "modes": {
                        "edit": {
                            "title": "Failover Tanımlama",
                            "icon": "fa fa-retweet",
                            "perm": "#edit",
                        },
                    },
                    "fields": {
                        "vnf_name": "VNF Instance Adı",
                        "failover_ip": "Failover Sunucu IP",
                    },
                    "messages": {
                        "create_success": "'{{dto.vnfciHostname}}' için failover başarıyla tanımlanmıştır.",
                    }
                },
                "view": {
                    "basePerm": "nfva_nsr",
                    "title": "VNF Instance Tanımı(JSON)",
                    "icon": "fa fa-eye",
                    "perm": "#edit",
	                "fields":{
		                "preview": "Ön İzleme",
		                "rawView": "Ham Data"
	                }
                }
            }
        },
        "alarm_management": {
            "title": "Alarm Yönetimi",
            "icon": "fa fa-bell",
            "alarms": {
                "title": "Alarm Listesi",
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
                    "status": "Durum",
                    "name": "Alarm Adı",
                    "thresholds": "Eşikler",
                    "modified": "Değişiklik",
                }
            }
        },
        "paths": {
            "title": "Patika Yönetimi",
            "icon": "icon-graph",
            "perm": "common:view",
            "list": {
                "title": "Reaktif Patika Listesi",
                "icon": "icon-graph",
                "basePerm": "paths",
                "perm": "#list",
                "actions": {
                    "create_path": {
                        "title": "Patika Ekle",
                        "title_short": "Ekle",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#create"
                    },
                    "view_path": {
                        "title": "Patika Görüntüle",
                        "title_short": "Görüntüle",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "edit_path": {
                        "title": "Patika Düzenle",
                        "title_short": "Düzenle",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    },
                    "delete_path": {
                        "title": "Patika Sil",
                        "title_short": "Sil",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete"
                    },
                    "test_pack": {
                        "title": "Test Paketi Gönder",
                        "title_short": "Gönder",
                        "icon": "fa fa-bug",
                        "color": "btn uppercase yellow-gold",
                        "perm": "#validate"
                    },
                },
                "fields": {
                    "state": "Durum",
                    "source": "Kaynak",
                    "dest": "Hedef",
                    "protocol": "Protokol",
                    "srcDeviceId": "Kaynak MAC",
                    "srcHostId": "Kaynak IP",
                    "srcPort": "Kaynak Port",
                    "dstDeviceId": "Hedef MAC",
                    "dstHostId": "Hedef IP",
                    "dstPort": "Hedef Port",
                    "links": "Hop Sayısı",
                    "links_short": "HOP",
                    "bandwidth_constraint": "Bant Genişliği (Min/Max)",
                    "name": "Politika Adı",
                    "topology": "Ağ",
                    "source_host": "Kaynak Uç Birim",
                    "target_host": "Hedef Uç Birim",
                    "priority": "Öncelik",
                    "service_quality_policy": "Hizmet K. Politikası",
                    "start_date": "Başlangıç Zamanı",
                    "end_date": "Bitiş Zamanı"
                },
                "messages": {
                    "delete_confirm": "'{{dto.id}}' kodlu patikayı silmek istediğinize emin misiniz?",
                    "delete_success": "'{{dto.id}}' kodlu patika başarıyla silinmiştir!",
                    "bandwidth_error": "Ağ Genişliği 1 ile 1.000.000 arasında ya da boş olmalıdır."
                }
            },
            "edit": {
                "basePerm": "paths",
                "modes": {
                    "edit": {
                        "title": "Patika Düzenle",
                        "icon": "fa fa-pencil",
                        "perm": "#edit",
                    },
                    "create": {
                        "title": "Patika Ekle",
                        "icon": "fa fa-plus",
                        "perm": "#create",
                    }
                },
                "actions": {},
                "fields": {
                    "src": {
                        "label": "Kaynak",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "dest": {
                        "label": "Hedef",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "bandwidth": {
                        "label": "Bant genişliği",
                        "placeholder": "Bant genişliği değeri...",
                        "help_line": "Bit/m cinsinden sayısay değer giriniz.",
                        "help_block": "",
                    },
                    "securityLevel": {
                        "label": "Güvenlik Seviyesi",
                        "placeholder": "--seçiniz--",
                        "help_line": "",
                        "help_block": "",
                    }
                },
                "messages": {
                    "save_success": "'{{dto.id}}' isimli patika başarıyla güncellenmiştir.",
                    "create_success": "'{{dto.id}}' isimli patika başarıyla oluşturulmuştur.",
                },
                "labels": {}
            },
            "test": {
                "basePerm": "paths",
                "title": "Ağ Test",
                "icon": "fa fa-bug",
                "perm": "#validate",
                "actions": {},
                "fields": {
                    "path_info": {
                        "label": "Patika Bilgileri",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "pack_interval": {
                        "label": "Paketler Arası Zaman",
                        "placeholder": "",
                        "help_line": "Saniye",
                        "help_block": "",
                    },
                    "pack_count": {
                        "label": "Test Paket Sayısı",
                        "placeholder": "",
                        "help_line": "Adet",
                        "help_block": "",
                    },
                },
                "messages": {
                    "time_error": "Toplam test süresi 120 saniyeyi geçmemelidir!"
                },
                "labels": {
                    "start_test": "Testi Başlat",
                    "test_pack": "Paket Sayısı",
                    "test_delay": "Ortalama Gecikme Miktarı",
                    "pack_delay": "Gecikme Miktarı",
                    "pack": "Paket"
                }
            },
            "view": {
                "messages": {
                    "no_path_links": "Seçilen patika'ya ait bağlantı keşif işlemi devam ettiği için görüntülenememektedir."
                }
            }
        },
        "perms": {
            "common": {
                "title": "Genel Yetkiler",
                "perms": {
                    "view": "Ekran görüntüleme",
                    "print": "Yazıcı çıktısı alma",
                    "copy": "Kopyalama",
                    "export_pdf": "PDF çıktısı alma",
                    "export_excel": "Excel çıktısı alma",
                    "refresh": "Yenile",
                }
            },
            "users": {
                "title": "Kullanıcı İşlemleri",
                "perms": {
                    "list": "Kullanıcı Listele",
                    'view': "Kullanıcı Görüntüle",
                    'edit': "Kullanıcı Düzenle",
                    'delete': "Kullanıcı Sil",
                    'create': "Kullanıcı Ekle",
                    'change_pwd': "Şifre Değiştir",
                    'set_pwd': "Şifre Tanımla",
                    'lost_pwd': "Şifre Hatırlat"
                }
            },
            "roles": {
                "title": "Rol İşlemleri",
                "perms": {
                    "list": "Rol Listele",
                    'view': "Rol Görüntüle",
                    'edit': "Rol Düzenle",
                    'delete': "Rol Sil",
                    'create': "Rol Ekle"
                }
            },
            "permissions": {
                "title": "Yetki İşlemleri",
                "perms": {
                    "list": "Yetki Listele",
                }
            },
            "phy_topo": {
                "title": "Fiziksel Topoloji İşlemleri",
                "perms": {
                    'view': "F. Topoloji Görüntüle",
                    'edit': "F. Topoloji Düzenle",
                    'manage': "Ağları Yönet",
                }
            },
            "vir_topo": {
                "title": "Sanal Topoloji İşlemleri",
                "perms": {
                    "create": "S.T. Oluştur",
                    "delete": "S.T. Sil",
                    "list": "S.T. Listele",
                    'view': "S.T. Görüntüle",
                    'edit': "S.T. Düzenle",
                    'delete_request': "S.T. Silme İsteği",
                    'delete_approve': "S.T. Silme İsteği Onaylama",
                    'create_request': "S.T. Ekleme İsteği",
                    'create_approve': "S.T. Ekleme İsteği Onaylama",
                    'suspend': "S.T. Durdurma",
                    'toggle_state': "S.T. Durum Değiştirme",
                }
            },
            "flows": {
                "title": "Akış İşlemleri",
                "perms": {
                    "list": "Akış Listele",
                    'view': "Akış Görüntüle",
                    'edit': "Akış Düzenle",
                    'delete': "Akış Sil",
                    'create': "Akış Ekle"
                }
            },
            "ports": {
                "title": "Port İşlemleri",
                "perms": {
                    "list": "Portları Listele",
                    'view': "Port Görüntüle",
                }
            },
            "paths": {
                "title": "Reaktif Patika İşlemleri",
                "perms": {
                    "list": "Reaktif Patika Listele",
                    'view': "Reaktif Patika Görüntüle",
                    'edit': "Reaktif Patika Düzenle",
                    'delete': "Reaktif Patika Sil",
                    'create': "Reaktif Patika Ekle",
                    'validate': "Reaktif Patika Kontrol Et"
                }
            },
            "version": {
                "title": "Sürüm İşlemleri",
                "perms": {
                    "list": "Sürüm Listele",
                }
            },
            "log": {
                "title": "Günlük İşlemleri",
                "perms": {
                    "list": "Günlük Seviyesi Listele",
                    'edit': "Günlük Seviyesi Düzenle",
                }
            },
            "nacusers": {
                "title": "AEK Kullanıcı İşlemleri",
                "perms": {
                    "list": "Son Kullanıcıları Listele",
                    'view': "Son Kullanıcı Görüntüle",
                    'edit': "Son Kullanıcı Düzenle",
                    'delete': "Son Kullanıcı Sil",
                    'create': "Son Kullanıcı Ekle",
                    'change_pwd': "Şifre Değiştir",
                    'set_pwd': "Şifre Tanımla",
                    'lost_pwd': "Şifre Hatırlat",
                    'statistics': 'Son Kullanıcı istatistiği Görüntüle'
                }
            },
            "nacgroup": {
                "title": "Erişim Grup İşlemleri",
                "perms": {
                    "list": "Erişim Grupları Listele",
                    'view': "Erişim Grup Görüntüle",
                    'edit': "Erişim Grup Düzenle",
                    'delete': "Erişim Grup Sil",
                    'create': "Erişim Grup Ekle"
                }
            },
            "nac_devices": {
                "title": "Ağ Envanteri İşlemleri",
                "perms": {
                    "list": "Cihazları Listele",
                    'view': "Cihaz Görüntüle",
                    'edit': "Cihaz Düzenle",
                    'delete': "Cihaz Sil",
                    'create': "Cihaz Ekle"
                }
            },
            "nac_userdevices": {
                "title": "Kullanıcı Cihazı İşlemleri",
                "perms": {
                    "list": "K. Cihazları Listele",
                    'view': "K. Cihaz Görüntüle",
                    'edit': "K. Cihaz Düzenle",
                    'delete': "K. Cihaz Sil",
                    'create': "K. Cihaz Ekle"
                }
            },
            "nac_access_ports": {
                "title": "AEK Erişim Port İşlemleri",
                "perms": {
                    "list": "Erişim Portları Listele",
                    'view': "Erişim Portu Görüntüle",
                    'edit': "Erişim Portu Düzenle",
                    'delete': "Erişim Portu Sil",
                    'create': "Erişim Portu Ekle"
                }
            },
            "switches": {
                "title": "Anahtarlayıcı İşlemleri",
                "perms": {
                    "list": "Anahtarlayıcı Listele",
                    'view': "Anahtarlayıcı Görüntüle",
                    'edit': "Anahtarlayıcı Düzenle",
                    'delete': "Anahtarlayıcı Sil",
                    'create': "Anahtarlayıcı Ekle"
                }
            },
            "links": {
                "title": "Bağlantı İşlemleri",
                "perms": {
                    "list": "Bağlantı Listele",
                    'view': "Bağlantı Görüntüle",
                    'edit': "Bağlantı Düzenle",
                    'delete': "Bağlantı Sil",
                    'create': "Bağlantı Ekle"
                }
            },
            "alarms": {
                "title": "Alarm İşlemleri",
                "perms": {
                    "list": "Alarm Listele",
                    'view': "Alarm Görüntüle",
                    'edit': "Alarm Düzenle",
                }
            },
            "alarm_logs": {
                "title": "Olay İşlemleri",
                "perms": {
                    "list": "Olay Listele",
                    'view': "Olay Görüntüle",
                }
            },
            "stats": {
                "title": "İstatistik İşlemleri",
                "perms": {
                    "list_port_stats": "Port İst. Listele",
                    "list_switch_stats": "Anah. İst. Listele",
                    "list_meter_stats": "Meter İst. Listele",
                }
            },
            "tsdb_metric": {
                "title": "Metrik İşlemleri",
                "perms": {
                    "list": "Metrik Listele",
                    "list_defs": "Tanım Listele",
                    "list_tags": "Tag Listele",
                }
            },
            "access_policy": {
                "title": "Erişim Politikası İşlemleri",
                "perms": {
                    "list": "Erişim Pol. Listele",
                    'view': "Erişim Pol. Görüntüle",
                    'edit': "Erişim Pol. Düzenle",
                    'delete': "Erişim Pol. Sil",
                    'create': "Erişim Pol. Ekle",
                }
            },
            "service_quality": {
                "title": "Hizmet Kal. Pol. İşlemleri",
                "perms": {
                    "list": "H.K. Pol. Listele",
                    'view': "H.K. Pol. Görüntüle",
                    'edit': "H.K. Pol. Düzenle",
                    'delete': "H.K. Pol. Sil",
                    'create': "H.K. Pol. Ekle",
                }
            },
            "traffic_class": {
                "title": "Trafik Sınıfı İşlemleri",
                "perms": {
                    "list": "Trafik S. Listele",
                    'view': "Trafik S. Görüntüle",
                    'edit': "Trafik S. Düzenle",
                    'delete': "Trafik S. Sil",
                    'create': "Trafik S. Ekle",
                }
            },
            "server": {
                "title": "AAA Sunucu İşlemleri",
                "perms": {
                    "list": "AAA Sunucuları Listele",
                    'view': "AAA Sunucu Görüntüle",
                    'edit': "AAA Sunucu Düzenle",
                    'delete': "AAA Sunucu Sil",
                    'create': "AAA Sunucu Ekle",
                }
            },
            "flow_stats": {
                "title": "Akış İstatistikleri",
                "perms": {
                    "list": "Akış İst. Listele",
                }
            },
            "networkdevice": {
                "title": "Ağ cihazları",
                "perms": {
                    "list": "Ağ cihazlarını Listele",
                    "view": "Ağ cihazlarını Görüntüle",
                    "edit": "Ağ cihazlarını Düzenle",
                    "delete": "Ağ cihazlarını Sil",
                    "create": "Ağ cihazlarını Ekle",
                }
            },
            "vir_topo_req": {
                "title": "Sanal Ağ İstekleri",
                "perms": {
                    "list": "Sanal Ağ İstekleri Listele",
                    "view": "Sanal Ağ İstekleri Görüntüle",
                    "edit": "Sanal Ağ İstekleri Düzenle",
                    "delete": "Sanal Ağ İstekleri Sil",
                    "create": "Sanal Ağ İstekleri Ekle",
                    "toggle_state": "Sanal Ağ Değişim Durumu"
                }
            },
            "moduleNodeConfig": {
                "title": "Modül Düğüm Ayarları",
                "perms": {
                    "list": "Modül Düğüm Ayarları Listele",
                    "view": "Modül Düğüm Ayarı Görüntüle",
                    "edit": "Modül Düğüm Ayarı Düzenle",
                    "delete": "Modül Düğüm Ayarı Sil",
                    "create": "Modül Düğüm Ayarı Ekle",
                }
            },
            "configDefinition": {
                "title": "Ayar Tanımı",
                "perms": {
                    "list": "Ayar Tanımı Listele",
                    "view": "Ayar Tanımı Görüntüle",
                    "edit": "Ayar Tanımı Düzenle",
                    "delete": "Ayar Tanımı Sil",
                    "create": "Ayar Tanımı Ekle",
                }
            },
            "moduleNodes": {
                "title": "Modül Düğüm İşlemleri",
                "perms": {
                    "list": "Modül Düğüm Listele",
                    "view": "Modül Düğüm Görüntüle",
                    "edit": "Modül Düğüm Düzenle",
                    "delete": "Modül Düğüm Sil",
                    "create": "Modül Düğüm Ekle",
                }
            },
            "nacsession": {
                "title": "NAC Oturumu",
                "perms": {
                    "list": "NAC Oturumu Listele",
                    "view": "NAC Oturumu Görüntüle",
                    "edit": "NAC Oturumu Düzenle",
                    "delete": "NAC Oturumu Sil",
                    "create": "NAC Oturumu Ekle",
                }
            },
            "alarm_def": {
                "title": "Alarm Tanımı",
                "perms": {
                    "list": "Alarm Tanımı Listele",
                    "view": "Alarm Tanımı Görüntüle",
                    "edit": "Alarm Tanımı Düzenle",
                    "delete": "Alarm Tanımı Sil",
                    "create": "Alarm Tanımı Ekle",
                }
            },
            "alarm_notif_conf": {
                "title": "Alarm Bildirim Ayarları",
                "perms": {
                    "list": "Alarm Bildirim Ayarları Listele",
                    "view": "Alarm Bildirim Ayarları Görüntüle",
                    "edit": "Alarm Bildirim Ayarları Düzenle",
                    "delete": "Alarm Bildirim Ayarları Sil",
                    "create": "Alarm Bildirim Ayarları Ekle",
                }
            },
            "alarm_notif": {
                "title": "Alarm Bildirimleri",
                "perms": {
                    "list": "Alarm Bildirim Listele",
                    "view": "Alarm Bildirim Görüntüle",
                    "edit": "Alarm Bildirim Düzenle",
                    "delete": "Alarm Bildirim Sil",
                    "create": "Alarm Bildirim Ekle",
                }
            },
            "dhcp": {
                "title": "DHCP",
                "perms": {
                    "list": "DHCP Listele",
                    "view": "DHCP Görüntüle",
                    "edit": "DHCP Düzenle",
                    "delete": "DHCP Sil",
                    "create": "DHCP Ekle",
                }
            },
            "pro_path_policy": {
                "title": "Önetkin Patika Politika İşlemleri",
                "perms": {
                    "list": "Önetkin Patika Politikası Listele",
                    "view": "Önetkin Patika Politikası Görüntüle",
                    "edit": "Önetkin Patika Politikası Düzenle",
                    "delete": "Önetkin Patika Politikası Sil",
                    "create": "Önetkin Patika Politikası Ekle",
                    "get": "Önetkin Patika Politikası Al",
                    'search': "Önetkin Patika Politikası Ara",
                }
            },
            "overlay_policy": {
                "title": "Bindirme Politikaları",
                "perms": {
                    "list": "Bindirme Politikaları Listele",
                    "view": "Bindirme Politikaları Görüntüle",
                    "edit": "Bindirme Politikaları Düzenle",
                    "delete": "Bindirme Politikaları Sil",
                    "create": "Bindirme Politikaları Ekle",
                }
            },
            "nfva_nsd": {
                "title": "Sanal Ağ Servis Tanımlayıcı",
                "perms": {
                    "list": "Sanal Ağ Servis Tanımlayıcı Listele",
                    "view": "Sanal Ağ Servis Tanımlayıcı Görüntüle",
                    "edit": "Sanal Ağ Servis Tanımlayıcı Düzenle",
                    "delete": "Sanal Ağ Servis Tanımlayıcı Sil",
                    "create": "Sanal Ağ Servis Tanımlayıcı Ekle",
                }
            },
            "nfva_nsr": {
                "title": "Sanal Ağ Servis Kaydı",
                "perms": {
                    "list": "Sanal Ağ Servis Kaydı Listele",
                    "view": "Sanal Ağ Servis Kaydı Görüntüle",
                    "edit": "Sanal Ağ Servis Kaydı Düzenle",
                    "delete": "Sanal Ağ Servis Kaydı Sil",
                    "create": "Sanal Ağ Servis Kaydı Ekle",
                }
            },
            "nfva_vim": {
                "title": "Sanal Altyapı Yöneticisi",
                "perms": {
                    "list": "Sanal Altyapı Yöneticisi Listele",
                }
            },
            "apps": {
                "title": "3. Parti Uygulama İşlemleri",
                "perms": {
                    "list": "Uygulama Listele",
                    'view': "Uygulama Görüntüle",
                    'edit': "Uygulama Düzenle",
                    'delete': "Uygulama Sil",
                    'create': "Uygulama Ekle"
                }
            },
            "bgp": {
                "title": "BGP İşlemleri",
                "perms": {
                    "list": "BGP Listele",
                    'view': "BGP Görüntüle",
                    'edit': "BGP Düzenle",
                    'delete': "BGP Sil",
                    'create': "BGP Ekle"
                }
            },
            "certificate": {
                "title": "Sertifika İşlemleri",
                "perms": {
                    "generate": "Sertifika Üret"
                }
            },
            "edr": {
                "title": "EDR İşlemleri",
                "perms": {
                    "view": "EDR Görüntüle"
                }
            },
            "cluster": {
                "title": "Küme İşlemleri",
                "perms": {
                    "list": "Küme Listele",
                    'view': "Küme Görüntüle",
                    'edit': "Küme Düzenle",
                    'delete': "Küme Sil",
                    'create': "Küme Ekle"
                }
            },
            "controller": {
                "title": "Kontrolcü İşlemleri",
                "perms": {
                    "list": "Kontrolcü Listele",
                    'view': "Kontrolcü Görüntüle",
                    'edit': "Kontrolcü Düzenle",
                    'delete': "Kontrolcü Sil",
                    'create': "Kontrolcü Ekle"
                }
            },
            "end_user_app": {
                "title": "Son Kul. Uygulaması İşlemleri",
                "perms": {
                    "list": "Uygulama Listele",
                    'view': "Uygulama Görüntüle",
                    'edit': "Uygulama Düzenle",
                    'delete': "Uygulama Sil",
                    'create': "Uygulama Ekle"
                }
            },
            "feature": {
                "title": "Kontrolcü Görevleri İşlemleri",
                "perms": {
                    "list": "Görev Listele",
                    'view': "Görev Görüntüle",
                    'edit': "Görev Düzenle",
                    'delete': "Görev Sil",
                    'create': "Görev Ekle"
                }
            },
            "ip_loc": {
                "title": "IP Lokasyon İşlemleri",
                "perms": {
                    "list": "Lokasyon Listele",
                    'view': "Lokasyon Görüntüle",
                    'edit': "Lokasyon Düzenle",
                    'delete': "Lokasyon Sil",
                    'create': "Lokasyon Ekle"
                }
            },
            "nfva_vnf": {
                "title": "Sanal Ağ Fonksiyonları (SAF) İşlemleri",
                "perms": {
                    "list": "SAF Listele",
                    'view': "SAF Görüntüle",
                    'edit': "SAF Düzenle",
                    'delete': "SAF Sil",
                    'create': "SAF Ekle"
                }
            },
            "ovsdb": {
                "title": "OVSDB İşlemleri",
                "perms": {}
            },
            "ovsdb_controller": {
                "title": "OVSDB İşlemleri",
                "perms": {
                    "get": "OVSDB Detayları Al",
                    'get_desc': "OVSDB Açıklama Al",
                    'get_number': "OVSDB No Al",
                    'delete': "OVSDB Sil",
                    'create': "OVSDB Ekle"
                }
            },
            "ovsdb_bridge": {
                "title": "OVSDB İşlemleri",
                "perms": {
                    'add': "OVSDB Köprü Ekle"
                }
            },
            "ports:list": {
                "title": "Port İşlemleri",
                "perms": {}
            },
            "proactivePathPolicy": {
                "title": "Önetkin Patika Politika İşlemleri",
                "perms": {}
            },
            "prognet_device": {
                "title": "Ağ Cihazı İşlemleri",
                "perms": {
                    "list": "Cihaz Listele",
                    'view': "Cihaz Görüntüle",
                    'edit': "Cihaz Düzenle",
                    'delete': "Cihaz Sil",
                    'create': "Cihaz Ekle"
                }
            },
            "wanPortInfo": {
                "title": "Geniş Ağ Bağlantıları İşlemleri",
                "perms": {
                    "list": "G.A. Bağlantı Listele",
                    'view': "G.A. Bağlantı Görüntüle",
                    'edit': "G.A. Bağlantı Düzenle",
                    'delete': "G.A. Bağlantı Sil",
                    'create': "G.A. Bağlantı Ekle"
                }
            },
            "dhcpcentralwan": {
                "title": "Merkezi DHCP İşlemleri",
                "perms": {
                    "list": "Merkezi DHCP Listele",
                    'view': "Merkezi DHCP Görüntüle",
                    'edit': "Merkezi DHCP Düzenle",
                    'delete': "Merkezi DHCP Sil",
                    'create': "Merkezi DHCP Ekle"
                }
            },
            "monitor": {
                "title": "Gözcü İşlemleri",
                "perms": {
                    'view': "Gözcü Görüntüle",
                    'create': "Gözcü Ekle"
                }
            },
            "sfc": {
                "title": "Servis Fonksiyonu Zincirleme (SFZ) İşlemleri",
                "perms": {
                    "list": "SFZ Listele",
                    'view': "SFZ Görüntüle",
                    'get': "SFZ Görüntüle",
                    'edit': "SFZ Düzenle",
                    'delete': "SFZ Sil",
                    'create': "SFZ Ekle"
                }
            },
            "sfcType": {
                "title": "SFZ Tipi İşlemleri",
                "perms": {
                    "list": "SFZ Tipi Listeleme"
                }
            },
            "sfcVnfd": {
                "title": "SFZ VNF Tanımı İşlemleri",
                "perms": {
                    "list": "SFZ VNF Tanımı Listeleme"
                }
            },
            "sfcVnfr": {
                "title": "SFZ Sanal Ağ Fonksiyon Kayıtları İşlemleri",
                "perms": {
                    "list": "SFZ Sanal Ağ Fonksiyon Kayıtları Listele",
                    'view': "SFZ Sanal Ağ Fonksiyon Kayıtları Görüntüle",
                    'get': "SFZ Sanal Ağ Fonksiyon Kayıtları Görüntüle",
                    'edit': "SFZ Sanal Ağ Fonksiyon Kayıtları Düzenle",
                    'delete': "SFZ Sanal Ağ Fonksiyon Kayıtları Sil",
                    'create': "SFZ Sanal Ağ Fonksiyon Kayıtları Ekle"
                }
            },
            "wan_alarm": {
                "title": "WAN Alarm İşlemleri",
                "perms": {
                    "view": "WAN Alarm Görüntüleme"
                }
            },
            "wanDomainInfo": {
                "title": "WAN Alan İşlemleri",
                "perms": {
                    "list": "WAN Alan Listele",
                    'view': "WAN Alan Görüntüle",
                    'edit': "WAN Alan Düzenle",
                    'delete': "WAN Alan Sil",
                    'create': "WAN Alan Ekle"
                }
            },
            "wanMvtn": {
                "title": "WAN Sanal Ağ İşlemleri",
                "perms": {}
            },
            "wan_mvtn": {
                "title": "WAN Sanal Ağ İşlemleri",
                "perms": {
                    "list": "WAN Sanal Ağ Listele",
                    'view': "WAN Sanal Ağ Görüntüle",
                    'edit': "WAN Sanal Ağ Düzenle",
                    'delete': "WAN Sanal Ağ Sil",
                    'create': "WAN Sanal Ağ Ekle"
                }
            },
            "emergency_pol": {
                "title": "Acil Durum Politikası İşlemleri",
                "perms": {
                    "list": "Acil Durum Politikası Listele",
                    'view': "Acil Durum Politikası Görüntüle",
                    'edit': "Acil Durum Politikası Düzenle",
                    'delete': "Acil Durum Politikası Sil",
                    'create': "Acil Durum Politikası Ekle",
                    'start_stop_vnf': "Sanal Ağ Fonksiyonu (SAF) Başlat/Durdur",
                }
            },
            "spr_topo": {
                "title": "Merkezi Topoloji İşlemleri",
                "perms": {
                    'view': "Merkezi Topoloji Görüntüle",
                }
            },
        },
        "components": {
            "title": "Ayarlar",
            "icon": "fa fa-gears",
            "perm": "common:view",
            "versions": {
                "list": {
                    "title": "Sürümler",
                    "icon": "fa fa-code-fork",
                    "basePerm": "version",
                    "perm": "#list",
                    "fields": {
                        "name": "Adı",
                        "version": "Sürümü",
                        "buildDate": "Yapım Tarihi",
                        "startUpDate": "Başlatılma Tarihi"
                    }
                }
            },
            "log-levels": {
                "list": {
                    "title": "Günlük Seviyeleri",
                    "icon": "fa fa-file-text-o",
                    "basePerm": "log",
                    "perm": "#list",
                    "fields": {
                        "id": "ID",
                        "version": "Sürümü",
                        "revision": "Uyarlama",
                        "timestamp": "Son Güncelleme",
                        "displayName": "Bileşen Adı",
                        "level": "Günlük Seviyesi"
                    },
                    "actions": {
                        "edit_level": {
                            "title": "Seviye Düzenle",
                            "title_short": "Düzenle",
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
                            "title": "Günlük Seviyesi Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Günlük Seviyesi Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "serverType": {
                            "label": "Sistem Tipi",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "name": {
                            "label": "Bileşen Adı",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "",
                        },
                        "log-levels": {
                            "label": "Günlük Seviyesi",
                            "placeholder": "--seçiniz--",
                            "help_line": "",
                            "help_block": "",
                        },
                    },
                    "messages": {
                        "save_success": "'{{dto.displayName}}' isimli bileşen başarıyla güncellenmiştir.",
                    },
                    "labels": {}
                },
            }
        },
        "settings": {
            "networkDevice": {
                "title": "Ağ Geçidi",
                "perm": "common:view",
                "list": {
                    "basePerm": "networkdevice",
                    "title": "Ağ Cihazları",
                    "icon": "fa fa-cloud-upload",
                    "perm": "#view",
                    "actions": {
                        "create_networkDevice": {
                            "title": "Ağ Cihazı Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_networkDevice": {
                            "title": "Ağ Cihazı Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_networkDevice": {
                            "title": "Ağ Cihazı Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#create",
                        },
                        "delete_networkDevice": {
                            "title": "Ağ Cihazı Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        }
                    },
                    "fields": {
                        "name": "İsim",
                        "mac": "MAC",
                        "ip": "IP Adresi",
                        "vlan_id": "VLAN ID",
                        "actions": "İşlemler",
                        "switch_list": "Anahtarlayıcı Listesi",
                        "port_no": "Port Numarası",
                        "type": "Tip",
                        "switch": "Anahtarlayıcı"
                    },
                    "messages": {
                        "no_relevant_switch": "ilgili anahtarlayıcı, sunucudan gelen listede bulunamadı.",
                        "delete_confirm": "Ağ cihazını silmek istediğinize emin misiniz?",
                        "delete_success": "Ağ cihazı başarıyla silinmiştir!",
                        "save_error": "Ağ cihazını oluşturulurken bir hata oluştu",
                        "save_success": "Ağ cihazı başarıyla oluşturuldu."
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "networkdevice",
                    "modes": {
                        "edit": {
                            "title": "Ağ Cihazı Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#create",
                        },
                        "create": {
                            "title": "Ağ Cihazı Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "fields": {
                        "switch_list": {
                            "label": "Anahtarlayıcı Listesi"
                        },
                        "port_no": {
                            "label": "Port Numarası"
                        },
                        "networkDevice_name": {
                            "label": "Ağ Geçidi Adı",
                            "placeholder": "Ağ Geçidi Adı yazınız...",
                            "help_line": "Tekil bir Ağ Geçidi Adı yazınız.",
                            "help_block": ""
                        },
                        "type": {
                            "label": "Tip"
                        },
                        "dhcp": {
                            "label": "DHCP"
                        },
                        "mac": {
                            "label": "MAC",
                            "placeholder": "MAC değeri yazınız...",
                            "help_line": "Bir MAC değeri yazınız.",
                            "help_block": ""
                        },
                        "IP": {
                            "label": "IP Adresi",
                            "placeholder": "IP Adresi değeri yazınız...",
                            "help_line": "Bir IP Adresi değeri yazınız.",
                            "help_block": ""
                        },
                        "vlan_id": {
                            "label": "VLAN ID",
                            "placeholder": "VLAN değeri yazınız...",
                            "help_line": "Bir VLAN değeri yazınız.",
                            "help_block": ""
                        },
                        "redundancy_devices": {
                            "label": "Yedeklilik Cihazları"
                        },
                        "add": "Ekle"
                    },
                    "messages": {
                        "no_relevant_switch": "ilgili anahtarlayıcı sunucudan gelen listede bulunamadı.",
                        "save_success": "Cihaz başarıyla güncellenmiştir.",
                        "create_success": "Cihaz başarıyla oluşturulmuştur.",
                    },
                    "labels": {}
                }
            },
            "dhcp": {
                "title": "DHCP",
                "perm": "common:view",
                "list": {
                    "basePerm": "dhcp",
                    "title": "DHCP Alanları",
                    "icon": "fa fa-globe",
                    "perm": "#view",
                    "actions": {
                        "create_dhcp": {
                            "title": "DHCP Alan Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create",
                        },
                        "view_dhcp": {
                            "title": "DHCP Detayları",
                            "title_short": "Detay",
                            "icon": "fa fa-eye",
                            "color": "default",
                            "perm": "#view",
                        },
                        "edit_dhcp": {
                            "title": "DHCP Alan Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#create",
                        },
                        "delete_dhcp": {
                            "title": "DHCP Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete",
                        },
                        "assigned": {
                            "title": "Adres Kullanım",
                            "title_short": "Adres Kullanım",
                            "icon": "fa fa-users",
                            "color": "yellow-gold",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "name": "Alan Adı",
                        "networkId": "Ağ Tipi",
                        "vlanId": "VLAN",
                        "ipVersionType": "IP Sürümü",
                        "dhcpIpRangeDtos": "Adres Havuzu",
                        "dhcpOptionDtos": "Seçenekler",
                    },
                    "messages": {
                        "delete_confirm": "DHCP silmek istediğinize emin misiniz?",
                        "delete_success": "DHCP başarıyla silinmiştir!",
                        "save_error": "DHCP oluşturulurken bir hata oluştu",
                        "save_success": "DHCP başarıyla oluşturuldu."
                    }
                },
                "create": {},
                "edit": {
                    "basePerm": "dhcp",
                    "modes": {
                        "edit": {
                            "title": "DHCP Alan Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#create",
                        },
                        "create": {
                            "title": "DHCP Alan Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "actions": {},
                    "propertyList": {
                        "scopeInfo": "Alan Bilgileri",
                        "scopeIpRanges": "Adres Havuzu",
                        "dhcpOptions": "DHCP Opsiyonları",
                        "scopeIpRange": "Adres Aralığı",
                        "dhcpOption": "DHCP Opsiyonu",
                        "addProperty": "Ekle",
                        "removeProperty": "Sil",
                        "newRange": "Yeni Aralık",
                        "newOption": "Yeni Opsiyon",
                    },
                    "range": {
                        "scopeName": "Alan Adı",
                        "ipVersion": "IP Sürümü",
                        "networkType": "Ağ Türü",
                        "vlan": "VLAN",
                        "scopeIpRange": "Adres Aralığı",
                        "excludedAddresses": "Hariç Adresler",
                        "reservedAddresses": "Rezerve Adresler",
                        "addressPool": "Adres Havuzu",
                        "ipStart": "Başlangıç IP Adresi",
                        "ipEnd": "Bitiş IP Adresi",
                        "subnetMask": "Subnet Maskesi",
                        "subnetLength": "Subnet Boyutu",
                        "startAddress": "Adres Başlangıç",
                        "endAddress": "Adres Bitiş",
                        "description": "Açıklama",
                        "macAddress": "MAC Adresi",
                        "ipAddress": "IP Adresi",
                        "actions": "İşlemler",
                        "save": "Kaydet"
                    },
                    "option": {
                        "title": "Opsiyon Detayları",
                        "type": "Opsiyon Tipi",
                        "value": "Opsiyon Değeri",
                        "save": "Kaydet",
                        "cancel": "İptal",
                        "minute": "Dakika",
                        "hour": "Saat",
                        "day": "Gün",
                        "week": "Hafta",
                        "month": "Ay",
                        "year": "Yıl"
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli DHCP başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli DHCP başarıyla oluşturulmuştur.",
                        "delete_confirm": "Silmek istediğinize emin misiniz?",
                        "save_success_option": "'[{{dto.dhcpOptionKey}}] {{optionKey.name}}' opsiyonu başarıyla güncellenmiştir.",
                        "create_success_option": "'[{{dto.dhcpOptionKey}}] {{optionKey.name}}' opsiyonu başarıyla oluşturulmuştur.",
                        "delete_confirm_option": "'{{dto.keyName}}' opsiyonunu silmek istediğinize emin misiniz?",
                        "delete_success_option": "'{{dto.keyName}}' opsiyonu başarıyla silindi",
                        "save_success_range": "{{dto.ipStart}} - {{dto.ipEnd}} adres aralığı başarıyla güncellenmiştir.",
                        "create_success_range": "{{dto.ipStart}} - {{dto.ipEnd}} adres aralığı başarıyla oluşturulmuştur.",
                        "delete_confirm_range": "{{dto.ipStart}} - {{dto.ipEnd}} adres aralığını silmek istediğinize emin misiniz?",
                        "delete_success_range": "{{dto.ipStart}} - {{dto.ipEnd}} adres aralığı başarıyla silindi",
                        "create_success_reservedAddress": "{{dto.mac}} mac adresi başarıyla oluşturulmuştur.",
                        "delete_success_reservedAddress": "{{dto.mac}} mac adresi başarıyla silinmiştir.",
                        "create_success_excludedAddress": "{{dto.ipStart}} - {{dto.ipEnd}} adres aralığı başarıyla oluşturulmuştur.",
                        "delete_success_excludedAddress": "{{dto.ipStart}} - {{dto.ipEnd}} adres aralığı başarıyla silindi.",
                        "networkmask_format_error": "Network maskesi hatalı",
                        "router-already-exists": "'{{address}}' Ağ Geçidi adresi zaten listede bulunmaktadır.",
                        "dns-server-already-exists": "'{{address}}' DNS sunucusu zaten listede bulunmaktadır."
                    },
                    "scope": {
                        "name": "Alan Adı",
                        "ipVersionType": "IP Sürümü",
                        "networkId": "Ağ Türü",
                        "vlanId": "VLAN",
                        "physicalNetwork": "Fiziksel Ağ",
                        "routerAddress": "Ağ Geçitleri",
                        "domainServer": "DNS Sunucuları",
                        "save": "Kaydet",
                        "cancel": "İptal"
                    },
                    "labels": {}
                },
                "assigned": {
                    "basePerm": "dhcp",
                    "title": "DHCP Adres Kullanımı",
                    "modes": {
                        "edit": {
                            "title": "DHCP Adres Kullanımı",
                            "icon": "fa fa-users",
                            "perm": "#edit",
                        }
                    },
                    "fields": {
                        "hostName": "Sunucu Adı",
                        "IP": "IP",
                        "MAC": "MAC",
                        "userName": "Kullanıcı Adı",
                        "assignmentDate": "Atanma Tarihi",
                        "expireDate": "Bitiş Tarihi",
                    }
                },
                "configuration": {
                    "basePerm": "dhcp",
                    "title": "Merkezi DHCP Yönetimi",
                    "icon": "fa fa-globe",
                    "clusters": "Ağ Kümeleri",
                    "list": {
                        "basePerm": "dhcp",
                        "title": "Merkezi DHCP Yönetimi",
                        "icon": "fa fa-globe",
                        "perm": "#view",
                        "fields": {
                            "ipAddress": "IP Adresi",
                            "subnetMask": "Subnet Maskesi"
                        },
                        "actions": {
                            "create": {
                                "title": "Domain Ekle",
                                "title_short": "Ekle",
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
                                "title": "DHCP Alan Düzenle",
                                "icon": "fa fa-pencil",
                                "perm": "#create",
                            },
                            "create": {
                                "title": "DHCP Alan Ekle",
                                "icon": "fa fa-plus",
                                "perm": "#create",
                            }
                        },
                        "fields": {
                            "ip": "IP Adresi",
                            "endIP": "Bitiş IP Adresi",
                            "subnetMask": "Subnet Maskesi"
                        }
                    }
                }
            },
            "system": {
                "definitions": {
                    "title": "Sistem Ayar Tanımları",
                    "perm": "common:view",
                    "list": {
                        "basePerm": "configDefinition",
                        "title": "Sistem Ayar Tanımları",
                        "icon": "fa fa-puzzle-piece",
                        "perm": "#view",
                        "actions": {
                            "create": {
                                "title": "Sistem Ayar Tanımı Ekle",
                                "title_short": "Ekle",
                                "icon": "fa fa-plus-circle",
                                "color": "blue-madison",
                                "perm": "#create",
                            },
                            "view": {
                                "title": "Sistem Ayar Tanımı Detayları",
                                "title_short": "Detay",
                                "icon": "fa fa-eye",
                                "color": "default",
                                "perm": "#view",
                            },
                            "edit": {
                                "title": "Sistem Ayar Tanımı Düzenle",
                                "title_short": "Düzenle",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#create",
                            },
                            "delete": {
                                "title": "Sistem Ayar Tanımı Sil",
                                "title_short": "Sil",
                                "icon": "fa fa-trash-o",
                                "color": "btn-outline uppercase red-sunglo",
                                "perm": "#delete",
                            }
                        },
                        "fields": {
                            "nodeType": "Modül",
                            "componentName": "Bileşen",
                            "configKey": "Parametre",
                            "valueType": "Parametre Tipi",
                            "valueType_short": "P. Tipi",
                            "defaultValue": "Varsayılan Değer",
                            "defaultValue_short": "V. Değer",
                            "description": "Açıklama"
                        },
                        "messages": {
                            "delete_confirm": "Sistem Ayar Tanımını silmek istediğinize emin misiniz?",
                            "delete_success": "Sistem Ayar Tanımı başarıyla silinmiştir!",
                            "save_error": "Sistem Ayar Tanımını oluşturulurken bir hata oluştu",
                            "save_success": "Sistem Ayar Tanımı başarıyla oluşturuldu."
                        }
                    },
                    "create": {},
                    "edit": {
                        "basePerm": "configDefinition",
                        "modes": {
                            "edit": {
                                "title": "Sistem Ayar Tanımını Düzenle",
                                "icon": "fa fa-pencil",
                                "perm": "#create",
                            },
                            "create": {
                                "title": "Sistem Ayar Tanımı Ekle",
                                "icon": "fa fa-plus",
                                "perm": "#create",
                            }
                        },
                        "actions": {},
                        "fields": {
                            "nodeType": {
                                "label": "Modül",
                                "help_line": "Bir Modül seçiniz.",
                            },
                            "componentName": {
                                "label": "Bileşen",
                                "placeholder": "Bileşen adı yazınız...",
                                "help_line": "Bileşen adı yazınız.",
                                "help_block": ""
                            },
                            "configKey": {
                                "label": "Parametre Adı",
                                "placeholder": "Parametre Adı yazınız...",
                                "help_line": "Parametre Adı yazınız.",
                                "help_block": ""
                            },
                            "valueType": {
                                "label": "Değer Tipi",
                                "help_line": "Bir Değer Tipi seçiniz.",
                            },
                            "defaultValue": {
                                "label": "Varsayılan Değer",
                                "placeholder": "Varsayılan Değer yazınız...",
                                "help_line": "Varsayılan Değer yazınız.",
                                "help_block": ""
                            },
                            "description": {
                                "label": "Açıklama",
                                "placeholder": "Açıklama yazınız...",
                                "help_line": "Açıklama yazınız.",
                                "help_block": ""
                            }
                        },
                        "messages": {
                            "save_success": "Sistem Ayar Tanımı başarıyla güncellenmiştir.",
                            "create_success": "Sistem Ayar Tanımı başarıyla oluşturulmuştur.",
                        },
                        "labels": {}
                    }
                },
                "parameters": {
                    "title": "Sistem Ayarları",
                    "perm": "common:view",
                    "list": {
                        "basePerm": "moduleNodeConfig",
                        "title": "Sistem Ayarları",
                        "icon": "fa fa-wrench",
                        "perm": "#view",
                        "actions": {
                            "create": {
                                "title": "Sistem Ayarı Ekle",
                                "title_short": "Ekle",
                                "icon": "fa fa-plus-circle",
                                "color": "blue-madison",
                                "perm": "#create",
                            },
                            "view": {
                                "title": "Sistem Ayarı Detayları",
                                "title_short": "Detay",
                                "icon": "fa fa-eye",
                                "color": "default",
                                "perm": "#view",
                            },
                            "edit": {
                                "title": "Sistem Ayarı Düzenle",
                                "title_short": "Düzenle",
                                "icon": "fa fa-pencil",
                                "color": "green-meadow",
                                "perm": "#create",
                            },
                            "delete": {
                                "title": "Sistem Ayarı Sil",
                                "title_short": "Sil",
                                "icon": "fa fa-trash-o",
                                "color": "btn-outline uppercase red-sunglo",
                                "perm": "#delete",
                            }
                        },
                        "fields": {
                            "nodeType": "Modül",
                            "componentName": "Bileşen",
                            "nodeVersion": "Sürüm",
                            "nodeId": "Düğüm",
                            "configKey": "Parametre Adı",
                            "configValue": "Parametre Değeri"
                        },
                        "messages": {
                            "delete_confirm": "Sistem Ayarını silmek istediğinize emin misiniz?",
                            "delete_success": "Sistem Ayarı başarıyla silinmiştir!",
                            "save_error": "Sistem Ayarını oluşturulurken bir hata oluştu",
                            "save_success": "Sistem Ayarı başarıyla oluşturuldu."
                        },
                        "labels": {
                            "ALL": "Hepsi"
                        }
                    },
                    "create": {},
                    "edit": {
                        "basePerm": "moduleNodeConfig",
                        "modes": {
                            "edit": {
                                "title": "Sistem Ayarı Düzenle",
                                "icon": "fa fa-pencil",
                                "perm": "#create",
                            },
                            "create": {
                                "title": "Sistem Ayarı Ekle",
                                "icon": "fa fa-plus",
                                "perm": "#create",
                            }
                        },
                        "actions": {},
                        "fields": {
                            "nodeType": {
                                "label": "Modül",
                            },
                            "componentName": {
                                "label": "Bileşen",
                            },
                            "configKey": {
                                "label": "Parametre Adı",
                            },
                            "nodeVersion": {
                                "label": "Sürüm"
                            },
                            "nodeId": {
                                "label": "Düğüm",
                            },
                            "configValue": {
                                "label": "Parametre Değeri",
                                "placeholder": "Parametre Değeri yazınız...",
                                "help_line": "Parametre Değeri yazınız.",
                                "help_block": ""
                            }
                        },
                        "messages": {
                            "save_success": "Sistem Ayarı başarıyla güncellenmiştir.",
                            "create_success": "Sistem Ayarı başarıyla oluşturulmuştur.",
                        },
                        "labels": {
                            "ALL": "Hepsi"
                        }
                    }
                },
            },
            "ip_location": {
                "list": {
                    "title": "IP Lokasyon Listesi",
                    "icon": "fa fa-server",
                    "basePerm": "ip_loc",
                    "perm": "#list",
                    "actions": {
                        "create_ip_location": {
                            "title": "IP Lokasyon Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit_ip_location": {
                            "title": "IP Lokasyon Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete_ip_location": {
                            "title": "IP Lokasyon Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "ip_location_name": "IP Lokasyon Adı",
                        "ip_blocks": "IP Blokları"
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli Ip Lokasyonunu silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli Ip Lokasyonu başarıyla silinmiştir!",
                    }
                },
                "edit": {
                    "basePerm": "ip_loc",
                    "modes": {
                        "edit": {
                            "title": "IP Lokasyon Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit"
                        },
                        "create": {
                            "title": "IP Lokasyon Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create"
                        }
                    },
                    "actions": {},
                    "fields": {
                        "ip_location_name": {
                            "label": "IP Lokasyon Adı",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": ""
                        },
                        "ip_blocks": {
                            "label": "Erişim IP Adresi",
                            "placeholder": "",
                            "help_line": "",
                            "help_block": "Her satırda tek bir ip blok tanımı olacak şekilde giriş yapınız." +
                            "Ör: 192.168.1.1/8"
                        },
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli IP Lokasyonu başarıyla güncellenmiştir.",
                        "create_success": "'{{dto.name}}' isimli IP Lokasyonu başarıyla oluşturulmuştur.",
                        "invalid_ip": "ip adresi hatalıdır"
                    }
                }
            },
        },
        "statistics": {
            "title": "Istatistik",
            "icon": "fa fa-bar-chart",
            "perm": "common:view",
            "dashboard": {
                "list": {
                    "title": "Göstergeler",
                    "icon": "fa fa-dashboard",
                    "portlet": {
                        "port": "Anahtarlayıcı İstatistikleri",
                        "meter": "Sanal Ağ İstatistikleri",
                    },
                    "basePerm": "stats",
                    "perm": "#list_port_stats | #list_switch_stats | #list_meter_stats",
                    "titles": {
                        "controller": {
                            "icon": "fa fa-chevron-circle-right",
                            "title": "Kontrolcü"
                        },
                        "application": {
                            "icon": "fa fa-server",
                            "title": "Uygulama"
                        },
                        "switch": {
                            "icon": "fa fa-exchange",
                            "title": "Anahtarlayıcı"
                        },
                        "link": {
                            "icon": "fa fa-expand",
                            "title": "Bağlantı"
                        },
                        "terminal": {
                            "icon": "fa fa-mobile",
                            "title": "Uç Birim"
                        },
                        "virtual": {
                            "icon": "fa fa-map",
                            "title": "Sanal Ağ"
                        },
                        "moreInfo": "Ayrıntılar"
                    }
                },
                "metrics": {
                    "portstat": {
                        "bytesReceived": "Alınan Byte Sayısı",
                        "bytesSent": "Gönderilen Byte Sayısı",
                        "collisions": "Çakışmalar",
                        "errorRate": "Hata Oranları",
                        "packetsReceived": "Alınan Paketler",
                        "packetsRxDropped": "Düşen Rx Paketler",
                        "packetsRxErrors": "Hatalı Rx Paketler",
                        "packetsSent": "Gönderilen Paketler",
                        "packetsTxDropped": "Düşen Tx Paketler",
                        "packetsTxErrors": "Hatalı Tx Paketler",
                        "receiveRate": "Alım Oranları",
                        "sendRate": "Gönderim Oranları"
                    },
                    "meterstat": {
                        "bytes": "Byte Sayısı",
                        "life": "Yaşam Süresi",
                        "packets": "Paket Sayısı"
                    },
                    "cpu": {
                        "idle": "Kullanılmayan Kaynak"
                    },
                    "proc": {
                        "meminfo": {
                            "memfree": "Kullanılmayan RAM",
                            "memtotal": "Toplam RAM",
                            "swapfree": "Kullanılmayan SWAP",
                            "swaptotal": "Toplam SWAP"
                        }
                    }
                },
                "units": {
                    "count": "adet",
                    "seconds": "sn",
                    "packets/sec": "paket/sn",
                    "bytes/sec": "bytes/sn"
                },
                "duration": {
                    "title": {
                        "last": "Son"
                    },
                    "display": {
                        "minute": "Dakika",
                        "hour": "Saat",
                        "day": "Gün",
                        "week": "Hafta"
                    }
                },
                "exporting": {
                    "contextButtonTitle": "Grafik içerik menüsü",
                    "printChart": "Basıcıya gönder",
                    "downloadJPEG": "JPEG olarak indir",
                    "downloadPDF": "PDF olarak indir",
                    "downloadPNG": "PNG olarak indir",
                    "downloadSVG": "SVG olarak indir",
                    "filename": "prognet_statistics_"
                },
                "filter": {
                    "mvtn": "Sanal Ağ",
                    "devices": "Anahtarlayıcılar",
                    "metrics": "Ölçerler",
                    "ports": "Portlar",
                    "duration": "Süre",
                    "hosts": "Sunucular"
                },
                "port": {
                    "prefix": "Port",
                    "all": "Bütün Portlar",
                    "zero": "Toplamları"
                },
                "host": {
                    "prefix": "Host",
                    "all": "Bütün Sunucular",
                    "zero": "Toplamları"
                },
                "meter": {
                    "prefix": "Sayaç",
                    "all": "Bütün Sayaçlar",
                    "zero": "Toplamları"
                },
                "titles": {
                    "ram": "RAM İstatistikleri",
                    "cpu": "CPU İstatistikleri",
                    "switch": "Anahtarlayıcı İstatistikleri",
                    "virtual": "Sanal Ağ İstatistikleri",
                },
                "placeholder": {
                    "mvtn": "Sanal ağ seçin",
                    "devices": "Anahtarlayıcı seçin",
                    "hosts": "Cihaz Seçin",
                    "metrics": "Ölçer seçin",
                    "ports": "Port seçin",
                    "duration": "Süre seçin"
                },
                "reload": {
                    "btn": "Hata - Tekrar Yükle"
                },
                "dummy": {
                    "y_axis": "Yük (%)"
                },
                "ajax": {
                    "error": "BİR HATA OLUŞTU",
                    "no_data": "VERİ YOK",
                    "no_device": "ANAHTARLAYICI YOK"
                },
                "msg": {
                    "sameDevice": "Aynı anahtarlayıcı için tek seçim yapılabilir."
                }
            }
        },
        "switches": {
            "title": "Anahtarlayıcılar",
            "icon": "fa fa-server",
            "perm": "common:view",
            "list": {
                "title": "Anahtarlayıcı Listesi",
                "icon": "fa fa-server",
                "basePerm": "switches",
                "perm": "#list",
                "actions": {
                    "create": {
                        "title": "Anahtarlayıcı Ekle",
                        "title_short": "Ekle",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#create"
                    },
                    "view": {
                        "title": "Anahtarlayıcı Detayları",
                        "title_short": "Detay",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "edit": {
                        "title": "Anahtarlayıcı Düzenle",
                        "title_short": "Düzenle",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    },
                    "delete": {
                        "title": "Anahtarlayıcı Sil",
                        "title_short": "Sil",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete"
                    }
                },
                "fields": {
                    "status": "Durum", //isEdgeSwitch
                    "mac": "MAC Adresi",
                    "name": "Adı",
                    "mode": "Modu",
                    "securityMode": "Güvenlik",
                    "flows": "Akışlar",
                    "deviceInfo": "Cihaz Bilgileri",
                },
                "messages": {
                    "delete_confirm": "'{{dto.id}}' isimli anahtarlayıcıyı silmek istediğinize emin misiniz?",
                    "delete_success": "'{{dto.id}}' isimli anahtarlayıcı başarıyla silinmiştir!",
                }
            },
            "edit": {
                "basePerm": "switches",
                "modes": {
                    "edit": {
                        "title": "Anahtarlayıcı Düzenle",
                        "icon": "fa fa-pencil",
                        "perm": "#edit",
                    },
                    "create": {
                        "title": "Anahtarlayıcı Ekle",
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
                        "label": "Adı",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "securityMode": {
                        "label": "Güvenlik Modu",
                        "placeholder": "--seçiniz--",
                        "help_line": "",
                        "help_block": "",
                    },
                    "securityLevel": {
                        "label": "Güvenlik Seviyesi",
                        "placeholder": "--seçiniz--",
                        "help_line": "",
                        "help_block": "",
                    },
                    "location": {
                        "label": "Lokasyon",
                        "placeholder_y": "boylam (y)",
                        "placeholder_x": "enlem (x)",
                        "help_line": "",
                        "help_block": "",
                    },
                    "isEdgeSwitch": {
                        "label": "Uç Birim Anahtarlayıcısı",
                        "placeholder": "Bu anahtarlayıcıya Uç Birim cihazları bağlanacaktır.",
                        "help_line": "",
                        "help_block": "",
                    }
                },
                "messages": {
                    "save_success": "'{{dto.id}}' nolu anahtarlayıcı başarıyla güncellenmiştir.",
                    "create_success": "'{{dto.id}}' nolu anahtarlayıcı başarıyla oluşturulmuştur.",
                    "create_not_allowed": "Elle anahtarlayıcı verisi eklenemez.",
                    "securityLevel_required": "Lütfen 'Güvenlik Seviyesi' değeri seçiniz!",
                    "securityMode_required": "Lütfen 'Güvenlik Modu' değeri seçiniz!"
                },
                "labels": {}
            },
        },
        "links": {
            "title": "Bağlantılar",
            "icon": "icon-shuffle",
            "perm": "common:view",
            "list": {
                "title": "Bağlantı Listesi",
                "icon": "icon-shuffle",
                "basePerm": "links",
                "perm": "#list",
                "actions": {
                    "create": {
                        "title": "Bağlantı Ekle",
                        "title_short": "Ekle",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#create"
                    },
                    "view": {
                        "title": "Bağlantı Detayları",
                        "title_short": "Detay",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "edit": {
                        "title": "Bağlantı Düzenle",
                        "title_short": "Düzenle",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    },
                    "delete": {
                        "title": "Bağlantı Sil",
                        "title_short": "Sil",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete"
                    }
                },
                "fields": {
                    "status": "Durum",
                    "srcPort": "Kaynak",
                    "destPort": "Hedef",
                    "securityLevel": "Güvenlik Seviyesi",
                    "medium": "Ortam"
                },
                "messages": {
                    "delete_confirm": "'{{dto.id}}' nolu bağlantıyı silmek istediğinize emin misiniz?",
                    "delete_success": "'{{dto.id}}' nolu bağlantı başarıyla silinmiştir!",
                }
            },
            "edit": {
                "basePerm": "links",
                "modes": {
                    "edit": {
                        "title": "Bağlantı Düzenle",
                        "icon": "fa fa-pencil",
                        "perm": "#edit",
                    },
                    "create": {
                        "title": "Bağlantı Ekle",
                        "icon": "fa fa-plus",
                        "perm": "#create",
                    }
                },
                "actions": {
                    "edit_uplink": {
                        "title": "Uplink Düzenle",
                        "perm": "#edit"
                    },
                    "edit_downlink": {
                        "title": "Downlink Düzenle",
                        "perm": "#edit"
                    },
                    "edit_delay": {
                        "title": "Gecikme Ölç",
                        "perm": "#edit"
                    },
                    "start_delay": {
                        "title": "Başlat",
                        "perm": "#edit"
                    },
                    "stop_delay": {
                        "title": "Durdur",
                        "perm": "#edit"
                    },
                    "measure_delay_jitter": {
                        "title": "Gecikme ve Seğirme Ölç",
                        "perm": "#edit"
                    },
                    "measure_delay_jitter_not": {
                        "title": "Gecikme ve Seğirme Ölçme",
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
                        "label": "Güvenlik Seviyesi",
                        "placeholder": "--seçiniz--",
                        "help_line": "",
                        "help_block": "",
                    },
                    "wanLink": {
                        "label": "WAN Bağlantısı",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "measureDelay": {
                        "label": "Gecikme Ölç",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "medium": {
                        "label": "Ortam",
                        "placeholder": "--seçiniz--",
                        "help_line": "",
                        "help_block": "",
                    },
                    "destQueue": {
                        "label": "Hedef Sıra No",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    },
                    "sourceQueue": {
                        "label": "Kaynak Sıra No",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": "",
                    }
                },
                "messages": {
                    "save_success": "'{{dto.id}}' nolu bağlantı başarıyla güncellenmiştir.",
                    "create_success": "'{{dto.id}}' nolu bağlantı başarıyla oluşturulmuştur.",
                    "measure_delay_jitter": "Gecikme ve Seğirme başarıyla ölçülmeye başlanmıştır.",
                    "measure_delay_jitter_not": "Gecikme ve Seğirme ölçülmesi başarıyla sonlandırılmıştır.",
                    "create_not_allowed": "Elle bağlantı verisi eklenemez.",
                    "securityLevel_required": "Lütfen 'Güvenlik Seviyesi' değeri seçiniz!",
                    "title_src2dest": "{{title}} [{{dto.srcPort.id}} -> {{dto.destPort.id}}]"
                },
                "labels": {}
            },
        },
        "alarms": {
            "title": "Alarmlar",
            "icon": "fa fa-bell",
            "perm": "common:view",
            "list": {
                "title": "Alarmlar",
                "icon": "fa fa-bell",
                "basePerm": "alarms",
                "perm": "#list",
                "actions": {
                    "view": {
                        "title": "Alarm Detayları",
                        "title_short": "Detay",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "view_logs": {
                        "title": "Alarm Günlükleri",
                        "title_short": "Günlükler",
                        "icon": "fa fa-list-alt",
                        "color": "default",
                        "perm": "alarm_logs:list"
                    },
                    "resolve": {
                        "title": "Çözümle",
                        "title_short": "Çözümle",
                        "icon": "fa fa-gavel",
                        "color": "green-turquoise",
                        "perm": "alarm_logs:list"
                    },
                    "edit": {
                        "title": "Alarm Tanımı Düzenle",
                        "title_short": "Düzenle",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    },
                    "emergency": {
                        "title": "Politika Aksiyonlarını Uygula",
                        "title_short": "Politika Aksiyonlarını Uygula",
                        "icon": "fa fa-medkit",
                        "color": "red-sunglo",
                        "perm": "emergency_pol:start_stop_vnf"
                    }
                },
                "fields": {
                    "id": "Alarm No",
                    "id_short": "No",
                    "status": "Durumu",
                    "status_short": "Drm",
                    "severity": "Aciliyet",
                    "severity_short": "Acl",
                    "name": "Adı",
                    "sourceHost": "Kaynak Birim",
                    "resource": "Modül",
                    "time": "Zaman",
                    "vtnname": "Sanal Ağ"
                },
                "messages": {
                    "emergency": "'{{dto.name}}' isimli Acil Durum Senaryosu oluşmuştur. Politika aksiyonlarını başlatmak ister misiniz?",
                    "emergency_confirm": "Politika Aksiyonları uygulanmaktadır."
                }
            },
            "notify": {
                "title": "Alarmlar",
                "labels": {
                    "alarm_on": "{{count}} {{iconOptions.title}} Alarm Açıldı!",
                    "alarm_off": "{{count}} {{iconOptions.title}} Alarm Kapandı!",
                    "view_all": "hepsini gör",
                    "alarm_count": '<span class="bold">{{count}}</span> bildirim'
                }
            },
            "notify_event": {
                "title": "Alarm Olayları",
                "labels": {
                    "alarm_on": "{{count}} {{iconOptions.title}} Alarm Olayı Açıldı!",
                    "alarm_off": "{{count}} {{iconOptions.title}} Alarm Olayı Kapandı!",
                    "view_all": "hepsini gör",
                    "alarm_count": '<span class="bold">{{count}}</span> bildirim'
                }
            }
        },
        "alarm_events": {
            "title": "Alarm Olayları",
            "icon": "fa fa-warning",
            "perm": "common:view",
            "list": {
                "title": "Alarm Olayları",
                "icon": "fa fa-warning",
                "basePerm": "alarms",
                "perm": "#list",
                "actions": {
                    "view": {
                        "title": "Alarm Olay Detayları",
                        "title_short": "Detay",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view"
                    },
                    "view_logs": {
                        "title": "Alarm Olay Günlükleri",
                        "title_short": "Günlükler",
                        "icon": "fa fa-list-alt",
                        "color": "default",
                        "perm": "alarm_logs:list"
                    },
                    "edit": {
                        "title": "Alarm Olay Düzenle",
                        "title_short": "Düzenle",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#edit"
                    }
                },
                "fields": {
                    "id": "Alarm No",
                    "id_short": "No",
                    "status": "Durumu",
                    "status_short": "Drm",
                    "severity": "Aciliyet",
                    "severity_short": "Acl",
                    "name": "Adı",
                    "sourceHost": "Kaynak Birim",
                    "resource": "Modül",
                    "time": "Zaman",
                    "vtnname": "Sanal Ağ"
                },
                "messages": {}
            },
        },
        "alarm_sources": {
            "title": "Alarm Kaynakları",
            "icon": "fa fa-database",
            "perm": "common:view",
            "list": {
                "title": "Alarm Kaynakları",
                "icon": "fa fa-database",
                "basePerm": "alarm_def",
                "perm": "#view",
                "actions": {
                    "edit_source": {
                        "title": "Alarm Kaynağı Düzenle",
                        "title_short": "Düzenle",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "source": "Alarm Kaynak İsmi",
                    "severity": "Alarm Derecesi",
                    "correction": "Düzeltme Aksiyonu",
                },
            },
            "edit": {
                "basePerm": "alarms",
                "modes": {
                    "edit": {
                        "title": "Alarm Kaynağı Düzenle",
                        "icon": "fa fa-pencil",
                        "perm": "#view",
                    },
                },
                "actions": {},
                "fields": {
                    "name": {
                        "label": "Alarm Kaynak Adı",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                    "alarm_severity": {
                        "label": "Alarm Derecesi",
                        "placeholder": "--seçiniz--",
                        "help_line": "",
                        "help_block": ""
                    },
                    "alarm_correction": {
                        "label": "Düzeltme Aksiyonu",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                },
                "messages": {
                    "save_success": "Alarm kaynağı başarıyla güncellenmiştir.",
                },
                "labels": {}
            },
        },
        "alarm_notif": {
            "title": "Alarm Uyarıları",
            "icon": "fa fa-envelope",
            "perm": "common:view",
            "list": {
                "title": "Alarm Uyarıları",
                "icon": "fa fa-envelope",
                "basePerm": "alarm_notif",
                "perm": "#view",
                "actions": {
                    "edit_notif": {
                        "title": "Alarm Uyarısı Düzenle",
                        "title_short": "Düzenle",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#view"
                    },
                    "create_notif": {
                        "title": "Alarm Uyarısı Ekle",
                        "title_short": "Ekle",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#view"
                    },
                    "delete_notif": {
                        "title": "Alarm Uyarısı Sil",
                        "title_short": "Sil",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "source": "Alarm Kaynakları",
                    "severity": "Alarm Dereceleri",
                    "mvtn": "Sanal Ağlar",
                    "email": "E-posta Listesi"
                },
                "messages": {
                    "delete_confirm": "Seçilen uyarı tanımını silmek istediğinize emin misiniz?",
                    "delete_success": "Uyarı tanımı başarıyla silinmiştir!",
                },
            },
            "edit": {
                "basePerm": "alarms",
                "modes": {
                    "create": {
                        "title": "Alarm Uyarısı Ekle",
                        "icon": "fa fa-plus",
                        "perm": "#view",
                    },
                    "edit": {
                        "title": "Alarm Uyarısı Düzenle",
                        "icon": "fa fa-pencil",
                        "perm": "#view",
                    },
                    "delete": {
                        "title": "Alarm Uyarı Sil",
                        "title_short": "Sil",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete"
                    }
                },
                "actions": {},
                "fields": {
                    "alarm_source": {
                        "label": "Alarm Kaynakları",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                    "mvtn": {
                        "label": "Sanal Ağlar",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                    "alarm_severity": {
                        "label": "Alarm Dereceleri",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                    "email": {
                        "label": "E-posta Listesi",
                        "placeholder": "",
                        "help_line": "",
                        "help_block": ""
                    },
                },
                "messages": {
                    "save_success": "Alarm uyarısı başarıyla güncellenmiştir.",
                },
                "labels": {
                    "emails_help": "Her e-posta adresi tek bir satıra gelecek şekilde giriş yapınız",
                }
            },
        },
        "alarm_logs": {
            "title": "Alarm Günlükleri",
            "icon": "fa fa-list-alt",
            "perm": "common:view",
            "list": {
                "title": "Alarm Günlükleri",
                "icon": "fa fa-list-alt",
                "basePerm": "alarm_logs",
                "perm": "#list",
                "actions": {
                    "view": {
                        "title": "Detaylar",
                        "title_short": "Detay",
                        "icon": "fa fa-info-circle",
                        "color": "default",
                        "perm": "#view"
                    },
                    "archive": {
                        "title_short": "Arşiv",
                        "icon": "fa fa-archive",
                        "color": "blue-madison",
                        "perm": "#view"
                    },
                    "current": {
                        "title_short": "Güncel",
                        "icon": "fa fa-calendar",
                        "color": "blue-madison",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "id": "Alarm No",
                    "id_short": "No",
                    "status": "Durumu",
                    "status_short": "Drm",
                    "severity": "Aciliyet",
                    "severity_short": "Acl",
                    "name": "Adı",
                    "source": "Kaynak",
                    "resource": "Modül",
                    "time": "Zaman",
                    "description": "Açıklama",
                    "type": "Tipi",
                    "alarmStatus": "Alarm Durumu",
                    "sourceHost": "Kaynak Birim",
                    "sourceInstance": "Kaynak Instans",
                    "vtnName": "Sanal Ağ",
                    "solveTime": "Çözülme Zamanı",
                    "reportingMethod": "Bildirim Yöntemi",
                    "resolver": "Çözen Kişi",
                    "resolveNote": "Çözüm Notu"
                },
                "messages": {
                    "select_item": "Lütfen detaylar için listeden bir günlük kaydı seçiniz. "
                },
                "labels": {
                    "all": "Hepsi"
                }
            },
            "details": {
                "title": "{{type}} : {{name}}",
                "title_no_selection": "Detay Yok",
                "icon": "fa fa-list-alt",
                "basePerm": "alarm_logs",
                "perm": "#view",
                "actions": {},
                "fields": {
                    "id": "Alarm No",
                    "id_short": "No",
                    "status": "Durumu",
                    "status_short": "Drm",
                    "severity": "Aciliyet",
                    "severity_short": "Acl",
                    "name": "Adı",
                    "source": "Kaynak",
                    "resource": "Modül",
                    "time": "Zaman",
                    "solveTime": "Çözülme Zamanı",
                    "description": "Açıklama",
                    "type": "Tipi",
                    "alarmStatus": "Alarm Durumu",
                    "sourceHost": "Kaynak Birim",
                    "targetHost": "Hedef Birim",
                    "sourceInstance": "Kaynak Instans",
                    "vtnName": "Sanal Ağ",
                    "reportingMethod": "Bildirim Yöntemi",
                    "resolver": "Çözen Kişi",
                    "detail": "Detay",
                    "resolveNote": "Çözüm Notu"
                },
                "messages": {},
            },
            "resolve": {
                "title": "Alarm Çözümle",
                "icon": "fa fa-gavel",
                "basePerm": "alarm_logs",
                "perm": "#view",
                "fields": {
                    "resolveNote": "Çözüm Notu"
                },
                "messages": {
                    "save_success": "Alarm çözüm notu başarıyla eklenmiştir.",
                }
            }
        },
        "logs": {
            "title": "Günlükler",
            "icon": "fa fa-file-text",
            "perm": "common:view",
            "list": {
                "title": "Günlükler",
                "icon": "fa fa-file-text",
                "basePerm": "alarm_logs",
                "perm": "#list",
                "actions": {
                    "view": {
                        "title": "Detaylar",
                        "title_short": "Detay",
                        "icon": "fa fa-info-circle",
                        "color": "default",
                        "perm": "#view"
                    },
                    "select_column": {
                        "title": "Tablo Kolonlarını Seçin",
                        "title_short": "Kolon Seç",
                        "icon": "fa fa-columns",
                        "color": "default",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "status": "Durumu",
                    "status_short": "Drm",
                    "name": "Adı",
                    "source": "Kaynak",
                    "time": "Zaman",
                    "description": "Açıklama",
                    "type": "Tipi",
                    "sourceIP": "Kaynak IP",
                    "sourceMAC": "Kaynak MAC",
                    "sourcePort": "Kaynak Port",
                    "destinationIP": "Hedef IP",
                    "destinationMAC": "Hedef MAC",
                    "destinationPort": "Hedef Port",
                    "sourceInstance": "Kaynak Instans",
                    "protocol": "Protokol",
                    "username": "Kullanıcı",
                    "module": "Modül",
                    "xid": "İstek Kodu",
                    "data": "Açıklama"
                },
                "messages": {
                    "select_item": "Lütfen detaylar için listeden bir günlük kaydı seçiniz. "
                },
                "labels": {
                    "all": "Hepsi"
                },
                "enums": {
                    "EDRSTATUS": {
                        "SUCCESS": {icon: 'fa fa-check-circle', color: 'green-turquoise', title: 'Başarılı'},
                        "FAIL": {icon: 'fa fa-minus', color: 'grey-steel', title: 'Başarısız'}
                    }
                }
            },
            "details": {
                "title": "Günlük Detayları",//"'{{name}}' Detayları",
                "title_no_selection": "Detay Yok",
                "icon": "fa fa-list-alt",
                "basePerm": "alarm_logs",
                "perm": "#view",
                "actions": {
                    "view": {
                        "title": "Detaylar",
                        "title_short": "Detay",
                        "icon": "fa fa-info-circle",
                        "color": "default",
                        "perm": "#view"
                    }
                },
                "fields": {
                    "status": "Durumu",
                    "status_short": "Drm",
                    "name": "Adı",
                    "source": "Kaynak",
                    "time": "Zaman",
                    "description": "Açıklama",
                    "type": "Tipi",
                    "sourceIP": "Kaynak IP",
                    "sourceMAC": "Kaynak MAC",
                    "sourcePort": "Kaynak Port",
                    "destinationIP": "Hedef IP",
                    "destinationMAC": "Hedef MAC",
                    "destinationPort": "Hedef Port",
                    "sourceInstance": "Kaynak Instans",
                    "protocol": "Protokol",
                    "detail": "Detay",
                    "module": "Modül",
                    "related_fields": "İlgili Kayıtlar",
                    "raw_edr_data": "Ham EDR verileri",
                    "query": "Sorgula",
                    "xid": "İstek Kodu",
                    "username": "Kullanıcı",
                    "key": "Özellik",
                    "value": "Değer",
                    "data": "Açıklama"
                },
                "messages": {},
                "labels": {
                    "all": "Hepsi"
                },
                "enums": {
                    "EDRSTATUS": {
                        "SUCCESS": {icon: 'fa fa-check-circle', color: 'green-turquoise', title: 'Başarılı'},
                        "FAIL": {icon: 'fa fa-minus', color: 'grey-steel', title: 'Başarısız'}
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
            "title": "WLAN Bağlantı Yönetimi",
            "icon": "fa fa-shield",
            "perm": "common:view",
            "list": {
                "title": "WAN Bağlantı Listesi",
                "icon": "icon-map",
                "basePerm": "wanPortInfo",
                "perm": "#list",
                "actions": {
                    "create_wlan": {
                        "title": "WLAN Ekle",
                        "title_short": "Ekle",
                        "icon": "fa fa-plus-circle",
                        "color": "blue-madison",
                        "perm": "#create",
                    },
                    "view_wlan": {
                        "title": "WLAN Detayları",
                        "title_short": "Detay",
                        "icon": "fa fa-eye",
                        "color": "default",
                        "perm": "#view",
                    },
                    "edit_wlan": {
                        "title": "WLAN Düzenle",
                        "title_short": "Düzenle",
                        "icon": "fa fa-pencil",
                        "color": "green-meadow",
                        "perm": "#create",
                    },
                    "delete_wlan": {
                        "title": "WLAN Sil",
                        "title_short": "Sil",
                        "icon": "fa fa-trash-o",
                        "color": "btn-outline uppercase red-sunglo",
                        "perm": "#delete",
                    }
                },
                "fields": {
                    "status": "Durum",
                    "wlan_link_name": "WAN Bağlantı Adı",
                    "src_cluster": "Kaynak Küme",
                    "dst_cluster": "Hedef Küme",
                    "super_port": "Super Port",
                    "delay": "Gecikme",
                    "jitter": "Seğirme",
                    "loss": "Kayıp",
                    "desc": "Açıklama"
                },
                "messages": {
                    "delete_confirm": "'{{dto.name}}' isimli WLANI silmek istediğinize emin misiniz?",
                    "delete_success": "'{{dto.name}}' isimli WLAN başarıyla silinmiştir!",
                }
            },
            "create": {},
            "edit": {
                "basePerm": "wanPortInfo",
                "title": "WAN Bağlantı",
                "modes": {
                    "edit": {
                        "title": "WAN Bağlantı Düzenle",
                        "icon": "fa fa-pencil",
                        "perm": "#create",
                    },
                    "create": {
                        "title": "WAN Bağlantı Ekle",
                        "icon": "fa fa-plus",
                        "perm": "#create",
                    }
                },
                "actions": {},
                "fields": {
                    "wan_link_name": {
                        "label": "WAN Bağlantı Adı",
                        "placeholder": "Bağlantı Adı yazınız..",
                        "help_line": "",
                        "help_block": ""
                    },
                    "switch": {
                        "label": "Anahtarlayıcı",
                        "placeholder": "Anahtarlayıcı seçiniz...",
                        "help_line": "Anahtarlayıcı seçiniz.",
                        "help_block": ""
                    },
                    "port": {
                        "label": "Port",
                        "placeholder": "Port Seçiniz...",
                        "help_line": "Seçiniz",
                        "help_block": ""
                    },
                    "super_port": {
                        "label": "Super Port",
                        "placeholder": "Port değeri seçiniz...",
                        "help_line": "Port değeri seçiniz.",
                        "help_block": ""
                    },
                    "dst_cluster": {
                        "label": "Hedef Küme",
                        "placeholder": "Hedef Küme değeri seçiniz...",
                        "help_line": "Hedef Küme değeri seçiniz.",
                        "help_block": ""
                    },
                    "link_speed": {
                        "label": "Bağlantı Hızı",
                        "placeholder": "Bağlantı Hızı yazınız...",
                        "help_line": "Bir Bağlantı Hızı yazınız.",
                        "help_block": ""
                    },
                    "link_type": {
                        "label": "Bağlantı Tipi",
                        "placeholder": "Bağlantı Tipi seçiniz...",
                        "help_line": "Bir Bağlantı Tipi seçiniz.",
                        "help_block": ""
                    },
                    "description": {
                        "label": "Açıklama"
                    }
                },
                "messages": {
                    "save_success": "'__dto.name' isimli WLAN başarıyla güncellenmiştir.",
                    "create_success": "'__dto.name' isimli WLAN başarıyla oluşturulmuştur.",
                },
                "labels": {}
            }
        },
        "wan_vtn_management": {
            "title": "Geniş Alan Ağ yönetimi",
            "icon": "fa fa-cloud",
            "fields": {
                "name": "Adı",
                "vlan_tag": "Vlan Etiketi",
                "people_count": "Kişi Sayısı",
                "active_cluster": "Aktif Olduğu Kümeler"
            },
            "actions":{
                "create_wan": {
                    "title": "WAN Ekle",
                    "title_short": "Ekle",
                    "icon": "fa fa-plus-circle",
                    "color": "blue-madison",
                    //"perm": "#create",
                },
                "edit_wan": {
                    "title": "WAN Düzenle",
                    "title_short": "Düzenle",
                    "icon": "fa fa-pencil",
                    "color": "green-meadow",
                    //"perm": "#edit",
                },
                "delete_wan": {
                    "title": "WAN Sil",
                    "title_short": "Sil",
                    "icon": "fa fa-trash-o",
                    "color": "btn-outline uppercase red-sunglo",
                    //"perm": "#delete",
                }
            },
            "messages": {
                "delete_confirm": "'__dto.name__' isimli WANı <b>silmek</b> istediğinize emin misiniz?",
                "delete_success": "'__dto.name__' isimli WAN başarıyla silinmiştir!"
            }
        },
        "bgp_management": {
            "title": "BGP Yönetimi",
            "icon": "fa fa-cloud",
            "fields": {
                "router": "Yönlendiriciler",
                "peer": "Komşuluk Tanımları",
                "route": "Rotalama Tablosu"
            },
            "router": {
                "list": {
                    "title": "Yönlendirici Listesi",
                    "icon": "fa fa-list",
                    "basePerm": "bgp",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Yönlendirici Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit": {
                            "title": "Yönlendirici Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete": {
                            "title": "Yönlendirici Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "type": "Tipi",
                        "name": "Adı",
                        "asNumber": "Otonom Sistem No",
                        "deviceId": "Anahtarlayıcı",
                        "ip": "IP Blok",
                        "controlPlaneIp": "Kontrol Düzlemi IP",
                        "mac": "MAC",
                        "vlanId": "Vland Id",
                    },
                    "messages": {
                        "delete_confirm": "'{{dto.name}}' isimli yönlendirici tanımını silmek istediğinize emin misiniz?",
                        "delete_success": "'{{dto.name}}' isimli yönlendirici tanımı başarıyla silinmiştir!"
                    }
                },
                "edit": {
                    "icon": "fa fa-pencil",
                    "basePerm": "bgp",
                    "perm": "#edit",
                    "modes": {
                        "edit": {
                            "title": "Yönlendirici Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Yönlendirici Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "type": "Yönlendirici Tipi",
                        "name": "Yönlendirici Adı",
                        "asNumber": "Otonom Sistem No",
                        "deviceId": "Bağlı Anahtarlayıcı",
                        "port": "Bağlı Anahtarlayıcı Portu",
                        "ip": "IP Bloku",
                        "controlPlaneIp": "Kontrol Düzlemi IP",
                        "bgpPort": "BGP Portu",
                        "bgpPassword": "BGP Şifresi",
                        "mac": "MAC Adresi",
                        "vlanId": "Vlan Id",
                    },
                    "messages": {
                        "save_success": "'{{dto.name}}' isimli yönlendirici tanımı başarıyla güncellendi",
                        "create_success": "'{{dto.name}}' isimli yönlendirici tanımı başarıyla oluşturuldu"
                    }
                }
            },
            "peer": {
                "list": {
                    "title": "Komşuluk Tanım Listesi",
                    "icon": "fa fa-list",
                    "basePerm": "bgp",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Yönlendirici Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit": {
                            "title": "Yönlendirici Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "relation": {
                            "title": "Komşuluk İletişim Durumu",
                            "title_short": "Komşuluk",
                            "icon": "fa fa-heartbeat",
                            "color": "purple-plum",
                            "perm": "#list"
                        },
                        "delete": {
                            "title": "Yönlendirici Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "name": "Sözcü Adı",
                        "peerList": "Eş Listesi",
                        "connectRetry": "Bağlantı Tekrarı",
                        "holdTime": "Bekleme Süresi",
                        "keepaliveInterval": "Yineleme Süresi",
                        "minimumAdvertisementInterval": "Min. Yayın Aralığı",
                    },
                    "messages": {
                        "delete_confirm": "Komşuluk tanımını silmek istediğinize emin misiniz?",
                        "delete_success": "Komşuluk tanımı başarıyla silinmiştir!"
                    }
                },
                "edit": {
                    "icon": "fa fa-pencil",
                    "basePerm": "bgp",
                    "perm": "#edit",
                    "modes": {
                        "edit": {
                            "title": "Komşuluk Düzenle",
                            "icon": "fa fa-pencil",
                            "perm": "#edit",
                        },
                        "create": {
                            "title": "Komşuluk Ekle",
                            "icon": "fa fa-plus",
                            "perm": "#create",
                        }
                    },
                    "fields": {
                        "speaker": "Sözcü Yönlendirici",
                        "connectRetry": "Bağlantı Tekrarı",
                        "holdTime": "Bekleme Süresi",
                        "keepaliveInterval": "Yineleme Süresi",
                        "minimumAdvertisementInterval": "Min. Yayın Aralığı",
                        "peerList": "Eş Yönlendiriciler (Peer Routes)",
                    },
                    "name": "Adı",
                    "asNumber": "Otonom No",
                    "ip": "IP Blok",
                    "second": "saniye"
                },
                "relation": {
                    "icon": "fa fa-heartbeat",
                    "basePerm": "bgp",
                    "perm": "#list",
                    "title": "Komşuluk İletişim Durumu",
                    "fields": {
                        "name": "Eş Yönlendirici Adı",
                        "asNumber": "Otonom Sistem No",
                        "peerStatus": "İletişim Durumu",
                        "description": "Açıklama"
                    }
                }
            },
            "route": {
                "list": {
                    "title": "Rotalama Tablosu",
                    "icon": "fa fa-list",
                    "basePerm": "bgp",
                    "perm": "#list",
                    "actions": {
                        "create": {
                            "title": "Yönlendirici Ekle",
                            "title_short": "Ekle",
                            "icon": "fa fa-plus-circle",
                            "color": "blue-madison",
                            "perm": "#create"
                        },
                        "edit": {
                            "title": "Yönlendirici Düzenle",
                            "title_short": "Düzenle",
                            "icon": "fa fa-pencil",
                            "color": "green-meadow",
                            "perm": "#edit"
                        },
                        "delete": {
                            "title": "Yönlendirici Sil",
                            "title_short": "Sil",
                            "icon": "fa fa-trash-o",
                            "color": "btn-outline uppercase red-sunglo",
                            "perm": "#delete"
                        }
                    },
                    "fields": {
                        "name": "Yönlendirici Adı",
                        "prefix": "Ön Ek (Prefix)",
                        "nextHop": "Sonraki Hop",
                        "origin": "Protokol",
                    },
                    "messages": {
                        "delete_confirm": "Rota tanımını silmek istediğinize emin misiniz?",
                        "delete_success": "Rota tanımı başarıyla silinmiştir!"
                    }
                },
	            "edit": {
		            "icon": "fa fa-pencil",
		            "basePerm": "bgp",
		            "perm": "#edit",
		            "modes": {
			            "create": {
				            "title": "Rota Ekleme",
				            "icon": "fa fa-plus",
				            "perm": "#create",
			            }
		            },
		            "fields": {
			            "routes": "Rotalar",
		            },
		            "ip_error" : "Girdiğiniz ip'lerden birisi uygun formatta değil",
		            "warning" : "Her satırda tek bir rota tanımı olacak şekilde giriş yapınız. örn: 192.168.1.1/24",
		            "messages": {
			            "create_success": "Rota tanımı başarıyla oluşturuldu"
		            }
	            },
            }
        },
	    "bgp_filter": {
		    "title": "BGP Filtreleme",
		    "icon": "fa fa-cloud",
		    "fields": {
			    "set": "Tanımlı Setler",
			    "policy": "Politikalar",
			    "assignPolicy": "Politika Atama"
		    },
		    "set": {
			    "list": {
				    "title": "Tanımlı Setler",
				    "icon": "fa fa-list",
				    "basePerm": "bgp",
				    "perm": "#list",
				    "actions": {
					    "create": {
						    "title": "Set Ekle",
						    "title_short": "Ekle",
						    "icon": "fa fa-plus-circle",
						    "color": "blue-madison",
						    "perm": "#create"
					    },
					    "edit": {
						    "title": "Set Düzenle",
						    "title_short": "Düzenle",
						    "icon": "fa fa-pencil",
						    "color": "green-meadow",
						    "perm": "#edit"
					    },
					    "delete": {
						    "title": "Set Sil",
						    "title_short": "Sil",
						    "icon": "fa fa-trash-o",
						    "color": "btn-outline uppercase red-sunglo",
						    "perm": "#delete"
					    }
				    },
				    "fields": {
					    "definedSetType": "Tipi",
					    "name": "Adı",
					    "list": "Tanım Listesi",
					    "prefixList": "Ön Tanım Listesi",
				    },
				    "messages": {
					    "delete_confirm": "'{{dto.name}}' isimli set tanımını silmek istediğinize emin misiniz?",
					    "delete_success": "'{{dto.name}}' isimli set tanımı başarıyla silinmiştir!"
				    }
			    },
			    "edit": {
				    "icon": "fa fa-pencil",
				    "basePerm": "bgp",
				    "perm": "#edit",
				    "modes": {
					    "edit": {
						    "title": "Set Düzenle",
						    "icon": "fa fa-pencil",
						    "perm": "#edit",
					    },
					    "create": {
						    "title": "Set Ekle",
						    "icon": "fa fa-plus",
						    "perm": "#create",
					    }
				    },
				    "fields": {
					    "definedSetType": "Set Tipi",
					    "name": "Set Adı",
					    "list": "Değer Listesi",
					    "ipPrefix" : "IP Ön Ek",
					    "minMask" : "Min. Maske",
					    "maxMask" : "Max. Maske"
				    },
				    "messages": {
					    "save_success": "'{{dto.name}}' isimli set tanımı başarıyla güncellendi",
					    "create_success": "'{{dto.name}}' isimli set tanımı başarıyla oluşturuldu"
				    },
				    "labels":{
				    	"warning" : "Her satıra tek değer gelecek şekilde giriş yapınız. 'RegEx' girişi yapabilirsiniz"
				    }
			    }
		    },
		    "policy": {
			    "list": {
				    "title": "Politikalar",
				    "icon": "fa fa-list",
				    "basePerm": "bgp",
				    "perm": "#list",
				    "actions": {
					    "create": {
						    "title": "Politika Ekle",
						    "title_short": "Ekle",
						    "icon": "fa fa-plus-circle",
						    "color": "blue-madison",
						    "perm": "#create"
					    },
					    "edit": {
						    "title": "Politika Düzenle",
						    "title_short": "Düzenle",
						    "icon": "fa fa-pencil",
						    "color": "green-meadow",
						    "perm": "#edit"
					    },
					    "delete": {
						    "title": "Politika Sil",
						    "title_short": "Sil",
						    "icon": "fa fa-trash-o",
						    "color": "btn-outline uppercase red-sunglo",
						    "perm": "#delete"
					    }
				    },
				    "fields": {
					    "name": "Politika Adı",
					    "statementList": "Tanımlar",
				    },
				    "messages": {
					    "delete_confirm": "Bgp politikasını silmek istediğinize emin misiniz?",
					    "delete_success": "Bgp politikası başarıyla silinmiştir!"
				    }
			    },
			    "edit": {
				    "icon": "fa fa-pencil",
				    "basePerm": "bgp",
				    "perm": "#edit",
				    "modes": {
					    "edit": {
						    "title": "Politika Düzenle",
						    "icon": "fa fa-pencil",
						    "perm": "#edit",
					    },
					    "create": {
						    "title": "Politika Ekle",
						    "icon": "fa fa-plus",
						    "perm": "#create",
					    }
				    },
				    "fields": {
					    "name": "Politika İsmi",
					    "statementName" : "Tanım Adı",
						"asPathMatchSet" : "Os Politikası",
					    "neighborMatchSet" : "Komşuluk",
					    "prefixMatchSet" : "Ön Tanım",
					    "routeAction" : "Rotalama Aksiyonu"
				    },
				    "name": "Adı",
				    "conditionType": "Koşul Tipi",
				    "definedSets": "Tanımlı Setler",
				    "peerMode": "Eşleşme Modu",
				    "add" : "Ekle",
				    "condition" : "Koşul Tanımları",
				    "action" : "Aksiyon",
				    "newStatementName" : "Yeni Koşul",
				    "select" : "Seçiniz",
				    "messages": {
					    "save_success": "'{{dto.name}}' isimli politika tanımı başarıyla güncellendi",
					    "create_success": "'{{dto.name}}' isimli politika tanımı başarıyla oluşturuldu"
				    }
			    },
		    },
		    "assign_policy": {
			    "list": {
				    "title": "Politika Atama",
				    "icon": "fa fa-list",
				    "basePerm": "bgp",
				    "perm": "#list",
				    "actions": {
					    "edit": {
						    "title": "Politika Atama",
						    "title_short": "Düzenle",
						    "icon": "fa fa-pencil",
						    "color": "green-meadow",
						    "perm": "#edit"
					    }
				    },
				    "fields": {
					    "resourceType": "Kaynak",
					    "policyType": "Politika Tipi",
					    "defaultRouteAction": "Varsayılan Rotalama Aksiyonu",
					    "policyList": "Politika Listesi",
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
						    "title": "Politika Atama",
						    "icon": "fa fa-pencil",
						    "perm": "#edit",
					    },
				    },
				    "fields": {
					    "resourceType": "Kaynak Tipi",
					    "policyType": "Politika Tipi",
					    "defaultRouteAction": "Varsayılan Rotalama Aksiyonu",
					    "policyList": "Politika Listesi",
				    },
				    "messages": {
				    	"save_success" : "Politika atama başarıyla güncellenmiştir.",
					    "create_success" : "Politika başarıyla atanmıştır"
				    }
			    }
		    }
	    },
        "top_menu": {
            "network_management": {
                "title": "Ağ Yönetimi",
                "icon": "fa fa-share-alt",
                "perm": "common:view",
                "controller_management": {
                    "controller_settings": {
                        "title": "Kontrolcü Ayarları",
                        "icon": "fa fa-wrench fa-sub fa-sub-gavel",
                        "perm": "moduleNodeConfig:view"
                    }
                },
                "device_management": {
                    "title": "Ağ Bileşenleri Yönetimi",
                    "icon": "fa fa-server",
                    "perm": "common:view"
                },
                "traffic_management": {
                    "title": "Trafik Yönetimi",
                    "icon": "fa fa-map-signs",
                    "perm": "common:view"
                },
                "network_services": {
                    "title": "Ağ Servisleri Yönetimi",
                    "icon": "icon-layers",
                    "perm": "common:view",
                    "dhcp": {
                        "title": "DHCP Yönetimi",
                        "icon": "fa fa-globe",
                        "perm": "common:view",
                        "dhcp_settings": {
                            "title": "DHCP Ayarları",
                            "icon": "fa fa-wrench fa-sub fa-sub-globe",
                            "perm": "moduleNodeConfig:view"
                        }
                    },
                    "nat": {
                        "title": "NAT Yönetimi",
                        "icon": "",
                        "perm": "common:view"
                    }
                }
            },
            "network_virtualization": {
                "title": "Sanallaştırma",
                "icon": "fa fa-cloud",
                "perm": "common:view",
                "virtual_network": {
                    "title": "Sanallaştırma",
                    "icon": "fa fa-share-alt-square",
                    "perm": "common:view"
                }
            },
            "authentication": {
                "title": "Kimlik Denetimi",
                "icon": "fa fa-id-card-o",
                "perm": "common:view",
                "nac": {
                    "nac_settings": {
                        "title": "NAS Ayarları",
                        "icon": "fa fa-wrench fa-sub fa-sub-key",
                        "perm": "moduleNodeConfig:view"
                    }
                },
                "security_management": {
                    "title": "Güvenlik Yönetimi",
                    "icon": "fa fa-shield",
                    "perm": "common:view",
                }
            },
            "alarm": {
                "notifications": {
                    "title": "Alarm Bildirimleri",
                    "icon": "fa fa-flag",
                    "perm": "common:view",
                },
                "alarm_settings": {
                    "title": "Alarm Ayarları",
                    "icon": "fa fa-wrench fa-sub fa-sub-bell",
                    "perm": "moduleNodeConfig:view"
                }
            },
	        "centralDomain": "Merkez",
	        "noDomain": "Seçilebilecek alt alan yok",
	        "messages": {
		        "confirm_domain": "{{name}} alanına geçmek istediğinize emin misiniz?",
		        "confirm_central": "Merkezi alana geçmek istediğinize emin misiniz?",
		        "fetch_domain_fail" : "Alan bilgisi alınamadı",
		        "domain_change_success" : "{{name}} alanına başarıyla geçtiniz",
		        "domain_change_fail" : "{{name}} alanına geçilemedi"
	        },
        }
    }
};
