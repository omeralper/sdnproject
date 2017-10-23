/**
 * Created by yildirayme on 26.04.2016.
 */
/// <reference path="../../libs/searchbar_parser/searchBarParser.d.ts" />
import {Injectable, Injector} from "@angular/core";
import {Response} from "@angular/http";
import {Action} from "../commons/Action";
import {GenericResponse} from "../swagger/GenericResponse";
import {RETURNSTATUS} from "../swagger/RETURNSTATUS";
import * as CryptoJS from "crypto-js";

declare var is: Is;
import {ErrorInfo} from "../swagger/ErrorInfo";
import {ISessionInvalidator} from "./AuthenticationManager";
import {ApiHelper} from "./ApiHelper";
import {QueryOptions} from "../swagger/QueryOptions";
import {ISessionInvalidatorToken} from "../app.tokens";

/**
 * UI Releated Helper Functions
 */
@Injectable()
export class UIHelper {

    public DIALOG_BUTTONS;
    public BUTTONS_YES_NO: Array<Action>;
    public BUTTONS_YES_NO_CANCEL: Array<Action>;
    public BUTTONS_OK_CANCEL: Array<Action>;

    public static isLoaded = false;

    public isModalShown: boolean = false;
    public static API_TIMEOUT = 300;
    public static UNBLOCK_TIMEOUT = 15000;

    //INFO http://stackoverflow.com/questions/37002522/is-it-possible-to-inject-interface-with-angular2
    //constructor(@Inject(ISessionInvalidatorToken) public sessionInvalidator: ISessionInvalidator) { //public logger: Logger) { //, public router: Router
    constructor(public injector: Injector) { //public logger: Logger) { //, public router: Router

        if (UIHelper.isLoaded) {
            throw "UIHelper is singleton!";
        }
        UIHelper.isLoaded = true;

        // $(document).on('keyup.dialog',(e) => {
        //     if (e.keyCode === 27) {
        //         bootbox.hideAll();
        //     }
        //     if (e.keyCode === 13) {
        //         // if(this.formActions.length > 0)
        //         //     this.formActions[0].execute();
        //     }
        // });

        this.$DEFAULT_BLOCK_CONTAINER = $('body');

    }

    public makePluginsDefaultSettings() {

        /*
         // Bootstrap tooltip and jquery ui tooltip has same name and they conflict, we changed Jquery UI tooltip name to  'uitooltip'
         $.widget.bridge('uitooltip', $.ui.tooltip);

         // set default setting of "noty plugin", which is used for showing notifications
         $.noty.defaults = {
         layout: 'topCenter',
         theme: 'relax', // or 'relax' or 'bootstrapTheme' or 'defaultTheme'
         type: 'alert',
         dismissQueue: true, // If you want to use queue feature set this true
         template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
         animation: {
         open: 'animated fadeInDown', // Animate.css class names
         close: 'animated fadeOutUp', // Animate.css class names
         easing: 'swing',
         speed: 500 // opening & closing animation speed
         },
         maxVisible:5,
         timeout: 3000, // delay for closing event. Set false for sticky notifications
         closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
         callback: {
         onShow: function() {},
         afterShow: function() {},
         onClose: function() {},
         afterClose: function() {},
         onCloseClick: function() {}
         }
         };

         // set default setting of "bootbox plugin", which is used for showing alerts, confirms, dialogs
         bootbox.setDefaults({

         locale: this.getCurrentLang()
         });
         */

        this.initDefaultButtons();

        //save this variable to "self" variable, we'll use it in the following code.
        var self = this;
        // datatable default settings
        let $dataTables = this.dataTable();
        $.extend($dataTables.defaults,
            {
                autoWidth: false,
                responsive: true,
                lengthChange: true,
                lengthMenu: [
                    $.map($.t("common.datatables.lengthMenu", {returnObjectTrees: true}), (val, key) => [parseInt(val, 10)]),
                    $.map($.t("common.datatables.lengthMenu", {returnObjectTrees: true}), (val, key) => [key]),
                ],
                pageLength: 10,
                pagingType: "full_numbers",
                //"sScrollY": "522",
                //"bScrollCollapse": false,
                language: {
                    zeroRecords: $.t("common.datatables.zerorecords"),
                    nomatch: $.t("common.datatables.nomatch"),
                    emptyTable: $.t("common.datatables.nomatch"),
                    loadingRecords: $.t("common.datatables.loading"),
                    search: $.t("common.datatables.search"),
                    lengthMenu: $.t("common.datatables.lengthmenu"),
                    info: $.t("common.datatables.info"),
                    infoFiltered: $.t("common.datatables.infoFiltered"),
                    infoEmpty: $.t("common.datatables.infoEmpty"),
                    paginate: {
                        previous: $.t("common.datatables.prev_notext"),
                        next: $.t("common.datatables.next_notext"),
                        first: $.t("common.datatables.first"),
                        last: $.t("common.datatables.last")
                    }
                },
                //INFO: Here we use normal function definition on purpose to access the dynamic "this" variable
                //this will add ToolTip to columns that has "tooltip" attribute
                headerCallback: function (thead, data, start, end, display) {
                    let tr = $(thead);
                    if (!tr.hasClass('jstt')) {
                        let settings = this.fnSettings();
                        let columns = settings.aoColumns;

                        $.each(columns, (idx, col) => {
                            let $col = $(col.nTh);
                            if (is.existy(col.tooltip)) {
                                //INFO: if you put tooltip on the TH element, then tooltip will not work correctly
                                let ttspan = $("<span title='" + col.tooltip + "' rel='tooltip'>" + col.title + "</span>");
                                $col.empty().append(ttspan);
                                //ttspan.tooltip();
                            }

                            if (is.existy(col.help) || (is.existy(col.className) && col.className.indexOf('action_cell') != -1)) {
                                let helpString = col.help || $.t('common.fields.actions_help');
                                let helpSpan = $(`<span rel="tooltip" title="${helpString}" style="float:right;"><i class="fa fa-question-circle font-green-meadow"></i></span>`);
                                $col.append(helpSpan);
                                //helpSpan.tooltip();
                            }

                            if (col.searchable) {
                                let indexSpan = $(`<span style="float:left;position: relative;" class="badge badge-info js_search_ref hidden">#${idx + 1}</span>`);
                                $col.append(indexSpan);
                            }

                            $col.tooltip();
                        });

                        tr.addClass("jstt");
                    }
                },

                //INFO : this function is no longer needed, "draw.dt" event is handling tooltips now.
                // rowCallback: function (row, data, index) {
                //     self.populateTooltips($(row));
                // }
            });


        Inputmask.extendAliases({
            mobilePhone: {
                mask: "599-999 99 99"
            },
            dataPath: {
                mask: "##:##:##:##:##:##:##:##"
            },
            blockIp: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]/9[t]",
                definitions: {
                    i: {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs,
                                chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs,
                                new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                        },
                        cardinality: 1
                    },
                    t: {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return !isNaN(Number(chrs)) && +(maskset.buffer[pos - 1] + chrs) < 33;
                        },
                        cardinality: 1
                    }
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                }
            },
            ip24: {
                mask: "i[i[i]].i[i[i]].i[i[i]].0/24",
                definitions: {
                    i: {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs,
                                chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs,
                                new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                        },
                        cardinality: 1
                    },
                    t: {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return !isNaN(Number(chrs)) && +(maskset.buffer[pos - 1] + chrs) < 33;
                        },
                        cardinality: 1
                    }
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                }
            }
        });

        Highcharts.setOptions({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                borderColor: '#e7ecf1',
                borderWidth: 1,
                backgroundColor: null,
                plotShadow: false,
                zoomType: 'x',
            },
            global: {
                useUTC: false
            },
            lang: {
                contextButtonTitle: $.t('common.highChart.exporting.contextButtonTitle'),
                printChart: $.t('common.highChart.exporting.printChart'),
                downloadJPEG: $.t('common.highChart.exporting.downloadJPEG'),
                downloadPDF: $.t('common.highChart.exporting.downloadPDF'),
                downloadPNG: $.t('common.highChart.exporting.downloadPNG'),
                downloadSVG: $.t('common.highChart.exporting.downloadSVG'),
                resetZoom: $.t('common.highChart.resetZoom'),
                noData: $.t('common.highChart.noData')
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: true
            },
            exporting: {
                enabled: true,
                fallbackToExportServer: false,
                scale: 1
            },
        });
    }

    public populatei18nFields($container?: JQuery): JQuery {
        let $cnt = $($container || document);
        $cnt.localize();
        return $cnt;
    }

    private handleTooltipEvents($tooltips: JQuery) {
        $tooltips.on('shown.bs.tooltip', function () {
            let $elm = $(this);
            clearTimeout($elm.data('tooltip_timeout'));
            $elm.data('tooltip_timeout', setTimeout(() => {
                $elm.tooltip('hide');
            }, 3000));
            //console.warn('shown.bs.tooltip',$elm[0]);
        });

        $tooltips.on('hidden.bs.tooltip', function () {
            let $elm = $(this);
            clearTimeout($elm.data('tooltip_timeout'));
            //console.warn('hidden.bs.tooltip',$elm[0]);
        });
    }

    public populateTooltips($container?: JQuery): JQuery {
        console.info("populate tooltips",$container);
        let $cnt = $($container || document);
        if ($cnt) {
            $('[data-original-title]', $cnt).tooltip('destroy');

            let $parent;
            if ($cnt.attr('id') == 'theModal') {
                $parent = $cnt.find('div.modal-content');
            } else {
                $parent = $cnt.parents('div.modal-content');
            }
            if ($parent.length == 0) $parent = $('body');
            console.info("-> parent:",$parent);
            setTimeout(() => {
                let $tooltips = $('[rel=tooltip],[data-toggle=tooltip]', $cnt);
                $tooltips.tooltip({container: $parent[0]});
                this.handleTooltipEvents($tooltips);
            }, 300);
        }
        return $cnt;
    }

    public hideTooltips($container: JQuery): JQuery {
        let $cnt = $($container || document);
        if ($cnt) {
            $('[rel=tooltip],[data-toggle=tooltip]', $cnt).tooltip('hide');
        }
        return $cnt;
    }

    public setTooltip($container: JQuery, title?: string): JQuery {
        if ($container) {
            if ($container.data('original-title')) $container.tooltip('destroy');

            title = title || $.trim($container.text());

            $container.attr('rel', 'tooltip');
            $container.prop('title', title);

            let $parent = $container.parents('div.modal-content');
            if ($parent.length == 0) $parent = $('body');

            $container.tooltip({title: title, container: $parent[0]});
            $container.tooltip('show');
            this.handleTooltipEvents($container);
        }
        return $container;
    }

    public removeTooltip($container: JQuery): JQuery {
        if ($container) {
            $container.tooltip('destroy');

            $container.removeAttr('rel');
            $container.removeProp('title');

        }
        return $container;
    }


    /*    public populateTimeago(selector:string) {
     $(selector).timeago();
     }

     public disposeTimeago(selector: string) {
     $(selector).timeago("dispose");
     }*/

    public initICheckPlugin(container?: JQuery) {

        let $checkItems = container ? $("input", container) : $("input");

        if ($checkItems.length > 0) {
            $checkItems.iCheck('destroy');
            $checkItems.each(function () {
                let $el = $(this);
                let skin = (is.existy($el.data('skin'))) ? "_" + $el.data('skin') : "_square";
                let color = (is.existy($el.data('color'))) ? "-" + $el.data('color') : "-blue";

                var opt = {
                    checkboxClass: 'icheckbox' + skin + color,
                    radioClass: 'iradio' + skin + color,
                    increaseArea: "20%"
                }
                $el.iCheck(opt);
            });
        }
        // $checks.iCheck({
        //     checkboxClass: 'icheckbox_square-blue',
        //     radioClass: 'iradio_square-blue',
        //     increaseArea: '20%' // optional
        // });
    }

    /*
     public valideForm(form: JQuery) {
     return form.validate({
     errorElement: 'span',
     errorClass: 'help-block has-error',
     errorPlacement: function (error, element) {
     if (element.parents("label").length > 0) {
     element.parents("label").after(error);
     } else {
     element.after(error);
     }
     },
     highlight: function (label) {
     $(label).closest('.form-group').removeClass('has-error has-success').addClass('has-error');
     },
     success: function (label) {
     label.addClass('valid').closest('.form-group').removeClass('has-error has-success').addClass('has-success');
     },
     onkeyup: function (element) {
     $(element).valid();
     },
     onfocusout: function (element) {
     $(element).valid();
     }
     });
     }*/

    /*    public showLoading(container?: JQuery) {
     (container || $("body")).block({
     message: '<div class="loading"><i></i><i></i><i></i></div>',
     css: {
     border: 'none',
     backgroundColor: 'transparent',
     color: 'transparent'
     }
     });
     }

     public hideLoading(container?: JQuery) {
     (container || $("body")).unblock();
     }   */


    alert(message: string, type: DIALOG_TYPES = DIALOG_TYPES.INFO, callback?: DialogCallbackType) {
        this.alertEx(<IDialogOptions>{
            message: message,
            type: type,
            callback: callback // (selected) => { /*ignored */ }
        });
    }

    alertEx(options: IDialogOptions) {
        options.buttons = options.buttons || [this.DIALOG_BUTTONS.CLOSE];
        options.defaultButton = options.defaultButton || this.DIALOG_BUTTONS.CLOSE;
        options.type = options.type || DIALOG_TYPES.INFO;
        options.size = options.size || DIALOG_SIZES.SMALL;

        this.confirmEx(options);
    }

    public static NotificationStack: Array<JQuery> = [];

    notify(message: string, type: DIALOG_TYPES = DIALOG_TYPES.INFO, callback?: DialogCallbackType): JQuery {
        return this.notifyEx(<INotifyOptions>{
            message: message,
            type: type,
            callback: callback
        });
    }

    notifyEx(options: INotifyOptions): JQuery {
        if (!options.isSilent) this.clearNotifications();

        options.type = options.type || DIALOG_TYPES.INFO;
        options.isSticky = is.existy(options.isSticky) ? options.isSticky : false;
        options.showCloseButton = is.existy(options.showCloseButton) ? options.showCloseButton : true;
        options.showProgressBar = is.existy(options.showProgressBar) ? options.showProgressBar : true;
        options.closeTimeout = is.existy(options.closeTimeout) ? options.closeTimeout : 5000;
        options.position = options.position || NOTIFY_POSITIONS.TOP_CENTER;

        let toastrOptions: ToastrOptions = <ToastrOptions> {
            debug: false,
            newestOnTop: true,
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
            preventDuplicates: false,
            showDuration: 300,
            hideDuration: 300,
            showEasing: "swing",
            hideEasing: "linear",
            allowHtml: true,

            closeButton: options.showCloseButton,
            progressBar: options.showProgressBar,
            positionClass: options.position.toString(),
            timeOut: !options.isSticky ? options.closeTimeout : -1,
            extendedTimeOut: !options.isSticky ? options.closeTimeout : -1,
            onclick: () => {
                if (options.callback) options.callback(this.DIALOG_BUTTONS.OK);
            },
            // onShown: ()=> {
            // },
            onHidden: () => {
                if (options.callback) options.callback(this.DIALOG_BUTTONS.CLOSE);
            }

        };

        let notify = toastr[options.type](options.message, options.title, toastrOptions);
        UIHelper.NotificationStack.push(notify);
        return notify;
    }

    clearNotification(obj: JQuery) {
        toastr.clear(obj);
        UIHelper.NotificationStack = UIHelper.NotificationStack.filter((notify) => notify != obj);
    }

    clearLastNotification() {
        if (UIHelper.NotificationStack.length > 0) {
            let notify = UIHelper.NotificationStack.pop();
            if (notify) toastr.clear(notify);
        }
    }

    clearNotifications() {
        toastr.clear();
        UIHelper.NotificationStack = [];
    }


    public static BootBoxStack: Array<IDialogOptions> = [];

    confirm(message: string, callback: DialogCallbackType) {
        return this.confirmEx(<IDialogOptions>{
            message: message,
            callback: callback
        });
    }

    confirmEx(options: IDialogOptions) {
        options.size = options.size || DIALOG_SIZES.NORMAL;
        options.buttons = options.buttons || this.BUTTONS_YES_NO;
        options.defaultButton = options.defaultButton || options.buttons[options.buttons.length - 1];
        options.type = options.type || DIALOG_TYPES.QUESTION;

        // let titleI18n:any = $.t('dialogs.types.' + options.type.toString(),{ returnObjectTrees:true });
        //
        // options.title = options.title || titleI18n.title;

        UIHelper.BootBoxStack.push(options);
        return this.showBootBox();
    }

    public static isBootboxVisible: boolean = false;

    public showBootBox() {
        if (!UIHelper.isBootboxVisible && UIHelper.BootBoxStack.length > 0) {
            UIHelper.isBootboxVisible = true;
            this.clearNotifications();

            let options = UIHelper.BootBoxStack.shift();

            let titleI18n: any = $.t('dialogs.types.' + options.type.toString(), {returnObjectTrees: true});

            let execute = (action) => {
                if (options.callback) {
                    options.callback(action);
                }
                UIHelper.isBootboxVisible = false;
                this.showBootBox();
            };

            let buttons: BootboxButtonMap = {};

            options.buttons.forEach((action, idx, all) => {
                buttons[action.id] = {
                    label: action.icon ? ('<i class="' + action.icon + '"></i> ' + action.title) : action.title,
                    className: action.color +
                    (action.id == options.defaultButton.id ? ' default_action' : '') +
                    (idx == 0 ? ' btn-primary' : ''),
                    callback: () => {
                        execute(action);
                    }
                };
            });

            return bootbox.dialog({
                message: options.message,
                title: '<span class="' + titleI18n.color + '"><i class="' + titleI18n.icon + '"></i> ' + (options.title || titleI18n.title) + '</span>',
                closeButton: false,
                size: options.size.toString(),
                //backdrop: null,
                buttons: buttons,
                onEscape: () => {
                    execute(options.defaultButton);
                }
            });
        }
    }

    clearConfirmations() {
        bootbox.hideAll();
    }

    /**
     * This function MUST BE used for all API calls. This function checks the response of API calls and displays appropriate error messages if require.
     * Also funcitons default behaivoir could be modified with optional parameters below.
     * @param data  API response object to be checked.
     * @param successMessage  [optional] Message to be displayed when operation completes succesfully. If not defined, not message is shown.
     * @param handleErrors [optional] Specifies if any message is displayed if there is an error. Default value is "true", so messages ar displayed when errors occur.
     * @param invalidSessionRedirectURL [optional] URL tobe redirected when API responds with INVALID_SESSION. Default value defined in ApiHelper.DEFAULT_ADMIN_REDIRECT_URL
     * @returns {boolean} Return "true" is API call is succesfull.
     */
    processResponse(data: (string | GenericResponse | ProgressEvent | Response), successMessage: (
        boolean
        | string) = null, handleErrors: boolean = true, invalidSessionRedirectURL: string = ApiHelper.DEFAULT_ADMIN_REDIRECT_URL): boolean {
        let i18nBaseKey = 'common.messages.RETURN_STATUS.';
        if (is.existy(data)) {
            let res: GenericResponse;

            if (is.string(data)) {
                try {
                    res = <GenericResponse>JSON.parse(<string>data);
                } catch (e) {
                    console.error('Parse Error', e);
                    this.notify($.t(i18nBaseKey + 'SERVER_ERROR'), DIALOG_TYPES.ERROR);
                    return false
                }
            } else if (data instanceof Response) {
                return this.processResponse(data.text());
            } else if ((<ProgressEvent>data).currentTarget) {
                //TODO AngularJS has bug here, it is not sending actual error codes. So we treat them all as network error.
                //Related task : https://github.com/angular/angular/pull/9355
                res = <GenericResponse>{
                    status: RETURNSTATUS.SERVER_ERROR,//(<ProgressEvent>data).currentTarget.status,
                    token: null,
                    errorInfo: <ErrorInfo>{
                        code: 999,
                        message: "Network error"
                    }
                };
            } else {
                res = <GenericResponse>data;
            }

            if (is.existy(res) && is.existy(res.status)) { //} && is.existy(res.token)) {
                let i18nKey = i18nBaseKey + res.status.toString();
                switch (res.status) {
                    case RETURNSTATUS.ACCESS_LIMITED: {
                        if (handleErrors) this.alert($.t(i18nKey), DIALOG_TYPES.WARNING);
                        return false;
                    }
                    case RETURNSTATUS.SERVER_ERROR:
                    case RETURNSTATUS.ERROR: {
                        if (handleErrors) {
                            let dialogType: DIALOG_TYPES = (res.status == RETURNSTATUS.ERROR ? DIALOG_TYPES.WARNING : DIALOG_TYPES.ERROR);
                            let extraMessage: string = "";
                            if (is.existy(res.errorInfo)) {
                                if (is.existy(res.errorInfo.code)) {
                                    let errorSpecificMessage = $.t('common.messages.ERROR_CODES.ERR' + res.errorInfo.code);
                                    if (is.existy(errorSpecificMessage)) {
                                        this.notify(errorSpecificMessage, dialogType);
                                        return false;
                                    } else {
                                        extraMessage = `(${res.errorInfo.code}) ${res.errorInfo.message}`;
                                    }
                                }
                            }
                            this.notify($.t(i18nKey, {message: extraMessage}), dialogType);
                        }
                        return false;
                    }
                    case RETURNSTATUS.NOT_MODIFIED: {
                        //DO NOTHING
                        console.info('DATA NOT MODIFIED', res);
                        return false;
                    }
                    case RETURNSTATUS.ACCESS_DENIED:
                    case RETURNSTATUS.NOT_IMPLEMENTED:
                    case RETURNSTATUS.DEPRECATED:
                        //case RETURNSTATUS.SERVER_ERROR:
                    {
                        if (handleErrors) this.alert($.t(i18nKey), DIALOG_TYPES.ERROR);
                        return false;
                    }
                    case RETURNSTATUS.INVALID_SESSION: {
                        let sessionInvalidator = this.injector.get(ISessionInvalidatorToken);
                        sessionInvalidator.terminateSession(false, invalidSessionRedirectURL);
                        return false;
                    }
                    case RETURNSTATUS.SUCCESS: {
                        if (is.existy(successMessage)) {
                            let mes = is.string(successMessage) ? successMessage.toString() : $.t(i18nKey);
                            this.notify(mes, DIALOG_TYPES.SUCCESS);
                        }
                        return true;
                    }
                }
            }
        }

        this.notify($.t(i18nBaseKey + 'SERVER_ERROR'), DIALOG_TYPES.ERROR);
        return false;
    }


    showError($container: JQuery, message: string, detail?: string, title?: string) {
        if ($container) {
            title = (title || $.t('common.project_title'));
            detail = (detail || '');
            let return_home = $.t('common.messages.return_home');
            let default_route = '/welcome'; //TODO get default route from RouteConfig
            let template = `
            <div class="row">
                <div class="col-md-12 page-500" style="margin: 5% 0 0 0">
                    <div class=" number font-red">${title}</div>
                    <div class=" details">
                        <h3>${message}</h3>
                        <p>${detail}</p>
                        <p>
                            <a href="${default_route}" class="btn red btn-outline">${return_home}</a>
                            <br>
                        </p>
                    </div>
                </div>
            </div>        
        `;

            $container.html(template);
        }
    }

    formatBytes(bytes, decimals?) {
        if (is.not.existy(bytes) || bytes == 0) return '0 ' + $.t("common.units.bytes");
        if (isNaN(bytes)) return '-';
        if (bytes < 0) return bytes;
        var k = 1024;
        var dm = decimals + 1 || 0;
        var sizes = [$.t("common.units.bytes"), 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    formatPackets(packets) {
        if (is.not.existy(packets) || packets == 0) return '0 ' + $.t("common.units.packets.0");
        if (isNaN(packets)) return '-';
        if (packets < 0) return packets;
        var k = 1000;
        var dm = 0;
        var sizes = [$.t("common.units.packets.0"), $.t("common.units.packets.1"), $.t("common.units.packets.2"), $.t("common.units.packets.3"), $.t("common.units.packets.4")];
        var i = Math.floor(Math.log(packets) / Math.log(k));
        return parseFloat((packets / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    formatBandwidth(bw) {
        if (is.not.existy(bw) || bw == 0) return '0 ' + $.t("common.units.data_rate.0");
        if (isNaN(bw)) return '-';
        if (bw < 0) return bw;
        var k = 1000;
        var dm = 0;
        var sizes = [$.t("common.units.data_rate.0"), $.t("common.units.data_rate.1"), $.t("common.units.data_rate.2"), $.t("common.units.data_rate.3"), $.t("common.units.data_rate.4")];
        var i = Math.floor(Math.log(bw) / Math.log(k));
        return parseFloat((bw / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    formatRate(rate) {
        if (is.not.existy(rate) || rate == 0) return '0 ' + $.t("common.units.data_rate.0");
        if (isNaN(rate)) return '-';
        if (rate < 0) return rate;
        var k = 1000;
        var dm = 0;
        var sizes = [$.t("common.units.data_rate.0"), $.t("common.units.data_rate.1"), $.t("common.units.data_rate.2"), $.t("common.units.data_rate.3"), $.t("common.units.data_rate.4")];
        var i = Math.floor(Math.log(rate) / Math.log(k));
        return parseFloat((rate / Math.pow(k, i)).toFixed(dm)) * 8 + ' ' + sizes[i];
    }

    public initDefaultButtons() {
        this.DIALOG_BUTTONS = {
            'OK': new Action('dialogs.actions.ok'),
            'CANCEL': new Action('dialogs.actions.cancel'),
            'ABORT': new Action('dialogs.actions.abort'),
            'YES': new Action('dialogs.actions.yes'),
            'NO': new Action('dialogs.actions.no'),
            'CLOSE': new Action('dialogs.actions.close')
        };

        this.BUTTONS_YES_NO = [
            this.DIALOG_BUTTONS.YES,
            this.DIALOG_BUTTONS.NO,
        ];

        this.BUTTONS_YES_NO_CANCEL = [
            this.DIALOG_BUTTONS.YES,
            this.DIALOG_BUTTONS.NO,
            this.DIALOG_BUTTONS.CANCEL,
        ];

        this.BUTTONS_OK_CANCEL = [
            this.DIALOG_BUTTONS.OK,
            this.DIALOG_BUTTONS.CANCEL,
        ];
    }

    public $DEFAULT_BLOCK_CONTAINER;
    public $latestBlockedElement;
    public keyStore = {};

    public forceBlock() {
        this.block('body', null, false, true);
    }

    public block(key: string = 'body', $container?: JQuery, allowOverride: boolean = true, isforced: boolean = false) {
        if (this.keyStore[key]) this.unblock(key);
        let config = this.keyStore[key] = {
            isShown: false,
            $container: $container,
            timeout: setTimeout(() => {
                config.isShown = this._block($container, allowOverride, isforced);
            }, UIHelper.API_TIMEOUT)
        };
    }

    public unblock(key: string) {
        let config = this.keyStore[key];
        if (config) {
            clearTimeout(config.timeout);
            if (config.isShown) {
                this._unblock(config.$container);
            }
            delete this.keyStore[key];
        }
    }

    public _block($container: JQuery, allowOverride: boolean, isforced: boolean = false) {
        if (this.$latestBlockedElement) {
            if (this.$latestBlockedElement.data('allowOverride') || isforced) this._unblock(); else return false;
        }
        this.$latestBlockedElement = ($container || this._getUIRoot());
        this.$latestBlockedElement.data('allowOverride', allowOverride);
        this.$latestBlockedElement.block({
            // styles for the message when blocking
            css: {
                padding: 0,
                margin: 0,
                width: '40%',
                top: '40%',
                left: '30%',
                textAlign: 'center',
                color: '#000',
                border: 'none',//'3px solid #aaa',
                backgroundColor: 'transparent',//'#fff',
                cursor: 'wait',
                //borderRadius :   '5px !important',
                whiteSpace: 'nowrap'
            },
            // styles for the overlay
            overlayCSS: {
                backgroundColor: '#aaaaaa',
                opacity: 0.5,
                cursor: 'wait'
            },
            // z-index for the blocking overlay
            baseZ: 99999,
            timeout: (UIHelper.UNBLOCK_TIMEOUT * 1.5),//auto unblock after 1.5x times of UIHelper.UNBLOCK_TIMEOUT no matter what
            message: ['<div class="loading-message"><i class="fa fa-cog fa-spin fa-2x fa-fw" style="line-height: 15pt;"></i><span style="font-size: 11pt;text-overflow: ellipsis;" class="hidden-xs">&nbsp;', $.t('common.labels.loading'), '</span></div>'].join('')
        });
        return true;
    }

    public _unblock($container?: JQuery) {
        ($container || this.$latestBlockedElement || this._getUIRoot()).unblock();
        this.$latestBlockedElement = null;
    }

    public _getUIRoot() {
        return (this.isModalShown ? $('#theModal').find('.modal-content') : this.$DEFAULT_BLOCK_CONTAINER);
    }

    public setDefaultBlockContainer($container: JQuery) {
        this.$DEFAULT_BLOCK_CONTAINER = $container || $('body');
    }

    //TODO Unit Testing required
    public formatTimeAgo(life: any, isShort: boolean = false) {
        let time = moment(life).toDate();
        let now = new Date();
        let seconds = ((now.getTime() - time.getTime()) * .001) >> 0;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        let years = days / 365;
        let templates: any = $.t(isShort ? 'common.timeago_short_templates' : 'common.timeago_templates', {returnObjectTrees: true});
        let template = (t, n) => templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)).toString());

        return templates.prefix + (
            seconds < 45 && template('seconds', seconds) ||
            seconds < 90 && template('minute', 1) ||
            minutes < 45 && template('minutes', minutes) ||
            minutes < 90 && template('hour', 1) ||
            hours < 24 && template('hours', hours) ||
            hours < 42 && template('day', 1) ||
            days < 30 && template('days', days) ||
            days < 45 && template('month', 1) ||
            days < 365 && template('months', days / 30) ||
            years < 1.5 && template('year', 1) ||
            template('years', years)
        ) + templates.suffix;
    }

    //TODO Unit Testing required
    public formatTime(life: number) {
        let miliseconds = moment(life).toDate().getTime();
        return this.formatMiliseconds(miliseconds);
    }

    public formatMiliseconds(miliseconds: number) {
        let seconds = miliseconds / 1000;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        let years = days / 365;
        let templates: any = $.t('common.time_templates', {returnObjectTrees: true});
        let template = (t, n) => templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)).toString());

        return (
            miliseconds < 1000 && template('miliseconds', miliseconds) ||
            seconds < 60 && template('seconds', seconds) ||
            minutes < 60 && template('minutes', minutes) ||
            hours < 24 && template('hours', hours) ||
            days < 30 && template('days', days) ||
            days < 365 && template('months', days / 30) ||
            template('years', years)
        );
    }

    public getIconOptions(type: any, value: any): (IconOptions | string) {
        if (is.existy(type) && is.existy(value)) {
            let i18nKey = 'enums.' + (type).toString() + '.' + value.toString();
            let translated: any = $.t(i18nKey, {returnObjectTrees: true});
            if (is.existy(translated)) {
                return translated;
            }
        }
        return null;
    }

    static getIconOpts(type: any, value: any): (IconOptions | string) {
        if (is.existy(type) && is.existy(value)) {
            let i18nKey = 'enums.' + (type).toString() + '.' + value.toString();
            let translated: any = $.t(i18nKey, {returnObjectTrees: true});
            if (is.existy(translated)) {
                return translated;
            }
        }
        return null;
    }

    public getIconTitle(type: any, value: any): string {
        let iconOptions = this.getIconOptions(type, value);
        if (is.existy(iconOptions)) {
            if (is.string(iconOptions)) {
                return <string>iconOptions;
            } else {
                return (<IconOptions>iconOptions).title;
            }
        }
        return null;
    }

    public getIconOptionList(type: any): { [key: string]: (IconOptions | string) } {
        if (is.existy(type)) {
            let i18nKey = 'enums.' + (type).toString();
            let translated: any = $.t(i18nKey, {returnObjectTrees: true});
            if (is.existy(translated)) {
                return translated;
            }
        }
        return null;
    }

    public renderIcon(type: any, value: any, options?: any): string {
        if (is.existy(type) && is.existy(value)) {
            options = $.extend({color: '', icon: ''}, options);
            let translated: (IconOptions | string) = this.getIconOptions(type, value);
            if (is.existy(translated)) {
                if (!is.string(translated)) {
                    if (options.noIcon) {
                        return (<IconOptions>translated).title;
                    } else if (options.noButton) {

                        let iconHtml = [
                            '<span class="font-', (<IconOptions>translated).color, ' ', options.color, '">'
                        ];

                        if ((<IconOptions>translated).icon) {
                            iconHtml = iconHtml.concat(['<i class="', (<IconOptions>translated).icon, options.icon, '"></i>']);
                        } else if ((<IconOptions>translated).text_icon) {
                            iconHtml = iconHtml.concat(['<i class="small', options.icon, '">', (<IconOptions>translated).text_icon, '</i>']);
                        }
                        iconHtml.push(" ");
                        iconHtml.push((<IconOptions>translated).title);
                        iconHtml.push('</span>');
                        return iconHtml.join('');
                    }
                    else {

                        let iconHtml = [
                            '<a href="javascript:;" class="btn btn-circle btn-icon-only btn-inactive ', (<IconOptions>translated).color, ' ', options.color, '" ',
                            'data-status="', ( (<IconOptions>translated).text_icon || (<IconOptions>translated).title), '" rel="tooltip" title="', (<IconOptions>translated).title, '"> '
                        ];

                        if ((<IconOptions>translated).icon) {
                            iconHtml = iconHtml.concat(['<i class="', (<IconOptions>translated).icon, options.icon, '" title="', (<IconOptions>translated).title, '"></i>']);
                        } else if ((<IconOptions>translated).text_icon) {
                            iconHtml = iconHtml.concat(['<i class="small', options.icon, '" title="', (<IconOptions>translated).title, '">', (<IconOptions>translated).text_icon, '</i>']);
                        } else {
                            iconHtml.push((<IconOptions>translated).title);
                        }
                        iconHtml.push('</a>')
                        return iconHtml.join('');
                    }
                } else {
                    return <string>translated;
                }
            }
            return value.toString();
        }
        return value || '-';
    }

    public renderDateTime(date: any) {
        return date ? moment(date).format($.t('common.datetime_format')) : '-';
    }

    public parseSearchBarText(text: string): SearchBarResult {
        let result: SearchBarResult;
        try {
            result = <SearchBarResult>{
                queryOptions: <QueryOptions>SearchBarParser.parse(text)
            };
        } catch (e) {
            console.error(e);
            result = <SearchBarResult>{
                error: e
            };
        }
        return result;
    }

    initSlimScroll($container: JQuery) {
        if ($container && $container.find) App.initSlimScroll($container.find('.scroller'));
    }

    destroySlimScroll($container: JQuery) {
        if ($container && $container.find) App.destroySlimScroll($container.find('.scroller'));
    }

    renderText(value: any, defaultValue: any, maxLength: number) {
        let formattedValue = (value || defaultValue);
//TODO use http://dotdotdot.frebsite.nl/ for string truncation

        if (maxLength > 0 && formattedValue.length > maxLength) {
            let center = Math.round(maxLength / 2) - 2;
            let trimmedValue = formattedValue.substr(0, center) + " ... " + formattedValue.substr((formattedValue.length - center), center);

            return "<span class='textwrap' rel='tooltip' title='" + formattedValue.replace(/\./g, '. ') + "'>" + trimmedValue + "</span>";
        } else {
            return "<span class='textwrap' data-status='" + formattedValue + "' >" + formattedValue + "</span>";
        }
    }

    static isBrowserType(type: BROWSERTYPE): boolean {
        switch (type) {//http://stackoverflow.com/a/9851769/5706293
            case BROWSERTYPE.OPERA:
                return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            case BROWSERTYPE.FIREFOX:
                return typeof InstallTrigger !== 'undefined';
            case BROWSERTYPE.SAFARI:
                return /constructor/i.test(window.HTMLElement) || (function (p) {
                    return p.toString() === "[object SafariRemoteNotification]";
                })(!window['safari'] || safari.pushNotification);
            case BROWSERTYPE.IE:
                return /*@cc_on!@*/false || !!document.documentMode;
            //case BROWSERTYPE.EDGE:
            //return !isIE && !!window.StyleMedia;
            case BROWSERTYPE.CHROME:
                return !!window.chrome && !!window.chrome.webstore;
            default:
                return false;
        }
    }

    dataTable(): any {
        return (<any>$).fn.dataTable;
    }

    public resolvePopupBtnClass(action: Action) {
        return 'btn btn-circle' + ((action.title_short || action.subActions) ? ' btn-sm ' : ' btn-icon-only ') + (action.color ? action.color : 'btn-default');
    }

    public resolveFormBtnClass(action: Action) {
        return 'btn' + ((action.title_short || action.subActions) ? ' ' : ' btn-icon-only ') + (action.color ? action.color : 'btn-default');
    }

    private static translationCache = {};

    public translate(text: string, targetLang: string, callback: (translated) => any): JQueryXHR {
        let hash = CryptoJS.SHA512(targetLang + "@" + text);
        let translated = UIHelper.translationCache[hash];
        if (is.not.existy(translated)) {
            let query = ['https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto'];
            query.push("&tl=", targetLang);
            query.push("&dt=t&q=" + encodeURI(text));
            //TODO replace with Angular HTTP
            let jqXHR = $.ajax(query.join(''), {timeout: 5000});
            jqXHR
                .done((data, textStatus, jqXHR) => {
                    //console.debug(msg);
                    if (data && data[0] && data[0][0] && data[0][0][0]) {
                        translated = data[0][0][0];
                        UIHelper.translationCache[hash] = translated;
                        callback(translated);
                    } else {
                        callback(text);
                    }
                })
                .fail((jqXHR, textStatus, errorThrown) => {
                    console.error(textStatus, errorThrown);
                    callback(text);
                });
            return jqXHR;
        } else {
            callback(translated);
        }
        return null;
    }
}

declare let window: any;
declare let opr: any;
declare let InstallTrigger: any;
declare let document: any;
declare let safari: any;

export enum BROWSERTYPE {
    CHROME, FIREFOX, IE, OPERA, SAFARI, EDGE, BLINK
}

export enum DIALOG_TYPES {
    INFO = <any>'info',
    SUCCESS = <any>'success',
    WARNING = <any>'warning',
    ERROR = <any>'error',
    QUESTION = <any>'question',
}

export enum DIALOG_SIZES {
    LARGE = <any>'large',
    NORMAL = <any>'normal',
    SMALL = <any>'small'
}

export interface DialogCallbackType {
    (selected: Action): void
}

export interface IDialogOptions {
    message: string;
    title?: string;
    buttons?: Array<Action>;
    defaultButton?: Action;
    type?: DIALOG_TYPES;
    size?: DIALOG_SIZES;
    callback?: DialogCallbackType;
}


export enum NOTIFY_POSITIONS {
    TOP_LEFT = <any>'toast-top-left',
    TOP_CENTER = <any>'toast-top-center',
    TOP_RIGHT = <any>'toast-top-right',
    TOP_FULL_WIDTH = <any>'toast-top-full-width',
    BOTTOM_LEFT = <any>'toast-bottom-left',
    BOTTOM_CENTER = <any>'toast-bottom-center',
    BOTTOM_RIGHT = <any>'toast-bottom-right',
    BOTTOM_FULL_WIDTH = <any>'toast-bottom-full-width',

}

export interface INotifyOptions {
    title?: string;
    message: string;
    type: DIALOG_TYPES;
    showCloseButton?: boolean;
    showProgressBar?: boolean;
    isSticky?: boolean;
    isSilent?: boolean;
    closeTimeout?: number;
    position?: NOTIFY_POSITIONS
    callback?: DialogCallbackType;
}

export interface IconOptions {
    title?: string;
    icon?: string;
    text_icon?: string;
    color?: string;
    fontCode?: string;
}

export interface SearchBarResult {
    queryOptions ?: QueryOptions;
    error ?: any
}
