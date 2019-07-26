(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <h1 class=\"display-4 text-center\">Commerce Manager</h1>\n  <h3><a [routerLink]=\"['/']\" style=\"float: right;\" >Home</a></h3>\n\n\n\n\n  <router-outlet></router-outlet>\n</div> \n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit/edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3>Update Product</h3>\n    \n\n    <form (submit)=\"onSubmit()\" name=\"myForm\">\n        <div class=\"form-group\">\n            <label for=\"\">Name </label>\n            <p class=\"small text-danger\" *ngIf =\"name.errors  && !name.pristine\" >Must be 3 characters long</p>\n            <input type=\"text\" class=\"form-control w-50\" name=\"editProd.name\" [(ngModel)]=\"editProd.name\" value=\"{{editProd.name}}\" required minlength= \"3\" #name=\"ngModel\">\n            <p class=\"small text-danger\">{{err?.name?.message}}</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">Qty</label>\n            <p class=\"small text-danger\" *ngIf =\"qty.errors  && !qty.pristine\" >Product must be greater than or equal to 0</p>\n            <input type=\"text\" class=\"form-control w-50\" name=\"editProd.qty\" [(ngModel)]=\"editProd.qty\" value=\"{{editProd.qty}}\" required min= \"0\"  #qty=\"ngModel\">\n            <p class=\"small text-danger\">{{err?.qty?.message}}</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">Price</label>\n            <p class=\"small text-danger\" *ngIf =\"price.errors  && !price.pristine\" >Price must be greater than or equal to 0</p>\n            <input type=\"text\" class=\"form-control w-50\" name=\"editProd.price\" [(ngModel)]=\"editProd.price\" value=\"{{editProd.price}}\" required min= \"0\" #price=\"ngModel\">\n            <p class=\"small text-danger\">{{err?.price?.message}}</p>\n        </div>\n        \n        <button *ngIf =\"!name.errors && !qty.errors && !price.errors\"  [routerLink] = \"['']\" class=\"btn btn-primary btn-sm\" type=\"submit\"  >Add Product</button>\n        <button disabled *ngIf =\"name.errors || qty.errors || price.errors\" [routerLink] = \"['']\" style=\"color:grey\" class=\"btn btn-primary btn-sm\" type=\"submit\"  >Add Product</button>\n\n        <a   class=\"btn btn-danger btn-sm text-white \" [routerLink] =\"['pets/edit', editProd._id]\" (click)=\"exit()\" style=\"margin-left: 15px;\">reset</a>\n    \n    </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Product List</h1>\n<a class=\"nav-link\" [routerLink] = \"['pets/new']\" > <button class=\"navigate btn btn-warning\">Add new product</button></a>\n\n\n\n\n<table class=\"table table-striped\" *ngIf=\"pets\">\n    <thead >\n      <tr>\n        <th scope=\"col\">id</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Qty </th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let prod of pets\">\n      <tr>\n        <td>{{prod.id}}</td>\n        <td>{{prod.name}}</td>\n        <td>{{prod.qty}}</td>\n        <td>${{prod.price}}</td>\n\n        <td>               \n            <a [routerLink] = \"['pets/edit', prod._id]\" class=\"btn btn-primary btn-sm\" >Edit</a>\n            <a [routerLink] = \"['pets/show', prod._id]\" class=\"btn btn-danger btn-sm text-white\" style=\"margin-left: 15px;\">Details</a>\n\n        </td>\n      </tr>\n\n    </tbody>\n  </table>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new/new.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new/new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h1>New Product</h1>\n\n<!-- <p class=\"small text-danger\">{{err?.name?.message}}</p> -->\n\n\n\n<form (submit)=\"onSubmit()\" name=\"myForm\" >\n    <div class=\"form-group\">\n        <label for=\"\"> Name</label>\n        <p class=\"small text-danger\" *ngIf =\"name.errors  && !name.pristine\" >Must be 3 characters long</p>\n        <input type=\"text\" class=\"form-control w-50\" name=\"newProd.name\" [(ngModel)]=\"newProd.name\" required minlength= \"3\" #name=\"ngModel\">\n        <p class=\"small text-danger\">{{err?.name?.message}}</p>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"\">Qty</label>\n        <p class=\"small text-danger\"  *ngIf =\"qty.errors  \" >Product must be greater than or equal to 0\"</p>\n        <input type=\"text\" class=\"form-control w-50\" name=\"newProd.qty\" [(ngModel)]=\"newProd.qty\" required min= \"0\" #qty=\"ngModel\">\n        <p class=\"small text-danger\">{{err?.qty?.message}}</p>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"\">Price</label>\n        <p class=\"small text-danger\" *ngIf =\"price.errors  \" >Price must be greater than or equal to 0\"</p>\n        <input type=\"text\" class=\"form-control w-50\" name=\"newProd.price\" [(ngModel)]=\"newProd.price\" required min= \"0\" #price=\"ngModel\">\n        <p class=\"small text-danger\">{{err?.price?.message}}</p>\n    </div>\n\n\n\n    <button *ngIf =\"!name.errors && !qty.errors && !price.errors\" class=\"btn btn-primary btn-sm\" type=\"submit\"  >Add Product</button>\n    <button disabled *ngIf =\"name.errors || qty.errors || price.errors\" style=\"color:grey\" class=\"btn btn-primary btn-sm\" type=\"submit\"  >Add Product</button>\n    <a   class=\"btn btn-danger btn-sm text-white \" [routerLink] = \"['']\" style=\"margin-left: 15px;\">Cancel</a>\n\n\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/show/show.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/show/show.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h3>Product Details</h3>\n\n\n<h5 *ngIf=\"showProd.qty != '0' \" style=\"text-align:center; color:red;\">TO DELETE QTY MUST BE 0!!!</h5>\n\n<table class=\"table table-striped\" >\n        <thead >\n          <tr>\n            <th scope=\"col\">Name:</th>\n            <th scope=\"col\">Qty: </th>\n            <th scope=\"col\">Price:</th>\n            <th scope=\"col\">Actions:</th>\n\n\n          </tr>\n        </thead>\n        <tbody >\n          <tr>\n            <td>{{showProd?.name}}</td>\n            <td>{{showProd?.qty}}</td>\n            <td>${{showProd?.price}}</td>\n\n            <td>               \n              <!-- <button *ngIf=\"!isLiked\" (click)=\"likeCount(showProd._id)\" class=\"btn btn-warning\">Back</button>\n              <button *ngIf=\"isLiked\" class=\"btn btn-secondary\">Back</button> -->\n              <a   class=\"btn btn-warning text-white \" [routerLink] = \"['']\" style=\"margin-left: 15px;\">Back</a>\n              <button (click)=\"onDelete(showProd._id)\" class=\"btn btn-danger  text-white\" [disabled]=\"showProd.qty != '0' \"  style=\"margin-left: 15px;\" >Delete</button>\n            </td>\n          </tr>\n    \n        </tbody>\n      </table>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");







const routes = [
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'pets/show/:id', component: _show_show_component__WEBPACK_IMPORTED_MODULE_4__["showComponent"] },
    { path: 'pets/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_6__["NewComponent"] },
    { path: 'pets/edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'sample-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
            _new_new_component__WEBPACK_IMPORTED_MODULE_9__["NewComponent"],
            _show_show_component__WEBPACK_IMPORTED_MODULE_10__["showComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EditComponent = class EditComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this._router.params.subscribe(params => {
            console.log(params);
            this._httpService.getOne(params['id']).subscribe(data => {
                console.log(data);
                this.editProd = data['pets'];
            });
        });
    }
    onSubmit() {
        this._httpService.update(this.editProd._id, this.editProd).subscribe(data => {
            if (data['pets']) {
                this._route.navigate(['/']);
            }
            else {
                this.err = data['error']['errors'];
                console.log(data);
            }
        });
    }
    exit() {
        window.location.reload();
    }
};
EditComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html"),
        styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



let HomeComponent = class HomeComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    ngOnInit() {
        this._httpService.getAll().subscribe(data => {
            this.pets = data['pets'];
        });
    }
    onDelete(id) {
        this._httpService.delete(id).subscribe(data => {
            this.ngOnInit();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getAll() {
        return this._http.get('/api/pets');
    }
    getOne(id) {
        return this._http.get(`/api/pets/${id}`);
    }
    create(prod) {
        return this._http.post('/api/pets', prod);
    }
    update(id, prod) {
        return this._http.put(`/api/pets/${id}`, prod);
    }
    delete(id) {
        return this._http.delete(`/api/pets/${id}`);
    }
    addLike(id, likes) {
        return this._http.put(`/api/pets/${id}/like`, likes);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewComponent = class NewComponent {
    constructor(_httpService, _route) {
        this._httpService = _httpService;
        this._route = _route;
        this.newProd = { id: "", name: "", qty: "", price: "" };
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log('hitting create');
        this._httpService.create(this.newProd).subscribe(data => {
            if (data['pets']) {
                this._route.navigate(['/']);
            }
            else {
                this.err = data['error']['errors'];
                console.log(data);
            }
        });
    }
};
NewComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: __webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/index.js!./src/app/new/new.component.html"),
        styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
    })
], NewComponent);



/***/ }),

/***/ "./src/app/show/show.component.css":
/*!*****************************************!*\
  !*** ./src/app/show/show.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3cvc2hvdy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: showComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showComponent", function() { return showComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let showComponent = class showComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.likes = 0;
        this.isLiked = false;
    }
    ngOnInit() {
        this._router.params.subscribe(params => {
            console.log(params);
            this._httpService.getOne(params['id']).subscribe(data => {
                console.log(data);
                this.showProd = data['pets'];
            });
        });
    }
    onDelete(id) {
        this._httpService.delete(id).subscribe(data => {
            this.ngOnInit();
            this._route.navigate(['/']);
        });
    }
    likeCount(id, likes) {
        this.likes = this.showProd.likes + 1;
        this.isLiked = true;
        let observable = this._httpService.addLike(this.showProd._id, { likes: this.likes });
        observable.subscribe(data => {
            // this.likes = data;
            this.ngOnInit();
        });
    }
};
showComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
showComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show',
        template: __webpack_require__(/*! raw-loader!./show.component.html */ "./node_modules/raw-loader/index.js!./src/app/show/show.component.html"),
        styles: [__webpack_require__(/*! ./show.component.css */ "./src/app/show/show.component.css")]
    })
], showComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
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
const environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chachi/Desktop/ng/mean_exam/sample-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map