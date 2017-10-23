import {LinkDTO} from "../../../swagger/LinkDTO";
import {PortDetail} from "../../../swagger/PortDetail";
import {LINKSTATUS} from "../../../swagger/LINKSTATUS";
import {AlarmInfo} from "../../../swagger/AlarmInfo";
import {LINKMEDIUM} from "../../../swagger/LINKMEDIUM";
import {CONNECTIONTYPE} from "../../../swagger/CONNECTIONTYPE";
import {PathConstraintInfo} from "../../../swagger/PathConstraintInfo";
import {NETWORKDEVICETYPE} from "../../../swagger/NETWORKDEVICETYPE";
import {DocumentConverter} from "../../DocumentConverter";
import {topoConfig} from "../topology.config";
import {BROWSERTYPE, UIHelper} from "../../UIHelper";
/**
 * Created by ekinca on 29.06.2017.
 */

const PI = Math.acos(-1);

export class tplLink implements LinkDTO {
    id: string;
    version: number;
    revision: number;
    timestamp: Date;

    /**
     * Switchteki yüksek öncelikli queueId değeri.
     */
    queueId?: number;

    /**
     * Bu bağlantının gecikme değerinin ölçülüp ölçülmeyeceğini gösteren değer.
     */
    measureDelay?: boolean;

    /**
     * Bağlantının bant genişliği değeri.
     */
    bandwidth?: number;

    /**
     * Alarmlar
     */
    alarms?: Array<AlarmInfo>;

    /**
     * Bağlantının bulunduğu topolojinin kimlik bilgisi
     */
    topologyId: string;

    /**
     * Bağlantının bant genişliği kullanım oranı.
     */
    bandwidthUtilization?: number;

    /**
     * Kaynak Port detayları.
     */
    srcPort: PortDetail;

    /**
     * Bağlantının veri iletimi için kullandığı ortam bilgisi.
     */
    medium?: LINKMEDIUM;

    /**
     * ??
     */
    linkWeight?: string;

    /**
     * Bağlantı tipi. Bağlantının hangi 2 tip cihaz arasında olduğunu belirtir.
     */
    connectionType?: CONNECTIONTYPE;

    /**
     * Constraint listesi.
     */
    constraints?: PathConstraintInfo;

    /**
     * Bu bağlantının topoloji'de her zaman yer alması gerektiği gösteren değer. Eğer bu bağlantı topolojiden kalkarsa sistemde bir problem var demektir.
     */
    required?: boolean;

    /**
     * Bağlantının güvenlik seviyesi.
     */
    securityLevel: number;

    /**
     * Link kayıp yüzdesidir. 0-100 arası değer.
     */
    loss?: number;

    /**
     * Veri çarpışma oranı
     */
    collision?: number;

    /**
     * Kaynak Port detayları.
     */
    destPort: PortDetail;

    /**
     * Gecikme değeri
     */
    delay?: number;

    /**
     * Seğirme değeri (Paket Gecikme Değişkenliği)
     */
    jitter?: number;

    /**
     * Bu bağlantının loop oluşturduğunu gösteren değer.
     */
    blocked?: boolean;

    /**
     * Bağlantı sinyal kalitesi yüzdesidir. 0-100 arası değer. (RadioLink gibi ortamlar için)
     */
    signalQuality?: number;

    /**
     * Bağlantının istenilen default renk değeri. Örn: red, blue, yellow, pink..
     */
    colorCode?: string;

    /**
     * Bu bağlantının WAN linki olup olmadığını gösteren değer.
     */
    isWanLink?: boolean;

    /**
     * Bağlantı sağlık durumu.
     */
    status: LINKSTATUS;

    //element attributes
    linktype: string;
    source: any;
    target: any;
    stroke: string;
    strokeDasharray: string;
    strokeOpacity: string;
    opacity: number;
    fill: string;
    strokeWidth: number;
    lineargradient: string;
    linkOrder;

    isDown;
    selfLink;
    isMvtnLink;
    isMvtnLinkUsed;

    reverse: tplLink;

    size;
    links;
    needsRender; // flag for link_updated status change event (shouldve been remove/add but burak can't send it from that apparently)

    //vector
    _magnitude;
    vectorX;
    vectorY;

    srcVector = {X: 0, Y: 0};
    dstVector = {X: 0, Y: 0};


    constructor(options: tplLinkOptions){
        for(let key in options){
            this[key] = options[key];
        }

        //element attributes
        this.source = options.source;
        this.target = options.target;
        this.linktype = this.getLinkType();
        this.opacity = 1;

        this.isDown = options.isDown || false;
        this.selfLink = options.selfLink || false;
    }

    getStrokeColor(){
        if (!this.blocked) { // if it has a colorCode
            if (DocumentConverter.isTruthy(this.colorCode)) {
                if (this.colorCode == topoConfig.PATH_DRAW_COLOR) {
                    // return topoConfig.PATH_DRAW_COLOR; should be different for switch and host
                } else {
                    return this.colorCode;
                }
            }

            if(this.isDown === true){
                return "gray";
            }

            if(this.selfLink === true){ //if selflink even if it's not blocked
                return "red";
            }

            if( this.linktype === "domainlink" ){
                return topoConfig.defaultClusterCloudPathColor;
            }

            if ( this.target.nodetype == "hostnode" || this.source.nodetype == "hostnode" || this.target.nodetype == "bgprouternode" || this.source.nodetype == "bgprouternode") { // if host
                return "blue";
            }

            if( this.source.isControllerDevice || this.target.isControllerDevice ){
                return "steelblue";
            }

            if(this.isMvtnLink && this.isMvtnLinkUsed){
                return "gray";
            }

        } else {
            return "red";
        }
    }

    getFillColor(){
        if ( ((( (this.target.nodetype == "switchnode" && this.source.nodetype == "networkdevicenode") ) || (this.source.nodetype == "networkdevicenode" && this.target.nodetype == "switchnode") && !this.blocked && !(this.isMvtnLink || this.isMvtnLinkUsed) )
            || ( (this.target.nodetype == "switchnode" && this.source.nodetype == "switchnode") || (this.source.nodetype == "switchnode" && this.target.nodetype == "switchnode") && !this.blocked && !(this.isMvtnLink || this.isMvtnLinkUsed) )
            || ( (this.target.nodetype == "domainnode" && this.source.nodetype == "domainnode") || (this.source.nodetype == "domainnode" && this.target.nodetype == "domainnode") && !this.blocked && !(this.isMvtnLink || this.isMvtnLinkUsed) )
            || ( (this.target.nodetype == "cloudnode" && this.source.nodetype == "cloudnode") || (this.source.nodetype == "cloudnode" && this.target.nodetype == "cloudnode") && !this.blocked && !(this.isMvtnLink || this.isMvtnLinkUsed) ) )
            && this.selfLink !== true && !this.isDown) { //normal link
            if(UIHelper.isBrowserType(BROWSERTYPE.FIREFOX)){
                return "url('#gradient" + this.linkIdGenerator() + "')";
                // should be  return "url('topology/view#gradient" + this.documentConverter.linkIdGenerator(d) + "')";
                // for version > 53
            }else{
                return "url('#gradient" + this.linkIdGenerator() + "')";
            }
        } else if( (this.blocked || this.selfLink) && !(this.isMvtnLink || this.isMvtnLinkUsed)) {  //blocked || selfLink
            return "transparent";
        } else if( this.linktype === "domainlink" ) {  //cluster || cloud links
            return topoConfig.defaultClusterCloudPathColor;
        } else if ( !this.blocked && !(this.isMvtnLink || this.isMvtnLinkUsed) && this.selfLink !== true && this.isDown){
            return "gray";
        } else if ( !this.blocked && (this.isMvtnLink && this.isMvtnLinkUsed) && this.selfLink !== true && this.isDown && this.colorCode){
            return  this.colorCode;
        } else {
            return topoConfig.defaultSwitchLinkColor;
        }
    }

    getStrokeDashArray(){
        if (this.blocked || (this.isMvtnLinkUsed) || this.selfLink || this.isDown) {
            return "15, 5";
        }else if( this.source.isControllerDevice || this.target.isControllerDevice ){
            return "5";
        }

        return 0;
    }

    getStrokeOpacity(){
        if (this.blocked || this.selfLink || this.isDown) {
            return "0.5";
        }
    }

    getOpacity(){
        let flag = localStorage.getItem("showNetworkDevicesFlag");
        let type = this.getLinkType();

        if((type == "gatewaylink" || type == "virtualgatewaylink" || type == "networkdevicelink") && flag == "false"){
            this.opacity = 0;
            return 0;
        }else if (DocumentConverter.isTruthy(this.opacity)){
            return this.opacity;
        }
        this.opacity = 1;
        return 1;
    }

    getLinkWidth() {
        if (this.linktype === "hostlink") {
            return "2";
        } else if(this.isMvtnLinkUsed || this.isDown === true){
            return "2";
        } else if(this.selfLink === true){
            return "6";
        } else {
            return "2";
        }
    }

    getColorByBandwidth(d: tplLink) {
        if(!d) return topoConfig.defaultSwitchLinkColor; // doesnt have reverse
        if(DocumentConverter.isTruthy(d.bandwidthUtilization)) this.bandwidthUtilization = d.bandwidthUtilization; //sometimes we update values from the datum.
        if (DocumentConverter.isTruthy(d.colorCode)) {
            return this.colorCode;
        }

        if (DocumentConverter.isTruthy(d.bandwidthUtilization) || d.bandwidthUtilization == 0 || d.bandwidthUtilization < 0) {
            if (this.bandwidthUtilization > (.7 / topoConfig.bandwidthUtilizationCoefficient) ) {
                return "#ff0000";
            } else if (this.bandwidthUtilization > (.6 / topoConfig.bandwidthUtilizationCoefficient) ) {
                return "#ff6600";
            } else if (this.bandwidthUtilization > (.5 / topoConfig.bandwidthUtilizationCoefficient) ) {
                return "#ff9933";
            } else if (this.bandwidthUtilization > (.4 / topoConfig.bandwidthUtilizationCoefficient) ) {
                return "#ffcc66";
            } else if (this.bandwidthUtilization > (.3 / topoConfig.bandwidthUtilizationCoefficient) ) {
                return "#ffff66";
            } else if (this.bandwidthUtilization > (.2 / topoConfig.bandwidthUtilizationCoefficient) ) {
                return "#009900";
            } else if (this.bandwidthUtilization > (.1 / topoConfig.bandwidthUtilizationCoefficient) ) {
                return "#00e600";
            } else {
                return "#99ffcc";
            }
        } else {
            return topoConfig.defaultSwitchLinkColor;
        }
    }

    linkIdGenerator() {
        let id;
        if (DocumentConverter.isTruthy(this.srcPort) && DocumentConverter.isTruthy(this.destPort)) {
            id = this.srcPort.id + "_" + this.destPort.id + "_" + this.srcPort.number + "_" + this.destPort.number;
        } else if(DocumentConverter.isTruthy(this.source) && DocumentConverter.isTruthy(this.target)){
            id = this.source.id + "_" + this.target.id + "_" + this.source.number + "_" + this.target.number;
        }else{
            console.log("ERROR: something's wrong with this data, couldn't generate proper id", this);
        }
        return id.replace(/[@=;#?&:\/]/g,"_");
    }

    getTopologyElementIdGenerationForGradient(){
        let id = this.linkIdGenerator();
        return topoConfig.topologyViewPageUrlForGradient + id;
    }

    getLinkType(): string{
        if (this.source == 0 || this.source) { // the reason that they are not enum is that DOM classes doesn't play well with all caps enum names.
            if (this.source.nodetype === "hostnode" || this.target.nodetype === "hostnode" || this.linktype === "hostlink") {
                return "hostlink";
            } else if(this.source.nodetype === "bgprouternode" || this.target.nodetype === "bgprouternode" || this.linktype === "bgprouternode") {
                return "bgprouterlink";
            } else if(this.source.type == NETWORKDEVICETYPE.GATEWAY || this.target.type == NETWORKDEVICETYPE.GATEWAY){
                return "gatewaylink";
            }else if(this.source.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY || this.target.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY){
                return "virtualgatewaylink";
            }else if(this.source.type == NETWORKDEVICETYPE.ACCESS_POINT || this.target.type == NETWORKDEVICETYPE.ACCESS_POINT){
                return "accesspointlink";
            }else if( this.source.nodetype === "networkdevicenode" || this.target.nodetype === "networkdevicenode" ){
                return "networkdevicelink";
            }else if( this.source.nodetype === "domainnode" || this.target.nodetype === "domainnode" ){
                return "domainlink";
            } else if( this.source.nodetype === "cloudnode" || this.target.nodetype === "cloudnode" ){
                return "cloudlink";
            } else {
                return "switchlink";
            }
        } else {
            return "hostlink";
        }
    }

    magnitude(x?, y?){
        return Math.sqrt(this.vectorX * this.vectorX + this.vectorY * this.vectorY);
    }

    setUnitVector(x?, y?) {
        let magnitude = this.magnitude();
        this.vectorX = this.vectorX / magnitude;
        this.vectorY = this.vectorY / magnitude;
    }

    getUnitVector(scale?){
        return scale && scale > 0 ? {X: this.vectorX / scale, Y: this.vectorY / scale} : {X: this.vectorX, Y: this.vectorY};
    }

    setPerpendicularClockwise() {
        let temp = this.vectorX;
        this.vectorX = this.vectorY * -1;
        this.vectorY = temp;
    };

    setSrcVector(ratio, x?, y?){
        this.srcVector.X = this.vectorX * ratio;
        this.srcVector.Y = this.vectorY * ratio;
    }

    setDstVector(ratio, x?, y?){
        this.dstVector.X = this.vectorX * ratio;
        this.dstVector.Y = this.vectorY * ratio;
    }

    getAngle(){
        let angle = Math.atan2(this.vectorY, this.vectorX);
        return Math.round(180 * (angle < 0 ? (2 * PI) + angle : angle) / PI);
    }
}

var tplLinkTypes = {
    "host_switch" : 'hostlink',
    "switch_host" : 'hostlink',

    "gateway_switch": "gatewaylink",
    "switch_gateway": "gatewaylink",
    "gateway_host": "hostlink",
    "host_gateway": "hostlink",

    "virtualgateway_switch": "virtualgatewaylink",
    "switch_virtualgateway": "virtualgatewaylink",
    "host_virtualgateway": "hostlink",
    "virtualgateway_host": "hostlink",

}

export interface tplLinkOptions extends LinkDTO {
    linktype?: string;
    source?: PortDetail | number | any;
    target?: PortDetail | number | any;
    stroke?: string;
    strokeDasharray?: string;
    strokeOpacity?: string;
    opacity?: number;
    fill?: string;
    strokeWidth?: number;
    lineargradient?: string;

    isDown?: any;
    selfLink?: boolean;

    reverse?: tplLink;

    size?: any;
    links?: any;
}

export interface tplLinkDTO extends LinkDTO {}