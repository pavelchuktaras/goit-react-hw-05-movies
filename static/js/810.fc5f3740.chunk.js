"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[810],{713:function(e,r,t){t.d(r,{Df:function(){return i},TP:function(){return h},tx:function(){return m},z1:function(){return p},zv:function(){return f}});var n=t(861),a=t(757),c=t.n(a),s=t(243),u="9e7481d90b411ad6f20570b113af199c";function i(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u),e.next=4,s.Z.get(r);case 4:return t=e.sent,e.abrupt("return",t.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return l=(0,n.Z)(c().mark((function e(r){var t,n,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,e.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(r,"&page=").concat(t),e.next=5,s.Z.get(n);case 5:return a=e.sent,e.abrupt("return",a.data.results);case 9:return e.prev=9,e.t0=e.catch(1),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),l.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(u),e.next=4,s.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(u),e.next=4,s.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(u),e.next=4,s.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},810:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(861),a=t(439),c=t(757),s=t.n(c),u=t(791),i=t(87),o=t(689),p=t(713),l="Movies_moviesContainer__-GVpN",h="Movies_searchInput__Pbx5C",v="Movies_btn__bScqh",f="Movies_resultsContainer__XdaZC",d="Movies_resultsList__Z7uiy",m="Movies_resultsListItem__AnYmG",_="Movies_movieLink__wBd2v",g=t(184),b=function(){var e=(0,u.useState)(""),r=(0,a.Z)(e,2),t=r[0],c=r[1],b=(0,u.useState)([]),x=(0,a.Z)(b,2),y=x[0],w=x[1],k=(0,u.useState)(!1),Z=(0,a.Z)(k,2),j=Z[0],C=Z[1],N=(0,i.lr)(),M=(0,a.Z)(N,2),E=M[0],S=M[1],q=(0,u.useCallback)(function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.z1)(r);case 3:t=e.sent,w(t),C(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),[]);(0,u.useEffect)((function(){var e=E.get("query");e&&(c(e),q(e))}),[E,q]);var z=(0,o.TH)();return(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("h1",{children:"Search Movies"}),(0,g.jsx)("input",{className:h,type:"text",value:t,onChange:function(e){return c(e.target.value)}}),(0,g.jsx)("button",{className:v,onClick:function(){S({query:t})},children:"Search"}),j&&y.length>0?(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("h2",{children:"Search Results"}),(0,g.jsx)("button",{className:v,onClick:function(){z.pathname.includes("/movies")?window.history.back():window.location.href="/"},children:"Go Back"}),(0,g.jsx)("ul",{className:d,children:y.map((function(e){return(0,g.jsx)("li",{className:m,children:(0,g.jsx)(i.rU,{className:_,to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]}):j&&0===y.length?(0,g.jsx)("p",{children:"Nothing found for your request."}):null]})}}}]);
//# sourceMappingURL=810.fc5f3740.chunk.js.map