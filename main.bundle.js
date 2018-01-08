webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <!--     <nb-card-header></nb-card-header> -->\n  <nb-card-body style=\" margin: auto; \">\n    <div class=\"row\">\n      <div class=\"example-container\" *ngFor=\"let hb of settings\">\n        <div class=\"container-btn\" style=\"padding-right: 7%;\">\n          <button class=\"btn {{ hb.class }} btn-demo\" (click)=\"Gerar(hb)\">{{ hb.NameButton }}</button>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/Components/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-default) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host-context(.nb-theme-default) .none::before, :host-context(.nb-theme-default) .none::after {\n    position: absolute;\n    content: '';\n    background: #dadfe6; }\n  :host-context(.nb-theme-default) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-default) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-default) .shadow {\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .primary-container .gradient {\n  background-image: linear-gradient(to right, #b57fff, #8a7fff); }\n\n:host-context(.nb-theme-default) .primary-container .glow {\n  box-shadow: 0 0 0 0 #9f7fff; }\n\n:host-context(.nb-theme-default) .primary-container .bevel {\n  box-shadow: 0 0 0 0 #896ddb; }\n\n:host-context(.nb-theme-default) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-default) .warning-container .glow {\n  box-shadow: 0 0 0 0 #ffb600; }\n\n:host-context(.nb-theme-default) .warning-container .bevel {\n  box-shadow: 0 0 0 0 #db9d00; }\n\n:host-context(.nb-theme-default) .success-container .gradient {\n  background-image: linear-gradient(to right, #40dcb2, #40dc7e); }\n\n:host-context(.nb-theme-default) .success-container .glow {\n  box-shadow: 0 0 0 0 #40dc98; }\n\n:host-context(.nb-theme-default) .success-container .bevel {\n  box-shadow: 0 0 0 0 #37bd83; }\n\n:host-context(.nb-theme-default) .info-container .gradient {\n  background-image: linear-gradient(to right, #4cc4ff, #4ca6ff); }\n\n:host-context(.nb-theme-default) .info-container .glow {\n  box-shadow: 0 0 0 0 #4cb5ff; }\n\n:host-context(.nb-theme-default) .info-container .bevel {\n  box-shadow: 0 0 0 0 #419cdb; }\n\n:host-context(.nb-theme-default) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff4ca6, #ff4c6a); }\n\n:host-context(.nb-theme-default) .danger-container .glow {\n  box-shadow: 0 0 0 0 #ff4c88; }\n\n:host-context(.nb-theme-default) .danger-container .bevel {\n  box-shadow: 0 0 0 0 #db4175; }\n\n:host-context(.nb-theme-default) .secondary-container .border {\n  border: 2px solid #dadfe6; }\n\n:host-context(.nb-theme-default) .secondary-container .glow {\n  box-shadow: 0 0 0 0 #dadde6; }\n\n:host-context(.nb-theme-default) .secondary-container .bevel {\n  box-shadow: 0 0 0 0 #bbbec6; }\n\n:host-context(.nb-theme-default) .example-container {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-cosmic) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host-context(.nb-theme-cosmic) .none::before, :host-context(.nb-theme-cosmic) .none::after {\n    position: absolute;\n    content: '';\n    background: #342e73; }\n  :host-context(.nb-theme-cosmic) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-cosmic) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-cosmic) .shadow {\n  box-shadow: 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n\n:host-context(.nb-theme-cosmic) .primary-container .gradient {\n  background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n\n:host-context(.nb-theme-cosmic) .primary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .primary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-cosmic) .warning-container .glow {\n  box-shadow: 0 2px 8px 0 #ffb600; }\n\n:host-context(.nb-theme-cosmic) .warning-container .bevel {\n  box-shadow: 0 3px 0 0 #db9d00; }\n\n:host-context(.nb-theme-cosmic) .success-container .gradient {\n  background-image: linear-gradient(to right, #00d9bf, #00d977); }\n\n:host-context(.nb-theme-cosmic) .success-container .glow {\n  box-shadow: 0 2px 8px 0 #00d99b; }\n\n:host-context(.nb-theme-cosmic) .success-container .bevel {\n  box-shadow: 0 3px 0 0 #00bb85; }\n\n:host-context(.nb-theme-cosmic) .info-container .gradient {\n  background-image: linear-gradient(to right, #00b3ff, #0088ff); }\n\n:host-context(.nb-theme-cosmic) .info-container .glow {\n  box-shadow: 0 2px 8px 0 #009dff; }\n\n:host-context(.nb-theme-cosmic) .info-container .bevel {\n  box-shadow: 0 3px 0 0 #0087db; }\n\n:host-context(.nb-theme-cosmic) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff38ac, #ff386a); }\n\n:host-context(.nb-theme-cosmic) .danger-container .glow {\n  box-shadow: 0 2px 8px 0 #ff388b; }\n\n:host-context(.nb-theme-cosmic) .danger-container .bevel {\n  box-shadow: 0 3px 0 0 #db3078; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .border {\n  border: 2px solid #7659ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .example-container {\n  margin-bottom: 1.5rem; }\n\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-default) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host-context(.nb-theme-default) .none::before, :host-context(.nb-theme-default) .none::after {\n    position: absolute;\n    content: '';\n    background: #dadfe6; }\n  :host-context(.nb-theme-default) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-default) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-default) .shadow {\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .primary-container .gradient {\n  background-image: linear-gradient(to right, #b57fff, #8a7fff); }\n\n:host-context(.nb-theme-default) .primary-container .glow {\n  box-shadow: 0 0 0 0 #9f7fff; }\n\n:host-context(.nb-theme-default) .primary-container .bevel {\n  box-shadow: 0 0 0 0 #896ddb; }\n\n:host-context(.nb-theme-default) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-default) .warning-container .glow {\n  box-shadow: 0 0 0 0 #ffb600; }\n\n:host-context(.nb-theme-default) .warning-container .bevel {\n  box-shadow: 0 0 0 0 #db9d00; }\n\n:host-context(.nb-theme-default) .success-container .gradient {\n  background-image: linear-gradient(to right, #40dcb2, #40dc7e); }\n\n:host-context(.nb-theme-default) .success-container .glow {\n  box-shadow: 0 0 0 0 #40dc98; }\n\n:host-context(.nb-theme-default) .success-container .bevel {\n  box-shadow: 0 0 0 0 #37bd83; }\n\n:host-context(.nb-theme-default) .info-container .gradient {\n  background-image: linear-gradient(to right, #4cc4ff, #4ca6ff); }\n\n:host-context(.nb-theme-default) .info-container .glow {\n  box-shadow: 0 0 0 0 #4cb5ff; }\n\n:host-context(.nb-theme-default) .info-container .bevel {\n  box-shadow: 0 0 0 0 #419cdb; }\n\n:host-context(.nb-theme-default) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff4ca6, #ff4c6a); }\n\n:host-context(.nb-theme-default) .danger-container .glow {\n  box-shadow: 0 0 0 0 #ff4c88; }\n\n:host-context(.nb-theme-default) .danger-container .bevel {\n  box-shadow: 0 0 0 0 #db4175; }\n\n:host-context(.nb-theme-default) .secondary-container .border {\n  border: 2px solid #dadfe6; }\n\n:host-context(.nb-theme-default) .secondary-container .glow {\n  box-shadow: 0 0 0 0 #dadde6; }\n\n:host-context(.nb-theme-default) .secondary-container .bevel {\n  box-shadow: 0 0 0 0 #bbbec6; }\n\n:host-context(.nb-theme-default) .example-container {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-cosmic) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host-context(.nb-theme-cosmic) .none::before, :host-context(.nb-theme-cosmic) .none::after {\n    position: absolute;\n    content: '';\n    background: #342e73; }\n  :host-context(.nb-theme-cosmic) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-cosmic) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-cosmic) .shadow {\n  box-shadow: 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n\n:host-context(.nb-theme-cosmic) .primary-container .gradient {\n  background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n\n:host-context(.nb-theme-cosmic) .primary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .primary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-cosmic) .warning-container .glow {\n  box-shadow: 0 2px 8px 0 #ffb600; }\n\n:host-context(.nb-theme-cosmic) .warning-container .bevel {\n  box-shadow: 0 3px 0 0 #db9d00; }\n\n:host-context(.nb-theme-cosmic) .success-container .gradient {\n  background-image: linear-gradient(to right, #00d9bf, #00d977); }\n\n:host-context(.nb-theme-cosmic) .success-container .glow {\n  box-shadow: 0 2px 8px 0 #00d99b; }\n\n:host-context(.nb-theme-cosmic) .success-container .bevel {\n  box-shadow: 0 3px 0 0 #00bb85; }\n\n:host-context(.nb-theme-cosmic) .info-container .gradient {\n  background-image: linear-gradient(to right, #00b3ff, #0088ff); }\n\n:host-context(.nb-theme-cosmic) .info-container .glow {\n  box-shadow: 0 2px 8px 0 #009dff; }\n\n:host-context(.nb-theme-cosmic) .info-container .bevel {\n  box-shadow: 0 3px 0 0 #0087db; }\n\n:host-context(.nb-theme-cosmic) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff38ac, #ff386a); }\n\n:host-context(.nb-theme-cosmic) .danger-container .glow {\n  box-shadow: 0 2px 8px 0 #ff388b; }\n\n:host-context(.nb-theme-cosmic) .danger-container .bevel {\n  box-shadow: 0 3px 0 0 #db3078; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .border {\n  border: 2px solid #7659ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .example-container {\n  margin-bottom: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(themeService, router, cacheSrv) {
        var _this = this;
        this.themeService = themeService;
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.themeName = 'cosmic';
        this.callMethod = function () {
            this.cacheSrv.callComponentMethod();
        };
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent.prototype.init = function (colors) {
        this.settings = [{
                class: 'btn-hero-primary',
                container: 'primary-container',
                Destino: 'Grimorio',
                NameButton: 'Grimório',
                Name: 'Grimório: O Livro de Magias',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            }, {
                class: 'btn-hero-warning',
                container: 'warning-container',
                Destino: 'Reinos',
                NameButton: 'Reinos',
                Name: 'Os Reinos de Argeon',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.warning + ", 5deg)",
                },
            }, {
                class: 'btn-hero-success',
                container: 'success-container',
                Destino: 'Fichas de Usuario',
                NameButton: 'Jogadores',
                Name: 'Fichas dos Jogadores',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                    bevel: "shade(" + colors.success + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.success + ", 10deg)",
                },
            }, {
                class: 'btn-hero-info',
                container: 'info-container',
                Destino: 'Clans',
                NameButton: 'Clãs',
                Name: 'Clãs de Argeon',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                    bevel: "shade(" + colors.info + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.info + ", -5deg)",
                },
            }, {
                class: 'btn-hero-danger',
                container: 'danger-container',
                Destino: 'Potions',
                NameButton: 'Poções',
                Name: 'Poções Magicas',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                    bevel: "shade(" + colors.danger + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.danger + ", -10deg)",
                },
            }, {
                class: 'btn-hero-secondary',
                container: 'secondary-container',
                Destino: 'MenuPrincipal',
                NameButton: 'Menu',
                Name: 'Menu Principal',
                Execute: true,
                cosmic: {
                    border: colors.primary,
                    bevel: '#665ebd',
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: 'rgba (146, 141, 255, 1)',
                },
            }];
    };
    ButtonsComponent.prototype.Gerar = function (Botao) {
        this.cacheSrv.TituloObj.Grid = Botao.Name;
        this.cacheSrv.DatabaseObj.Destino = Botao.Destino;
        this.cacheSrv.DatabaseObj.Executar = Botao.Execute;
        this.cacheSrv.callComponentMethod();
        //this.router.navigateByUrl('/noticias')
    };
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buttons',
            template: __webpack_require__("../../../../../src/app/Components/buttons/buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["l" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Service_cache_service_service__["a" /* CacheServiceService */]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card class=\"angrytext\">\n  <nb-card-header>\n    {{titulo}}\n  </nb-card-header>\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"menuItems\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/Components/grid/grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/cache-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridComponent = /** @class */ (function () {
    //settings = {actions: {add: false,edit: false,delete: false }, columns: {}};
    // settings = {actions: {add: false,edit: false,delete: false }, columns: {}};
    function GridComponent(db, cacheSrv) {
        var _this = this;
        this.db = db;
        this.cacheSrv = cacheSrv;
        this.colunas = { Reinos: null, Jogadores: null, Magia: null, Clan: null, Potions: null, Menu: null };
        this.settings = {
            actions: { add: false, edit: false, delete: false }, columns: {
                nome: {
                    title: 'Nome:'
                },
            }
        };
        this.execute = false;
        this.titulo = 'Escolha uma Grid';
        this.settings = { actions: { add: false, edit: false, delete: false }, columns: {} };
        this.cacheSrv.componentMethodCalled$.subscribe(function () {
            _this.titulo = _this.cacheSrv.TituloObj.Grid;
            _this.execute = _this.cacheSrv.DatabaseObj.Executar;
            _this.destino = _this.cacheSrv.DatabaseObj.Destino;
            _this.getmenu();
            _this.getcolunas();
        });
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent.prototype.getmenu = function () {
        var _this = this;
        this.db.list(this.destino).valueChanges()
            .subscribe(function (s) {
            _this.menuItems = s;
            _this.execute = false;
        });
    };
    GridComponent.prototype.getcolunas = function () {
        if (this.cacheSrv.DatabaseObj.Destino == 'Reinos') {
            this.ColunaExibida = this.colunas.Reinos;
        }
        ;
        if (this.cacheSrv.DatabaseObj.Destino == 'Grimorio') {
            this.ColunaExibida = this.colunas.Magia;
        }
        ;
        if (this.cacheSrv.DatabaseObj.Destino == 'Fichas de Usuario') {
            this.ColunaExibida = this.colunas.Jogadores;
        }
        ;
        if (this.cacheSrv.DatabaseObj.Destino == 'Clans') {
            this.ColunaExibida = this.colunas.Clan;
        }
        ;
        if (this.cacheSrv.DatabaseObj.Destino == 'Potions') {
            this.ColunaExibida = this.colunas.Clan;
        }
        ;
        if (this.cacheSrv.DatabaseObj.Destino == 'MenuPrincipal') {
            this.ColunaExibida = this.colunas.Menu;
            console.log(this.cacheSrv.DatabaseObj.Destino);
        }
        ;
        this.colunas.Reinos = {
            nome: {
                title: 'Nome:'
            },
            habitantes: {
                title: 'Habitantes'
            },
            lider: {
                title: 'Lider'
            },
            populacao: {
                title: 'População'
            },
        };
        this.colunas.Magia = {
            nome: {
                title: 'Nome:'
            },
            observacao: {
                title: 'Observacao'
            }
        };
        this.colunas.Clan = {
            nome: {
                title: 'Nome:'
            },
            observacao: {
                title: 'Observacao'
            }
        };
        this.colunas.Jogadores = {
            NomePlayer: {
                title: 'Nome do Jogador:'
            },
            NomeChar: {
                title: 'Nome do Personagem'
            },
            Alcunha: {
                title: 'Alcunha do Personagem'
            },
            Reinos: {
                title: 'Reinos'
            },
            Clan: {
                title: 'Clã'
            },
            IdadePlayer: {
                title: 'Idade do jogador'
            },
            IdadeChar: {
                title: 'Idade do personagem'
            },
        };
        this.colunas.Potions = {
            nome: {
                title: 'Nome:'
            },
            observacao: {
                title: 'Observacao'
            }
        };
        this.colunas.Menu = {
            nome: {
                title: 'Nome:'
            }
        };
        this.settings = { actions: { add: false, edit: false, delete: false }, columns: this.ColunaExibida };
    };
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-grid',
            template: __webpack_require__("../../../../../src/app/Components/grid/grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__Service_cache_service_service__["a" /* CacheServiceService */]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n    <div class=\"logo-containter\">\n        <div class=\"logo\" (click)=\"goToHome()\">Argeon - WebApp</div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n  .header-container .navigation {\n    padding-right: nb-theme(padding);\n    font-size: 2.5rem;\n    text-decoration: none; }\n    .header-container .navigation i {\n      display: block; }\n  .header-container .logo {\n    padding: 0 nb-theme(padding);\n    font-size: 1.75rem;\n    font-weight: nb-theme(font-weight-bolder);\n    border-left: 1px solid nb-theme(separator);\n    white-space: nowrap; }\n    .header-container .logo span {\n      font-weight: nb-theme(font-weight-normal); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.goToHome = function () {
        this.router.navigateByUrl('/home');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/Components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <div class=\"example-container\" *ngFor=\"let hb of settings\">\n    <div class=\"container-btn\">\n      <button class=\"btn {{ hb.class }} btn-demo\" (click)=\"Gerar(hb)\" style=\"padding:10px; width:100%\">\n        <i class=\"nb-home\"></i>{{ hb.NameButton }}</button>\n    </div>\n  </div>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/Components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/cache-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, themeService, cacheSrv) {
        var _this = this;
        this.router = router;
        this.themeService = themeService;
        this.cacheSrv = cacheSrv;
        this.themeName = 'cosmic';
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
            //this.layoutState$ = this.stateService.onLayoutState()
            // .subscribe((layout: string) => this.layout = layout);
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.init = function (colors) {
        this.settings = [{
                class: 'btn-hero-primary',
                container: 'primary-container',
                Destino: 'home',
                NameButton: 'Home',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            },
            {
                class: 'btn-hero-success',
                container: 'success-container',
                Destino: 'noticias',
                NameButton: 'Noticias',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            },
        ];
    };
    MenuComponent.prototype.Gerar = function (Botao) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigateByUrl(Botao.Destino);
        }, 30);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/Components/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["l" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_3__Service_cache_service_service__["a" /* CacheServiceService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <app-header></app-header>\n  </nb-layout-header>\n  <br>\n  <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n    <nb-sidebar-header>\n    </nb-sidebar-header>\n    <app-menu></app-menu>\n  </nb-sidebar>\n\n  <nb-layout-column>\n    <div class=\"angrytext\">\n      <app-buttons></app-buttons>\n    </div>\n    <app-grid></app-grid>\n\n\n  </nb-layout-column>\n</nb-layout>"

/***/ }),

/***/ "../../../../../src/app/Pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n\nnb-sidebar.menu-sidebar {\n  margin-top: nb-theme(sidebar-header-gap);\n  background: transparent; }\n  nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(nb-theme(sidebar-height) - nb-theme(header-height) - nb-theme(sidebar-header-gap)) !important;\n    border-top-right-radius: nb-theme(radius); }\n  nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    nb-sidebar.menu-sidebar .main-btn i,\n    nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n.angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Service_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/cache-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(db, router, themeService, cacheSrv) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.themeService = themeService;
        this.cacheSrv = cacheSrv;
        this.themeName = 'cosmic';
        this.layout = {};
        this.menu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            }
        ];
        // this.cacheSrv.TituloObj.Grid = 'Reinos'
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
            //this.layoutState$ = this.stateService.onLayoutState()
            // .subscribe((layout: string) => this.layout = layout);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.init = function (colors) {
        this.settings = [{
                class: 'btn-hero-primary',
                container: 'primary-container',
                Destino: 'home',
                NameButton: 'Home',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            },
            {
                class: 'btn-hero-success',
                container: 'success-container',
                Destino: 'home',
                NameButton: 'Noticias',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            },
        ];
    };
    HomeComponent.prototype.Gerar = function (Botao) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigateByUrl('/noticias');
        }, 30);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        //this.layoutState.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/Pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["l" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_4__Service_cache_service_service__["a" /* CacheServiceService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/noticias/noticias.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\r\n    <nb-layout-header fixed>\r\n        <app-header></app-header>\r\n    </nb-layout-header>\r\n    <br>\r\n    <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\r\n        <nb-sidebar-header>\r\n        </nb-sidebar-header>\r\n        <app-menu></app-menu>\r\n    </nb-sidebar>\r\n    <nb-layout-column>\r\n        <div (click)=\"ativar()\">Omega</div>\r\n        <div class=\"\">\r\n            <nb-card *ngFor=\"let item of DataBase1\" class=\"{{classe}}\" style=\"width:100%\">\r\n                <nb-card-header>{{item.nome}}</nb-card-header>\r\n                <nb-card-body></nb-card-body>\r\n                <nb-card-footer></nb-card-footer>\r\n            </nb-card>\r\n        </div>\r\n    </nb-layout-column>\r\n    <nb-layout-column>\r\n\r\n        <nb-card *ngFor=\"let item of DataBase2\" style=\"width:100%\">\r\n            <nb-card-header>{{item.nome}}</nb-card-header>\r\n            <nb-card-body></nb-card-body>\r\n            <nb-card-footer></nb-card-footer>\r\n        </nb-card>\r\n    </nb-layout-column>\r\n</nb-layout>\r\n<!-- \r\n<nb-layout >\r\n    <nb-layout-header fixed>\r\n        <app-header></app-header>\r\n    </nb-layout-header>\r\n    <br>\r\n    <nb-layout-column>\r\n        OMEGA\r\n    </nb-layout-column>\r\n    <nb-layout-column>\r\n        OMEGA\r\n    </nb-layout-column>\r\n    <nb-layout-column>\r\n        OMEGA\r\n    </nb-layout-column>\r\n</nb-layout> -->"

/***/ }),

/***/ "../../../../../src/app/Pages/noticias/noticias.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  color: #4794D3;\n  width: 300px;\n  margin: 90px auto;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/noticias/noticias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(router, cacheSrv, db) {
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.db = db;
        this.getNoticias1();
        this.getNoticias2();
    }
    NoticiasComponent.prototype.ngOnInit = function () {
    };
    NoticiasComponent.prototype.ativar = function () {
        if (this.classe != null) {
            this.classe = null;
        }
        else {
            this.classe = 'angrytext';
        }
    };
    NoticiasComponent.prototype.getNoticias1 = function () {
        var _this = this;
        this.db.list('Clans').valueChanges()
            .subscribe(function (s) {
            _this.DataBase1 = s;
        });
    };
    NoticiasComponent.prototype.getNoticias2 = function () {
        var _this = this;
        this.db.list('Reinos').valueChanges()
            .subscribe(function (s) {
            _this.DataBase2 = s;
        });
    };
    NoticiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-noticias',
            template: __webpack_require__("../../../../../src/app/Pages/noticias/noticias.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/noticias/noticias.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__Service_cache_service_service__["a" /* CacheServiceService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Service/cache-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CacheServiceService = /** @class */ (function () {
    function CacheServiceService() {
        this.UsuarioObj = { username: null };
        this.DatabaseObj = { Destino: null, Executar: null };
        this.TituloObj = { Grid: null, notification: null };
        // Observable string sources
        this.componentMethodCallSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        // Observable string streams
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    // Service message commands
    CacheServiceService.prototype.callComponentMethod = function () {
        this.componentMethodCallSource.next();
    };
    CacheServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CacheServiceService);
    return CacheServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Pages_home_home_component__ = __webpack_require__("../../../../../src/app/Pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Pages_noticias_noticias_component__ = __webpack_require__("../../../../../src/app/Pages/noticias/noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_grid_grid_component__ = __webpack_require__("../../../../../src/app/Components/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Components_header_header_component__ = __webpack_require__("../../../../../src/app/Components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Components_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/Components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Components_menu_menu_component__ = __webpack_require__("../../../../../src/app/Components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Service_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/cache-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Nebular


//AngularFire





//Paginas


//Componentes




//Serviços

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Pages_noticias_noticias_component__["a" /* NoticiasComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Components_grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_13__Components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__Components_buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__Components_menu_menu_component__["a" /* MenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["a" /* NbActionsModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["b" /* NbCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["d" /* NbLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["e" /* NbMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["f" /* NbRouteTabsetModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["g" /* NbSearchModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["h" /* NbSidebarModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["j" /* NbTabsetModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["k" /* NbThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["m" /* NbUserModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["c" /* NbCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["k" /* NbThemeModule */].forRoot({ name: 'cosmic' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    {
                        path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__Pages_home_home_component__["a" /* HomeComponent */], data: {
                            breadcrumbs: true,
                            text: 'Home'
                        }
                    },
                    {
                        path: 'noticias', component: __WEBPACK_IMPORTED_MODULE_11__Pages_noticias_noticias_component__["a" /* NoticiasComponent */], data: {
                            breadcrumbs: true,
                            text: 'Noticias'
                        }
                    }
                ]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__nebular_theme__["i" /* NbSidebarService */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["h" /* NbSidebarModule */].forRoot().providers,
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["e" /* NbMenuModule */].forRoot().providers,
                __WEBPACK_IMPORTED_MODULE_16__Service_cache_service_service__["a" /* CacheServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDu9y3kh_aAahRtg-VEpTo7Dwf7GePl9wY",
        authDomain: "argeon-337.firebaseapp.com",
        databaseURL: "https://argeon-337.firebaseio.com",
        projectId: "argeon-337",
        storageBucket: "argeon-337.appspot.com",
        messagingSenderId: "330505559945"
    }
};
//  firebase.initializeApp(config);/
//</script> 


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map