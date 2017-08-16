/**
 * Created by omeroz on 19.12.2016.
 */
import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    OnChanges,
    ElementRef,
    ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {ListOptions} from "../../../swagger/ListOptions";
import {MvtnListResponse} from "../../../swagger/MvtnListResponse";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {MeterApi} from "../../../swagger/MeterApi";
import {MeterListResponse} from "../../../swagger/MeterListResponse";
import {METERTYPE} from "../../../swagger/METERTYPE";
import {AbstractGraph} from "../Main/AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {TopologyService} from "../../topology/TopologyService";

@Component({ moduleId: module.id,
    selector: 'virtualnetworkgraph',
    templateUrl: "./VirtualNetworkGraph.html",
    inputs: ['allMetrics'],
    providers: [MeterApi]
})

export class VirtualNetworkGraph extends AbstractGraph implements AfterViewInit,OnChanges {
    public selectedSwitches: Array<SwitchDTO> = [];
    public virtualNetworks: Array<MvtnDTO> = [];
    public selectedVirtualNetwork: MvtnDTO = <MvtnDTO>{};

    constructor(public tsdbApi: TsdbServerProxy,
                public changeDetector: ChangeDetectorRef,
                public generator: RandomStatisticsGenerator,
                public meterApi: MeterApi,
                public mvtnApi: MvtnApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(tsdbApi, changeDetector,generator, baseServices, elementRef);
    }

    ngOnChanges(e) {
        if (e.allMetrics && e.allMetrics.currentValue.length > 0) {
            this.filteredMetrics = this.allMetrics.filter((metric) => {
                return metric.metricName.indexOf('meterstat') > -1;
            });
            this.changeDetector.detectChanges();
            $('.metricSelect', this.$container)
                .select2()
                .val(this.filteredMetrics[0].metricName)
                .trigger('change');

        }
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            $(".metricSelect", this.$container).select2({
                placeholder: this.t('placeholder.metrics'),
                maximumSelectionLength: 2
            }).on('change', (evt) => {
                this.selectedMetrics = $(evt.target).val() || [];
                this.fetchGraphData();
            });


            $(".switchSelect", this.$container).select2({
                placeholder: this.t('placeholder.devices'),
                maximumSelectionLength: 2
            }).on('change', (evt) => {
                this.selectedSwitches = $(evt.target).val() || [];
                this.fetchGraphData();
            });

            this.initVirtualNetworks();
            this.drawGraph();
            return true;
        }
        return false;
    }

    initVirtualNetworks() {
        let request = this.baseServices.apiHelper.genRequest({
            "options": <ListOptions>{
                "startPage": 0
            }
        });
        this.mvtnApi
            .virtualListPOST(request)
            .subscribe(
                (res: MvtnListResponse) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.virtualNetworks = res.data.list;
                        this.selectedVirtualNetwork = this.virtualNetworks[0] ||  <MvtnDTO>{};

                        let selectedSwitch = (this.virtualNetworks[0] &&
                        this.virtualNetworks[0].topologyData) ?
                            this.virtualNetworks[0].topologyData.switches[0] : <SwitchDTO>{};
                        $('.switchSelect', this.$container)
                            .select2()
                            .val(selectedSwitch.id)
                            .trigger('change');

                        this.selectedVirtualNetwork && this.initMeters(this.selectedVirtualNetwork);
                    }
                });
        this.changeDetector.detectChanges();
    }

    initMeters(selectedVirtualNetwork: MvtnDTO) {
        let request = this.baseServices.apiHelper.genRequest({
            "data": {
                id: selectedVirtualNetwork.id,
                meterType: METERTYPE.MVTN
            }
        });

        this.meterApi
            .meterListPOST(request)
            .subscribe(
                (res: MeterListResponse) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {

                    }
                });
        this.changeDetector.detectChanges();
    }

    virtualNetworkSelected(network: MvtnDTO) {
        this.selectedVirtualNetwork = network;
        this.initMeters(network);
        this.changeDetector.detectChanges();
    }

    // switchChanged(swtch: SwitchDTO) {
    //     this.selectedSwitch = swtch;
    //     this.changeDetector.detectChanges();
    //     this.fetchGraphData();
    // }

    getSelectedParams() {
        return this.selectedSwitches;
    }

    getTagValues(param) {
        return [
            {
                tag: 'device',
                val: param,
            },
            // {
            //     tag: 'meter',
            //     val: '1',
            //     // val: '*'
            // },
            {
                tag: 'vtn',
                val: this.selectedVirtualNetwork.id
            }];
    }
}
