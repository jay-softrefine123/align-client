(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{BCWu:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=e("IHoO"),o=e("YNBZ"),d=e("t/Na"),a=e("XlPw"),i=(e("BuZO"),e("PG31"),e("+CCO")),r=function(){function l(l){this.http=l,this.baseUrl=i.a}return l.prototype.setHeaders=function(){var l=new d.g;return(l=l.set("Accept","application/json")).set("Content-Type","application/x-www-form-urlencoded")},l.prototype.postData=function(l,n,e){var u=this.setHeaders();return u=u.set("Authorization","Bearer 12344"),this.http.post(this.baseUrl+l,n,{headers:u}).map(this.extractData).catch(this.handleError)},l.prototype.getData=function(l,n){var e=this.setHeaders();return n&&(l+="?"+Object.keys(n).map(function(l){return l+"="+n[l]}).join("&")),this.http.get(this.baseUrl+l,{headers:e}).map(this.extractData).catch(this.handleError)},l.prototype.deleteData=function(l){var n=this.setHeaders();return this.http.delete(this.baseUrl+l,{headers:n}).map(this.extractData).catch(this.handleError)},l.prototype.extractData=function(l){return l||{}},l.prototype.handleError=function(l){var n=l.error;if("object"==typeof n.message){var e=Array.from(Object.keys(n.message),function(l){return n.message[l]});return Object(a.a)(e)}return Object(a.a)(n.message)},l}(),c=e("bOwL"),s=[{position:1,name:"File00012334444545436565465476",date:"12/02/2019"},{position:2,name:"File00012334444546767567656576575646",date:"12/02/2019"},{position:3,name:"File000123356756767657654444546",date:"12/02/2019"}],p=function(){function l(l,n,e){this.taskupload=l,this.apiloader=n,this.toast=e,this.displayedColumns=["position","name","date"],this.dataSource=s,this.fileName="Select",this.uploader=new o.FileUploader({url:"http://3.17.93.116/align/public/api/tasks/import",disableMultipart:!1,autoUpload:!1,method:"post"})}return l.prototype.ngOnInit=function(){var l=this;this.uploader.onErrorItem=function(n,e){return l.onErrorItem(n,e)},this.uploader.onSuccessItem=function(n,e){return l.onSuccessItem(n,e)}},l.prototype.uploadFile=function(){this.uploader.uploadAll()},l.prototype.onFileSelected=function(l){this.selectedFile=l[0],this.fileName=this.selectedFile.name},l.prototype.onSuccessItem=function(l,n){var e=JSON.parse(n);console.log(e)},l.prototype.onErrorItem=function(l,n){console.log(n)},l}(),m=function(){},f=e("XePT"),g=e("BHnd"),h=e("y4qS"),b=e("pIm3"),C=e("21Lb"),y=e("OzfB"),v=e("Mr+X"),x=e("SMsm"),w=e("gIcY"),O=e("5xlC"),M=e("bujt"),_=e("UodH"),k=e("dWZg"),P=e("lLAP"),R=u["\u0275crt"]({encapsulation:0,styles:[['.bulk-upload[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.bulk-upload[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.bulk-upload[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:500}.bulk-upload[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%], .bulk-upload[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]{font-size:18px;padding:15px 0}.download[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-left:10px;font-size:20px}.file[_ngcontent-%COMP%]{position:relative;display:inline-block;cursor:pointer;height:2.5rem;width:400px}input[_ngcontent-%COMP%]{min-width:14rem;margin:0;filter:alpha(opacity=0);opacity:0}.file-custom[_ngcontent-%COMP%]{position:absolute;top:-5px;right:0;left:0;z-index:5;font-size:16px;height:40px;padding:.5rem 1rem;line-height:1.7;color:#555;background-color:#fff;border:.075rem solid #ddd;border-radius:.25rem;box-shadow:inset 0 .2rem .4rem rgba(0,0,0,.05);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:767px){.file[_ngcontent-%COMP%]{width:320px;margin:15px 0}.file-custom[_ngcontent-%COMP%]{top:-10px}}span.file-custom[_ngcontent-%COMP%]:before{position:absolute;top:-.075rem;right:-.075rem;bottom:-.075rem;z-index:6;font-size:18px;display:block;content:"Choose a File";height:40px;padding:.5rem 1rem;line-height:1.5;color:#000;background:#f57d3f;border:.075rem solid #ddd;border-radius:0 .25rem .25rem 0}.file-history[_ngcontent-%COMP%]{width:100%;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.file-history[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]{background:#f57d3f;font-size:14px;font-weight:700;color:#000}.upload[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px;background-color:#006b48!important}@media only screen and (max-width:767px){.upload[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:0}}.set_height[_ngcontent-%COMP%]{overflow-y:scroll}']],data:{}});function F(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),u["\u0275did"](1,16384,null,0,g.h,[h.d,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,null,[" No. "]))],null,null)}function E(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),u["\u0275did"](1,16384,null,0,g.a,[h.d,u.ElementRef],null,null),(l()(),u["\u0275ted"](2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.position)})}function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),u["\u0275did"](1,16384,null,0,g.h,[h.d,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,null,[" Name "]))],null,null)}function S(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),u["\u0275did"](1,16384,null,0,g.a,[h.d,u.ElementRef],null,null),(l()(),u["\u0275ted"](2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.name)})}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),u["\u0275did"](1,16384,null,0,g.h,[h.d,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,null,[" Date "]))],null,null)}function I(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),u["\u0275did"](1,16384,null,0,g.a,[h.d,u.ElementRef],null,null),(l()(),u["\u0275ted"](2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.date)})}function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,b.f,b.b)),u["\u0275did"](1,49152,null,0,g.j,[],null,null)],null,null)}function U(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,b.g,b.c)),u["\u0275did"](1,49152,null,0,g.l,[],null,null)],null,null)}function q(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,95,"div",[["class","page-layout simple left-sidenav inner-sidenav"],["id","task-upload"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,13,"div",[["class","header mat-accent-bg p-16 p-sm-24"],["fxLayout","column"],["fxLayout.gt-xs","row"],["fxLayoutAlign","start start"],["fxLayoutAlign.gt-xs","space-between center"]],null,null,null,null,null)),u["\u0275did"](2,737280,null,0,C.g,[y.g,u.ElementRef,y.k],{layout:[0,"layout"],layoutGtXs:[1,"layoutGtXs"]},null),u["\u0275did"](3,737280,null,0,C.f,[y.g,u.ElementRef,[6,C.g],y.k],{align:[0,"align"],alignGtXs:[1,"alignGtXs"]},null),(l()(),u["\u0275eld"](4,0,null,null,10,"div",[["fxLayout","row"],["fxLayoutAlign","start center"]],null,null,null,null,null)),u["\u0275did"](5,737280,null,0,C.g,[y.g,u.ElementRef,y.k],{layout:[0,"layout"]},null),u["\u0275did"](6,737280,null,0,C.f,[y.g,u.ElementRef,[6,C.g],y.k],{align:[0,"align"]},null),(l()(),u["\u0275eld"](7,0,null,null,7,"div",[["class","logo"],["fxLayout","row"],["fxLayoutAlign","start center"]],null,null,null,null,null)),u["\u0275did"](8,737280,null,0,C.g,[y.g,u.ElementRef,y.k],{layout:[0,"layout"]},null),u["\u0275did"](9,737280,null,0,C.f,[y.g,u.ElementRef,[6,C.g],y.k],{align:[0,"align"]},null),(l()(),u["\u0275eld"](10,0,null,null,2,"mat-icon",[["class","logo-icon mr-16 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,v.b,v.a)),u["\u0275did"](11,638976,null,0,x.b,[u.ElementRef,x.d,[8,null]],null,null),(l()(),u["\u0275ted"](-1,0,["publish"])),(l()(),u["\u0275eld"](13,0,null,null,1,"span",[["class","logo-text h1"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Bulk Task Upload"])),(l()(),u["\u0275eld"](15,0,null,null,80,"div",[["class","bulk-upload p-24"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,3,"div",[["class","title"]],null,null,null,null,null)),(l()(),u["\u0275eld"](17,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),u["\u0275eld"](18,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-upload"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Import Data From Excel Sheet "])),(l()(),u["\u0275eld"](20,0,null,null,4,"div",[["class","download"]],null,null,null,null,null)),(l()(),u["\u0275eld"](21,0,null,null,1,"span",[["style","color: #949090; padding-right: 5px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Download File : "])),(l()(),u["\u0275ted"](-1,null,[" Download Template "])),(l()(),u["\u0275eld"](24,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-download"]],null,null,null,null,null)),(l()(),u["\u0275eld"](25,0,null,null,15,"div",[["class","upload"]],null,null,null,null,null)),(l()(),u["\u0275eld"](26,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0;return"submit"===n&&(t=!1!==u["\u0275nov"](l,28).onSubmit(e)&&t),"reset"===n&&(t=!1!==u["\u0275nov"](l,28).onReset()&&t),t},null,null)),u["\u0275did"](27,16384,null,0,w.B,[],null,null),u["\u0275did"](28,4210688,null,0,w.s,[[8,null],[8,null]],null,null),u["\u0275prd"](2048,null,w.c,null,[w.s]),u["\u0275did"](30,16384,null,0,w.r,[[4,w.c]],null,null),(l()(),u["\u0275eld"](31,0,null,null,1,"span",[["style","color: #949090; padding-right: 5px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Upload File : "])),(l()(),u["\u0275eld"](33,0,null,null,4,"label",[["class","file"]],null,null,null,null,null)),(l()(),u["\u0275eld"](34,0,null,null,1,"input",[["aria-label","File browser example"],["id","file"],["ng2FileSelect",""],["type","file"]],null,[[null,"onFileSelected"],[null,"change"]],function(l,n,e){var t=!0,o=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,35).onChange()&&t),"onFileSelected"===n&&(t=!1!==o.onFileSelected(e)&&t),t},null,null)),u["\u0275did"](35,16384,null,0,O.FileSelectDirective,[u.ElementRef],{uploader:[0,"uploader"]},{onFileSelected:"onFileSelected"}),(l()(),u["\u0275eld"](36,0,null,null,1,"span",[["class","file-custom"]],null,null,null,null,null)),(l()(),u["\u0275ted"](37,null,["",""])),(l()(),u["\u0275eld"](38,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.uploadFile()&&u),u},M.d,M.b)),u["\u0275did"](39,180224,null,0,_.b,[u.ElementRef,k.a,P.g],{color:[0,"color"]},null),(l()(),u["\u0275ted"](-1,0,["Save Changes"])),(l()(),u["\u0275eld"](41,0,null,null,54,"div",[["class","history"]],null,null,null,null,null)),(l()(),u["\u0275eld"](42,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),u["\u0275eld"](43,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["History :"])),(l()(),u["\u0275eld"](45,0,null,null,50,"div",[["class","set_height"],["fxFlex","100"],["fxFlex.gt-md","98"]],null,null,null,null,null)),u["\u0275did"](46,737280,null,0,C.b,[y.g,u.ElementRef,[3,C.g],y.k,[2,y.a]],{flex:[0,"flex"],flexGtMd:[1,"flexGtMd"]},null),(l()(),u["\u0275eld"](47,0,null,null,48,"table",[["class","file-history mat-table"],["mat-table",""]],null,null,null,b.h,b.d)),u["\u0275did"](48,2342912,null,4,g.n,[u.IterableDiffers,u.ChangeDetectorRef,u.ElementRef,[8,null]],{dataSource:[0,"dataSource"]},null),u["\u0275qud"](603979776,1,{_contentColumnDefs:1}),u["\u0275qud"](603979776,2,{_contentRowDefs:1}),u["\u0275qud"](335544320,3,{_headerRowDef:0}),u["\u0275qud"](335544320,4,{_footerRowDef:0}),(l()(),u["\u0275eld"](53,0,null,null,11,null,null,null,null,null,null,null)),u["\u0275did"](54,16384,null,3,g.c,[],{name:[0,"name"]},null),u["\u0275qud"](335544320,5,{cell:0}),u["\u0275qud"](335544320,6,{headerCell:0}),u["\u0275qud"](335544320,7,{footerCell:0}),u["\u0275prd"](2048,[[1,4]],h.d,null,[g.c]),(l()(),u["\u0275and"](0,null,null,2,null,F)),u["\u0275did"](60,16384,null,0,g.i,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[6,4]],h.j,null,[g.i]),(l()(),u["\u0275and"](0,null,null,2,null,E)),u["\u0275did"](63,16384,null,0,g.b,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[5,4]],h.b,null,[g.b]),(l()(),u["\u0275eld"](65,0,null,null,11,null,null,null,null,null,null,null)),u["\u0275did"](66,16384,null,3,g.c,[],{name:[0,"name"]},null),u["\u0275qud"](335544320,8,{cell:0}),u["\u0275qud"](335544320,9,{headerCell:0}),u["\u0275qud"](335544320,10,{footerCell:0}),u["\u0275prd"](2048,[[1,4]],h.d,null,[g.c]),(l()(),u["\u0275and"](0,null,null,2,null,D)),u["\u0275did"](72,16384,null,0,g.i,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[9,4]],h.j,null,[g.i]),(l()(),u["\u0275and"](0,null,null,2,null,S)),u["\u0275did"](75,16384,null,0,g.b,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[8,4]],h.b,null,[g.b]),(l()(),u["\u0275eld"](77,0,null,null,11,null,null,null,null,null,null,null)),u["\u0275did"](78,16384,null,3,g.c,[],{name:[0,"name"]},null),u["\u0275qud"](335544320,11,{cell:0}),u["\u0275qud"](335544320,12,{headerCell:0}),u["\u0275qud"](335544320,13,{footerCell:0}),u["\u0275prd"](2048,[[1,4]],h.d,null,[g.c]),(l()(),u["\u0275and"](0,null,null,2,null,T)),u["\u0275did"](84,16384,null,0,g.i,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[12,4]],h.j,null,[g.i]),(l()(),u["\u0275and"](0,null,null,2,null,I)),u["\u0275did"](87,16384,null,0,g.b,[u.TemplateRef],null,null),u["\u0275prd"](2048,[[11,4]],h.b,null,[g.b]),(l()(),u["\u0275eld"](89,0,null,null,6,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275and"](0,null,null,2,null,L)),u["\u0275did"](91,540672,null,0,g.k,[u.TemplateRef,u.IterableDiffers],{columns:[0,"columns"]},null),u["\u0275prd"](2048,[[3,4]],h.l,null,[g.k]),(l()(),u["\u0275and"](0,null,null,2,null,U)),u["\u0275did"](94,540672,null,0,g.m,[u.TemplateRef,u.IterableDiffers],{columns:[0,"columns"]},null),u["\u0275prd"](2048,[[2,4]],h.n,null,[g.m])],function(l,n){var e=n.component;l(n,2,0,"column","row"),l(n,3,0,"start start","space-between center"),l(n,5,0,"row"),l(n,6,0,"start center"),l(n,8,0,"row"),l(n,9,0,"start center"),l(n,11,0),l(n,35,0,e.uploader),l(n,39,0,"primary"),l(n,46,0,"100","98"),l(n,48,0,e.dataSource),l(n,54,0,"position"),l(n,66,0,"name"),l(n,78,0,"date"),l(n,91,0,e.displayedColumns),l(n,94,0,e.displayedColumns)},function(l,n){var e=n.component;l(n,10,0,u["\u0275nov"](n,11).inline),l(n,26,0,u["\u0275nov"](n,30).ngClassUntouched,u["\u0275nov"](n,30).ngClassTouched,u["\u0275nov"](n,30).ngClassPristine,u["\u0275nov"](n,30).ngClassDirty,u["\u0275nov"](n,30).ngClassValid,u["\u0275nov"](n,30).ngClassInvalid,u["\u0275nov"](n,30).ngClassPending),l(n,37,0,e.fileName),l(n,38,0,u["\u0275nov"](n,39).disabled||null)})}var z=u["\u0275ccf"]("app-bulk-task-upload",p,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-bulk-task-upload",[],null,null,null,q,R)),u["\u0275did"](1,114688,null,0,p,[r,t.a,c.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),N=e("Ip0R"),j=e("ZYjt"),A=e("Wf4p"),B=e("ZYCi"),H=e("Fzqc"),G=e("hUWP"),X=e("V9q+"),Z=e("RaCk"),Y=e("Tk7p"),W=e("SZbH"),J=e("5HBU"),V=e("seP3"),$=e("/VYK"),K=e("b716"),Q=e("S6T7");e.d(n,"TaskUploadModuleNgFactory",function(){return ll});var ll=u["\u0275cmf"](m,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[f.a,z]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,N.NgLocalization,N.NgLocaleLocalization,[u.LOCALE_ID,[2,N["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,w.C,w.C,[]),u["\u0275mpd"](4608,w.e,w.e,[]),u["\u0275mpd"](4608,y.i,y.h,[y.d,y.f]),u["\u0275mpd"](5120,u.APP_BOOTSTRAP_LISTENER,function(l,n){return[y.l(l,n)]},[N.DOCUMENT,u.PLATFORM_ID]),u["\u0275mpd"](5120,x.d,x.a,[[3,x.d],[2,d.c],j.DomSanitizer,[2,N.DOCUMENT]]),u["\u0275mpd"](4608,A.d,A.d,[]),u["\u0275mpd"](4608,r,r,[d.c]),u["\u0275mpd"](1073742336,N.CommonModule,N.CommonModule,[]),u["\u0275mpd"](1073742336,B.s,B.s,[[2,B.y],[2,B.o]]),u["\u0275mpd"](1073742336,w.z,w.z,[]),u["\u0275mpd"](1073742336,w.l,w.l,[]),u["\u0275mpd"](1073742336,w.v,w.v,[]),u["\u0275mpd"](1073742336,y.e,y.e,[]),u["\u0275mpd"](1073742336,H.a,H.a,[]),u["\u0275mpd"](1073742336,C.d,C.d,[]),u["\u0275mpd"](1073742336,G.b,G.b,[]),u["\u0275mpd"](1073742336,X.a,X.a,[[2,y.j],u.PLATFORM_ID]),u["\u0275mpd"](1073742336,Z.a,Z.a,[]),u["\u0275mpd"](1073742336,Y.a,Y.a,[]),u["\u0275mpd"](1073742336,W.i,W.i,[]),u["\u0275mpd"](1073742336,J.a,J.a,[]),u["\u0275mpd"](1073742336,A.n,A.n,[[2,A.f]]),u["\u0275mpd"](1073742336,k.b,k.b,[]),u["\u0275mpd"](1073742336,A.y,A.y,[]),u["\u0275mpd"](1073742336,_.c,_.c,[]),u["\u0275mpd"](1073742336,V.e,V.e,[]),u["\u0275mpd"](1073742336,x.c,x.c,[]),u["\u0275mpd"](1073742336,$.d,$.d,[]),u["\u0275mpd"](1073742336,K.c,K.c,[]),u["\u0275mpd"](1073742336,h.p,h.p,[]),u["\u0275mpd"](1073742336,g.p,g.p,[]),u["\u0275mpd"](1073742336,Q.FileUploadModule,Q.FileUploadModule,[]),u["\u0275mpd"](1073742336,m,m,[]),u["\u0275mpd"](256,W.b,{default:W.a,config:{timeOut:5e3,positionClass:"toast-top-right",preventDuplicates:!0}},[]),u["\u0275mpd"](1024,B.m,function(){return[[{path:"",component:p}]]},[])])})}}]);