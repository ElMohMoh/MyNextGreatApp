"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("../../item/item.service");
var MainPage = (function () {
    function MainPage(itemService) {
        this.itemService = itemService;
    }
    MainPage.prototype.ngOnInit = function () {
        this.myItems = this.itemService.getSessions();
        console.dir(this.myItems);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdEQUFzRDtBQVF0RDtJQUdJLGtCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBUlEsUUFBUTtRQUxwQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDO3lDQUltQywwQkFBVztPQUhuQyxRQUFRLENBU3BCO0lBQUQsZUFBQztDQUFBLEFBVEQsSUFTQztBQVRZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuLi8uLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21haW4tcGFnZS5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBteUl0ZW1zOiBPYmplY3RbXTsgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubXlJdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0U2Vzc2lvbnMoKTtcclxuICAgICAgICBjb25zb2xlLmRpcih0aGlzLm15SXRlbXMpO1xyXG4gICAgfVxyXG59Il19