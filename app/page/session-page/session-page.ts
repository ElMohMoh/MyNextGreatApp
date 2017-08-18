import { Component, OnInit,ViewChild  } from "@angular/core";
import { ItemService } from "../../item/item.service";
import { Session } from "../../shared/interfaces";
import { ActivatedRoute } from "@angular/router";

import { EventData } from 'data/observable';
import { Button } from 'ui/button';

@Component({
    selector: "mp",
    moduleId: module.id,
    templateUrl: "./session-page.html",
})
export class SessionPage implements OnInit {
    session: Session; 
    startDt: Date;
    endDt: Date;
    description : string;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

        const id = +this.route.snapshot.params["id"];
        this.session = this.itemService.getSession(id);
        this.startDt = this.fixDate(new Date(this.session.start));
        this.endDt = this.fixDate(new Date(this.session.end));
        this.description = this.session.descriptionShort;
    }

    toggleFavorite(): void {
        this.session.favorite = !this.session.favorite;
    }

    fixDate(date: Date): Date {
        return new Date( date.getUTCFullYear(), date.getMonth(), date.getUTCDate(), date.getHours(), date.getMinutes(), date.getMilliseconds());
    }

    get range(): string {

        var startMinute = this.startDt.getMinutes() + '';
        var endMinutes = this.endDt.getMinutes() + '';
        var startAM = this.startDt.getHours() < 12 ? 'am' : 'pm';
        var endAM = this.endDt.getHours() < 12 ? 'am' : 'pm';

        var startHours = (this.startDt.getHours() <= 12 ? this.startDt.getHours() : this.startDt.getHours() - 12 ) + '';
        var endHours = (this.endDt.getHours() <= 12 ? this.endDt.getHours() : this.endDt.getHours() - 12 ) + '';

        return (startHours.length === 1 ? '0' + startHours : startHours) + ':' + (startMinute.length === 1 ? '0' + startMinute : startMinute) +
            startAM + 
                ' - ' + (endHours.length === 1 ? '0' + endHours: endHours) + ":" + (endMinutes.length === 1 ? '0' + endMinutes : endMinutes)+ endAM;

    }

    toggleDescription(arg: EventData){
        
        var btn = <Button> arg.object;

        if (btn.text === 'MORE'){
            btn.text = 'LESS';
            this.description = this.session.description;
        }else{
            btn.text = 'MORE';
            this.description = this.session.descriptionShort;
        }
    }
}