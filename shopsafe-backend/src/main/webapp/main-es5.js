function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api/api.service.ts":
  /*!************************************!*\
    !*** ./src/app/api/api.service.ts ***!
    \************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // Provides HTTP client used to make HTTP requests within the Angular application
    // Returns Observables (can be synchronous), not Promises (always asynchronous)


    var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }
      /**
       * Creates new check-in for specific store ID and sends to API as POST request
       * @param storeId ID of the store that the check-in occurs for
       * @returns Observable
       */


      _createClass(ApiService, [{
        key: "createCheckIn",
        value: function createCheckIn(storeId, busy, line, hygiene, mask) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.set('storeId', storeId.toString()).set('busy', busy.toString()).set('line', line.toString()).set('hygiene', hygiene.toString()).set('mask', mask.toString());
          return this.http.post(API_URL + '/checkin?' + params.toString(), {}, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return console.log("API: check in from " + storeId);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message || error);
          }));
        }
        /**
         * Gets all nearby stores from backend via GET request
         * @param location inputted by user
         * @returns result as observable
         */

      }, {
        key: "getNearbyStores",
        value: function getNearbyStores(location) {
          var url = API_URL + '/stores?location=' + location; // const url = API_URL + '/stores';

          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return console.log("API: fetch nearby stores for location " + location);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.status + " " + error.statusText || error);
          }));
        }
        /**
         * Gets current store by ID, requires mapping because JSON doesn't match
         * interface typing
         * @param id ID of the store to fetch store from
         * @returns store of given ID as observable
         */

      }, {
        key: "getStoreById",
        value: function getStoreById(id) {
          var url = API_URL + '/store?id=' + id; // const url = API_URL + '/store';

          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return console.log('API: fetched store id ' + id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.status + " " + error.statusText || error);
          }));
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/result/result.component */
    "./src/app/components/result/result.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_store_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/store/store.component */
    "./src/app/components/store/store.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");

    var routes = [{
      path: '',
      component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    }, {
      path: 'result/:location',
      component: _components_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"]
    }, {
      path: 'store/:id',
      component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
    }, {
      path: "**",
      component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./google-chart/google-chart.module */
    "./src/app/google-chart/google-chart.module.ts");
    /* harmony import */


    var _components_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/app.component */
    "./src/app/components/app.component.ts");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_result_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/result/result.component */
    "./src/app/components/result/result.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_store_store_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/store/store.component */
    "./src/app/components/store/store.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/check-in-modal/check-in-modal.component */
    "./src/app/components/check-in-modal/check-in-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pipes/round.pipe */
    "./src/app/pipes/round.pipe.ts");
    /* harmony import */


    var _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/http-error/http-error.component */
    "./src/app/components/http-error/http-error.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./google-chart/line-chart/line-chart.component */
    "./src/app/google-chart/line-chart/line-chart.component.ts"); // Custom components
    // Material Angular components
    // Services
    // Pipes


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_api_api_service__WEBPACK_IMPORTED_MODULE_20__["ApiService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_6__["GoogleChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"], _components_result_result_component__WEBPACK_IMPORTED_MODULE_9__["ResultComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"], _components_store_store_component__WEBPACK_IMPORTED_MODULE_11__["StoreComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_14__["CheckInModalComponent"], _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_21__["RoundPipe"], _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_22__["HttpErrorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_6__["GoogleChartModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"], _components_result_result_component__WEBPACK_IMPORTED_MODULE_9__["ResultComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"], _components_store_store_component__WEBPACK_IMPORTED_MODULE_11__["StoreComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_14__["CheckInModalComponent"], _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_21__["RoundPipe"], _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_22__["HttpErrorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_6__["GoogleChartModule"]],
          providers: [_api_api_service__WEBPACK_IMPORTED_MODULE_20__["ApiService"]],
          bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          // Set of components to compile when NgModule is defined to be
          // dynamically loaded into view
          entryComponents: [_components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_14__["CheckInModalComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_store_store_component__WEBPACK_IMPORTED_MODULE_11__["StoreComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_23__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_l"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogActions"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__["Dir"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSlider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipComponent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["CdkScrollable"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatSpinner"], _google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_27__["LineChartComponent"], _components_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"], _components_result_result_component__WEBPACK_IMPORTED_MODULE_9__["ResultComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"], _components_store_store_component__WEBPACK_IMPORTED_MODULE_11__["StoreComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _components_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_14__["CheckInModalComponent"], _components_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_22__["HttpErrorComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_23__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["KeyValuePipe"], _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_21__["RoundPipe"]]);
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 34,
      vars: 0,
      consts: [["id", "about", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "section"], [1, "box"], ["href", "mailto:gabrielstewart@google.com"], ["href", "mailto:raulpalomo@google.com"], ["href", "mailto:caroljli@google.com"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ABOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Learn more about this tool, its developers, and its usages.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Philosophy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ShopSafe is a tool designed to help ease the decision fatigue that comes with deciding what is the safest place to go shopping during COVID-19. The purpose of this tool is to provide a crowdsourced method of evaluating the safety of a grocery store to give users a more informed shopping experience. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " This tool is meant to be used in concurrence with good judgement and awareness of local regulations. The ShopSafe Score is calculated using the check-in and county statistics based on user input and the New York Times COVID-19 dataset. This is not a deterministic metric but rather a decision-making tool. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Creators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " This application is created by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gabriel Stewart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Raul Palomo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Carol Li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " under their 2020 Google Internship. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#about[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n}\n\n#about[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: justify;\n}\n\n#about[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n    color: rgb(255, 135, 86, 0.7);\n}\n\n#about[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dCAuaGVhZGluZy10ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNhYm91dCAuYm94IHAge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiNhYm91dCAuYm94IHA6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxMzUsIDg2LCAwLjcpO1xufVxuXG4jYWJvdXQgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/app.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/app.component.ts ***!
    \*********************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'shopsafe-frontend';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/check-in-modal/check-in-modal.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/check-in-modal/check-in-modal.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CheckInModalComponent */

  /***/
  function srcAppComponentsCheckInModalCheckInModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckInModalComponent", function () {
      return CheckInModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // @Injectable({
    //   providedIn: 'root'
    // })


    var CheckInModalComponent = /*#__PURE__*/function () {
      function CheckInModalComponent(apiService, dialogRef, route) {
        _classCallCheck(this, CheckInModalComponent);

        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.route = route;
        this.busy = '';
        this.line = '';
        this.hygiene = '';
        this.mask = '';
      }

      _createClass(CheckInModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Sets ID variable of check in modal based on store id.
         * @param id of the current store
         */

      }, {
        key: "checkIn",

        /**
         * Sends check-in user data to API
         * @param id ID of store that check-in is for
         * @param busy user input busy score
         * @param line user input line score
         * @param hygiene user input hygiene score
         * @param mask user input mask score
         */
        value: function checkIn() {
          console.log("CLIENT: check-in api call");
          this.apiService.createCheckIn(CheckInModalComponent.storeId, Number(this.busy), Number(this.line), Number(this.hygiene), Number(this.mask)).subscribe();
          this.dialogRef.close();
        }
      }], [{
        key: "setId",
        value: function setId(id) {
          this.storeId = id;
          console.log("CLIENT: store id is " + this.storeId);
        }
      }]);

      return CheckInModalComponent;
    }();

    CheckInModalComponent.ɵfac = function CheckInModalComponent_Factory(t) {
      return new (t || CheckInModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    CheckInModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckInModalComponent,
      selectors: [["app-check-in-modal"]],
      decls: 32,
      vars: 4,
      consts: [["id", "check-in-modal"], [1, "title-text"], [1, "modal-content"], [1, "option"], [1, "left-text"], ["matTooltip", "How crowded is it inside the store? Essentially, is there \n                            enough space to social distance, maintain 6 feet? 1 indicates \n                            very busy (bad), and 10 indicates not busy at all (good)"], [1, "far", "fa-question-circle"], ["min", "1", "max", "10", "step", "1", "thumbLabel", "", "tickInterval", "1", 1, "right-text", 3, "ngModel", "ngModelChange"], ["matTooltip", "How long is the line to get into the store from the outside?\n                            1 indicates very long (bad), and 10 indicates not long at all (good)"], ["matTooltip", "How clean is the store overall? Are the shared carts, \n                            baskets, and surfaces sanitized? 1 indicates poor hygiene \n                            (bad), and 10 indicates good hygiene (good)"], ["matTooltip", "How strict is the store with masks? Are the customers and workers \n                            wearing masks properly? 1 indicates no to little mask policy \n                            and presence (bad), and 10 indicates excellent mask usage (good)"], ["id", "submit-check-in-button", 3, "click"]],
      template: function CheckInModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Check-In Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Use the sliders to input the statuses of the store to check in. High values indicates a good status, and low values indicate a bad status.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Busy \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-slider", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_11_listener($event) {
            return ctx.busy = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Line \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-slider", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_17_listener($event) {
            return ctx.line = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Hygiene \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-slider", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_23_listener($event) {
            return ctx.hygiene = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Mask \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-slider", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckInModalComponent_Template_mat_slider_ngModelChange_29_listener($event) {
            return ctx.mask = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckInModalComponent_Template_button_click_30_listener() {
            return ctx.checkIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "CHECK IN AT THIS STORE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.busy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hygiene);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mask);
        }
      },
      directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["#check-in-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-align: center;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   h2.title-text[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n    margin-top: 11px;\n    width: 220px;\n    color: rgba(196, 196, 196, 0.2);\n    text-align: right;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n    white-space: pre-line; \n}\n\n#check-in-modal[_ngcontent-%COMP%]   .left-text[_ngcontent-%COMP%] {\n    width: 40%;\n    clear: left;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   #submit-check-in-button[_ngcontent-%COMP%] {\n    background: rgba(104, 187, 207, 0.1);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #68BBCF;\n    margin-right: 15px;\n    border: none;\n    font-weight: 600;\n    width: 100%;\n    font-size: 15px;\n    margin-top: 20px;\n    cursor: pointer;\n}\n\n#check-in-modal[_ngcontent-%COMP%]   #submit-check-in-button[_ngcontent-%COMP%]:hover {\n    background: rgba(104, 187, 207, 0.3);\n}\n\n#check-in-modal[_ngcontent-%COMP%]   .mat-tooltip[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVjay1pbi1tb2RhbC9jaGVjay1pbi1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2staW4tbW9kYWwvY2hlY2staW4tbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGVjay1pbi1tb2RhbCBoMiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2NoZWNrLWluLW1vZGFsIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjaGVjay1pbi1tb2RhbCBoMi50aXRsZS10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjaGVjay1pbi1tb2RhbCBtYXQtc2xpZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBjb2xvcjogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjIpO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jY2hlY2staW4tbW9kYWwgLm9wdGlvbiB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lOyBcbn1cblxuI2NoZWNrLWluLW1vZGFsIC5sZWZ0LXRleHQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgY2xlYXI6IGxlZnQ7XG59XG5cbiNjaGVjay1pbi1tb2RhbCAjc3VibWl0LWNoZWNrLWluLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcbiAgICBjb2xvcjogIzY4QkJDRjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY2hlY2staW4tbW9kYWwgI3N1Ym1pdC1jaGVjay1pbi1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxODcsIDIwNywgMC4zKTtcbn1cblxuI2NoZWNrLWluLW1vZGFsIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckInModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-check-in-modal',
          templateUrl: './check-in-modal.component.html',
          styleUrls: ['./check-in-modal.component.css']
        }]
      }], function () {
        return [{
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["/about"];
    };

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 11,
      vars: 4,
      consts: [["id", "footer"], [1, "bottom-nav"], [3, "routerLink"], [1, "copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Made with \uD83D\uDE37 by Raul Palomo, Gabriel Stewart, Carol Li ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["#footer[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 15px;\n    padding-bottom: 47px;\n    position: fixed;\n    left: 0px;\n    bottom: 0px;\n    height: 30px;\n    width: 100%;\n    background: rgba(104, 187, 207, 0.1);\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    margin-left: 20px;\n    padding-bottom: 13px;\n    overflow: hidden;\n    width: 100%;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    bottom: 0;\n    padding-bottom: 13px;\n    position: fixed;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-weight: 500;\n    display: inline;\n    padding-right: 20px;\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: rgba(104, 187, 207);\n}\n\n#footer[_ngcontent-%COMP%]   .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #FF8756;\n    background: rgb(255,135,86, 0.1);\n    padding: 2px 5px 2px;\n    border-radius: 3px;\n}\n\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    float: right;\n    padding-top: 12px;\n    margin-right: 25px;\n    color: rgba(104, 187, 207);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQ3cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjEpO1xufVxuXG4jZm9vdGVyIC5ib3R0b20tbmF2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2Zvb3RlciAuYm90dG9tLW5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbiNmb290ZXIgLmJvdHRvbS1uYXYgbGkge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbiNmb290ZXIgLmJvdHRvbS1uYXYgYSB7XG4gICAgY29sb3I6IHJnYmEoMTA0LCAxODcsIDIwNyk7XG59XG5cbiNmb290ZXIgLmJvdHRvbS1uYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICNGRjg3NTY7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwxMzUsODYsIDAuMSk7XG4gICAgcGFkZGluZzogMnB4IDVweCAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4jZm9vdGVyIC5jb3B5cmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgY29sb3I6IHJnYmEoMTA0LCAxODcsIDIwNyk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/http-error/http-error.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/http-error/http-error.component.ts ***!
    \***************************************************************/

  /*! exports provided: HttpErrorComponent */

  /***/
  function srcAppComponentsHttpErrorHttpErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorComponent", function () {
      return HttpErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HttpErrorComponent = /*#__PURE__*/function () {
      function HttpErrorComponent() {
        _classCallCheck(this, HttpErrorComponent);
      }

      _createClass(HttpErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HttpErrorComponent;
    }();

    HttpErrorComponent.ɵfac = function HttpErrorComponent_Factory(t) {
      return new (t || HttpErrorComponent)();
    };

    HttpErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HttpErrorComponent,
      selectors: [["app-http-error"]],
      inputs: {
        httpErrorMessage: "httpErrorMessage"
      },
      decls: 12,
      vars: 1,
      consts: [["id", "http-error", 1, "segment"], [1, "segment-text"], ["href", "/"], [1, "error-wrapper"]],
      template: function HttpErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HTTP Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Uh oh, it seems that there's a problem with calling our server. Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to return to the landing page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.httpErrorMessage);
        }
      },
      styles: ["#http-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 36px;\n}\n\n#http-error[_ngcontent-%COMP%]   .error-wrapper[_ngcontent-%COMP%] {\n  padding: 15px 30px 15px;\n  background: rgba(0, 0, 0, 0.03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9odHRwLWVycm9yL2h0dHAtZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9odHRwLWVycm9yL2h0dHAtZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNodHRwLWVycm9yIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbn1cblxuI2h0dHAtZXJyb3IgLmVycm9yLXdyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-http-error',
          templateUrl: './http-error.component.html',
          styleUrls: ['./http-error.component.css']
        }]
      }], function () {
        return [];
      }, {
        httpErrorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/landing/landing.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/landing/landing.component.ts ***!
    \*********************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppComponentsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent(router) {
        _classCallCheck(this, LandingComponent);

        this.router = router;
        this.location = '';
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getNearbyStores",
        value: function getNearbyStores() {
          this.router.navigate(['/result', this.location]);
          console.log("CLIENT: redirecting to results");
        }
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 16,
      vars: 1,
      consts: [["id", "landing", 1, "segment"], [1, "segment-text"], [1, "heading-text"], ["href", "/about"], [1, "fas", "fa-long-arrow-alt-right"], [1, "input-container"], [1, "search-icon"], ["type", "text", "placeholder", "ENTER YOUR LOCATION TO FIND NEARBY GROCERY STORES", "name", "search", 1, "input-field", 3, "ngModel", "ngModelChange", "keyup.enter"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ShopSafe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Information tool for safe, simple shopping during COVID-19.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Learn more about this tool \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.location = $event;
          })("keyup.enter", function LandingComponent_Template_input_keyup_enter_15_listener() {
            return ctx.getNearbyStores();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.location);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["#landing[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-top: 170px;\n    text-align: center;\n}\n\n#landing[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#landing[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    display: flex;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\n#landing[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    padding: 12px 13px 10px;\n    position: absolute;\n    color: rgba(196, 196, 196);\n}\n\n#landing[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 50px 15px;\n    outline: none;\n    border-radius: 8px;\n    background: rgba(0, 0, 0, 0.03);\n    border: none;\n    font-weight: 500;\n}\n\n#landing[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\n#landing[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    padding-top: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGFuZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbGFuZGluZyAuaGVhZGluZy10ZXh0IGEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNsYW5kaW5nIC5pbnB1dC1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI2xhbmRpbmcgLmlucHV0LWNvbnRhaW5lciAuc2VhcmNoLWljb24ge1xuICAgIHBhZGRpbmc6IDEycHggMTNweCAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogcmdiYSgxOTYsIDE5NiwgMTk2KTtcbn1cblxuI2xhbmRpbmcgLmlucHV0LWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHggMTVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jbGFuZGluZyAuaW5wdXQtY29udGFpbmVyIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2xhbmRpbmcgZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDM1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 9,
      vars: 0,
      consts: [["id", "page-not-found", 1, "segment"], [1, "segment-text"], ["href", "/"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404 Page Not Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sorry you couldn't find what you were looking for! Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to return to the landing page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#page-not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlLW5vdC1mb3VuZCBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/result/result.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/result/result.component.ts ***!
    \*******************************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppComponentsResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../http-error/http-error.component */
    "./src/app/components/http-error/http-error.component.ts");
    /* harmony import */


    var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/round.pipe */
    "./src/app/pipes/round.pipe.ts");

    var _c0 = function _c0(a1) {
      return ["/store", a1];
    };

    function ResultComponent_div_0_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var store_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, store_r4.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", store_r4.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, store_r4.score), "/10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](store_r4.address);
      }
    }

    function ResultComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Showing all grocery stores for your location.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Local Grocery Stores");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Click on a store to view store statistics");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResultComponent_div_0_div_13_Template, 14, 8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.result.stores);
      }
    }

    function ResultComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fetching Results...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResultComponent_app_http_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-error", 21);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("httpErrorMessage", ctx_r2.httpErrorMessage);
      }
    }

    var ResultComponent = /*#__PURE__*/function () {
      function ResultComponent(apiService, route) {
        _classCallCheck(this, ResultComponent);

        this.apiService = apiService;
        this.route = route;
      }

      _createClass(ResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Defaults to API not called yet
          this.isLoaded = false; // Defaults to no HTTP error

          this.httpError = false;
          this.location = this.route.snapshot.paramMap.get('location').toString();
          this.getResult();
        }
        /**
         * Calls API to get result and subscribes local variables using data returned
         * in the Observable from the HTTP response.
         */

      }, {
        key: "getResult",
        value: function getResult() {
          var _this = this;

          console.log('CLIENT: results api call at ' + this.location);
          this.apiService.getNearbyStores(this.location).subscribe(function (data) {
            return _this.result = {
              stores: data.stores,
              countyStats: data.countyStats
            };
          }, function (err) {
            console.log(err), _this.httpError = true, _this.httpErrorMessage = err;
          }, function () {
            _this.initTemplate();
          });
        }
        /**
         * Initializes component by using data returned from API call.
         * Sets isLoaded boolean to true, as the function can only be called when there
         * is a successful response.
         */

      }, {
        key: "initTemplate",
        value: function initTemplate() {
          // Sets loaded state to true
          this.isLoaded = true;
          console.log("CLIENT: API call finished");
        }
      }]);

      return ResultComponent;
    }();

    ResultComponent.ɵfac = function ResultComponent_Factory(t) {
      return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultComponent,
      selectors: [["app-result"]],
      decls: 3,
      vars: 3,
      consts: [["id", "result", "class", "segment", 4, "ngIf"], ["class", "loading-screen", "color", "grey", 4, "ngIf"], [3, "httpErrorMessage", 4, "ngIf"], ["id", "result", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "chart"], [1, "stores-list-heading"], [1, "left-text"], [1, "right-text", "subtext"], ["class", "stores-list", 4, "ngFor", "ngForOf"], [1, "stores-list"], [1, "stores-list-item"], [1, "left-text", "markers"], [1, "location-icon"], [1, "fas", "fa-map-marker-alt"], [1, "stores-list-location", 3, "routerLink"], [1, "rating"], [1, "right-text"], [1, "address"], ["color", "grey", 1, "loading-screen"], [3, "httpErrorMessage"]],
      template: function ResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResultComponent_div_0_Template, 14, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultComponent_div_1_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultComponent_app_http_error_2_Template, 1, 1, "app-http-error", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded && !ctx.httpError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded && !ctx.httpError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.httpError);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"], _http_error_http_error_component__WEBPACK_IMPORTED_MODULE_5__["HttpErrorComponent"]],
      pipes: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"]],
      styles: ["#result[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#result[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n}\n\n#result[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 87px;\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 8px;\n    padding: 33px;\n}\n\n#result[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#result[_ngcontent-%COMP%]   .right-text[_ngcontent-%COMP%] {\n    float: right;\n}\n\n#result[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n    line-height: 41px;\n}\n\n#result[_ngcontent-%COMP%]   .left-text[_ngcontent-%COMP%] {\n    float: left;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-heading[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    overflow: hidden;\n}\n\n#result[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #FF8756;\n    cursor: auto;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-location[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    text-transform: uppercase;\n    color: #4A4A4A;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-location[_ngcontent-%COMP%]:hover {\n    background-color: rgb(255, 135, 86, 0.7);\n}\n\n#result[_ngcontent-%COMP%]   .markers[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #result[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #result[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    display: inline;\n}\n\n#result[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%] {\n    float: left;\n    display: flex;\n    width: 33.3%;\n}\n\n#result[_ngcontent-%COMP%]   .shopsafe-score[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n}\n\n#result[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n    padding-left: 10px;\n}\n\n#result[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n    line-height: 0px;\n}\n\n#result[_ngcontent-%COMP%]   .stat-obj[_ngcontent-%COMP%] {\n    background: rgba(104, 187, 207, 0.1);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #68BBCF;\n    margin-right: 15px;\n    cursor: auto;\n}\n\n#result[_ngcontent-%COMP%]   .stores-list-item[_ngcontent-%COMP%] {\n    clear: both; \n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jlc3VsdCAuaGVhZGluZy10ZXh0IGgxIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jcmVzdWx0IC5oZWFkaW5nLXRleHQge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3Jlc3VsdCAuc3RhdC1iYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODdweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAzM3B4O1xufVxuXG4jcmVzdWx0IGgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jcmVzdWx0IC5yaWdodC10ZXh0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbiNyZXN1bHQgLnN1YnRleHQge1xuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xufVxuXG4jcmVzdWx0IC5sZWZ0LXRleHQge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4jcmVzdWx0IC5zdG9yZXMtbGlzdC1oZWFkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jcmVzdWx0IC5sb2NhdGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNGRjg3NTY7XG4gICAgY3Vyc29yOiBhdXRvO1xufVxuXG4jcmVzdWx0IC5zdG9yZXMtbGlzdC1sb2NhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzRBNEE0QTtcbn1cblxuI3Jlc3VsdCAuc3RvcmVzLWxpc3QtbG9jYXRpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEzNSwgODYsIDAuNyk7XG59XG5cbiNyZXN1bHQgLm1hcmtlcnMgKiwgI3Jlc3VsdCAuc3RhdC1lbGVtICosICNyZXN1bHQgLnN0YXQtYmFyICoge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4jcmVzdWx0IC5zdGF0LWVsZW0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDMzLjMlO1xufVxuXG4jcmVzdWx0IC5zaG9wc2FmZS1zY29yZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjRkY4NzU2O1xufVxuXG4jcmVzdWx0IC5yYXRpbmcge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogI0ZGODc1NjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbiNyZXN1bHQgLmFkZHJlc3Mge1xuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbiNyZXN1bHQgLnN0YXQtb2JqIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNCwgMTg3LCAyMDcsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xuICAgIGNvbG9yOiAjNjhCQkNGO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBjdXJzb3I6IGF1dG87XG59XG5cbiNyZXN1bHQgLnN0b3Jlcy1saXN0LWl0ZW0ge1xuICAgIGNsZWFyOiBib3RoOyBcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result',
          templateUrl: './result.component.html',
          styleUrls: ['./result.component.css']
        }]
      }], function () {
        return [{
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/store/store.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/store/store.component.ts ***!
    \*****************************************************/

  /*! exports provided: StoreComponent */

  /***/
  function srcAppComponentsStoreStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreComponent", function () {
      return StoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../check-in-modal/check-in-modal.component */
    "./src/app/components/check-in-modal/check-in-modal.component.ts");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function StoreComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_0_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.goBack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \xA0 Back to Results");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_0_Template_a_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.redirectToMap();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "VIEW ON MAPS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CHECKED IN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "STATUS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "SHOPSAFE SCORE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_0_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.openModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CHECK IN AT THIS STORE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-line-chart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "TOTAL CASES");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "TOTAL DEATHS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "PERCENT AFFECTED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.store.address, " \xA0 \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.checkInCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r0.store.open ? "#7AC665" : "#FF5151"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.store.open ? "OPEN" : "CLOSED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 10, ctx_r0.store.score), "/10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Statistics for ", ctx_r0.countyStats.countyName, " County");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countyStats.cases);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countyStats.deaths);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 12, ctx_r0.proportion), "%");
      }
    }

    function StoreComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading Store...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StoreComponent_app_http_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-error", 20);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("httpErrorMessage", ctx_r2.httpErrorMessage);
      }
    }

    var StoreComponent = /*#__PURE__*/function () {
      function StoreComponent(matDialog, apiService, route) {
        _classCallCheck(this, StoreComponent);

        this.matDialog = matDialog;
        this.apiService = apiService;
        this.route = route;
      }
      /**
       * Runs when component is loaded
       */


      _createClass(StoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Defaults to API not called yet
          this.isLoaded = false; // Defaults to no HTTP error

          this.httpError = false;
          this.getStore();
        }
        /**
         * Calls API to get store and subscribes local variables using data returned in the
         * Observable from the HTTP response.
         */

      }, {
        key: "getStore",
        value: function getStore() {
          var _this2 = this;

          var id = this.route.snapshot.paramMap.get('id').toString();
          this.storeId = id;
          this.apiService.getStoreById(id).subscribe(function (res) {
            _this2.store = res.store, _this2.countyStats = res.countyStats, _this2.covidData = res.covidData, _this2.maskData = res.maskData, _this2.lineData = res.lineData, _this2.hygieneData = res.hygieneData;
          }, function (err) {
            console.log(err), _this2.httpError = true, _this2.httpErrorMessage = err;
          }, function () {
            _this2.initTemplate();
          });
        }
        /**
         * Initializes component by using data returned from API call.
         * Sets isLoaded boolean to true, as the function can only be called when there
         * is a successful response.
         */

      }, {
        key: "initTemplate",
        value: function initTemplate() {
          // Sets loaded state to true
          this.isLoaded = true;
          console.log("CLIENT: API call finished"); // Round proportion to 2 decimal places

          this.proportion = this.countyStats.cases / this.countyStats.population * 100;
          console.log("CLIENT: calculated percentage as " + this.proportion);
        }
        /**
         * Opens check in modal dialog using check in modal component.
         * Opens new check in modal on screen.
         */

      }, {
        key: "openModal",
        value: function openModal() {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.id = "check-in-modal";
          dialogConfig.height = "510px";
          dialogConfig.width = "460px";

          _check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_2__["CheckInModalComponent"].setId(this.storeId);

          var modalDialog = this.matDialog.open(_check_in_modal_check_in_modal_component__WEBPACK_IMPORTED_MODULE_2__["CheckInModalComponent"], dialogConfig);
        }
        /**
         * Opens Google Maps link using Places ID of the store.
         */

      }, {
        key: "redirectToMap",
        value: function redirectToMap() {
          var url = 'https://www.google.com/maps/place/?q=place_id:' + this.storeId;
          window.open(url, "_blank");
        }
        /**
         * Redirects to result page (previous page).
         */

      }, {
        key: "goBack",
        value: function goBack() {
          window.history.back();
        }
      }]);

      return StoreComponent;
    }();

    StoreComponent.ɵfac = function StoreComponent_Factory(t) {
      return new (t || StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoreComponent,
      selectors: [["app-store"]],
      decls: 3,
      vars: 3,
      consts: [["id", "store", "class", "segment", 4, "ngIf"], ["class", "loading-screen", "color", "grey", 4, "ngIf"], [3, "httpErrorMessage", 4, "ngIf"], ["id", "store", 1, "segment"], [1, "segment-text"], [1, "heading-text"], [1, "back-link", 3, "click"], [1, "fas", "fa-long-arrow-alt-left"], [1, "maps-button", 3, "click"], [1, "stat-bar-wrapper"], [1, "stat-bar"], [1, "stat-elem"], [1, "stat-obj"], [1, "stat-elem", 2, "text-align", "center"], [3, "ngStyle"], [1, "stat-elem", 2, "text-align", "right", "margin-top", "-5px"], [1, "shopsafe-score"], ["id", "check-in-button", 3, "click"], ["id", "line-chart", 1, "chart"], ["color", "grey", 1, "loading-screen"], [3, "httpErrorMessage"]],
      template: function StoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreComponent_div_0_Template, 56, 16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreComponent_div_1_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoreComponent_app_http_error_2_Template, 1, 1, "app-http-error", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded && !ctx.httpError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded && !ctx.httpError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.httpError);
        }
      },
      styles: ["#store[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    clear: both;\n    text-transform: uppercase;\n}\n\n#store[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    text-align: center;\n}\n\n#store[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    float: left !important;\n}\n\n#store[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 87px;\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 8px;\n    padding: 33px;\n}\n\n#store[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n#store[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n    line-height: 41px;\n}\n\n#store[_ngcontent-%COMP%]   .markers[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .stat-bar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    display: inline;\n}\n\n#store[_ngcontent-%COMP%]   .stat-elem[_ngcontent-%COMP%] {\n    float: left;\n    display: flex;\n    width: 33.3%;\n}\n\n#store[_ngcontent-%COMP%]   .shopsafe-score[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n}\n\n#store[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 15px;\n    line-height: 30px;\n    display: flex;\n    color: #FF8756;\n    padding-left: 10px;\n}\n\n#store[_ngcontent-%COMP%]   .stat-obj[_ngcontent-%COMP%], #store[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%] {\n    background: rgba(104, 187, 207, 0.1);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #68BBCF;\n    margin-right: 15px;\n}\n\n#store[_ngcontent-%COMP%]   .maps-button[_ngcontent-%COMP%]:hover {\n  background: rgba(104, 187, 207, 0.3);\n}\n\n#store[_ngcontent-%COMP%]   .stat-obj[_ngcontent-%COMP%] {\n    cursor: auto;\n}\n\n#store[_ngcontent-%COMP%]   #check-in-button[_ngcontent-%COMP%] {\n    background: rgba(104, 187, 207, 0.1);\n    border-radius: 8px;\n    padding: 10px 15px 10px;\n    color: #68BBCF;\n    margin-right: 15px;\n    border: none;\n    font-weight: 600;\n    width: 100%;\n    font-size: 15px;\n    margin-top: 20px;\n    cursor: pointer;\n}\n\n#store[_ngcontent-%COMP%]   #check-in-button[_ngcontent-%COMP%]:hover {\n    background: rgba(104, 187, 207, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS9zdG9yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3RvcmUgLmhlYWRpbmctdGV4dCBoMSB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3N0b3JlIC5oZWFkaW5nLXRleHQge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3N0b3JlIC5iYWNrLWxpbmsge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuI3N0b3JlIC5zdGF0LWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDMzcHg7XG59XG5cbiNzdG9yZSBoMiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3N0b3JlIC5zdWJ0ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogNDFweDtcbn1cblxuI3N0b3JlIC5tYXJrZXJzICosICNzdG9yZSAuc3RhdC1lbGVtICosICNzdG9yZSAuc3RhdC1iYXIgKiB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNzdG9yZSAuc3RhdC1lbGVtIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzMy4zJTtcbn1cblxuI3N0b3JlIC5zaG9wc2FmZS1zY29yZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjRkY4NzU2O1xufVxuXG4jc3RvcmUgLnJhdGluZyB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjRkY4NzU2O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuI3N0b3JlIC5zdGF0LW9iaiwgI3N0b3JlIC5tYXBzLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDE4NywgMjA3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcbiAgICBjb2xvcjogIzY4QkJDRjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbiNzdG9yZSAubWFwcy1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwNCwgMTg3LCAyMDcsIDAuMyk7XG59XG5cbiNzdG9yZSAuc3RhdC1vYmoge1xuICAgIGN1cnNvcjogYXV0bztcbn1cblxuI3N0b3JlICNjaGVjay1pbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxODcsIDIwNywgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG4gICAgY29sb3I6ICM2OEJCQ0Y7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3N0b3JlICNjaGVjay1pbi1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxODcsIDIwNywgMC4zKTtcbn0iXX0= */"]
    });
    StoreComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StoreComponent,
      factory: StoreComponent.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-store',
          templateUrl: './store.component.html',
          styleUrls: ['./store.component.css']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/google-chart.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/google-chart/google-chart.module.ts ***!
    \*****************************************************/

  /*! exports provided: GoogleChartModule */

  /***/
  function srcAppGoogleChartGoogleChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleChartModule", function () {
      return GoogleChartModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _service_service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/service.module */
    "./src/app/google-chart/service/service.module.ts");
    /* harmony import */


    var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./line-chart/line-chart.component */
    "./src/app/google-chart/line-chart/line-chart.component.ts");

    var GoogleChartModule = function GoogleChartModule() {
      _classCallCheck(this, GoogleChartModule);
    };

    GoogleChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GoogleChartModule
    });
    GoogleChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GoogleChartModule_Factory(t) {
        return new (t || GoogleChartModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleChartModule, {
        declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]],
        exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]],
          exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/line-chart/line-chart.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/google-chart/line-chart/line-chart.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppGoogleChartLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/google-chart.service */
    "./src/app/google-chart/service/google-chart.service.ts");
    /* harmony import */


    var _components_store_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/store/store.component */
    "./src/app/components/store/store.component.ts");

    var LineChartComponent = /*#__PURE__*/function () {
      function LineChartComponent(gChartService, storeComponent) {
        _classCallCheck(this, LineChartComponent);

        this.gChartService = gChartService;
        this.storeComponent = storeComponent;
        this.mask = this.storeComponent.maskData;
        this.busy = this.storeComponent.busyData;
        this.line = this.storeComponent.lineData;
        this.hygiene = this.storeComponent.hygieneData;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load('current', {
          'packages': ['corechart', 'table'],
          callback: this.drawChart.bind(this)
        });
      }

      _createClass(LineChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Assumes that all input arrays are the same length

      }, {
        key: "drawChart",
        value: function drawChart() {
          // let data = this.gLib.visualization.arrayToDataTable([
          //   ['Year', 'Sales', 'Expenses'],
          //   ['2004',  1000,      400],
          //   ['2005',  1170,      460],
          //   ['2006',  660,       1120],
          //   ['2007',  1030,      540]
          // ]);
          // New data should be 'date' 'busy' 'line' 'hygiene' 'mask'
          // TODO: custom colorization with options
          var data = new this.gLib.visualization.DataTable();
          data.addColumn('string', 'Date');
          data.addColumn('number', 'Mask');
          data.addColumn('number', 'Busy');
          data.addColumn('number', 'Line');
          data.addColumn('number', 'Hygiene');

          for (var i in this.mask) {
            data.addRow([this.mask[i].date, this.mask[i], this.busy[i], this.line[i], this.hygiene[i]]);
          }

          var options = {
            height: 500
          };
          var chart = new this.gLib.visualization.LineChart(document.getElementById('line-chart'));
          chart.draw(data, options);
          console.log("CLIENT: map has been drawn");
        }
      }]);

      return LineChartComponent;
    }();

    LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
      return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_store_store_component__WEBPACK_IMPORTED_MODULE_2__["StoreComponent"]));
    };

    LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineChartComponent,
      selectors: [["app-line-chart"]],
      decls: 0,
      vars: 0,
      template: function LineChartComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-line-chart',
          templateUrl: './line-chart.component.html',
          styleUrls: ['./line-chart.component.css']
        }]
      }], function () {
        return [{
          type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"]
        }, {
          type: _components_store_store_component__WEBPACK_IMPORTED_MODULE_2__["StoreComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/service/google-chart.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/google-chart/service/google-chart.service.ts ***!
    \**************************************************************/

  /*! exports provided: GoogleChartService */

  /***/
  function srcAppGoogleChartServiceGoogleChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleChartService", function () {
      return GoogleChartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service.module */
    "./src/app/google-chart/service/service.module.ts");

    var GoogleChartService = /*#__PURE__*/function () {
      function GoogleChartService() {
        _classCallCheck(this, GoogleChartService);

        this.google = google;
      }

      _createClass(GoogleChartService, [{
        key: "getGoogle",
        value: function getGoogle() {
          return this.google;
        }
      }]);

      return GoogleChartService;
    }();

    GoogleChartService.ɵfac = function GoogleChartService_Factory(t) {
      return new (t || GoogleChartService)();
    };

    GoogleChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GoogleChartService,
      factory: GoogleChartService.ɵfac,
      providedIn: _service_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: _service_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/service/service.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/google-chart/service/service.module.ts ***!
    \********************************************************/

  /*! exports provided: ServiceModule */

  /***/
  function srcAppGoogleChartServiceServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceModule", function () {
      return ServiceModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Contains Angular service utilized to access the Google Charts library


    var ServiceModule = function ServiceModule() {
      _classCallCheck(this, ServiceModule);
    };

    ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServiceModule
    });
    ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServiceModule_Factory(t) {
        return new (t || ServiceModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/round.pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/pipes/round.pipe.ts ***!
    \*************************************/

  /*! exports provided: RoundPipe */

  /***/
  function srcAppPipesRoundPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoundPipe", function () {
      return RoundPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoundPipe = /*#__PURE__*/function () {
      function RoundPipe() {
        _classCallCheck(this, RoundPipe);
      }

      _createClass(RoundPipe, [{
        key: "transform",
        value: function transform(input) {
          return Math.round(input * 100) / 100;
        }
      }]);

      return RoundPipe;
    }();

    RoundPipe.ɵfac = function RoundPipe_Factory(t) {
      return new (t || RoundPipe)();
    };

    RoundPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "round",
      type: RoundPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'round'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      // URL of development API
      apiUrl: 'http://localhost:8080'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/raulpalomo/step32-2020/shopsafe-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map