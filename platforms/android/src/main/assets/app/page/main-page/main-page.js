"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("../../item/item.service");
var segmented_bar_1 = require("ui/segmented-bar");
var MainPage = (function () {
    function MainPage(itemService) {
        this.itemService = itemService;
        this.confDayOptions = [];
        for (var i = 1; i < 4; i++) {
            var segmentedBarItem = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem.title = "day " + i;
            this.confDayOptions.push(segmentedBarItem);
        }
        this.selectedIndex = 0;
    }
    MainPage.prototype.ngOnInit = function () {
        this.myItems = this.itemService.getSessions();
    };
    MainPage.prototype.toggleFavorite = function (args) {
        args.favorite = !args.favorite;
    };
    MainPage.prototype.onSelectedIndexChange = function (args) {
        var segmetedBar = args.object;
        var day = this.confDayOptions[segmetedBar.selectedIndex];
        this.dayHeader = day.title;
    };
    MainPage = __decorate([
        core_1.Component({
            selector: "mp",
            moduleId: module.id,
            templateUrl: "./main-page.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], MainPage);
    return MainPage;
}());
exports.MainPage = MainPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdEQUFzRDtBQUV0RCxrREFBa0U7QUFPbEU7SUFPSSxrQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QixJQUFJLGdCQUFnQixHQUFxQixJQUFJLGdDQUFnQixFQUFFLENBQUM7WUFDaEUsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELGlDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFxQixHQUFyQixVQUFzQixJQUFJO1FBQ3RCLElBQUksV0FBVyxHQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksR0FBRyxHQUFxQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQTdCUSxRQUFRO1FBTHBCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUM7eUNBUW1DLDBCQUFXO09BUG5DLFFBQVEsQ0E4QnBCO0lBQUQsZUFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuLi8uLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IFNlZ21lbnRlZEJhciwgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ1aS9zZWdtZW50ZWQtYmFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1wXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYWluLXBhZ2UuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpblBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIG15SXRlbXM6IE9iamVjdFtdO1xyXG4gICAgcHVibGljIGNvbmZEYXlPcHRpb25zOiBBcnJheTxTZWdtZW50ZWRCYXJJdGVtPjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZGF5SGVhZGVyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgXHJcbiAgICAgICAgdGhpcy5jb25mRGF5T3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtID0gPFNlZ21lbnRlZEJhckl0ZW0+bmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcclxuICAgICAgICAgICAgc2VnbWVudGVkQmFySXRlbS50aXRsZSA9IFwiZGF5IFwiICsgaTtcclxuICAgICAgICAgICAgdGhpcy5jb25mRGF5T3B0aW9ucy5wdXNoKHNlZ21lbnRlZEJhckl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlJdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0U2Vzc2lvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGYXZvcml0ZShhcmdzKTogdm9pZCB7XHJcbiAgICAgICAgYXJncy5mYXZvcml0ZSA9ICFhcmdzLmZhdm9yaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZShhcmdzKTogdm9pZHtcclxuICAgICAgICBsZXQgc2VnbWV0ZWRCYXIgPSA8U2VnbWVudGVkQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGxldCBkYXk6IFNlZ21lbnRlZEJhckl0ZW0gPSB0aGlzLmNvbmZEYXlPcHRpb25zW3NlZ21ldGVkQmFyLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIHRoaXMuZGF5SGVhZGVyID0gZGF5LnRpdGxlO1xyXG4gICAgfVxyXG59Il19