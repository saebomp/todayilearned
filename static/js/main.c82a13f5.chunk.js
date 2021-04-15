(this.webpackJsonptil=this.webpackJsonptil||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(32),s=n.n(r),a=(n(40),n(41),n(11)),o=n(3),l=n(2),d=[{id:1,path:"/useInput",title:"useInput",component:"UseInput"},{id:2,path:"/useTab",title:"useTab",component:"UseTab"},{id:3,path:"/useEffect",title:"useEffect",component:"UseEffect"},{id:4,path:"/localStorage",title:"local Storage",component:"LocalStorage"},{id:5,path:"/useTitle",title:"useTitle",component:"UseTitle"},{id:6,path:"/useClick",title:"useClick",component:"UseClick"},{id:7,path:"/useFadein",title:"useFadein",component:"UseFadein"},{id:8,path:"/count",title:"count",component:"Count"},{id:9,path:"/async",title:"async",component:"Async"},{id:10,path:"/addTodo",title:"addTodo",component:"AddTodo"}],u=n(0),j=function(){var e=Object(c.useState)(d),t=Object(l.a)(e,2),n=t[0];t[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{className:"list",children:n.map((function(e){return Object(u.jsx)(a.b,{to:e.path,children:Object(u.jsx)("li",{children:e.title})})}))})})},b=n(35),p=function(){return Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("span",{className:"back",children:Object(u.jsx)(a.b,{to:"/todayilearned/",children:Object(u.jsx)(b.a,{})})}),"What I Learned"]})},x=n(9),h={input:{padding:"10px",marginTop:"10px"}},f=function(){var e=function(e,t){var n=Object(c.useState)(e),i=Object(l.a)(n,2),r=i[0],s=i[1];return{value:r,onChange:function(e){var n=e.target.value,c=!0;t&&(c=t(n)),c?s(n):alert("max length is 10")}}}("",(function(e){return e.length<=10}));return Object(u.jsxs)("div",{className:"useinput",children:[Object(u.jsx)("p",{children:"Hello, please enter your name"}),Object(u.jsx)("input",Object(x.a)({style:h.input,placeholder:"Name"},e))]})},m={wrapper:{padding:"20px"},btn:{padding:"5px"},content:{marginTop:"5px",padding:"20px",paddingLeft:"5px",border:"1px solid #eee"}},O=[{tab:"section 1",content:"I'm the content of the section 1"},{tab:"section 2",content:"I'm the content of the section 2"}],g=function(){var e=function(e,t){console.log("initialTab",e),console.log("allTabs",t);var n=Object(c.useState)(e),i=Object(l.a)(n,2),r=i[0],s=i[1];return{currentItem:t[r],changeItem:s}}(0,O),t=e.currentItem,n=e.changeItem;return Object(u.jsxs)("div",{style:m.wrapper,children:[O.map((function(e,t){return Object(u.jsx)("button",{style:m.btn,onClick:function(){return n(t)},children:e.tab})})),Object(u.jsx)("div",{style:m.content,children:t.content})]})},y={useeffect:{margin:"10px"},btn:{padding:"5px",width:"40px"},list:{margin:"10px",marginTop:"20px"},listLi:{marginBottom:"5px",lineHeight:"1.5"}},v=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(0),s=Object(l.a)(r,2),a=s[0],o=s[1];return Object(c.useEffect)((function(){return console.log("hello")}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{style:y.useeffect,children:[Object(u.jsx)("button",{style:y.btn,onClick:function(){return i(n+1)},children:n}),Object(u.jsx)("button",{style:y.btn,onClick:function(){return o(a+1)},children:a})]}),Object(u.jsxs)("ul",{style:y.list,children:[Object(u.jsx)("li",{style:y.listLi,children:"- useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined."}),Object(u.jsx)("li",{style:y.listLi,children:"- What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates."}),Object(u.jsx)("li",{style:y.listLi,children:"- By default, it runs both after the first render and after every update."})]})]})},S=n(13),C={content:{margin:"10px"},list:{lineHeight:"2",width:"400px"},title:{marginBottom:"20px"},input:{padding:"5px",outline:"0",border:"1px solid #eee",marginTop:"10px",width:"320px"},flex:{display:"flex",flexDirection:"row",justifyContent:"space-between"},btn:{padding:"5px",outline:"0",border:"1px solid #eee",marginLeft:"2px",marginBottom:"2px"}},T=[{text:"Studying",done:!1},{text:"Drinking coffee",done:!1}],k=function(e){var t=e.lists,n=e.index,c=e.completeList,i=e.removeList;return Object(u.jsx)("li",{style:{textDecoration:t.done?"line-through":"none"},children:Object(u.jsxs)("div",{style:C.flex,children:[Object(u.jsx)("span",{children:t.text}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)("button",{style:C.btn,onClick:function(){return c(n)},children:"Complete"})}),Object(u.jsx)("span",{children:Object(u.jsx)("button",{style:C.btn,onClick:function(){return i(n)},children:"Remove"})})]})]})})},w=function(e){var t=e.addLists,n=Object(c.useState)(""),i=Object(l.a)(n,2),r=i[0],s=i[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),s(""))},children:[Object(u.jsx)("input",{type:"text",style:C.input,value:r,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("button",{style:C.btn,children:"+ add list"})]})},I=function(){var e=Object(c.useState)(T),t=Object(l.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("lists"));e&&i(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(n))}),[n]);var r=function(e){var t=Object(S.a)(n);t[e].done?t[e].done=!1:t[e].done=!0,i(t),localStorage.setItem("newLists",JSON.stringify(t))},s=function(e){var t=Object(S.a)(n);t.splice(e,1),i(t),localStorage.removeItem("newLists",JSON.stringify(t))};return Object(u.jsxs)("div",{style:C.content,children:[Object(u.jsx)("h2",{style:C.title,children:"Todo lists"}),Object(u.jsx)("ul",{style:C.list,children:n.map((function(e,t){return Object(u.jsx)(k,{index:t,lists:e,completeList:r,removeList:s},t)}))}),Object(u.jsx)(w,{addLists:function(e){var t=[].concat(Object(S.a)(n),[{text:e,done:!1}]);i(t),localStorage.setItem("newLists",JSON.stringify(t))}})]})},L={mar:{padding:"10px",marginTop:"10px"}},E=function(){var e=function(e){var t=Object(c.useState)(e),n=Object(l.a)(t,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){document.querySelector("title").innerText=i}),[i]),r}("Loading...");return setTimeout((function(){return e("Home")}),5e3),Object(u.jsx)("div",{style:L.mar,children:"Title will change after 5 secs"})},N={mar:{padding:"10px",marginTop:"10px"}},U=function(){var e=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){return t.current&&t.current.addEventListener("click",e),function(){t.current&&t.current.removeEventListener("click",e)}})),t}((function(){console.log("hello")}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:N.mar,children:[Object(u.jsx)("h1",{ref:e,children:"Hi"}),Object(u.jsx)("p",{children:'Click "Hi" and check out the console'})]})})},F={mar:{padding:"10px",marginTop:"10px"}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(c.useRef)();if(Object(c.useEffect)((function(){if(n.current){var c=n.current;c.style.transition="opacity ".concat(e,"s ease-in-out ").concat(t,"s"),c.style.opacity=1}}),[]),"number"===typeof e&&"number"===typeof t)return{ref:n,style:{opacity:0}}},H=function(){var e=D(2,1),t=D(5,2);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:F.mar,children:[Object(u.jsx)("h1",Object(x.a)(Object(x.a)({},e),{},{children:"Hello"})),Object(u.jsx)("p",Object(x.a)(Object(x.a)({},t),{},{children:"whatever"}))]})})},B=n(12),R=n.n(B),A=n(18),J={count:{padding:"10px",marginTop:"10px"},btn:{backgroundColor:"#eee",padding:"10px",border:"none",marginRight:"3px",marginTop:"10px"}},M=[1,2,5,10],z=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),a=s[0],o=s[1];return Object(c.useEffect)(Object(A.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=6;break}return e.next=3,new Promise((function(e){setTimeout((function(){var t=Math.ceil(10*Math.random());e(t)}),1e3)}));case 3:t=e.sent,o(!0),i(n+t);case 6:case"end":return e.stop()}}),e)}))),[]),Object(c.useEffect)((function(){document.title="Count: "+n})),Object(u.jsxs)("div",{style:J.count,children:[Object(u.jsxs)("p",{children:["Count : ",n]}),a?Object(u.jsx)("div",{children:M.map((function(e){return Object(u.jsxs)("button",{style:J.btn,onClick:function(){return i(n+e)},children:["+",e]})}))}):Object(u.jsx)("div",{children:"Loading..."})]})},P={margin:{padding:"10px",marginTop:"10px",alignItem:"center",justifyContent:"center",height:"100vh",overflow:"hidden",textAlign:"center"},progressContainer:{display:"flex",justifyContent:"space-between",position:"relative",margin:"30px auto",maxWidth:"100%",width:"350px","::before":{content:"",backgroundColor:"#e0e0e0",position:"absolute",top:"50%",left:"0",transform:"translateY(-50%)",height:"4px",width:"100%",zIndex:"-1"}},progress:{backgroundColor:"#3498db",position:"absolute",top:"50%",left:"0",transform:"translateY(-50%)",height:"4px",width:"0%",zIndex:"-1",transition:" 0.4s ease"},circle:{backgroundColor:"#fff",color:"#999",borderRadius:"50%",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",border:"3px solid #e0e0e0",transition:" 0.4s ease"},circleactive:{backgroundColor:"#fff",color:"#999",borderRadius:"50%",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",border:"3px solid #3498db",transition:" 0.4s ease"},btn:{backgroundColor:"#3498db",color:"#fff",border:"0",borderRadius:"6px",cursor:"pointer",padding:"8px 30px",margin:"5px",fontSize:"14px",":focus":{outline:"0"}}},W=function(){var e=1;return Object(u.jsxs)("div",{style:P.margin,children:[Object(u.jsxs)("div",{style:P.progressContainer,children:[Object(u.jsx)("div",{style:P.progress,id:"progress"}),Object(u.jsx)("div",{style:P.circleactive,children:"1"}),Object(u.jsx)("div",{style:P.circle,children:"2"}),Object(u.jsx)("div",{style:P.circle,children:"3"}),Object(u.jsx)("div",{style:P.circle,children:"4"})]}),Object(u.jsx)("button",{style:P.btn,id:"prev",onClick:function(){e++,console.log(e)},children:"Prev"}),Object(u.jsx)("button",{style:P.btn,id:"next",children:"Next"})]})},q=n(34),Y=n.n(q),V={margin:{padding:"10px",marginTop:"10px"}},G=function(){var e=Object(c.useState)({hits:[]}),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)(Object(A.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y()("https://hn.algolia.com/api/v1/search?query=redux");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))),Object(u.jsx)("ul",{style:V.margin,children:n.hits.map((function(e){return Object(u.jsx)("li",{children:e.title},e.objectID)}))})},K={table:{width:"600px",marginTop:"30px",textAlign:"center",fontSize:"20px"},td:{borderBottom:"1px solid #eee",padding:"10px 0",lineHeight:1}},Q=function(e){var t=e.users;return Object(u.jsx)("div",{children:Object(u.jsxs)("table",{style:K.table,children:[Object(u.jsxs)("thead",{children:[Object(u.jsx)("th",{style:K.td,children:"Name"}),Object(u.jsx)("th",{style:K.td,children:"User Name"}),Object(u.jsx)("th",{style:K.td,children:"Actions"})]}),Object(u.jsx)("tbody",{children:t.length>0?t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{style:K.td,children:e.name}),Object(u.jsx)("td",{style:K.td,children:e.username}),Object(u.jsx)("td",{style:K.td,children:"button"})]},e.id)})):Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:3})})})]})})},X=n(17),Z={margin:{marginTop:"30px"},label:{margin:"0 10px"},input:{border:"1px solid #eee",padding:"5px"},btn:{padding:"5px",marginLeft:"5px"}},$=function(e){var t={id:null,name:"",username:""},n=Object(c.useState)(t),i=Object(l.a)(n,2),r=i[0],s=i[1],a=function(e){console.log(e);var t=e.target,n=t.name,c=t.value;s(Object(x.a)(Object(x.a)({},r),{},Object(X.a)({},n,c)))};return Object(u.jsxs)("form",{style:Z.margin,onSubmit:function(n){console.log("handelsubmit",n),n.preventDefault(),r.name&&r.username&&(e.addUser(r),s(t))},children:[Object(u.jsx)("label",{style:Z.label,children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",value:r.name,style:Z.input,onChange:a}),Object(u.jsx)("label",{style:Z.label,children:"Username"}),Object(u.jsx)("input",{type:"text",name:"username",value:r.username,style:Z.input,onChange:a}),Object(u.jsx)("button",{style:Z.btn,children:"Add new user"})]})},_={margin:{padding:"10px",marginTop:"10px"}},ee=function(){var e=Object(c.useState)([{id:1,name:"Anne",username:"anneisgenius"},{id:2,name:"Bob",username:"bobisbob"},{id:3,name:"Cindy",username:"cindya"}]),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)({id:null,name:"",username:""}),s=Object(l.a)(r,2);s[0],s[1];return Object(u.jsxs)("div",{style:_.margin,children:[Object(u.jsx)("h2",{children:"View Users"}),Object(u.jsx)($,{addUser:function(e){e.id=n.length+1,i([].concat(Object(S.a)(n),[e])),console.log(n)}}),Object(u.jsx)(Q,{users:n})]})};var te=function(){return Object(u.jsx)(j,{})},ne=function(){return Object(u.jsx)(a.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{}),Object(u.jsx)(o.a,{path:"/todayilearned/",exact:!0,component:te}),Object(u.jsx)(o.a,{exact:!0,path:"/useInput",component:f}),Object(u.jsx)(o.a,{exact:!0,path:"/useTab",component:g}),Object(u.jsx)(o.a,{exact:!0,path:"/useEffect",component:v}),Object(u.jsx)(o.a,{exact:!0,path:"/localStorage",component:I}),Object(u.jsx)(o.a,{exact:!0,path:"/useTitle",component:E}),Object(u.jsx)(o.a,{exact:!0,path:"/useClick",component:U}),Object(u.jsx)(o.a,{exact:!0,path:"/useFadein",component:H}),Object(u.jsx)(o.a,{exact:!0,path:"/count",component:z}),Object(u.jsx)(o.a,{exact:!0,path:"/progressSteps",component:W}),Object(u.jsx)(o.a,{exact:!0,path:"/async",component:G}),Object(u.jsx)(o.a,{exact:!0,path:"/addTodo",component:ee})]})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(ne,{})}),document.getElementById("root")),ce()}},[[67,1,2]]]);
//# sourceMappingURL=main.c82a13f5.chunk.js.map