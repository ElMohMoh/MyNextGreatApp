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
    };
    MainPage.prototype.toggleFavorite = function (args) {
        args.favorite = !args.favorite;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdEQUFzRDtBQVF0RDtJQUdJLGtCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsaUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBWFEsUUFBUTtRQUxwQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDO3lDQUltQywwQkFBVztPQUhuQyxRQUFRLENBWXBCO0lBQUQsZUFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuLi8uLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1wXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYWluLXBhZ2UuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpblBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbXlJdGVtczogT2JqZWN0W107IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm15SXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldFNlc3Npb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmF2b3JpdGUoYXJncyk6IHZvaWQge1xyXG4gICAgICAgIGFyZ3MuZmF2b3JpdGUgPSAhYXJncy5mYXZvcml0ZTtcclxuICAgIH1cclxufSJdfQ==