(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4epT":function(t,e,n){"use strict";n.d(e,"d",function(){return p}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return l}),n.d(e,"a",function(){return c});var i=n("CcnG"),o=n("K9Ia"),a=n("mrSG"),r=n("n6gG"),s=n("Wf4p"),l=function(){function t(){this.changes=new o.a,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=function(t,e,n){if(0==n||0==e)return"0 of "+n;var i=t*e;return i+1+" - "+(i<(n=Math.max(n,0))?Math.min(i+e,n):i+e)+" of "+n}}return t.ngInjectableDef=Object(i.defineInjectable)({factory:function(){return new t},token:t,providedIn:"root"}),t}();function c(t){return t||new l}var u=function(t){function e(e,n){var o=t.call(this)||this;return o._intl=e,o._changeDetectorRef=n,o._pageIndex=0,o._length=0,o._pageSizeOptions=[],o._hidePageSize=!1,o._showFirstLastButtons=!1,o.page=new i.EventEmitter,o._intlChanges=e.changes.subscribe(function(){return o._changeDetectorRef.markForCheck()}),o}return Object(a.__extends)(e,t),Object.defineProperty(e.prototype,"pageIndex",{get:function(){return this._pageIndex},set:function(t){this._pageIndex=Math.max(Object(r.e)(t),0),this._changeDetectorRef.markForCheck()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._length},set:function(t){this._length=Object(r.e)(t),this._changeDetectorRef.markForCheck()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pageSize",{get:function(){return this._pageSize},set:function(t){this._pageSize=Math.max(Object(r.e)(t),0),this._updateDisplayedPageSizeOptions()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pageSizeOptions",{get:function(){return this._pageSizeOptions},set:function(t){this._pageSizeOptions=(t||[]).map(function(t){return Object(r.e)(t)}),this._updateDisplayedPageSizeOptions()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hidePageSize",{get:function(){return this._hidePageSize},set:function(t){this._hidePageSize=Object(r.c)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"showFirstLastButtons",{get:function(){return this._showFirstLastButtons},set:function(t){this._showFirstLastButtons=Object(r.c)(t)},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()},e.prototype.ngOnDestroy=function(){this._intlChanges.unsubscribe()},e.prototype.nextPage=function(){if(this.hasNextPage()){var t=this.pageIndex;this.pageIndex++,this._emitPageEvent(t)}},e.prototype.previousPage=function(){if(this.hasPreviousPage()){var t=this.pageIndex;this.pageIndex--,this._emitPageEvent(t)}},e.prototype.firstPage=function(){if(this.hasPreviousPage()){var t=this.pageIndex;this.pageIndex=0,this._emitPageEvent(t)}},e.prototype.lastPage=function(){if(this.hasNextPage()){var t=this.pageIndex;this.pageIndex=this.getNumberOfPages(),this._emitPageEvent(t)}},e.prototype.hasPreviousPage=function(){return this.pageIndex>=1&&0!=this.pageSize},e.prototype.hasNextPage=function(){var t=this.getNumberOfPages();return this.pageIndex<t&&0!=this.pageSize},e.prototype.getNumberOfPages=function(){return Math.ceil(this.length/this.pageSize)-1},e.prototype._changePageSize=function(t){var e=this.pageIndex;this.pageIndex=Math.floor(this.pageIndex*this.pageSize/t)||0,this.pageSize=t,this._emitPageEvent(e)},e.prototype._updateDisplayedPageSizeOptions=function(){this._initialized&&(this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort(function(t,e){return t-e}),this._changeDetectorRef.markForCheck())},e.prototype._emitPageEvent=function(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})},e}(Object(s.I)(function(){})),p=function(){}},Azqq:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return d});var i=n("CcnG"),o=(n("uGex"),n("Ip0R")),a=n("eDkP"),r=n("Fzqc"),s=(n("4c35"),n("dWZg"),n("qAlS"),n("Wf4p"),n("seP3"),n("gIcY"),i["\u0275crt"]({encapsulation:2,styles:[".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper,.mat-form-field-appearance-standard .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;transition:none;display:block}"],data:{animation:[{type:7,name:"transformPanel",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"scaleY(0)",minWidth:"100%",opacity:0},offset:null},options:void 0},{type:0,name:"showing",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:0,name:"showing-multiple",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:3,steps:[{type:11,selector:"@fadeInContent",animation:{type:9,options:null},options:null},{type:4,styles:null,timings:"150ms cubic-bezier(0.25, 0.8, 0.25, 1)"}],options:null},options:null},{type:1,expr:"* => void",animation:[{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"250ms 100ms linear"}],options:null}],options:{}},{type:7,name:"fadeInContent",definitions:[{type:0,name:"showing",styles:{type:6,styles:{opacity:1},offset:null},options:void 0},{type:1,expr:"void => showing",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:null,timings:"150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"}],options:null}],options:{}}]}}));function l(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"span",[["class","mat-select-placeholder"]],null,null,null,null,null)),(t()(),i["\u0275ted"](1,null,["",""]))],null,function(t,e){t(e,1,0,e.component.placeholder||"\xa0")})}function c(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),i["\u0275ted"](1,null,["",""]))],null,function(t,e){t(e,1,0,e.component.triggerValue)})}function u(t){return i["\u0275vid"](0,[i["\u0275ncd"](null,0),(t()(),i["\u0275and"](0,null,null,0))],null,null)}function p(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,5,"span",[["class","mat-select-value-text"]],null,null,null,null,null)),i["\u0275did"](1,16384,null,0,o.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,c)),i["\u0275did"](3,16384,null,0,o.NgSwitchDefault,[i.ViewContainerRef,i.TemplateRef,o.NgSwitch],null,null),(t()(),i["\u0275and"](16777216,null,null,1,null,u)),i["\u0275did"](5,278528,null,0,o.NgSwitchCase,[i.ViewContainerRef,i.TemplateRef,o.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(t,e){t(e,1,0,!!e.component.customTrigger),t(e,5,0,!0)},null)}function h(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,[[2,0],["panel",1]],null,3,"div",[],[[24,"@transformPanel",0],[4,"transformOrigin",null],[2,"mat-select-panel-done-animating",null],[4,"font-size","px"]],[[null,"@transformPanel.done"],[null,"keydown"]],function(t,e,n){var i=!0,o=t.component;return"@transformPanel.done"===e&&(i=!1!==o._onPanelDone()&&i),"keydown"===e&&(i=!1!==o._handleKeydown(n)&&i),i},null,null)),i["\u0275did"](1,278528,null,0,o.NgClass,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),i["\u0275eld"](2,0,null,null,1,"div",[["class","mat-select-content"]],[[24,"@fadeInContent",0]],[[null,"@fadeInContent.done"]],function(t,e,n){var i=!0;return"@fadeInContent.done"===e&&(i=!1!==t.component._onFadeInDone()&&i),i},null,null)),i["\u0275ncd"](null,1)],function(t,e){var n=e.component;t(e,1,0,i["\u0275inlineInterpolate"](1,"mat-select-panel ",n._getPanelTheme(),""),n.panelClass)},function(t,e){var n=e.component;t(e,0,0,n.multiple?"showing-multiple":"showing",n._transformOrigin,n._panelDoneAnimating,n._triggerFontSize),t(e,2,0,"showing")})}function d(t){return i["\u0275vid"](2,[i["\u0275qud"](402653184,1,{trigger:0}),i["\u0275qud"](671088640,2,{panel:0}),i["\u0275qud"](402653184,3,{overlayDir:0}),(t()(),i["\u0275eld"](3,0,[[1,0],["trigger",1]],null,9,"div",[["aria-hidden","true"],["cdk-overlay-origin",""],["class","mat-select-trigger"]],null,[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.toggle()&&i),i},null,null)),i["\u0275did"](4,16384,[["origin",4]],0,a.b,[i.ElementRef],null,null),(t()(),i["\u0275eld"](5,0,null,null,5,"div",[["class","mat-select-value"]],null,null,null,null,null)),i["\u0275did"](6,16384,null,0,o.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,l)),i["\u0275did"](8,278528,null,0,o.NgSwitchCase,[i.ViewContainerRef,i.TemplateRef,o.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,p)),i["\u0275did"](10,278528,null,0,o.NgSwitchCase,[i.ViewContainerRef,i.TemplateRef,o.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),i["\u0275eld"](11,0,null,null,1,"div",[["class","mat-select-arrow-wrapper"]],null,null,null,null,null)),(t()(),i["\u0275eld"](12,0,null,null,0,"div",[["class","mat-select-arrow"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,1,function(t,e,n){var i=!0,o=t.component;return"backdropClick"===e&&(i=!1!==o.close()&&i),"attach"===e&&(i=!1!==o._onAttached()&&i),"detach"===e&&(i=!1!==o.close()&&i),i},h)),i["\u0275did"](14,671744,[[3,4]],0,a.a,[a.c,i.TemplateRef,i.ViewContainerRef,a.j,[2,r.b]],{origin:[0,"origin"],positions:[1,"positions"],offsetY:[2,"offsetY"],minWidth:[3,"minWidth"],backdropClass:[4,"backdropClass"],scrollStrategy:[5,"scrollStrategy"],open:[6,"open"],hasBackdrop:[7,"hasBackdrop"],lockPosition:[8,"lockPosition"]},{backdropClick:"backdropClick",attach:"attach",detach:"detach"})],function(t,e){var n=e.component;t(e,6,0,n.empty),t(e,8,0,!0),t(e,10,0,!1),t(e,14,0,i["\u0275nov"](e,4),n._positions,n._offsetY,null==n._triggerRect?null:n._triggerRect.width,"cdk-overlay-transparent-backdrop",n._scrollStrategy,n.panelOpen,"","")},null)}},OkvK:function(t,e,n){"use strict";n.d(e,"e",function(){return d}),n.d(e,"c",function(){return h}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return p}),n.d(e,"b",function(){return c});var i=n("mrSG"),o=n("CcnG"),a=n("n6gG"),r=n("Wf4p"),s=n("K9Ia"),l=n("p0ib");n("ihYY");var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sortables=new Map,e._stateChanges=new s.a,e.start="asc",e._direction="",e.sortChange=new o.EventEmitter,e}return Object(i.__extends)(e,t),Object.defineProperty(e.prototype,"direction",{get:function(){return this._direction},set:function(t){if(Object(o.isDevMode)()&&t&&"asc"!==t&&"desc"!==t)throw function(t){return Error(t+" is not a valid sort direction ('asc' or 'desc').")}(t);this._direction=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disableClear",{get:function(){return this._disableClear},set:function(t){this._disableClear=Object(a.c)(t)},enumerable:!0,configurable:!0}),e.prototype.register=function(t){if(!t.id)throw Error("MatSortHeader must be provided with a unique id.");if(this.sortables.has(t.id))throw Error("Cannot have two MatSortables with the same id ("+t.id+").");this.sortables.set(t.id,t)},e.prototype.deregister=function(t){this.sortables.delete(t.id)},e.prototype.sort=function(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})},e.prototype.getNextSortDirection=function(t){if(!t)return"";var e,n,i=(e=null!=t.disableClear?t.disableClear:this.disableClear,n=["asc","desc"],"desc"==(t.start||this.start)&&n.reverse(),e||n.push(""),n),o=i.indexOf(this.direction)+1;return o>=i.length&&(o=0),i[o]},e.prototype.ngOnInit=function(){this._markInitialized()},e.prototype.ngOnChanges=function(){this._stateChanges.next()},e.prototype.ngOnDestroy=function(){this._stateChanges.complete()},e}(Object(r.I)(Object(r.G)(function(){}))),u=function(){function t(){this.changes=new s.a,this.sortButtonLabel=function(t){return"Change sorting for "+t}}return t.ngInjectableDef=Object(o.defineInjectable)({factory:function(){return new t},token:t,providedIn:"root"}),t}();function p(t){return t||new u}var h=function(t){function e(e,n,i,o){var a=t.call(this)||this;if(a._intl=e,a._sort=i,a._cdkColumnDef=o,a._showIndicatorHint=!1,a._arrowDirection="",a._disableViewStateAnimation=!1,a.arrowPosition="after",!i)throw Error("MatSortHeader must be placed within a parent element with the MatSort directive.");return a._rerenderSubscription=Object(l.a)(i.sortChange,i._stateChanges,e.changes).subscribe(function(){a._isSorted()&&a._updateArrowDirection(),!a._isSorted()&&a._viewState&&"active"===a._viewState.toState&&(a._disableViewStateAnimation=!1,a._setAnimationTransitionState({fromState:"active",toState:a._arrowDirection})),n.markForCheck()}),a}return Object(i.__extends)(e,t),Object.defineProperty(e.prototype,"disableClear",{get:function(){return this._disableClear},set:function(t){this._disableClear=Object(a.c)(t)},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){!this.id&&this._cdkColumnDef&&(this.id=this._cdkColumnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this)},e.prototype.ngOnDestroy=function(){this._sort.deregister(this),this._rerenderSubscription.unsubscribe()},e.prototype._setIndicatorHintVisible=function(t){this._isDisabled()&&t||(this._showIndicatorHint=t,this._isSorted()||(this._updateArrowDirection(),this._setAnimationTransitionState(this._showIndicatorHint?{fromState:this._arrowDirection,toState:"hint"}:{fromState:"hint",toState:this._arrowDirection})))},e.prototype._setAnimationTransitionState=function(t){this._viewState=t,this._disableViewStateAnimation&&(this._viewState={toState:t.toState})},e.prototype._handleClick=function(){if(!this._isDisabled()){this._sort.sort(this),"hint"!==this._viewState.toState&&"active"!==this._viewState.toState||(this._disableViewStateAnimation=!0);var t=this._isSorted()?{fromState:this._arrowDirection,toState:"active"}:{fromState:"active",toState:this._arrowDirection};this._setAnimationTransitionState(t),this._showIndicatorHint=!1}},e.prototype._isSorted=function(){return this._sort.active==this.id&&("asc"===this._sort.direction||"desc"===this._sort.direction)},e.prototype._getArrowDirectionState=function(){return(this._isSorted()?"active-":"")+this._arrowDirection},e.prototype._getArrowViewState=function(){var t=this._viewState.fromState;return(t?t+"-to-":"")+this._viewState.toState},e.prototype._updateArrowDirection=function(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start},e.prototype._isDisabled=function(){return this._sort.disabled||this.disabled},e.prototype._getAriaSortAttribute=function(){return this._isSorted()?"asc"==this._sort.direction?"ascending":"descending":null},e}(Object(r.G)(function(){})),d=function(){}},vARd:function(t,e,n){"use strict";n.d(e,"e",function(){return _}),n.d(e,"b",function(){return g}),n.d(e,"c",function(){return m}),n.d(e,"d",function(){return f}),n.d(e,"a",function(){return h}),n.d(e,"f",function(){return p}),n.d(e,"g",function(){return d});var i=n("K9Ia"),o=n("CcnG"),a=(n("ihYY"),n("Wf4p"),n("mrSG")),r=n("4c35"),s=n("t9fZ"),l=n("ny24"),c=n("vGXY"),u=n("eDkP"),p=function(){function t(t,e){var n=this;this._overlayRef=e,this._afterDismissed=new i.a,this._afterOpened=new i.a,this._onAction=new i.a,this._dismissedByAction=!1,this.containerInstance=t,this.onAction().subscribe(function(){return n.dismiss()}),t._onExit.subscribe(function(){return n._finishDismiss()})}return t.prototype.dismiss=function(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)},t.prototype.dismissWithAction=function(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete())},t.prototype.closeWithAction=function(){this.dismissWithAction()},t.prototype._dismissAfter=function(t){var e=this;this._durationTimeoutId=setTimeout(function(){return e.dismiss()},t)},t.prototype._open=function(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())},t.prototype._finishDismiss=function(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1},t.prototype.afterDismissed=function(){return this._afterDismissed.asObservable()},t.prototype.afterOpened=function(){return this.containerInstance._onEnter},t.prototype.onAction=function(){return this._onAction.asObservable()},t}(),h=new o.InjectionToken("MatSnackBarData"),d=function(){function t(t,e){this.snackBarRef=t,this.data=e}return t.prototype.action=function(){this.snackBarRef.dismissWithAction()},Object.defineProperty(t.prototype,"hasAction",{get:function(){return!!this.data.action},enumerable:!0,configurable:!0}),t}(),f=function(t){function e(e,n,o){var a=t.call(this)||this;return a._ngZone=e,a._elementRef=n,a._changeDetectorRef=o,a._destroyed=!1,a._onExit=new i.a,a._onEnter=new i.a,a._animationState="void",a}return Object(a.__extends)(e,t),e.prototype.attachComponentPortal=function(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(t)},e.prototype.attachTemplatePortal=function(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(t)},e.prototype.onAnimationEnd=function(t){var e=t.toState;if(("void"===e&&"void"!==t.fromState||e.startsWith("hidden"))&&this._completeExit(),e.startsWith("visible")){var n=this._onEnter;this._ngZone.run(function(){n.next(),n.complete()})}},e.prototype.enter=function(){this._destroyed||(this._animationState="visible-"+this.snackBarConfig.verticalPosition,this._changeDetectorRef.detectChanges())},e.prototype.exit=function(){return this._animationState="hidden-"+this.snackBarConfig.verticalPosition,this._onExit},e.prototype.ngOnDestroy=function(){this._destroyed=!0,this._completeExit()},e.prototype._completeExit=function(){var t=this;this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(s.a)(1)).subscribe(function(){t._onExit.next(),t._onExit.complete()})},e.prototype._applySnackBarClasses=function(){var t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(function(e){return t.classList.add(e)}):t.classList.add(e)),"center"===this.snackBarConfig.horizontalPosition&&t.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&t.classList.add("mat-snack-bar-top")},e.prototype._assertNotAttached=function(){if(this._portalOutlet.hasAttached())throw Error("Attempting to attach snack bar content after content is already attached")},e}(r.a),g=new o.InjectionToken("mat-snack-bar-default-options",{providedIn:"root",factory:function(){return new function(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}}),m=function(){function t(t,e,n,i,o,a){this._overlay=t,this._live=e,this._injector=n,this._breakpointObserver=i,this._parentSnackBar=o,this._defaultConfig=a,this._snackBarRefAtThisLevel=null}return Object.defineProperty(t.prototype,"_openedSnackBarRef",{get:function(){var t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel},set:function(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t},enumerable:!0,configurable:!0}),t.prototype.openFromComponent=function(t,e){return this._attach(t,e)},t.prototype.openFromTemplate=function(t,e){return this._attach(t,e)},t.prototype.open=function(t,e,n){void 0===e&&(e="");var i=Object(a.__assign)({},this._defaultConfig,n);return i.data={message:t,action:e},i.announcementMessage=t,this.openFromComponent(d,i)},t.prototype.dismiss=function(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()},t.prototype._attachSnackBarContainer=function(t,e){var n=new r.d(f,e.viewContainerRef),i=t.attach(n);return i.instance.snackBarConfig=e,i.instance},t.prototype._attach=function(t,e){var n=Object(a.__assign)({},this._defaultConfig,e),i=this._createOverlay(n),u=this._attachSnackBarContainer(i,n),h=new p(u,i);if(t instanceof o.TemplateRef){var d=new r.h(t,null,{$implicit:n.data,snackBarRef:h});h.instance=u.attachTemplatePortal(d)}else{var f=this._createInjector(n,h),g=(d=new r.d(t,void 0,f),u.attachComponentPortal(d));h.instance=g.instance}return this._breakpointObserver.observe(c.b.Handset).pipe(Object(l.a)(i.detachments().pipe(Object(s.a)(1)))).subscribe(function(t){t.matches?i.overlayElement.classList.add("mat-snack-bar-handset"):i.overlayElement.classList.remove("mat-snack-bar-handset")}),this._animateSnackBar(h,n),this._openedSnackBarRef=h,this._openedSnackBarRef},t.prototype._animateSnackBar=function(t,e){var n=this;t.afterDismissed().subscribe(function(){n._openedSnackBarRef==t&&(n._openedSnackBarRef=null)}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(function(){t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(function(){return t._dismissAfter(e.duration)}),e.announcementMessage&&this._live.announce(e.announcementMessage,e.politeness)},t.prototype._createOverlay=function(t){var e=new u.d;e.direction=t.direction;var n=this._overlay.position().global(),i="rtl"===t.direction,o="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!i||"end"===t.horizontalPosition&&i,a=!o&&"center"!==t.horizontalPosition;return o?n.left("0"):a?n.right("0"):n.centerHorizontally(),"top"===t.verticalPosition?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)},t.prototype._createInjector=function(t,e){var n=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=new WeakMap;return i.set(p,e),i.set(h,t.data),new r.f(n||this._injector,i)},t}(),_=function(){}}}]);