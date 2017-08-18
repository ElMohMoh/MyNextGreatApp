import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../item/item.service";


@Component({
    selector: "mp",
    moduleId: module.id,
    templateUrl: "./main-page.html",
})
export class MainPage implements OnInit {
    myItems: Object[]; 

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.myItems = this.itemService.getSessions();
        console.dir(this.myItems);
    }
}