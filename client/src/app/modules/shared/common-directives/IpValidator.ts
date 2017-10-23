/**
 * Created by omeroz on 6/21/2017.
 */
import {Directive, OnInit, ElementRef, Renderer2, Input} from "@angular/core";
@Directive({
	selector: "[ip]"
})
export class IpValidator implements OnInit {

	maskRegex = '\/([1-9]|[1-2][0-9]|3[0-2])';
	ip4Regex = '(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])';
	ip6Regex = '(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))';

	@Input('ip') type: string;
	@Input('isMasked') isMasked: boolean = false;

	constructor(public el: ElementRef, public renderer: Renderer2) {

	}

	public ngOnInit() {
		let regex = '';
		switch (this.type) {
			case 'ipv6':
				regex = this.ip6Regex;
				break;
			case 'ipv4':
				regex = this.ip4Regex;
				break;
			default://all ip's
				regex = '((' + this.ip4Regex + ')|(' + this.ip6Regex + '))';
				break;
		}

		regex = this.wrapWithStartEndChars(regex + (this.isMasked ? this.maskRegex : ''));

		this.renderer.setAttribute(this.el.nativeElement, 'pattern', regex);
	}

	private wrapWithStartEndChars(regex) {
		return '^' + regex + '$';
	}
}