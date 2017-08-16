import {ServiceActionDTO} from "../../swagger/ServiceActionDTO";
import {ACCESSACTIONTYPE} from "../../swagger/ACCESSACTIONTYPE";
import {EndUserApplicationDTO} from "../../swagger/EndUserApplicationDTO";
import {SwitchDTO} from "../../swagger/SwitchDTO";
import {IpLocationDTO} from "../../swagger/IpLocationDTO";
/**
 * Created by omeroz on 2/1/2017.
 */

export interface SimpleRule {
    temporaryId: string;
    id?: string;
    policyName?: string;
    macSourceAddresses?: string;
    macDestAddresses?: string;
    ipSourceAddressess?: string;
    ipDestAddressess?: string;
    sourceUsers?: Array<string>;
    destUsers?: Array<string>;
    sourceIpLocs?: Array<IpLocationDTO>;
    destIpLocs?: Array<IpLocationDTO>;
    portSourceRanges?: string;
    portDestRanges?: string;
    endUserApps?: Array<EndUserApplicationDTO>;
    protocols?: string;
    startTime?: Date;
    endTime?: Date;
    quality?: ServiceActionDTO;
    accessPolicyAction?: ACCESSACTIONTYPE,
    conflictedRuleIds?: Array<string>;
    conflictedRuleNames?: Array<string>;
    priority?: number;
    valid: boolean;
    vlan_tags?:string;
    mpls_tags?:string;
    inportSwitch?: SwitchDTO | any;
    inportSwitchPorts?: Array<string>;
}
