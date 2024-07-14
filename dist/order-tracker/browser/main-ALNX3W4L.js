import{$ as yt,A as pt,B as gt,Ca as Pt,Da as St,Ea as At,F as U,I as ft,P as _t,T as bt,U as vt,W as Re,Z as T,ca as Mt,ea as wt,fa as Ct,g as mt,i as ct,k as dt,na as It,pa as Rt,t as ut,va as Dt,w as ht,wa as Et}from"./chunk-NLMF2RKY.js";import{a as nt,b as ot,c as rt,d as at,f as st,h as lt,j as xt,k as kt,l as Tt,m as le}from"./chunk-WSERWGF3.js";import{c as xe,d as ae,f as D,g as ke,i as se}from"./chunk-AESYL7IM.js";import{Aa as Le,Cb as Me,E as W,F as L,Fb as we,Ga as g,Gb as B,Gc as H,Ha as f,Hb as _,Ia as je,Jb as ie,Kb as ne,Kc as z,L as pe,Ma as _e,Mb as Xe,Mc as Ie,Nb as $e,O as ge,Pa as I,Pb as We,Qb as Ke,Ra as te,Rb as d,Sa as Ne,Sb as u,Tb as b,Tc as k,Xa as Be,Xb as oe,_b as R,a as Q,ac as h,b as Se,ba as K,bc as V,ca as fe,cc as v,cd as it,da as G,dc as x,e as X,ec as Ge,fc as y,gc as M,ha as Ae,hb as be,j as $,ja as Z,jc as Ze,ka as q,kb as m,kc as re,lb as l,lc as qe,m as ue,ma as j,mb as Ve,mc as Ce,nb as ve,oa as Fe,ob as He,pa as C,qb as ze,rc as Je,s as he,sb as Ue,sc as w,tb as N,uc as et,va as p,vb as Ye,vc as tt,wa as J,wb as Qe,xa as ee,yb as ye,za as Oe}from"./chunk-XIZYXG24.js";var Ft=[{path:"order-history",loadChildren:()=>import("./chunk-LHULKFLC.js").then(o=>o.OrderHistoryModule)},{path:"404",loadComponent:()=>import("./chunk-MJLCPS2N.js").then(o=>o.PageNotFoundComponent)},{path:"",redirectTo:"order-history",pathMatch:"full"},{path:"**",redirectTo:"404"}];var $t="@",Wt=(()=>{let i=class i{constructor(e,t,n,r,s){this.doc=e,this.delegate=t,this.zone=n,this.animationType=r,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=C(He,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-QMQEW7DV.js").then(t=>t)).catch(t=>{throw new Ae(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:n})=>{this._engine=t(this.animationType,this.doc);let r=new n(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let r=new Te(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let c=s.createRenderer(e,t);r.use(c),this.scheduler?.notify(9)}).catch(s=>{r.use(n)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};i.\u0275fac=function(t){Ve()},i.\u0275prov=Z({token:i,factory:i.\u0275fac});let o=i;return o})(),Te=class{constructor(i){this.delegate=i,this.replay=[],this.\u0275type=1}use(i){if(this.delegate=i,this.replay!==null){for(let a of this.replay)a(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,a){return this.delegate.createElement(i,a)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,a){this.delegate.appendChild(i,a)}insertBefore(i,a,e,t){this.delegate.insertBefore(i,a,e,t)}removeChild(i,a,e){this.delegate.removeChild(i,a,e)}selectRootElement(i,a){return this.delegate.selectRootElement(i,a)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,a,e,t){this.delegate.setAttribute(i,a,e,t)}removeAttribute(i,a,e){this.delegate.removeAttribute(i,a,e)}addClass(i,a){this.delegate.addClass(i,a)}removeClass(i,a){this.delegate.removeClass(i,a)}setStyle(i,a,e,t){this.delegate.setStyle(i,a,e,t)}removeStyle(i,a,e){this.delegate.removeStyle(i,a,e)}setProperty(i,a,e){this.shouldReplay(a)&&this.replay.push(t=>t.setProperty(i,a,e)),this.delegate.setProperty(i,a,e)}setValue(i,a){this.delegate.setValue(i,a)}listen(i,a,e){return this.shouldReplay(a)&&this.replay.push(t=>t.listen(i,a,e)),this.delegate.listen(i,a,e)}shouldReplay(i){return this.replay!==null&&i.startsWith($t)}};function Ot(o="animations"){return Ue("NgAsyncAnimations"),Oe([{provide:ze,useFactory:(i,a,e)=>new Wt(i,a,e,o),deps:[k,rt,N]},{provide:Be,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ce=class{http;prefix;suffix;constructor(i,a="/assets/i18n/",e=".json"){this.http=i,this.prefix=a,this.suffix=e}getTranslation(i){return this.http.get(`${this.prefix}${i}${this.suffix}`)}};function Kt(o){return new ce(o)}var Lt={providers:[lt(Ft),Ot(),Dt(),St(),ot(),Mt(),Le(Et.forRoot({},{}),Pt.forRoot(),le.forRoot({loader:{provide:xt,useFactory:Kt,deps:[nt]}})),{provide:yt,useValue:"sk-SK"}]};var Gt=["*",[["mat-toolbar-row"]]],Zt=["*","mat-toolbar-row"],De=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=ee({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let o=i;return o})(),jt=(()=>{let i=class i{constructor(e,t,n){this._elementRef=e,this._platform=t,this._document=n}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};i.\u0275fac=function(t){return new(t||i)(l(I),l(mt),l(k))},i.\u0275cmp=p({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,r){if(t&1&&x(r,De,5),t&2){let s;y(s=M())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(ne(n.color?"mat-"+n.color:""),ie("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[w],ngContentSelectors:Zt,decls:2,vars:0,template:function(t,n){t&1&&(V(Gt),v(0),v(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let o=i;return o})();var Nt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=J({type:i}),i.\u0275inj=q({imports:[T,T]});let o=i;return o})();var oi=["mat-menu-item",""],ri=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ai=["mat-icon, [matMenuItemIcon]","*"];function si(o,i){o&1&&(je(),d(0,"svg",2),b(1,"polygon",3),u())}var li=["*"];function mi(o,i){if(o&1){let a=oe();d(0,"div",0),R("keydown",function(t){g(a);let n=h();return f(n._handleKeydown(t))})("click",function(){g(a);let t=h();return f(t.closed.emit("click"))})("@transformMenu.start",function(t){g(a);let n=h();return f(n._onAnimationStart(t))})("@transformMenu.done",function(t){g(a);let n=h();return f(n._onAnimationDone(t))}),d(1,"div",1),v(2),u()()}if(o&2){let a=h();ne(a._classList),_("id",a.panelId)("@transformMenu",a._panelAnimationState),B("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null)("aria-describedby",a.ariaDescribedby||null)}}var Ee=new j("MAT_MENU_PANEL"),Y=(()=>{let i=class i{constructor(e,t,n,r,s){this._elementRef=e,this._document=t,this._focusMonitor=n,this._parentMenu=r,this._changeDetectorRef=s,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new $,this._focused=new $,this._highlighted=!1,this._triggersSubmenu=!1,r?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}};i.\u0275fac=function(t){return new(t||i)(l(I),l(k),l(Re),l(Ee,8),l(H))},i.\u0275cmp=p({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&R("click",function(s){return n._checkDisabled(s)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(B("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),ie("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",z],disableRipple:[2,"disableRipple","disableRipple",z]},exportAs:["matMenuItem"],standalone:!0,features:[Me,w],attrs:oi,ngContentSelectors:ai,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(V(ri),v(0),d(1,"span",0),v(2,1),u(),b(3,"div",1),we(4,si,2,0,":svg:svg",2)),t&2&&(m(3),_("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),m(),Xe(n._triggersSubmenu?4:-1))},dependencies:[wt],encapsulation:2,changeDetection:0});let o=i;return o})();var ci=new j("MatMenuContent");var de={transformMenu:xe("transformMenu",[ke("void",D({opacity:0,transform:"scale(0.8)"})),se("void => enter",ae("120ms cubic-bezier(0, 0, 0.2, 1)",D({opacity:1,transform:"scale(1)"}))),se("* => void",ae("100ms 25ms linear",D({opacity:0})))]),fadeInItems:xe("fadeInItems",[ke("showing",D({opacity:1})),se("void => *",[D({opacity:0}),ae("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},vn=de.fadeInItems,yn=de.transformMenu,di=0,ui=new j("mat-menu-default-options",{providedIn:"root",factory:hi});function hi(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var E=(()=>{let i=class i{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){let t=this._previousPanelClass,n=Q({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{n[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,t,n,r){this._elementRef=e,this._changeDetectorRef=r,this._elevationPrefix="mat-elevation-z",this._baseElevation=null,this._directDescendantItems=new Ne,this._classList={},this._panelAnimationState="void",this._animationDone=new $,this.closed=new te,this.close=this.closed,this.panelId=`mat-menu-panel-${di++}`,this._injector=C(_e),this.overlayPanelClass=n.overlayPanelClass||"",this._xPosition=n.xPosition,this._yPosition=n.yPosition,this.backdropClass=n.backdropClass,this.overlapTrigger=n.overlapTrigger,this.hasBackdrop=n.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new _t(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(K(this._directDescendantItems),fe(e=>W(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy()}_hovered(){return this._directDescendantItems.changes.pipe(K(this._directDescendantItems),fe(t=>W(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:pt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ye(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){if(this._baseElevation===null){let c=(typeof getComputedStyle=="function"?getComputedStyle(this._elementRef.nativeElement):null)?.getPropertyValue("--mat-menu-base-elevation-level")||"8";this._baseElevation=parseInt(c)}let t=Math.min(this._baseElevation+e,24),n=`${this._elevationPrefix}${t}`,r=Object.keys(this._classList).find(s=>s.startsWith(this._elevationPrefix));if(!r||r===this._previousElevation){let s=Q({},this._classList);this._previousElevation&&(s[this._previousElevation]=!1),s[n]=!0,this._previousElevation=n,this._classList=s}}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Se(Q({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(K(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}};i.\u0275fac=function(t){return new(t||i)(l(I),l(N),l(ui),l(H))},i.\u0275cmp=p({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,r){if(t&1&&(x(r,ci,5),x(r,Y,5),x(r,Y,4)),t&2){let s;y(s=M())&&(n.lazyContent=s.first),y(s=M())&&(n._allItems=s),y(s=M())&&(n.items=s)}},viewQuery:function(t,n){if(t&1&&Ge(ve,5),t&2){let r;y(r=M())&&(n.templateRef=r.first)}},hostVars:3,hostBindings:function(t,n){t&2&&B("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",z],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:z(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[Je([{provide:Ee,useExisting:i}]),Me,w],ngContentSelectors:li,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(V(),we(0,mi,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[de.transformMenu,de.fadeInItems]},changeDetection:0});let o=i;return o})(),zt=new j("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=C(U);return()=>o.scrollStrategies.reposition()}});function pi(o){return()=>o.scrollStrategies.reposition()}var gi={provide:zt,deps:[U],useFactory:pi},Bt=ct({passive:!0});var Ut=(()=>{let i=class i{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,t,n,r,s,c,P,S,A){this._overlay=e,this._element=t,this._viewContainerRef=n,this._menuItemInstance=c,this._dir=P,this._focusMonitor=S,this._ngZone=A,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=X.EMPTY,this._hoverSubscription=X.EMPTY,this._menuCloseSubscription=X.EMPTY,this._changeDetectorRef=C(H),this._handleTouchStart=F=>{vt(F)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new te,this.onMenuOpen=this.menuOpened,this.menuClosed=new te,this.onMenuClose=this.menuClosed,this._scrollStrategy=r,this._parentMaterialMenu=s instanceof E?s:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,Bt)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,Bt),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let t=this._createOverlay(e),n=t.getConfig(),r=n.positionStrategy;this._setPosition(e,r),n.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof E&&(e._startAnimation(),e._directDescendantItems.changes.pipe(G(e.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof E?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(L(n=>n.toState==="void"),pe(1),G(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let t=0,n=e.parentMenu;for(;n;)t++,n=n.parentMenu;e.setElevation(t)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new gt({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{let r=n.connectionPair.overlayX==="start"?"after":"before",s=n.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(r,s)):e.setPositionClasses(r,s)})}_setPosition(e,t){let[n,r]=e.xPosition==="before"?["end","start"]:["start","end"],[s,c]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[P,S]=[s,c],[A,F]=[n,r],O=0;if(this.triggersSubmenu()){if(F=n=e.xPosition==="before"?"start":"end",r=A=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Pe=this._parentMaterialMenu.items.first;this._parentInnerPadding=Pe?Pe._getHostElement().offsetTop:0}O=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(P=s==="top"?"bottom":"top",S=c==="top"?"bottom":"top");t.withPositions([{originX:n,originY:P,overlayX:A,overlayY:s,offsetY:O},{originX:r,originY:P,overlayX:F,overlayY:s,offsetY:O},{originX:n,originY:S,overlayX:A,overlayY:c,offsetY:-O},{originX:r,originY:S,overlayX:F,overlayY:c,offsetY:-O}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:he(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(L(s=>s!==this._menuItemInstance),L(()=>this._menuOpen)):he();return W(e,n,r,t)}_handleMousedown(e){bt(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(L(e=>e===this._menuItemInstance&&!e.disabled),ge(0,ue)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof E&&this.menu._isAnimating?this.menu._animationDone.pipe(pe(1),ge(0,ue),G(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ht(e.templateRef,this._viewContainerRef)),this._portal}};i.\u0275fac=function(t){return new(t||i)(l(U),l(I),l(Qe),l(zt),l(Ee,8),l(Y,10),l(dt,8),l(Re),l(N))},i.\u0275dir=ee({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&R("click",function(s){return n._handleClick(s)})("mousedown",function(s){return n._handleMousedown(s)})("keydown",function(s){return n._handleKeydown(s)}),t&2&&B("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0});let o=i;return o})(),Yt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=J({type:i}),i.\u0275inj=q({providers:[gi],imports:[it,Ct,T,ft,ut,T]});let o=i;return o})();var Qt=(()=>{let i=class i{constructor(e){this.translate=e,this.translate.addLangs(["en","sk"]),this.translate.setDefaultLang("en");let t=this.translate.getBrowserCultureLang()?.slice(0,2).toLowerCase(),n=localStorage.getItem("language");n&&this.translate.langs.includes(n)?this.translate.use(n):t&&this.translate.langs.includes(t)?this.translate.use(t):this.translate.use(this.translate.defaultLang)}setLanguage(e){localStorage.setItem("language",e),this.translate.use(e)}getLanguages(){return this.translate.getLangs()}getCurrentLanguage(){return this.translate.currentLang}};i.\u0275fac=function(t){return new(t||i)(Fe(kt))},i.\u0275prov=Z({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();function vi(o,i){if(o&1){let a=oe();d(0,"button",5),R("click",function(){let t=g(a).$implicit,n=h();return f(n.setLanguage(t))}),b(1,"img",3),re(2),u()}if(o&2){let a=i.$implicit;m(),_("src","assets/img/"+a+".svg",be)("alt",a),m(),Ce(" ",a.toUpperCase()," ")}}var Xt=(()=>{let i=class i{constructor(e){this.languageService=e,this.languages=ye(this.languageService.getLanguages()),this.langs=Ie(()=>this.languages().filter(t=>t!==this.currentLang())),this.currentLang=ye(this.languageService.getCurrentLanguage()),this.currentLangUpper=Ie(()=>this.currentLang().toUpperCase())}setLanguage(e){this.currentLang.set(e),this.languageService.setLanguage(e)}};i.\u0275fac=function(t){return new(t||i)(l(Qt))},i.\u0275cmp=p({type:i,selectors:[["app-root"]],standalone:!0,features:[w],decls:13,vars:7,consts:[["lang","matMenu"],["color","primary",1,"header-toolbar"],["mat-flat-button","","extended","",3,"matMenuTriggerFor"],["width","20px",3,"src","alt"],["mat-menu-item",""],["mat-menu-item","",3,"click"]],template:function(t,n){if(t&1&&(d(0,"mat-toolbar",1)(1,"mat-toolbar-row")(2,"h2"),re(3),et(4,"translate"),u(),d(5,"button",2),b(6,"img",3),re(7),u(),d(8,"mat-menu",null,0),We(10,vi,3,3,"button",4,$e),u()()(),b(12,"router-outlet")),t&2){let r=Ze(9);m(3),qe(tt(4,5,"APP_TITLE")),m(2),_("matMenuTriggerFor",r),m(),_("src","assets/img/"+n.currentLang()+".svg",be)("alt",n.currentLangUpper()),m(),Ce(" ",n.currentLangUpper()," "),m(3),Ke(n.langs())}},dependencies:[st,Nt,jt,De,Yt,E,Y,Ut,Rt,It,le,Tt],encapsulation:2,changeDetection:0});let o=i;return o})();At.production&&void 0;at(Xt,Lt).catch(o=>console.error(o));