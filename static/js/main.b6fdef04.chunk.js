(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(t,e,a){t.exports=a(301)},122:function(t,e,a){},123:function(t,e,a){},206:function(t,e,a){},207:function(t,e,a){},208:function(t,e,a){},301:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(32),s=a.n(o),r=(a(122),a(116)),c=a(110),l=a(13),d=a(14),u=a(16),h=a(15),p=a(17),m=a(2),b=(a(123),a(44)),v=(a(206),{black:"#212121",red:"#F70F0F",yellow:"#FCD318",blue:"#344D90",grey:"#A3A3A3",white:"#FFFFFF"}),w=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t,e=this,a=this.props,n=(a.functions,a.row),o=a.col;return i.a.createElement("div",{className:this.props.playing?"Tile playing":"Tile",style:{width:this.props.width}},i.a.createElement("div",{className:"TileInner",onClick:function(){return e.props.functions.change(n,o)},style:{background:(t=this.props.value,v[Object.keys(v)[t]])}}))}}]),e}(n.Component),f=(a(207),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"tileIsPlaying",value:function(t,e){var a=this.props.position,n=a/100;return 0!==a&&(n>=t/e&&n<=(t+1)/e)}},{key:"render",value:function(){var t=this,e=this.props,a=e.data,n=e.row,o=e.functions,s=e.height,r=e.desktop,c=e.board;return i.a.createElement("div",{className:"RowOuter"},i.a.createElement("div",{className:"rowButtonOuter left"},i.a.createElement("div",{className:"rowButton subtract",onClick:r?function(){return o.subtract(n)}:void 0,style:{lineHeight:this.props.height}},"\u2013")),i.a.createElement(b.Swipeable,{onSwipeRight:function(){return o.subtract(n)},onSwipeLeft:function(){return o.add(n)}},i.a.createElement("div",{className:"Row",style:{height:s,borderTop:0===n?"5px solid #212121":"",borderBottom:n===c.length-1?"5px solid #212121":""}},a.map(function(e,s){return i.a.createElement(w,{value:e,key:s,row:n,col:s,functions:o,width:(100/a.length).toString()+"%",playing:t.tileIsPlaying(s,a.length)})}))),i.a.createElement("div",{className:"rowButtonOuter right"},i.a.createElement("div",{className:"rowButton add",onClick:r?function(){return o.add(n)}:void 0,style:{lineHeight:this.props.height}},"+")))}}]),e}(n.Component)),g=(a(208),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props,e=t.data,a=t.functions,n=t.position,o=t.height,s=t.desktop;return i.a.createElement("div",{className:"boardOuter"},i.a.createElement("div",{className:"longButtonOuter"},i.a.createElement("div",{className:"rowButton long subtract",onClick:s?a.subtractRow:void 0},"\u2013")),i.a.createElement(b.Swipeable,{onSwipeUp:a.addRow,onSwipeDown:a.subtractRow},i.a.createElement("div",{className:"Board"},e.map(function(t,r){return i.a.createElement(f,{data:t,key:r,row:r,board:e,functions:a,position:n,height:(o/e.length).toString()+"px",desktop:s})}))),i.a.createElement("div",{className:"longButtonOuter"},i.a.createElement("div",{className:"rowButton long add",onClick:s?a.addRow:void 0},"+")))}}]),e}(n.Component)),y=a(18),O=a.n(y),j=a(113),k=a.n(j),E=a(45),S=a.n(E),N=a(114),x=a.n(N),R=a(115),W=a.n(R),C=a(61),T=a(112),B=a.n(T),H={minHeight:2,maxHeight:4,maxWidth:5,notes:[0,"C","D","E","G","A"]};function D(){for(var t=[],e=H.minHeight+Math.floor(Math.random()*(H.maxHeight-H.minHeight+1)),a=0;a<e;a++){for(var n=[],i=Math.ceil(Math.random()*H.maxWidth),o=0;o<i;o++)n.push(Math.floor(Math.random()*H.notes.length));t.push(n)}return t}var M=Object(C.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),F=function(t){function e(t){var a;Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t))).handleChange=function(t){return function(e){a.setState(Object(c.a)({},t,e.target.value))}};for(var n=[],i=0;i<6;i++)n.push(new O.a.Synth({oscillator:{type:"sine"},volume:-12}).toMaster());return a.start=a.start.bind(Object(m.a)(Object(m.a)(a))),a.stop=a.stop.bind(Object(m.a)(Object(m.a)(a))),a.randomise=a.randomise.bind(Object(m.a)(Object(m.a)(a))),a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(m.a)(Object(m.a)(a))),a.state={windowWidth:0,windowHeight:0,data:D(),position:0,playing:!1,synths:n,randomiseNext:!1,randomiseInterval:4,functions:{change:a.change.bind(Object(m.a)(Object(m.a)(a))),add:a.addTile.bind(Object(m.a)(Object(m.a)(a))),subtract:a.subtractTile.bind(Object(m.a)(Object(m.a)(a))),addRow:a.addRow.bind(Object(m.a)(Object(m.a)(a))),subtractRow:a.subtractRow.bind(Object(m.a)(Object(m.a)(a)))}},a}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),O.a.Transport.PPQ=24}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})}},{key:"randomise",value:function(){if(!0===this.state.playing)this.setState({randomiseNext:!0});else{var t=D();this.setState({data:t})}}},{key:"change",value:function(t,e){var a=this.state.data,n=a[t][e];a[t][e]=(n+1)%6,this.setState({data:a})}},{key:"addTile",value:function(t){var e=this.state.data;e[t].length<9&&(e[t].push(0),this.setState({data:e}))}},{key:"subtractTile",value:function(t){var e=this.state.data;e[t].length>1&&(e[t].pop(),this.setState({data:e}))}},{key:"addRow",value:function(){var t=this.state.data;t.length<6&&(t.push([0,0,0,0]),this.setState({data:t}))}},{key:"subtractRow",value:function(){var t=this.state.data;t.length>1&&(t.pop(),this.setState({data:t}))}},{key:"start",value:function(){var t=this;O.a.Transport.scheduleRepeat(function(e){var a=t.state,n=a.position,i=a.data,o=a.playPosition,s=a.synths,c=!0,l=!1,d=void 0;try{for(var u,h=i.entries()[Symbol.iterator]();!(c=(u=h.next()).done);c=!0){var p=u.value,m=Object(r.a)(p,2),b=m[0],v=m[1],w=H.notes,f=Math.floor(n/100*v.length);if(o[b]!==f){o[b]=f,o[b]===v.length&&(o[b]=0);var g=w[v[o[b]]];0!==g&&s[b].triggerAttackRelease(g+(b+2).toString(),"16n",e)}}}catch(O){l=!0,d=O}finally{try{c||null==h.return||h.return()}finally{if(l)throw d}}if(n>=100){if(n=1,!0===t.state.randomiseNext){var y=D();t.setState({data:y,randomiseNext:!1})}}else n+=100/96;t.setState({position:n,playPosition:o})},"1i"),O.a.Transport.start("+0.1"),O.a.start();for(var e=[],a=0;a<6;a++)e[a]=-1;this.setState({position:1,playPosition:e,playing:!0})}},{key:"stop",value:function(){O.a.Transport.stop(),O.a.Transport.cancel();for(var t=[],e=0;e<6;e++)t[e]=-1;this.setState({position:0,playPosition:t,playing:!1,randomiseNext:!1})}},{key:"buttonStyle",value:function(){return{margin:"5px",float:"left"}}},{key:"render",value:function(){var t=this.state.data,e=this.state.windowWidth>600;return i.a.createElement("div",{className:"App"},i.a.createElement(C.MuiThemeProvider,{theme:M},i.a.createElement(B.a,{position:"static",color:"default"},i.a.createElement(k.a,null,i.a.createElement(S.a,{variant:"contained",onClick:this.start,disabled:this.state.playing,style:this.buttonStyle()},i.a.createElement(x.a,null)),i.a.createElement(S.a,{variant:"contained",onClick:this.stop,disabled:!this.state.playing,style:this.buttonStyle()},i.a.createElement(W.a,null)),i.a.createElement(S.a,{variant:"contained",onClick:this.randomise,disabled:this.state.randomiseNext,style:this.buttonStyle()},"Randomise")))),i.a.createElement(g,{data:t,position:this.state.position,functions:this.state.functions,width:this.state.windowWidth,height:e?this.state.windowHeight-160:this.state.windowHeight-110,desktop:e}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[117,1,2]]]);
//# sourceMappingURL=main.b6fdef04.chunk.js.map