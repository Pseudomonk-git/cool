(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c2f8bae","chunk-2d0babe1"],{3905:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},o=[],i=a("2877"),n={},l=Object(i["a"])(n,s,o,!1,null,null,null);t["default"]=l.exports},"7b6e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("TopLinks"),a("div",{staticClass:"columns is-mobile is-centered"},[a("div",{staticClass:"field is-grouped-multiline"},[a("div",{staticClass:"control"},[a("div",{staticClass:"loading"},[a("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(t){e.loading=t}}})],1),e.logged?a("div",{staticClass:"tags-has-addons home"},[a("p",{staticClass:"home-welcome"},[e._v(" > Welcome "),a("span",{staticClass:"home-name"},[e._v(e._s(e.user.name))])]),a("p",{staticClass:"home-welcome"},[e._v(" > Your Scopes/Permissions - "),a("span",{staticClass:"home-name"},[e._v(e._s(e.user.role))])]),a("p",{staticClass:"home-email"},[e._v(" > Your email is "),a("span",{staticClass:"home-emails"},[e._v('"'+e._s(e.user.email)+'"')])]),a("p",{staticClass:"home-welcome"},[e._v(" > Valid from - "),a("span",{staticClass:"home-emails"},[e._v('"'+e._s(e.tokendata.issuedate)+'"')])]),a("p",{staticClass:"home-welcome"},[e._v(" > Valid through - "),a("span",{staticClass:"home-emails"},[e._v('"'+e._s(e.tokendata.expirydate)+'"')])]),a("p",{staticClass:"home-key"},[e._v(" > Your API key is "),a("span",{staticClass:"home-apikey"},[e._v('"'+e._s(e.truncatedApi)+'"')])]),a("p",{staticClass:"home-alert"},[e._v("You Have been Successfully Logged In !!. Now You Can View Content")]),a("p",{staticClass:"home-disclaimer"},[e._v("Above Key is Valid for 1 Week, after that You have to Login Another time")])]):a("div",{staticClass:"tags-has-addons home"},[a("p",{staticClass:"home-welcome"},[e._v(" > Welcome to Glory to Heaven - You Anonymous 😜")]),a("p",{staticClass:"home-alert"},[e._v("I think You are not Logged in, Login / Register to View Content")])])])])])],1)},o=[],i=(a("fb6a"),a("d3b7"),a("25f0"),a("3905")),n=a("9062"),l=a.n(n),r=(a("e40d"),{components:{TopLinks:i["default"],Loading:l.a},data:function(){return{user:{},tokendata:{},truncatedApi:"",logged:!1,loading:!0,fullpage:!0}},created:function(){var e=this,t=localStorage.getItem("tokendata"),a=localStorage.getItem("userdata");if(null!=a&&null!=t){var s=JSON.parse(this.$hash.AES.decrypt(t,this.$pass).toString(this.$hash.enc.Utf8)),o=JSON.parse(this.$hash.AES.decrypt(a,this.$pass).toString(this.$hash.enc.Utf8));this.axios.post(window.apiRoutes.verifyRoute,{token:s.token}).then((function(a){a.data.auth||a.data.registered||null!=a.data.tokenuser?(e.user=o,e.tokendata=s,e.truncatedApi=s.token.slice(0,10)+"......."+t.slice(t.length-6,t.length-1),e.logged=!0,setTimeout((function(){e.loading=!1}),1e3)):(e.loading=!1,e.$router.push({name:"results",params:{id:0,cmd:"result",data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}}))}))}else this.logged=!1,this.loading=!1}}),c=r,d=a("2877"),u=Object(d["a"])(c,s,o,!1,null,null,null);t["default"]=u.exports},fb6a:function(e,t,a){"use strict";var s=a("23e7"),o=a("861d"),i=a("e8b5"),n=a("23cb"),l=a("50c4"),r=a("fc6a"),c=a("8418"),d=a("b622"),u=a("1dde"),h=a("ae40"),p=u("slice"),m=h("slice",{ACCESSORS:!0,0:0,1:2}),g=d("species"),v=[].slice,f=Math.max;s({target:"Array",proto:!0,forced:!p||!m},{slice:function(e,t){var a,s,d,u=r(this),h=l(u.length),p=n(e,h),m=n(void 0===t?h:t,h);if(i(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?o(a)&&(a=a[g],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(u,p,m);for(s=new(void 0===a?Array:a)(f(m-p,0)),d=0;p<m;p++,d++)p in u&&c(s,d,u[p]);return s.length=d,s}})}}]);