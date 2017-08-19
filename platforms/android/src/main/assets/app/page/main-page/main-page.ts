import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../item/item.service";
import { Session } from "../../shared/interfaces";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: "mp",
    moduleId: module.id,
    templateUrl: "./main-page.html",
})
export class MainPage implements OnInit {

    myItems: Object[];
    public confDayOptions: Array<SegmentedBarItem>;
    public selectedIndex: number;
    public dayHeader: string;

    constructor(private itemService: ItemService) { 
        this.confDayOptions = [];
        for (let i = 1; i < 4; i++) {
            let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            segmentedBarItem.title = "day " + i;
            this.confDayOptions.push(segmentedBarItem);
        }
        this.selectedIndex = 0;
    }

    ngOnInit(): void {
        this.myItems = this.itemService.getSessions();
    }

    toggleFavorite(args): void {
        args.favorite = !args.favorite;
    }

    onSelectedIndexChange(args): void{
        let segmetedBar = <SegmentedBar>args.object;
        let day: SegmentedBarItem = this.confDayOptions[segmetedBar.selectedIndex];
        this.dayHeader = day.title;
    }
}