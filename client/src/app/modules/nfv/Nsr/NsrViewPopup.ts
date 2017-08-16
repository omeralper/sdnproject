/**
 * Created by omeroz on 6/1/2017.
 */

import {
	Component,
	OnInit,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	ElementRef
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {MODAL_SIZE} from "../../ModalComponent";
import {NFVApi} from "../../../swagger/NFVApi";
import {NetServiceRecordDTO} from "../../../swagger/NetServiceRecordDTO";
@Component({
	moduleId: module.id,
	selector: 'NsrViewPopup',
	templateUrl: './NsrViewPopup.html',
	providers: [NFVApi],
})
export class NsrViewPopup extends BasePopupEditPage<NetServiceRecordDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	constructor(public nfvApi: NFVApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.NORMAL;
		this.setI18NKey('network_function_virtualization.network_service_record.view');


		this.setFormActions([
			this.createAction('dialogs.actions.ok', () => {
				this.close();
			})
		]);

	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}

