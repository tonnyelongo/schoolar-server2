(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{1207:function(e,t,n){},1238:function(e,t,n){},1243:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),i=n.n(r),c=n(38),l=n(39),s=n(41),d=n(40),u=n(121),m=n(67),h=n.n(m),g=n(91),f=n(92),v=n.n(f),p=n(93),w=n.n(p),y=n(1269),b=n(1264),S=n(1265),E=n(1266),C=n(110),k=n.n(C),x=n(111),O=n.n(x),M=n(113),j=n.n(M),A=n(114),D=n.n(A),T=n(115),V=n.n(T),U=n(116),N=n.n(U),W=n(112),F=n.n(W),I=n(117),R=n.n(I),L=n(1268),J=(n(1205),n(1271)),P=n(43),B=(n(1206),n(1207),{}),H={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},q=null,z=null,_=0,G=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getPermissions=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0}).then((function(){return a.videoAvailable=!0})).catch((function(){return a.videoAvailable=!1}));case 3:return e.next=5,navigator.mediaDevices.getUserMedia({audio:!0}).then((function(){return a.audioAvailable=!0})).catch((function(){return a.audioAvailable=!1}));case 5:navigator.mediaDevices.getDisplayMedia?a.setState({screenAvailable:!0}):a.setState({screenAvailable:!1}),(a.videoAvailable||a.audioAvailable)&&navigator.mediaDevices.getUserMedia({video:a.videoAvailable,audio:a.audioAvailable}).then((function(e){window.localStream=e,a.localVideoref.current.srcObject=e})).then((function(e){})).catch((function(e){return console.log(e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),a.getMedia=function(){a.setState({video:a.videoAvailable,audio:a.audioAvailable},(function(){a.getUserMedia(),a.connectToSocketServer()}))},a.getUserMedia=function(){if(a.state.video&&a.videoAvailable||a.state.audio&&a.audioAvailable)navigator.mediaDevices.getUserMedia({video:a.state.video,audio:a.state.audio}).then(a.getUserMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}));else try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}},a.getUserMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=e,a.localVideoref.current.srcObject=e;var t=function(e){if(e===z)return"continue";B[e].addStream(window.localStream),B[e].createOffer().then((function(t){B[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:B[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var n in B)t(n);e.getTracks().forEach((function(e){return e.onended=function(){a.setState({video:!1,audio:!1},(function(){try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=function(){var e;return new MediaStream([(e=a).black.apply(e,arguments),a.silence()])}(),a.localVideoref.current.srcObject=window.localStream;var e=function(e){B[e].addStream(window.localStream),B[e].createOffer().then((function(t){B[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:B[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var t in B)e(t)}))}}))},a.getDislayMedia=function(){a.state.screen&&navigator.mediaDevices.getDisplayMedia&&navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then(a.getDislayMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}))},a.getDislayMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=e,a.localVideoref.current.srcObject=e;var t=function(e){if(e===z)return"continue";B[e].addStream(window.localStream),B[e].createOffer().then((function(t){B[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:B[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var n in B)t(n);e.getTracks().forEach((function(e){return e.onended=function(){a.setState({screen:!1},(function(){try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=function(){var e;return new MediaStream([(e=a).black.apply(e,arguments),a.silence()])}(),a.localVideoref.current.srcObject=window.localStream,a.getUserMedia()}))}}))},a.gotMessageFromServer=function(e,t){var n=JSON.parse(t);e!==z&&(n.sdp&&B[e].setRemoteDescription(new RTCSessionDescription(n.sdp)).then((function(){"offer"===n.sdp.type&&B[e].createAnswer().then((function(t){B[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:B[e].localDescription}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),n.ice&&B[e].addIceCandidate(new RTCIceCandidate(n.ice)).catch((function(e){return console.log(e)})))},a.changeCssVideos=function(e){var t="30%";30*e.offsetWidth/100<300&&(t="300px");var n=String(100/_)+"%",a="";0===_||1===_?(a="100%",n="100%"):2===_?(a="45%",n="100%"):3===_||4===_?(a="35%",n="50%"):a=String(100/_)+"%";for(var o=e.querySelectorAll("video"),r=0;r<o.length;++r)o[r].style.minWidth=t,o[r].style.minHeight="40%",o[r].style.setProperty("width",a),o[r].style.setProperty("height",n);return{minWidth:t,minHeight:"40%",width:a,height:n}},a.connectToSocketServer=function(){(q=v.a.connect("http://localhost:4001",{secure:!0})).on("signal",a.gotMessageFromServer),q.on("connect",(function(){q.emit("join-call",window.location.href),z=q.id,q.on("chat-message",a.addMessage),q.on("user-left",(function(e){var t=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==t){_--,t.parentNode.removeChild(t);var n=document.getElementById("main");a.changeCssVideos(n)}})),q.on("user-joined",(function(e,t){if(t.forEach((function(e){if(B[e]=new RTCPeerConnection(H),B[e].onicecandidate=function(t){null!=t.candidate&&q.emit("signal",e,JSON.stringify({ice:t.candidate}))},B[e].onaddstream=function(n){var o=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==o)o.srcObject=n.stream;else{_=t.length;var r=document.getElementById("main"),i=a.changeCssVideos(r),c=document.createElement("video"),l={minWidth:i.minWidth,minHeight:i.minHeight,maxHeight:"100%",margin:"10px",borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill"};for(var s in l)c.style[s]=l[s];c.style.setProperty("width",i.width),c.style.setProperty("height",i.height),c.setAttribute("data-socket",e),c.srcObject=n.stream,c.autoplay=!0,c.playsinline=!0,r.appendChild(c)}},void 0!==window.localStream&&null!==window.localStream)B[e].addStream(window.localStream);else{window.localStream=function(){var e;return new MediaStream([(e=a).black.apply(e,arguments),a.silence()])}(),B[e].addStream(window.localStream)}})),e===z){var n=function(e){if(e===z)return"continue";try{B[e].addStream(window.localStream)}catch(t){}B[e].createOffer().then((function(t){B[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:B[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var o in B)n(o)}}))}))},a.silence=function(){var e=new AudioContext,t=e.createOscillator(),n=t.connect(e.createMediaStreamDestination());return t.start(),e.resume(),Object.assign(n.stream.getAudioTracks()[0],{enabled:!1})},a.black=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,n=void 0===t?640:t,a=e.height,o=void 0===a?480:a,r=Object.assign(document.createElement("canvas"),{width:n,height:o});r.getContext("2d").fillRect(0,0,n,o);var i=r.captureStream();return Object.assign(i.getVideoTracks()[0],{enabled:!1})},a.handleVideo=function(){return a.setState({video:!a.state.video},(function(){return a.getUserMedia()}))},a.handleAudio=function(){return a.setState({audio:!a.state.audio},(function(){return a.getUserMedia()}))},a.handleScreen=function(){return a.setState({screen:!a.state.screen},(function(){return a.getDislayMedia()}))},a.handleEndCall=function(){try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}window.location.href="/"},a.openChat=function(){return a.setState({showModal:!0,newmessages:0})},a.closeChat=function(){return a.setState({showModal:!1})},a.handleMessage=function(e){return a.setState({message:e.target.value})},a.addMessage=function(e,t,n){a.setState((function(n){return{messages:[].concat(Object(u.a)(n.messages),[{sender:t,data:e}])}})),n!==z&&a.setState({newmessages:a.state.newmessages+1})},a.handleUsername=function(e){return a.setState({username:e.target.value})},a.sendMessage=function(){q.emit("chat-message",a.state.message,a.state.username),a.setState({message:"",sender:a.state.username})},a.copyUrl=function(){var e=window.location.href;if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){L.b.success("Link copied to clipboard!")}),(function(){L.b.error("Failed to copy")}));else{var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),L.b.success("Link copied to clipboard!")}catch(n){L.b.error("Failed to copy")}document.body.removeChild(t)}},a.connect=function(){return a.setState({askForUsername:!1},(function(){return a.getMedia()}))},a.isChrome=function(){var e=(navigator&&(navigator.userAgent||"")).toLowerCase(),t=(navigator&&(navigator.vendor||"")).toLowerCase();return null!==(/google inc/.test(t)?e.match(/(?:chrome|crios)\/(\d+)/):null)},a.localVideoref=o.a.createRef(),a.videoAvailable=!1,a.audioAvailable=!1,a.state={video:!1,audio:!1,screen:!1,showModal:!1,screenAvailable:!1,messages:[],message:"",newmessages:0,askForUsername:!0,username:w.a.internet.userName()},B={},a.getPermissions(),a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return!1===this.isChrome()?o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},o.a.createElement("h1",null,"Desculpa,esta funcionalidade esta disponivel apenas no google chrome>")):o.a.createElement("div",null,!0===this.state.askForUsername?o.a.createElement("div",null,o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},o.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Nome de utilizador"),o.a.createElement(y.a,{placeholder:"Username",value:this.state.username,onChange:function(t){return e.handleUsername(t)}}),o.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.connect,style:{margin:"20px"}},"Conectar")),o.a.createElement("div",{style:{justifyContent:"center",textAlign:"center",paddingTop:"40px"}},o.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill",width:"60%",height:"30%"}}))):o.a.createElement("div",null,o.a.createElement("div",{className:"btn-down",style:{backgroundColor:"whitesmoke",color:"whitesmoke",textAlign:"center"}},o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleVideo},!0===this.state.video?o.a.createElement(k.a,null):o.a.createElement(O.a,null)),o.a.createElement(S.a,{style:{color:"#f44336"},onClick:this.handleEndCall},o.a.createElement(F.a,null)),o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleAudio},!0===this.state.audio?o.a.createElement(j.a,null):o.a.createElement(D.a,null)),!0===this.state.screenAvailable?o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleScreen},!0===this.state.screen?o.a.createElement(V.a,null):o.a.createElement(N.a,null)):null,o.a.createElement(E.a,{badgeContent:this.state.newmessages,max:999,color:"secondary",onClick:this.openChat},o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.openChat},o.a.createElement(R.a,null)))),o.a.createElement(P.a,{show:this.state.showModal,onHide:this.closeChat,style:{zIndex:"999999"}},o.a.createElement(P.a.Header,{closeButton:!0},o.a.createElement(P.a.Title,null,"Duvidas e Respostas")),o.a.createElement(P.a.Body,{style:{overflow:"auto",overflowY:"auto",height:"400px",textAlign:"left"}},this.state.messages.length>0?this.state.messages.map((function(e,t){return o.a.createElement("div",{key:t,style:{textAlign:"left"}},o.a.createElement("p",{style:{wordBreak:"break-all"}},o.a.createElement("b",null,e.sender),": ",e.data))})):o.a.createElement("p",null,"Sem duvidas ou respostas ainda")),o.a.createElement(P.a.Footer,{className:"div-send-msg"},o.a.createElement(y.a,{placeholder:"Message",value:this.state.message,onChange:function(t){return e.handleMessage(t)}}),o.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"Enviar"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{paddingTop:"20px"}}),o.a.createElement(J.a,{id:"main",className:"flex-container",style:{margin:0,padding:0}},o.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",margin:"10px",objectFit:"fill",width:"100%",height:"100%"}})))))}}]),n}(a.Component),Y=(n(1238),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState({url:e.target.value})},a.join=function(){if(""!==a.state.url){var e=a.state.url.split("/");window.location.href="/".concat(e[e.length-1])}else{e=Math.random().toString(36).substring(2,7);window.location.href="/".concat(e)}},a.alert=function(){var e;e="TRIGO",localStorage.setItem("elearning_user",e)},a.show=function(){alert(localStorage.getItem("elearning_user"))},a.state={url:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("senha");console.log(e),window.prompt("senha")===e?alert("logado com sucesso!"):(alert("senha errada"),window.location.href="/")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container2"},o.a.createElement("div",null,o.a.createElement("h1",{style:{fontSize:"45px"}},"Video Aulas"),o.a.createElement("p",{style:{fontWeight:"200"}},"Video conferencia.")),o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"100px"}},o.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Iniciar ou Entrar em uma aula"),o.a.createElement(y.a,{placeholder:"URL",onChange:function(t){return e.handleChange(t)}}),o.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.join,style:{margin:"20px"}},"Entrar")))}}]),n}(a.Component)),$=n(1267),K=n(1270);var Q=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,null,o.a.createElement(K.a,null,"Ola")))},X=n(119),Z=n(12),ee=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(X.a,null,o.a.createElement(Z.c,null,o.a.createElement(Z.a,{path:"/",exact:!0,component:Y}),o.a.createElement(Z.a,{path:"/:url",component:G}),o.a.createElement(Z.a,{path:"/auth",component:Q}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},127:function(e,t,n){e.exports=n(1243)},154:function(e,t){}},[[127,1,2]]]);
//# sourceMappingURL=main.111fd77e.chunk.js.map