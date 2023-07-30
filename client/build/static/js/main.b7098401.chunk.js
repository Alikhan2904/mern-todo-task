(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,a){e.exports=a(67)},41:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),s=a.n(l),c=(a(41),a(13)),o=a(1),m=a(7),i=a(8),u=a(10),d=a(9),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("usertoken"),this.props.history.push("/")}},{key:"render",value:function(){var e=r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/register",className:"nav-link"},"Register"))),t=r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/profile",className:"nav-link"},"User")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/todohome",className:"nav-link"},"Todos")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"!#",onClick:this.logOut.bind(this),className:"nav-link"},"Logout")));return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark rounded"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample10","aria-controls":"navbarsExample10","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample10"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/",className:"nav-link"},"Home"))),localStorage.usertoken?t:e))}}]),a}(n.Component),p=Object(o.f)(h),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto",style:{textAlign:"center"}},r.a.createElement("h1",{style:{color:"seagreen"},className:"text-center"},"WELCOME TO TODO LIST"),r.a.createElement("img",{src:"todo.png",alt:"",style:{maxWidth:"250px"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",{className:"text-center text-muted"},"Created for ",r.a.createElement("a",{href:"http://www.ignitelabs.co/index.html"},r.a.createElement("b",null,"Ignite Labs"))," by ",r.a.createElement("a",{href:"https://alikhanmehboob.netlify.app/"},r.a.createElement("b",null,"Ali khan Mehboob"))))))}}]),a}(n.Component),f=a(17),v=a(12),b=a(18),g=a.n(b),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={email:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(v.a)(e)),e.onSubmit=e.onSubmit.bind(Object(v.a)(e)),e}return Object(i.a)(a,[{key:"onChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return g.a.post("users/login",{email:e.email,password:e.password}).then((function(e){return localStorage.setItem("usertoken",e.data),e.data})).catch((function(e){console.log(e)}))}({email:this.state.email,password:this.state.password}).then((function(e){e&&t.props.history.push("/profile")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Todo Login"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.onChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Sign In")))))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={first_name:"",last_name:"",email:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(v.a)(e)),e.onSubmit=e.onSubmit.bind(Object(v.a)(e)),e}return Object(i.a)(a,[{key:"onChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return g.a.post("users/register",{first_name:e.first_name,last_name:e.last_name,email:e.email,password:e.password}).then((function(e){console.log("Registered")}))}({first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,password:this.state.password}).then((function(e){t.props.history.push("/login")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Todo Register"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"First name"),r.a.createElement("input",{type:"text",className:"form-control",name:"first_name",placeholder:"Enter your first name",value:this.state.first_name,onChange:this.onChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Last name"),r.a.createElement("input",{type:"text",className:"form-control",name:"last_name",placeholder:"Enter your last name",value:this.state.last_name,onChange:this.onChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.onChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register")))))}}]),a}(n.Component),O=a(35),w=a.n(O),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={first_name:"",last_name:"",email:"",errors:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=w()(e);this.setState({first_name:t.first_name,last_name:t.last_name,email:t.email})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"USER PROFILE")),r.a.createElement("table",{className:"table col-md-6 mx-auto"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"First Name"),r.a.createElement("td",null,this.state.first_name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Last Name"),r.a.createElement("td",null,this.state.last_name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,this.state.email))))))}}]),a}(n.Component),j=a(11),k=a.n(j),C=a(16),S=a(22);var _=function(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)([]),c=Object(S.a)(s,2),o=c[0],m=c[1],i=function(){var e=Object(C.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("todos/getAll");case 2:return t=e.sent,e.t0=l,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("todos/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:o,isCompleted:!1})});case 2:i(),m("");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){i()}),[]);var d=a.map((function(e){return r.a.createElement(T,{todo:e,key:e._id,fetchTodos:i})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"ADD A TODO")),r.a.createElement("div",{className:"ui centered card",style:{width:"500px"}},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header",style:{textAlign:"center"}},"Todo List")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui relaxed divided list"},d)),r.a.createElement("div",{className:"extra content"},r.a.createElement("div",{className:"fluid ui action input"},r.a.createElement("input",{type:"text",value:o,onChange:function(e){return m(e.target.value)},required:!0}),r.a.createElement("button",{className:"ui teal right labeled icon button",onClick:u},r.a.createElement("i",{className:"plus icon"}),"Add"))))))},T=function(e){var t=e.todo,a=t.isCompleted,n=t.text,l=t._id,s=function(){var t=Object(C.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("todos/delete/".concat(l),{method:"POST"});case 2:e.fetchTodos();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(C.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("todos/complete/".concat(l),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({isCompleted:!a,text:n})});case 2:e.fetchTodos();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"item"},a?r.a.createElement("i",{className:"left floated green check square outline icon",onClick:c}):r.a.createElement("i",{className:"left floated square outline icon",onClick:c}),n,r.a.createElement("i",{className:"right floated red trash icon",onClick:s}))},L=function(){return r.a.createElement("div",null,r.a.createElement(_,null))};var q=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:E}),r.a.createElement("div",{className:"container"},r.a.createElement(o.a,{exact:!0,path:"/register",component:y}),r.a.createElement(o.a,{exact:!0,path:"/login",component:N}),r.a.createElement(o.a,{exact:!0,path:"/profile",component:x}),r.a.createElement(o.a,{exact:!0,path:"/todohome",component:L})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.b7098401.chunk.js.map