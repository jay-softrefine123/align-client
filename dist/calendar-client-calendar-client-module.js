(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-client-calendar-client-module"],{

/***/ "./src/app/main/content/apps/calendar-client/cal-client.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/cal-client.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"calendar\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n\r\n  <!-- HEADER -->\r\n  <div class=\"header p-16 p-sm-24\" [ngClass]=\"viewDate | date:'MMM'\">\r\n\r\n      <div class=\"header-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n\r\n          <div class=\"header-top\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\">\r\n\r\n              <div class=\"logo mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                  <mat-icon class=\"logo-icon\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">today</mat-icon>\r\n                  <span class=\"logo-text\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Calendar</span>\r\n              </div>\r\n\r\n              <!-- TOOLBAR -->\r\n              <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                  <button mat-icon-button aria-label=\"Search\" matTooltip=\"Search\">\r\n                      <mat-icon>search</mat-icon>\r\n                  </button>\r\n\r\n                  <button mat-icon-button\r\n                          mwlCalendarToday\r\n                          [(viewDate)]=\"viewDate\"\r\n                          (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                          aria-label=\"Today\" matTooltip=\"Today\">\r\n                      <mat-icon>today</mat-icon>\r\n                  </button>\r\n\r\n                  <button mat-icon-button (click)=\"view='day'\" aria-label=\"Day\" matTooltip=\"Day\">\r\n                      <mat-icon>view_day</mat-icon>\r\n                  </button>\r\n\r\n                  <button mat-icon-button (click)=\"view='week'\" aria-label=\"Week\" matTooltip=\"Week\">\r\n                      <mat-icon>view_week</mat-icon>\r\n                  </button>\r\n\r\n                  <button mat-icon-button (click)=\"view='month'\" aria-label=\"Month\" matTooltip=\"Month\">\r\n                      <mat-icon>view_module</mat-icon>\r\n                  </button>\r\n              </div>\r\n          </div>\r\n          <!-- / TOOLBAR -->\r\n\r\n          <!-- HEADER BOTTOM -->\r\n          <div class=\"header-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n               *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'150ms'}}\">\r\n\r\n              <button mat-icon-button class=\"arrow\"\r\n                      mwlCalendarPreviousView\r\n                      [view]=\"view\"\r\n                      [(viewDate)]=\"viewDate\"\r\n                      (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                      aria-label=\"Previous\">\r\n                  <mat-icon>chevron_left</mat-icon>\r\n              </button>\r\n\r\n              <div class=\"title\">\r\n                  {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\r\n              </div>\r\n\r\n              <button mat-icon-button class=\"arrow\"\r\n                      mwlCalendarNextView\r\n                      [view]=\"view\"\r\n                      [(viewDate)]=\"viewDate\"\r\n                      (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                      aria-label=\"Next\">\r\n                  <mat-icon>chevron_right</mat-icon>\r\n              </button>\r\n          </div>\r\n          <!-- / HEADER BOTTOM -->\r\n      </div>\r\n\r\n      <!-- ADD EVENT BUTTON -->\r\n      <!-- <button mat-fab class=\"add-event-button mat-warn\" (click)=\"addEvent()\" aria-label=\"Add event\"\r\n              *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">\r\n          <mat-icon>add</mat-icon>\r\n      </button> -->\r\n      <!-- / ADD EVENT BUTTON -->\r\n  </div>\r\n  <!-- / HEADER -->\r\n\r\n  <!-- CONTENT -->\r\n  <div class=\"content\" fusePerfectScrollbar *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'200ms',y:'50px'}}\">\r\n      <div [ngSwitch]=\"view\">\r\n          <mwl-calendar-month-view\r\n              *ngSwitchCase=\"'month'\"\r\n              [viewDate]=\"viewDate\"\r\n              [events]=\"events\"\r\n              [refresh]=\"refresh\"\r\n              [activeDayIsOpen]=\"activeDayIsOpen\"\r\n              (dayClicked)=\"dayClicked($event.day)\"\r\n              (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n              (beforeViewRender)=\"beforeMonthViewRender($event)\">\r\n          </mwl-calendar-month-view>\r\n          <mwl-calendar-week-view\r\n              *ngSwitchCase=\"'week'\"\r\n              [viewDate]=\"viewDate\"\r\n              (viewDateChange)=\"selectedDay = {date:$event}\"\r\n              [events]=\"events\"\r\n              [refresh]=\"refresh\"\r\n              (dayClicked)=\"dayClicked($event.day)\"\r\n              (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n          </mwl-calendar-week-view>\r\n          <mwl-calendar-day-view\r\n              *ngSwitchCase=\"'day'\"\r\n              [viewDate]=\"viewDate\"\r\n              (viewDateChange)=\"selectedDay = {date:$event}\"\r\n              [events]=\"events\"\r\n              [refresh]=\"refresh\"\r\n              (dayClicked)=\"dayClicked($event.day)\"\r\n              (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n          </mwl-calendar-day-view>\r\n      </div>\r\n  </div>\r\n  <!-- / CONTENT -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/calendar-client/cal-client.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/cal-client.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/apps/calendar-client/cal-client.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/cal-client.component.ts ***!
  \***************************************************************************/
/*! exports provided: CalClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalClientComponent", function() { return CalClientComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cal_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cal-client.service */ "./src/app/main/content/apps/calendar-client/cal-client.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-dialog/event-dialog.component */ "./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.ts");
/* harmony import */ var _cal_event_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cal-event.model */ "./src/app/main/content/apps/calendar-client/cal-event.model.ts");
/* harmony import */ var _calendar_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar-client.service */ "./src/app/main/content/apps/calendar-client/calendar-client.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CalClientComponent = /** @class */ (function () {
    function CalClientComponent(http, dialog, calendarService, calService, apiloader, toast, route) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.calService = calService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.route = route;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = { date: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["startOfDay"])(new Date()) };
        if (sessionStorage.getItem('role') === 'CLIENT_ADMIN') {
            this.actions = [
                {
                    label: '<i class="material-icons s-16">edit</i>',
                    onClick: function (_a) {
                        var event = _a.event;
                        _this.editEvent('edit', event);
                    }
                },
                {
                    label: '<i class="material-icons s-16">delete</i>',
                    onClick: function (_a) {
                        var event = _a.event;
                        _this.deleteEvent(event);
                    }
                }
            ];
        }
        else {
            this.actions = [];
        }
        /**
         * Get events from service/server
         */
    }
    CalClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
        });
        this.getHolidays();
        /**
         * Watch re-render-refresh for updating db
         */
        this.refresh.subscribe(function (updateDB) {
            // console.warn('REFRESH');
            if (updateDB) {
                // console.warn('UPDATE DB');
                _this.calendarService.updateEvents(_this.events);
            }
        });
        this.calendarService.onEventsUpdated.subscribe(function (events) {
            _this.setEvents();
            _this.refresh.next();
        });
    };
    CalClientComponent.prototype.setEvents = function () {
        this.events = this.events.map(function (item) {
            return new _cal_event_model__WEBPACK_IMPORTED_MODULE_9__["CalEventModel"](item);
        });
    };
    CalClientComponent.prototype.getEvents = function (id) {
        var _this = this;
        this.apiloader.setLoader(true);
        this.calService.getData('users/' + id).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.task = response.data.tasks;
                for (var i = 0; i < _this.task.length; i++) {
                    _this.task[i].color = {
                        primary: '#ad2121',
                        secondary: '#FAE3E3'
                    };
                    _this.task[i].start = new Date(_this.task[i].start);
                    _this.events.push(_this.task[i]);
                }
                _this.meeting = response.data.meetings;
                for (var i = 0; i < _this.meeting.length; i++) {
                    _this.meeting[i].color = {
                        primary: '#ad2121',
                        secondary: '#FAE3E3'
                    };
                    _this.meeting[i].start = new Date(_this.meeting[i].start);
                    _this.events.push(_this.meeting[i]);
                }
                _this.setEvents();
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    CalClientComponent.prototype.getHolidays = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.calService.getData('holidays').subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                var events = response.data;
                for (var i = 0; i < events.length; i++) {
                    events[i].title = events[i].details;
                    events[i].start = new Date(events[i].date);
                    events[i].color = {
                        primary: '#ad2121',
                        secondary: '#FAE3E3'
                    };
                    events[i].isHoliday = true;
                    events[i].actions = [];
                }
                _this.events = events;
                _this.getEvents(_this.userId);
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    /* setTask(myTask){
        this.task = myTask;
        this.task.color = {
            primary  : '#ad2121',
            secondary: '#FAE3E3'
        };
        this.task.start = new Date(this.task.start);
        this.events.push(this.task);
        this.setEvents();
    } */
    /**
     * Before View Renderer
     * @param {any} header
     * @param {any} body
     */
    CalClientComponent.prototype.beforeMonthViewRender = function (_a) {
        var header = _a.header, body = _a.body;
        body.forEach(function (day) {
            var event = day.events;
            if (event.length) {
                event.forEach(function (item) {
                    if (item.isHoliday) {
                        day.cssClass = 'holiday';
                    }
                });
            }
        });
    };
    /**
     * Day clicked
     * @param {MonthViewDay} day
     */
    CalClientComponent.prototype.dayClicked = function (day) {
        var date = day.date;
        var events = day.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
        this.selectedDay = day;
        this.refresh.next();
    };
    /**
     * Event times changed
     * Event dropped or resized
     * @param {CalendarEvent} event
     * @param {Date} newStart
     * @param {Date} newEnd
     */
    CalClientComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        // console.warn('Dropped or resized', event);
        this.refresh.next(true);
    };
    /**
     * Delete Event
     * @param event
     */
    CalClientComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        console.log(event);
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var eventIndex = _this.events.indexOf(event);
                _this.events.splice(eventIndex, 1);
                _this.refresh.next(true);
            }
            _this.confirmDialogRef = null;
        });
    };
    /**
     * Edit Event
     * @param {string} action
     * @param {CalendarEvent} event
     */
    CalClientComponent.prototype.editEvent = function (action, event) {
        var _this = this;
        var eventIndex = this.events.indexOf(event);
        this.dialogRef = this.dialog.open(_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EventDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
                event: event,
                action: action
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var actionType = response[0];
            var formData = response[1];
            switch (actionType) {
                /**
                 * Save
                 */
                case 'save':
                    _this.events[eventIndex] = Object.assign(_this.events[eventIndex], formData.getRawValue());
                    _this.refresh.next(true);
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteEvent(event);
                    break;
            }
        });
    };
    /**
     * Add Event
     */
    CalClientComponent.prototype.addEvent = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EventDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
                action: 'new',
                date: this.selectedDay.date
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var newEvent = response.getRawValue();
            newEvent.actions = _this.actions;
            _this.events.push(newEvent);
            _this.refresh.next(true);
        });
    };
    CalClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cal-client',
            template: __webpack_require__(/*! ./cal-client.component.html */ "./src/app/main/content/apps/calendar-client/cal-client.component.html"),
            styles: [__webpack_require__(/*! ./cal-client.component.scss */ "./src/app/main/content/apps/calendar-client/cal-client.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _calendar_client_service__WEBPACK_IMPORTED_MODULE_10__["CalendarClientService"],
            _cal_client_service__WEBPACK_IMPORTED_MODULE_1__["CalClientService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_11__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_12__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], CalClientComponent);
    return CalClientComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/calendar-client/cal-client.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/cal-client.service.ts ***!
  \*************************************************************************/
/*! exports provided: CalClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalClientService", function() { return CalClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _fuse_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/constant */ "./src/@fuse/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CalClientService = /** @class */ (function () {
    function CalClientService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    CalClientService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    CalClientService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    CalClientService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    CalClientService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    CalClientService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CalClientService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    CalClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CalClientService);
    return CalClientService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/calendar-client/cal-event.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/cal-event.model.ts ***!
  \**********************************************************************/
/*! exports provided: CalEventModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalEventModel", function() { return CalEventModel; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

var CalEventModel = /** @class */ (function () {
    function CalEventModel(data) {
        data = data || {};
        this.id = data.id || '';
        this.start = new Date(data.start) || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(new Date());
        this.end = new Date(data.end) || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfDay"])(new Date());
        this.title = data.title || '';
        this.color = {
            primary: data.color && data.color.primary || '#1e90ff',
            secondary: data.color && data.color.secondary || '#D1E8FF'
        };
        this.draggable = data.draggable || true;
        this.resizable = {
            beforeStart: data.resizable && data.resizable.beforeStart || true,
            afterEnd: data.resizable && data.resizable.afterEnd || true
        };
        this.actions = data.actions || [];
        this.allDay = data.allDay || false;
        this.isHoliday = data.isHoliday || false;
        this.cssClass = data.cssClass || '';
        this.meta = {
            location: data.meta && data.meta.location || '',
            notes: data.meta && data.meta.notes || ''
        };
    }
    return CalEventModel;
}());



/***/ }),

/***/ "./src/app/main/content/apps/calendar-client/calendar-client.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/calendar-client.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CalendarClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarClientModule", function() { return CalendarClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _calendar_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar-client.service */ "./src/app/main/content/apps/calendar-client/calendar-client.service.ts");
/* harmony import */ var _cal_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cal-client.component */ "./src/app/main/content/apps/calendar-client/cal-client.component.ts");
/* harmony import */ var _event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-dialog/event-dialog.component */ "./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _cal_client_component__WEBPACK_IMPORTED_MODULE_8__["CalClientComponent"],
        resolve: {
            chat: _calendar_client_service__WEBPACK_IMPORTED_MODULE_7__["CalendarClientService"]
        }
    }
];
var CalendarClientModule = /** @class */ (function () {
    function CalendarClientModule() {
    }
    CalendarClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot(),
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseConfirmDialogModule"]
            ],
            declarations: [_cal_client_component__WEBPACK_IMPORTED_MODULE_8__["CalClientComponent"], _event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EventDialogComponent"]],
            entryComponents: [_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EventDialogComponent"]]
        })
    ], CalendarClientModule);
    return CalendarClientModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/calendar-client/calendar-client.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/calendar-client.service.ts ***!
  \******************************************************************************/
/*! exports provided: CalendarClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarClientService", function() { return CalendarClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarClientService = /** @class */ (function () {
    function CalendarClientService(http) {
        this.http = http;
        this.onEventsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CalendarClientService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getEvents()
            ]).then(function (_a) {
                var events = _a[0];
                resolve();
            }, reject);
        });
    };
    CalendarClientService.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/calendar-client/events')
                .subscribe(function (response) {
                _this.events = response.data;
                _this.onEventsUpdated.next(_this.events);
                resolve(_this.events);
            }, reject);
        });
    };
    CalendarClientService.prototype.updateEvents = function (events) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/calendar-client/events', {
                id: 'events',
                data: events.slice()
            })
                .subscribe(function (response) {
                _this.getEvents();
            }, reject);
        });
    };
    CalendarClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CalendarClientService);
    return CalendarClientService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n  <mat-toolbar class=\"mat-accent m-0\">\r\n      <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n          <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n              <mat-icon>close</mat-icon>\r\n          </button>\r\n      </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n  <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n      <form name=\"eventForm\" [formGroup]=\"eventForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n          <mat-form-field class=\"w-100-p\">\r\n              <input matInput\r\n                     name=\"title\"\r\n                     formControlName=\"title\"\r\n                     placeholder=\"Title\"\r\n                     required>\r\n          </mat-form-field>\r\n\r\n          <div class=\"py-16\" fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n              <mat-slide-toggle\r\n                  name=\"allDay\"\r\n                  formControlName=\"allDay\"\r\n                  class=\"mr-24\"\r\n                  aria-label=\"All day\">\r\n                  All Day\r\n              </mat-slide-toggle>\r\n          </div>\r\n\r\n          <div class=\"py-16\" fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" formGroupName=\"color\">\r\n\r\n              <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                  <input matInput\r\n                         class=\"primary-color-input\"\r\n                         name=\"primary color\"\r\n                         formControlName=\"primary\"\r\n                         placeholder=\"Primary color\"\r\n                         [(colorPicker)]=\"event.color.primary\"\r\n                         cpWidth=\"290px\"\r\n                         [cpPresetColors]=\"presetColors\"\r\n                         [style.background]=\"event.color.primary\"\r\n                         (colorPickerChange)=\"event.color.primary = $event; eventForm.patchValue({color:{primary:$event}})\"/>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field fxFlex>\r\n                  <input matInput\r\n                         class=\"secondary-color-input\"\r\n                         name=\"secondary color\"\r\n                         formControlName=\"secondary\"\r\n                         placeholder=\"Secondary color\"\r\n                         [(colorPicker)]=\"event.color.secondary\"\r\n                         cpWidth=\"290px\"\r\n                         [cpPresetColors]=\"presetColors\"\r\n                         [style.background]=\"event.color.secondary\"\r\n                         (colorPickerChange)=\"event.color.secondary = $event; eventForm.patchValue({color:{secondary:$event}})\"/>\r\n              </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n              <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                  <input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Start Date\"\r\n                         name=\"start\"\r\n                         formControlName=\"start\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #startDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"no-errors-spacer\" fxFlex mat-no-float>\r\n                  <input matInput placeholder=\"Start Time\">\r\n              </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n              <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                  <input matInput [matDatepicker]=\"endDatePicker\" placeholder=\"End Date\"\r\n                         name=\"end\"\r\n                         formControlName=\"end\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #endDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"no-errors-spacer\" fxFlex mat-no-float>\r\n                  <input matInput placeholder=\"End Time\">\r\n              </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <mat-form-field formGroupName=\"meta\" class=\"w-100-p\">\r\n              <input matInput\r\n                     name=\"location\"\r\n                     formControlName=\"location\"\r\n                     placeholder=\"Location\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field formGroupName=\"meta\" class=\"w-100-p\">\r\n\r\n              <textarea matInput\r\n                        formControlName=\"notes\"\r\n                        placeholder=\"Notes\"\r\n                        mat-maxlength=\"250\"\r\n                        max-rows=\"4\">\r\n              </textarea>\r\n          </mat-form-field>\r\n\r\n      </form>\r\n\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n      <button *ngIf=\"action !=='edit'\"\r\n              mat-raised-button\r\n              (click)=\"dialogRef.close(eventForm)\"\r\n              class=\"save-button mat-accent\"\r\n              [disabled]=\"eventForm.invalid\"\r\n              aria-label=\"SAVE\">\r\n          SAVE\r\n      </button>\r\n\r\n      <button *ngIf=\"action ==='edit'\"\r\n              mat-raised-button\r\n              (click)=\"dialogRef.close(['save',eventForm])\"\r\n              class=\"save-button mat-accent\"\r\n              [disabled]=\"eventForm.invalid\"\r\n              aria-label=\"SAVE\">\r\n          SAVE\r\n      </button>\r\n\r\n      <button *ngIf=\"action ==='edit'\"\r\n              mat-icon-button\r\n              (click)=\"dialogRef.close(['delete',eventForm])\"\r\n              aria-label=\"Delete\"\r\n              matTooltip=\"Delete\">\r\n          <mat-icon>delete</mat-icon>\r\n      </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.event-form-dialog {\n  width: 480px; }\n@media screen and (max-width: 599px) {\n    .event-form-dialog {\n      width: 100%; } }\n.event-form-dialog .mat-dialog-container {\n    padding: 0; }\n.event-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.event-form-dialog .primary-color-input,\n  .event-form-dialog .secondary-color-input {\n    padding: 6px 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EventDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDialogComponent", function() { return EventDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/mat-colors */ "./src/@fuse/mat-colors/index.ts");
/* harmony import */ var _cal_event_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cal-event.model */ "./src/app/main/content/apps/calendar-client/cal-event.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EventDialogComponent = /** @class */ (function () {
    function EventDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.presetColors = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__["MatColors"].presets;
        this.event = data.event;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = this.event.title;
        }
        else {
            this.dialogTitle = 'New Event';
            this.event = new _cal_event_model__WEBPACK_IMPORTED_MODULE_4__["CalEventModel"]({
                start: data.date,
                end: data.date
            });
        }
        this.eventForm = this.createEventForm();
    }
    EventDialogComponent.prototype.createEventForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.title),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.start),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.end),
            allDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.allDay),
            color: this.formBuilder.group({
                primary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.color.primary),
                secondary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.color.secondary)
            }),
            meta: this.formBuilder.group({
                location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.meta.location),
                notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.meta.notes)
            })
        });
    };
    EventDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-dialog',
            template: __webpack_require__(/*! ./event-dialog.component.html */ "./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.html"),
            styles: [__webpack_require__(/*! ./event-dialog.component.scss */ "./src/app/main/content/apps/calendar-client/event-dialog/event-dialog.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EventDialogComponent);
    return EventDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-client-calendar-client-module.js.map