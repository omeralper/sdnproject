import {AlarmEventsListener} from "../Core/AlarmEventsListener";
import {AlarmDTO} from "../../../swagger/AlarmDTO";
import {ALARMTYPE} from "../../../swagger/ALARMTYPE";
import {ApiHelper} from "../../ApiHelper";
import {SEVERITYDef} from "../../../swagger/SEVERITY";
import {EnumHelper} from "../../../commons/EnumHelper";
import {ALARMSOURCEDef} from "../../../swagger/ALARMSOURCE";
import {ALARMRESOURCEDef} from "../../../swagger/ALARMRESOURCE";
import {ALARMSTATUSDef} from "../../../swagger/ALARMSTATUS";
/**
 * Created by yildirayme on 07.03.2017.
 */

export class AlarmGenerator {
    public intervalID: any;
    public alarmListener: AlarmEventsListener;

    constructor(public apiHelper: ApiHelper) {
    }

    public start(alarmListener: AlarmEventsListener) {
        this.stop();
        this.alarmListener = alarmListener;
        this.intervalID = setInterval(() => {

            alarmListener.emitEvent(this.genAlarm());

        }, 3000);//Math.random() * 10000);
    }

    public stop() {
        clearInterval(this.intervalID);
        this.alarmListener = null;
    }

    public genAlarm(): AlarmDTO {

        let type: ALARMTYPE = this.genState([ALARMTYPE.ALARM, ALARMTYPE.GENERIC_EVENT]);
        let data = <AlarmDTO> this.apiHelper.genDTO({
            time: moment().toDate(),
            severity: this.genState(EnumHelper.getNames(SEVERITYDef.map)), // 'MINOR', 'MAJOR', 'CRITICAL', 'FATAL'),
            source: this.genState(EnumHelper.getNames(ALARMSOURCEDef.map)), //'SERVER', 'DATABASE', 'NAS', 'JAVA'),
            sourceHost: this.genIP(),
            sourceInstance: this.genRandom(1, 10).toString(),
            resource: this.genState(EnumHelper.getNames(ALARMRESOURCEDef.map)), //'RAM', 'CPU', 'DISK', 'HEAP', 'CONNECTION'),
            description: this.genLoremIpsum(),
            detail: "Details",
            correctionAction: "",
            name: type + '_' + this.genRandom(0, 1000000),
            alarmStatus: this.genState(EnumHelper.getNames(ALARMSTATUSDef.map)), //'ON', 'OFF'),
            type: type
        });

        return data;
    }

    genRandom(min, max) {
        return Math.round(Math.max(min, Math.random() * max));
    }

    genState(...args: any[]) {
        return args[this.genRandom(0, args.length - 1)];
    }

    public genIP() {
        return this.genRandom(1, 255) + "." + this.genRandom(1, 255) + "." + this.genRandom(1, 255) + "." + this.genRandom(1, 255);
    }

    public genLoremIpsum() {
        return this.genState(
            "Cupidatat anim cillum et do in amet ex commodo amet excepteur. Est nisi id elit adipisicing. Ea adipisicing excepteur Lorem nisi eiusmod dolor ut.",
            "Fugiat commodo ad laboris minim exercitation. Deserunt ut incididunt ullamco qui consequat anim nisi incididunt reprehenderit nulla qui.",
            "Proident anim exercitation ex reprehenderit deserunt quis incididunt sint officia do ex irure.",
            "Elit ad fugiat et voluptate sunt veniam et aliqua ex anim. Nisi enim qui nisi eiusmod ipsum ut sit nulla consectetur id ipsum proident culpa. Nostrud qui reprehenderit quis reprehenderit consequat minim nostrud consectetur exercitation non.",
            "Mollit ad amet anim deserunt adipisicing aliquip aliqua Lorem ex. Nulla ut do eu cupidatat commodo aute mollit ad culpa fugiat laborum quis. Nisi non sint nulla tempor cupidatat amet in anim nulla magna non officia cillum occaecat.",
            "Sit culpa et laborum amet quis ut velit enim non anim laborum commodo. Aute proident quis ut culpa. Est tempor ad enim dolor irure minim laboris cupidatat sit nulla ex. ");
    }

}
