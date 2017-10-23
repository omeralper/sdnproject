import {
	Component, ElementRef, Input, Output,
	EventEmitter
} from "@angular/core";
@Component({
	moduleId: module.id,
	selector: 'Tree',
	templateUrl: './Tree.html',
	inputs: ['treeData'],
	outputs: ['treeClicked']
})

export class Tree<T> {
	@Input() treeData: Array<TreeItem<T>> = [];
	@Output() treeClicked: EventEmitter<TreeItem<T>> = new EventEmitter();

	constructor(public elementRef:ElementRef) {

	}

	branchClick(item:TreeItem<T>) {
		this.selectItem(item.id);
		this.treeClicked.emit(item);
	}

	selectItem(id){
		$(this.elementRef.nativeElement).parents(".treeView").last().find('.active').removeClass('active');
		$(this.elementRef.nativeElement).find('.active').removeClass('active');

		let $item = $("[tree-id=" + id + "]", this.elementRef.nativeElement);
		$item.addClass("active");
		$item.parents(".collapse").collapse('show');
		$item[0] && $item[0].scrollIntoView(false);
	}
}

export interface TreeItem<T> {
	id: string;
	name: string;
	children?: Array<any>;
	className?: string;
	iconClass?:string;
	data?:T;
	type?:any;
}