(this["webpackJsonpgithub-user"]=this["webpackJsonpgithub-user"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(16),s=n.n(a),u=(n(28),n(4)),i=(n(29),n(5)),l=n(0);function o(e){var t=e.setLogin,n=Object(r.useRef)(null),c=function(e){var n=Object(r.useState)(e),c=Object(u.a)(n,2),a=c[0],s=c[1];return[{value:a,onChange:function(e){return s(e.target.value)}},function(){return s(e)},function(){return t(a)}]}(""),a=Object(u.a)(c,3),s=a[0],o=a[1],j=a[2];return Object(r.useEffect)((function(){n.current.focus()})),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(),o()},children:[Object(l.jsx)("label",{className:"label",children:"github username"}),Object(l.jsx)("input",Object(i.a)({ref:n},s)),Object(l.jsx)("button",{children:"Submit"})]})}var j=n(8),b=n.n(j),f=n(12),O=function(e,t){localStorage.setItem(e,JSON.stringify(t))};function d(e){var t=Object(r.useState)(null),n=Object(u.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(null),l=Object(u.a)(s,2),o=l[0],j=l[1],d=Object(r.useState)(!1),h=Object(u.a)(d,2),g=h[0],p=h[1];return Object(r.useEffect)((function(){if(e&&(!c||c.url!==e)){j(null);var t,n=(t=e,JSON.parse(localStorage.getItem(t)));if(n&&n.url===e)return a(n),void console.log("fetched from local storage");!function(){r.apply(this,arguments)}()}function r(){return(r=Object(f.a)(b.a.mark((function t(){var n,r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(!0),t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,p(!1),r.login||Array.isArray(r)?((c=Object(i.a)({},r)).url=e,a(r),O(e,c)):(j(r),a(null)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),j(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}}),[e]),{data:c,loading:g,error:o}}function h(e){var t=e.uri,n=e.renderSuccess,r=void 0===n?function(e){return Object(l.jsx)("pre",{children:JSON.stringify(e,null,2)})}:n,c=e.renderLoading,a=void 0===c?Object(l.jsx)("h1",{children:"Loading..."}):c,s=e.renderError,u=void 0===s?function(e){return Object(l.jsx)("pre",{children:JSON.stringify(e,null,2)})}:s,i=d(t),o=i.data,j=i.loading,b=i.error;return j?a:b?u(b):o?r(o):null}var g=n(21);function p(e){var t=e.login,n=e.name,c="https://api.github.com/repos/".concat(t,"/").concat(n,"/readme"),a=Object(r.useState)(null),s=Object(u.a)(a,2),i=s[0],o=s[1],j=Object(r.useState)(!1),O=Object(u.a)(j,2),d=O[0],h=O[1],p=Object(r.useState)(null),x=Object(u.a)(p,2),v=x[0],m=x[1];function S(){return(S=Object(f.a)(b.a.mark((function e(t){var n,r,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(null),h(!0),m(null),e.next=6,fetch(t);case 6:return n=e.sent,e.next=9,n.json();case 9:return(r=e.sent).download_url||m(r),e.next=13,fetch(r.download_url);case 13:return c=e.sent,e.next=16,c.text();case 16:a=e.sent,o(a),h(!1),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),m(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){t&&n&&function(e){S.apply(this,arguments)}(c)}),[t,n]),d?Object(l.jsx)("h2",{children:"Loading readme ..."}):v?Object(l.jsx)("pre",{children:JSON.stringify(v,null,2)}):Object(l.jsx)(g.a,{children:i,className:"markdown"})}function x(e){var t=e.repositories,n=e.login,c=Object.values(t);c.splice(-1,1);var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(r.useState)(e[t]),c=Object(u.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(t),l=Object(u.a)(i,2),o=l[0],j=l[1];return Object(r.useEffect)((function(){s(e[o])}),[o]),[a,function(){j(0===o?e.length-1:o-1)},function(){o===e.length-1?j(0):j(o+1)}]}(c),s=Object(u.a)(a,3),i=s[0],o=s[1],j=s[2];if(i)return Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsxs)("div",{className:"toggle-names",children:[Object(l.jsx)("button",{className:"repoButton",onClick:o,children:"<"}),Object(l.jsx)("a",{className:"repoName",href:i.clone_url,target:"_blank",rel:"noreferrer",children:i.name}),Object(l.jsx)("button",{className:"repoButton",onClick:j,children:">"})]}),Object(l.jsx)(p,{login:n,name:i.name})]})}function v(e){var t=e.login,n="https://api.github.com/users/".concat(t,"/repos");return Object(l.jsx)(h,{uri:n,renderSuccess:function(e){return Object(l.jsx)(x,{repositories:e,login:t})}})}function m(e){var t="https://api.github.com/users/"+e.login;return Object(l.jsx)(h,{uri:t,renderSuccess:function(e){return Object(l.jsxs)("div",{className:"githubUser",children:[Object(l.jsx)("img",{src:e.avatar_url,alt:e.login,style:{width:200}}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:e.login}),e.name&&Object(l.jsx)("p",{children:e.name}),e.location&&Object(l.jsx)("p",{children:e.location}),e.created_at&&Object(l.jsx)("p",{children:e.created_at}),e.html_url&&Object(l.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",children:e.html_url})]}),Object(l.jsx)(v,{login:e.login,className:"repo-list"})]})}})}function S(){document.title="github user";var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{setLogin:c}),Object(l.jsx)(m,{login:n})]})}var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.62017841.chunk.js.map