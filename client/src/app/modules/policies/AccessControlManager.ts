/**
 * Created by omeroz on 2/1/2017.
 */
import {Injectable} from "@angular/core";
import {AccessPolicyDTO} from "../../swagger/AccessPolicyDTO";
import {SimpleRule} from "./SimpleRule";
import {PacketHeaderCriteriaInfo} from "../../swagger/PacketHeaderCriteriaInfo";
import {CommonHeaderCriteriaInfo} from "../../swagger/CommonHeaderCriteriaInfo";
import {ACCESSACTIONTYPE} from "../../swagger/ACCESSACTIONTYPE";


@Injectable()
export class AccessControlManager {


    constructor() {

    }

    /**
     * Simplifies AccessPolicyDTO and returns more useable and simple object
     * @param rule
     * @param temporaryId
     * @returns {SimpleRule}
     */
    simplifyRule(rule: AccessPolicyDTO, temporaryId = 1): SimpleRule {
        let macSourceAddresses = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.macAddresses &&
        rule.packetHeaderCriteria.macAddresses.src ?
            this.arrayToString(rule.packetHeaderCriteria.macAddresses.src) : "";

        let macDestAddresses = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.macAddresses &&
        rule.packetHeaderCriteria.macAddresses.dest ?
            this.arrayToString(rule.packetHeaderCriteria.macAddresses.dest) : "";

        let ipSourceAddressess = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.ipAddressess &&
        rule.packetHeaderCriteria.ipAddressess.src ?
            this.arrayToString(rule.packetHeaderCriteria.ipAddressess.src) : "";

        let ipDestAddressess = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.ipAddressess &&
        rule.packetHeaderCriteria.ipAddressess.dest ?
            this.arrayToString(rule.packetHeaderCriteria.ipAddressess.dest) : "";

        let portSourceRanges = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.portRanges &&
        rule.packetHeaderCriteria.portRanges.src ?
            this.arrayToString(rule.packetHeaderCriteria.portRanges.src) : "";

        let portDestRanges = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.portRanges &&
        rule.packetHeaderCriteria.portRanges.dest ?
            this.arrayToString(rule.packetHeaderCriteria.portRanges.dest) : "";

        let ipLocSource = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.srcIpLocations?
            rule.packetHeaderCriteria.srcIpLocations : [];

        let ipLocDest = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.destIpLocations?
            rule.packetHeaderCriteria.destIpLocations : [];

	    let endUserApps = rule.packetHeaderCriteria && rule.packetHeaderCriteria.endUserApplications;

        let protocols = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.protocols ?
            this.arrayToString(rule.packetHeaderCriteria.protocols) : "";

        let vlan_tags = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.vlanTags ?
            this.arrayToString(rule.packetHeaderCriteria.vlanTags) : "";

        let mpls_tags = rule.packetHeaderCriteria &&
        rule.packetHeaderCriteria.mplsTags ?
            this.arrayToString(rule.packetHeaderCriteria.mplsTags) : "";

        let inportSwitch = rule.packetHeaderCriteria && rule.packetHeaderCriteria.inPorts && rule.packetHeaderCriteria.inPorts[0] && rule.packetHeaderCriteria.inPorts[0].deviceId ? { id: rule.packetHeaderCriteria.inPorts[0].deviceId } : null;
        let inportSwitchPorts: Array<string> = rule.packetHeaderCriteria && rule.packetHeaderCriteria.inPorts && rule.packetHeaderCriteria.inPorts[0] && rule.packetHeaderCriteria.inPorts[0].inports
            && rule.packetHeaderCriteria.inPorts[0].inports.length && rule.packetHeaderCriteria.inPorts[0].inports.length > 0 ? rule.packetHeaderCriteria.inPorts[0].inports : [];

        let startTime = rule.schedulerCriteria ? rule.schedulerCriteria.startTime : "";
        let endTime = rule.schedulerCriteria ? rule.schedulerCriteria.endTime : "";

        return <SimpleRule>{
            policyName: rule.policyName,
            macSourceAddresses: macSourceAddresses,
            macDestAddresses: macDestAddresses,
            ipSourceAddressess: ipSourceAddressess,
            ipDestAddressess: ipDestAddressess,
            sourceUsers: rule.userIds ? rule.userIds.src : [],
            destUsers: rule.userIds ? rule.userIds.dest : [],
            portSourceRanges: portSourceRanges,
            portDestRanges: portDestRanges,
            sourceIpLocs : ipLocSource,
            destIpLocs : ipLocDest,
            endUserApps: endUserApps,
            protocols: protocols,
            vlan_tags: vlan_tags,
            mpls_tags: mpls_tags,
            startTime: startTime,
            endTime: endTime,
            quality: rule.serviceAction,
            accessPolicyAction: rule.accessPolicyAction || ACCESSACTIONTYPE.ACCESS,
            conflictedRuleIds: rule.conflictedPolicyIds,
            priority: rule.priority,
            id: rule.id,
            temporaryId: "tempId" + temporaryId,
            valid: true,
            inportSwitch: inportSwitch,
            inportSwitchPorts: inportSwitchPorts
        };
    }

    complexifyRule(simpleRule: SimpleRule): AccessPolicyDTO {
        let complexRule = <AccessPolicyDTO>{};
        complexRule.id = simpleRule.id;
        complexRule.policyName = simpleRule.policyName;
        complexRule.creationTime = new Date();

        complexRule.schedulerCriteria = $.extend({},{
            startTime:simpleRule.startTime || undefined,
            endTime: simpleRule.endTime || undefined
        });
        complexRule.userIds = <CommonHeaderCriteriaInfo>{
            src: simpleRule.sourceUsers,
            dest: simpleRule.destUsers
        };
        complexRule.serviceAction = simpleRule.quality;
        complexRule.updateTime = new Date();

        //inport checker
        let inportDeviceId = simpleRule && simpleRule.inportSwitch && simpleRule.inportSwitch.id ? simpleRule.inportSwitch.id : null;
        let inport =  inportDeviceId ? [{deviceId: inportDeviceId, inports: simpleRule.inportSwitchPorts}] : undefined;

        complexRule.packetHeaderCriteria = <PacketHeaderCriteriaInfo>{
            macAddresses: <CommonHeaderCriteriaInfo>{
                src: this.stringToArray(simpleRule.macSourceAddresses),
                dest: this.stringToArray(simpleRule.macDestAddresses)
            },
            ipAddressess: <CommonHeaderCriteriaInfo>{
                src: this.stringToArray(simpleRule.ipSourceAddressess),
                dest: this.stringToArray(simpleRule.ipDestAddressess)
            },
            portRanges: <CommonHeaderCriteriaInfo>{
                src: this.stringToArray(simpleRule.portSourceRanges),
                dest: this.stringToArray(simpleRule.portDestRanges)
            },
            endUserApplications: simpleRule.endUserApps,

            srcIpLocations: simpleRule.sourceIpLocs,
            destIpLocations: simpleRule.destIpLocs,

            vtnIds: [],
            protocols: this.stringToArray(simpleRule.protocols),
            mplsTags: this.stringToArray(simpleRule.mpls_tags),
            vlanTags: this.stringToArray(simpleRule.vlan_tags),
            inPorts: inport,
        };
        complexRule.accessPolicyAction = simpleRule.accessPolicyAction;
        complexRule.priority = simpleRule.priority;

        return complexRule;
    }

    stringToArray(value: string): Array<string> {
        return value ? value.split(',') : [];
    }

    arrayToString(value: Array<string>): string {
        return value && value.toString();
    }

}
