"use strict";(self["webpackChunkquant_ux"]=self["webpackChunkquant_ux"]||[]).push([[721],{73909:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MatcLanguagePicker"},[s("div",{staticClass:"MatcToolbarIconButton",attrs:{type:"button","data-dojo-attach-point":"button"},on:{click:function(e){return e.stopPropagation(),t.open.apply(null,arguments)}}},[t.hasLabel?s("span",[t._v(" "+t._s(t.selectedLanguage)+" ")]):t._e(),s("QIcon",{attrs:{icon:"World"}}),t.hasCarret?s("span",{staticClass:"caret"}):t._e()],1),t.isVisible?s("div",{staticClass:"MatcDropDownPopUp",attrs:{role:"menu","data-dojo-attach-point":"popup"}},[s("ul",{attrs:{role:"menu","data-dojo-attach-point":"ul"}},t._l(t.languages,(function(e){return s("li",{key:e.value,on:{click:function(s){return s.stopPropagation(),t.onChangeLanguage(e.value)}}},[s("a",[t._v(t._s(e.label))])])})),0)]):t._e()])},i=[],o=s(48039),r=s(16328),n=s(54524),l=s(67008),c={name:"LangaugePicker",props:["hasLabel","value"],mixins:[],data:function(){return{isVisible:!1,hasCarret:!1,language:"en",languages:[{label:"English",value:"en"},{label:"Chinese",value:"cn"},{label:"Deutsch",value:"de"},{label:"Portuguese",value:"pt"}]}},components:{QIcon:l.Z},computed:{selectedLanguage(){const t=this.languages.find((t=>t.value===this.language));return t?t.label:""}},methods:{open(){this.isVisible=!0,this._mouseDownListener=(0,o.Z)(r.Z.body(),"click",(t=>{this.close(t)}))},close(){this.isVisible=!1},onChangeLanguage(t){this.language=t,this.logger.log(-1,"onChangeLanguage","entry",t),this.$emit("change",t),this.close()}},async mounted(){this.logger=new n.Z("LangaugePicker"),this.value&&(this.language=this.value)}},h=c,g=s(1001),u=(0,g.Z)(h,a,i,!1,null,null,null),d=u.exports},67008:function(t,e,s){s.d(e,{Z:function(){return g}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.icons[t.icon]?s("div",{staticClass:"MatcQIcon",on:{click:t.onClick,mouseover:t.onMouseOver,mouseout:t.onMouseOut}},[s("svg",{class:"MatcQIconSVG "+t.icon,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.25",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},domProps:{innerHTML:t._s(t.icons[t.icon])}})]):s("span",{class:"MatcQIcon "+t.icon,on:{click:t.onClick,mouseover:t.onMouseOver,mouseout:t.onMouseOut}})},i=[],o=s(40282),r=s(45801),n={name:"QIcon",props:["icon"],mixins:[o.Z],data:function(){return{icons:r.c}},components:{},methods:{onMouseOver(t){this.$emit("mouseover",t)},onMouseOut(t){this.$emit("mouseout",t)},onClick(t){this.$emit("click",t)}},mounted(){}},l=n,c=s(1001),h=(0,c.Z)(l,a,i,!1,null,null,null),g=h.exports},85544:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Matc"},[t.isGuest?s("LoginPage",{attrs:{user:t.user},on:{login:t.onLogin}}):s("div",{staticClass:"MatcContainer"},[s("Header",{attrs:{user:t.user},on:{login:t.onLogin,logout:t.onLogout}}),s("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"MatcLoginPage "+(t.resetToken?"MatcLoginPageReset":"MactMainGradient")},[t.isQuxAuth?s("div",{staticClass:"MatcLoginPageDialog"},[s("div",{staticClass:"MatcLoginPageContainer"},[t.resetToken?t._e():s("div",{staticClass:"MatcToolbarTabs MatcToolbarTabsBig"},[s("a",{class:{MatcToolbarTabActive:"login"===t.tab},on:{click:function(e){return t.setTab("login")}}},[t._v("Login")]),t.allowSignUp?s("a",{class:{MatcToolbarTabActive:"signup"===t.tab},on:{click:function(e){return t.setTab("signup")}}},[t._v("Sign Up")]):t._e()]),s("div",{class:" MatcLoginWrapper "+t.tab},[s("div",{staticClass:"MatcLoginContent"},[s("div",{staticClass:"MatcLoginPageSection"},[s("div",{staticClass:"MatcLoginPageForm"},[s("div",{staticClass:" form-group"},[s("label",{},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:" form-control",attrs:{placeholder:"Your email",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:" form-group has-feedback"},[s("label",{},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:" form-control",attrs:{placeholder:"Your password",type:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"MatcErrorLabel"},[t._v(t._s(t.errorMessage))]),s("div",{staticClass:"MatcButtonBar"},[s("a",{staticClass:"MatcButton MatcButtonPrimary",on:{click:t.login}},[t._v("Login")]),t.hasLoginError?s("a",{staticClass:"MatcLinkButton",on:{click:t.requestPasswordReset}},[t._v("Reset Password")]):t._e()])])]),t._v(" "),s("div",{staticClass:"MatcLoginContent"},[s("div",{staticClass:"MatcLoginPageSection"},[s("div",{staticClass:"MatcLoginPageForm"},[s("div",{staticClass:" form-group"},[s("label",{},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:" form-control",attrs:{placeholder:"Your email",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:" form-group has-feedback"},[s("label",{},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:" form-control",attrs:{placeholder:"Your password",type:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:" form-group has-feedback"},[s("div",{staticClass:"MatcCheckboxRow"},[s("CheckBox",{attrs:{label:""},model:{value:t.tos,callback:function(e){t.tos=e},expression:"tos"}}),s("span",{on:{click:function(e){t.tos=!0}}},[t._v("I accept the "),s("a",{attrs:{href:"#/tos.html",target:"_blank"}},[t._v("terms of service")])])],1)])]),s("span",{staticClass:"MatcErrorLabel"},[t._v(t._s(t.errorMessage))]),s("div",{staticClass:"MatcButtonBar"},[s("a",{staticClass:"MatcButton MatcButtonPrimary",on:{click:t.signup}},[t._v("SignUp")])])])]),t._v(" "),s("div",{staticClass:"MatcLoginContent"},[t.resetToken?s("div",{staticClass:"MatcLoginPageSection"},[s("div",{staticClass:"MatcLoginPageForm"},[s("div",{staticClass:" form-group"},[s("label",{},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:" form-control",attrs:{placeholder:"Your email",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:" form-group has-feedback"},[s("label",{},[t._v("New Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:" form-control",attrs:{placeholder:"The new password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),s("span",{staticClass:"MatcErrorLabel"},[t._v(t._s(t.errorMessage))]),s("div",{staticClass:"MatcButtonBar"},[s("a",{staticClass:"MatcButton MatcButtonDanger",on:{click:t.resetPassword}},[t._v("Set new password")])])]):t._e()])])])]):t._e()])},r=[],n=s(77259),l=s(54524),c=s(71021),h={name:"Header",mixins:[],props:["user"],data:function(){return{hasLoginError:!1,resetToken:!1,email:"",password:"",tos:!1,errorMessage:" ",tab:"login",config:{}}},computed:{isQuxAuth(){return"keycloak"!==n.Z.getConfig().auth},allowSignUp(){return this.config&&this.config.user&&!0===this.config.user.allowSignUp}},watch:{user(t){this.logger.log(6,"watch","user >> "+t.email),this.user=t}},components:{CheckBox:c.Z},methods:{setTab(t){this.tab=t,this.errorMessage=" "},async resetPassword(){if(this.logger.info("resetPassword","enter ",this.email),this.email.length<2)return void(this.errorMessage="Please enter your email");if(this.password.length<6)return void(this.errorMessage="Password too short");if(this.resetToken.length<6)return void(this.errorMessage="Token is wrong");let t=await n.Z.getUserService().reset2(this.email,this.password,this.resetToken);"error"===t.type?this.errorMessage="Someything is wrong":(this.errorMessage="",this.resetToken="",this.tab="login",this.$router.push("/"))},async requestPasswordReset(){this.logger.info("requestPasswordReset","enter ",this.email),await n.Z.getUserService().reset(this.email),this.errorMessage="Check you mail."},async login(){this.logger.info("login","enter ",this.email);var t=await n.Z.getUserService().login({email:this.email,password:this.password});"error"==t.type?(this.$root.$emit("Error","Wrong login credentials"),this.errorMessage="Login is wrong",this.hasLoginError=!0):(this.$emit("login",t),this.$root.$emit("UserLogin",t),this.hasLoginError=!1)},async signup(){if(this.logger.info("signup","enter ",this.email),this.password.length<6)this.errorMessage="Password too short";else if(!0===this.tos){var t=await n.Z.getUserService().signup({email:this.email,password:this.password,tos:this.tos});if("error"==t.type)t.errors.indexOf("user.create.domain")>=0?this.errorMessage="Not the correct domain":t.errors.indexOf("user.create.nosignup")>=0?this.errorMessage="No sign-ups allowed.":t.errors.indexOf("user.email.not.unique")>=0?this.errorMessage="Email is taken":this.errorMessage="Password too short";else{let t=await n.Z.getUserService().login({email:this.email,password:this.password});this.$emit("login",t),this.$root.$emit("UserLogin",t),this.logger.log(-1,"signup","exit with login",this.email)}}else this.errorMessage="Please accept terms of service"},initKeyCloak(t){const e=n.Z.getUserService();e.init(t)}},async mounted(){this.logger=new l.Z("LoginPage"),this.resetToken=this.$route.query.id,this.resetToken&&this.resetToken.length>2&&(this.logger.log(-1,"mounted","reset "),this.tab="reset"),this.config=n.Z.getConfig(),this.logger.log(-1,"mounted","exit > ",this.config.user)}},g=h,u=s(1001),d=(0,u.Z)(g,o,r,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MatcHeader",attrs:{id:""}},[t._m(0),s("div",{staticClass:"container MatcHeaderCenter"},[s("div",{staticClass:"MatcHeaderCenterLeft"},[s("a",{attrs:{href:"#/"}},[t._v(t._s(t.$t("header.my-prototypes")))]),s("a",{attrs:{href:"#/help.html"}},[t._v(t._s(t.$t("header.documentation")))])]),s("div",{staticClass:"MatcHeaderCenterRight"},[s("LanguagePicker",{on:{change:t.setLanguage}})],1)]),s("div",{staticClass:"MatcHeaderRight"},[s("a",{attrs:{href:"#/logout.html"}},[t._v(t._s(t.$t("header.logout")))]),s("a",{attrs:{href:"#/my-account.html"}},[t._v(t._s(t.$t("header.my-account")))])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"MatcHeaderLeft"},[a("img",{staticClass:"MatcHeaderLogo",attrs:{src:s(18881)}}),a("a",{attrs:{href:"#/"}},[t._v(" Quant-UX ")])])}],w=s(54953),M=s(73909),f={name:"Header",mixins:[],props:["user"],data:function(){return{}},watch:{user(t){this.logger.log(6,"watch","user >> "+t.email),this.user=t}},components:{LanguagePicker:M.Z},methods:{setLanguage(t){this.logger.log(-1,"setLanguage","entry",t),n.Z.getUserService().setLanguage(t),this.$root.$i18n.locale=t,this.$root.$emit("Success",this.$i18n.t("common.language-changed"))},logout(){this.logger.log(2,"logout","entry"),n.Z.getUserService().logout(),this.$emit("logout",n.Z.getUserService().GUEST),(0,w.Z)("/",!0)}},async mounted(){this.logger=new l.Z("Header"),this.logger.log(7,"mounted","exit >> "+this.user.email)}},C=f,k=(0,u.Z)(C,p,v,!1,null,null,null),y=k.exports,_=s(78651),T=s(28379),S={name:"home",mixins:[],data:function(){return{user:{id:-1,name:"Guest",email:"guest@quant-ux.com",role:"guest",lastlogin:0,lastNotification:0,tos:!1,paidUntil:0,plan:"Free"}}},components:{Header:y,LoginPage:m},computed:{isGuest(){return"guest"===this.user.role}},methods:{onLogin(t){this.user=t,this.logger.info("onLogin","exit >> "+this.user.email)},onLogout(t){this.user=t,this.logger.info("onLogin","exit >> "+this.user.email)},scrollTop(){window.scrollTo(0,0)}},watch:{$route(){T.Z.remove(_.Z.body(),"MatcPublic"),T.Z.remove(_.Z.body(),"MatcVisualEditor"),T.Z.remove(_.Z.body(),"MatcLight"),this.scrollTop(),this.$route.meta.isDarkHeader?T.Z.add(_.Z.body(),"MatcDarkHeaderPage"):T.Z.remove(_.Z.body(),"MatcDarkHeaderPage")}},async mounted(){this.logger=new l.Z("QUX"),this.user=await n.Z.getUserService().load(),this.logger.log(-1,"mounted","locale: "+navigator.language),this.$root.$on("MatcLogout",(t=>{this.onLogout(t)}))}},b=S,L=(0,u.Z)(b,a,i,!1,null,null,null),x=L.exports},83470:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MatcApps"},[t._v(" Loading... ")])},i=[],o=s(54524),r=s(77259),n={name:"Overview",mixins:[],data:function(){return{}},async mounted(){this.logger=new o.Z("TestMobile");let t=this.$route.params.id,e=r.Z.getModelService(this.$route),s=await e.findInvitation(t),a={};for(var i in s)a[s[i]]=i;let n=a[1];this.logger.info("mounted","exit > "+n),location.href=`#/simulate.html?qr=true&h=${n}`}},l=n,c=s(1001),h=(0,c.Z)(l,a,i,!1,null,null,null),g=h.exports},72091:function(t,e,s){s.r(e),s.d(e,{default:function(){return L}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["MatcPublic",{MatcWindows:t.hasWindows}]},[t.step<10?s("div",{class:["MatcTest",{MatcTestCustomSplash:t.hasSplash}]},[t.hasSplash?s("div",{staticClass:"MatcTestCustomSplashPowered"},[t._v("Powered by Quant-UX")]):t._e(),t.hasSettings?s("div",{staticClass:"MatcTestMenu MatcTestMenuMax MactMainGradient",style:t.splashBackground,attrs:{"data-dojo-attach-point":"overlay"}},[s("div",{class:["MatcTestLogoCntr",{MatcTestLogoCntrMax:t.step>1}]},[s("div",{class:["MatcTestProgressCntr"]},[s("div",{staticClass:"MatcTestProgressBar"}),s("transition",{attrs:{name:"fade"}},[t.step>2?s("div",[6===t.step?s("div",{staticClass:"MatcTestContent"},[s("div",{staticClass:"MatcTestContentCntr"},[s("h2",[t._v(t._s(t.getNLS("simulator.password.title"))+" ")]),s("p",{domProps:{innerHTML:t._s(t.getNLS("simulator.password.msg"))}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",domProps:{value:t.password},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setPassword.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("div",{staticClass:"MatcButton MatcMarginTop",on:{click:function(e){return t.setPassword()}}},[t._v(" "+t._s(t.getNLS("simulator.password.next"))+" ")]),s("span",{staticClass:"MatcError",staticStyle:{"margin-left":"20px"}},[t._v(" "+t._s(t.passwordError)+" ")])])]):t._e(),3===t.step?s("div",{staticClass:"MatcTestContent"},[s("div",{staticClass:"MatcTestContentCntr"},[s("h2",[t._v(" "+t._s(t.getNLS("simulator.welcome.title"))+" !")]),t.settings.description?s("p",[t._v(" "+t._s(t.settings.description)+" ")]):s("p",{domProps:{innerHTML:t._s(t.getNlSWithReplacement("simulator.welcome.msg",{name:t.model.name}))}}),s("p",{domProps:{innerHTML:t._s(t.getNLS("simulator.welcome.privacy"))}}),s("p",{domProps:{innerHTML:t._s(t.getNLS("simulator.welcome.privacy1"))}}),s("p",{domProps:{innerHTML:t._s(t.getNLS("simulator.welcome.click-start"))}})]),s("div",{staticClass:"MatcMarginTop"},[0===t.getUserTasks().length?s("div",{staticClass:"MatcButton MatcButtonPrimary MatcTestStartButton",on:{click:function(e){return t.renderTest()}}},[t._v(" "+t._s(t.getNLS("simulator.welcome.start"))+" ")]):s("div",{staticClass:"MatcButton MatcButtonPrimary MatcTestStartButton",on:{click:function(e){return t.renderTasks()}}},[t._v(" "+t._s(t.getNLS("simulator.welcome.showTasks"))+" ")])])]):t._e(),4===t.step?s("div",{staticClass:"MatcTestContent"},[s("div",{staticClass:"MatcTestContentCntr"},[s("h2",[t._v(t._s(t.getNLS("simulator.tasks.title"))+" !")]),s("p",[t._v(" "+t._s(t.getNLS("simulator.tasks.msg"))+" ")]),t._l(t.getUserTasks(),(function(e){return s("div",{key:e.id},[s("h4",[t._v(t._s(e.name))]),s("div",{staticClass:"MatcTestTaskDescription"},[t._v(" "+t._s(e.description)+" ")])])}))],2),s("div",{staticClass:"MatcMarginTop"},[s("div",{staticClass:"MatcButton MatcButtonPrimary MatcTestStartButton",on:{click:function(e){return t.renderTest()}}},[t._v(" "+t._s(t.getNLS("simulator.welcome.start"))+" ")])])]):t._e()]):t._e()])],1),0==t.step?s("transition",{attrs:{name:"logoFade"}},[s("div",{staticClass:"MatcLogoNew MatcSimulatorLoadingLogoAnimation"})]):t._e()],1)]):t._e()]):t._e(),s("div",{staticClass:"MatcTestCntr"},[t.showTasks?s("div",{ref:"tastCntr",staticClass:"MatcTestTaskCntr MatcTestContent"},[s("h1",[t._v(t._s(t.getNLS("simulator.tasks.title"))+" ")]),s("p",[t._v(" "+t._s(t.getNLS("simulator.tasks.msg"))+" ")]),t._l(t.getUserTasks(),(function(e,a){return s("div",{key:e.id,class:{MatcTestTaskDone:t.taskDone[e.id]}},[s("h3",[t._v("#"+t._s(a+1)+" - "+t._s(e.name)+" "),t.taskDone[e.id]?s("span",{staticClass:"mdi mdi-check-circle"}):t._e()]),s("div",{staticClass:"MatcTestTaskDescription"},[t._v(" "+t._s(e.description)+" ")])])}))],2):t._e(),s("div",{ref:"cntr",staticClass:"MatcTest"})]),t.step<=1?s("div",{staticClass:"MatcTestVersion"},[t._v(" v4.3.30 ")]):t._e()])},i=[],o=s(40282),r=s(28379),n=s(59344),l=s(78651),c=s(48039),h=s(75790),g=s(54524),u=s(17386),d=s(72712),m=s(96200),p=s(78449),v=s(77259),w=s(12651),M=s(49799),f=s(75840),C=s(3270),k=s(43371),y=s(67265),_={name:"TestPage",mixins:[d.Z,o.Z],data:function(){return{true:!1,skipSplash:!1,desktopScaleDirection:"width",desktopOffset:0,settings:null,logging:!0,model:null,step:0,password:"",passwordError:"",simulatorEvents:[],taskDone:{},splashImage:null,forceSimpleBar:!1}},components:{},computed:{hasWindows(){return navigator.platform.indexOf("Win")>-1},hasSplash(){return null!==this.splashImage},showTasks(){return!(!this.settings||!this.settings.showTaskInTest)},hasSettings(){return null!==this.settings},menuWidth(){return this.settings&&this.settings.showTaskInTest?400:0},splashBackground(){return this.splashImage?`background-image: url(/rest/images/${this.hash}/${this.splashImage.url});`:""}},methods:{postCreate(){this.logger=new g.Z("TestPage");const t=this.getHashFromUri();this.logger.log(2,"postCreate","enter",t);const e=this.$route.query.log;if(this.analytics=new C.Z,this.initNLS(),(0,p.Z)("android")||(0,p.Z)("ios")){let s="/#/simulate.html?qr=true&h="+t;return s+="false"==e?"&log=false":"&log=true",s+=this.getDataQuery(),void(location=s)}this.db=new u.Z,"true"===this.$route.query.s&&(this.logger.log(-1,"postCreate","skipSplash"),this.skipSplash=!0),setTimeout(n.Z.hitch(this,"loadModel"),1),this.logger.log(1,"postCreate","exit")},getDataQuery(){let t="";const e=Object.entries(this.$route.query).filter((t=>"data_"==t[0].slice(0,5)));for(let s of e)t+="&"+s[0]+"="+s[1];return t},async loadModel(){this.logger.log(2,"loadModel","enter");var t=this.getHashFromUri();t&&t.length<60?this.showPassword():this.loadModelFromHash(t)},showPassword(){this.logger.log(2,"showPassword","enter"),this.step=6},async setPassword(){this.logger.log(1,"setPassword","enter",this.password);const t=this.getHashFromUri(),e=t+this.password;try{const t=await v.Z.getModelService().findAppByHash(e);t?(this.passwordError="",this.loadModelFromHash(e)):this.showPasswordError()}catch(s){this.showPasswordError()}},showPasswordError(){this.passwordError="The password is wrong."},async loadModelFromHash(t){if(this.hash=t,t){const e=await v.Z.getModelService().findAppByHash(t);this.setModel(e)}else console.debug("loadModel() > Hash is missing in url");"false"===this.$route.query.log&&(this.logger.log(0,"loadModel","turn off logging"),this.logging=!1),this.screenID=this.$route.query.s,this.debug="true"===this.$route.query.debug},getHashFromUri(){return this.$route.query.a&&this.$route.query.b?Math.random()>.5?(this.logger.log(0,"getHashFromUri","Test version A"),this.$route.query.a):(this.logger.log(0,"getHashFromUri","Test version B"),this.$route.query.b):this.$route.query.h},async setModel(t){if(this.logger.log(2,"setModel","enter > "+t),t){this.model=t;let e=await v.Z.getModelService().findTestByHash(this.model,this.hash);this.setTestsettings(e),this.preloadImages(t)}else this.domNode.innerHTML="Sorry, the invitation is not valid...",location.href=location.protocol+"//"+location.host+"/404.html"},capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},setTestsettings(t){this.logger.log(1,"setTestsettings","enter > ",t),this.settings=t,this.setCustomSplash(t),this.debug||this.skipSplash?setTimeout(n.Z.hitch(this,"renderTest"),0):setTimeout(n.Z.hitch(this,"hideLogo"),500)},setCustomSplash(t){this.logger.log(1,"setCustomSplash","enter > ",t),t.splash&&(this.splashImage=t.splash)},hideLogo(){this.logger.log(1,"hideLogo","enter"),this.step=1,setTimeout(n.Z.hitch(this,"expandWindow"),500)},expandWindow(){this.logger.log(1,"expandWindow","enter"),this.step=2,setTimeout(n.Z.hitch(this,"renderSettings"),1e3)},renderSettings(){this.logger.log(2,"renderSettings","enter"),this.step=3},renderTasks(){this.logger.log(2,"renderTasks","enter"),this.step=4},getUserTasks(){const t=[];if(this.settings.tasks&&this.settings.tasks)for(var e=0;e<this.settings.tasks.length;e++){var s=this.settings.tasks[e];s.description&&"Enter a description here"!=s.description&&t.push(s)}return t},getPricacy(){return this.getNLS("test.welcome.privacy")},preloadImages(t){this.logger.log(-1,"preloadImages","enter"),M.Z.load(t,this.hash,this.domNode)},renderTest(){if(this.logger.log(-1,"renderTest","enter",this.settings.showTaskInTest),this.step=10,r.Z.remove(this.overlay,"MatcTestMenuMax"),this.renderSimulator(),"desktop"!=this.model.type){let t=this.db.div("MatcTestQRButton  MatcAnimated MatcFadeOut").build(this.domNode);this.db.span("mdi mdi-qrcode MatcMiddle").build(t),this.own((0,c.Z)(t,h.Z.press,n.Z.hitch(this,"showQRDialog"))),setTimeout((()=>{r.Z.remove(t,"MatcFadeOut")}),1500)}},showQRDialog(t){this.stopEvent(t);const e=this.db.div("MatchTestQRDialog MatcPadding").build(),s=this.db.img().build(e);r.Z.add(s,"MatcSimulatorQR"),f.Z.getQRCode(this.hash,!0,!1,this.getLanguage(),this.getDataQuery()).then((t=>{s.src=t})),this.db.div("MatcHint MatchTestQRDialogHint",this.getNLS("test.qr.headline")).build(e);const a=new m.Z;a.popup(e,t.target)},onSimulatorEvent(t){this.simulatorEvents.push(t);let e=new k.Z(this.simulatorEvents);e=this.getActionEvents(e);const s=this.settings.tasks,a=this.analytics.getTaskPerformance(e,s,!0);a.data.forEach((t=>{this.$set(this.taskDone,t.task,!0)}))},renderSimulator(){const t=l.Z.getBox();t.w-=this.menuWidth;const e=this.db.div("MatcSimulatorSection").build();return e.style.top="0px",e.style.left=this.menuWidth+"px",e.style.width=t.w+"px",this.$refs.cntr.appendChild(e),"desktop"==this.model.type?this.simulator=this.renderDesktopSimulator(e,t):this.simulator=this.renderMobileSimulator(e,t),e},renderMobileSimulator(t,e){this.logger.log(0,"renderMobileSimulator","enter > "+e.w+","+e.h),r.Z.add(l.Z.body(),"MatcTestMobile");const s=.75,a={w:Math.floor(e.w*s),h:Math.floor(e.h*s)};let i=this.model.screenSize;a.h<this.model.screenSize.h&&(this.logger.log(-1,"renderMobileSimulator","scale down..."),i=this.getScaledSize(a,"height",this.model));const o=this.db.div("MatcCenter").build(t),n=this.db.div("MatchSimulatorWrapper").build(o);n.style.width=Math.round(i.w)+"px",n.style.height=Math.round(i.h)+"px";const c=this.db.div("MatchSimulatorContainer").build(n);c.style.width=Math.round(i.w)+"px",c.style.height=Math.round(i.h)+"px";const h=y.n(c,this.forceSimpleBar),g=this.createSimulator();return g.setResizeListener((t=>{this.logger.log(-1,"renderMobileSimulator","resize",t.w+"/"+t.h),n.style.height=t.h+"px",n.style.width=t.w+"px",c.style.height=t.h+"px",c.style.width=t.w+"px"})),g.setInvitation(this.hash),g.isDesktopTest=!0,g.scrollListenTarget=h?"simpleBar":"parent",g.placeAt(c),g.setModel(this.model),this.logger.log(0,"renderMobileSimulator","exit",i),g},renderDesktopSimulator(t,e){this.logger.log(2,"renderDesktopSimulator","enter ");const s=this.getDesktopScaleFactor(e);e.w-=64;const a={w:Math.floor(e.w*s),h:Math.floor(e.h*s)};let i=this.model.screenSize;a.w<this.model.screenSize.w&&(this.logger.log(0,"renderDesktopSimulator","scale down by width..."),i=this.getScaledSize(a,"width",this.model));const o=this.db.div("MatcCenter").build(t),r=this.db.div("MatchSimulatorWrapper").build(o);r.style.width=Math.round(i.w)+"px",r.style.height=Math.round(i.h)+"px";const n=this.db.div("MatchSimulatorContainer").build(r);n.style.width=Math.round(i.w)+"px",n.style.height=Math.round(i.h)+"px";const l=y.n(n,this.forceSimpleBar),c=this.createSimulator();return c.setResizeListener((t=>{this.logger.log(-1,"renderMobileSimulator","resize",t.w+"/"+t.h),r.style.height=t.h+"px",r.style.width=t.w+"px",n.style.height=t.h+"px",n.style.width=t.w+"px"})),c.mode="width",c.isDesktopTest=!0,c.setInvitation(this.hash),c.placeAt(n),c.scrollListenTarget=l?"simpleBar":"parent",c.startup(),c.setModel(this.model),this.logger.log(2,"renderDesktopSimulator","exit"),c},getDesktopScaleFactor(t){var e=(t.w-this.desktopOffset)/t.w;return Math.min(1,e)},createSimulator(){if(this.debug){const t=this.$new(w.Z);return t.on("event",(t=>this.onSimulatorEvent(t))),t.mode="debug",t.logData=!1,t}{const t=this.$new(w.Z);return t.on("event",(t=>this.onSimulatorEvent(t))),t.mode="debug",t.logData=this.logging,t.applyTestSettings(this.settings),t}}},mounted(){r.Z.add(l.Z.body(),"MatcPublic"),this.forceSimpleBar&&console.error("forceSimpleBar")}},T=_,S=s(1001),b=(0,S.Z)(T,a,i,!1,null,null,null),L=b.exports},18881:function(t,e,s){t.exports=s.p+"img/QUXLogo5Dark.6dceb572.svg"}}]);
//# sourceMappingURL=matc.32a8b5bf.js.map