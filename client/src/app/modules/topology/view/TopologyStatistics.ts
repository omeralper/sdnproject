/**
 * Created by omeroz on 7/4/2017.
 */
import {
	Component, ElementRef, OnInit, OnChanges
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {LocalStorageManager} from "../../LocalStorageManager";

@Component({
	moduleId: module.id,
	selector: 'TopologyStatistics',
	templateUrl: 'TopologyStatistics.html'
})

export class TopologyStatistics implements OnInit, OnChanges {

	constructor(public localStorageManager: LocalStorageManager,
	            public elementRef: ElementRef,
	            public baseServices: PageServices) {

	}

	ngOnInit() {
		let monitorOrder = this.getMonitorOrder();
		monitorOrder.forEach((monitor, i) => {
			this.putMonitorToContainer(monitor, $('#container' + (i + 1)));
		});
	}

	ngOnChanges(e) {

	}

	onDrop(e) {
		e.preventDefault();
		let id = e.dataTransfer.getData("id");
		let thisMonitor = $('#' + id);
		let thisMonitorContainer = thisMonitor.closest('.droppable');

		let otherMonitorContainer = $(e.target).closest('.droppable');
		let otherMonitor = otherMonitorContainer.find('[draggable]');

		this.putMonitorToContainer(thisMonitor, otherMonitorContainer);
		this.putMonitorToContainer(otherMonitor, thisMonitorContainer);

		let otherMonitorId = otherMonitor[0].id;

		let monitorOrder = this.getMonitorOrder();

		monitorOrder.forEach((mon, i) => {
			if (mon == otherMonitorId)
				monitorOrder[i] = id;
			if (mon == id)
				monitorOrder[i] = otherMonitorId;
		});
		this.localStorageManager.setItem('monitorOrder', JSON.stringify(monitorOrder), false);
	}

	putMonitorToContainer(monitor, container) {
		let m = monitor;
		let c = container;
		if (typeof monitor == "string")
			m = $('#' + monitor);

		if (typeof container == "string")
			c = $('#' + container);
		c.append(m);
	}

	getMonitorOrder() {
		let storedOrder = this.localStorageManager.getItem('monitorOrder');
		let monitorOrder = ['mon1', 'mon2', 'mon3', 'mon4', 'mon5', 'mon6'];
		if (storedOrder)
			monitorOrder = JSON.parse(storedOrder);
		return monitorOrder;
	}


	drag(e) {
		e.dataTransfer.setData("id", e.target.id);
	}

	remove(monitorId: number) {
		this.localStorageManager.removeItem('monitor' + monitorId);
	}
}
