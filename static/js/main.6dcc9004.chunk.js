(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(25),s=a.n(o),r=(a(75),a(69)),c=a(63),l=a(11),u=a(12),d=a(14),h=a(13),p=a(15),b=a(3),m=(a(76),a(77),{black:"#212121",red:"#F70F0F",yellow:"#FCD318",blue:"#344D90",grey:"#A3A3A3",white:"#FFFFFF"}),v=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.playing?"Tile playing":"Tile",style:{width:this.props.width}},i.a.createElement("div",{className:"TileInner",onClick:this.props.functions.change,"data-row":this.props.row,"data-col":this.props.col,style:{background:(t=this.props.value,m[Object.keys(m)[t]])}}));var t}}]),e}(n.Component),y=(a(78),function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"tileIsPlaying",value:function(t,e){var a=this.props.position,n=a/100;return 0!==a&&(n>=t/e&&n<=(t+1)/e)}},{key:"render",value:function(){var t=this,e=this.props,a=e.data,n=e.row,o=e.functions;return i.a.createElement("div",{className:"RowOuter","data-row":n},i.a.createElement("div",{className:"rowButton subtract",onClick:o.subtract,style:{lineHeight:this.props.height}},"\u2013"),i.a.createElement("div",{className:"Row",style:{height:this.props.height}},a.map(function(e,s){return i.a.createElement(v,{value:e,key:s,row:n,col:s,functions:o,width:(100/a.length).toString()+"%",playing:t.tileIsPlaying(s,a.length)})})),i.a.createElement("div",{className:"rowButton add",onClick:o.add,style:{lineHeight:this.props.height}},"+"))}}]),e}(n.Component)),f=(a(79),function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.data,a=t.functions,n=t.position;return i.a.createElement("div",{className:"Board"},i.a.createElement("div",{className:"rowButton long subtract",onClick:a.subtractRow},"\u2013"),e.map(function(t,o){return i.a.createElement(y,{data:t,key:o,row:o,functions:a,position:n,height:(800/e.length).toString()+"px"})}),i.a.createElement("div",{className:"rowButton long add",onClick:a.addRow},"+"))}}]),e}(n.Component)),g=a(21),w=a.n(g),O=a(66),j=a.n(O),k=a(32),E=a.n(k),S=a(67),N=a.n(S),C=a(68),R=a.n(C),T=a(40),x=a(65),M=a.n(x);function F(){for(var t=[],e=Math.ceil(6*Math.random()),a=0;a<e;a++){for(var n=[],i=Math.ceil(8*Math.random()),o=0;o<i;o++)n.push(Math.floor(6*Math.random()));t.push(n)}return t}var P=Object(T.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),B=function(t){function e(t){var a;Object(l.a)(this,e),(a=Object(d.a)(this,Object(h.a)(e).call(this,t))).handleChange=function(t){return function(e){a.setState(Object(c.a)({},t,e.target.value))}};for(var n=[],i=0;i<6;i++)n.push(new w.a.Synth({oscillator:{type:"sine"},volume:-12}).toMaster());return a.start=a.start.bind(Object(b.a)(Object(b.a)(a))),a.stop=a.stop.bind(Object(b.a)(Object(b.a)(a))),a.randomise=a.randomise.bind(Object(b.a)(Object(b.a)(a))),a.state={data:F(),position:0,playing:!1,synths:n,randomiseNext:!1,randomiseInterval:4,functions:{change:a.change.bind(Object(b.a)(Object(b.a)(a))),add:a.addTile.bind(Object(b.a)(Object(b.a)(a))),subtract:a.subtractTile.bind(Object(b.a)(Object(b.a)(a))),addRow:a.addRow.bind(Object(b.a)(Object(b.a)(a))),subtractRow:a.subtractRow.bind(Object(b.a)(Object(b.a)(a)))}},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;w.a.Transport.PPQ=24,w.a.Transport.scheduleRepeat(function(e){var a=t.state,n=a.position,i=a.data,o=a.playPosition,s=a.synths,c=!0,l=!1,u=void 0;try{for(var d,h=i.entries()[Symbol.iterator]();!(c=(d=h.next()).done);c=!0){var p=d.value,b=Object(r.a)(p,2),m=b[0],v=b[1],y=Math.floor(n/100*v.length);if(o[m]!==y){o[m]=y,o[m]===v.length&&(o[m]=0);var f=[0,"C","D","E","G","A"][v[o[m]]];0!==f&&s[m].triggerAttackRelease(f+(m+2).toString(),"16n",e)}}}catch(w){l=!0,u=w}finally{try{c||null==h.return||h.return()}finally{if(l)throw u}}if(n>=100){if(n=1,!0===t.state.randomiseNext){var g=F();t.setState({data:g,randomiseNext:!1})}}else n+=100/96;t.setState({position:n,playPosition:o})},"1i")}},{key:"randomise",value:function(){if(!0===this.state.playing)this.setState({randomiseNext:!0});else{var t=F();this.setState({data:t})}}},{key:"change",value:function(t){var e=t.target.dataset,a=e.row,n=e.col,i=this.state.data,o=i[a][n];i[a][n]=(o+1)%6,this.setState({data:i})}},{key:"addTile",value:function(t){var e=this.state.data,a=t.target.parentNode.dataset.row;e[a].length<9&&(e[a].push(0),this.setState({data:e}))}},{key:"subtractTile",value:function(t){var e=this.state.data,a=t.target.parentNode.dataset.row;e[a].length>1&&(e[a].pop(),this.setState({data:e}))}},{key:"addRow",value:function(){var t=this.state.data;t.length<6&&(t.push([0,0,0,0]),this.setState({data:t}))}},{key:"subtractRow",value:function(){var t=this.state.data;t.length>1&&(t.pop(),this.setState({data:t}))}},{key:"start",value:function(){w.a.Transport.start(),w.a.start();for(var t=[],e=0;e<6;e++)t[e]=-1;this.setState({position:1,playPosition:t,playing:!0})}},{key:"stop",value:function(){w.a.Transport.stop();for(var t=[],e=0;e<6;e++)t[e]=-1;this.setState({position:0,playPosition:t,playing:!1,randomiseNext:!1})}},{key:"buttonStyle",value:function(){return{margin:"5px",float:"left"}}},{key:"render",value:function(){var t=this.state.data;return i.a.createElement("div",{className:"App"},i.a.createElement(T.MuiThemeProvider,{theme:P},i.a.createElement(M.a,{position:"static",color:"default"},i.a.createElement(j.a,null,i.a.createElement(E.a,{variant:"contained",onClick:this.start,disabled:this.state.playing,style:this.buttonStyle()},i.a.createElement(N.a,null)),i.a.createElement(E.a,{variant:"contained",onClick:this.stop,disabled:!this.state.playing,style:this.buttonStyle()},i.a.createElement(R.a,null)),i.a.createElement(E.a,{variant:"contained",onClick:this.randomise,disabled:this.state.randomiseNext,style:this.buttonStyle()},"Randomise")))),i.a.createElement(f,{data:t,position:this.state.position,functions:this.state.functions}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},70:function(t,e,a){t.exports=a(174)},75:function(t,e,a){},76:function(t,e,a){},77:function(t,e,a){},78:function(t,e,a){},79:function(t,e,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.6dcc9004.chunk.js.map