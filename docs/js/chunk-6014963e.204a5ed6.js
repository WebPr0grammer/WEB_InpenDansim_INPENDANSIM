(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6014963e"],{"4ac0":function(t,e,n){"use strict";var a=n("d8e1"),s=n.n(a);s.a},"9db0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"send__wrap"},[n("div",{staticClass:"navigation app-header"},[n("div",{staticClass:"nav-div"},[n("nav",{staticClass:"nav-menu",attrs:{role:"navigation"}},[n("router-link",{staticClass:"logo title",attrs:{to:"/"}},[t._v("인편단심")]),n("span",{staticStyle:{margin:"0 0.7rem"}},[t._v("|")])],1),n("div",{staticClass:"nav-back",on:{click:t.handleBack}},[t._m(0)])])]),t.pageNumber?n("div",{staticClass:"content-area"},[n("div",{staticClass:"wrapper send-now"},[n("div",{staticClass:"content content-main"},[t._v(" 편지를 누르면 ㅇㅇㅇ훈련소 페이지로 이동합니다. ")]),n("textarea",{attrs:{name:"",id:"",cols:"30",rows:"10"}},[t._v("편지 내용입니다.")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.showPopup}},[t._v(" 클립보드에 복사하기 ")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.showPopup}},[t._v(" 편지보내러가기 ")]),n("input",{attrs:{type:"text",id:"inputField"}}),n("button",{on:{click:t.copyText}},[t._v("복사하기")]),n("br"),n("br"),n("button",{on:{click:t.toggleSend}},[t._v("Send!")]),t._m(1)]),t._m(2)]):n("div",[n("h1",[t._v("보내기를 완료했습니다!")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.backToSend}},[t._v(" 뒤로가기 ")])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fas fa-arrow-left"}),t._v(" 편지작성")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clipboard"},[n("input",{attrs:{id:"target",value:"https://github.com/zenorocha/clipboard.js.git"}}),n("button",[t._v("copy")]),n("h1",[t._v(' "공군" 훈련소에 보내시는거죠? '),n("br"),t._v(" 저희가 모셔드릴게요 ")]),n("h2",[t._v(" 편지 들고 가시는거 잊지 마세요!"),n("br"),t._v(" 버튼을 눌러 편지를 담아가세요. ")]),n("span",[t._v(" 붙여넣기(ctrl+v) 하시면 내용이 복사됩니다.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper send-latter"},[n("div",{staticClass:"content content-middle"},[t._v(" 로그인하고 작성한 편지를 보관하세요. ")]),n("div",{staticClass:"content content-sub"},[t._v(" 언제든지 보내고 싶을 때 보낼 수 있어요. ")]),n("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("편지 보관하기")]),n("div",{staticClass:"content content-middle"},[t._v(" 편지 출력기능을 이용해서"),n("br"),t._v(" 직접 우편으로 보낼 수 있어요. ")]),n("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("편지 출력하기")])])}],i=(n("c975"),{data:function(){return{pageNumber:!0}},methods:{toggleSend:function(){this.pageNumber=!this.pageNumber},handleBack:function(){this.$router.push({path:"/write/mail"})},copyText:function(){var t=navigator.userAgent.toLowerCase(),e=document.getElementById("target");e.select(),-1!=t.indexOf("safari")&&e.setSelectionRange(0,9999),document.execCommand("copy"),document.body.removeChild(e)},showPopup:function(){window.open("http://www.airforce.mil.kr:8081/user/indexSub.action?codyMenuSeq=156893223&siteId=last2&menuUIType=sub#searchName","팝업창기능","width=1440, height=900, left=720, top=330"),this.pageNumber=!this.pageNumber},backToSend:function(){this.pageNumber=!this.pageNumber}}}),c=i,r=(n("4ac0"),n("2877")),o=Object(r["a"])(c,a,s,!1,null,"23f2d0fd",null);e["default"]=o.exports},c975:function(t,e,n){"use strict";var a=n("23e7"),s=n("4d64").indexOf,i=n("a640"),c=n("ae40"),r=[].indexOf,o=!!r&&1/[1].indexOf(1,-0)<0,u=i("indexOf"),d=c("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:o||!u||!d},{indexOf:function(t){return o?r.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},d8e1:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6014963e.204a5ed6.js.map