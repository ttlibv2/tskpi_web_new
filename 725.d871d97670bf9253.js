"use strict";(self.webpackChunkTS24AppWeb=self.webpackChunkTS24AppWeb||[]).push([[725],{5725:(M,g,s)=>{s.r(g),s.d(g,{QuestionModule:()=>c});var d=s(9808),n=s(3075),z=(s(8267),s(3046)),o=s(5e3);let h=(()=>{class e extends z.P{constructor(){super(...arguments),this.path="questions"}findAll(r){return super.findAll(r)}}return e.\u0275fac=function(){let t;return function(a){return(t||(t=o.n5z(e)))(a||e)}}(),e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=s(5067),p=s(857),C=s(663),m=s(6114),f=s(4376),k=s(1047);let x=(()=>{class e extends u.D{constructor(r){super(r),this.ghelps=[],this.gridColumn=[{headerName:"STT",field:"question_id",width:90,headerCheckboxSelection:!0,checkboxSelection:!0},{headerName:"C\xe2u h\u1ecfi",field:"question",width:300},{headerName:"C\xe2u tr\u1ea3 l\u1eddi",field:"reply"},{headerName:"Lo\u1ea1i",field:"type"},{headerName:"Chia s\u1ebb",field:"is_shared",width:90,cellRenderer:a=>this.cellCheckHtml(a)}],this.fncOnLoadData=()=>this.ctr.findAll({user_id:this.users.read().id,is_shared:!0})}cellCheckHtml(r){return(null==r?void 0:r.value)?'<i class="fa-solid fa-check-double"></i>':""}get users(){return this.inj.get(p.a)}ngOnInit(){this.formGroup=this.formBuilder.group({title:[null,n.kI.required],question:[null,n.kI.required],reply:[null,n.kI.required],type:[null,n.kI.required],is_shared:[null,n.kI.required]})}get ctr(){return this.inj.get(h)}get colId(){return"question_id"}}return e.\u0275fac=function(r){return new(r||e)(o.Y36(o.zs3))},e.\u0275cmp=o.Xpm({type:e,selectors:[["cy-question"]],features:[o.qOj],decls:19,vars:11,consts:[[3,"gridData","formGroup","gridColumn","gridOption","fncOnLoadData","fncOnAddData","fncOnUpdateData","fncOnDeleteData","fncValidateData","gridDataChange"],[3,"formGroup"],[1,"row"],[1,"col-lg-6"],["for","ghelp"],["nz-checkbox","",1,"ml-5px"],["id","ghelp","placeholder","Ch\u1ecdn nh\xf3m c\xe2u h\u1ecfi","formControlName","type",3,"items"],[1,"col-lg-12"],["for","question"],["nz-input","","placeholder","Nh\u1eadp c\xe2u h\u1ecfi","id","question","formControlName","question"],["for","reply"],["nz-input","","placeholder","Nh\u1eadp c\xe2u tr\u1ea3 l\u1eddi","id","reply","formControlName","reply"]],template:function(r,a){1&r&&(o.TgZ(0,"cy-ql-form",0),o.NdJ("gridDataChange",function(v){return a.allData=v}),o.TgZ(1,"form",1)(2,"div",2)(3,"div",3)(4,"div",2)(5,"div",3)(6,"label",4),o._uU(7,"Nh\xf3m c\xe2u h\u1ecfi"),o.qZA(),o.TgZ(8,"label",5),o._uU(9,"Chia s\u1ebb"),o.qZA(),o._UZ(10,"ng-select",6),o.qZA(),o.TgZ(11,"div",7)(12,"label",8),o._uU(13,"C\xe2u h\u1ecfi"),o.qZA(),o._UZ(14,"input",9),o.qZA()(),o.TgZ(15,"div",7)(16,"label",10),o._uU(17,"C\xe2u tr\u1ea3 l\u1eddi"),o.qZA(),o._UZ(18,"textarea",11),o.qZA()()()()()),2&r&&(o.Q6J("gridData",a.allData)("formGroup",a.formGroup)("gridColumn",a.gridColumn)("gridOption",a.gridOption)("fncOnLoadData",a.fncOnLoadData)("fncOnAddData",a.fncOnAddData)("fncOnUpdateData",a.fncOnUpdateData)("fncOnDeleteData",a.fncOnDeleteData)("fncValidateData",a.fncValidateData),o.xp6(1),o.Q6J("formGroup",a.formGroup),o.xp6(9),o.Q6J("items",a.ghelps))},directives:[C.R,n.JL,n.sg,n._Y,m.Ie,f.w9,n.JJ,n.u,k.Zp,n.Fj],styles:[""],encapsulation:2}),e})();var y=s(8406),E=s(6042),b=s(1298),O=s(3677),_=s(1577);const i=[{path:"",component:x}];let c=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[d.ez,n.u5,n.UX,y.Bz.forChild(i),k.o7,f.A0,m.Wr,E.sL,b.w,O.b1,_.H]]}),e})()},6114:(M,g,s)=>{s.d(g,{Ie:()=>b,Wr:()=>_,ub:()=>O});var d=s(655),n=s(5e3),l=s(3075),z=s(7579),o=s(4968),h=s(2722),u=s(1721),p=s(5911),C=s(226),m=s(9808);const f=["*"],k=["inputElement"],x=["nz-checkbox",""];function y(i,c){if(1&i){const e=n.EpF();n.TgZ(0,"label",1),n.NdJ("nzCheckedChange",function(r){const D=n.CHM(e).$implicit;return n.oxw().onCheckedChange(D,r)}),n.TgZ(1,"span"),n._uU(2),n.qZA()()}if(2&i){const e=c.$implicit,t=n.oxw();n.Q6J("nzDisabled",e.disabled||t.nzDisabled)("nzChecked",e.checked),n.xp6(2),n.Oqu(e.label)}}let E=(()=>{class i{constructor(e,t){this.nzOnChange=new n.vpe,this.checkboxList=[],e.addClass(t.nativeElement,"ant-checkbox-group")}addCheckbox(e){this.checkboxList.push(e)}removeCheckbox(e){this.checkboxList.splice(this.checkboxList.indexOf(e),1)}onChange(){const e=this.checkboxList.filter(t=>t.nzChecked).map(t=>t.nzValue);this.nzOnChange.emit(e)}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(n.Qsj),n.Y36(n.SBq))},i.\u0275cmp=n.Xpm({type:i,selectors:[["nz-checkbox-wrapper"]],outputs:{nzOnChange:"nzOnChange"},exportAs:["nzCheckboxWrapper"],ngContentSelectors:f,decls:1,vars:0,template:function(e,t){1&e&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),i})(),b=(()=>{class i{constructor(e,t,r,a,D,v){this.ngZone=e,this.elementRef=t,this.nzCheckboxWrapperComponent=r,this.cdr=a,this.focusMonitor=D,this.directionality=v,this.dir="ltr",this.destroy$=new z.x,this.onChange=()=>{},this.onTouched=()=>{},this.nzCheckedChange=new n.vpe,this.nzValue=null,this.nzAutoFocus=!1,this.nzDisabled=!1,this.nzIndeterminate=!1,this.nzChecked=!1,this.nzId=null}innerCheckedChange(e){this.nzDisabled||(this.nzChecked=e,this.onChange(this.nzChecked),this.nzCheckedChange.emit(this.nzChecked),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.onChange())}writeValue(e){this.nzChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=e,this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}ngOnInit(){this.focusMonitor.monitor(this.elementRef,!0).pipe((0,h.R)(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())}),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.addCheckbox(this),this.directionality.change.pipe((0,h.R)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,o.R)(this.elementRef.nativeElement,"click").pipe((0,h.R)(this.destroy$)).subscribe(e=>{e.preventDefault(),this.focus(),!this.nzDisabled&&this.ngZone.run(()=>{this.innerCheckedChange(!this.nzChecked),this.cdr.markForCheck()})}),(0,o.R)(this.inputElement.nativeElement,"click").pipe((0,h.R)(this.destroy$)).subscribe(e=>e.stopPropagation())})}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.removeCheckbox(this),this.destroy$.next(),this.destroy$.complete()}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(E,8),n.Y36(n.sBO),n.Y36(p.tE),n.Y36(C.Is,8))},i.\u0275cmp=n.Xpm({type:i,selectors:[["","nz-checkbox",""]],viewQuery:function(e,t){if(1&e&&n.Gf(k,7),2&e){let r;n.iGM(r=n.CRH())&&(t.inputElement=r.first)}},hostAttrs:[1,"ant-checkbox-wrapper"],hostVars:4,hostBindings:function(e,t){2&e&&n.ekj("ant-checkbox-wrapper-checked",t.nzChecked)("ant-checkbox-rtl","rtl"===t.dir)},inputs:{nzValue:"nzValue",nzAutoFocus:"nzAutoFocus",nzDisabled:"nzDisabled",nzIndeterminate:"nzIndeterminate",nzChecked:"nzChecked",nzId:"nzId"},outputs:{nzCheckedChange:"nzCheckedChange"},exportAs:["nzCheckbox"],features:[n._Bn([{provide:l.JU,useExisting:(0,n.Gpc)(()=>i),multi:!0}])],attrs:x,ngContentSelectors:f,decls:6,vars:11,consts:[[1,"ant-checkbox"],["type","checkbox",1,"ant-checkbox-input",3,"checked","ngModel","disabled","ngModelChange"],["inputElement",""],[1,"ant-checkbox-inner"]],template:function(e,t){1&e&&(n.F$t(),n.TgZ(0,"span",0)(1,"input",1,2),n.NdJ("ngModelChange",function(a){return t.innerCheckedChange(a)}),n.qZA(),n._UZ(3,"span",3),n.qZA(),n.TgZ(4,"span"),n.Hsn(5),n.qZA()),2&e&&(n.ekj("ant-checkbox-checked",t.nzChecked&&!t.nzIndeterminate)("ant-checkbox-disabled",t.nzDisabled)("ant-checkbox-indeterminate",t.nzIndeterminate),n.xp6(1),n.Q6J("checked",t.nzChecked)("ngModel",t.nzChecked)("disabled",t.nzDisabled),n.uIk("autofocus",t.nzAutoFocus?"autofocus":null)("id",t.nzId))},directives:[l.Wl,l.JJ,l.On],encapsulation:2,changeDetection:0}),(0,d.gn)([(0,u.yF)()],i.prototype,"nzAutoFocus",void 0),(0,d.gn)([(0,u.yF)()],i.prototype,"nzDisabled",void 0),(0,d.gn)([(0,u.yF)()],i.prototype,"nzIndeterminate",void 0),(0,d.gn)([(0,u.yF)()],i.prototype,"nzChecked",void 0),i})(),O=(()=>{class i{constructor(e,t,r,a){this.elementRef=e,this.focusMonitor=t,this.cdr=r,this.directionality=a,this.onChange=()=>{},this.onTouched=()=>{},this.options=[],this.nzDisabled=!1,this.dir="ltr",this.destroy$=new z.x}trackByOption(e,t){return t.value}onCheckedChange(e,t){e.checked=t,this.onChange(this.options)}ngOnInit(){var e;this.focusMonitor.monitor(this.elementRef,!0).pipe((0,h.R)(this.destroy$)).subscribe(t=>{t||Promise.resolve().then(()=>this.onTouched())}),null===(e=this.directionality.change)||void 0===e||e.pipe((0,h.R)(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.options=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=e,this.cdr.markForCheck()}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(n.SBq),n.Y36(p.tE),n.Y36(n.sBO),n.Y36(C.Is,8))},i.\u0275cmp=n.Xpm({type:i,selectors:[["nz-checkbox-group"]],hostAttrs:[1,"ant-checkbox-group"],hostVars:2,hostBindings:function(e,t){2&e&&n.ekj("ant-checkbox-group-rtl","rtl"===t.dir)},inputs:{nzDisabled:"nzDisabled"},exportAs:["nzCheckboxGroup"],features:[n._Bn([{provide:l.JU,useExisting:(0,n.Gpc)(()=>i),multi:!0}])],decls:1,vars:2,consts:[["nz-checkbox","","class","ant-checkbox-group-item",3,"nzDisabled","nzChecked","nzCheckedChange",4,"ngFor","ngForOf","ngForTrackBy"],["nz-checkbox","",1,"ant-checkbox-group-item",3,"nzDisabled","nzChecked","nzCheckedChange"]],template:function(e,t){1&e&&n.YNc(0,y,3,3,"label",0),2&e&&n.Q6J("ngForOf",t.options)("ngForTrackBy",t.trackByOption)},directives:[b,m.sg],encapsulation:2}),(0,d.gn)([(0,u.yF)()],i.prototype,"nzDisabled",void 0),i})(),_=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[C.vT,m.ez,l.u5,p.rt]]}),i})()}}]);