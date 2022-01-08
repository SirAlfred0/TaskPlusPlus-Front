(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\TaskPlusPlus\src\main.ts */"zUnb");


/***/ }),

/***/ "180W":
/*!***********************************************************************!*\
  !*** ./src/app/components/role-tags-info/role-tags-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: RoleTagsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTagsInfoComponent", function() { return RoleTagsInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Directives/set-bg-color.directive */ "F2C7");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");






function RoleTagsInfoComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleTagsInfoComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var item_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.RemoveTag(item_r2.RoleTagId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgColor", item_r2.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, item_r2.Caption, 15));
} }
function RoleTagsInfoComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleTagsInfoComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var item_r5 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return !ctx_r6.IsAdded(item_r5.Id) ? ctx_r6.AsignTag(item_r5.Id) : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r5 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgColor", item_r5.Color)("ngClass", ctx_r1.IsAdded(item_r5.Id) ? "added" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, item_r5.Caption, 15));
} }
var RoleTagsInfoComponent = /** @class */ (function () {
    function RoleTagsInfoComponent(themeService) {
        this.themeService = themeService;
        this.activeRequestOn = false;
        this.open = false;
        this.accessToken = '';
        this.boardId = '';
        this.roleId = '';
        this.boardTags = [];
        this.tags = [];
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.AsignTagToRoleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.RemoveTagFromRoleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
    }
    RoleTagsInfoComponent.prototype.ngOnInit = function () {
    };
    RoleTagsInfoComponent.prototype.CloseMenu = function () {
        this.close.emit();
    };
    RoleTagsInfoComponent.prototype.IsAdded = function (tagId) {
        var res = false;
        this.tags.forEach(function (item) {
            if (item.TagId == tagId)
                res = true;
        });
        return res;
    };
    RoleTagsInfoComponent.prototype.AsignTag = function (id) {
        var roleTag = { AccessToken: this.accessToken, BoardId: this.boardId, RoleId: this.roleId, TagId: id };
        if (!this.activeRequestOn)
            this.AsignTagToRoleEvent.emit(roleTag);
    };
    RoleTagsInfoComponent.prototype.RemoveTag = function (id) {
        var roleTag = { AccessToken: this.accessToken, BoardId: this.boardId, RoleTagId: id };
        if (!this.activeRequestOn)
            this.RemoveTagFromRoleEvent.emit(roleTag);
    };
    RoleTagsInfoComponent.ɵfac = function RoleTagsInfoComponent_Factory(t) { return new (t || RoleTagsInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__["ThemeControllerService"])); };
    RoleTagsInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleTagsInfoComponent, selectors: [["app-role-tags-info"]], inputs: { activeRequestOn: "activeRequestOn", open: "open", accessToken: "accessToken", boardId: "boardId", roleId: "roleId", boardTags: "boardTags", tags: "tags" }, outputs: { close: "close", AsignTagToRoleEvent: "AsignTagToRoleEvent", RemoveTagFromRoleEvent: "RemoveTagFromRoleEvent" }, decls: 11, vars: 15, consts: [[1, "menu", "menu-transition", 3, "ngClass"], [1, "free-space-top-x"], [1, "icon", "right-align", "icon-Close", "x-large", 3, "click"], [1, "free-space-top-2x", "horizontal-list", "soft-list"], ["class", "free-space-top-x", "appSetBgColor", "", 3, "bgColor", "click", 4, "ngFor", "ngForOf"], ["class", "free-space-top-x", "appSetBgColor", "", 3, "bgColor", "ngClass", "click", 4, "ngFor", "ngForOf"], ["appSetBgColor", "", 1, "free-space-top-x", 3, "bgColor", "click"], ["appSetBgColor", "", 1, "free-space-top-x", 3, "bgColor", "ngClass", "click"]], template: function RoleTagsInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleTagsInfoComponent_Template_i_click_2_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Role's Tags");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoleTagsInfoComponent_li_6_Template, 3, 5, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Board's Tags");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoleTagsInfoComponent_li_10_Template, 3, 6, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.open ? "open" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#fff");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#fff");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boardTags);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_3__["SetBgColorDirective"]], pipes: [_Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_4__["CaptionPipe"]], styles: [".soft-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-right: 4rem !important;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyb2xlLXRhZ3MtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDhCQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsImZpbGUiOiJyb2xlLXRhZ3MtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2Z0LWxpc3QgPiBsaVxyXG57XHJcbiAgcGFkZGluZy1yaWdodDogNHJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIl19 */"] });
    return RoleTagsInfoComponent;
}());



/***/ }),

/***/ "1jOW":
/*!*****************************************************************!*\
  !*** ./src/app/components/share-board/share-board.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShareBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareBoardComponent", function() { return ShareBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Directives_select_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Directives/select.directive */ "yvKA");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");






function ShareBoardComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShareBoardComponent_li_7_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.OnCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ind_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r0.theme.Color10Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, item_r1.FirstName, 15), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "item" + (ind_r2 + 1))("value", item_r1.FriendId)("mainColor", ctx_r0.theme.Color10Normal)("color", ctx_r0.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "item" + (ind_r2 + 1));
} }
var ShareBoardComponent = /** @class */ (function () {
    function ShareBoardComponent(themeSerivce) {
        this.themeSerivce = themeSerivce;
        this.activeRequestOn = false;
        this.open = false;
        this.parentId = '';
        this.accessToken = '';
        this.friends = [];
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shareBoardEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shareInfo = { AccessToken: '', BoardId: '', ShareToList: [] };
        this.theme = this.themeSerivce.GetTheme();
    }
    ShareBoardComponent.prototype.ngOnInit = function () {
        this.shareInfo = { AccessToken: this.accessToken, BoardId: this.parentId, ShareToList: [] };
    };
    ShareBoardComponent.prototype.OnCheck = function (event) {
        var _this = this;
        var shareItem = event.target.value;
        if (event.target.checked) {
            this.shareInfo.ShareToList.push(shareItem);
        }
        else {
            this.shareInfo.ShareToList.forEach(function (item, index) {
                if (item == shareItem)
                    _this.shareInfo.ShareToList.splice(index, 1);
            });
        }
    };
    ShareBoardComponent.prototype.Share = function () {
        if (!this.activeRequestOn)
            this.shareBoardEvent.emit(this.shareInfo);
    };
    ShareBoardComponent.prototype.CloseMenu = function () {
        this.open = false;
        this.close.emit();
    };
    ShareBoardComponent.ɵfac = function ShareBoardComponent_Factory(t) { return new (t || ShareBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__["ThemeControllerService"])); };
    ShareBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShareBoardComponent, selectors: [["app-share-board"]], inputs: { activeRequestOn: "activeRequestOn", open: "open", parentId: "parentId", accessToken: "accessToken", friends: "friends" }, outputs: { close: "close", shareBoardEvent: "shareBoardEvent" }, decls: 11, vars: 15, consts: [[1, "menu", "menu-transition", 3, "ngClass"], [1, "free-space-top-x"], [1, "icon", "right-align", "icon-Close", "x-large", 3, "click"], [1, "free-space-top-3x"], [1, "icon", "icon-Contact-List", "large"], [1, "free-space-top-2x"], ["class", "free-space-top-x", 4, "ngFor", "ngForOf"], [1, "icon", "right-align", "icon-Share", "x2-large", 3, "click"], ["type", "checkbox", "appSelect", "", 3, "id", "value", "mainColor", "color", "change"], [3, "for"], [1, "icon", "right-align", "icon-Selectbox", "x-large"]], template: function ShareBoardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBoardComponent_Template_i_click_2_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact List");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShareBoardComponent_li_7_Template, 7, 11, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBoardComponent_Template_i_click_10_listener() { return ctx.shareInfo.ShareToList.length != 0 ? ctx.Share() : ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.open ? "open" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.friends);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.shareInfo.ShareToList.length, " contact selected");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _Directives_select_directive__WEBPACK_IMPORTED_MODULE_3__["SelectDirective"]], pipes: [_Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_4__["CaptionPipe"]], styles: [".list-item[_ngcontent-%COMP%] {\n  margin: 3rem auto !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n  margin-right: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZS1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVFLDRCQUFBO0FBSEY7O0FBTUE7RUFFRSwyQkFBQTtFQUNBLGtCQUFBO0FBSkYiLCJmaWxlIjoic2hhcmUtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4ubGlzdC1pdGVtXHJcbntcclxuICBtYXJnaW46IDNyZW0gYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvblxyXG57XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcclxufVxyXG4iXX0= */"] });
    return ShareBoardComponent;
}());



/***/ }),

/***/ "1lZJ":
/*!*******************************************************!*\
  !*** ./src/app/Directives/scroll-effect.directive.ts ***!
  \*******************************************************/
/*! exports provided: ScrollEffectDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollEffectDirective", function() { return ScrollEffectDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var ScrollEffectDirective = /** @class */ (function () {
    function ScrollEffectDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    ScrollEffectDirective.ɵfac = function ScrollEffectDirective_Factory(t) { return new (t || ScrollEffectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    ScrollEffectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollEffectDirective, selectors: [["", "appScrollEffect", ""]] });
    return ScrollEffectDirective;
}());



/***/ }),

/***/ "5Mjg":
/*!***********************************************************!*\
  !*** ./src/app/components/add-role/add-role.component.ts ***!
  \***********************************************************/
/*! exports provided: AddRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function() { return AddRoleComponent; });
/* harmony import */ var src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Enums/ValidateMethods */ "F0qM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/validation.service */ "MSpn");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Directives_select_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Directives/select.directive */ "yvKA");








var AddRoleComponent = /** @class */ (function () {
    function AddRoleComponent(validateService, themeService) {
        this.validateService = validateService;
        this.themeService = themeService;
        this.activeRequestOn = false;
        this.open = false;
        this.boardId = '';
        this.accessToken = '';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newRoleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.writeTask = false;
        this.writeComment = false;
        this.newRole = { AccessToken: '', BoardId: '', Caption: '', Color: '', ReadTask: false, WriteTask: false, CompleteTask: false, ReadComment: false, WriteComment: false };
        this.theme = this.themeService.GetTheme();
    }
    AddRoleComponent.prototype.ngOnInit = function () {
    };
    AddRoleComponent.prototype.AddRole = function () {
        this.newRole.ReadComment = this.newRole.ReadComment || this.newRole.WriteComment;
        this.newRole.ReadTask = this.newRole.ReadTask || this.newRole.WriteTask;
        this.newRole.BoardId = this.boardId;
        this.newRole.AccessToken = this.accessToken;
        if (this.validateService.validate(this.newRole.Caption, src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_0__["validateMethods"].caption) && !this.activeRequestOn)
            this.newRoleEvent.emit(this.newRole);
        this.newRole.ReadComment = false;
        this.newRole.ReadTask = false;
    };
    AddRoleComponent.prototype.CloseMenu = function () {
        this.close.emit();
    };
    AddRoleComponent.ɵfac = function AddRoleComponent_Factory(t) { return new (t || AddRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_3__["ThemeControllerService"])); };
    AddRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddRoleComponent, selectors: [["app-add-role"]], inputs: { activeRequestOn: "activeRequestOn", open: "open", boardId: "boardId", accessToken: "accessToken" }, outputs: { close: "close", newRoleEvent: "newRoleEvent" }, decls: 26, vars: 41, consts: [[1, "menu", "menu-transition", 3, "ngClass"], [1, "free-space-top-x"], [1, "icon", "right-align", "icon-Close", "x-large", 3, "click"], [1, "free-space-top-3x"], ["type", "text", "placeholder", "role name", 1, "input-padding-x", 3, "ngModel", "ngModelChange"], ["type", "color", "value", "#fff", 1, "right-align", "color", 3, "ngModel", "ngModelChange"], [1, "free-space-top-2x"], [1, "medium", "free-space-top-x"], ["type", "checkbox", "id", "iwt", "appSelect", "", 3, "ngModel", "mainColor", "color", "ngModelChange"], ["for", "iwt"], [1, "medium"], [1, "icon", "icon-Tree", "x-large"], ["type", "checkbox", "id", "irt", "appSelect", "", 3, "mainColor", "color", "checked", "ngModel", "disabled", "ngModelChange"], ["for", "irt"], ["type", "checkbox", "id", "iwc", "appSelect", "", 3, "ngModel", "mainColor", "color", "ngModelChange"], ["for", "iwc"], ["type", "checkbox", "id", "irc", "appSelect", "", 3, "mainColor", "color", "checked", "ngModel", "disabled", "ngModelChange"], ["for", "irc"], [1, "icon-Add-Circle", "right-align", "x2-large", "icon", 3, "click"]], template: function AddRoleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRoleComponent_Template_i_click_2_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRoleComponent_Template_input_ngModelChange_4_listener($event) { return ctx.newRole.Caption = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRoleComponent_Template_input_ngModelChange_5_listener($event) { return ctx.newRole.Color = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRoleComponent_Template_input_ngModelChange_8_listener($event) { return ctx.writeTask = $event; })("ngModelChange", function AddRoleComponent_Template_input_ngModelChange_8_listener($event) { return ctx.newRole.WriteTask = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " write task ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRoleComponent_Template_input_ngModelChange_13_listener($event) { return ctx.newRole.ReadTask = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " read task ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRoleComponent_Template_input_ngModelChange_17_listener($event) { return ctx.writeComment = $event; })("ngModelChange", function AddRoleComponent_Template_input_ngModelChange_17_listener($event) { return ctx.newRole.WriteComment = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " write comment ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRoleComponent_Template_input_ngModelChange_22_listener($event) { return ctx.newRole.ReadComment = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " read comment ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRoleComponent_Template_i_click_25_listener() { return ctx.AddRole(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.open ? "open" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newRole.Caption);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newRole.Color);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.writeTask)("ngModel", ctx.newRole.WriteTask)("mainColor", ctx.theme.Color10Normal)("color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mainColor", ctx.theme.Color10Normal)("color", ctx.theme.Color30Bold)("checked", ctx.writeTask)("ngModel", ctx.newRole.ReadTask)("disabled", ctx.writeTask ? true : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.writeComment)("ngModel", ctx.newRole.WriteComment)("mainColor", ctx.theme.Color10Normal)("color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mainColor", ctx.theme.Color10Normal)("color", ctx.theme.Color30Bold)("checked", ctx.writeComment)("ngModel", ctx.newRole.ReadComment)("disabled", ctx.writeComment ? true : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _Directives_select_directive__WEBPACK_IMPORTED_MODULE_6__["SelectDirective"]], styles: [".list-item[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.roleinput[_ngcontent-%COMP%] {\n  color: #5166b0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVFLDJCQUFBO0FBTEY7O0FBUUE7RUFDRSx5QkFBQTtBQUxGIiwiZmlsZSI6ImFkZC1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcblxyXG4ubGlzdC1pdGVtXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb2xlaW5wdXR7XHJcbiAgY29sb3I6ICM1MTY2YjAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    return AddRoleComponent;
}());



/***/ }),

/***/ "5klJ":
/*!***************************************!*\
  !*** ./src/app/Pipes/caption.pipe.ts ***!
  \***************************************/
/*! exports provided: CaptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionPipe", function() { return CaptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var CaptionPipe = /** @class */ (function () {
    function CaptionPipe() {
    }
    CaptionPipe.prototype.transform = function (value, limit) {
        return value.length > limit ? value.substr(0, limit) : value;
    };
    CaptionPipe.ɵfac = function CaptionPipe_Factory(t) { return new (t || CaptionPipe)(); };
    CaptionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "caption", type: CaptionPipe, pure: true });
    return CaptionPipe;
}());



/***/ }),

/***/ "79cI":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-list/contact-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Enums/ValidateMethods */ "F0qM");
/* harmony import */ var src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Enums/UserActions */ "lXr8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var _Servicies_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Servicies/validation.service */ "MSpn");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _nav_contact_list_nav_contact_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nav-contact-list/nav-contact-list.component */ "D7Cu");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");











var _c0 = ["addInput"];
function ContactListComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactListComponent_li_12_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); var item_r4 = ctx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.ApplyRequestResponce(item_r4.Id, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactListComponent_li_12_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); var item_r4 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.ApplyRequestResponce(item_r4.Id, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r2.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r4.Bio == "" ? "extra-bottom-padding" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r2.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 13, item_r4.FirstName + " " + item_r4.LastName, 35), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r2.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r2.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r2.theme.Color60Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r4.Bio, " ");
} }
function ContactListComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r8 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r3.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDragData", item_r8.Id)("ngClass", item_r8.Bio == "" ? "extra-bottom-padding" : "")("cdkDragStartDelay", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 11, item_r8.FirstName + " " + item_r8.LastName, 35), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r8.Bio, " ");
} }
var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(API, validation, themeService, cacheManager) {
        this.API = API;
        this.validation = validation;
        this.themeService = themeService;
        this.cacheManager = cacheManager;
        this.addInput = {};
        this.accessToken = '';
        this.addFriendEntity = { AccessToken: '', PhoneNumber: '' };
        this.getFriendRequestEntity = { AccessToken: '' };
        this.getFriendListEntity = { AccessToken: '' };
        this.requests = [];
        this.friends = [];
        this.theme = this.themeService.GetTheme();
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessToken = this.cacheManager.GetLoginDetails();
        this.getFriendRequestEntity = { AccessToken: this.accessToken };
        this.getFriendListEntity = { AccessToken: this.accessToken };
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetFriendRequest, this.getFriendRequestEntity).then(function (data) {
            _this.requests = data;
        });
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetFriendList, this.getFriendListEntity).then(function (data) {
            _this.friends = data;
        });
    };
    ContactListComponent.prototype.Focus = function (item, input) {
        item.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        if (window.pageYOffset == 0) {
            input.focus();
        }
    };
    ContactListComponent.prototype.Drop = function (t) {
        var _this = this;
        var effectivePull = screen.width / 10;
        if (t.distance.x > effectivePull) {
            var removeFriend = { Id: t.item.data, AccessToken: this.accessToken };
            this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].RemoveFriend, removeFriend).then(function (data) {
                if (data.result)
                    _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetFriendList, _this.getFriendListEntity).then(function (datas) {
                        _this.friends = datas;
                    });
            });
        }
    };
    ContactListComponent.prototype.AddFriend = function (number) {
        var _this = this;
        this.addFriendEntity = { AccessToken: this.accessToken, PhoneNumber: number };
        if (this.validation.validate(this.addFriendEntity.PhoneNumber, src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_0__["validateMethods"].signin))
            this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AddFriend, this.addFriendEntity).then(function (data) {
                if (data.result)
                    _this.addInput.nativeElement.value = '';
            });
    };
    ContactListComponent.prototype.ApplyRequestResponce = function (id, responce) {
        var _this = this;
        var requestResponce = { AccessToken: this.accessToken, Id: id, Responce: responce };
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ApplyFriendRequestResponce, requestResponce).then(function (data) {
            _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetFriendRequest, _this.getFriendRequestEntity).then(function (datas) {
                _this.requests = datas;
            });
            if (data.result)
                _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetFriendList, _this.getFriendListEntity).then(function (datas) {
                    _this.friends = datas;
                });
        });
    };
    ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_3__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_5__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_6__["CacheManagerService"])); };
    ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["app-contact-list"]], viewQuery: function ContactListComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.addInput = _t.first);
        } }, decls: 19, vars: 18, consts: [[1, "padding-2x"], ["focusElement", ""], [1, "free-space-top-2x", "add"], ["type", "text", "placeholder", "09*********", 1, "medium", "input-padding-x"], ["addInput", ""], [1, "icon-left", "icon-Add-Circle", "x-large", 3, "click"], [1, "free-space-top-2x"], [1, "padding-x", "free-space-top-2x"], [1, "icon", "icon-Add-Contact", "medium"], ["class", "list-item padding-x", 3, "background-color", "ngClass", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 1, "padding-x", "free-space-top-2x", 3, "cdkDropListDropped"], [1, "icon", "icon-Contact-List", "medium"], ["class", "list-item padding-x option-delete", "cdkDragPreviewContainer", "parent", "cdkDrag", "", "cdkDragLockAxis", "x", 3, "background-color", "cdkDragData", "ngClass", "cdkDragStartDelay", 4, "ngFor", "ngForOf"], [3, "add"], [1, "list-item", "padding-x", 3, "ngClass"], ["src", "./assets/icons/Icon.svg", 1, "user-img", "left-align"], [1, "icon", "right-align", "icon-Ok-Circle", "x-large", 3, "click"], [1, "icon", "right-align", "icon-Close", "x-large", 3, "click"], ["cdkDragPreviewContainer", "parent", "cdkDrag", "", "cdkDragLockAxis", "x", 1, "list-item", "padding-x", "option-delete", 3, "cdkDragData", "ngClass", "cdkDragStartDelay"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactListComponent_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return ctx.AddFriend(_r1.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Contact List");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Pending Requests");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ContactListComponent_li_12_Template, 9, 16, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function ContactListComponent_Template_ul_cdkDropListDropped_13_listener($event) { return ctx.Drop($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Friend List");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ContactListComponent_li_17_Template, 7, 14, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "app-nav-contact-list", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("add", function ContactListComponent_Template_app_nav_contact_list_add_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return ctx.Focus(_r0, _r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.requests);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.friends);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDropList"], _nav_contact_list_nav_contact_list_component__WEBPACK_IMPORTED_MODULE_9__["NavContactListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDrag"]], pipes: [_Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_10__["CaptionPipe"]], styles: [".icon[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  padding-top: 0.5rem;\n}\n\n.extra-bottom-padding[_ngcontent-%COMP%] {\n  padding-bottom: 1.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGIiwiZmlsZSI6ImNvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmV4dHJhLWJvdHRvbS1wYWRkaW5ne1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjNyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    return ContactListComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D7Cu":
/*!***************************************************************************!*\
  !*** ./src/app/components/nav-contact-list/nav-contact-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContactListComponent", function() { return NavContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");




var NavContactListComponent = /** @class */ (function () {
    function NavContactListComponent(loc, themeService) {
        this.loc = loc;
        this.themeService = themeService;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
    }
    NavContactListComponent.prototype.ngOnInit = function () {
    };
    NavContactListComponent.prototype.Back = function () {
        this.loc.back();
    };
    NavContactListComponent.prototype.Add = function () {
        this.add.emit();
    };
    NavContactListComponent.ɵfac = function NavContactListComponent_Factory(t) { return new (t || NavContactListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__["ThemeControllerService"])); };
    NavContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavContactListComponent, selectors: [["app-nav-contact-list"]], outputs: { add: "add" }, decls: 5, vars: 8, consts: [[1, "nav-bar"], [1, "icon-Back", "x-large", 3, "click"], [1, "icon-Add", "x-large", 3, "click"]], template: function NavContactListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavContactListComponent_Template_i_click_2_listener() { return ctx.Back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavContactListComponent_Template_i_click_4_listener() { return ctx.Add(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold)("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtY29udGFjdC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return NavContactListComponent;
}());



/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Enums/UserActions */ "lXr8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nav_profile_nav_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nav-profile/nav-profile.component */ "jvEU");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(API, themeService, cacheManager) {
        this.API = API;
        this.themeService = themeService;
        this.cacheManager = cacheManager;
        this.imgUrl = "";
        this.setProfileEntity = { AccessToken: '', FirstName: '', LastName: '', Bio: '', Img: '', Email: '', PhoneNumber: '' };
        this.getProfileEntity = { AccessToken: '' };
        this.profile = { FirstName: '', LastName: '', Bio: '', Img: '', Email: '', PhoneNumber: '' };
        this.theme = this.themeService.GetTheme();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setProfileEntity.AccessToken = this.cacheManager.GetLoginDetails();
        this.getProfileEntity.AccessToken = this.cacheManager.GetLoginDetails();
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetProfile, this.getProfileEntity).then(function (data) {
            _this.profile = data;
            _this.setProfileEntity.FirstName = _this.profile.FirstName;
            _this.setProfileEntity.LastName = _this.profile.LastName;
            _this.setProfileEntity.Email = _this.profile.Email;
            _this.setProfileEntity.Bio = _this.profile.Bio;
            _this.setProfileEntity.Img = _this.profile.Img;
            _this.setProfileEntity.PhoneNumber = _this.profile.PhoneNumber;
        });
    };
    ProfileComponent.prototype.GetImage = function (event) {
        var _this = this;
        var files = event.target.files;
        if (files.length === 0)
            return;
        if (files[0].type.match(/image\/*/) == null)
            return;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (e) {
            _this.imgUrl = reader.result;
        };
    };
    ProfileComponent.prototype.SaveChanges = function () {
        var _this = this;
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].ChangeProfile, this.setProfileEntity).then(function (data) {
            if (data.result) {
                _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetProfile, _this.getProfileEntity).then(function (datas) {
                    _this.profile = datas;
                });
            }
        });
    };
    ProfileComponent.prototype.FocusNextSibiling = function (item) {
        item.select();
    };
    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_2__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_3__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_4__["CacheManagerService"])); };
    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 22, vars: 33, consts: [[1, "padding-2x"], [1, "profile-image"], ["for", "image-file"], [1, "photo", 3, "src"], ["type", "file", "id", "image-file", "accept", "image/*", "disabled", "", 3, "change"], [1, "small"], [1, "form", "free-space-top-3x"], [1, "form-control", 3, "keydown.enter"], ["type", "text", "required", "", "placeholder", "First Name", "autocomplete", "user", 3, "value", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", 3, "value", "ngModel", "ngModelChange"], ["item2", ""], ["type", "text", "placeholder", "Bio", 3, "value", "ngModel", "ngModelChange"], ["item3", ""], ["type", "email", "placeholder", "email", 3, "value", "ngModel", "ngModelChange"], ["item4", ""], [1, "form-control"], ["type", "text", "required", "", "disabled", "", 3, "value", "ngModel", "ngModelChange"], [3, "SaveChangesEvent"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_4_listener($event) { return ctx.GetImage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Profile Photo will add in next versions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function ProfileComponent_Template_div_keydown_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return ctx.FocusNextSibiling(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_9_listener($event) { return ctx.setProfileEntity.FirstName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function ProfileComponent_Template_div_keydown_enter_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return ctx.FocusNextSibiling(_r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_11_listener($event) { return ctx.setProfileEntity.LastName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function ProfileComponent_Template_div_keydown_enter_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return ctx.FocusNextSibiling(_r2); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_14_listener($event) { return ctx.setProfileEntity.Bio = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function ProfileComponent_Template_div_keydown_enter_16_listener() { return ctx.SaveChanges(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_17_listener($event) { return ctx.setProfileEntity.Email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_20_listener($event) { return ctx.setProfileEntity.PhoneNumber = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-nav-profile", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("SaveChangesEvent", function ProfileComponent_Template_app_nav_profile_SaveChangesEvent_21_listener() { return ctx.SaveChanges(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imgUrl == "" ? "./assets/icons/Icon.svg" : ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold)("border-color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.profile.FirstName)("ngModel", ctx.setProfileEntity.FirstName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold)("border-color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.profile.LastName)("ngModel", ctx.setProfileEntity.LastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold)("border-color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.profile.Bio)("ngModel", ctx.setProfileEntity.Bio);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold)("border-color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.profile.Email)("ngModel", ctx.setProfileEntity.Email);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold)("border-color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.profile.PhoneNumber)("ngModel", ctx.setProfileEntity.PhoneNumber);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _nav_profile_nav_profile_component__WEBPACK_IMPORTED_MODULE_6__["NavProfileComponent"]], styles: ["input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media only screen and (max-device-width: 900px) {\n  .profile-image[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n  }\n\n  .photo[_ngcontent-%COMP%] {\n    width: 15rem;\n    height: 15rem;\n    border-radius: 50%;\n    width: 15rem;\n    height: 15rem;\n    object-fit: fill;\n  }\n\n  .form[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.5rem 0;\n  }\n\n  .form-control[_ngcontent-%COMP%]    > input[type=text][_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]    > input[type=email][_ngcontent-%COMP%] {\n    width: 100%;\n    border-width: 0.3rem !important;\n    border-style: solid !important;\n    outline: none;\n    padding: 0.5rem 1rem;\n    border-radius: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUVJO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsNkJBQUE7RUFBSjs7RUFHRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VBQUo7O0VBR0U7SUFDRSxhQUFBO0VBQUo7O0VBR0U7SUFFRSxXQUFBO0lBQ0EsaUJBQUE7RUFESjs7RUFJRTtJQUNFLFdBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0lBQ0EsYUFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7RUFESjtBQUNGIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPWZpbGVdXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmgze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtZGV2aWNlLXdpZHRoOjkwMHB4KVxyXG4gIHtcclxuICAgIC5wcm9maWxlLWltYWdle1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBob3Rve1xyXG4gICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3Jte1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2xcclxuICAgIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wgPiBpbnB1dFt0eXBlPXRleHRdLC5mb3JtLWNvbnRyb2wgPiBpbnB1dFt0eXBlPWVtYWlsXXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMC4zcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"] });
    return ProfileComponent;
}());



/***/ }),

/***/ "EHEQ":
/*!******************************************************!*\
  !*** ./src/app/Servicies/loading-manager.service.ts ***!
  \******************************************************/
/*! exports provided: LoadingManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingManagerService", function() { return LoadingManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var LoadingManagerService = /** @class */ (function () {
    function LoadingManagerService() {
        this.IsLoading = false;
    }
    LoadingManagerService.prototype.SetLoader = function () {
        this.IsLoading = true;
    };
    LoadingManagerService.prototype.ResetLoader = function () {
        this.IsLoading = false;
    };
    LoadingManagerService.prototype.GetLoader = function () {
        return this.IsLoading;
    };
    LoadingManagerService.ɵfac = function LoadingManagerService_Factory(t) { return new (t || LoadingManagerService)(); };
    LoadingManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingManagerService, factory: LoadingManagerService.ɵfac, providedIn: 'root' });
    return LoadingManagerService;
}());



/***/ }),

/***/ "F0qM":
/*!******************************************!*\
  !*** ./src/app/Enums/ValidateMethods.ts ***!
  \******************************************/
/*! exports provided: validateMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMethods", function() { return validateMethods; });
var validateMethods;
(function (validateMethods) {
    validateMethods[validateMethods["signin"] = 0] = "signin";
    validateMethods[validateMethods["signup"] = 1] = "signup";
    validateMethods[validateMethods["caption"] = 2] = "caption";
    validateMethods[validateMethods["friend"] = 3] = "friend";
})(validateMethods || (validateMethods = {}));


/***/ }),

/***/ "F2C7":
/*!******************************************************!*\
  !*** ./src/app/Directives/set-bg-color.directive.ts ***!
  \******************************************************/
/*! exports provided: SetBgColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetBgColorDirective", function() { return SetBgColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var SetBgColorDirective = /** @class */ (function () {
    function SetBgColorDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.bgColor = '';
    }
    SetBgColorDirective.prototype.ngOnInit = function () {
        this.renderer.setAttribute(this.elRef.nativeElement, 'style', 'background-color:' + this.bgColor);
    };
    SetBgColorDirective.ɵfac = function SetBgColorDirective_Factory(t) { return new (t || SetBgColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    SetBgColorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SetBgColorDirective, selectors: [["", "appSetBgColor", ""]], inputs: { bgColor: "bgColor" } });
    return SetBgColorDirective;
}());



/***/ }),

/***/ "FWTv":
/*!******************************************************!*\
  !*** ./src/app/Directives/hold-element.directive.ts ***!
  \******************************************************/
/*! exports provided: HoldElementDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoldElementDirective", function() { return HoldElementDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var HoldElementDirective = /** @class */ (function () {
    function HoldElementDirective(elRef, renderder) {
        this.elRef = elRef;
        this.renderder = renderder;
    }
    HoldElementDirective.prototype.ngDoCheck = function () {
        if (window.screen.height - (window.screen.height / 4) > window.visualViewport.height) {
            this.renderder.setStyle(this.elRef.nativeElement, 'background-color', '#f00');
        }
    };
    HoldElementDirective.ɵfac = function HoldElementDirective_Factory(t) { return new (t || HoldElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    HoldElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoldElementDirective, selectors: [["", "appHoldElement", ""]] });
    return HoldElementDirective;
}());



/***/ }),

/***/ "KxqT":
/*!*********************************************************!*\
  !*** ./src/app/components/setting/setting.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Enums/UserActions */ "lXr8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nav_system_messages_nav_system_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nav-system-messages/nav-system-messages.component */ "M4t0");








function SettingComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#fff");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.changes.NewFriends);
} }
function SettingComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", "#fff");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.changes.NewFriends);
} }
var SettingComponent = /** @class */ (function () {
    function SettingComponent(API, themeService, cacheManager, router) {
        this.API = API;
        this.themeService = themeService;
        this.cacheManager = cacheManager;
        this.router = router;
        this.changes = { NewFriends: '', NewMessages: '' };
        this.changesEntity = { AccessToken: '' };
        this.theme = this.themeService.GetTheme();
    }
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changesEntity.AccessToken = this.cacheManager.GetLoginDetails();
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRecentChanges, this.changesEntity).then(function (data) {
            _this.changes = data;
        });
    };
    SettingComponent.prototype.Logout = function () {
        this.cacheManager.ResetLoginDetails();
        this.router.navigate(['']);
    };
    SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_2__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_3__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_4__["CacheManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
    SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["app-setting"]], decls: 13, vars: 18, consts: [[1, "options", "medium", "section-title-color"], ["routerLink", "/contactlist"], ["class", "x-small", 3, "color", 4, "ngIf"], ["routerLink", "/profile"], ["routerLink", "/messages"], [3, "click"], [1, "x-small"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Friends");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SettingComponent_span_4_Template, 2, 3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "System Messages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SettingComponent_span_9_Template, 2, 3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingComponent_Template_li_click_10_listener() { return ctx.Logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Log out");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-nav-system-messages");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changes.NewFriends != "0");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.changes.NewMessages != "0");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nav_system_messages_nav_system_messages_component__WEBPACK_IMPORTED_MODULE_7__["NavSystemMessagesComponent"]], styles: [".options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n}\n\n.options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(:last-of-type) {\n  border-bottom-width: 0.1rem;\n  border-bottom-style: solid;\n}\n\n.options[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.25rem 0.5rem;\n  border-radius: 50%;\n  background-color: #f00;\n  margin-left: 0.5rem;\n}\n\n.padding-x[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0Usa0JBQUE7QUFERjs7QUFJQTtFQUVFLDJCQUFBO0VBQ0EsMEJBQUE7QUFGRjs7QUFLQTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtBQUpGIiwiZmlsZSI6InNldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9ucyA+IGxpXHJcbntcclxuXHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG59XHJcblxyXG4ub3B0aW9ucyA+IGxpOm5vdCg6bGFzdC1vZi10eXBlKVxyXG57XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xcmVtO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4ub3B0aW9ucyA+IGxpID4gc3BhblxyXG57XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnBhZGRpbmcteFxyXG57XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuIl19 */"] });
    return SettingComponent;
}());



/***/ }),

/***/ "M4t0":
/*!*********************************************************************************!*\
  !*** ./src/app/components/nav-system-messages/nav-system-messages.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NavSystemMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSystemMessagesComponent", function() { return NavSystemMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");



var NavSystemMessagesComponent = /** @class */ (function () {
    function NavSystemMessagesComponent(loc, themeService) {
        this.loc = loc;
        this.themeService = themeService;
        this.theme = this.themeService.GetTheme();
    }
    NavSystemMessagesComponent.prototype.ngOnInit = function () {
    };
    NavSystemMessagesComponent.prototype.Back = function () {
        this.loc.back();
    };
    NavSystemMessagesComponent.ɵfac = function NavSystemMessagesComponent_Factory(t) { return new (t || NavSystemMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__["ThemeControllerService"])); };
    NavSystemMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavSystemMessagesComponent, selectors: [["app-nav-system-messages"]], decls: 3, vars: 6, consts: [[1, "nav-bar"], [1, "icon-Back", "x-large", 3, "click"]], template: function NavSystemMessagesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSystemMessagesComponent_Template_i_click_2_listener() { return ctx.Back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold)("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtc3lzdGVtLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return NavSystemMessagesComponent;
}());



/***/ }),

/***/ "MSpn":
/*!*************************************************!*\
  !*** ./src/app/Servicies/validation.service.ts ***!
  \*************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enums/ValidateMethods */ "F0qM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validate = function (properties, validationType) {
        var result = false;
        switch (validationType) {
            case _Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_1__["validateMethods"].signin:
                result = this.HaveCurrectLengh(properties, 11, 11) && this.IsPhoneNumber(properties) && this.IsNumber(properties);
                break;
            case _Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_1__["validateMethods"].caption:
                result = this.IsNotEmptyString(properties);
                break;
        }
        return result;
    };
    // lengh - start with 09 - only number - forbidden chars - only words
    ValidationService.prototype.HaveCurrectLengh = function (item, minLength, maxLength) {
        if (item.length < minLength) {
            return false;
        }
        if (item.length > maxLength) {
            return false;
        }
        return true;
    };
    ValidationService.prototype.IsPhoneNumber = function (item) {
        if ((item[0] != "0" || item[1] != "9")) {
            return false;
        }
        return true;
    };
    ValidationService.prototype.IsNumber = function (item) {
        for (var i = 0; i < item.length; i++) {
            var asciiCode = item.charCodeAt(i);
            if (asciiCode < 48 || asciiCode > 57) {
                return false;
            }
        }
        return true;
    };
    ValidationService.prototype.HaveForbiddenChars = function (item) {
        var e_1, _a;
        try {
            for (var item_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(item), item_1_1 = item_1.next(); !item_1_1.done; item_1_1 = item_1.next()) {
                var i = item_1_1.value;
                var asciiCode = i.charCodeAt(0);
                if (asciiCode == 62 || asciiCode == 60 || asciiCode == 40 || asciiCode == 41 || asciiCode == 91 || asciiCode == 93 || asciiCode == 123 || asciiCode == 125) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (item_1_1 && !item_1_1.done && (_a = item_1.return)) _a.call(item_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    ValidationService.prototype.HaveNoNumber = function (item) {
        for (var i = 0; i < item.length; i++) {
            var asciiCode = item.charCodeAt(i);
            if ((asciiCode != 32) && (asciiCode < 97 || asciiCode > 122) && (asciiCode < 65 || asciiCode > 90)) {
                return false;
                break;
            }
        }
        return true;
    };
    ValidationService.prototype.IsNotEmptyString = function (item) {
        for (var i = 0; i < item.length; i++) {
            var asciiCode = item.charCodeAt(i);
            if (asciiCode != 32) {
                return true;
            }
        }
        return false;
    };
    ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(); };
    ValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });
    return ValidationService;
}());



/***/ }),

/***/ "Mmo9":
/*!*****************************************************************!*\
  !*** ./src/app/RouterAnimations/Route-transition-animations.ts ***!
  \*****************************************************************/
/*! exports provided: routeTransitionAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeTransitionAnimations", function() { return routeTransitionAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

var routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('triggerName', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Success => Board, Board => Task, Board => Setting, Board => BoardInfo, Task => SubTask, Setting => ContactList, Setting => Profile, Setting => Messages', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: '0%',
                left: '0%',
                right: '0%',
                bottom: '0%',
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%', opacity: '0' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%', opacity: '1' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%', opacity: '0' }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%', opacity: '1' }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Task => Board, Setting => Board, BoardInfo => Board, SubTask => Task, ContactList => Setting, Profile => Setting, Messages => Setting', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: '0%',
                left: '0%',
                bottom: '0%',
                right: '0%',
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%', opacity: '0' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%', opacity: '1' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%', opacity: '0' }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%', opacity: '1' }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Task => BoardInfo, SubTask => Comment', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: '0%',
                bottom: '0%',
                height: '100%',
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '-100%', opacity: '0' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ bottom: '0%', opacity: '1' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ bottom: '0%', opacity: '0' }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '0%', opacity: '1' }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('BoardInfo => Task, Comment => SubTask', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: '0%',
                bottom: '0%',
                height: '100%',
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ bottom: '0', opacity: '0' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '0%', opacity: '1' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '-100%', opacity: '0' }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ bottom: '0%', opacity: '1' }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "N+2n":
/*!*****************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.ts ***!
  \*****************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Dictionaries_Dictionaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Dictionaries/Dictionaries */ "qB2f");
/* harmony import */ var src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Enums/UserActions */ "lXr8");
/* harmony import */ var src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Enums/ValidateMethods */ "F0qM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Servicies/validation.service */ "MSpn");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _nav_tasks_nav_tasks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../nav-tasks/nav-tasks.component */ "zjf+");
/* harmony import */ var _darken_darken_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../darken/darken.component */ "makw");
/* harmony import */ var _task_info_task_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../task-info/task-info.component */ "c48u");
/* harmony import */ var _error_box_error_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../error-box/error-box.component */ "wBuZ");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");
/* harmony import */ var _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Pipes/count-control.pipe */ "mXeI");


















var _c0 = ["addInput"];
function TasksComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "you can add task from the top input and manage them.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "tasks with specific tags can be seen just by owner and those Employees that they have the role access.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "use this feature for a better experience when you are in charge of a project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Drag task to the left for adding a tag. You can also drag it to the right for delete.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border-color", ctx_r2.theme.Color10Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
} }
function TasksComponent_ng_container_16_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r6.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 3, item_r4.CreationAt, "MMM d , y"));
} }
function TasksComponent_ng_container_16_label_8_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TasksComponent_ng_container_16_label_8_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); var ind_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.Rename(ind_r5 + 1, _r9, _r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ind_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", "item" + (ind_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r8.theme.Color60Bold);
} }
var _c1 = function (a0, a1) { return { "list-grow": a0, "option-delete": a1 }; };
var _c2 = function (a0, a1, a2) { return { id: a0, tags: a1, deleteLicense: a2 }; };
function TasksComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TasksComponent_ng_container_16_h4_1_Template, 3, 6, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TasksComponent_ng_container_16_label_8_Template, 2, 3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function TasksComponent_ng_container_16_Template_input_keydown_enter_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); var item_r4 = ctx.$implicit; var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r15.Rename(0, _r9, _r7); return ctx_r15.EditTask(item_r4.Id, item_r4.Caption, _r9.value, item_r4.License); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TasksComponent_ng_container_16_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); var item_r4 = ctx.$implicit; var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r17.Rename(0, _r9, _r7); return ctx_r17.EditTask(item_r4.Id, item_r4.Caption, _r9.value, item_r4.License); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "CountControl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "CountControl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    var ind_r5 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.CanShow(item_r4.CreationAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r3.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](36, _c1, ctx_r3.selectedIndex == ind_r5 + 1, item_r4.License))("cdkDragStartDelay", 200)("cdkDragData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](39, _c2, item_r4.Id, item_r4.Tags, item_r4.License));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "item" + (ind_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 29, item_r4.Caption, 20), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.License);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border-bottom-color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r4.Caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", "item" + (ind_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/subtask/" + item_r4.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Last Modified by ", item_r4.LastModifiedBy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 32, item_r4.SubTasksCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 34, item_r4.SubCommentsCount));
} }
var TasksComponent = /** @class */ (function () {
    function TasksComponent(API, activeRoute, validateService, themeService, cacheManager) {
        this.API = API;
        this.activeRoute = activeRoute;
        this.validateService = validateService;
        this.themeService = themeService;
        this.cacheManager = cacheManager;
        this.errors = _Dictionaries_Dictionaries__WEBPACK_IMPORTED_MODULE_1__["Errors"];
        this.selectedIndex = 0;
        this.reName = false;
        this.menuOpen = false;
        this.activeRequest = null;
        this.addInput = {};
        this.accessToken = '';
        this.parentId = '';
        this.taskId = '';
        this.errorMessage = '';
        this.getTaskObject = { ParentId: '', AccessToken: '' };
        this.getTagEntity = { AccessToken: '', BoardId: '' };
        this.getParentInfo = { AccessToken: '', ParentId: '' };
        this.getTaskPermission = { AccessToken: '', ParentId: '' };
        this.tasks = [];
        this.tags = [];
        this.boardTags = [];
        this.dates = [];
        this.ParentInfo = { ParentName: '', CreationDate: '', Owner: '', SubCommentCounts: '' };
        this.taskPermissions = { IsOwner: false, WriteTask: false, ReadTask: false };
        this.theme = this.themeService.GetTheme();
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessToken = this.cacheManager.GetLoginDetails();
        this.activeRoute.params.subscribe(function (params) {
            _this.parentId = params['parentid'];
        });
        this.getTaskObject = { ParentId: this.parentId, AccessToken: this.accessToken };
        this.getTagEntity = { AccessToken: this.accessToken, BoardId: this.parentId };
        this.getParentInfo = { AccessToken: this.accessToken, ParentId: this.parentId };
        this.getTaskPermission = { AccessToken: this.accessToken, ParentId: this.parentId };
        this.tasks = JSON.parse(this.cacheManager.Get('tasks' + this.parentId));
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, this.getTaskObject).then(function (data) {
            _this.tasks = data;
            _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(data));
            _this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetBoardTag, this.getTagEntity).then(function (data) {
            _this.boardTags = data;
            _this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetParentInfo, this.getParentInfo).then(function (data) {
            _this.ParentInfo = data;
            _this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTaskPermission, this.getTaskPermission).then(function (data) {
            _this.taskPermissions = data;
            _this.activeRequest = null;
        });
    };
    TasksComponent.prototype.CanShow = function (d) {
        var e_1, _a;
        var result = true;
        if (this.dates.length != this.tasks.length) {
            var spliteDate = d.split('T');
            var yearAndMonth = spliteDate[0];
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.dates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.Date == d) {
                        result = true;
                    }
                    else {
                        var itemSpliteDate = item.Date.split('T');
                        var itemYearAndMonth = itemSpliteDate[0];
                        if (itemYearAndMonth == yearAndMonth) {
                            result = false;
                            break;
                        }
                        else {
                            result = true;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var Exists_1 = false;
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    Exists_1 = true;
                }
            });
            if (!Exists_1) {
                this.dates.push({ Date: d, LastStatus: result });
            }
        }
        else {
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    result = item.LastStatus;
                }
            });
        }
        return result;
    };
    TasksComponent.prototype.Rename = function (index, eI, checkBox) {
        this.reName = !this.reName;
        this.selectedIndex = index;
        if (index != 0) {
            setTimeout(function () {
                eI.select();
            }, 100);
        }
        else {
            checkBox.checked = false;
        }
    };
    TasksComponent.prototype.Drop = function (t) {
        var _this = this;
        var effectivePull = screen.width / 10;
        if (t.distance.x > effectivePull) {
            var deleteTaskItem = { AccessToken: this.accessToken, Id: t.item.data.id };
            if (t.item.data.deleteLicense)
                this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].DeleteTask, deleteTaskItem).then(function (data) {
                    _this.activeRequest = null;
                    if (data.result) {
                        _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                            _this.tasks = datas;
                            _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                            _this.dates = [];
                            _this.activeRequest = null;
                        });
                    }
                });
        }
        else if (t.distance.x < (-1 * effectivePull)) {
            if (!this.reName) {
                this.menuOpen = true;
                this.taskId = t.item.data.id;
                this.tags = t.item.data.tags;
            }
        }
    };
    TasksComponent.prototype.CloseMenu = function () {
        this.menuOpen = false;
        this.taskId = '';
    };
    TasksComponent.prototype.Focus = function (item, input) {
        item.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        if (window.pageYOffset == 0) {
            input.focus();
        }
    };
    TasksComponent.prototype.AddTask = function (caption) {
        var _this = this;
        var task = { AccessToken: this.accessToken, ParentId: this.parentId, Caption: caption };
        if (this.validateService.validate(task.Caption, src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_3__["validateMethods"].caption))
            this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].AddTask, task).then(function (data) {
                _this.activeRequest = null;
                if (data.result) {
                    _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                        _this.tasks = datas;
                        _this.dates = [];
                        _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                        _this.addInput.nativeElement.value = '';
                        _this.activeRequest = null;
                    });
                }
            });
    };
    TasksComponent.prototype.EditTask = function (id, oldCaption, newCaption, editLicense) {
        var _this = this;
        var object = { Id: id, Caption: newCaption, AccessToken: this.accessToken, Star: false };
        if (editLicense)
            if (this.validateService.validate(object.Caption, src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_3__["validateMethods"].caption))
                this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].EditTask, object).then(function (data) {
                    _this.activeRequest = null;
                    if (data.result) {
                        _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                            _this.tasks = datas;
                            _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                            _this.activeRequest = null;
                        });
                    }
                });
    };
    TasksComponent.prototype.AsignTag = function (event) {
        var _this = this;
        var tag = event;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].AsignTagToTask, tag).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                    _this.activeRequest = null;
                    _this.tasks = datas;
                    _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                    _this.tasks.forEach(function (item) {
                        if (item.Id == _this.taskId) {
                            _this.tags = item.Tags;
                        }
                    });
                });
            }
        });
    };
    TasksComponent.prototype.RemoveAsign = function (event) {
        var _this = this;
        var tag = event;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].RemoveTagFromTask, tag).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                    _this.activeRequest = null;
                    _this.tasks = datas;
                    _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                    _this.tasks.forEach(function (item) {
                        if (item.Id == _this.taskId) {
                            _this.tags = item.Tags;
                        }
                    });
                });
            }
        });
    };
    TasksComponent.prototype.ActiveRequestOn = function () {
        if (this.activeRequest == null)
            return false;
        return true;
    };
    TasksComponent.prototype.LogError = function (e) {
        var _this = this;
        if (this.errorMessage == '') {
            this.errorMessage = e;
            setTimeout(function () {
                _this.errorMessage = '';
            }, 2000);
        }
    };
    TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_5__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_8__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_9__["CacheManagerService"])); };
    TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], viewQuery: function TasksComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addInput = _t.first);
        } }, decls: 21, vars: 30, consts: [[1, "padding-2x", 3, "ngClass"], ["focusElement", ""], [1, "right-align"], [1, "free-space-top-x"], [1, "free-space-top-2x", "add"], ["type", "text", "placeholder", "task name", 1, "medium", "input-padding-x", 3, "keydown.enter"], ["addInput", ""], [1, "icon-left", "icon-Add-Circle", "x-large", 3, "click"], ["class", "blank", 3, "border-color", 4, "ngIf"], ["cdkDropList", "", 1, "free-space-top-x", 3, "cdkDropListDropped"], [4, "ngFor", "ngForOf"], [3, "parentId", "add"], [3, "Darken"], [3, "activeRequestOn", "tags", "parentId", "accessToken", "boardTags", "open", "RemoveAsignEvent", "newTagAsignEvent", "close"], [3, "Message"], [1, "blank"], [1, "medium"], [1, "medium", "free-space-top-x"], [1, "meduim", "free-space-top-x"], ["class", "free-space-top-3x date", 3, "color", 4, "ngIf"], ["cdkDrag", "", "cdkDragPreviewContainer", "parent", "cdkDragLockAxis", "x", 1, "list-item", "padding-x", "option-info", 3, "ngClass", "cdkDragStartDelay", "cdkDragData"], ["type", "checkbox", 3, "id"], ["cb", ""], ["id", "self"], [3, "for", 4, "ngIf"], ["id", "edit"], ["type", "text", 3, "value", "keydown.enter"], ["eI", ""], [3, "for"], [1, "icon", "right-align", "icon-OK", "large", 3, "click"], [3, "routerLink"], [1, "free-space-top-2x", "horizontal-list"], [1, "icon", "icon-Tasks-List", "medium"], [1, "icon", "icon-Comment", "medium"], [1, "free-space-top-3x", "date"], [1, "icon", "right-align", "icon-Edit", "large", 3, "click"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 5, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function TasksComponent_Template_input_keydown_enter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); return ctx.taskPermissions.WriteTask ? ctx.AddTask(_r1.value) : ctx.LogError(ctx.errors["NotWriteTask"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TasksComponent_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); return ctx.taskPermissions.WriteTask ? ctx.AddTask(_r1.value) : ctx.LogError(ctx.errors["NotWriteTask"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, TasksComponent_div_14_Template, 9, 10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ul", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function TasksComponent_Template_ul_cdkDropListDropped_15_listener($event) { return ctx.Drop($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, TasksComponent_ng_container_16_Template, 26, 43, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "app-nav-tasks", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("add", function TasksComponent_Template_app_nav_tasks_add_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); return ctx.Focus(_r0, _r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-darken", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "app-task-info", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("RemoveAsignEvent", function TasksComponent_Template_app_task_info_RemoveAsignEvent_19_listener($event) { return ctx.taskPermissions.IsOwner ? ctx.RemoveAsign($event) : ctx.LogError(ctx.errors["NotOwner"]); })("newTagAsignEvent", function TasksComponent_Template_app_task_info_newTagAsignEvent_19_listener($event) { return ctx.taskPermissions.IsOwner ? ctx.AsignTag($event) : ctx.LogError(ctx.errors["NotOwner"]); })("close", function TasksComponent_Template_app_task_info_close_19_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "app-error-box", 14);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.menuOpen || ctx.reName ? "not-mouse-event" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.ParentInfo.ParentName);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 27, ctx.ParentInfo.CreationDate, "MMM d , y"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Owner: ", ctx.ParentInfo.Owner, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tasks.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("parentId", ctx.parentId);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Darken", ctx.menuOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeRequestOn", ctx.ActiveRequestOn())("tags", ctx.tags)("parentId", ctx.taskId)("accessToken", ctx.accessToken)("boardTags", ctx.boardTags)("open", ctx.menuOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Message", ctx.errorMessage);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nav_tasks_nav_tasks_component__WEBPACK_IMPORTED_MODULE_12__["NavTasksComponent"], _darken_darken_component__WEBPACK_IMPORTED_MODULE_13__["DarkenComponent"], _task_info_task_info_component__WEBPACK_IMPORTED_MODULE_14__["TaskInfoComponent"], _error_box_error_box_component__WEBPACK_IMPORTED_MODULE_15__["ErrorBoxComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["CdkDrag"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_16__["CaptionPipe"], _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_17__["CountControlPipe"]], styles: [".add[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YXNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVNLHNCQUFBO0FBRk4iLCJmaWxlIjoidGFza3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgU3R5bGVzXHJcblxyXG4uYWRkID4gaVxyXG4gICAge1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG5cclxuLy8gRW5kIEdsb2JhbCBTdHlsZXNcclxuXHJcbi8vIFRoZW1lIERlcGVuZGVuY3kgU3R5bGVzXHJcblxyXG4vLyBFbmQgVGhlbWUgRGVwZW5kZWN5IFN0eWxlc1xyXG5cclxuLy8gU2NyZWVuIERlcGVuZGVjeSBTdHlsZXNcclxuXHJcblxyXG4vLyBFbmQgU2NyZWVuIERlcGVuZGVjeSBTdHlsZXNcclxuIl19 */"] });
    return TasksComponent;
}());



/***/ }),

/***/ "NQ6e":
/*!***************************************************************!*\
  !*** ./src/app/components/board-info/board-info.component.ts ***!
  \***************************************************************/
/*! exports provided: BoardInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardInfoComponent", function() { return BoardInfoComponent; });
/* harmony import */ var src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Enums/UserActions */ "lXr8");
/* harmony import */ var _Dictionaries_Dictionaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Dictionaries/Dictionaries */ "qB2f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _nav_board_info_nav_board_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nav-board-info/nav-board-info.component */ "NiVY");
/* harmony import */ var _darken_darken_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../darken/darken.component */ "makw");
/* harmony import */ var _share_board_share_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../share-board/share-board.component */ "1jOW");
/* harmony import */ var _asign_role_asign_role_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../asign-role/asign-role.component */ "a5hl");
/* harmony import */ var _tags_info_tags_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tags-info/tags-info.component */ "O+gC");
/* harmony import */ var _role_info_role_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../role-info/role-info.component */ "gk9E");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../add-role/add-role.component */ "5Mjg");
/* harmony import */ var _role_tags_info_role_tags_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../role-tags-info/role-tags-info.component */ "180W");
/* harmony import */ var _error_box_error_box_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../error-box/error-box.component */ "wBuZ");
/* harmony import */ var _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Directives/set-bg-color.directive */ "F2C7");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");




















function BoardInfoComponent_i_13_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardInfoComponent_i_13_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.OpenMenu("share"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.theme.Color10Fade);
} }
function BoardInfoComponent_li_14_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var r_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("bgColor", r_r10.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r10.Caption);
} }
var _c0 = function (a0) { return { "option-delete": a0 }; };
function BoardInfoComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardInfoComponent_li_14_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); var item_r8 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r11.OpenMenu("asignRole"); return ctx_r11.AddUserInfo(item_r8.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BoardInfoComponent_li_14_li_10_Template, 2, 2, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r8 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r1.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, ctx_r1.boardPermissions.IsOwner))("cdkDragStartDelay", 200)("cdkDragData", item_r8.ShareId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 16, item_r8.FirstName + " " + item_r8.LastName, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.theme.Color60Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8.Bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", "#fff");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r8.Roles);
} }
function BoardInfoComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardInfoComponent_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.OpenMenu("addRole"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
} }
function BoardInfoComponent_li_20_i_4_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardInfoComponent_li_20_i_4_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); var item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r23.OpenMenu("editRole"); return ctx_r23.GetRoleInfo(item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r16.theme.Color60Bold);
} }
function BoardInfoComponent_li_20_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 36);
} }
function BoardInfoComponent_li_20_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 37);
} }
function BoardInfoComponent_li_20_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 38);
} }
function BoardInfoComponent_li_20_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 36);
} }
function BoardInfoComponent_li_20_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 37);
} }
function BoardInfoComponent_li_20_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 38);
} }
var _c1 = function (a0, a1) { return { id: a0, isUsing: a1 }; };
function BoardInfoComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BoardInfoComponent_li_20_i_4_Template, 1, 2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardInfoComponent_li_20_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); var item_r15 = ctx.$implicit; var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r26.OpenMenu("roleTags"); return ctx_r26.GetRoleInfo(item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BoardInfoComponent_li_20_i_9_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BoardInfoComponent_li_20_i_10_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BoardInfoComponent_li_20_i_11_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BoardInfoComponent_li_20_i_14_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, BoardInfoComponent_li_20_i_15_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, BoardInfoComponent_li_20_i_16_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r15 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r3.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c0, ctx_r3.boardPermissions.IsOwner))("cdkDragStartDelay", 200)("cdkDragData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](26, _c1, item_r15.Id, item_r15.IsUsing));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 21, item_r15.Caption, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.boardPermissions.IsOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", "#fff");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("bgColor", item_r15.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r15.ReadTask && item_r15.WriteTask);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r15.ReadTask && !item_r15.WriteTask);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r15.ReadTask && !item_r15.WriteTask);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("bgColor", item_r15.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r15.ReadComment && item_r15.WriteComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r15.ReadComment && !item_r15.WriteComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r15.ReadComment && !item_r15.WriteComment);
} }
function BoardInfoComponent_i_25_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoardInfoComponent_i_25_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.OpenMenu("addTag"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r4.theme.Color10Fade);
} }
function BoardInfoComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("bgColor", item_r30.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, item_r30.Caption, 15), " ");
} }
var BoardInfoComponent = /** @class */ (function () {
    function BoardInfoComponent(API, activeRoute, themeService, cacheManager) {
        this.API = API;
        this.activeRoute = activeRoute;
        this.themeService = themeService;
        this.cacheManager = cacheManager;
        this.errors = _Dictionaries_Dictionaries__WEBPACK_IMPORTED_MODULE_1__["Errors"];
        this.menuOpen = false;
        this.menu = "";
        this.accessToken = '';
        this.parentId = '';
        this.userId = '';
        this.errorMessage = '';
        this.getFriendListEntity = { AccessToken: '' };
        this.getTagEntity = { AccessToken: '', BoardId: '' };
        this.getRoleEntity = { AccessToken: '', BoardId: '' };
        this.getEmployeeEntity = { AccessToken: '', BoardId: '' };
        this.getParentInfo = { AccessToken: '', ParentId: '' };
        this.getBoardPermission = { AccessToken: '', ParentId: '' };
        this.friends = [];
        this.tags = [];
        this.roles = [];
        this.employees = [];
        this.employeesRoles = [];
        this.ParentInfo = { ParentName: '', CreationDate: '', Owner: '', SubCommentCounts: '' };
        this.boardPermissions = { IsOwner: false };
        this.activeRequest = null;
        this.role = { Id: '', Caption: '', Color: '', ReadTask: false, WriteTask: false, ReadComment: false, WriteComment: false, CompleteTask: false, Tags: [], IsUsing: false };
        this.theme = this.themeService.GetTheme();
    }
    BoardInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessToken = this.cacheManager.GetLoginDetails();
        this.activeRoute.params.subscribe(function (params) {
            _this.parentId = params['parentid'];
        });
        this.getFriendListEntity = { AccessToken: this.accessToken };
        this.getTagEntity = { AccessToken: this.accessToken, BoardId: this.parentId };
        this.getRoleEntity = { AccessToken: this.accessToken, BoardId: this.parentId };
        this.getEmployeeEntity = { AccessToken: this.accessToken, BoardId: this.parentId };
        this.getParentInfo = { AccessToken: this.accessToken, ParentId: this.parentId };
        this.getBoardPermission = { AccessToken: this.accessToken, ParentId: this.parentId };
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetFriendList, this.getFriendListEntity).then(function (data) {
            _this.friends = data;
            _this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetBoardTag, this.getTagEntity).then(function (data) {
            _this.tags = data;
            _this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, this.getRoleEntity).then(function (data) {
            _this.roles = data;
            _this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetEmployees, this.getEmployeeEntity).then(function (data) {
            _this.employees = data;
            _this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetParentInfo, this.getParentInfo).then(function (data) {
            _this.ParentInfo = data;
            _this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetBoardPermission, this.getBoardPermission).then(function (data) {
            _this.boardPermissions = data;
            _this.activeRequest = null;
        });
    };
    BoardInfoComponent.prototype.OpenMenu = function (m) {
        this.menuOpen = true;
        this.menu = m;
    };
    BoardInfoComponent.prototype.CloseMenu = function () {
        this.menuOpen = false;
        this.menu = "";
        this.userId = '';
        this.employeesRoles = [];
    };
    BoardInfoComponent.prototype.ShareBoard = function (event) {
        var _this = this;
        var shareInfo = event;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].ShareBoard, shareInfo).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.menuOpen = false;
                _this.menu = "";
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetEmployees, _this.getEmployeeEntity).then(function (data) {
                    _this.employees = data;
                    _this.activeRequest = null;
                });
            }
        });
    };
    BoardInfoComponent.prototype.AddTag = function (event) {
        var _this = this;
        var tag = event;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].AddTag, tag).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetBoardTag, _this.getTagEntity).then(function (datas) {
                    _this.tags = datas;
                    _this.activeRequest = null;
                });
            }
        });
    };
    BoardInfoComponent.prototype.RemoveTag = function (event) {
        var _this = this;
        if (!event.isUsing) {
            var tag = event;
            this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].RemoveTagFromBoard, tag).then(function (data) {
                _this.activeRequest = null;
                if (data.result) {
                    _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetBoardTag, _this.getTagEntity).then(function (datas) {
                        _this.tags = datas;
                        _this.activeRequest = null;
                    });
                }
            });
        }
        else {
            this.LogError(this.errors["Using"]);
        }
    };
    BoardInfoComponent.prototype.EditTag = function (item) {
        var _this = this;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].EditTag, item).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetBoardTag, _this.getTagEntity).then(function (datas) {
                    _this.tags = datas;
                    _this.activeRequest = null;
                });
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, _this.getRoleEntity).then(function (data) {
                    _this.roles = data;
                    _this.activeRequest = null;
                });
            }
        });
    };
    BoardInfoComponent.prototype.AddRole = function (event) {
        var _this = this;
        var role = event;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].AddRole, role).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.menuOpen = false;
                _this.menu = "";
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, _this.getRoleEntity).then(function (datas) {
                    _this.roles = datas;
                    _this.activeRequest = null;
                });
            }
        });
    };
    BoardInfoComponent.prototype.DropRole = function (event) {
        var _this = this;
        var effectivePull = screen.width / 10;
        if (event.distance.x > effectivePull) {
            if (this.boardPermissions.IsOwner) {
                if (!event.item.data.isUsing) {
                    var deleteRoleEnitity = { Id: event.item.data.id, AccessToken: this.accessToken, BoardId: this.parentId };
                    this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].RemoveRole, deleteRoleEnitity).then(function (data) {
                        _this.activeRequest = null;
                        if (data.result) {
                            _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, _this.getRoleEntity).then(function (datas) {
                                _this.roles = datas;
                                _this.activeRequest = null;
                            });
                        }
                    });
                }
                else {
                    this.LogError(this.errors["Using"]);
                }
            }
        }
    };
    BoardInfoComponent.prototype.AddUserInfo = function (id) {
        var _this = this;
        this.userId = id;
        this.employees.forEach(function (item) {
            if (item.Id == id) {
                _this.employeesRoles = item.Roles;
            }
        });
    };
    BoardInfoComponent.prototype.GetRoleInfo = function (item) {
        this.role = item;
    };
    BoardInfoComponent.prototype.EditRole = function (item) {
        var _this = this;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].EditRole, item).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, _this.getRoleEntity).then(function (datas) {
                    _this.roles = datas;
                    _this.activeRequest = null;
                });
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetEmployees, _this.getEmployeeEntity).then(function (data) {
                    _this.employees = data;
                    _this.activeRequest = null;
                });
                _this.menuOpen = false;
            }
        });
    };
    BoardInfoComponent.prototype.AsignTagToRole = function (item) {
        var _this = this;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].AsignTagToRole, item).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, _this.getRoleEntity).then(function (datas) {
                    _this.roles = datas;
                    _this.roles.forEach(function (item) {
                        if (item.Id == _this.role.Id)
                            _this.role = item;
                    });
                    _this.activeRequest = null;
                    _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetBoardTag, _this.getTagEntity).then(function (data) {
                        _this.tags = data;
                        _this.activeRequest = null;
                    });
                });
            }
        });
    };
    BoardInfoComponent.prototype.RemoveTagFromRole = function (item) {
        var _this = this;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].RemoveTagFromRole, item).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, _this.getRoleEntity).then(function (datas) {
                    _this.roles = datas;
                    _this.roles.forEach(function (item) {
                        if (item.Id == _this.role.Id)
                            _this.role = item;
                    });
                    _this.activeRequest = null;
                    _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetBoardTag, _this.getTagEntity).then(function (data) {
                        _this.tags = data;
                        _this.activeRequest = null;
                    });
                });
            }
        });
    };
    BoardInfoComponent.prototype.AsignRole = function (item) {
        var _this = this;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].AsignRole, item).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, _this.getRoleEntity).then(function (data) {
                    _this.roles = data;
                    _this.activeRequest = null;
                });
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetEmployees, _this.getEmployeeEntity).then(function (data) {
                    _this.employees = data;
                    _this.employees.forEach(function (item) {
                        if (item.Id == _this.userId) {
                            _this.employeesRoles = item.Roles;
                        }
                    });
                    _this.activeRequest = null;
                });
            }
        });
    };
    BoardInfoComponent.prototype.Demote = function (item) {
        var _this = this;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].Demote, item).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, _this.getRoleEntity).then(function (data) {
                    _this.roles = data;
                    _this.activeRequest = null;
                });
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetEmployees, _this.getEmployeeEntity).then(function (data) {
                    _this.employees = data;
                    _this.employees.forEach(function (item) {
                        if (item.Id == _this.userId) {
                            _this.employeesRoles = item.Roles;
                        }
                    });
                    _this.activeRequest = null;
                });
            }
        });
    };
    BoardInfoComponent.prototype.DropEmployee = function (event) {
        var _this = this;
        var effectivePull = screen.width / 10;
        if (event.distance.x > effectivePull) {
            if (this.boardPermissions.IsOwner) {
                var removeEmployee = { AccessToken: this.accessToken, BoardId: this.parentId, ShareId: event.item.data };
                this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].RemoveEmployee, removeEmployee).then(function (data) {
                    _this.activeRequest = null;
                    if (data.result) {
                        _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetEmployees, _this.getEmployeeEntity).then(function (datas) {
                            _this.employees = datas;
                            _this.activeRequest = null;
                        });
                        _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_0__["UserActions"].GetRole, _this.getRoleEntity).then(function (data) {
                            _this.roles = data;
                            _this.activeRequest = null;
                        });
                    }
                });
            }
        }
    };
    BoardInfoComponent.prototype.ActiveRequestOn = function () {
        if (this.activeRequest == null)
            return false;
        return true;
    };
    BoardInfoComponent.prototype.LogError = function (e) {
        var _this = this;
        if (this.errorMessage == '') {
            this.errorMessage = e;
            setTimeout(function () {
                _this.errorMessage = '';
            }, 2000);
        }
    };
    BoardInfoComponent.ɵfac = function BoardInfoComponent_Factory(t) { return new (t || BoardInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_3__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_5__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_6__["CacheManagerService"])); };
    BoardInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BoardInfoComponent, selectors: [["app-board-info"]], decls: 36, vars: 62, consts: [[1, "padding-2x", 3, "ngClass"], [1, "right-align"], [1, "free-space-top-x"], ["cdkDropList", "", 1, "free-space-top-3x", 3, "cdkDropListDropped"], [1, "icon", "large", "icon-Employees"], ["class", "icon large right-align icon-Add-Contact", 3, "color", "click", 4, "ngIf"], ["class", "list-item padding-x", "cdkDragPreviewContainer", "parent", "cdkDrag", "", "cdkDragLockAxis", "x", 3, "background-color", "ngClass", "cdkDragStartDelay", "cdkDragData", 4, "ngFor", "ngForOf"], [1, "icon", "large", "icon-Roll"], ["class", "icon large right-align icon-Add-Circle", 3, "color", "click", 4, "ngIf"], [1, "free-space-top-3x", "tags", "horizontal-list"], [1, "icon", "large", "icon-Tag"], ["class", "padding-around-x small", "appSetBgColor", "", 3, "bgColor", 4, "ngFor", "ngForOf"], [3, "Darken"], [3, "activeRequestOn", "friends", "accessToken", "parentId", "open", "shareBoardEvent", "close"], [3, "activeRequestOn", "employeesRoles", "boardId", "accessToken", "userId", "open", "roles", "DemoteEvent", "AsignRoleEvent", "close"], [3, "activeRequestOn", "tags", "accessToken", "parentId", "open", "EditTagEvent", "removeTagEvent", "close", "newTagEvent"], [3, "activeRequestOn", "role", "accessToken", "boardId", "open", "EditRoleEvent", "close"], [3, "activeRequestOn", "accessToken", "boardId", "open", "newRoleEvent", "close"], [3, "activeRequestOn", "roleId", "accessToken", "boardTags", "tags", "boardId", "open", "RemoveTagFromRoleEvent", "AsignTagToRoleEvent", "close"], [3, "Message"], [1, "icon", "large", "right-align", "icon-Add-Contact", 3, "click"], ["cdkDragPreviewContainer", "parent", "cdkDrag", "", "cdkDragLockAxis", "x", 1, "list-item", "padding-x", 3, "ngClass", "cdkDragStartDelay", "cdkDragData"], [1, "left-align"], ["src", "./assets/icons/Icon.svg", 1, "user-profile"], [1, "icon", "large", "right-align", "icon-Edit", 3, "click"], [1, "horizontal-list", "free-space-top-x", "soft-list"], ["class", "x-small padding-right-x", "appSetBgColor", "", 3, "bgColor", 4, "ngFor", "ngForOf"], ["appSetBgColor", "", 1, "x-small", "padding-right-x", 3, "bgColor"], [1, "icon", "large", "right-align", "icon-Add-Circle", 3, "click"], ["class", "icon right-align icon-Edit large", 3, "color", "click", 4, "ngIf"], [1, "icon", "large", "icon-Tag", "right-align", 3, "click"], ["appSetBgColor", "", 1, "x-small", 3, "bgColor"], ["class", "icon-left icon-Checkbox-Full", 4, "ngIf"], ["class", "icon-left icon-Checkbox-Half", 4, "ngIf"], ["class", "icon-left icon-Checkbox-Empty", 4, "ngIf"], [1, "icon", "right-align", "icon-Edit", "large", 3, "click"], [1, "icon-left", "icon-Checkbox-Full"], [1, "icon-left", "icon-Checkbox-Half"], [1, "icon-left", "icon-Checkbox-Empty"], ["appSetBgColor", "", 1, "padding-around-x", "small", 3, "bgColor"]], template: function BoardInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function BoardInfoComponent_Template_ul_cdkDropListDropped_9_listener($event) { return ctx.DropEmployee($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Employees ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BoardInfoComponent_i_13_Template, 1, 2, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BoardInfoComponent_li_14_Template, 11, 21, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function BoardInfoComponent_Template_ul_cdkDropListDropped_15_listener($event) { return ctx.DropRole($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Rolls ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, BoardInfoComponent_i_19_Template, 1, 2, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BoardInfoComponent_li_20_Template, 17, 29, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Tags ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, BoardInfoComponent_i_25_Template, 1, 2, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, BoardInfoComponent_li_26_Template, 3, 5, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "app-nav-board-info");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "app-darken", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "app-share-board", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("shareBoardEvent", function BoardInfoComponent_Template_app_share_board_shareBoardEvent_29_listener($event) { return ctx.ShareBoard($event); })("close", function BoardInfoComponent_Template_app_share_board_close_29_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "app-asign-role", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("DemoteEvent", function BoardInfoComponent_Template_app_asign_role_DemoteEvent_30_listener($event) { return ctx.boardPermissions.IsOwner ? ctx.Demote($event) : ctx.LogError(ctx.errors["NotOwner"]); })("AsignRoleEvent", function BoardInfoComponent_Template_app_asign_role_AsignRoleEvent_30_listener($event) { return ctx.boardPermissions.IsOwner ? ctx.AsignRole($event) : ctx.LogError(ctx.errors["NotOwner"]); })("close", function BoardInfoComponent_Template_app_asign_role_close_30_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "app-tags-info", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("EditTagEvent", function BoardInfoComponent_Template_app_tags_info_EditTagEvent_31_listener($event) { return ctx.EditTag($event); })("removeTagEvent", function BoardInfoComponent_Template_app_tags_info_removeTagEvent_31_listener($event) { return ctx.RemoveTag($event); })("close", function BoardInfoComponent_Template_app_tags_info_close_31_listener() { return ctx.CloseMenu(); })("newTagEvent", function BoardInfoComponent_Template_app_tags_info_newTagEvent_31_listener($event) { return ctx.AddTag($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "app-role-info", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("EditRoleEvent", function BoardInfoComponent_Template_app_role_info_EditRoleEvent_32_listener($event) { return ctx.EditRole($event); })("close", function BoardInfoComponent_Template_app_role_info_close_32_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "app-add-role", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("newRoleEvent", function BoardInfoComponent_Template_app_add_role_newRoleEvent_33_listener($event) { return ctx.AddRole($event); })("close", function BoardInfoComponent_Template_app_add_role_close_33_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "app-role-tags-info", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("RemoveTagFromRoleEvent", function BoardInfoComponent_Template_app_role_tags_info_RemoveTagFromRoleEvent_34_listener($event) { return ctx.boardPermissions.IsOwner ? ctx.RemoveTagFromRole($event) : ctx.LogError(ctx.errors["NotOwner"]); })("AsignTagToRoleEvent", function BoardInfoComponent_Template_app_role_tags_info_AsignTagToRoleEvent_34_listener($event) { return ctx.boardPermissions.IsOwner ? ctx.AsignTagToRole($event) : ctx.LogError(ctx.errors["NotOwner"]); })("close", function BoardInfoComponent_Template_app_role_tags_info_close_34_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "app-error-box", 19);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.menuOpen ? "not-mouse-event" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ParentInfo.ParentName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 59, ctx.ParentInfo.CreationDate, "MMM d , y"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Owner: ", ctx.ParentInfo.Owner, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.boardPermissions.IsOwner);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.employees);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.boardPermissions.IsOwner);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.roles);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", "#fff");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.boardPermissions.IsOwner);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tags);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Darken", ctx.menuOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeRequestOn", ctx.ActiveRequestOn())("friends", ctx.friends)("accessToken", ctx.accessToken)("parentId", ctx.parentId)("open", ctx.menu == "share" ? ctx.menuOpen : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeRequestOn", ctx.ActiveRequestOn())("employeesRoles", ctx.employeesRoles)("boardId", ctx.parentId)("accessToken", ctx.accessToken)("userId", ctx.userId)("open", ctx.menu == "asignRole" ? ctx.menuOpen : false)("roles", ctx.roles);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeRequestOn", ctx.ActiveRequestOn())("tags", ctx.tags)("accessToken", ctx.accessToken)("parentId", ctx.parentId)("open", ctx.menu == "addTag" ? ctx.menuOpen : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeRequestOn", ctx.ActiveRequestOn())("role", ctx.role)("accessToken", ctx.accessToken)("boardId", ctx.parentId)("open", ctx.menu == "editRole" ? ctx.menuOpen : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeRequestOn", ctx.ActiveRequestOn())("accessToken", ctx.accessToken)("boardId", ctx.parentId)("open", ctx.menu == "addRole" ? ctx.menuOpen : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeRequestOn", ctx.ActiveRequestOn())("roleId", ctx.role.Id)("accessToken", ctx.accessToken)("boardTags", ctx.tags)("tags", ctx.role.Tags)("boardId", ctx.parentId)("open", ctx.menu == "roleTags" ? ctx.menuOpen : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Message", ctx.errorMessage);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nav_board_info_nav_board_info_component__WEBPACK_IMPORTED_MODULE_9__["NavBoardInfoComponent"], _darken_darken_component__WEBPACK_IMPORTED_MODULE_10__["DarkenComponent"], _share_board_share_board_component__WEBPACK_IMPORTED_MODULE_11__["ShareBoardComponent"], _asign_role_asign_role_component__WEBPACK_IMPORTED_MODULE_12__["AsignRoleComponent"], _tags_info_tags_info_component__WEBPACK_IMPORTED_MODULE_13__["TagsInfoComponent"], _role_info_role_info_component__WEBPACK_IMPORTED_MODULE_14__["RoleInfoComponent"], _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_15__["AddRoleComponent"], _role_tags_info_role_tags_info_component__WEBPACK_IMPORTED_MODULE_16__["RoleTagsInfoComponent"], _error_box_error_box_component__WEBPACK_IMPORTED_MODULE_17__["ErrorBoxComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDrag"], _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_18__["SetBgColorDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_19__["CaptionPipe"]], styles: [".user-profile[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: text-top;\n  border-radius: 1.3rem;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ #edit[_ngcontent-%COMP%] {\n  display: block;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ #self[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media only screen and (max-device-width: 900px) {\n  .user-profile[_ngcontent-%COMP%] {\n    width: 3.5rem;\n    height: 3.5rem;\n    margin-right: 1rem;\n  }\n\n  .padding-around-x[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.5rem 0.3rem;\n    border-radius: 0rem 0.7rem 0 0 !important;\n  }\n\n  .soft-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    border-radius: 0.7rem 0 0.7rem 0;\n    padding: 0.5rem 0.5rem 0.3rem;\n  }\n\n  .tags.horizontal-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin-bottom: 1rem !important;\n  }\n\n  .tags.horizontal-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 1rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib2FyZC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBTUE7RUFFRSxjQUFBO0FBSkY7O0FBT0E7RUFFRSxhQUFBO0FBTEY7O0FBaUJBO0VBR0U7SUFFRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBakJGOztFQW9CQTtJQUVFLDZCQUFBO0lBQ0EseUNBQUE7RUFsQkY7O0VBcUJBO0lBRUUsZ0NBQUE7SUFDQSw2QkFBQTtFQW5CRjs7RUFzQkE7SUFDRSw4QkFBQTtFQW5CRjs7RUFzQkE7SUFDRSwyQkFBQTtFQW5CRjtBQUNGIiwiZmlsZSI6ImJvYXJkLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgU3R5bGVzXHJcblxyXG4udXNlci1wcm9maWxlXHJcbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuM3JlbTtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiAjZWRpdFxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiAjc2VsZlxyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vLyBFbmQgR2xvYmFsIFN0eWxlc1xyXG5cclxuLy8gVGhlbWUgRGVwZW5kZWN5IFN0eWxlc1xyXG5cclxuXHJcblxyXG4vLyBFbmQgVGhlbWUgRGVwZW5kY3kgU3R5bGVzXHJcblxyXG4vLyBTY3JlZW4gRGVwZW5kZWN5IFN0eWxlc1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtZGV2aWNlLXdpZHRoOjkwMHB4KVxyXG57XHJcblxyXG4gIC51c2VyLXByb2ZpbGVcclxuICB7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy1hcm91bmQteFxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC4zcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHJlbSAwLjdyZW0gMCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc29mdC1saXN0ID4gbGlcclxuICB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW0gMCAwLjdyZW0gMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLnRhZ3MuaG9yaXpvbnRhbC1saXN0ID4gbGl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGFncy5ob3Jpem9udGFsLWxpc3QgPiBsaTpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRW5kIFNjcmVlbiBEZXBlbmRlbmN5IFN0eWxlc1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
    return BoardInfoComponent;
}());



/***/ }),

/***/ "NiVY":
/*!***********************************************************************!*\
  !*** ./src/app/components/nav-board-info/nav-board-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavBoardInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBoardInfoComponent", function() { return NavBoardInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");



var NavBoardInfoComponent = /** @class */ (function () {
    function NavBoardInfoComponent(loc, themeService) {
        this.loc = loc;
        this.themeService = themeService;
        this.theme = this.themeService.GetTheme();
    }
    NavBoardInfoComponent.prototype.ngOnInit = function () {
    };
    NavBoardInfoComponent.prototype.Back = function () {
        this.loc.back();
    };
    NavBoardInfoComponent.ɵfac = function NavBoardInfoComponent_Factory(t) { return new (t || NavBoardInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__["ThemeControllerService"])); };
    NavBoardInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBoardInfoComponent, selectors: [["app-nav-board-info"]], decls: 3, vars: 6, consts: [[1, "nav-bar"], [1, "icon-Back", "x-large", 3, "click"]], template: function NavBoardInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBoardInfoComponent_Template_i_click_2_listener() { return ctx.Back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold)("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYm9hcmQtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });
    return NavBoardInfoComponent;
}());



/***/ }),

/***/ "O+gC":
/*!*************************************************************!*\
  !*** ./src/app/components/tags-info/tags-info.component.ts ***!
  \*************************************************************/
/*! exports provided: TagsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsInfoComponent", function() { return TagsInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Enums/ValidateMethods */ "F0qM");
/* harmony import */ var _Servicies_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/validation.service */ "MSpn");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");








function TagsInfoComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsInfoComponent_li_7_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var item_r1 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.RemoveTag(item_r1.Id, item_r1.IsUsing); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TagsInfoComponent_li_7_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var item_r1 = ctx.$implicit; var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.EditTag(item_r1.Id, _r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r0.theme.Color10Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 6, item_r1.Caption, 15), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r0.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.Color);
} }
var TagsInfoComponent = /** @class */ (function () {
    function TagsInfoComponent(validateService, themeService) {
        this.validateService = validateService;
        this.themeService = themeService;
        this.activeRequestOn = false;
        this.open = false;
        this.parentId = '';
        this.accessToken = '';
        this.tags = [];
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newTagEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeTagEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.EditTagEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addTag = { AccessToken: '', BoardId: '', Caption: '' };
        this.removeTag = { AccessToken: '', BoardId: '', Id: '', isUsing: false };
        this.theme = this.themeService.GetTheme();
    }
    TagsInfoComponent.prototype.ngOnInit = function () {
        this.addTag = { AccessToken: this.accessToken, BoardId: this.parentId, Caption: '' };
        this.removeTag = { AccessToken: this.accessToken, BoardId: this.parentId, Id: '', isUsing: false };
    };
    TagsInfoComponent.prototype.CloseMenu = function () {
        this.open = false;
        this.close.emit();
    };
    TagsInfoComponent.prototype.AddTag = function () {
        if (this.validateService.validate(this.addTag.Caption, src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_1__["validateMethods"].caption) && !this.activeRequestOn)
            this.newTagEvent.emit(this.addTag);
    };
    TagsInfoComponent.prototype.RemoveTag = function (id, isUsing) {
        this.removeTag.Id = id;
        this.removeTag.isUsing = isUsing;
        if (!this.activeRequestOn)
            this.removeTagEvent.emit(this.removeTag);
    };
    TagsInfoComponent.prototype.EditTag = function (id, color) {
        var tag = { AccessToken: this.accessToken, BoardId: this.parentId, Id: id, Color: color };
        if (!this.activeRequestOn)
            this.EditTagEvent.emit(tag);
    };
    TagsInfoComponent.ɵfac = function TagsInfoComponent_Factory(t) { return new (t || TagsInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_3__["ThemeControllerService"])); };
    TagsInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsInfoComponent, selectors: [["app-tags-info"]], inputs: { activeRequestOn: "activeRequestOn", open: "open", parentId: "parentId", accessToken: "accessToken", tags: "tags" }, outputs: { close: "close", newTagEvent: "newTagEvent", removeTagEvent: "removeTagEvent", EditTagEvent: "EditTagEvent" }, decls: 11, vars: 19, consts: [[1, "menu", "menu-transition", 3, "ngClass"], [1, "free-space-top-x"], [1, "icon", "right-align", "icon-Close", "x-large", 3, "click"], [1, "free-space-top-3x"], [1, "icon", "icon-Tag", "medium"], [1, "free-space-top-2x", "soft-list", "large"], ["class", "free-space-top-x", 3, "color", 4, "ngFor", "ngForOf"], [1, "free-space-top-2x", "add"], ["type", "text", "placeholder", "tag name", 1, "medium", "input-padding-x", 3, "ngModel", "keydown.enter", "ngModelChange"], [1, "icon-left", "icon-Add-Circle", "x-large", 3, "click"], [1, "right-align", "icon-Trash", "icon", "large", 3, "click"], ["type", "color", 1, "right-align", "color", 3, "value", "change"], ["clr", ""]], template: function TagsInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsInfoComponent_Template_i_click_2_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Manage Tags ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TagsInfoComponent_li_7_Template, 6, 9, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TagsInfoComponent_Template_input_keydown_enter_9_listener() { return ctx.addTag.Caption != "" ? ctx.AddTag() : ctx.CloseMenu(); })("ngModelChange", function TagsInfoComponent_Template_input_ngModelChange_9_listener($event) { return ctx.addTag.Caption = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsInfoComponent_Template_i_click_10_listener() { return ctx.addTag.Caption != "" ? ctx.AddTag() : ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.open ? "open" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addTag.Caption);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_6__["CaptionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWdzLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"] });
    return TagsInfoComponent;
}());



/***/ }),

/***/ "OXCg":
/*!***********************************************************!*\
  !*** ./src/app/components/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Dictionaries_Dictionaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Dictionaries/Dictionaries */ "qB2f");
/* harmony import */ var src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Enums/UserActions */ "lXr8");
/* harmony import */ var src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Enums/ValidateMethods */ "F0qM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var src_app_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Servicies/validation.service */ "MSpn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _nav_comments_nav_comments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../nav-comments/nav-comments.component */ "YAXC");
/* harmony import */ var _comment_top_menu_comment_top_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../comment-top-menu/comment-top-menu.component */ "PIou");
/* harmony import */ var _error_box_error_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../error-box/error-box.component */ "wBuZ");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");
















var _c0 = ["addInput"];
var _c1 = ["focusElement"];
function CommentsComponent_h3_11_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommentsComponent_h3_11_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.CancelReply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r1.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("ReplyTo: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 5, ctx_r1.replyInfo.Content, 30), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r1.theme.Color10Fade);
} }
function CommentsComponent_h3_12_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommentsComponent_h3_12_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.CancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Edit: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 5, ctx_r2.editCommentEntity.Content, 30), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
} }
function CommentsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "In this section you can add comments from the top input.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "In the comments section you can discuss the details of a task before implementing it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "It is also possible to edit and reply to a comment in the comments section(drag a comment to left or right).");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border-color", ctx_r4.theme.Color10Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r4.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r4.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r4.theme.Color10Fade);
} }
function CommentsComponent_ng_container_18_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r11.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 3, item_r10.CreationAt, "MMM d , y"));
} }
function CommentsComponent_ng_container_18_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r12.theme.Color10Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r12.SetColor(item_r10.ReplySender));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 8, item_r10.ReplySender, 20));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r12.theme.Color60Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r10.Reply, " ");
} }
var _c2 = function (a0) { return { "option-edit": a0 }; };
var _c3 = function (a0, a1, a2) { return { id: a0, content: a1, ED: a2 }; };
function CommentsComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CommentsComponent_ng_container_18_h4_1_Template, 3, 6, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function CommentsComponent_ng_container_18_Template_li_dblclick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); var item_r10 = ctx.$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.MouseHold(item_r10.Id, item_r10.License); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CommentsComponent_ng_container_18_div_7_Template, 6, 11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r10 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.CanShow(item_r10.CreationAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r5.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c2, item_r10.License))("cdkDragData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](24, _c3, item_r10.Id, item_r10.Content, item_r10.License))("cdkDragStartDelay", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r5.SetColor(item_r10.Sender));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 16, item_r10.Sender, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r10.ReplySender != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r5.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r10.Content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r5.theme.Color60Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 19, item_r10.CreationAt, "shortTime"));
} }
var colors = ["#20965d", "#881b5d", "#6fd696", "#ea61ee", "#e3744f",
    "#bdeb38", "#738ff4", "#4acc02", "#6496f7", "#86f4c4",
    "#5ad15a", "#da6d4b", "#ee027d", "#a601cb", "#c69af1"];
var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(API, validateService, activeRoute, themeService, cacheManager) {
        this.API = API;
        this.validateService = validateService;
        this.activeRoute = activeRoute;
        this.themeService = themeService;
        this.cacheManager = cacheManager;
        this.coloredList = [{ sender: "", color: "" }];
        this.colorList = [];
        this.errors = _Dictionaries_Dictionaries__WEBPACK_IMPORTED_MODULE_1__["Errors"];
        this.topMenuOpenStatus = false;
        this.addInput = {};
        this.FE = {};
        this.accessToken = '';
        this.parentId = '';
        this.errorMessage = '';
        this.getComment = { AccessToken: '', ParentId: '' };
        this.deleteComment = { AccessToken: '', Id: '', ParentId: '' };
        this.editComment = { Id: '', Content: '', AccessToken: '', ParentId: '' };
        this.editCommentEntity = { Id: '', Content: '' };
        this.getParentInfo = { AccessToken: '', ParentId: '' };
        this.getCommentPermission = { AccessToken: '', ParentId: '' };
        this.replyInfo = { Id: '', Content: '' };
        this.comments = [];
        this.commentPermissions = { IsOwner: false, WriteComment: false, ReadComment: false };
        this.ParentInfo = { ParentName: '', CreationDate: '', Owner: '', SubCommentCounts: '' };
        this.dates = [];
        this.theme = this.themeService.GetTheme();
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessToken = this.cacheManager.GetLoginDetails();
        this.activeRoute.params.subscribe(function (params) {
            _this.parentId = params['parentid'];
        });
        this.getComment = { ParentId: this.parentId, AccessToken: this.accessToken };
        this.getParentInfo = { AccessToken: this.accessToken, ParentId: this.parentId };
        this.getCommentPermission = { AccessToken: this.accessToken, ParentId: this.parentId };
        this.comments = JSON.parse(this.cacheManager.Get('comments' + this.parentId));
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetComment, this.getComment).then(function (data) {
            _this.comments = data;
            _this.cacheManager.Set('comments' + _this.parentId, JSON.stringify(data));
        });
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetParentInfo, this.getParentInfo).then(function (data) {
            _this.ParentInfo = data;
        });
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetCommentPermission, this.getCommentPermission).then(function (data) {
            _this.commentPermissions = data;
        });
    };
    CommentsComponent.prototype.CanShow = function (d) {
        var e_1, _a;
        var result = true;
        if (this.dates.length != this.comments.length) {
            var spliteDate = d.split('T');
            var yearAndMonth = spliteDate[0];
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.dates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.Date == d) {
                        result = true;
                    }
                    else {
                        var itemSpliteDate = item.Date.split('T');
                        var itemYearAndMonth = itemSpliteDate[0];
                        if (itemYearAndMonth == yearAndMonth) {
                            result = false;
                            break;
                        }
                        else {
                            result = true;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var Exists_1 = false;
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    Exists_1 = true;
                }
            });
            if (!Exists_1) {
                this.dates.push({ Date: d, LastStatus: result });
            }
        }
        else {
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    result = item.LastStatus;
                }
            });
        }
        return result;
    };
    CommentsComponent.prototype.Focus = function (item, input) {
        item.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        if (window.pageYOffset == 0) {
            input.focus();
        }
    };
    CommentsComponent.prototype.Drop = function (event) {
        var effectivePull = screen.width / 10;
        if (event.distance.x > effectivePull) {
            if (event.item.data.ED)
                if (this.replyInfo.Id == '') {
                    this.editCommentEntity = { Id: event.item.data.id, Content: event.item.data.content };
                    this.FE.nativeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }
        }
        else if (event.distance.x < (-1 * effectivePull)) {
            if (this.editCommentEntity.Id == '') {
                this.replyInfo = { Id: event.item.data.id, Content: event.item.data.content };
                this.FE.nativeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
        }
    };
    CommentsComponent.prototype.MouseHold = function (id, d) {
        if (d) {
            this.topMenuOpenStatus = true;
            this.deleteComment = { Id: id, ParentId: this.parentId, AccessToken: this.accessToken };
        }
    };
    CommentsComponent.prototype.CloseMenu = function () {
        this.topMenuOpenStatus = false;
        this.deleteComment = { Id: '', ParentId: '', AccessToken: '' };
    };
    CommentsComponent.prototype.AddComment = function (content) {
        var _this = this;
        if (this.commentPermissions.WriteComment) {
            var comment = { AccessToken: this.accessToken, ParentId: this.parentId, ReplyTo: this.replyInfo.Id, Content: content };
            if (comment.ReplyTo == '')
                comment.ReplyTo = '00000000-0000-0000-0000-000000000000';
            if (this.validateService.validate(comment.Content, src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_3__["validateMethods"].caption))
                this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].AddComment, comment).then(function (data) {
                    if (data.result) {
                        _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetComment, _this.getComment).then(function (datas) {
                            _this.comments = datas;
                            _this.cacheManager.Set('comments' + _this.parentId, JSON.stringify(datas));
                            _this.dates = [];
                            _this.addInput.nativeElement.value = '';
                        });
                    }
                });
            this.replyInfo = { Id: '', Content: '' };
        }
        else {
            this.LogError(this.errors["NotWriteComment"]);
        }
    };
    CommentsComponent.prototype.CancelReply = function () {
        this.replyInfo = { Id: '', Content: '' };
    };
    CommentsComponent.prototype.CancelEdit = function () {
        this.editCommentEntity = { Id: '', Content: '' };
    };
    CommentsComponent.prototype.DeleteComment = function () {
        var _this = this;
        if (this.deleteComment.Id != '')
            this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].DeleteComment, this.deleteComment).then(function (data) {
                if (data.result) {
                    _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetComment, _this.getComment).then(function (datas) {
                        _this.comments = datas;
                        _this.cacheManager.Set('comments' + _this.parentId, JSON.stringify(datas));
                        _this.dates = [];
                    });
                }
            });
        this.topMenuOpenStatus = false;
    };
    CommentsComponent.prototype.EditComment = function (content) {
        var _this = this;
        this.editComment = { Id: this.editCommentEntity.Id, Content: content, ParentId: this.parentId, AccessToken: this.accessToken };
        if (this.validateService.validate(this.editComment.Content, src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_3__["validateMethods"].caption))
            this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].EditComment, this.editComment).then(function (data) {
                if (data.result) {
                    _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetComment, _this.getComment).then(function (datas) {
                        _this.comments = datas;
                        _this.cacheManager.Set('comments' + _this.parentId, JSON.stringify(datas));
                        _this.addInput.nativeElement.value = '';
                    });
                }
            });
        this.editCommentEntity = { Id: '', Content: '' };
    };
    CommentsComponent.prototype.SetColor = function (sender) {
        var e_2, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.coloredList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item.sender === sender)
                    return item.color;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (this.colorList.length == 0)
            this.colorList = colors;
        var clr = this.colorList[this.colorList.length - 1];
        this.colorList.pop();
        this.coloredList.push({ sender: sender, color: clr });
        return clr;
    };
    CommentsComponent.prototype.LogError = function (e) {
        var _this = this;
        if (this.errorMessage == '') {
            this.errorMessage = e;
            setTimeout(function () {
                _this.errorMessage = '';
            }, 2000);
        }
    };
    CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_5__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_8__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_9__["CacheManagerService"])); };
    CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], viewQuery: function CommentsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.FE = _t.first);
        } }, decls: 22, vars: 25, consts: [[1, "padding-2x"], ["focusElement", ""], [1, "right-align"], [1, "free-space-top-x"], [1, "free-space-top-2x", "add"], ["class", "reply-to", 3, "color", 4, "ngIf"], ["class", "edit", 3, "color", 4, "ngIf"], ["type", "text", "placeholder", "comment", 1, "medium", "input-padding-x", "free-space-top-x", 3, "value", "keydown.enter"], ["addInput", ""], [1, "icon-left", "icon-Add-Circle", "x-large", 3, "click"], ["class", "blank", 3, "border-color", 4, "ngIf"], ["cdkDropList", "", 1, "free-space-top-x", 3, "cdkDropListDropped"], [4, "ngFor", "ngForOf"], [3, "add"], [3, "open", "closeMenu", "deleteEvent"], [3, "Message"], [1, "reply-to"], [1, "icon", "icon-Cross", "medium", "right-align", 3, "click"], [1, "edit"], [1, "blank"], [1, "medium"], [1, "medium", "free-space-top-x"], [1, "meduim", "free-space-top-x"], ["class", "date free-space-top-2x", 3, "color", 4, "ngIf"], ["cdkDrag", "", "cdkDragLockAxis", "x", "cdkDragPreviewContainer", "parent", 1, "list-item", "padding-x", "comment", "option-reply", 3, "ngClass", "cdkDragData", "cdkDragStartDelay", "dblclick"], ["src", "./assets/icons/Icon.svg", 1, "user-profile"], ["class", "reply", 3, "color", 4, "ngIf"], [1, "free-space-top-x", "medium"], [1, "right-align", "x-small"], [1, "date", "free-space-top-2x"], [1, "reply"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CommentsComponent_h3_11_Template, 4, 8, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CommentsComponent_h3_12_Template, 4, 8, "h3", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function CommentsComponent_Template_input_keydown_enter_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); return ctx.editCommentEntity.Id == "" ? ctx.AddComment(_r3.value) : ctx.EditComment(_r3.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommentsComponent_Template_i_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); return ctx.editCommentEntity.Id == "" ? ctx.AddComment(_r3.value) : ctx.EditComment(_r3.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CommentsComponent_div_16_Template, 7, 8, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function CommentsComponent_Template_ul_cdkDropListDropped_17_listener($event) { return ctx.Drop($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CommentsComponent_ng_container_18_Template, 13, 28, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "app-nav-comments", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("add", function CommentsComponent_Template_app_nav_comments_add_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); return ctx.Focus(_r0, _r3); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "app-comment-top-menu", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeMenu", function CommentsComponent_Template_app_comment_top_menu_closeMenu_20_listener() { return ctx.CloseMenu(); })("deleteEvent", function CommentsComponent_Template_app_comment_top_menu_deleteEvent_20_listener() { return ctx.DeleteComment(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "app-error-box", 15);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.ParentInfo.ParentName);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 22, ctx.ParentInfo.CreationDate, "MMM d , y"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Owner: ", ctx.ParentInfo.Owner, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.replyInfo.Id != "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editCommentEntity.Id != "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.editCommentEntity.Id != "" ? ctx.editCommentEntity.Content : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.comments.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.comments);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("open", ctx.topMenuOpenStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Message", ctx.errorMessage);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nav_comments_nav_comments_component__WEBPACK_IMPORTED_MODULE_12__["NavCommentsComponent"], _comment_top_menu_comment_top_menu_component__WEBPACK_IMPORTED_MODULE_13__["CommentTopMenuComponent"], _error_box_error_box_component__WEBPACK_IMPORTED_MODULE_14__["ErrorBoxComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_15__["CaptionPipe"]], styles: [".date[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0.5rem;\n}\n\n.comment[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 95%;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n\n.user-profile[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n}\n\n@media only screen and (max-device-width: 900px) {\n  .date[_ngcontent-%COMP%] {\n    padding: 0.3rem;\n  }\n\n  .comment[_ngcontent-%COMP%] {\n    margin-left: 4rem;\n  }\n\n  .user-profile[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n    left: -4rem;\n    bottom: 1rem;\n  }\n\n  .reply[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n  }\n\n  .edit[_ngcontent-%COMP%], .reply-to[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .padding-x[_ngcontent-%COMP%] {\n    padding-bottom: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUVFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFLRTtFQUVFLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBSEo7O0FBTUU7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBZUE7RUFDRTtJQUVFLGVBQUE7RUFiRjs7RUFnQkE7SUFFRSxpQkFBQTtFQWRGOztFQWlCQTtJQUVFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFmRjs7RUFrQkE7SUFFRSxrQkFBQTtFQWhCRjs7RUFtQkE7SUFFRSxrQkFBQTtJQUNBLHNCQUFBO0VBakJGOztFQW9CQTtJQUVFLHNCQUFBO0VBbEJGO0FBQ0YiLCJmaWxlIjoiY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdGFydCBHbG9iYWwgU3R5bGVzXHJcblxyXG4gIC5kYXRlXHJcbiAge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29tbWVudFxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jb21tZW50IHB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcblxyXG4gIC51c2VyLXByb2ZpbGVcclxuICB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuLy8gRW5kIEdsb2JhbCBTdHlsZXNcclxuXHJcbi8vIFRoZW1lIERlcGVuZGVjeSBTdHlsZXNcclxuXHJcbi8vIEVuZCBUaGVtZSBEZXBlbmRlY3kgU3R5bGVzXHJcblxyXG4vLyBTY3JlZW4gRGVwZWRlbmN5IFN0eWxlc1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtZGV2aWNlLXdpZHRoOjkwMHB4KXtcclxuICAuZGF0ZVxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICB9XHJcblxyXG4gIC5jb21tZW50XHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbiAgfVxyXG5cclxuICAudXNlci1wcm9maWxlXHJcbiAge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBsZWZ0OiAtNHJlbTtcclxuICAgIGJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5yZXBseVxyXG4gIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5lZGl0LCAucmVwbHktdG9cclxuICB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmcteFxyXG4gIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFbmQgU2NyZWVuIERlcGVuZGVjeSBTdHlsZXNcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
    return CommentsComponent;
}());



/***/ }),

/***/ "PIou":
/*!***************************************************************************!*\
  !*** ./src/app/components/comment-top-menu/comment-top-menu.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommentTopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentTopMenuComponent", function() { return CommentTopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




var CommentTopMenuComponent = /** @class */ (function () {
    function CommentTopMenuComponent(elRef, themeService) {
        this.elRef = elRef;
        this.themeService = themeService;
        this.open = false;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
    }
    CommentTopMenuComponent.prototype.OnClick = function (event) {
        if (event.target != this.elRef.nativeElement.childNodes[0] && event.target.offsetParent != this.elRef.nativeElement.childNodes[0]) {
            if (this.open) {
                this.open = false;
                this.closeMenu.emit();
            }
        }
    };
    CommentTopMenuComponent.prototype.ngOnInit = function () {
    };
    CommentTopMenuComponent.prototype.Delete = function () {
        this.deleteEvent.emit();
    };
    CommentTopMenuComponent.ɵfac = function CommentTopMenuComponent_Factory(t) { return new (t || CommentTopMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__["ThemeControllerService"])); };
    CommentTopMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentTopMenuComponent, selectors: [["app-comment-top-menu"]], hostBindings: function CommentTopMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function CommentTopMenuComponent_mouseup_HostBindingHandler($event) { return ctx.OnClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, inputs: { open: "open" }, outputs: { deleteEvent: "deleteEvent", closeMenu: "closeMenu" }, decls: 3, vars: 5, consts: [[1, "navbar-fixed-top", 3, "ngClass"], [1, "icon", "icon-Trash", "large", 3, "click"]], template: function CommentTopMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentTopMenuComponent_Template_i_click_2_listener() { return ctx.Delete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.open ? "top-menu-open" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color60Bold);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50LXRvcC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CommentTopMenuComponent;
}());



/***/ }),

/***/ "SQEy":
/*!*************************************************************!*\
  !*** ./src/app/components/sub-tasks/sub-tasks.component.ts ***!
  \*************************************************************/
/*! exports provided: SubTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTasksComponent", function() { return SubTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Dictionaries_Dictionaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Dictionaries/Dictionaries */ "qB2f");
/* harmony import */ var src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Enums/UserActions */ "lXr8");
/* harmony import */ var src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Enums/ValidateMethods */ "F0qM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var src_app_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Servicies/validation.service */ "MSpn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _nav_sub_tasks_nav_sub_tasks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../nav-sub-tasks/nav-sub-tasks.component */ "mbtQ");
/* harmony import */ var _darken_darken_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../darken/darken.component */ "makw");
/* harmony import */ var _task_info_task_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../task-info/task-info.component */ "c48u");
/* harmony import */ var _error_box_error_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../error-box/error-box.component */ "wBuZ");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");
/* harmony import */ var _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Pipes/count-control.pipe */ "mXeI");


















var _c0 = ["addInput"];
function SubTasksComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "you can add task from the top input and manage them.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "tasks with specific tags can be seen just by owner and those Employees that they have the role access.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "use this feature for a better experience when you are in charge of a project.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Drag task to the left for adding a tag. You can also drag it to the right for delete.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border-color", ctx_r2.theme.Color10Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
} }
function SubTasksComponent_ng_container_16_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r6.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 3, item_r4.CreationAt, "MMM d , y"));
} }
function SubTasksComponent_ng_container_16_label_8_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubTasksComponent_ng_container_16_label_8_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); var ind_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.Rename(ind_r5 + 1, _r9, _r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ind_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", "item" + (ind_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r8.theme.Color60Bold);
} }
var _c1 = function (a0, a1) { return { "list-grow": a0, "option-delete": a1 }; };
var _c2 = function (a0, a1, a2) { return { id: a0, tags: a1, deleteLicense: a2 }; };
function SubTasksComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SubTasksComponent_ng_container_16_h4_1_Template, 3, 6, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SubTasksComponent_ng_container_16_label_8_Template, 2, 3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function SubTasksComponent_ng_container_16_Template_input_keydown_enter_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); var item_r4 = ctx.$implicit; var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r15.Rename(0, _r9, _r7); return ctx_r15.EditTask(item_r4.Id, item_r4.Caption, _r9.value, item_r4.License); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubTasksComponent_ng_container_16_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); var item_r4 = ctx.$implicit; var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r17.Rename(0, _r9, _r7); return ctx_r17.EditTask(item_r4.Id, item_r4.Caption, _r9.value, item_r4.License); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "CountControl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "CountControl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    var ind_r5 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.CanShow(item_r4.CreationAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r3.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](36, _c1, ctx_r3.selectedIndex == ind_r5 + 1, item_r4.License))("cdkDragStartDelay", 200)("cdkDragData", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](39, _c2, item_r4.Id, item_r4.Tags, item_r4.License));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "item" + (ind_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 29, item_r4.Caption, 20), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.License);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border-bottom-color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r4.Caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", "item" + (ind_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/subtask/" + item_r4.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Last Modified by ", item_r4.LastModifiedBy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 32, item_r4.SubTasksCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 34, item_r4.SubCommentsCount));
} }
var SubTasksComponent = /** @class */ (function () {
    function SubTasksComponent(API, validateService, activeRoute, themeService, cacheManager) {
        this.API = API;
        this.validateService = validateService;
        this.activeRoute = activeRoute;
        this.themeService = themeService;
        this.cacheManager = cacheManager;
        this.errors = _Dictionaries_Dictionaries__WEBPACK_IMPORTED_MODULE_1__["Errors"];
        this.reName = false;
        this.selectedIndex = 0;
        this.menuOpen = false;
        this.addInput = {};
        this.accessToken = '';
        this.parentId = '';
        this.taskId = '';
        this.errorMessage = '';
        this.getTaskObject = { ParentId: '', AccessToken: '' };
        this.getTagEntity = { AccessToken: '', BoardId: '' };
        this.getParentInfo = { AccessToken: '', ParentId: '' };
        this.getTaskPermission = { AccessToken: '', ParentId: '' };
        this.tasks = [];
        this.tags = [];
        this.boardTags = [];
        this.dates = [];
        this.ParentInfo = { ParentName: '', CreationDate: '', Owner: '', SubCommentCounts: '' };
        this.taskPermissions = { IsOwner: false, WriteTask: false, ReadTask: false };
        this.activeRequest = null;
        this.theme = this.themeService.GetTheme();
    }
    SubTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessToken = this.cacheManager.GetLoginDetails();
        this.activeRoute.params.subscribe(function (params) {
            _this.parentId = params['parentid'];
        });
        this.getTaskObject = { ParentId: this.parentId, AccessToken: this.accessToken };
        this.getTagEntity = { AccessToken: this.accessToken, BoardId: this.parentId };
        this.getParentInfo = { AccessToken: this.accessToken, ParentId: this.parentId };
        this.getTaskPermission = { AccessToken: this.accessToken, ParentId: this.parentId };
        this.tasks = JSON.parse(this.cacheManager.Get('tasks' + this.parentId));
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, this.getTaskObject).then(function (data) {
            _this.activeRequest = null;
            _this.tasks = data;
            _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(data));
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetBoardTag, this.getTagEntity).then(function (data) {
            _this.activeRequest = null;
            _this.boardTags = data;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetParentInfo, this.getParentInfo).then(function (data) {
            _this.ParentInfo = data;
            _this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTaskPermission, this.getTaskPermission).then(function (data) {
            _this.taskPermissions = data;
            _this.activeRequest = null;
        });
    };
    SubTasksComponent.prototype.CanShow = function (d) {
        var e_1, _a;
        var result = true;
        if (this.dates.length != this.tasks.length) {
            var spliteDate = d.split('T');
            var yearAndMonth = spliteDate[0];
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.dates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.Date == d) {
                        result = true;
                    }
                    else {
                        var itemSpliteDate = item.Date.split('T');
                        var itemYearAndMonth = itemSpliteDate[0];
                        if (itemYearAndMonth == yearAndMonth) {
                            result = false;
                            break;
                        }
                        else {
                            result = true;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var Exists_1 = false;
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    Exists_1 = true;
                }
            });
            if (!Exists_1) {
                this.dates.push({ Date: d, LastStatus: result });
            }
        }
        else {
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    result = item.LastStatus;
                }
            });
        }
        return result;
    };
    SubTasksComponent.prototype.Rename = function (index, eI, checkBox) {
        this.reName = !this.reName;
        this.selectedIndex = index;
        if (index != 0) {
            setTimeout(function () {
                eI.select();
            }, 100);
        }
        else {
            checkBox.checked = false;
        }
    };
    SubTasksComponent.prototype.Drop = function (t) {
        var _this = this;
        var effectivePull = screen.width / 10;
        if (t.distance.x > effectivePull) {
            var deleteTaskItem = { AccessToken: this.accessToken, Id: t.item.data.id };
            if (t.item.data.deleteLicense)
                this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].DeleteTask, deleteTaskItem).then(function (data) {
                    _this.activeRequest = null;
                    if (data.result) {
                        _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                            _this.activeRequest = null;
                            _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                            _this.tasks = datas;
                            _this.dates = [];
                        });
                    }
                });
        }
        else if (t.distance.x < (-1 * effectivePull)) {
            if (!this.reName) {
                this.menuOpen = true;
                this.taskId = t.item.data.id;
                this.tags = t.item.data.tags;
            }
        }
    };
    SubTasksComponent.prototype.CloseMenu = function () {
        this.menuOpen = false;
        this.taskId = '';
    };
    SubTasksComponent.prototype.Focus = function (item, input) {
        item.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        if (window.pageYOffset == 0) {
            input.focus();
        }
    };
    SubTasksComponent.prototype.AddTask = function (caption) {
        var _this = this;
        var task = { AccessToken: this.accessToken, ParentId: this.parentId, Caption: caption };
        if (this.validateService.validate(task.Caption, src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_3__["validateMethods"].caption))
            this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].AddSubTask, task).then(function (data) {
                _this.activeRequest = null;
                if (data.result) {
                    _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                        _this.activeRequest = null;
                        _this.tasks = datas;
                        _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                        _this.addInput.nativeElement.value = '';
                        _this.dates = [];
                    });
                }
            });
    };
    SubTasksComponent.prototype.EditTask = function (id, oldCaption, newCaption, editLicense) {
        var _this = this;
        var object = { Id: id, Caption: newCaption, AccessToken: this.accessToken, Star: false };
        if (editLicense)
            if (this.validateService.validate(object.Caption, src_app_Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_3__["validateMethods"].caption))
                this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].EditSubTask, object).then(function (data) {
                    _this.activeRequest = null;
                    if (data.result) {
                        _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                            _this.tasks = datas;
                            _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                            _this.activeRequest = null;
                        });
                    }
                });
    };
    SubTasksComponent.prototype.AsignTag = function (event) {
        var _this = this;
        var tag = event;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].AsignTagToTask, tag).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                    _this.activeRequest = null;
                    _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                    _this.tasks = datas;
                    _this.tasks.forEach(function (item) {
                        if (item.Id == _this.taskId) {
                            _this.tags = item.Tags;
                        }
                    });
                });
            }
        });
    };
    SubTasksComponent.prototype.RemoveAsign = function (event) {
        var _this = this;
        var tag = event;
        this.activeRequest = this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].RemoveTagFromTask, tag).then(function (data) {
            _this.activeRequest = null;
            if (data.result) {
                _this.activeRequest = _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetTask, _this.getTaskObject).then(function (datas) {
                    _this.activeRequest = null;
                    _this.cacheManager.Set('tasks' + _this.parentId, JSON.stringify(datas));
                    _this.tasks = datas;
                    _this.tasks.forEach(function (item) {
                        if (item.Id == _this.taskId) {
                            _this.tags = item.Tags;
                        }
                    });
                });
            }
        });
    };
    SubTasksComponent.prototype.ActiveRequestOn = function () {
        if (this.activeRequest == null)
            return false;
        return true;
    };
    SubTasksComponent.prototype.LogError = function (e) {
        var _this = this;
        if (this.errorMessage == '') {
            this.errorMessage = e;
            setTimeout(function () {
                _this.errorMessage = '';
            }, 2000);
        }
    };
    SubTasksComponent.ɵfac = function SubTasksComponent_Factory(t) { return new (t || SubTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_5__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_8__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_9__["CacheManagerService"])); };
    SubTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SubTasksComponent, selectors: [["app-sub-tasks"]], viewQuery: function SubTasksComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addInput = _t.first);
        } }, decls: 21, vars: 31, consts: [[1, "padding-2x", 3, "ngClass"], ["focusElement", ""], [1, "right-align"], [1, "free-space-top-x"], [1, "free-space-top-2x", "add"], ["type", "text", "placeholder", "task name", 1, "medium", "input-padding-x", 3, "keydown.enter"], ["addInput", ""], [1, "icon-left", "icon-Add-Circle", "x-large", 3, "click"], ["class", "blank", 3, "border-color", 4, "ngIf"], ["cdkDropList", "", 1, "free-space-top-x", 3, "cdkDropListDropped"], [4, "ngFor", "ngForOf"], [3, "parentId", "commentCount", "add"], [3, "Darken"], [3, "activeRequestOn", "tags", "parentId", "accessToken", "boardTags", "open", "RemoveAsignEvent", "newTagAsignEvent", "close"], [3, "Message"], [1, "blank"], [1, "medium"], [1, "medium", "free-space-top-x"], [1, "meduim", "free-space-top-x"], ["class", "free-space-top-3x date", 3, "color", 4, "ngIf"], ["cdkDrag", "", "cdkDragPreviewContainer", "parent", "cdkDragLockAxis", "x", 1, "list-item", "padding-x", "option-info", 3, "ngClass", "cdkDragStartDelay", "cdkDragData"], ["type", "checkbox", 3, "id"], ["cb", ""], ["id", "self"], [3, "for", 4, "ngIf"], ["id", "edit"], ["type", "text", 3, "value", "keydown.enter"], ["eI", ""], [3, "for"], [1, "icon", "right-align", "icon-OK", "large", 3, "click"], [3, "routerLink"], [1, "free-space-top-2x", "horizontal-list"], [1, "icon", "icon-Tasks-List", "medium"], [1, "icon", "icon-Comment", "medium"], [1, "free-space-top-3x", "date"], [1, "icon", "right-align", "icon-Edit", "large", 3, "click"]], template: function SubTasksComponent_Template(rf, ctx) { if (rf & 1) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 5, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function SubTasksComponent_Template_input_keydown_enter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); return ctx.taskPermissions.WriteTask ? ctx.AddTask(_r1.value) : ctx.LogError(ctx.errors["NotWriteTask"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubTasksComponent_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); return ctx.taskPermissions.WriteTask ? ctx.AddTask(_r1.value) : ctx.LogError(ctx.errors["NotWriteTask"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubTasksComponent_div_14_Template, 9, 10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ul", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function SubTasksComponent_Template_ul_cdkDropListDropped_15_listener($event) { return ctx.Drop($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SubTasksComponent_ng_container_16_Template, 26, 43, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "app-nav-sub-tasks", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("add", function SubTasksComponent_Template_app_nav_sub_tasks_add_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); return ctx.Focus(_r0, _r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-darken", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "app-task-info", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("RemoveAsignEvent", function SubTasksComponent_Template_app_task_info_RemoveAsignEvent_19_listener($event) { return ctx.taskPermissions.IsOwner ? ctx.RemoveAsign($event) : ctx.LogError(ctx.errors["NotOwner"]); })("newTagAsignEvent", function SubTasksComponent_Template_app_task_info_newTagAsignEvent_19_listener($event) { return ctx.taskPermissions.IsOwner ? ctx.AsignTag($event) : ctx.LogError(ctx.errors["NotOwner"]); })("close", function SubTasksComponent_Template_app_task_info_close_19_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "app-error-box", 14);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.reName || ctx.menuOpen ? "not-mouse-event" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.ParentInfo.ParentName);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 28, ctx.ParentInfo.CreationDate, "MMM d , y"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Owner: ", ctx.ParentInfo.Owner, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tasks.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("parentId", ctx.parentId)("commentCount", ctx.ParentInfo.SubCommentCounts);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Darken", ctx.menuOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeRequestOn", ctx.ActiveRequestOn())("tags", ctx.tags)("parentId", ctx.taskId)("accessToken", ctx.accessToken)("boardTags", ctx.boardTags)("open", ctx.menuOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Message", ctx.errorMessage);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nav_sub_tasks_nav_sub_tasks_component__WEBPACK_IMPORTED_MODULE_12__["NavSubTasksComponent"], _darken_darken_component__WEBPACK_IMPORTED_MODULE_13__["DarkenComponent"], _task_info_task_info_component__WEBPACK_IMPORTED_MODULE_14__["TaskInfoComponent"], _error_box_error_box_component__WEBPACK_IMPORTED_MODULE_15__["ErrorBoxComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["CdkDrag"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_16__["CaptionPipe"], _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_17__["CountControlPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItdGFza3MuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SubTasksComponent;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _RouterAnimations_Route_transition_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterAnimations/Route-transition-animations */ "Mmo9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Servicies_loading_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Servicies/loading-manager.service */ "EHEQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loading/loading.component */ "qQYQ");








function AppComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(themeService, loc, loadingManager, router, cacheManager) {
        this.themeService = themeService;
        this.loc = loc;
        this.loadingManager = loadingManager;
        this.router = router;
        this.cacheManager = cacheManager;
        this.Loading = false;
        this.theme = this.themeService.GetTheme();
        //localStorage.clear();
    }
    AppComponent.prototype.onWindowsBack = function (event) {
        event.preventDefault();
        self.close();
        window.close();
        close();
    };
    AppComponent.prototype.onAndroidBack = function (event) {
        event.preventDefault();
        self.close();
        window.close();
        close();
    };
    AppComponent.prototype.ngOnInit = function () {
        if (this.cacheManager.GetLoginDetails() == '') {
            this.router.navigate(['']);
        }
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.Loading = this.loadingManager.GetLoader();
    };
    AppComponent.prototype.ActiveTheme = function () {
        if (this.loc.path() == "" || this.loc.path() == "/success")
            return false;
        return true;
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_loading_manager_service__WEBPACK_IMPORTED_MODULE_4__["LoadingManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_6__["CacheManagerService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("popstate", function AppComponent_popstate_HostBindingHandler($event) { return ctx.onWindowsBack($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("backbutton", function AppComponent_backbutton_HostBindingHandler($event) { return ctx.onAndroidBack($event); });
        } }, decls: 5, vars: 4, consts: [[4, "ngIf"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet", null, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.ActiveTheme() ? ctx.theme.Color60Bold : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@triggerName", ctx.prepareRoute(_r1));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_RouterAnimations_Route_transition_animations__WEBPACK_IMPORTED_MODULE_0__["routeTransitionAnimations"]] } });
    return AppComponent;
}());



/***/ }),

/***/ "Ua9n":
/*!*************************************************!*\
  !*** ./src/app/Directives/QuitAPP.directive.ts ***!
  \*************************************************/
/*! exports provided: QuitAPP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuitAPP", function() { return QuitAPP; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var QuitAPP = /** @class */ (function () {
    function QuitAPP() {
    }
    QuitAPP.prototype.onWindowsBack = function () {
        self.close();
        window.close();
        close();
    };
    QuitAPP.prototype.onAndroidBack = function () {
        self.close();
        window.close();
        close();
    };
    QuitAPP.prototype.ngDoCheck = function () {
    };
    QuitAPP.ɵfac = function QuitAPP_Factory(t) { return new (t || QuitAPP)(); };
    QuitAPP.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: QuitAPP, selectors: [["", "QuitApp", ""]], hostBindings: function QuitAPP_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popstate", function QuitAPP_popstate_HostBindingHandler() { return ctx.onWindowsBack(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("backbutton", function QuitAPP_backbutton_HostBindingHandler() { return ctx.onAndroidBack(); });
        } } });
    return QuitAPP;
}());



/***/ }),

/***/ "Uziw":
/*!*********************************************************!*\
  !*** ./src/app/Servicies/task-plus-plus.api.service.ts ***!
  \*********************************************************/
/*! exports provided: TaskPlusPlusAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPlusPlusAPIService", function() { return TaskPlusPlusAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enums/UserActions */ "lXr8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loading_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-manager.service */ "EHEQ");
/* harmony import */ var _cache_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cache-manager.service */ "udFI");






//
var headers = {
    "Content-Type": "application/json",
};
//http://localhost:51044/api/
var apiUrl = "https://taskpp.ir/api/";
var TaskPlusPlusAPIService = /** @class */ (function () {
    function TaskPlusPlusAPIService(http, loadingService, cacheManager) {
        this.http = http;
        this.loadingService = loadingService;
        this.cacheManager = cacheManager;
    }
    TaskPlusPlusAPIService.prototype.Post = function (action, propertise) {
        var subURL = apiUrl;
        var result = null;
        switch (action) {
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].SignIn:
                subURL += 'signin';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AddBoard:
                subURL += 'addboard';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetBoards:
                subURL += 'getboards';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].EditBoard:
                subURL += 'editboard';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].DeleteBoard:
                subURL += 'deleteboard';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AddTask:
                subURL += 'addtask';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetTask:
                subURL += 'gettasks';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].EditTask:
                subURL += 'edittask';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].DeleteTask:
                subURL += 'deletetask';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AddSubTask:
                subURL += 'addsubtask';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].EditSubTask:
                subURL += 'editsubtask';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AddComment:
                subURL += 'addcomment';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetComment:
                subURL += 'getcomments';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].EditComment:
                subURL += 'editcomment';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].DeleteComment:
                subURL += 'deletecomment';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AddFriend:
                subURL += 'addfriend';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetFriendRequest:
                subURL += 'getfriendrequests';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ApplyFriendRequestResponce:
                subURL += 'applyrequestresponce';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetFriendList:
                subURL += 'getfriends';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].RemoveFriend:
                subURL += 'removefriend';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ShareBoard:
                subURL += 'shareboard';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AddTag:
                subURL += 'addtag';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetBoardTag:
                subURL += 'getboardstag';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].RemoveTagFromBoard:
                subURL += 'removetag';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AsignTagToTask:
                subURL += 'asigntag';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].RemoveTagFromTask:
                subURL += 'removeassignment';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AddRole:
                subURL += 'addrole';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetRole:
                subURL += 'getboardroles';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].RemoveRole:
                subURL += 'removerole';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetEmployees:
                subURL += 'getemployees';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AsignRole:
                subURL += 'asignrole';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].Demote:
                subURL += 'demote';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].EditRole:
                subURL += 'editrole';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].AsignTagToRole:
                subURL += 'asigntagtorole';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].RemoveTagFromRole:
                subURL += 'removetagfromrole';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].EditTag:
                subURL += 'edittag';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].RemoveEmployee:
                subURL += 'removeshare';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetProfile:
                subURL += 'getprofile';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ChangeProfile:
                subURL += 'changeprofile';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetSystemMessages:
                subURL += 'getsystemmessages';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetRecentChanges:
                subURL += 'getrecentchanges';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetParentInfo:
                subURL += 'getparentinfo';
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetBoardPermission:
                subURL += "getboardpermissions";
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetTaskPermission:
                subURL += "gettaskpermissions";
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
            case _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetCommentPermission:
                subURL += "getcommentpermissions";
                result = this.Fetch(subURL, JSON.stringify(propertise));
                break;
        }
        return result;
    };
    TaskPlusPlusAPIService.prototype.Fetch = function (url, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingService.SetLoader();
                        return [4 /*yield*/, this.http.post(url, data, { headers: headers }).toPromise()];
                    case 1:
                        res = _a.sent();
                        this.loadingService.ResetLoader();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    TaskPlusPlusAPIService.ɵfac = function TaskPlusPlusAPIService_Factory(t) { return new (t || TaskPlusPlusAPIService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_loading_manager_service__WEBPACK_IMPORTED_MODULE_4__["LoadingManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_cache_manager_service__WEBPACK_IMPORTED_MODULE_5__["CacheManagerService"])); };
    TaskPlusPlusAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TaskPlusPlusAPIService, factory: TaskPlusPlusAPIService.ɵfac, providedIn: 'root' });
    return TaskPlusPlusAPIService;
}());



/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Enums/ValidateMethods */ "F0qM");
/* harmony import */ var _Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Enums/UserActions */ "lXr8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var _Servicies_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Servicies/validation.service */ "MSpn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _darken_darken_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../darken/darken.component */ "makw");











var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, deviceService, cacheManager, API, validateService) {
        this.router = router;
        this.deviceService = deviceService;
        this.cacheManager = cacheManager;
        this.API = API;
        this.validateService = validateService;
        this.responce = null;
        this.SignInData = {
            PhoneNumber: '',
            EmailAddress: '',
            OsVersion: this.deviceService.getDeviceInfo().os_version,
            DeviceType: this.deviceService.getDeviceInfo().deviceType,
            BrowerVersion: this.deviceService.getDeviceInfo().browser_version,
            Orientation: this.deviceService.getDeviceInfo().orientation
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.cacheManager.GetLoginDetails() != '') {
            this.router.navigate(['/boards']);
        }
    };
    LoginComponent.prototype.SignIn = function () {
        var _this = this;
        this.responce = this.API.Post(_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].SignIn, this.SignInData).then(function (data) {
            if (data.result) {
                _this.router.navigate(['/success']);
                _this.cacheManager.SetLoginDetails(data.accessCode);
            }
            _this.responce = null;
        });
    };
    LoginComponent.prototype.IsResponcePending = function () {
        if (this.responce == null)
            return false;
        return true;
    };
    LoginComponent.prototype.CheckPhoneNumber = function () {
        return this.validateService.validate(this.SignInData.PhoneNumber, _Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_0__["validateMethods"].signin);
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_5__["CacheManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_6__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 43, vars: 6, consts: [[3, "ngClass"], ["type", "radio", "name", "pages", "id", "page1", "checked", ""], ["type", "radio", "name", "pages", "id", "page2"], ["type", "radio", "name", "pages", "id", "page3"], [1, "pages"], [1, "page1"], ["src", "./assets/icons/Icon1.svg", 1, "logo"], [1, "button", "medium"], ["for", "page2"], [1, "icon-Phone"], [1, "page2"], [1, "input"], ["type", "text", 1, "login-input", 3, "ngModel", "ngModelChange"], [1, "small"], [3, "for"], [1, "page3"], ["type", "text", "maxlength", "4", 1, "login-input"], [1, "button", "medium", 3, "click"], ["for", "page1"], [3, "Darken"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Welcome to Task++");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Create an account to save all schedules and access them from anywhere");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Continue with phone number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "section", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.SignInData.PhoneNumber = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Mobile");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "section", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Welcome Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Enter Code Here");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_33_listener() { return ctx.SignIn(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ul", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "app-darken", 19);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.IsResponcePending() ? "not-mouse-event" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-color", ctx.CheckPhoneNumber() ? "#0f0" : "#f00");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.SignInData.PhoneNumber);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx.CheckPhoneNumber() ? "page3" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Darken", ctx.IsResponcePending());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _darken_darken_component__WEBPACK_IMPORTED_MODULE_10__["DarkenComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden;\n  text-align: center;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: normal;\n}\n\ndiv.pages[_ngcontent-%COMP%] {\n  width: 300%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transition: all 0.6s ease-out;\n}\n\ndiv.pages[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 33%;\n  display: inline-block;\n}\n\nul.pages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\na.button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  border-radius: 1rem;\n  display: inline-block;\n}\n\na.button[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  display: block;\n  width: 60%;\n}\n\nul.pages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 50%;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:nth-child(1):checked    ~ div.pages[_ngcontent-%COMP%] {\n  left: 0;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:nth-child(2):checked    ~ div.pages[_ngcontent-%COMP%] {\n  margin-left: -100%;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:nth-child(3):checked    ~ div.pages[_ngcontent-%COMP%] {\n  margin-left: -200%;\n}\n\ninput[type=text].login-input[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n\ndiv.input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ndiv.input[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  padding: 0.1rem 0.3rem;\n}\n\nul.pages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\np[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%] {\n  color: #555555;\n}\n\ndiv.input[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #555555;\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%] {\n  color: #f491a4;\n}\n\na[_ngcontent-%COMP%] {\n  background-color: #7054a3;\n  color: #fff;\n}\n\nul.pages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  background-color: #e6e7e8;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:nth-child(1):checked    ~ ul.pages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1)    > label[_ngcontent-%COMP%] {\n  background-color: #f491a4;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:nth-child(2):checked    ~ ul.pages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2)    > label[_ngcontent-%COMP%] {\n  background-color: #f491a4;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:nth-child(3):checked    ~ ul.pages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3)    > label[_ngcontent-%COMP%] {\n  background-color: #f491a4;\n}\n\ninput[type=text].login-input[_ngcontent-%COMP%] {\n  border-color: #555555;\n}\n\n@media only screen and (max-device-width: 900px) {\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 3rem auto 0;\n  }\n\n  ul.pages[_ngcontent-%COMP%] {\n    margin: 3rem auto;\n  }\n\n  ul.pages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin-right: 2rem;\n  }\n\n  ul.pages[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n\n  input[type=text].login-input[_ngcontent-%COMP%] {\n    padding: 0.7rem 1rem;\n    margin: 5rem auto 0;\n  }\n\n  a[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n    margin: 4rem auto 0;\n  }\n\n  i[_ngcontent-%COMP%] {\n    padding-right: 1.5rem;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    margin: 6rem 0;\n  }\n\n  div.input[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    left: 24%;\n    top: -0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBRUUsYUFBQTtBQUpKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLDZCQUFBO0FBSko7O0FBT0U7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUFKSjs7QUFPRTtFQUVFLHFCQUFBO0FBTEo7O0FBUUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFMSjs7QUFRRTtFQUVFLHFCQUFBO0FBTko7O0FBU0U7RUFFRSxjQUFBO0VBQ0EsVUFBQTtBQVBKOztBQVVFO0VBRUUscUJBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdFO0VBRUUsT0FBQTtBQVRKOztBQVlFO0VBRUUsa0JBQUE7QUFWSjs7QUFhRTtFQUVFLGtCQUFBO0FBWEo7O0FBY0U7RUFFRSxtQkFBQTtBQVpKOztBQWVFO0VBRUUsa0JBQUE7QUFiSjs7QUFnQkU7RUFFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQWRKOztBQXNCRTtFQUVFLHNCQUFBO0FBcEJKOztBQXVCRTtFQUNFLGNBQUE7QUFwQko7O0FBdUJFO0VBRUUsY0FBQTtFQUNBLHNCQUFBO0FBckJKOztBQXdCRTtFQUNFLGNBQUE7QUFyQko7O0FBd0JFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBckJKOztBQXdCRTtFQUVFLHlCQUFBO0FBdEJKOztBQXlCRTtFQUVFLHlCQUFBO0FBdkJKOztBQTBCRTtFQUVFLHlCQUFBO0FBeEJKOztBQTJCRTtFQUVFLHlCQUFBO0FBekJKOztBQTRCRTtFQUVFLHFCQUFBO0FBMUJKOztBQWlDQTtFQUVFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBL0JGOztFQWtDQTtJQUNBLGlCQUFBO0VBL0JBOztFQWtDQTtJQUVFLGtCQUFBO0VBaENGOztFQW1DQTtJQUVFLGFBQUE7SUFDQSxjQUFBO0VBakNGOztFQXFDQTtJQUVFLG9CQUFBO0lBQ0EsbUJBQUE7RUFuQ0Y7O0VBc0NBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQW5DRjs7RUFzQ0E7SUFDRSxxQkFBQTtFQW5DRjs7RUFzQ0E7SUFDRSxjQUFBO0VBbkNGOztFQXNDQTtJQUVFLFNBQUE7SUFDQSxZQUFBO0VBcENGO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIGdsb2JhbCBzdHlsZXNcclxuXHJcbiAgc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9cmFkaW9dXHJcbiAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGgyLHB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgZGl2LnBhZ2Vze1xyXG4gICAgd2lkdGg6IDMwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICBkaXYucGFnZXMgc2VjdGlvbntcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICB1bC5wYWdlcyA+IGxpXHJcbiAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgYS5idXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIGEuYnV0dG9uOmFjdGl2ZVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9dGV4dF1cclxuICB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICB1bC5wYWdlcyA+IGxpID4gbGFiZWxcclxuICB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPXJhZGlvXTpudGgtY2hpbGQoMSk6Y2hlY2tlZCB+IGRpdi5wYWdlc1xyXG4gIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPXJhZGlvXTpudGgtY2hpbGQoMik6Y2hlY2tlZCB+IGRpdi5wYWdlc1xyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9cmFkaW9dOm50aC1jaGlsZCgzKTpjaGVja2VkIH4gZGl2LnBhZ2VzXHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMDAlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT10ZXh0XS5sb2dpbi1pbnB1dFxyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgfVxyXG5cclxuICBkaXYuaW5wdXRcclxuICB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICBkaXYuaW5wdXQgPiBzcGFuXHJcbiAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XHJcbiAgfVxyXG4vL2VuZCBnbG9iYWwgc3R5bGVzXHJcblxyXG5cclxuXHJcbi8vdGhlbWUgZGVwZW5kZW5jeSBzdHlsZXNcclxuXHJcbiAgdWwucGFnZXMgPiBsaVxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBwLGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICB9XHJcblxyXG4gIGRpdi5pbnB1dCA+IHNwYW5cclxuICB7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBpe1xyXG4gICAgY29sb3I6ICNmNDkxYTQ7XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNTRhMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgdWwucGFnZXMgPiBsaSA+IGxhYmVsXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTdlODtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9cmFkaW9dOm50aC1jaGlsZCgxKTpjaGVja2VkIH4gdWwucGFnZXMgPiBsaTpudGgtY2hpbGQoMSkgPiBsYWJlbFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDkxYTQ7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPXJhZGlvXTpudGgtY2hpbGQoMik6Y2hlY2tlZCB+IHVsLnBhZ2VzID4gbGk6bnRoLWNoaWxkKDIpID4gbGFiZWxcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ5MWE0O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1yYWRpb106bnRoLWNoaWxkKDMpOmNoZWNrZWQgfiB1bC5wYWdlcyA+IGxpOm50aC1jaGlsZCgzKSA+IGxhYmVsXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OTFhNDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9dGV4dF0ubG9naW4taW5wdXRcclxuICB7XHJcbiAgICBib3JkZXItY29sb3I6ICM1NTU1NTU7XHJcbiAgfVxyXG5cclxuLy9lbmQgdGhlbWUgZGVwZW5kZW5jeSBzdHlsZXNcclxuXHJcbi8vIHNjcmVlbiBEZXBlbmRlbmN5IFN0eWxlc1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDo5MDBweCkge1xyXG5cclxuICBoMSxoMixwe1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvIDA7XHJcbiAgfVxyXG5cclxuICB1bC5wYWdlc3tcclxuICBtYXJnaW46IDNyZW0gYXV0bztcclxuICB9XHJcblxyXG4gIHVsLnBhZ2VzID4gbGlcclxuICB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICB1bC5wYWdlcyA+IGxpID4gbGFiZWxcclxuICB7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5wdXRbdHlwZT10ZXh0XS5sb2dpbi1pbnB1dFxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiA1cmVtIGF1dG8gMDtcclxuICB9XHJcblxyXG4gIGF7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBtYXJnaW46IDRyZW0gYXV0byAwO1xyXG4gIH1cclxuXHJcbiAgaXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIGgze1xyXG4gICAgbWFyZ2luOiA2cmVtIDA7XHJcbiAgfVxyXG5cclxuICBkaXYuaW5wdXQgPiBzcGFuXHJcbiAge1xyXG4gICAgbGVmdDogMjQlO1xyXG4gICAgdG9wOiAtMC43cmVtO1xyXG4gIH1cclxuICB9XHJcblxyXG4vLyBFbmQgU2NyZWVuIERlcGVuZGVuY3kgU3R5bGVzXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
    return LoginComponent;
}());



/***/ }),

/***/ "YAXC":
/*!*******************************************************************!*\
  !*** ./src/app/components/nav-comments/nav-comments.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCommentsComponent", function() { return NavCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





var NavCommentsComponent = /** @class */ (function () {
    function NavCommentsComponent(loc, themeService, router) {
        this.loc = loc;
        this.themeService = themeService;
        this.router = router;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
    }
    NavCommentsComponent.prototype.ngOnInit = function () {
    };
    NavCommentsComponent.prototype.Back = function () {
        this.loc.back();
    };
    NavCommentsComponent.prototype.GoToHomePage = function () {
        this.router.navigateByUrl('/');
    };
    NavCommentsComponent.prototype.Add = function () {
        this.add.emit();
    };
    NavCommentsComponent.ɵfac = function NavCommentsComponent_Factory(t) { return new (t || NavCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    NavCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavCommentsComponent, selectors: [["app-nav-comments"]], outputs: { add: "add" }, decls: 7, vars: 10, consts: [[1, "nav-bar"], [1, "icon-Back", "x-large", 3, "click"], [1, "icon-Home", "x-large", 3, "click"], [1, "icon-Add", "x-large", 3, "click"]], template: function NavCommentsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavCommentsComponent_Template_i_click_2_listener() { return ctx.Back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavCommentsComponent_Template_i_click_4_listener() { return ctx.GoToHomePage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavCommentsComponent_Template_i_click_6_listener() { return ctx.Add(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold)("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtY29tbWVudHMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NavCommentsComponent;
}());



/***/ }),

/***/ "Z2fp":
/*!***************************************************************************!*\
  !*** ./src/app/components/login-successful/login-successful.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoginSuccessfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccessfulComponent", function() { return LoginSuccessfulComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");



var LoginSuccessfulComponent = /** @class */ (function () {
    function LoginSuccessfulComponent(router, cacheManager) {
        this.router = router;
        this.cacheManager = cacheManager;
    }
    LoginSuccessfulComponent.prototype.ngOnInit = function () {
        if (this.cacheManager.GetLoginDetails() == '') {
            this.router.navigate(['../']);
        }
    };
    LoginSuccessfulComponent.prototype.ngDoCheck = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/boards']);
        }, 3000);
    };
    LoginSuccessfulComponent.ɵfac = function LoginSuccessfulComponent_Factory(t) { return new (t || LoginSuccessfulComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_2__["CacheManagerService"])); };
    LoginSuccessfulComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginSuccessfulComponent, selectors: [["app-login-successful"]], decls: 7, vars: 0, consts: [["src", "./assets/icons/Icon1.svg", 1, "logo"], [1, "blue"], [1, "icon", "gray", "icon-Cloud"]], template: function LoginSuccessfulComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Task++");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Login Successful");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.blue[_ngcontent-%COMP%] {\n  color: #5489a0;\n}\n\n@media only screen and (max-device-width: 900px) {\n  h1[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 9rem auto 0;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin-top: 14rem;\n  }\n\n  i[_ngcontent-%COMP%] {\n    padding-right: 1.5rem;\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi1zdWNjZXNzZnVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7QUFGRjs7QUFTQTtFQUNFLGNBQUE7QUFORjs7QUFhQTtFQUVFO0lBRUUsVUFBQTtJQUNBLG1CQUFBO0VBWkY7O0VBZUE7SUFFRSxpQkFBQTtFQWJGOztFQWdCQTtJQUNFLHFCQUFBO0lBQ0EsZUFBQTtFQWJGO0FBQ0YiLCJmaWxlIjoibG9naW4tc3VjY2Vzc2Z1bC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBHbG9iYWwgU3R5bGVzXHJcblxyXG5oMSxoMixoM3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIEVuZCBHbG9iYWwgU3R5bGVzXHJcblxyXG4vLyBUaGVtZSBEZXBlbmRlY3kgU3R5bGVzXHJcblxyXG4uYmx1ZXtcclxuICBjb2xvcjogIzU0ODlhMDtcclxufVxyXG5cclxuLy8gRW5kIFRoZW1lIERlcGVkZW5jeSBTdHlsZXNcclxuXHJcbi8vIFNjcmVlbiBEZXBlbmRlbmN5IFN0eWxlc1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtZGV2aWNlLXdpZHRoOjkwMHB4KVxyXG57XHJcbiAgaDFcclxuICB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiA5cmVtIGF1dG8gMDtcclxuICB9XHJcblxyXG4gIGgyXHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogMTRyZW07XHJcbiAgfVxyXG5cclxuICBpe1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRW5kIFNjcmVlbiBEZXBlZGVuY3kgU3R5bGVzXHJcblxyXG5cclxuIl19 */"] });
    return LoginSuccessfulComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_login_successful_login_successful_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-successful/login-successful.component */ "Z2fp");
/* harmony import */ var _components_boards_boards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/boards/boards.component */ "lkFM");
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tasks/tasks.component */ "N+2n");
/* harmony import */ var _components_sub_tasks_sub_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sub-tasks/sub-tasks.component */ "SQEy");
/* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/comments/comments.component */ "OXCg");
/* harmony import */ var _components_board_info_board_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/board-info/board-info.component */ "NQ6e");
/* harmony import */ var _components_darken_darken_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/darken/darken.component */ "makw");
/* harmony import */ var _Directives_hold_element_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Directives/hold-element.directive */ "FWTv");
/* harmony import */ var _components_nav_board_nav_board_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/nav-board/nav-board.component */ "Zrmb");
/* harmony import */ var _components_nav_tasks_nav_tasks_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/nav-tasks/nav-tasks.component */ "zjf+");
/* harmony import */ var _components_nav_sub_tasks_nav_sub_tasks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/nav-sub-tasks/nav-sub-tasks.component */ "mbtQ");
/* harmony import */ var _components_nav_comments_nav_comments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/nav-comments/nav-comments.component */ "YAXC");
/* harmony import */ var _components_nav_board_info_nav_board_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/nav-board-info/nav-board-info.component */ "NiVY");
/* harmony import */ var _components_task_info_task_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/task-info/task-info.component */ "c48u");
/* harmony import */ var _components_share_board_share_board_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/share-board/share-board.component */ "1jOW");
/* harmony import */ var _components_asign_role_asign_role_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/asign-role/asign-role.component */ "a5hl");
/* harmony import */ var _components_tags_info_tags_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/tags-info/tags-info.component */ "O+gC");
/* harmony import */ var _components_role_info_role_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/role-info/role-info.component */ "gk9E");
/* harmony import */ var _components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/add-role/add-role.component */ "5Mjg");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/setting/setting.component */ "KxqT");
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/contact-list/contact-list.component */ "79cI");
/* harmony import */ var _components_nav_contact_list_nav_contact_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/nav-contact-list/nav-contact-list.component */ "D7Cu");
/* harmony import */ var _Directives_scroll_effect_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Directives/scroll-effect.directive */ "1lZJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_comment_top_menu_comment_top_menu_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/comment-top-menu/comment-top-menu.component */ "PIou");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Pipes/caption.pipe */ "5klJ");
/* harmony import */ var _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Pipes/count-control.pipe */ "mXeI");
/* harmony import */ var _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Directives/set-bg-color.directive */ "F2C7");
/* harmony import */ var _components_role_tags_info_role_tags_info_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/role-tags-info/role-tags-info.component */ "180W");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_nav_profile_nav_profile_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/nav-profile/nav-profile.component */ "jvEU");
/* harmony import */ var _components_system_messages_system_messages_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/system-messages/system-messages.component */ "oTeM");
/* harmony import */ var _components_nav_system_messages_nav_system_messages_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/nav-system-messages/nav-system-messages.component */ "M4t0");
/* harmony import */ var _Directives_select_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Directives/select.directive */ "yvKA");
/* harmony import */ var _Directives_QuitAPP_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Directives/QuitAPP.directive */ "Ua9n");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/loading/loading.component */ "qQYQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _route_reuse__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./route-reuse */ "vEBM");
/* harmony import */ var _components_error_box_error_box_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/error-box/error-box.component */ "wBuZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ "fXoL");
















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouteReuseStrategy"], useClass: _route_reuse__WEBPACK_IMPORTED_MODULE_45__["CustomReuseStrategy"] }], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_42__["BrowserAnimationsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_41__["MatProgressBarModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_login_successful_login_successful_component__WEBPACK_IMPORTED_MODULE_6__["LoginSuccessfulComponent"],
        _components_boards_boards_component__WEBPACK_IMPORTED_MODULE_7__["BoardsComponent"],
        _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"],
        _components_sub_tasks_sub_tasks_component__WEBPACK_IMPORTED_MODULE_9__["SubTasksComponent"],
        _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__["CommentsComponent"],
        _components_board_info_board_info_component__WEBPACK_IMPORTED_MODULE_11__["BoardInfoComponent"],
        _components_darken_darken_component__WEBPACK_IMPORTED_MODULE_12__["DarkenComponent"],
        _Directives_hold_element_directive__WEBPACK_IMPORTED_MODULE_13__["HoldElementDirective"],
        _components_nav_board_nav_board_component__WEBPACK_IMPORTED_MODULE_14__["NavBoardComponent"],
        _components_nav_tasks_nav_tasks_component__WEBPACK_IMPORTED_MODULE_15__["NavTasksComponent"],
        _components_nav_sub_tasks_nav_sub_tasks_component__WEBPACK_IMPORTED_MODULE_16__["NavSubTasksComponent"],
        _components_nav_comments_nav_comments_component__WEBPACK_IMPORTED_MODULE_17__["NavCommentsComponent"],
        _components_nav_board_info_nav_board_info_component__WEBPACK_IMPORTED_MODULE_18__["NavBoardInfoComponent"],
        _components_task_info_task_info_component__WEBPACK_IMPORTED_MODULE_19__["TaskInfoComponent"],
        _components_share_board_share_board_component__WEBPACK_IMPORTED_MODULE_20__["ShareBoardComponent"],
        _components_asign_role_asign_role_component__WEBPACK_IMPORTED_MODULE_21__["AsignRoleComponent"],
        _components_tags_info_tags_info_component__WEBPACK_IMPORTED_MODULE_22__["TagsInfoComponent"],
        _components_role_info_role_info_component__WEBPACK_IMPORTED_MODULE_23__["RoleInfoComponent"],
        _components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_24__["AddRoleComponent"],
        _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_25__["SettingComponent"],
        _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_26__["ContactListComponent"],
        _components_nav_contact_list_nav_contact_list_component__WEBPACK_IMPORTED_MODULE_27__["NavContactListComponent"],
        _Directives_scroll_effect_directive__WEBPACK_IMPORTED_MODULE_28__["ScrollEffectDirective"],
        _components_comment_top_menu_comment_top_menu_component__WEBPACK_IMPORTED_MODULE_30__["CommentTopMenuComponent"],
        _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_31__["CaptionPipe"],
        _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_32__["CountControlPipe"],
        _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_33__["SetBgColorDirective"],
        _components_role_tags_info_role_tags_info_component__WEBPACK_IMPORTED_MODULE_34__["RoleTagsInfoComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"],
        _components_nav_profile_nav_profile_component__WEBPACK_IMPORTED_MODULE_36__["NavProfileComponent"],
        _components_system_messages_system_messages_component__WEBPACK_IMPORTED_MODULE_37__["SystemMessagesComponent"],
        _components_nav_system_messages_nav_system_messages_component__WEBPACK_IMPORTED_MODULE_38__["NavSystemMessagesComponent"],
        _Directives_select_directive__WEBPACK_IMPORTED_MODULE_39__["SelectDirective"],
        _Directives_QuitAPP_directive__WEBPACK_IMPORTED_MODULE_40__["QuitAPP"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_43__["LoadingComponent"],
        _components_error_box_error_box_component__WEBPACK_IMPORTED_MODULE_46__["ErrorBoxComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_42__["BrowserAnimationsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_41__["MatProgressBarModule"]], exports: [_Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_31__["CaptionPipe"],
        _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_32__["CountControlPipe"]] }); })();


/***/ }),

/***/ "Zrmb":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-board/nav-board.component.ts ***!
  \*************************************************************/
/*! exports provided: NavBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBoardComponent", function() { return NavBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




var NavBoardComponent = /** @class */ (function () {
    function NavBoardComponent(themeService) {
        this.themeService = themeService;
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
    }
    NavBoardComponent.prototype.ngOnInit = function () {
    };
    NavBoardComponent.prototype.Focus = function () {
        this.focus.emit();
    };
    NavBoardComponent.ɵfac = function NavBoardComponent_Factory(t) { return new (t || NavBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__["ThemeControllerService"])); };
    NavBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBoardComponent, selectors: [["app-nav-board"]], outputs: { focus: "focus" }, decls: 5, vars: 8, consts: [[1, "nav-bar"], ["routerLink", "/setting", 1, "icon-Setting", "x-large"], [1, "icon-Add", "x-large", 3, "click"]], template: function NavBoardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBoardComponent_Template_i_click_4_listener() { return ctx.Focus(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold)("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NavBoardComponent;
}());



/***/ }),

/***/ "a5hl":
/*!***************************************************************!*\
  !*** ./src/app/components/asign-role/asign-role.component.ts ***!
  \***************************************************************/
/*! exports provided: AsignRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignRoleComponent", function() { return AsignRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Directives/set-bg-color.directive */ "F2C7");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");






function AsignRoleComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsignRoleComponent_li_9_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var item_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.Demote(item_r2.RoleSessionId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgColor", item_r2.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, item_r2.Caption, 15));
} }
function AsignRoleComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsignRoleComponent_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var item_r5 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return !ctx_r6.IsAdded(item_r5.Id) ? ctx_r6.AsignRole(item_r5.Id) : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r5 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.IsAdded(item_r5.Id) ? "added" : "")("bgColor", item_r5.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, item_r5.Caption, 15));
} }
var AsignRoleComponent = /** @class */ (function () {
    function AsignRoleComponent(themeService) {
        this.themeService = themeService;
        this.activeRequestOn = false;
        this.open = false;
        this.roles = [];
        this.accessToken = '';
        this.boardId = '';
        this.userId = '';
        this.employeesRoles = [];
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.AsignRoleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.DemoteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
    }
    AsignRoleComponent.prototype.ngOnInit = function () {
    };
    AsignRoleComponent.prototype.CloseMenu = function () {
        this.open = false;
        this.close.emit();
    };
    AsignRoleComponent.prototype.AsignRole = function (id) {
        var asign = { RoleId: id, AccessToken: this.accessToken, EmployeeId: this.userId, BoardId: this.boardId };
        if (!this.activeRequestOn)
            this.AsignRoleEvent.emit(asign);
    };
    AsignRoleComponent.prototype.Demote = function (id) {
        var demote = { AccessToken: this.accessToken, roleSessionId: id, BoardId: this.boardId };
        if (!this.activeRequestOn)
            this.DemoteEvent.emit(demote);
    };
    AsignRoleComponent.prototype.IsAdded = function (roleId) {
        var res = false;
        this.employeesRoles.forEach(function (item) {
            if (item.RoleId == roleId)
                res = true;
        });
        return res;
    };
    AsignRoleComponent.ɵfac = function AsignRoleComponent_Factory(t) { return new (t || AsignRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__["ThemeControllerService"])); };
    AsignRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsignRoleComponent, selectors: [["app-asign-role"]], inputs: { activeRequestOn: "activeRequestOn", open: "open", roles: "roles", accessToken: "accessToken", boardId: "boardId", userId: "userId", employeesRoles: "employeesRoles" }, outputs: { close: "close", AsignRoleEvent: "AsignRoleEvent", DemoteEvent: "DemoteEvent" }, decls: 14, vars: 17, consts: [[1, "menu", "menu-transition", 3, "ngClass"], [1, "free-space-top-x"], [1, "icon", "right-align", "icon-Close", "x-large", 3, "click"], [1, "free-space-top-3x"], ["src", "./assets/icons/Icon.svg", 1, "left-align", "user-img"], [1, "free-space-top-2x", "horizontal-list", "soft-list"], ["class", "free-space-top-x", "appSetBgColor", "", 3, "bgColor", "click", 4, "ngFor", "ngForOf"], ["class", "free-space-top-x", "appSetBgColor", "", 3, "ngClass", "bgColor", "click", 4, "ngFor", "ngForOf"], ["appSetBgColor", "", 1, "free-space-top-x", 3, "bgColor", "click"], ["appSetBgColor", "", 1, "free-space-top-x", 3, "ngClass", "bgColor", "click"]], template: function AsignRoleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsignRoleComponent_Template_i_click_2_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " User1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "user1's Roles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AsignRoleComponent_li_9_Template, 3, 5, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Board's Roles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AsignRoleComponent_li_13_Template, 3, 6, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.open ? "open" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#fff");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employeesRoles);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#fff");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_3__["SetBgColorDirective"]], pipes: [_Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_4__["CaptionPipe"]], styles: [".soft-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-right: 4rem !important;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc2lnbi1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBRUUsOEJBQUE7RUFDQSxnQkFBQTtBQUxGIiwiZmlsZSI6ImFzaWduLXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuXHJcbi5zb2Z0LWxpc3QgPiBsaVxyXG57XHJcbiAgcGFkZGluZy1yaWdodDogNHJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIl19 */"] });
    return AsignRoleComponent;
}());



/***/ }),

/***/ "c48u":
/*!*************************************************************!*\
  !*** ./src/app/components/task-info/task-info.component.ts ***!
  \*************************************************************/
/*! exports provided: TaskInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskInfoComponent", function() { return TaskInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Directives/set-bg-color.directive */ "F2C7");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");






function TaskInfoComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskInfoComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var item_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.RemoveAsign(item_r2.TagListId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgColor", item_r2.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, item_r2.Caption, 15));
} }
function TaskInfoComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskInfoComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var item_r5 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return !ctx_r6.IsAdded(item_r5.Id) ? ctx_r6.AsignTag(item_r5.Id) : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r5 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.IsAdded(item_r5.Id) ? "added" : "")("bgColor", item_r5.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, item_r5.Caption, 15));
} }
var TaskInfoComponent = /** @class */ (function () {
    function TaskInfoComponent(themeService) {
        this.themeService = themeService;
        this.activeRequestOn = false;
        this.open = false;
        this.boardTags = [];
        this.tags = [];
        this.parentId = '';
        this.accessToken = '';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newTagAsignEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.RemoveAsignEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
    }
    TaskInfoComponent.prototype.ngOnInit = function () {
    };
    TaskInfoComponent.prototype.CloseMenu = function () {
        this.open = false;
        this.close.emit();
    };
    TaskInfoComponent.prototype.AsignTag = function (id) {
        var tag = { AccessToken: this.accessToken, TaskId: this.parentId, Id: id };
        if (tag.TaskId != '' && !this.activeRequestOn)
            this.newTagAsignEvent.emit(tag);
    };
    TaskInfoComponent.prototype.RemoveAsign = function (id) {
        var tag = { AccessToken: this.accessToken, TaskId: this.parentId, TaskTagId: id };
        if (tag.TaskId != '' && !this.activeRequestOn)
            this.RemoveAsignEvent.emit(tag);
    };
    TaskInfoComponent.prototype.IsAdded = function (tagId) {
        var res = false;
        this.tags.forEach(function (item) {
            if (item.TagId == tagId)
                res = true;
        });
        return res;
    };
    TaskInfoComponent.ɵfac = function TaskInfoComponent_Factory(t) { return new (t || TaskInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__["ThemeControllerService"])); };
    TaskInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskInfoComponent, selectors: [["app-task-info"]], inputs: { activeRequestOn: "activeRequestOn", open: "open", boardTags: "boardTags", tags: "tags", parentId: "parentId", accessToken: "accessToken" }, outputs: { close: "close", newTagAsignEvent: "newTagAsignEvent", RemoveAsignEvent: "RemoveAsignEvent" }, decls: 11, vars: 15, consts: [[1, "menu", "menu-transition", 3, "ngClass"], [1, "free-space-top-x"], [1, "icon", "right-align", "icon-Close", "x-large", 3, "click"], [1, "free-space-top-2x", "horizontal-list", "soft-list"], ["class", "free-space-top-x", "appSetBgColor", "", 3, "bgColor", "click", 4, "ngFor", "ngForOf"], ["class", "free-space-top-x", "appSetBgColor", "", 3, "ngClass", "bgColor", "click", 4, "ngFor", "ngForOf"], ["appSetBgColor", "", 1, "free-space-top-x", 3, "bgColor", "click"], ["appSetBgColor", "", 1, "free-space-top-x", 3, "ngClass", "bgColor", "click"]], template: function TaskInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskInfoComponent_Template_i_click_2_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tags");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskInfoComponent_li_6_Template, 3, 5, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Boards Tag List");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskInfoComponent_li_10_Template, 3, 6, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.open ? "open" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#fff");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#fff");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boardTags);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _Directives_set_bg_color_directive__WEBPACK_IMPORTED_MODULE_3__["SetBgColorDirective"]], pipes: [_Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_4__["CaptionPipe"]], styles: [".soft-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-right: 4rem !important;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YXNrLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSw4QkFBQTtFQUNBLGdCQUFBO0FBREYiLCJmaWxlIjoidGFzay1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zb2Z0LWxpc3QgPiBsaVxyXG57XHJcbiAgcGFkZGluZy1yaWdodDogNHJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIl19 */"] });
    return TaskInfoComponent;
}());



/***/ }),

/***/ "gk9E":
/*!*************************************************************!*\
  !*** ./src/app/components/role-info/role-info.component.ts ***!
  \*************************************************************/
/*! exports provided: RoleInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleInfoComponent", function() { return RoleInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Directives_select_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Directives/select.directive */ "yvKA");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");







var RoleInfoComponent = /** @class */ (function () {
    function RoleInfoComponent(differs, themeService) {
        this.differs = differs;
        this.themeService = themeService;
        this.activeRequestOn = false;
        this.open = false;
        this.accessToken = '';
        this.boardId = '';
        this.role = { Id: '', Caption: '', Color: '', ReadTask: false, WriteTask: false, ReadComment: false, WriteComment: false, CompleteTask: false, Tags: [], IsUsing: false };
        this.editRoleEntity = { AccessToken: '', BoardId: '', Id: '', Color: '', ReadTask: false, WriteTask: false, ReadComment: false, WriteComment: false, CompleteTask: false };
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.EditRoleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
        this.differ = this.differs.find({}).create();
    }
    RoleInfoComponent.prototype.ngOnInit = function () {
    };
    RoleInfoComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.editRoleEntity.ReadComment = this.editRoleEntity.ReadComment || this.editRoleEntity.WriteComment;
        this.editRoleEntity.ReadTask = this.editRoleEntity.ReadTask || this.editRoleEntity.WriteTask;
        var change = this.differ.diff(this);
        if (change) {
            change.forEachChangedItem(function (item) {
                if (item.key == 'role')
                    _this.editRoleEntity.Color = _this.role.Color;
                _this.editRoleEntity.ReadTask = _this.role.ReadTask;
                _this.editRoleEntity.WriteComment = _this.role.WriteComment;
                _this.editRoleEntity.WriteTask = _this.role.WriteTask;
                _this.editRoleEntity.ReadComment = _this.role.ReadComment;
                _this.editRoleEntity.CompleteTask = _this.role.CompleteTask;
                _this.editRoleEntity.Id = _this.role.Id;
            });
        }
    };
    RoleInfoComponent.prototype.CloseMenu = function () {
        this.close.emit();
    };
    RoleInfoComponent.prototype.EditRole = function () {
        this.editRoleEntity.ReadComment = this.editRoleEntity.ReadComment || this.editRoleEntity.WriteComment;
        this.editRoleEntity.ReadTask = this.editRoleEntity.ReadTask || this.editRoleEntity.WriteTask;
        this.editRoleEntity.BoardId = this.boardId;
        this.editRoleEntity.AccessToken = this.accessToken;
        if (!this.activeRequestOn) {
            this.EditRoleEvent.emit(this.editRoleEntity);
            this.editRoleEntity.ReadComment = false;
            this.editRoleEntity.ReadTask = false;
        }
    };
    RoleInfoComponent.ɵfac = function RoleInfoComponent_Factory(t) { return new (t || RoleInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_1__["ThemeControllerService"])); };
    RoleInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleInfoComponent, selectors: [["app-role-info"]], inputs: { activeRequestOn: "activeRequestOn", open: "open", accessToken: "accessToken", boardId: "boardId", role: "role", editRoleEntity: "editRoleEntity" }, outputs: { close: "close", EditRoleEvent: "EditRoleEvent" }, decls: 27, vars: 45, consts: [[1, "menu", "menu-transition", 3, "ngClass"], [1, "free-space-top-x"], [1, "icon", "right-align", "icon-Close", "x-large", 3, "click"], [1, "free-space-top-3x"], ["type", "color", 1, "right-align", "color", 3, "value", "ngModel", "ngModelChange"], [1, "free-space-top-2x"], [1, "medium", "free-space-top-x"], ["type", "checkbox", "id", "wt", "appSelect", "", 3, "checked", "ngModel", "mainColor", "color", "ngModelChange"], ["for", "wt"], [1, "medium"], [1, "icon", "icon-Tree", "x-large"], ["type", "checkbox", "id", "rt", "appSelect", "", 3, "mainColor", "color", "checked", "ngModel", "disabled", "ngModelChange"], ["for", "rt"], ["type", "checkbox", "id", "wc", "appSelect", "", 3, "checked", "mainColor", "color", "ngModel", "ngModelChange"], ["for", "wc"], ["type", "checkbox", "id", "rc", "appSelect", "", 3, "checked", "mainColor", "color", "ngModel", "disabled", "ngModelChange"], ["for", "rc"], [1, "icon-Save", "right-align", "x2-large", "icon", 3, "click"]], template: function RoleInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleInfoComponent_Template_i_click_2_listener() { return ctx.CloseMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "caption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleInfoComponent_Template_input_ngModelChange_6_listener($event) { return ctx.editRoleEntity.Color = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleInfoComponent_Template_input_ngModelChange_9_listener($event) { return ctx.editRoleEntity.WriteTask = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " write task ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleInfoComponent_Template_input_ngModelChange_14_listener($event) { return ctx.editRoleEntity.ReadTask = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " read task ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleInfoComponent_Template_input_ngModelChange_18_listener($event) { return ctx.editRoleEntity.WriteComment = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " write comment ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleInfoComponent_Template_input_ngModelChange_23_listener($event) { return ctx.editRoleEntity.ReadComment = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " read comment ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleInfoComponent_Template_i_click_26_listener() { return ctx.EditRole(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.open ? "open" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 42, ctx.role.Caption, 20), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.role.Color)("ngModel", ctx.editRoleEntity.Color);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.role.WriteTask)("ngModel", ctx.editRoleEntity.WriteTask)("mainColor", ctx.theme.Color10Normal)("color", ctx.theme.Color30Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainColor", ctx.theme.Color10Normal)("color", ctx.theme.Color30Bold)("checked", ctx.role.ReadTask)("ngModel", ctx.editRoleEntity.ReadTask)("disabled", ctx.editRoleEntity.WriteTask ? true : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.role.WriteComment)("mainColor", ctx.theme.Color10Normal)("color", ctx.theme.Color30Bold)("ngModel", ctx.editRoleEntity.WriteComment);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.role.ReadComment)("mainColor", ctx.theme.Color10Normal)("color", ctx.theme.Color30Bold)("ngModel", ctx.editRoleEntity.ReadComment)("disabled", ctx.editRoleEntity.WriteComment ? true : false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _Directives_select_directive__WEBPACK_IMPORTED_MODULE_4__["SelectDirective"]], pipes: [_Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_5__["CaptionPipe"]], styles: [".list-item[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.soft-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-right: 4rem !important;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyb2xlLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFRSwyQkFBQTtBQUhGOztBQU1BO0VBRUUsOEJBQUE7RUFDQSxnQkFBQTtBQUpGIiwiZmlsZSI6InJvbGUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5saXN0LWl0ZW1cclxue1xyXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvZnQtbGlzdCA+IGxpXHJcbntcclxuICBwYWRkaW5nLXJpZ2h0OiA0cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4iXX0= */"] });
    return RoleInfoComponent;
}());



/***/ }),

/***/ "jvEU":
/*!*****************************************************************!*\
  !*** ./src/app/components/nav-profile/nav-profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavProfileComponent", function() { return NavProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");




var NavProfileComponent = /** @class */ (function () {
    function NavProfileComponent(loc, themeService) {
        this.loc = loc;
        this.themeService = themeService;
        this.SaveChangesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
    }
    NavProfileComponent.prototype.ngOnInit = function () {
    };
    NavProfileComponent.prototype.Back = function () {
        this.loc.back();
    };
    NavProfileComponent.prototype.SaveChanges = function () {
        this.SaveChangesEvent.emit();
    };
    NavProfileComponent.ɵfac = function NavProfileComponent_Factory(t) { return new (t || NavProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__["ThemeControllerService"])); };
    NavProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavProfileComponent, selectors: [["app-nav-profile"]], outputs: { SaveChangesEvent: "SaveChangesEvent" }, decls: 5, vars: 8, consts: [[1, "nav-bar"], [1, "icon-Back", "x-large", 3, "click"], [1, "icon-Save", "x-large", 3, "click"]], template: function NavProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavProfileComponent_Template_i_click_2_listener() { return ctx.Back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavProfileComponent_Template_i_click_4_listener() { return ctx.SaveChanges(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold)("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return NavProfileComponent;
}());



/***/ }),

/***/ "lXr8":
/*!**************************************!*\
  !*** ./src/app/Enums/UserActions.ts ***!
  \**************************************/
/*! exports provided: UserActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActions", function() { return UserActions; });
var UserActions;
(function (UserActions) {
    UserActions[UserActions["SignIn"] = 0] = "SignIn";
    UserActions[UserActions["AddBoard"] = 1] = "AddBoard";
    UserActions[UserActions["GetBoards"] = 2] = "GetBoards";
    UserActions[UserActions["EditBoard"] = 3] = "EditBoard";
    UserActions[UserActions["DeleteBoard"] = 4] = "DeleteBoard";
    UserActions[UserActions["GetTask"] = 5] = "GetTask";
    UserActions[UserActions["AddTask"] = 6] = "AddTask";
    UserActions[UserActions["EditTask"] = 7] = "EditTask";
    UserActions[UserActions["DeleteTask"] = 8] = "DeleteTask";
    UserActions[UserActions["AddSubTask"] = 9] = "AddSubTask";
    UserActions[UserActions["EditSubTask"] = 10] = "EditSubTask";
    UserActions[UserActions["GetComment"] = 11] = "GetComment";
    UserActions[UserActions["AddComment"] = 12] = "AddComment";
    UserActions[UserActions["EditComment"] = 13] = "EditComment";
    UserActions[UserActions["DeleteComment"] = 14] = "DeleteComment";
    UserActions[UserActions["AddFriend"] = 15] = "AddFriend";
    UserActions[UserActions["GetFriendList"] = 16] = "GetFriendList";
    UserActions[UserActions["GetFriendRequest"] = 17] = "GetFriendRequest";
    UserActions[UserActions["ApplyFriendRequestResponce"] = 18] = "ApplyFriendRequestResponce";
    UserActions[UserActions["RemoveFriend"] = 19] = "RemoveFriend";
    UserActions[UserActions["ShareBoard"] = 20] = "ShareBoard";
    UserActions[UserActions["AddTag"] = 21] = "AddTag";
    UserActions[UserActions["EditTag"] = 22] = "EditTag";
    UserActions[UserActions["GetBoardTag"] = 23] = "GetBoardTag";
    UserActions[UserActions["RemoveTagFromBoard"] = 24] = "RemoveTagFromBoard";
    UserActions[UserActions["AsignTagToTask"] = 25] = "AsignTagToTask";
    UserActions[UserActions["RemoveTagFromTask"] = 26] = "RemoveTagFromTask";
    UserActions[UserActions["AddRole"] = 27] = "AddRole";
    UserActions[UserActions["GetRole"] = 28] = "GetRole";
    UserActions[UserActions["EditRole"] = 29] = "EditRole";
    UserActions[UserActions["RemoveRole"] = 30] = "RemoveRole";
    UserActions[UserActions["GetEmployees"] = 31] = "GetEmployees";
    UserActions[UserActions["AsignRole"] = 32] = "AsignRole";
    UserActions[UserActions["Demote"] = 33] = "Demote";
    UserActions[UserActions["AsignTagToRole"] = 34] = "AsignTagToRole";
    UserActions[UserActions["RemoveTagFromRole"] = 35] = "RemoveTagFromRole";
    UserActions[UserActions["RemoveEmployee"] = 36] = "RemoveEmployee";
    UserActions[UserActions["GetProfile"] = 37] = "GetProfile";
    UserActions[UserActions["ChangeProfile"] = 38] = "ChangeProfile";
    UserActions[UserActions["GetSystemMessages"] = 39] = "GetSystemMessages";
    UserActions[UserActions["GetRecentChanges"] = 40] = "GetRecentChanges";
    UserActions[UserActions["GetParentInfo"] = 41] = "GetParentInfo";
    UserActions[UserActions["GetBoardPermission"] = 42] = "GetBoardPermission";
    UserActions[UserActions["GetTaskPermission"] = 43] = "GetTaskPermission";
    UserActions[UserActions["GetCommentPermission"] = 44] = "GetCommentPermission";
})(UserActions || (UserActions = {}));


/***/ }),

/***/ "lkFM":
/*!*******************************************************!*\
  !*** ./src/app/components/boards/boards.component.ts ***!
  \*******************************************************/
/*! exports provided: BoardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsComponent", function() { return BoardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Enums/ValidateMethods */ "F0qM");
/* harmony import */ var src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Enums/UserActions */ "lXr8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var _Servicies_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Servicies/validation.service */ "MSpn");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _nav_board_nav_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../nav-board/nav-board.component */ "Zrmb");
/* harmony import */ var _darken_darken_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../darken/darken.component */ "makw");
/* harmony import */ var _Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Pipes/caption.pipe */ "5klJ");
/* harmony import */ var _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Pipes/count-control.pipe */ "mXeI");















var _c0 = ["addInput"];
function BoardsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "here you can add new project to manage from the top input.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "the board owner(you) can share board and add new roles or tags to the board");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "roles specify Employees Limits And tags specify which role licenses affect which tasks.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "drag a board to left for that, and pull it to right for delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("border-color", ctx_r2.theme.Color10Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r2.theme.Color10Fade);
} }
function BoardsComponent_ng_container_8_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r6.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 3, item_r4.CreationAt, "MMM , y"));
} }
function BoardsComponent_ng_container_8_label_8_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardsComponent_ng_container_8_label_8_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); var ind_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.Rename(ind_r5 + 1, _r9, _r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ind_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", "item" + (ind_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r8.theme.Color60Bold);
} }
var _c1 = function (a0) { return { "list-grow": a0 }; };
var _c2 = function (a0, a1) { return { id: a0, owner: a1 }; };
function BoardsComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoardsComponent_ng_container_8_h3_1_Template, 3, 6, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BoardsComponent_ng_container_8_label_8_Template, 2, 3, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function BoardsComponent_ng_container_8_Template_input_keydown_enter_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); var item_r4 = ctx.$implicit; var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r15.Rename(0, _r9, _r7); return ctx_r15.EditBoard(item_r4.Id, item_r4.Caption, _r9.value, item_r4.IsOwner); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardsComponent_ng_container_8_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); var item_r4 = ctx.$implicit; var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r17.Rename(0, _r9, _r7); return ctx_r17.EditBoard(item_r4.Id, item_r4.Caption, _r9.value, item_r4.IsOwner); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "CountControl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "CountControl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "CountControl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    var ind_r5 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.CanShow(item_r4.CreationAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r3.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](41, _c1, ctx_r3.selected && ctx_r3.index == ind_r5 + 1))("cdkDragStartDelay", 200)("cdkDragData", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](43, _c2, item_r4.Id, item_r4.IsOwner));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "item" + (ind_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 32, item_r4.Caption, 20), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r4.IsOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("border-bottom-color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r4.Caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", "item" + (ind_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/task/" + item_r4.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Created By ", item_r4.Creator, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 35, item_r4.ChildsCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 37, item_r4.EmployeesCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r3.theme.Color60Normal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 39, item_r4.CommentsCount));
} }
var BoardsComponent = /** @class */ (function () {
    function BoardsComponent(router, API, validateService, themeService, cacheManager) {
        this.router = router;
        this.API = API;
        this.validateService = validateService;
        this.themeService = themeService;
        this.cacheManager = cacheManager;
        this.addInput = {};
        this.boards = [];
        this.dates = [];
        this.accessToken = { AccessToken: "" };
        this.selected = false;
        this.index = 0;
        this.theme = this.themeService.GetTheme();
    }
    BoardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessToken = { AccessToken: this.cacheManager.GetLoginDetails() };
        this.boards = JSON.parse(this.cacheManager.Get('boards' + this.accessToken.AccessToken));
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetBoards, this.accessToken).then(function (data) {
            _this.boards = data;
            _this.cacheManager.Set('boards' + _this.accessToken.AccessToken, JSON.stringify(data));
        });
    };
    BoardsComponent.prototype.CanShow = function (d) {
        var e_1, _a;
        var result = true;
        if (this.dates.length != this.boards.length) {
            var spliteDate = d.split('-');
            var yearAndMonth = spliteDate[0] + spliteDate[1];
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.dates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.Date == d) {
                        result = true;
                    }
                    else {
                        var itemSpliteDate = item.Date.split('-');
                        var itemYearAndMonth = itemSpliteDate[0] + itemSpliteDate[1];
                        if (itemYearAndMonth == yearAndMonth) {
                            result = false;
                            break;
                        }
                        else {
                            result = true;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var Exists_1 = false;
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    Exists_1 = true;
                }
            });
            if (!Exists_1) {
                this.dates.push({ Date: d, LastStatus: result });
            }
        }
        else {
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    result = item.LastStatus;
                }
            });
        }
        return result;
    };
    BoardsComponent.prototype.Drop = function (t) {
        var _this = this;
        var effectivePull = screen.width / 10;
        if (t.distance.x > effectivePull) {
            var object = { Id: t.item.data.id, AccessToken: this.accessToken.AccessToken };
            this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].DeleteBoard, object).then(function (data) {
                if (data.result) {
                    _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetBoards, _this.accessToken).then(function (datas) {
                        _this.boards = datas;
                        _this.cacheManager.Set('boards' + _this.accessToken.AccessToken, JSON.stringify(datas));
                        _this.dates = [];
                    });
                }
            });
        }
        else if (t.distance.x < (-1 * effectivePull)) {
            this.router.navigate(['/boardinfo/' + t.item.data.id]);
        }
    };
    BoardsComponent.prototype.Rename = function (i, eI, checkBox) {
        this.selected = !this.selected;
        this.index = i;
        if (i != 0) {
            setTimeout(function () {
                eI.select();
            }, 100);
        }
        else {
            checkBox.checked = false;
        }
    };
    BoardsComponent.prototype.Focus = function (item, input) {
        item.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        if (window.pageYOffset == 0) {
            input.focus();
        }
    };
    BoardsComponent.prototype.AddBoard = function (caption) {
        var _this = this;
        var board = { AccessToken: this.cacheManager.GetLoginDetails(), Caption: caption };
        if (this.validateService.validate(caption, _Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_1__["validateMethods"].caption))
            this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].AddBoard, board).then(function (data) {
                if (data.result) {
                    _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetBoards, _this.accessToken).then(function (datas) {
                        _this.boards = datas;
                        _this.cacheManager.Set('boards' + _this.accessToken.AccessToken, JSON.stringify(datas));
                        _this.dates = [];
                    });
                    _this.addInput.nativeElement.value = '';
                }
            });
    };
    BoardsComponent.prototype.EditBoard = function (boardId, oldCaption, newCaption, isOwner) {
        var _this = this;
        var object = { Id: boardId, Caption: newCaption, AccessToken: this.accessToken.AccessToken };
        if (isOwner) {
            if (this.validateService.validate(object.Caption, _Enums_ValidateMethods__WEBPACK_IMPORTED_MODULE_1__["validateMethods"].caption)) {
                this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].EditBoard, object).then(function (data) {
                    if (data.result) {
                        _this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"].GetBoards, _this.accessToken).then(function (datas) {
                            _this.boards = datas;
                            _this.cacheManager.Set('boards' + _this.accessToken.AccessToken, JSON.stringify(datas));
                        });
                    }
                });
            }
        }
    };
    BoardsComponent.ɵfac = function BoardsComponent_Factory(t) { return new (t || BoardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_5__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Servicies_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_7__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_8__["CacheManagerService"])); };
    BoardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BoardsComponent, selectors: [["app-boards"]], viewQuery: function BoardsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.addInput = _t.first);
        } }, decls: 11, vars: 10, consts: [[1, "padding-2x", 3, "ngClass"], ["focusElement", ""], [1, "free-space-top-2x", "add"], ["type", "text", "placeholder", "board name", 1, "medium", "input-padding-x", 3, "keydown.enter"], ["addInput", ""], [1, "icon-left", "icon-Add-Circle", "x-large", 3, "click"], ["class", "blank", 3, "border-color", 4, "ngIf"], ["cdkDropList", "", 1, "free-space-top-x", 3, "cdkDropListDropped"], [4, "ngFor", "ngForOf"], [3, "focus"], [3, "Darken"], [1, "blank"], [1, "medium"], [1, "medium", "free-space-top-x"], [1, "meduim", "free-space-top-x"], ["class", "free-space-top-2x date", 3, "color", 4, "ngIf"], ["cdkDragPreviewContainer", "parent", "cdkDrag", "", "cdkDragLockAxis", "x", 1, "list-item", "padding-x", "option-info", "option-delete", 3, "ngClass", "cdkDragStartDelay", "cdkDragData"], ["type", "checkbox", 3, "id"], ["cb", ""], ["id", "self"], [3, "for", 4, "ngIf"], ["id", "edit"], ["type", "text", 3, "value", "keydown.enter"], ["eI", ""], [3, "for"], [1, "icon", "right-align", "icon-OK", "large", 3, "click"], [3, "routerLink"], [1, "free-space-top-x"], [1, "free-space-top-2x", "horizontal-list"], [1, "icon", "icon-Tasks-List", "medium"], [1, "icon", "icon-Employees-Count", "medium"], [1, "icon", "icon-Comment", "medium"], [1, "free-space-top-2x", "date"], [1, "icon", "right-align", "icon-Edit", "large", 3, "click"]], template: function BoardsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function BoardsComponent_Template_input_keydown_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return ctx.AddBoard(_r1.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoardsComponent_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return ctx.AddBoard(_r1.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BoardsComponent_div_6_Template, 9, 10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function BoardsComponent_Template_ul_cdkDropListDropped_7_listener($event) { return ctx.Drop($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BoardsComponent_ng_container_8_Template, 30, 46, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-nav-board", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function BoardsComponent_Template_app_nav_board_focus_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return ctx.Focus(_r0, _r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "app-darken", 10);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.selected ? "not-mouse-event" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("border-bottom-color", ctx.theme.Color30Bold)("color", ctx.theme.Color10Bold);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx.theme.Color10Fade);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.boards.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.boards);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Darken", false);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nav_board_nav_board_component__WEBPACK_IMPORTED_MODULE_11__["NavBoardComponent"], _darken_darken_component__WEBPACK_IMPORTED_MODULE_12__["DarkenComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["CdkDrag"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_Pipes_caption_pipe__WEBPACK_IMPORTED_MODULE_13__["CaptionPipe"], _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_14__["CountControlPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  display: inline-block;\n}\n\n@media only screen and (max-device-width: 900px) {\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n    margin-left: 1rem;\n    width: 12rem;\n    font-size: 2rem;\n  }\n\n  .add[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBRko7O0FBZUU7RUFFRTtJQUVFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQWRKOztFQWlCRTtJQUVFLHNCQUFBO0VBZko7QUFDRiIsImZpbGUiOiJib2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gR2xvYmFsIFN0eWxlc1xyXG5cclxuICBuYXYgYXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuLy8gRW5kIEdsb2JhbCBTdHlsZXNcclxuXHJcbi8vIFRoZW1lIERlcGVuZGVuY3kgU3R5bGVzXHJcblxyXG5cclxuXHJcbi8vIEVuZCBUaGVtZSBEZXBlbmRlY3kgU3R5bGVzXHJcblxyXG4vLyBTY3JlZW4gRGVwZW5kZWN5IFN0eWxlc1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC1kZXZpY2Utd2lkdGg6OTAwcHgpXHJcbiAge1xyXG4gICAgbmF2IGFcclxuICAgIHtcclxuICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZCA+IGlcclxuICAgIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4vLyBFbmQgU2NyZWVuIERlcGVuZGVjeSBTdHlsZXNcclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
    return BoardsComponent;
}());



/***/ }),

/***/ "mBbh":
/*!*******************************************************!*\
  !*** ./src/app/Servicies/theme-controller.service.ts ***!
  \*******************************************************/
/*! exports provided: ThemeControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeControllerService", function() { return ThemeControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var ThemeControllerService = /** @class */ (function () {
    function ThemeControllerService() {
        //colors are 5166b0 dae0f1 8160a9
        // 66: fade b3: normal
        this.theme = {
            Color60Bold: "#dae0f1",
            Color60Normal: "#dae0f1",
            Color60Fade: "#dae0f1",
            Color30Bold: "#8160a9",
            Color30Normal: "#8160a9",
            Color30Fade: "#8160a9",
            Color10Bold: "#5166b0",
            Color10Normal: "#5166b0",
            Color10Fade: "#5166b0"
        };
    }
    ThemeControllerService.prototype.GetTheme = function () {
        return this.theme;
    };
    ThemeControllerService.ɵfac = function ThemeControllerService_Factory(t) { return new (t || ThemeControllerService)(); };
    ThemeControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeControllerService, factory: ThemeControllerService.ɵfac, providedIn: 'root' });
    return ThemeControllerService;
}());



/***/ }),

/***/ "mXeI":
/*!*********************************************!*\
  !*** ./src/app/Pipes/count-control.pipe.ts ***!
  \*********************************************/
/*! exports provided: CountControlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountControlPipe", function() { return CountControlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var CountControlPipe = /** @class */ (function () {
    function CountControlPipe() {
    }
    CountControlPipe.prototype.transform = function (value) {
        return Number.parseInt(value) > 99 ? '+99' : value;
    };
    CountControlPipe.ɵfac = function CountControlPipe_Factory(t) { return new (t || CountControlPipe)(); };
    CountControlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "CountControl", type: CountControlPipe, pure: true });
    return CountControlPipe;
}());



/***/ }),

/***/ "makw":
/*!*******************************************************!*\
  !*** ./src/app/components/darken/darken.component.ts ***!
  \*******************************************************/
/*! exports provided: DarkenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkenComponent", function() { return DarkenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


var _c0 = function (a0) { return { "active": a0 }; };
var DarkenComponent = /** @class */ (function () {
    function DarkenComponent() {
        this.Darken = false;
    }
    DarkenComponent.prototype.ngOnInit = function () {
    };
    DarkenComponent.ɵfac = function DarkenComponent_Factory(t) { return new (t || DarkenComponent)(); };
    DarkenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DarkenComponent, selectors: [["app-darken"]], inputs: { Darken: "Darken" }, decls: 1, vars: 3, consts: [[1, "darken", 3, "ngClass"]], template: function DarkenComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.Darken == true));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".darken[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 2;\n  height: 100%;\n  pointer-events: none;\n  left: 0;\n  top: 0;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXJrZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQUFGOztBQUdBO0VBRUUsb0NBQUE7QUFERiIsImZpbGUiOiJkYXJrZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFya2VuXHJcbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5hY3RpdmVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMzAlKTtcclxufVxyXG4iXX0= */"] });
    return DarkenComponent;
}());



/***/ }),

/***/ "mbtQ":
/*!*********************************************************************!*\
  !*** ./src/app/components/nav-sub-tasks/nav-sub-tasks.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavSubTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSubTasksComponent", function() { return NavSubTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/count-control.pipe */ "mXeI");






var NavSubTasksComponent = /** @class */ (function () {
    function NavSubTasksComponent(loc, themeService, router) {
        this.loc = loc;
        this.themeService = themeService;
        this.router = router;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.parentId = '';
        this.commentCount = '0';
        this.theme = this.themeService.GetTheme();
    }
    NavSubTasksComponent.prototype.ngOnInit = function () {
    };
    NavSubTasksComponent.prototype.Back = function () {
        this.loc.back();
    };
    NavSubTasksComponent.prototype.GoToHomePage = function () {
        this.router.navigateByUrl('/');
    };
    NavSubTasksComponent.prototype.Add = function () {
        this.add.emit();
    };
    NavSubTasksComponent.ɵfac = function NavSubTasksComponent_Factory(t) { return new (t || NavSubTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    NavSubTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavSubTasksComponent, selectors: [["app-nav-sub-tasks"]], inputs: { parentId: "parentId", commentCount: "commentCount" }, outputs: { add: "add" }, decls: 12, vars: 16, consts: [[1, "nav-bar"], [1, "icon-Back", "x-large", 3, "click"], [1, "icon-Home", "x-large", 3, "click"], [1, "icon-Add", "x-large", 3, "click"], [1, "icon-Comment", "x-large", 3, "routerLink"]], template: function NavSubTasksComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSubTasksComponent_Template_i_click_2_listener() { return ctx.Back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSubTasksComponent_Template_i_click_4_listener() { return ctx.GoToHomePage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavSubTasksComponent_Template_i_click_6_listener() { return ctx.Add(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "CountControl");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold)("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/comments/" + ctx.parentId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, ctx.commentCount));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_Pipes_count_control_pipe__WEBPACK_IMPORTED_MODULE_4__["CountControlPipe"]], styles: ["li[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nli[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -1.3rem;\n  top: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYtc3ViLXRhc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJuYXYtc3ViLXRhc2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5saSA+IHNwYW5cclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTEuM3JlbTtcclxuICB0b3A6IC0wLjVyZW07XHJcbn1cclxuIl19 */"] });
    return NavSubTasksComponent;
}());



/***/ }),

/***/ "oTeM":
/*!*************************************************************************!*\
  !*** ./src/app/components/system-messages/system-messages.component.ts ***!
  \*************************************************************************/
/*! exports provided: SystemMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMessagesComponent", function() { return SystemMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Enums/UserActions */ "lXr8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Servicies/task-plus-plus.api.service */ "Uziw");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Servicies/cache-manager.service */ "udFI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nav_system_messages_nav_system_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nav-system-messages/nav-system-messages.component */ "M4t0");








function SystemMessagesComponent_ng_container_3_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r3.theme.Color10Fade);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 3, item_r2.CreationAt, "MMM d , y"));
} }
function SystemMessagesComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SystemMessagesComponent_ng_container_3_h4_1_Template, 3, 6, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.CanShow(item_r2.CreationAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r1.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.theme.Color30Bold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.Content, " ");
} }
var SystemMessagesComponent = /** @class */ (function () {
    function SystemMessagesComponent(API, themeService, cacheManager) {
        this.API = API;
        this.themeService = themeService;
        this.cacheManager = cacheManager;
        this.getMessagesEntity = { AccessToken: '' };
        this.messages = [];
        this.dates = [];
        this.theme = this.themeService.GetTheme();
    }
    SystemMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMessagesEntity.AccessToken = this.cacheManager.GetLoginDetails();
        this.API.Post(src_app_Enums_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].GetSystemMessages, this.getMessagesEntity).then(function (data) {
            _this.messages = data;
        });
    };
    SystemMessagesComponent.prototype.CanShow = function (d) {
        var e_1, _a;
        var result = true;
        if (this.dates.length != this.messages.length) {
            var spliteDate = d.split('T');
            var yearAndMonth = spliteDate[0];
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.dates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.Date == d) {
                        result = true;
                    }
                    else {
                        var itemSpliteDate = item.Date.split('T');
                        var itemYearAndMonth = itemSpliteDate[0];
                        if (itemYearAndMonth == yearAndMonth) {
                            result = false;
                            break;
                        }
                        else {
                            result = true;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var Exists_1 = false;
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    Exists_1 = true;
                }
            });
            if (!Exists_1) {
                this.dates.push({ Date: d, LastStatus: result });
            }
        }
        else {
            this.dates.forEach(function (item) {
                if (item.Date == d) {
                    result = item.LastStatus;
                }
            });
        }
        return result;
    };
    SystemMessagesComponent.ɵfac = function SystemMessagesComponent_Factory(t) { return new (t || SystemMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_task_plus_plus_api_service__WEBPACK_IMPORTED_MODULE_3__["TaskPlusPlusAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_4__["ThemeControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Servicies_cache_manager_service__WEBPACK_IMPORTED_MODULE_5__["CacheManagerService"])); };
    SystemMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SystemMessagesComponent, selectors: [["app-system-messages"]], decls: 5, vars: 1, consts: [[1, "padding-2x"], ["focusElement", ""], [1, "free-space-top-x"], [4, "ngFor", "ngForOf"], ["class", "date free-space-top-2x", 3, "color", 4, "ngIf"], [1, "list-item", "padding-x", "message"], [1, "free-space-top-x", "medium"], [1, "date", "free-space-top-2x"]], template: function SystemMessagesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SystemMessagesComponent_ng_container_3_Template, 7, 8, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-nav-system-messages");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.messages);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _nav_system_messages_nav_system_messages_component__WEBPACK_IMPORTED_MODULE_7__["NavSystemMessagesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".date[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 95%;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n\n@media only screen and (max-device-width: 900px) {\n  .date[_ngcontent-%COMP%] {\n    padding: 0.3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzeXN0ZW0tbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlFO0VBQ0U7SUFFRSxlQUFBO0VBRko7QUFDRiIsImZpbGUiOiJzeXN0ZW0tbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuZGF0ZVxyXG4gIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2UgcHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtZGV2aWNlLXdpZHRoOjkwMHB4KXtcclxuICAgIC5kYXRlXHJcbiAgICB7XHJcbiAgICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"] });
    return SystemMessagesComponent;
}());



/***/ }),

/***/ "qB2f":
/*!**********************************************!*\
  !*** ./src/app/Dictionaries/Dictionaries.ts ***!
  \**********************************************/
/*! exports provided: Errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
var Errors = {
    "NotOwner": "You are not the owner.",
    "NotWriteTask": "You are not allowed to create task.",
    "NotWriteComment": "You are not allowed to write comment.",
    "Using": "You are using this.",
};


/***/ }),

/***/ "qQYQ":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 1, vars: 0, consts: [["mode", "query"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 0);
        } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]], styles: ["progress[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHJvZ3Jlc3N7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
    return LoadingComponent;
}());



/***/ }),

/***/ "udFI":
/*!****************************************************!*\
  !*** ./src/app/Servicies/cache-manager.service.ts ***!
  \****************************************************/
/*! exports provided: CacheManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheManagerService", function() { return CacheManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var CacheManagerService = /** @class */ (function () {
    function CacheManagerService() {
        this.accessCode = "";
    }
    CacheManagerService.prototype.Set = function (key, value) {
        try {
            localStorage.setItem(key, value);
        }
        catch (_a) {
            var LoginDetails = localStorage.getItem('LD');
            localStorage.clear();
            if (LoginDetails != null)
                localStorage.setItem('LD', LoginDetails);
            localStorage.setItem(key, value);
        }
    };
    CacheManagerService.prototype.SetLoginDetails = function (value) {
        this.accessCode = value;
        try {
            localStorage.setItem('LD', value);
        }
        catch (_a) {
            localStorage.clear();
            localStorage.setItem('LD', value);
        }
    };
    CacheManagerService.prototype.ResetLoginDetails = function () {
        localStorage.clear();
        this.accessCode = "";
    };
    CacheManagerService.prototype.GetLoginDetails = function () {
        if (this.accessCode == "") {
            this.accessCode = localStorage.getItem('LD');
        }
        if (this.accessCode == null)
            this.accessCode = "";
        return this.accessCode;
    };
    CacheManagerService.prototype.Get = function (key) {
        var data = localStorage.getItem(key);
        if (data != null)
            return data;
        return '[]';
    };
    CacheManagerService.ɵfac = function CacheManagerService_Factory(t) { return new (t || CacheManagerService)(); };
    CacheManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheManagerService, factory: CacheManagerService.ɵfac, providedIn: 'root' });
    return CacheManagerService;
}());



/***/ }),

/***/ "vEBM":
/*!********************************!*\
  !*** ./src/app/route-reuse.ts ***!
  \********************************/
/*! exports provided: CustomReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function() { return CustomReuseStrategy; });
var CustomReuseStrategy = /** @class */ (function () {
    function CustomReuseStrategy() {
    }
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        return false;
    };
    CustomReuseStrategy.prototype.store = function (route, handle) {
        return false;
    };
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        return false;
    };
    CustomReuseStrategy.prototype.retrieve = function (route) {
        return false;
    };
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return false;
    };
    return CustomReuseStrategy;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_system_messages_system_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/system-messages/system-messages.component */ "oTeM");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_board_info_board_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board-info/board-info.component */ "NQ6e");
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-list/contact-list.component */ "79cI");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/setting/setting.component */ "KxqT");
/* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/comments/comments.component */ "OXCg");
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tasks/tasks.component */ "N+2n");
/* harmony import */ var _components_boards_boards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/boards/boards.component */ "lkFM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_login_successful_login_successful_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login-successful/login-successful.component */ "Z2fp");
/* harmony import */ var _components_sub_tasks_sub_tasks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sub-tasks/sub-tasks.component */ "SQEy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














var routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'success', component: _components_login_successful_login_successful_component__WEBPACK_IMPORTED_MODULE_10__["LoginSuccessfulComponent"], data: { animationState: 'Success' } },
    { path: 'boards', component: _components_boards_boards_component__WEBPACK_IMPORTED_MODULE_7__["BoardsComponent"], data: { animationState: 'Board' } },
    { path: 'task/:parentid', component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"], data: { animationState: 'Task' } },
    { path: 'subtask/:parentid', component: _components_sub_tasks_sub_tasks_component__WEBPACK_IMPORTED_MODULE_11__["SubTasksComponent"], data: { animationState: 'SubTask' } },
    { path: 'comments/:parentid', component: _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_5__["CommentsComponent"], data: { animationState: 'Comment' } },
    { path: 'setting', component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_4__["SettingComponent"], data: { animationState: 'Setting' } },
    { path: 'contactlist', component: _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__["ContactListComponent"], data: { animationState: 'ContactList' } },
    { path: 'boardinfo/:parentid', component: _components_board_info_board_info_component__WEBPACK_IMPORTED_MODULE_2__["BoardInfoComponent"], data: { animationState: 'BoardInfo' } },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], data: { animationState: 'Profile' } },
    { path: 'messages', component: _components_system_messages_system_messages_component__WEBPACK_IMPORTED_MODULE_0__["SystemMessagesComponent"], data: { animationState: 'Messages' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();


/***/ }),

/***/ "wBuZ":
/*!*************************************************************!*\
  !*** ./src/app/components/error-box/error-box.component.ts ***!
  \*************************************************************/
/*! exports provided: ErrorBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoxComponent", function() { return ErrorBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


var _c0 = function (a0) { return { "active": a0 }; };
var ErrorBoxComponent = /** @class */ (function () {
    function ErrorBoxComponent() {
        this.Message = "";
    }
    ErrorBoxComponent.prototype.ngOnInit = function () {
    };
    ErrorBoxComponent.ɵfac = function ErrorBoxComponent_Factory(t) { return new (t || ErrorBoxComponent)(); };
    ErrorBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorBoxComponent, selectors: [["app-error-box"]], inputs: { Message: "Message" }, decls: 3, vars: 4, consts: [[1, "box", 3, "ngClass"], [1, "medium"]], template: function ErrorBoxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.Message != ""));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Message);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30%;\n  z-index: 9;\n  left: 50%;\n  background-color: #f00;\n  border-radius: 1rem;\n  padding: 0.5rem 1rem;\n  color: #fff;\n  transform: translateX(-50%);\n  pointer-events: none;\n  opacity: 0;\n  max-width: 70%;\n}\n\n.box[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.active[_ngcontent-%COMP%] {\n  transition: opacity 0.3s ease-out;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlcnJvci1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBRUUsa0JBQUE7QUFBRjs7QUFHQTtFQUVFLGlDQUFBO0VBQ0EsVUFBQTtBQURGIiwiZmlsZSI6ImVycm9yLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzAlO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmJveCA+IHBcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZVxyXG57XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */"] });
    return ErrorBoxComponent;
}());



/***/ }),

/***/ "yvKA":
/*!************************************************!*\
  !*** ./src/app/Directives/select.directive.ts ***!
  \************************************************/
/*! exports provided: SelectDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDirective", function() { return SelectDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var SelectDirective = /** @class */ (function () {
    function SelectDirective(elRef, render) {
        this.elRef = elRef;
        this.render = render;
        this.color = "#5166b0b3";
        this.mainColor = "#5166b0b3";
    }
    SelectDirective.prototype.ngDoCheck = function () {
        //console.log(this.elRef.nativeElement.getAttribute('ng-reflect-model').toEqual(true))
        if (this.elRef.nativeElement.checked)
            if (this.elRef.nativeElement.nextSibling.getAttribute('style') != null) {
                //this.render.removeStyle(this.elRef.nativeElement.nextSibling,'color');
                this.render.setStyle(this.elRef.nativeElement.nextSibling, 'color', this.color);
            }
        if (!this.elRef.nativeElement.checked) {
            this.render.setStyle(this.elRef.nativeElement.nextSibling, 'color', this.mainColor);
        }
    };
    SelectDirective.ɵfac = function SelectDirective_Factory(t) { return new (t || SelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    SelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SelectDirective, selectors: [["", "appSelect", ""]], inputs: { color: "color", mainColor: "mainColor" } });
    return SelectDirective;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zjf+":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-tasks/nav-tasks.component.ts ***!
  \*************************************************************/
/*! exports provided: NavTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTasksComponent", function() { return NavTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Servicies/theme-controller.service */ "mBbh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





var NavTasksComponent = /** @class */ (function () {
    function NavTasksComponent(loc, themeService) {
        this.loc = loc;
        this.themeService = themeService;
        this.parentId = '';
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.theme = this.themeService.GetTheme();
    }
    NavTasksComponent.prototype.ngOnInit = function () {
    };
    NavTasksComponent.prototype.Back = function () {
        this.loc.back();
    };
    NavTasksComponent.prototype.Add = function () {
        this.add.emit();
    };
    NavTasksComponent.ɵfac = function NavTasksComponent_Factory(t) { return new (t || NavTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Servicies_theme_controller_service__WEBPACK_IMPORTED_MODULE_2__["ThemeControllerService"])); };
    NavTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavTasksComponent, selectors: [["app-nav-tasks"]], inputs: { parentId: "parentId" }, outputs: { add: "add" }, decls: 7, vars: 11, consts: [[1, "nav-bar"], [1, "icon-Back", "x-large", 3, "click"], [1, "icon-Add", "x-large", 3, "click"], [1, "icon-Setting", "x-large", 3, "routerLink"]], template: function NavTasksComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavTasksComponent_Template_i_click_2_listener() { return ctx.Back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavTasksComponent_Template_i_click_4_listener() { return ctx.Add(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.theme.Color60Bold)("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.theme.Color10Normal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/boardinfo/" + ctx.parentId);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtdGFza3MuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NavTasksComponent;
}());



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map