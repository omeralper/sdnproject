import {tplNode, tplNodeOptions} from "./tplNode";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {SWITCHSTATUS} from "../../../swagger/SWITCHSTATUS";
import {LocationInfo} from "../../../swagger/LocationInfo";
import {MvtnPortInfo} from "../../../swagger/MvtnPortInfo";
import {DeviceInfo} from "../../../swagger/DeviceInfo";
import {SECURITYMODE} from "../../../swagger/SECURITYMODE";
import {PortInfo} from "../../../swagger/PortInfo";
import {AlarmInfo} from "../../../swagger/AlarmInfo";
import {BandwidthInfo} from "../../../swagger/BandwidthInfo";
import {OFFLINEMODE} from "../../../swagger/OFFLINEMODE";
import {AddressInfo} from "../../../swagger/AddressInfo";
import {SupportInfo} from "../../../swagger/SupportInfo";
import {StatsDetail} from "../../../swagger/StatsDetail";
import {CONNECTIONMODE} from "../../../swagger/CONNECTIONMODE";
import {DeviceProfileInfo} from "../../../swagger/DeviceProfileInfo";
import {SWITCHMODE} from "../../../swagger/SWITCHMODE";
import {topoConfig} from "../topology.config";
import {DEVICETYPE} from "../../../swagger/DEVICETYPE";
import {tplHost} from "./tplHost";
import {tplLink} from "./tplLink";
/**
 * Created by ekinca on 4.07.2017.
 */

export class tplSwitch extends tplNode implements SwitchDTO {

    /**
     * Anahtarlayıcı veri katmanı için tanımlanacak değer (00:00:00:00:00:00:00:03 gibi)
     */
    datapathId: string;

    /**
     * Password for Netconf device
     */
    netconfPassword?: string;

    /**
     * Anahtarlayıcının bağlı olduğu topoloji kimlik numarası
     */
    topologyId: string;

    /**
     * Anahtarlayıcı kullanılan sanal ağ için engelli mi? 'true' ise engellidir.
     */
    isBlockedForMvtn?: boolean;

    /**
     * Anahtarlayıcının atandığı ağ topolojilerinin ID değerleri.
     */
    networks?: Array<string>;

    /**
     * Username for Netconf device
     */
    netconfName?: string;

    /**
     * Bu anahtarlayıcının topoloji'de her zaman yer alması gerektiği gösteren değer. Eğer bu anahtarlayıcı topolojiden kalkarsa sistemde bir problem var demektir.
     */
    required?: boolean;

    /**
     * Anahtarlayıcının cihaz modu.
     */
    mode?: SWITCHMODE;

    /**
     * Anahtarlayıcının güvenlik seviyesi.
     */
    securityLevel: number;

    /**
     * Devicea ait profili belirten veri modeli.
     */
    deviceProfile?: DeviceProfileInfo;

    /**
     * Anahtarlayıcının meter desteği olup olmadığı bilgisini tutar.
     */
    isMeterEnabled?: boolean;

    /**
     * Anahtarlayıcının bağlantı türü
     */
    connectionMode?: CONNECTIONMODE;

    /**
     * ??
     */
    blocked?: boolean;

    /**
     * Anahtarlayıcı istatistikleri.
     */
    stats?: StatsDetail;

    /**
     * Anahtarlayıcı üzerindeki flow sayısı.
     */
    flows?: number;

    /**
     * Anahtarlayıcının desteklediği özellikler ve sürümlerinin bulunduğu veri yapısı.
     */
    supports: SupportInfo;

    /**
     * Anahtarlayıcının enerji tasarrufu moduna geçebilme durumunu belirtir.
     */
    powerSaverModeEnabled?: boolean;

    /**
     * Anahtarlayıcının tipini belirtir (OVSDB vs.)
     */
    deviceType: string;

    /**
     * Anahtarlayıcının bağlı olduğu kontrolcüleri belirtir
     */
    slaveControllerIds: Array<string>;

    /**
     * Anahtarlayıcının çevrimdışı modu
     */
    offlineMode?: OFFLINEMODE;

    /**
     * Anahtarlayıcıya ait kontrol adres bilgilerinin bulunduğu veri yapısı. (IPv4,IPv6,MAC)
     */
    address: AddressInfo;

    /**
     * Kontrolcü kimlik numarası.
     */
    controllerId?: string;

    /**
     * Anahtarlayıcının bant genişliği kullanım bilgileri.
     */
    bandwidth?: BandwidthInfo;

    /**
     * Anahtarlayıcının Watt birimi cinsinden harcadığı gücü belirtir.
     */
    powerUsage?: number;

    /**
     * Alarmlar
     */
    alarms?: Array<AlarmInfo>;

    /**
     * Anahtarlayıcının OpenStack desteği olup olmadığı bilgisini tutar.
     */
    isOpenStackSupported?: boolean;

    /**
     * Anahtarlayıcının kullanım oranı (0-100 aralığında bir string değeri).
     */
    utilization?: string;

    /**
     * Anahtarlayıcının port bilgileri.
     */
    portInfo: PortInfo;

    /**
     * Anahtarlayıcının güvenlik modu.
     */
    securityMode?: SECURITYMODE;

    /**
     * Anahtarlayıcının OpenStack bilgisini tutar.
     */
    openStackNodeName?: string;

    /**
     * Anahtarlayıcı cihaz hakkında bilgilerin tutulduğu veri yapısı.
     */
    deviceInfo: DeviceInfo;

    /**
     * Sanal aga ayrilan portlar
     */
    mvtnPortInfo?: MvtnPortInfo;

    /**
     * Anahtarlayıcının ssl desteği olup olmadığı bilgisini tutar.
     */
    isSSLSupported?: boolean;

    /**
     * Anahtarlayıcının Kontrol katmanında olup olmadığını söyler.
     */
    isControllerDevice?: boolean;

    /**
     * Switch's group name
     */
    groupName?: string;

    /**
     * Anahtarlayıcının aktif olduğu zaman.
     */
    activeSince?: Date;

    /**
     * ??
     */
    depth?: number;

    /**
     * Anahtarlayıcının Ovs için kullandığı portun adıdır
     */
    managementPort?: string;

    /**
     * Anahtarlayıcı'ya Uç Birim bağlanabilir mi? 'True' ise uç birim bağlanabilir.
     */
    isEdgeSwitch?: boolean;

    /**
     * Anahtarlayıcının toplam bant genişliğini belirtir.
     */
    totalBandwidth?: string;

    /**
     * Anahtarlayıcının adı.
     */
    name?: string;

    /**
     * Anahtarlayıcının lokasyon bilgisi bu alanda tutlacaktır.
     */
    location?: LocationInfo;

    /**
     * ??
     */
    colorCode?: string;

    /**
     * Is dpdk enabled ?
     */
    dpdk?: boolean;

    /**
     * Anahtarlayıcının sağlık durumu.
     */
    status: SWITCHSTATUS;

    //element attributes
    rx: string | number;
    ry: string | number;
    width: string | number;
    height: string | number;
    relativeY: string | number;
    relativeX: string | number;
    index: any;

    switchUtilizationBarHeight: string | number;
    switchUtilizationBarWidth: string | number;
    switchUtilizationBarBorderRadius: string | number;
    switchUtilizationBarColor: string;
    switchUtilizationBarX: string | number;
    switchUtilizationBarY: string | number;

    stackedIconFontSize;
    stackedIcon;
    children: Array<tplHost> = [];
    _children: Array<tplHost> = [];
    childrenLinks: Array<tplLink> = [];
    _childrenLinks: Array<tplLink> = [];

    constructor(options: tplSwitchOptions){
        super(options);
        for(let key in options){
            this[key] = options[key];
        }

        this.nodetype = options.nodetype || this.getNodeType();
        this.fill = this.getFillColor();
        this.stroke = this.getStrokeColor();
        this.strokeWidth = topoConfig.peripheryStrokeWidth;
        this.shape = options.shape || "rect";
        this.rx = this.ry = topoConfig.switchRx;
        this.relativeX = this.relativeY = topoConfig.switchXY;
        this.width = this.height = topoConfig.switchHeightAndWidth;
        this.mainIcon = options.mainIcon || this.getMainIcon();

        this.switchUtilizationBarHeight = topoConfig.switchUtilizationBarHeight;
        this.switchUtilizationBarWidth = this.getSwitchUtilizationBarWidth();
        this.switchUtilizationBarBorderRadius = topoConfig.switchUtilizationBarBorderRadius;
        this.switchUtilizationBarColor = this.getSwitchUtilizationBarColor();
        this.switchUtilizationBarX = this.switchUtilizationBarY = this.getSwitchUtilizationBarX();

        this.stackedIconFontSize = "15px";
        this.stackedIcon = this.isOpenStackSupported ? '\uf0ec' : undefined;
    }

    getOpacity(){
        if(this.opacity > -1){
            return this.opacity;
        }else{
            return 1;
        }
    }

    getStrokeColor(){
        if ((this.colorCode !== null && typeof this.colorCode !== "undefined" && this.colorCode != "")) {
            if (this.colorCode.length > 0) {
                return this.colorCode;
            }
        } else {
            if (this.status === SWITCHSTATUS.DOWN) {
                return "#99381B";
            } else {
                if(this.status == SWITCHSTATUS.POWER_SAVER){
                    return topoConfig.switchStandbyModeStrokeColor;
                }else{
                    return topoConfig.defaultOpenFlowSwitchPeripheryColor;
                }
            }
        }
    }

    getStrokeDashArray(){
        if( this.isControllerDevice ){
            return 5;
        }
        return 0;
    }

    getFillColor(){
        if (this.status == SWITCHSTATUS.DOWN) {
            return topoConfig.switchDownColor;
        } else if(this.colorCode){
            return this.colorCode;
        } else if(this.isBlockedForMvtn){
            return topoConfig.blockedHostFillColor;
        }else {
            if(this.deviceInfo && this.deviceInfo.type){
                if(this.deviceInfo.type === DEVICETYPE.PHISICAL_SWITCH){
                    if(this.status == SWITCHSTATUS.POWER_SAVER){
                        return topoConfig.switchStandbyModeFillColor;
                    }else{
                        return topoConfig.defaultOpenFlowSwitchFillColor;
                    }
                }else if (this.deviceInfo.type === DEVICETYPE.LEGACY_SWITCH){
                    return topoConfig.defaultLegacySwitchFillColor;
                }else{
                    return topoConfig.defaultOpenFlowSwitchFillColor;
                }
            }else{
                return topoConfig.defaultOpenFlowSwitchFillColor;
            }
        }
    }

    getMainIcon(){
        if( this.deviceInfo.type === DEVICETYPE.IP_PHONE){
            return '\uf095';    //fa-phone
        } else if( this.isOpenStackSupported){ // to make it stacked
            return '\uf0c2';    // fa-cloud
        } else{
            return '\uf0ec';    // fa-exchange
        }
    }

    getSwitchUtilizationBarWidth(): number {
        if(this.deviceInfo && this.utilization){
            if(this.deviceInfo.type === DEVICETYPE.IP_PHONE){
                return ( +this.utilization * topoConfig.ipPhoneHeightAndWidth ) / 100;
            }else{
                return ( +this.utilization * topoConfig.switchHeightAndWidth ) / 100;
            }
        }else{
            return 0;
        }
    }

    getSwitchUtilizationBarColor(): string {
        if(this.utilization){
            if (+this.utilization < 10){
                return topoConfig.switchUtilizationFirstPhaseColor
            }else if (+this.utilization < 20){
                return topoConfig.switchUtilizationSecondPhaseColor
            }else{
                return topoConfig.switchUtilizationDefaultBackgroundColor;
            }
        }
    }

    getSwitchUtilizationBarX(){
        if(this.deviceInfo && this.deviceInfo.type /*&& d.utilization*/){
            if(this.deviceInfo.type !== DEVICETYPE.IP_PHONE){
                return topoConfig.switchUtilizationBarX;
            }else{
                return topoConfig.switchIpPhoneUtilizationBarX;
            }
        }
    }

    getNodeType(){
        return "switchnode";
    }

    // draw(that){
    //     d3.select(that)
    //         .append("rect")
    //         .attr("class", "switch-rect-element")
    //         .attr("id", (d)=> "node" + d.index)
    //         .attr("width", (d: tplSwitch)=> d.width)
    //         .attr("height", (d: tplSwitch)=> d.height)
    //         .attr("x", (d: tplSwitch)=> d.relativeX)
    //         .attr("y", (d: tplSwitch)=> d.relativeY)
    //         .attr("rx", (d: tplSwitch)=> d.rx)
    //         .attr("ry", (d: tplSwitch)=> d.ry)
    //         .style("stroke", (d: tplSwitch)=> d.stroke)
    //         .style("stroke-width", (d: tplSwitch)=> d.strokeWidth)
    //         .style("fill", (d: tplSwitch)=> d.fill)
    //         .style("opacity", (d: tplSwitch)=> d.opacity);
    // }
}

export interface tplSwitchOptions extends tplNodeOptions {
    switchUtilizationBarHeight?: string | number;
    switchUtilizationBarWidth?: string | number;
    switchUtilizationBarBorderRadius?: string | number;
    switchUtilizationBarColor?: string;
    switchUtilizationBarX?: string | number;
    switchUtilizationBarY?: string | number;

    rx?: string | number;
    ry?: string | number;
    width?: string | number;
    height?: string | number;
    relativeY?: string | number;
    relativeX?: string | number;
    index?: any;
}