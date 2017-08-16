/**
 * Created by ekinca on 10.03.2017.
 */
import {Directive, HostListener} from "@angular/core";

@Directive({
    selector: "[click-stop-propagation]"
})
export class ClickStopPropagation{

    @HostListener("click", ["$event"])
    public onClick(event: any): void {
        event.stopPropagation();
    }
}