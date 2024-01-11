"use strict";(self["webpackChunkquant_ux"]=self["webpackChunkquant_ux"]||[]).push([[721],{58761:function(t,e,s){s.d(e,{Z:function(){return c}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.visible?s("div",{class:["ZoomDialogBackground",{ZoomDialogHidden:0==t.step},{ZoomDialogAnimation:t.step>=2}],on:{mousedown:t.close}},[s("div",{ref:"container",staticClass:"ZoomDialogContainer",on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}}},[s("div",{ref:"wrapper",class:["ZoomDialogWrapper",{ZoomDialogWrapperOverflow:"visible"===t.overflow}]},[s("div",{ref:"content",staticClass:"ZoomDialogContent"},[t._t("default")],2)])])]):t._e()},a=[],r=(s(92222),{name:"ZoomDialog",props:["overflow"],data:function(){return{visible:!1,step:0}},methods:{show:function(t){var e=this,s=this.position(t);this.visible=!0,this.step=0,setTimeout((function(){e.animStep1(s)}),100)},animStep1:function(t){var e=this,s=this.$refs.container,o=this.$refs.content,a=this.position(o),r=t.w/a.w,n=t.h/a.h,i=Math.round(t.x-a.x),l=Math.round(t.y-a.y);s.style.transform="translate(".concat(i,"px, ").concat(l,"px) scale(").concat(r,", ").concat(n,")"),s.style.opacity=.3,this.step=1,setTimeout((function(){e.animStep2()}),100)},animStep2:function(){this.step=2;var t=this.$refs.container;t.style.transform="scale(1,1)",t.style.opacity=1},close:function(){this.visible=!1,this.step=0},position:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){t&&t.toLowerCase&&(t=document.getElementById(t));var s=t.getBoundingClientRect(),o={x:s.left,y:s.top,w:s.right-s.left,h:s.bottom-s.top};return e&&(o.x+=window.scrollX,o.y+=window.scrollY),o}return{x:0,y:0,w:100,h:100}},shake:function(){var t=this.$refs.wrapper;setTimeout((function(){t.style.left="50px"}),1),setTimeout((function(){t.style.left="-50px"}),51),setTimeout((function(){t.style.left="50px"}),101),setTimeout((function(){t.style.left="-50px"}),151),setTimeout((function(){t.style.left="0px"}),201)}}}),n=r,i=s(1001),l=(0,i.Z)(n,o,a,!1,null,null,null),c=l.exports},43788:function(t,e,s){s.d(e,{Z:function(){return u}});var o,a,r=s(28379),n={name:"_Tooltip",mixins:[],data:function(){return{}},components:{},methods:{addTooltip:function(t,e,s){var o=document.createElement("div");r.Z.add(o,"vommondToolTip"),s&&r.Z.add(o,s);var a=document.createElement("div");o.appendChild(a),r.Z.add(a,"vommondToolTipArrow"),r.Z.add(t,"vommondToolTipCntr");var n=document.createElement("span");o.appendChild(n),r.Z.add(n,"vommondToolTipLabel"),n.innerHTML=e,t.appendChild(o)}},mounted:function(){}},i=n,l=s(1001),c=(0,l.Z)(i,o,a,!1,null,null,null),u=c.exports},5698:function(t,e,s){s.d(e,{Z:function(){return v}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["MatcLanguagePicker",{MatcToolbarPopUpVisible:t.isVisible}]},[s("a",{staticClass:"MatcToolbarIconButton",attrs:{type:"button","data-dojo-attach-point":"button"},on:{click:function(e){return e.stopPropagation(),t.open.apply(null,arguments)}}},[t.hasLabel?s("span",[t._v(" "+t._s(t.selectedLanguage)+" ")]):t._e(),s("QIcon",{attrs:{icon:"World"}}),t.hasCarret?s("span",{staticClass:"caret"}):t._e()],1),t.isVisible?s("div",{staticClass:"MatcDropDownPopUp",attrs:{role:"menu","data-dojo-attach-point":"popup"}},[s("ul",{attrs:{role:"menu","data-dojo-attach-point":"ul"}},t._l(t.languages,(function(e){return s("li",{key:e.value,on:{click:function(s){return s.stopPropagation(),t.onChangeLanguage(e.value)}}},[s("a",[t._v(t._s(e.label))])])})),0)]):t._e(),t.isVisible?s("div",{staticClass:"MatcDropDownPopUpBackdrop"}):t._e()])},a=[],r=s(67906),n=s(16198),i=(s(69826),s(41539),s(48039)),l=s(16328),c=s(54524),u=s(74702),d=s(43788),g={name:"LangaugePicker",props:["hasLabel","value"],mixins:[d.Z],data:function(){return{isVisible:!1,hasCarret:!1,language:"en",languages:[{label:"English",value:"en"},{label:"Chinese",value:"cn"},{label:"Deutsch",value:"de"},{label:"Portuguese",value:"pt"}]}},components:{QIcon:u.Z},computed:{selectedLanguage:function(){var t=this,e=this.languages.find((function(e){return e.value===t.language}));return e?e.label:""}},methods:{open:function(){var t=this;this.isVisible=!0,this._mouseDownListener=(0,i.Z)(l.Z.body(),"click",(function(e){t.close(e)}))},close:function(){this.isVisible=!1},onChangeLanguage:function(t){this.language=t,this.logger.log(-1,"onChangeLanguage","entry",t),this.$emit("change",t),this.close()}},mounted:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.logger=new c.Z("LangaugePicker"),t.value&&(t.language=t.value),t.addTooltip(t.$el,"Change the language","vommondToolTipRightBottom");case 3:case"end":return e.stop()}}),e)})))()}},h=g,p=s(1001),m=(0,p.Z)(h,o,a,!1,null,null,null),v=m.exports},74702:function(t,e,s){s.d(e,{Z:function(){return g}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.icons[t.icon]?s("div",{staticClass:"MatcQIcon",on:{click:t.onClick,mouseover:t.onMouseOver,mouseout:t.onMouseOut}},[s("svg",{class:"MatcQIconSVG "+t.icon,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.25",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},domProps:{innerHTML:t._s(t.icons[t.icon])}})]):s("span",{class:"MatcQIcon "+t.icon,on:{click:t.onClick,mouseover:t.onMouseOver,mouseout:t.onMouseOut}})},a=[],r=s(40282),n=s(43788),i=s(45801),l={name:"QIcon",props:["icon","tooltip"],mixins:[r.Z,n.Z],data:function(){return{icons:i.c}},components:{},methods:{onMouseOver:function(t){this.$emit("mouseover",t)},onMouseOut:function(t){this.$emit("mouseout",t)},onClick:function(t){this.$emit("click",t)}},mounted:function(){this.tooltip&&this.addTooltip(this.$el,this.tooltip)}},c=l,u=s(1001),d=(0,u.Z)(c,o,a,!1,null,null,null),g=d.exports},48894:function(t,e,s){s.r(e),s.d(e,{default:function(){return z}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Matc"},[t.isGuest?s("LoginPage",{attrs:{user:t.user},on:{login:t.onLogin}}):s("div",{staticClass:"MatcContainer"},[t.hasHeader?s("QHeader",{attrs:{user:t.user},on:{login:t.onLogin,logout:t.onLogout}}):t._e(),s("router-view")],1),s("ErrorDialog",{ref:"errorDialog"})],1)},a=[],r=s(67906),n=s(16198),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"MatcLoginPage "+(t.resetToken?"MatcLoginPageReset":"MactMainGradient")},[t.isQuxAuth?s("div",{staticClass:"MatcLoginPageDialog"},[s("div",{staticClass:"MatcLoginPageContainer"},[t.resetToken?t._e():s("div",{staticClass:"MatcToolbarTabs MatcToolbarTabsBig"},[s("a",{class:{MatcToolbarTabActive:"login"===t.tab},on:{click:function(e){return t.setTab("login")}}},[t._v("Login")]),t.allowSignUp?s("a",{class:{MatcToolbarTabActive:"signup"===t.tab},on:{click:function(e){return t.setTab("signup")}}},[t._v("Sign Up")]):t._e()]),s("div",{class:" MatcLoginWrapper "+t.tab},[s("div",{staticClass:"MatcLoginContent"},[s("div",{staticClass:"MatcLoginPageSection"},[s("div",{staticClass:"MatcLoginPageForm"},[s("div",{staticClass:" form-group"},[s("label",{},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:" form-control",attrs:{placeholder:"Your email",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:" form-group has-feedback"},[s("label",{},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:" form-control",attrs:{placeholder:"Your password",type:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"MatcErrorLabel"},[t._v(t._s(t.errorMessage))]),s("div",{staticClass:"MatcButtonBar"},[s("a",{staticClass:"MatcButton MatcButtonPrimary",on:{click:t.login}},[t._v("Login")]),t.hasLoginError?s("a",{staticClass:"MatcLinkButton",on:{click:t.requestPasswordReset}},[t._v("Reset Password")]):t._e()])])]),t._v(" "),s("div",{staticClass:"MatcLoginContent"},[s("div",{staticClass:"MatcLoginPageSection"},[s("div",{staticClass:"MatcLoginPageForm"},[s("div",{staticClass:" form-group"},[s("label",{},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:" form-control",attrs:{placeholder:"Your email",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:" form-group has-feedback"},[s("label",{},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:" form-control",attrs:{placeholder:"Your password",type:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:" form-group has-feedback"},[s("div",{staticClass:"MatcCheckboxRow"},[s("CheckBox",{attrs:{label:""},model:{value:t.tos,callback:function(e){t.tos=e},expression:"tos"}}),s("span",{on:{click:function(e){t.tos=!0}}},[t._v("I accept the "),s("a",{attrs:{href:"#/tos.html",target:"_blank"}},[t._v("terms of service")])])],1)])]),s("span",{staticClass:"MatcErrorLabel"},[t._v(t._s(t.errorMessage))]),s("div",{staticClass:"MatcButtonBar"},[s("a",{staticClass:"MatcButton MatcButtonPrimary",on:{click:t.signup}},[t._v("SignUp")])])])]),t._v(" "),s("div",{staticClass:"MatcLoginContent"},[t.resetToken?s("div",{staticClass:"MatcLoginPageSection"},[s("div",{staticClass:"MatcLoginPageForm"},[s("div",{staticClass:" form-group"},[s("label",{},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:" form-control",attrs:{placeholder:"Your email",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:" form-group has-feedback"},[s("label",{},[t._v("New Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:" form-control",attrs:{placeholder:"The new password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),s("span",{staticClass:"MatcErrorLabel"},[t._v(t._s(t.errorMessage))]),s("div",{staticClass:"MatcButtonBar"},[s("a",{staticClass:"MatcButton MatcButtonDanger",on:{click:t.resetPassword}},[t._v("Set new password")])])]):t._e()])])])]):t._e()])},l=[],c=s(77259),u=s(54524),d=s(71021),g={name:"Header",mixins:[],props:["user"],data:function(){return{hasLoginError:!1,resetToken:!1,email:"",password:"",tos:!1,errorMessage:" ",tab:"login",config:{}}},computed:{isQuxAuth:function(){return"keycloak"!==c.Z.getConfig().auth},allowSignUp:function(){return this.config&&this.config.user&&!0===this.config.user.allowSignUp}},watch:{user:function(t){this.logger.log(6,"watch","user >> "+t.email),this.user=t}},components:{CheckBox:d.Z},methods:{setTab:function(t){this.tab=t,this.errorMessage=" "},resetPassword:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.logger.info("resetPassword","enter ",t.email),!(t.email.length<2)){e.next=4;break}return t.errorMessage="Please enter your email",e.abrupt("return");case 4:if(!(t.password.length<6)){e.next=7;break}return t.errorMessage="Password too short",e.abrupt("return");case 7:if(!(t.resetToken.length<6)){e.next=10;break}return t.errorMessage="Token is wrong",e.abrupt("return");case 10:return e.next=12,c.Z.getUserService().reset2(t.email,t.password,t.resetToken);case 12:s=e.sent,"error"===s.type?t.errorMessage="Someything is wrong":(t.errorMessage="",t.resetToken="",t.tab="login",t.$router.push("/"));case 14:case"end":return e.stop()}}),e)})))()},requestPasswordReset:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.logger.info("requestPasswordReset","enter ",t.email),e.next=3,c.Z.getUserService().reset(t.email);case 3:t.errorMessage="Check you mail.";case 4:case"end":return e.stop()}}),e)})))()},login:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.logger.info("login","enter ",t.email),e.next=3,c.Z.getUserService().login({email:t.email,password:t.password});case 3:s=e.sent,"error"==s.type?(t.$root.$emit("Error","Wrong login credentials"),t.errorMessage="Login is wrong",t.hasLoginError=!0):(t.$emit("login",s),t.$root.$emit("UserLogin",s),t.hasLoginError=!1);case 5:case"end":return e.stop()}}),e)})))()},signup:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){var s,o;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.logger.info("signup","enter ",t.email),!(t.password.length<6)){e.next=4;break}return t.errorMessage="Password too short",e.abrupt("return");case 4:if(!0===t.tos){e.next=7;break}return t.errorMessage="Please accept terms of service",e.abrupt("return");case 7:return e.next=9,c.Z.getUserService().signup({email:t.email,password:t.password,tos:t.tos});case 9:if(s=e.sent,"error"!=s.type){e.next=14;break}s.errors.indexOf("user.create.domain")>=0?t.errorMessage="Not the correct domain":s.errors.indexOf("user.create.nosignup")>=0?t.errorMessage="No sign-ups allowed.":s.errors.indexOf("user.email.not.unique")>=0?t.errorMessage="Email is taken":t.errorMessage="Password too short",e.next=20;break;case 14:return e.next=16,c.Z.getUserService().login({email:t.email,password:t.password});case 16:o=e.sent,t.$emit("login",o),t.$root.$emit("UserLogin",o),t.logger.log(-1,"signup","exit with login",t.email);case 20:case"end":return e.stop()}}),e)})))()},initKeyCloak:function(t){var e=c.Z.getUserService();e.init(t)}},mounted:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.logger=new u.Z("LoginPage"),t.resetToken=t.$route.query.id,t.resetToken&&t.resetToken.length>2&&(t.logger.log(-1,"mounted","reset "),t.tab="reset"),t.config=c.Z.getConfig(),t.logger.log(-1,"mounted","exit > ",t.config.user);case 5:case"end":return e.stop()}}),e)})))()}},h=g,p=s(1001),m=(0,p.Z)(h,i,l,!1,null,null,null),v=m.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"MatcHeader",attrs:{id:""}},[o("div",{staticClass:"MatcHeaderLeft"},[o("a",{ref:"myPrototype",attrs:{href:"#/"}},[o("img",{ref:"logo",staticClass:"MatcHeaderLogo",attrs:{src:s(56549)}}),t._v(" Quant-UX ")])]),t._m(0),o("div",{staticClass:"MatcHeaderRight"},[o("a",{attrs:{href:"#/help.html"}},[o("QIcon",{attrs:{icon:"Book",tooltip:t.$t("header.tooltip.documentation")}})],1),o("LanguagePicker",{on:{change:t.setLanguage}}),o("AccountButton",{attrs:{user:t.user}})],1)])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container MatcHeaderCenter"},[s("div",{staticClass:"MatcHeaderCenterLeft"}),s("div",{staticClass:"MatcHeaderCenterRight"})])}],M=s(54953),k=s(5698),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["MatcAccountButton",{MatcToolbarPopUpVisible:t.isVisible}]},[s("a",{staticClass:"MatcToolbarIconButton",attrs:{type:"button","data-dojo-attach-point":"button"},on:{click:function(e){return e.stopPropagation(),t.open.apply(null,arguments)}}},[t.hasLabel?s("span",[t._v(" "+t._s(t.selectedLanguage)+" ")]):t._e(),t.hasImage?s("span",{staticClass:"MatcUserImageCntr"},[s("img",{staticClass:"MatcUserImage",attrs:{src:t.userImage}})]):s("QIcon",{attrs:{icon:"Account"}}),t.hasCarret?s("span",{staticClass:"caret"}):t._e()],1),t.isVisible?s("div",{staticClass:"MatcDropDownPopUp",attrs:{role:"menu","data-dojo-attach-point":"popup"}},[s("ul",{attrs:{role:"menu","data-dojo-attach-point":"ul"}},t._l(t.options,(function(e){return s("li",{key:e.value},[s("a",{attrs:{href:e.value}},[t._v(t._s(e.label))])])})),0)]):t._e(),t.isVisible?s("div",{staticClass:"MatcDropDownPopUpBackdrop"}):t._e()])},b=[],Z=(s(68309),s(48039)),T=s(16328),_=s(74702),y=s(43788),x={name:"AccountButton",props:["hasLabel","value","user"],mixins:[y.Z],data:function(){return{isVisible:!1,hasCarret:!1,options:[{label:this.$t("header.my-account"),value:"#/my-account.html"},{label:this.$t("header.logout"),value:"#/logout.html"}]}},components:{QIcon:_.Z},computed:{hasImage:function(){return this.user&&this.user.image},userImage:function(){return"/rest/user/"+this.user.id+"/images/"+this.user.name+"_"+this.user.lastname+"/"+this.user.image}},methods:{open:function(){var t=this;this.isVisible=!0,this._mouseDownListener=(0,Z.Z)(T.Z.body(),"click",(function(e){t.close(e)}))},close:function(){this.isVisible=!1}},mounted:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.logger=new u.Z("AccountButton"),t.addTooltip(t.$el,t.$t("header.tooltip.my-account"),"vommondToolTipRightBottom"),console.debug(t.user);case 3:case"end":return e.stop()}}),e)})))()}},S=x,L=(0,p.Z)(S,C,b,!1,null,null,null),P=L.exports,$={name:"Header",mixins:[y.Z],props:["user"],data:function(){return{}},watch:{user:function(t){this.logger.log(6,"watch","user >> "+t.email),this.user=t}},components:{LanguagePicker:k.Z,QIcon:_.Z,AccountButton:P},methods:{setLanguage:function(t){this.logger.log(-1,"setLanguage","entry",t),c.Z.getUserService().setLanguage(t),this.$root.$i18n.locale=t,this.$root.$emit("Success",this.$i18n.t("common.language-changed"))},logout:function(){this.logger.log(2,"logout","entry"),c.Z.getUserService().logout(),this.$emit("logout",c.Z.getUserService().GUEST),(0,M.Z)("/",!0)}},mounted:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.logger=new u.Z("Header"),t.logger.log(7,"mounted","exit >> "+t.user.email),t.addTooltip(t.$refs.logo,t.$t("header.tooltip.my-prototypes")),t.addTooltip(t.$refs.myPrototype,t.$t("header.tooltip.my-prototypes"));case 4:case"end":return e.stop()}}),e)})))()}},B=$,D=(0,p.Z)(B,f,w,!1,null,null,null),E=D.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ZoomDialog",{ref:"dialog"},[s("div",{staticClass:"MatcDialog MatcErrorDialog"},[s("h2",{staticClass:"title"},[t._v(t._s(t.message))]),s("label",[t._v("Stack")]),s("pre",{staticClass:"MatcErrorStackTrace"},[t._v(t._s(t.stack))]),s("label",[t._v("Trace")]),s("pre",{staticClass:"MatcErrorStackTrace"},[t._v(t._s(t.trace))]),s("div",{staticClass:"MatcButtonBar MatcMarginTop"},[s("a",{staticClass:"MatcButton",on:{click:t.close}},[t._v("Close")]),s("a",{staticClass:"MatcButton",on:{click:function(e){t.doNotShowAgain=!0,t.close()}}},[t._v("Do not show again")])])])])},H=[],N=(s(73210),s(58761)),I={name:"ErrorDialog",props:["pub"],mixins:[],data:function(){return{message:"",stack:"",trace:"",doNotShowAgain:!1}},watch:{},components:{ZoomDialog:N.Z},methods:{close:function(){this.$refs.dialog.close()},show:function(t,e){this.doNotShowAgain||(this.$refs.dialog.show(),this.message=t,this.stack=t.stack.trim(),this.trace=e)}},mounted:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.logger=new u.Z("ErrorDialog");case 1:case"end":return e.stop()}}),e)})))()}},Q=I,A=(0,p.Z)(Q,U,H,!1,null,null,null),R=A.exports,q=s(78651),O=s(28379),F={name:"home",mixins:[],data:function(){return{hasHeader:!1,user:{id:-1,name:"Guest",email:"guest@quant-ux.com",role:"guest",lastlogin:0,lastNotification:0,tos:!1,paidUntil:0,plan:"Free"}}},components:{QHeader:E,ErrorDialog:R,LoginPage:v},computed:{isGuest:function(){return"guest"===this.user.role}},methods:{onLogin:function(t){this.user=t,this.logger.info("onLogin","exit >> "+this.user.email)},onLogout:function(t){this.user=t,this.logger.info("onLogin","exit >> "+this.user.email)},scrollTop:function(){window.scrollTo(0,0)},initRoute:function(){O.Z.remove(q.Z.body(),"MatcPublic"),O.Z.remove(q.Z.body(),"MatcVisualEditor"),O.Z.remove(q.Z.body(),"MatcLight"),this.scrollTop(),!0===this.$route.meta.hasHeader?this.hasHeader=!0:this.hasHeader=!1},showErrorDetails:function(t,e){this.$refs.errorDialog.show(t,e)}},watch:{$route:function(){this.initRoute()}},mounted:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.logger=new u.Z("QUX"),u.Z.setErrorCallback((function(e,s){return t.showErrorDetails(e,s)})),t.initRoute(),e.next=5,c.Z.getUserService().load();case 5:t.user=e.sent,t.logger.log(-1,"mounted","locale: "+navigator.language),t.$root.$on("MatcLogout",(function(e){t.onLogout(e)}));case 8:case"end":return e.stop()}}),e)})))()}},W=F,V=(0,p.Z)(W,o,a,!1,null,null,null),z=V.exports},83470:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MatcApps"},[t._v(" Loading... ")])},a=[],r=s(67906),n=s(16198),i=s(54524),l=s(77259),c={name:"Overview",mixins:[],data:function(){return{}},mounted:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){var s,o,a,n,c,u;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.logger=new i.Z("TestMobile"),s=t.$route.params.id,o=l.Z.getModelService(t.$route),e.next=5,o.findInvitation(s);case 5:for(c in a=e.sent,n={},a)n[a[c]]=c;u=n[1],t.logger.info("mounted","exit > "+u),location.href="#/simulate.html?qr=true&h=".concat(u);case 11:case"end":return e.stop()}}),e)})))()}},u=c,d=s(1001),g=(0,d.Z)(u,o,a,!1,null,null,null),h=g.exports},72091:function(t,e,s){s.r(e),s.d(e,{default:function(){return P}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["MatcPublic",{MatcWindows:t.hasWindows}]},[t.step<10?s("div",{class:["MatcTest",{MatcTestCustomSplash:t.hasSplash}]},[t.hasSplash?s("div",{staticClass:"MatcTestCustomSplashPowered"},[t._v("Powered by Quant-UX")]):t._e(),t.hasSettings?s("div",{staticClass:"MatcTestMenu MatcTestMenuMax MactMainGradient",style:t.splashBackground,attrs:{"data-dojo-attach-point":"overlay"}},[s("div",{class:["MatcTestLogoCntr",{MatcTestLogoCntrMax:t.step>1}]},[s("div",{class:["MatcTestProgressCntr"]},[s("div",{staticClass:"MatcTestProgressBar"}),s("transition",{attrs:{name:"fade"}},[t.step>2?s("div",[6===t.step?s("div",{staticClass:"MatcTestContent"},[s("div",{staticClass:"MatcTestContentCntr"},[s("h2",[t._v(t._s(t.getNLS("simulator.password.title"))+" ")]),s("p",{domProps:{innerHTML:t._s(t.getNLS("simulator.password.msg"))}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",domProps:{value:t.password},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setPassword.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("div",{staticClass:"MatcButton MatcMarginTop",on:{click:function(e){return t.setPassword()}}},[t._v(" "+t._s(t.getNLS("simulator.password.next"))+" ")]),s("span",{staticClass:"MatcError",staticStyle:{"margin-left":"20px"}},[t._v(" "+t._s(t.passwordError)+" ")])])]):t._e(),3===t.step?s("div",{staticClass:"MatcTestContent"},[s("div",{staticClass:"MatcTestContentCntr"},[s("h2",[t._v(" "+t._s(t.getNLS("simulator.welcome.title"))+" !")]),t.settings.description?s("p",[t._v(" "+t._s(t.settings.description)+" ")]):s("p",{domProps:{innerHTML:t._s(t.getNlSWithReplacement("simulator.welcome.msg",{name:t.model.name}))}}),s("p",{domProps:{innerHTML:t._s(t.getNLS("simulator.welcome.privacy"))}}),s("p",{domProps:{innerHTML:t._s(t.getNLS("simulator.welcome.privacy1"))}}),s("p",{domProps:{innerHTML:t._s(t.getNLS("simulator.welcome.click-start"))}})]),s("div",{staticClass:"MatcMarginTop"},[0===t.getUserTasks().length?s("div",{staticClass:"MatcButton MatcButtonPrimary MatcTestStartButton",on:{click:function(e){return t.renderTest()}}},[t._v(" "+t._s(t.getNLS("simulator.welcome.start"))+" ")]):s("div",{staticClass:"MatcButton MatcButtonPrimary MatcTestStartButton",on:{click:function(e){return t.renderTasks()}}},[t._v(" "+t._s(t.getNLS("simulator.welcome.showTasks"))+" ")])])]):t._e(),4===t.step?s("div",{staticClass:"MatcTestContent"},[s("div",{staticClass:"MatcTestContentCntr"},[s("h2",[t._v(t._s(t.getNLS("simulator.tasks.title"))+" !")]),s("p",[t._v(" "+t._s(t.getNLS("simulator.tasks.msg"))+" ")]),t._l(t.getUserTasks(),(function(e){return s("div",{key:e.id},[s("h4",[t._v(t._s(e.name))]),s("div",{staticClass:"MatcTestTaskDescription"},[t._v(" "+t._s(e.description)+" ")])])}))],2),s("div",{staticClass:"MatcMarginTop"},[s("div",{staticClass:"MatcButton MatcButtonPrimary MatcTestStartButton",on:{click:function(e){return t.renderTest()}}},[t._v(" "+t._s(t.getNLS("simulator.welcome.start"))+" ")])])]):t._e()]):t._e()])],1),0==t.step?s("transition",{attrs:{name:"logoFade"}},[s("div",{staticClass:"MatcLogoNew MatcSimulatorLoadingLogoAnimation"})]):t._e()],1)]):t._e()]):t._e(),s("div",{staticClass:"MatcTestCntr"},[t.showTasks?s("div",{ref:"tastCntr",staticClass:"MatcTestTaskCntr MatcTestContent"},[s("h1",[t._v(t._s(t.getNLS("simulator.tasks.title"))+" ")]),s("p",[t._v(" "+t._s(t.getNLS("simulator.tasks.msg"))+" ")]),t._l(t.getUserTasks(),(function(e,o){return s("div",{key:e.id,class:{MatcTestTaskDone:t.taskDone[e.id]}},[s("h3",[t._v("#"+t._s(o+1)+" - "+t._s(e.name)+" "),t.taskDone[e.id]?s("span",{staticClass:"mdi mdi-check-circle"}):t._e()]),s("div",{staticClass:"MatcTestTaskDescription"},[t._v(" "+t._s(e.description)+" ")])])}))],2):t._e(),s("div",{ref:"cntr",staticClass:"MatcTest"})]),t.step<=1?s("div",{staticClass:"MatcTestVersion"},[t._v(" v4.3.30 ")]):t._e()])},a=[],r=s(67906),n=s(16198),i=s(62032),l=(s(92222),s(57327),s(41539),s(69720),s(47042),s(82526),s(41817),s(54747),s(40282)),c=s(28379),u=s(59344),d=s(78651),g=s(48039),h=s(75790),p=s(54524),m=s(17386),v=s(72712),f=s(96200),w=s(78449),M=s(77259),k=s(12651),C=s(49799),b=s(75840),Z=s(3270),T=s(43371),_=s(67265),y={name:"TestPage",mixins:[v.Z,l.Z],data:function(){return{true:!1,skipSplash:!1,desktopScaleDirection:"width",desktopOffset:0,settings:null,logging:!0,model:null,step:0,password:"",passwordError:"",simulatorEvents:[],taskDone:{},splashImage:null,forceSimpleBar:!1}},components:{},computed:{hasWindows:function(){return navigator.platform.indexOf("Win")>-1},hasSplash:function(){return null!==this.splashImage},showTasks:function(){return!(!this.settings||!this.settings.showTaskInTest)},hasSettings:function(){return null!==this.settings},menuWidth:function(){return this.settings&&this.settings.showTaskInTest?400:0},splashBackground:function(){return this.splashImage?"background-image: url(/rest/images/".concat(this.hash,"/").concat(this.splashImage.url,");"):""}},methods:{postCreate:function(){this.logger=new p.Z("TestPage");var t=this.getHashFromUri();this.logger.log(2,"postCreate","enter",t);var e=this.$route.query.log;if(this.analytics=new Z.Z,this.initNLS(),(0,w.Z)("android")||(0,w.Z)("ios")){var s="/#/simulate.html?qr=true&h="+t;return s+="false"==e?"&log=false":"&log=true",s+=this.getDataQuery(),void(location=s)}this.db=new m.Z,"true"===this.$route.query.s&&(this.logger.log(-1,"postCreate","skipSplash"),this.skipSplash=!0),setTimeout(u.Z.hitch(this,"loadModel"),1),this.logger.log(1,"postCreate","exit")},getDataQuery:function(){var t,e="",s=Object.entries(this.$route.query).filter((function(t){return"data_"==t[0].slice(0,5)})),o=(0,i.Z)(s);try{for(o.s();!(t=o.n()).done;){var a=t.value;e+="&"+a[0]+"="+a[1]}}catch(r){o.e(r)}finally{o.f()}return e},loadModel:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.logger.log(2,"loadModel","enter"),s=t.getHashFromUri(),s&&s.length<60?t.showPassword():t.loadModelFromHash(s);case 3:case"end":return e.stop()}}),e)})))()},showPassword:function(){this.logger.log(2,"showPassword","enter"),this.step=6},setPassword:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){var s,o,a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.logger.log(1,"setPassword","enter",t.password),s=t.getHashFromUri(),o=s+t.password,e.prev=3,e.next=6,M.Z.getModelService().findAppByHash(o);case 6:a=e.sent,a?(t.passwordError="",t.loadModelFromHash(o)):t.showPasswordError(),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),t.showPasswordError();case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))()},showPasswordError:function(){this.passwordError="The password is wrong."},loadModelFromHash:function(t){var e=this;return(0,n.Z)((0,r.Z)().mark((function s(){var o;return(0,r.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.hash=t,!t){s.next=8;break}return s.next=4,M.Z.getModelService().findAppByHash(t);case 4:o=s.sent,e.setModel(o),s.next=9;break;case 8:console.debug("loadModel() > Hash is missing in url");case 9:"false"===e.$route.query.log&&(e.logger.log(0,"loadModel","turn off logging"),e.logging=!1),e.screenID=e.$route.query.s,e.debug="true"===e.$route.query.debug;case 12:case"end":return s.stop()}}),s)})))()},getHashFromUri:function(){return this.$route.query.a&&this.$route.query.b?Math.random()>.5?(this.logger.log(0,"getHashFromUri","Test version A"),this.$route.query.a):(this.logger.log(0,"getHashFromUri","Test version B"),this.$route.query.b):this.$route.query.h},setModel:function(t){var e=this;return(0,n.Z)((0,r.Z)().mark((function s(){var o;return(0,r.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.logger.log(2,"setModel","enter > "+t),!t){s.next=10;break}return e.model=t,s.next=5,M.Z.getModelService().findTestByHash(e.model,e.hash);case 5:o=s.sent,e.setTestsettings(o),e.preloadImages(t),s.next=12;break;case 10:e.domNode.innerHTML="Sorry, the invitation is not valid...",location.href=location.protocol+"//"+location.host+"/404.html";case 12:case"end":return s.stop()}}),s)})))()},capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},setTestsettings:function(t){this.logger.log(1,"setTestsettings","enter > ",t),this.settings=t,this.setCustomSplash(t),this.debug||this.skipSplash?setTimeout(u.Z.hitch(this,"renderTest"),0):setTimeout(u.Z.hitch(this,"hideLogo"),500)},setCustomSplash:function(t){this.logger.log(1,"setCustomSplash","enter > ",t),t.splash&&(this.splashImage=t.splash)},hideLogo:function(){this.logger.log(1,"hideLogo","enter"),this.step=1,setTimeout(u.Z.hitch(this,"expandWindow"),500)},expandWindow:function(){this.logger.log(1,"expandWindow","enter"),this.step=2,setTimeout(u.Z.hitch(this,"renderSettings"),1e3)},renderSettings:function(){this.logger.log(2,"renderSettings","enter"),this.step=3},renderTasks:function(){this.logger.log(2,"renderTasks","enter"),this.step=4},getUserTasks:function(){var t=[];if(this.settings.tasks&&this.settings.tasks)for(var e=0;e<this.settings.tasks.length;e++){var s=this.settings.tasks[e];s.description&&"Enter a description here"!=s.description&&t.push(s)}return t},getPricacy:function(){return this.getNLS("test.welcome.privacy")},preloadImages:function(t){this.logger.log(-1,"preloadImages","enter"),C.Z.load(t,this.hash,this.domNode)},renderTest:function(){if(this.logger.log(-1,"renderTest","enter",this.settings.showTaskInTest),this.step=10,c.Z.remove(this.overlay,"MatcTestMenuMax"),this.renderSimulator(),"desktop"!=this.model.type){var t=this.db.div("MatcTestQRButton  MatcAnimated MatcFadeOut").build(this.domNode);this.db.span("mdi mdi-qrcode MatcMiddle").build(t),this.own((0,g.Z)(t,h.Z.press,u.Z.hitch(this,"showQRDialog"))),setTimeout((function(){c.Z.remove(t,"MatcFadeOut")}),1500)}},showQRDialog:function(t){this.stopEvent(t);var e=this.db.div("MatchTestQRDialog MatcPadding").build(),s=this.db.img().build(e);c.Z.add(s,"MatcSimulatorQR"),b.Z.getQRCode(this.hash,!0,!1,this.getLanguage(),this.getDataQuery()).then((function(t){s.src=t})),this.db.div("MatcHint MatchTestQRDialogHint",this.getNLS("test.qr.headline")).build(e);var o=new f.Z;o.popup(e,t.target)},onSimulatorEvent:function(t){var e=this;this.simulatorEvents.push(t);var s=new T.Z(this.simulatorEvents);s=this.getActionEvents(s);var o=this.settings.tasks,a=this.analytics.getTaskPerformance(s,o,!0);a.data.forEach((function(t){e.$set(e.taskDone,t.task,!0)}))},renderSimulator:function(){var t=d.Z.getBox();t.w-=this.menuWidth;var e=this.db.div("MatcSimulatorSection").build();return e.style.top="0px",e.style.left=this.menuWidth+"px",e.style.width=t.w+"px",this.$refs.cntr.appendChild(e),"desktop"==this.model.type?this.simulator=this.renderDesktopSimulator(e,t):this.simulator=this.renderMobileSimulator(e,t),e},renderMobileSimulator:function(t,e){var s=this;this.logger.log(0,"renderMobileSimulator","enter > "+e.w+","+e.h),c.Z.add(d.Z.body(),"MatcTestMobile");var o=.75,a={w:Math.floor(e.w*o),h:Math.floor(e.h*o)},r=this.model.screenSize;a.h<this.model.screenSize.h&&(this.logger.log(-1,"renderMobileSimulator","scale down..."),r=this.getScaledSize(a,"height",this.model));var n=this.db.div("MatcCenter").build(t),i=this.db.div("MatchSimulatorWrapper").build(n);i.style.width=Math.round(r.w)+"px",i.style.height=Math.round(r.h)+"px";var l=this.db.div("MatchSimulatorContainer").build(i);l.style.width=Math.round(r.w)+"px",l.style.height=Math.round(r.h)+"px";var u=_.n(l,this.forceSimpleBar),g=this.createSimulator();return g.setResizeListener((function(t){s.logger.log(-1,"renderMobileSimulator","resize",t.w+"/"+t.h),i.style.height=t.h+"px",i.style.width=t.w+"px",l.style.height=t.h+"px",l.style.width=t.w+"px"})),g.setInvitation(this.hash),g.isDesktopTest=!0,g.scrollListenTarget=u?"simpleBar":"parent",g.placeAt(l),g.setModel(this.model),this.logger.log(0,"renderMobileSimulator","exit",r),g},renderDesktopSimulator:function(t,e){var s=this;this.logger.log(2,"renderDesktopSimulator","enter ");var o=this.getDesktopScaleFactor(e);e.w-=64;var a={w:Math.floor(e.w*o),h:Math.floor(e.h*o)},r=this.model.screenSize;a.w<this.model.screenSize.w&&(this.logger.log(0,"renderDesktopSimulator","scale down by width..."),r=this.getScaledSize(a,"width",this.model));var n=this.db.div("MatcCenter").build(t),i=this.db.div("MatchSimulatorWrapper").build(n);i.style.width=Math.round(r.w)+"px",i.style.height=Math.round(r.h)+"px";var l=this.db.div("MatchSimulatorContainer").build(i);l.style.width=Math.round(r.w)+"px",l.style.height=Math.round(r.h)+"px";var c=_.n(l,this.forceSimpleBar),u=this.createSimulator();return u.setResizeListener((function(t){s.logger.log(-1,"renderMobileSimulator","resize",t.w+"/"+t.h),i.style.height=t.h+"px",i.style.width=t.w+"px",l.style.height=t.h+"px",l.style.width=t.w+"px"})),u.mode="width",u.isDesktopTest=!0,u.setInvitation(this.hash),u.placeAt(l),u.scrollListenTarget=c?"simpleBar":"parent",u.startup(),u.setModel(this.model),this.logger.log(2,"renderDesktopSimulator","exit"),u},getDesktopScaleFactor:function(t){var e=(t.w-this.desktopOffset)/t.w;return Math.min(1,e)},createSimulator:function(){var t=this;if(this.debug){var e=this.$new(k.Z);return e.on("event",(function(e){return t.onSimulatorEvent(e)})),e.mode="debug",e.logData=!1,e}var s=this.$new(k.Z);return s.on("event",(function(e){return t.onSimulatorEvent(e)})),s.mode="debug",s.logData=this.logging,s.applyTestSettings(this.settings),s}},mounted:function(){c.Z.add(d.Z.body(),"MatcPublic"),this.forceSimpleBar&&console.error("forceSimpleBar")}},x=y,S=s(1001),L=(0,S.Z)(x,o,a,!1,null,null,null),P=L.exports},56549:function(t,e,s){t.exports=s.p+"img/QUXLogo5BlueWhite2.305445b9.svg"}}]);
//# sourceMappingURL=matc-legacy.4e3bdaea.js.map