(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(10),r=a.n(i),o=(a(39),a(31)),s=a(25),c=a(26),m=a(32),u=a(27),p=a(33),h=a(28),d=a.n(h),b=a(11),g=a.n(b),w=(a(89),function(e){var t=e.onRouteChange;return e.isSignedIn?l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim white underline pa3 pointer ba bw2 b--white-20 br-pill grow"},"Sign Out")):l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return t("SignIn")},className:"f3 link dim white underline pa3 pointer ba bw2 b--white-20 br-pill grow"},"Sign In"),l.a.createElement("p",{onClick:function(){return t("Register")},className:"f3 link dim white underline pa3 pointer ba bw2 b--white-20 br-pill grow"},"Register"))}),f=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"white f3",style:{fontFamily:"Roboto"}},"Copy & Paste sample: https://dazedimg-dazedgroup.netdna-ssl.com/929/azure/dazed-prod/1240/1/1241806.jpg"))},E=a(29),v=a.n(E),N=a(30),y=a.n(N),x=(a(91),function(){return l.a.createElement("div",{className:"ma4 mt0"},l.a.createElement(v.a,{className:"Tilt br2 shadow-2 br-100",options:{max:50},style:{height:140,width:140}},l.a.createElement("div",{className:"Tilt-inner pa3"},l.a.createElement("img",{style:{paddingTop:"5px"},src:y.a,alt:"logo"}))))}),C=(a(93),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return l.a.createElement("div",{className:"ma4 mt0"},l.a.createElement("p",{className:" discription-text bold f3 blue m6"},"Face Detection App"),l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"form center pa4 br3 shadow-5"},l.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t,placeholder:"Paste any image url"}),l.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-blue",onClick:a},"Detect"))))}),S=(a(95),function(e){var t=e.imageUrl,a=e.box,n=e.showImage;return l.a.createElement("div",{className:"center ma"},l.a.createElement("div",{className:"image-container absolute mt2"},!0===n&&l.a.createElement("img",{id:"inputimage",alt:"I'm waiting for Url please Insert it!",src:t,width:"400px",height:"auto"}),!1===n&&l.a.createElement("p",{className:"f3"},"Give it a try!"),a.map(function(e,t){return l.a.createElement("div",{className:"bounding-box",style:{top:e.toprow,right:e.rightcol,bottom:e.bottomrow,left:e.leftcol},key:t})})))}),I=(a(97),function(e){var t=e.onRouteChange;return l.a.createElement("div",null,l.a.createElement("article",{className:"br3 ba blue b--blue-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",style:{boxShadow:"4px 4px 8px 0px white"}},l.a.createElement("main",{className:"pa4 white-80"},l.a.createElement("form",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--white ph0 mh0"},l.a.createElement("legend",{className:"f3 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-white hover-bg-blue hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-white hover-bg-blue hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b pa2 input-reset ba b--blue bg-blue hover-bg-white hover-black w-100",type:"submit",value:"Sign in",onClick:function(){return t("home")}})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("p",{onClick:function(){return t("register")},className:"f6 link dim white db pointer"},"Register"))))))}),k=function(e){var t=e.onRouteChange;return l.a.createElement("article",{className:"br3 ba blue b--blue-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center",style:{boxShadow:"4px 4px 8px 0px white"}},l.a.createElement("main",{className:"pa4 white-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--white ph0 mh0"},l.a.createElement("legend",{className:"f3 fw6 ph0 mh0"},"Register"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"pa2 input-reset ba bg-white hover-bg-blue hover-white w-100",type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-white hover-bg-blue hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-white hover-bg-blue hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--blue bg-blue hover-bg-white hover-black grow pointer f6 dib",type:"submit",value:"Register",onClick:function(){return t("home")}})))))},R=(a(99),a(101),new g.a.App({apiKey:"232a5948f1ab40f58bc8e21ec1190b73"})),F={particles:{number:{value:60,density:{enable:!0,value_area:800}},color:{}}},_=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).calculateFaceLocation=function(e,t){var a=e.outputs[0].data.regions[t].region_info.bounding_box,n=document.getElementById("inputimage"),l=Number(n.width),i=Number(n.height);return{leftcol:a.left_col*l,toprow:a.top_row*i,rightcol:l-a.right_col*l,bottomrow:i-a.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:[].concat(Object(o.a)(e.state.box),[t])})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({box:[],imageUrl:e.state.input,showImage:!0}),R.models.predict(g.a.FACE_DETECT_MODEL,e.state.input).then(function(t){for(var a=0;a<t.outputs[0].data.regions.length;a++)e.displayFaceBox(e.calculateFaceLocation(t,a))}).catch(function(e){return console.log(e)})},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:[],route:"SignIn",isSignedIn:!1,showImage:!1},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,{className:"particles",params:F}),l.a.createElement(w,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(f,null),l.a.createElement(C,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),l.a.createElement(S,{box:this.state.box,imageUrl:this.state.imageUrl,showImage:this.state.showImage})):"SignIn"===this.state.route?l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(I,{onRouteChange:this.onRouteChange})):l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(k,{onRouteChange:this.onRouteChange})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,t,a){e.exports=a.p+"static/media/brain-icon.7302d0a5.svg"},34:function(e,t,a){e.exports=a(103)},39:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[34,2,1]]]);
//# sourceMappingURL=main.4f9b88aa.chunk.js.map