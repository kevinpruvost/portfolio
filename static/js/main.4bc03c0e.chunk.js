(this["webpackJsonpkevinpruvost.github.io"]=this["webpackJsonpkevinpruvost.github.io"]||[]).push([[0],{26:function(e,s,t){},29:function(e,s,t){},54:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t(19),i=t.n(c),n=(t(26),t(4)),r=t(7),l=t(6),o=t(5),j=t(12),d=t(20),h=t.n(d),b=(t(29),t(11)),m=t(21),u=t.n(m),O=(t(31),t(1)),p=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.linkedin,s=this.props.data.github,t=this.props.data.name,a=this.props.data.description;this.props.data.address.city,this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}))}var c={num:[2,3],rps:.5,radius:[5,20,40],life:[50],v:[1,2],tha:[-180,180],body:"images/rose.png",alpha:[1],scale:[[.3,.4,.5,.6,.7]],position:{x:0,y:-100,width:1920,height:1},color:[["#b80d43","#d60024","#d60076"]],cross:"bround",random:null,g:0,f:[0,.3]},i={num:c.num,rps:c.rps,radius:c.radius,life:c.life,v:c.v,tha:c.tha,body:"images/leaf.png",rotate:c.rotate,alpha:c.alpha,scale:c.scale,position:c.position,color:c.color,cross:c.cross,random:c.random,g:c.g,f:c.f};return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{className:"header",type:"custom",config:c,bg:!0}),Object(O.jsx)(b.a,{className:"header",type:"custom",config:i,bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsx)(u.a,{elasticity:50,easing:"easeOutExpo",duration:5e3,opacity:[0,1],children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)("h1",{className:"responsive-headline",children:t}),Object(O.jsxs)("h3",{children:[a,"."]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("ul",{className:"social",children:[Object(O.jsxs)("a",{href:e,target:"_blank",className:"button btn linkedin-btn",children:[Object(O.jsx)("i",{className:"fa fa-linkedin"}),"Linkedin"]}),Object(O.jsxs)("a",{href:s,target:"_blank",className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"Github"]})]})]})})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),x=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsx)("ul",{className:"copyright",children:Object(O.jsxs)("li",{children:["Design by ",Object(O.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})})]}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),f=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,o=this.props.data.enResumedownload,j=this.props.data.frResumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",style:{alignSelf:"center"},children:Object(O.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),Object(O.jsx)("p",{children:t}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("span",{children:e}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[a,Object(O.jsx)("br",{}),c,", ",i,", ",n]}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:r}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:l})]})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsxs)("p",{children:[Object(O.jsxs)("a",{href:j,target:"_blank",className:"button",children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume / CV (French)"]}),Object(O.jsxs)("a",{href:o,target:"_blank",className:"button",children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume / CV (English)"]})]})})]})]})]})})}}]),t}(a.Component),v=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){var s="images/work_education/"+e.logo,a=null;try{a=Object(O.jsx)("ul",{children:t.description.map((function(e,s){return Object(O.jsxs)("li",{children:[e,Object(O.jsx)("br",{})]})}))})}catch(c){a=Object(O.jsx)("p",{children:e.description})}return Object(O.jsxs)("div",{className:"row",style:{display:"flex"},children:[Object(O.jsx)("a",{href:e.link,target:"_blank",style:{flex:"25%",margin:"auto"},children:Object(O.jsx)("img",{src:s,height:"128",width:"128"})}),Object(O.jsxs)("div",{style:{flex:"75%"},children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),a]})]},e.school)})),t=this.props.data.work.map((function(e){var s="images/work_education/"+e.logo;return Object(O.jsxs)("div",{className:"row",style:{display:"flex"},children:[Object(O.jsx)("a",{href:e.link,target:"_blank",style:{flex:"25%",margin:"auto"},children:Object(O.jsx)("img",{src:s,height:"128",width:"128"})}),Object(O.jsxs)("div",{style:{flex:"75%"},children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("ul",{children:e.description.map((function(e,s){return Object(O.jsxs)("li",{children:[e,Object(O.jsx)("br",{})]})}))})]})]},e.company)})),a=this.props.data.skills.map((function(e){var s="images/tech/"+e.image;return Object(O.jsxs)("div",{className:"columns feature-item",children:[Object(O.jsx)("img",{className:"skill",alt:e.name,src:s}),Object(O.jsx)("h5",{children:e.name}),Object(O.jsx)("p",{children:e.description})]},e.name)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work Experience"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Favorite Tech"})})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("p",{className:"lead center",children:e})}),Object(O.jsx)("ul",{className:"bgrid-quarters s-bgrid-thirds cf",children:a})]})]})]})}}]),t}(a.Component),g=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,a=this.props.data.address.state,c=this.props.data.address.zip,i=this.props.data.phone,n=(this.props.data.email,this.props.data.contactmessage);return Object(O.jsxs)("section",{id:"contact",children:[Object(O.jsxs)("div",{className:"row section-head",children:[Object(O.jsx)("div",{className:"two columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Get In Touch."})})}),Object(O.jsx)("div",{className:"ten columns",children:Object(O.jsx)("p",{className:"lead",children:n})})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"eight columns",children:[Object(O.jsx)("form",{action:"https://formspree.io/f/mbjpvbzn",method:"POST",children:Object(O.jsxs)("fieldset",{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"Name",children:["Name ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange,required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"Email",children:["Email ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"email",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange,required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"Subject",children:["Subject ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange,required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"Message",children:["Message ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage",required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"submit",children:"Submit"}),Object(O.jsx)("span",{id:"image-loader",children:Object(O.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(O.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(O.jsxs)("div",{id:"message-success",children:[Object(O.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(O.jsx)("br",{})]})]}),Object(O.jsx)("aside",{className:"four columns footer-widgets",children:Object(O.jsxs)("div",{className:"widget widget_contact",children:[Object(O.jsx)("h4",{children:"Address and Phone"}),Object(O.jsxs)("p",{className:"address",children:[e,Object(O.jsx)("br",{}),s," ",Object(O.jsx)("br",{}),t,", ",a," ",c,Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:i})]})]})})]})]})}}]),t}(a.Component),N=function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var s=Object(O.jsx)("div",{className:"header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:e.title})})}),t=e.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:e.url,target:"_blank",title:e.title,children:[Object(O.jsx)("img",{className:"portfolio-image",alt:e.title,src:s}),Object(O.jsx)("div",{className:"overlay",children:Object(O.jsxs)("div",{className:"portfolio-item-meta",children:[Object(O.jsx)("h5",{children:e.title}),Object(O.jsx)("p",{children:e.category}),Object(O.jsx)("br",{}),Object(O.jsx)("h4",{children:"Click to see the project ! \ud83d\ude09"})]})})]})})},e.title)}));return Object(O.jsxs)("div",{className:"row",children:[s,Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-halves cf",children:t})]})}));return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsx)("h1",{children:"Check Out Some of My Projects."}),e]})})})}}]),t}(a.Component),w=(t(53),function(e){Object(l.a)(t,e);var s=Object(o.a)(t);function t(e){var a;return Object(n.a)(this,t),(a=s.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(r.a)(t,[{key:"getResumeData",value:function(){var e=document.getElementById("siteLoading");h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(s){this.setState({resumeData:s}),setTimeout((function(){e.outerHTML=""}),500)}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{data:this.state.resumeData.main}),Object(O.jsx)(f,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.resume}),Object(O.jsx)(N,{data:this.state.resumeData.portfolio}),Object(O.jsx)(g,{data:this.state.resumeData.main}),Object(O.jsx)(x,{data:this.state.resumeData.main})]})}}]),t}(a.Component)),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(O.jsx)(w,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");y?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[54,1,2]]]);
//# sourceMappingURL=main.4bc03c0e.chunk.js.map