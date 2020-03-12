(this["webpackJsonpgithub-app"]=this["webpackJsonpgithub-app"]||[]).push([[0],{49:function(e,t,a){e.exports=a(76)},54:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(8),o=a.n(l),r=(a(54),a(20)),c=a(21),i=a(23),u=a(22),m=a(24),h=a(17),p=a(28),g=a.n(p),f=a(104),d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={username:""===a.props.username?"VanshikaP":a.props.username,userData:[],followers:[],followers_display:!1,following:[],following_display:!1,repos:[]},a.handleFollowersDisplay=function(){a.setState(Object(h.a)({},a.state,{followers_display:!a.state.followers_display}))},a.handleFollowingDisplay=function(){a.setState(Object(h.a)({},a.state,{following_display:!a.state.following_display}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.github.com/users/".concat(this.state.username)).then((function(t){console.log(t.data),e.setState(Object(h.a)({},e.state,{userData:t.data}))})).catch((function(e){return console.log("Error ",e.message)})),console.log("Props here",this.props)}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.username!==this.props.username&&(console.log("Props here",this.props),this.setState(Object(h.a)({},this.state,{username:this.props.username}))),t.userData!==this.state.userData&&(g.a.get("https://api.github.com/users/".concat(this.state.username)).then((function(e){console.log(e.data),a.setState(Object(h.a)({},a.state,{userData:e.data}))})).catch((function(e){return console.log("Error ",e.message)})),g.a.get(this.state.userData.followers_url).then((function(e){a.setState(Object(h.a)({},a.state,{followers:e.data})),console.log("No. of Followers",e.data.length)})).catch((function(e){return console.log("Error",e.message)})),g.a.get("https://api.github.com/users/".concat(this.state.userData.login,"/following")).then((function(e){a.setState(Object(h.a)({},a.state,{following:e.data})),console.log("No. of Following",e.data.length)})).catch((function(e){return console.log("Error",e.message)})))}},{key:"render",value:function(){return console.log("user data",this.state),s.a.createElement(f.a,{maxWidth:"md",className:"user-container"},s.a.createElement(f.a,{className:"info"},s.a.createElement("img",{className:"info-img",src:this.state.userData.avatar_url,alt:"".concat(this.state.userData.name)}),s.a.createElement(f.a,{className:"info-text"},s.a.createElement("h2",null,this.state.userData.name),s.a.createElement("p",null,"GitHub Username: ",this.state.userData.login," "),s.a.createElement("p",null,"Profile: ",s.a.createElement("a",{href:this.state.userData.html_url},this.state.userData.html_url)))),s.a.createElement(f.a,{className:"people"},s.a.createElement(f.a,{maxWidth:"md",className:"followers"},s.a.createElement("p",null," ",this.state.followers.length," ",s.a.createElement("span",{className:"people-display",onClick:this.handleFollowersDisplay},"followers")),s.a.createElement("div",{className:"people-div ".concat(this.state.followers_display?"":" close")},this.state.followers.map((function(e){return s.a.createElement("div",{className:"people-card"},s.a.createElement("img",{className:"people-img",src:e.avatar_url,alt:e.login}),s.a.createElement("a",{href:e.html_url},e.login))})))),s.a.createElement(f.a,{maxWidth:"md",className:"following"},s.a.createElement("p",null," ",this.state.following.length," ",s.a.createElement("span",{className:"people-display",onClick:this.handleFollowingDisplay},"following")),s.a.createElement("div",{className:"people-div ".concat(this.state.following_display?"":" close")},this.state.following.map((function(e){return s.a.createElement("div",{className:"people-card"},s.a.createElement("img",{className:"people-img",src:e.avatar_url,alt:e.login}),s.a.createElement("a",{href:e.html_url},e.login))}))))),s.a.createElement(f.a,{className:"git-chart"},s.a.createElement("img",{className:"git-chart-img",src:"https://ghchart.rshah.org/409ba5/".concat(this.state.userData.login),alt:"".concat(this.state.userData.name,"'s Github chart")}),s.a.createElement("h3",null,"Contribution Chart")))}}]),t}(n.Component),w=a(108),E=a(109),b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={username:""},a.handleChange=function(e){a.setState({username:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.updateUsername(a.state.username)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"user-form"},s.a.createElement("p",null,"Want to see your info?"),s.a.createElement(w.a,{className:"user-input",label:"Your GitHub Username",variant:"outlined",value:this.username,onChange:this.handleChange,required:!0}),s.a.createElement(E.a,{color:"primary",type:"submit",variant:"contained",onClick:this.handleSubmit},"Show"))}}]),t}(n.Component),v=(a(75),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={username:""},a.updateUsername=function(e){a.setState({username:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"My GitHub Profile"),s.a.createElement(d,{username:this.state.username}),s.a.createElement(b,{updateUsername:this.updateUsername}))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.44abbbb3.chunk.js.map