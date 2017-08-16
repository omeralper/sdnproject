/**
 * Created by ekinca on 29.12.2016.
 */
import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {SliderWidget} from "./widgets/SliderWidget";
import {TopologyControllersWidget} from "./widgets/TopologyControllersWidget";
import {InfoTooltipWidget} from "./widgets/InfoTooltipWidget";
import {FooterTooltipWidget} from "./widgets/FooterTooltipWidget";
import {ShowTopology} from "./view/ShowTopology";
import {Topology} from "./view/TopologyPage";
import {VtnListPage} from "../mvtn/VtnListPage/VtnListPage";
import {NoTopologyPage} from "../errorpages/notopology/NoTopologyPage";
import {TopologyRoutingModule} from "./TopologyRoutingModule";
import {SharedModule} from "../shared/SharedModule";
import {VtnReqListPage} from "../mvtn/VtnReqListPage/VtnReqListPage";
import {NacManager} from "../nac/NacManager";
import {NacUserApi} from "../../swagger/NacUserApi";
import {NodeEditorComponent} from "./widgets/NodeEditorComponent";
import {TopologyService} from "./TopologyService";
import {SwitchList} from "./ControllerManagement/SwitchSettings/SwitchList";
import {ControllerList} from "./ControllerManagement/ControllerSettings/ControllerList";
import {ClusterTree} from "./ControllerManagement/ControllerSettings/ClusterTree";
import {ControllerParameterList} from "./ControllerManagement/ControllerSettings/Controller/ControllerParameterList";
import {ControllerSwitchList} from "./ControllerManagement/ControllerSettings/Controller/ControllerSwitchList";
import {ControllerTaskList} from "./ControllerManagement/ControllerSettings/Controller/ControllerTaskList";
import {ControllerView} from "./ControllerManagement/ControllerSettings/Controller/ControllerView";
import {ControllerManagement} from "./ControllerManagement/ControllerManagement";
import {ClusterApi} from "../../swagger/ClusterApi";
import {ControllerApi} from "../../swagger/ControllerApi";
import {FeatureApi} from "../../swagger/FeatureApi";
import {PrognetDeviceApi} from "../../swagger/PrognetDeviceApi";
import {ConfigApi} from "../../swagger/ConfigApi";
import {ControllerSettingsService} from "./ControllerManagement/ControllerSettings/ControllerSettingsService";
import {SwitchEditPopup} from "./switch/SwitchEditPopup/SwitchEditPopup";
import {SwitchFlowsPopup} from "./switch/SwitchFlowsPopup/SwitchFlowsPopup";
import {SwitchPortStatsPopup} from "./switch/SwitchPortStatsPopup/SwitchPortStatsPopup";
import {CreateVirtualTopology} from "./pop-ups/CreateVirtualTopology";
import {LinkSwitch} from "./ControllerManagement/ControllerSettings/Controller/LinkSwitch";
import {ControllerTlsPopup} from "./ControllerManagement/ControllerSettings/ControllerTlsPopup";
import {ControllerEditPopup} from "./ControllerManagement/ControllerSettings/ControllerEditPopup";
import {SwitchEditPopup2} from "./ControllerManagement/SwitchSettings/SwitchEditPopup";
import {AccessPointConversionPromptPopUp} from "./widgets/AccessPointConversionPromptPopUp";
import {VtnListPopup} from "../mvtn/VtnListPopup/VtnListPopup";
import {AddEditLinkPopup} from "./pop-ups/AddEditLinkPopup";
import {AddEditSwitchPopup} from "./pop-ups/AddEditSwitchPopup";
import {LinkEditPopup} from "./pop-ups/LinkEditPopup";
import {PathListPopup} from "../path/PathListPopup/PathListPopup";
import {TestPacketPopup} from "../path/TestPacketPopup/TestPacketPopup";
import {VtnReqConfirmationPopup} from "../mvtn/VtnReqConfirmationPopup";
import {TopologyApi} from "../../swagger/TopologyApi";
import {BgpManagement} from "./Bgp/BgpManagement";
import {BgpRouterListPage} from "./Bgp/BgpRouter/BgpRouterListPage";
import {BgpRouterEditPopup} from "./Bgp/BgpRouter/BgpRouterEditPopup";
import {BgpRouteListPage} from "./Bgp/BgpRoute/BgpRouteListPage";
import {BgpPeerListPage} from "./Bgp/BgpPeer/BgpPeerListPage";
import {BgpPeerEditPopup} from "./Bgp/BgpPeer/BgpPeerEditPopup";
import {PeerRelationStatusListPage} from "./Bgp/BgpPeer/PeerRelationStatusListPage";
import {SdnipApi} from "../../swagger/SdnipApi";
import { alternativePathsPopoverWindow, alternativePathsPopoverDirective } from "./widgets/AlternativePathsButton.directive";
import {MinusPortFilterPipe} from "./Bgp/BgpRouter/MinusPortFilter";
import {AlarmStatusComponent} from "./widgets/AlarmStatus/AlarmStatusComponent";
import {WanDomainList} from "./ControllerManagement/WanDomain/WanDomainList";
import {WanDomainEditPopup} from "./ControllerManagement/WanDomain/WanDomainEditPopup";
import {WANDOMAINApi} from "../../swagger/WANDOMAINApi";
import {WanDomainMultiEditPopup} from "./ControllerManagement/WanDomain/WanDomainMultiEditPopup";
import {TopologyClusterService} from "./TopologyClusterService";
import {BgpSetListPage} from "./BgpFilter/BgpSet/BgpSetListPage";
import {BgpPolicyListPage} from "./BgpFilter/BgpPolicy/BgpPolicyListPage";
import {BgpAssignPolicyListPage} from "./BgpFilter/BgpAssignPolicy/BgpAssignPolicyListPage";
import {BgpFilter} from "./BgpFilter/BgpFilter";
import {SdnipPolicyApi} from "../../swagger/SdnipPolicyApi";
import {BgpSetEditPagePopup} from "./BgpFilter/BgpSet/BgpSetEditPagePopup";
import {BgpPolicyEditPopup} from "./BgpFilter/BgpPolicy/BgpPolicyEditPopup";
import {BgpPolicy} from "./BgpFilter/BgpPolicy/BgpPolicy";
import {BgpAssignPolicyEditPopup} from "./BgpFilter/BgpAssignPolicy/BgpAssignPolicyEditPopup";
import {VNFConversionPopup} from "./pop-ups/VNFConversionPopup";
import {BgpRouteEditPopup} from "./Bgp/BgpRoute/BgpRouteEditPopup";
import {WanVtnManagementList} from "../mvtn/WanVtnManagementListPage/WanVtnManagementList";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        TopologyRoutingModule
    ],
    declarations: [
        TopologyControllersWidget,
        InfoTooltipWidget,
        FooterTooltipWidget,
        NodeEditorComponent,
        ShowTopology,
        Topology,
        SliderWidget,
        NoTopologyPage,
        VtnListPage,
        VtnReqListPage,
        SwitchList,
        ControllerList,
        ClusterTree,
        ControllerParameterList,
        ControllerSwitchList,
        ControllerTaskList,
        ControllerView,
        ControllerManagement,
        SwitchEditPopup,
        SwitchFlowsPopup,
        SwitchPortStatsPopup,
        CreateVirtualTopology,
        SwitchEditPopup2,
        ControllerEditPopup,
        ControllerTlsPopup,
        LinkSwitch,
        AccessPointConversionPromptPopUp,
        VtnListPopup,
        AddEditLinkPopup,
        AddEditSwitchPopup,
        LinkEditPopup,
        PathListPopup,
        TestPacketPopup,
        VtnReqConfirmationPopup,
	    BgpManagement,
	    BgpRouterListPage,
	    BgpRouterEditPopup,
	    BgpRouteListPage,
	    BgpRouteEditPopup,
	    BgpPeerListPage,
	    BgpPeerEditPopup,
        WanVtnManagementList,
	    PeerRelationStatusListPage,
        alternativePathsPopoverDirective,
        alternativePathsPopoverWindow,
	    MinusPortFilterPipe,
        alternativePathsPopoverDirective,
        alternativePathsPopoverWindow,
        AlarmStatusComponent,
	    WanDomainList,
	    WanDomainEditPopup,
	    WanDomainMultiEditPopup,
	    BgpSetListPage,
	    BgpPolicyListPage,
	    BgpAssignPolicyListPage,
	    BgpFilter,
	    BgpSetEditPagePopup,
	    BgpPolicyEditPopup,
	    BgpPolicy,
	    BgpAssignPolicyEditPopup,
	    WanDomainMultiEditPopup,
        VNFConversionPopup
    ],
    providers: [
        TopologyService,
        TopologyClusterService,
        NacUserApi,
        NacManager,
        ClusterApi,
        FeatureApi,
        PrognetDeviceApi,
        ConfigApi,
        ControllerSettingsService,
        TopologyApi,
        ControllerApi,
	    SdnipApi,
	    WANDOMAINApi,
	    SdnipPolicyApi
    ],
    entryComponents: [
        SwitchEditPopup,
        SwitchFlowsPopup,
        SwitchPortStatsPopup,
        CreateVirtualTopology,
        SwitchEditPopup2,
        ControllerEditPopup,
        ControllerTlsPopup,
        LinkSwitch,
        AccessPointConversionPromptPopUp,
        VtnListPopup,
        AddEditLinkPopup,
        AddEditSwitchPopup,
        LinkEditPopup,
        PathListPopup,
        TestPacketPopup,
        VtnReqConfirmationPopup,
	    BgpRouterEditPopup,
	    BgpPeerEditPopup,
	    BgpRouteEditPopup,
	    PeerRelationStatusListPage,
        alternativePathsPopoverWindow,
        AlarmStatusComponent,
	    WanDomainEditPopup,
	    WanDomainMultiEditPopup,
        VNFConversionPopup,
	    WanDomainMultiEditPopup,
	    BgpSetEditPagePopup,
	    BgpPolicyEditPopup,
	    BgpAssignPolicyEditPopup
    ]
})
export class TopologyModule {
}
