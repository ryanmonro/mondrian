(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(t,e,n){t.exports=n(344)},139:function(t,e,n){},140:function(t,e,n){},223:function(t,e,n){},224:function(t,e,n){},225:function(t,e,n){},319:function(t,e,n){},344:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(24),r=n.n(i),s=(n(139),n(5)),l=n(6),c=n(9),u=n(8),h=n(10),d=(n(140),n(20)),p=n.n(d),m=[0,"C","D","E","G","A"],b=[2,3,4,5,8],f=4,y=4,w=function(){function t(){var e=this;Object(s.a)(this,t),this.tilesToPlayAtPosition=function(t,n){var o=[],a=t===n-1,i=!0,r=!1,s=void 0;try{for(var l,c=e.rows[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var u=l.value,h=u.tiles.length,d=!0,p=!1,b=void 0;try{for(var f,w=u.tiles[Symbol.iterator]();!(d=(f=w.next()).done);d=!0){var v=f.value,g=m[v.note],O=Math.ceil(v.col*n/h),j=Math.ceil((v.col+1)*n/h),k=t===O;0!==g&&(t>=O&&t<j)?v.isPlaying||(v.isPlaying=!0,(k||!0===e.firstBar&&0===v.col)&&o.push(v)):v.isPlaying=!1}}catch(E){p=!0,b=E}finally{try{d||null==w.return||w.return()}finally{if(p)throw b}}}}catch(E){r=!0,s=E}finally{try{i||null==c.return||c.return()}finally{if(r)throw s}}return a&&(console.log(e.barCount),!0===e.firstBar&&(e.firstBar=!1),!0===e.randomiseNext?e.randomiseRows():!0===e.auto&&(e.barCount++,e.barCount>=y&&(e.randomiseNext=!0))),o},this.play=function(){e.playing=!0,e.firstBar=!0},this.stop=function(){e.playing=!1,e.randomiseNext=!1,e.barCount=1},this.randomise=function(){!0===e.playing?e.randomiseNext=!0:e.randomiseRows()},this.randomiseRows=function(){e.rows=[],e.randomiseNext=!1,e.barCount=1;for(var t=f,n=0;n<t;n++)e.addRow()},this.playing=!1,this.rows=[],this.randomiseNext=!1,this.firstBar=!0,this.auto=!0,this.randomise(),this.barCount=1}return Object(l.a)(t,[{key:"change",value:function(t,e){this.rows[t].tiles[e].change()}},{key:"toggleAuto",value:function(){this.auto=!this.auto,this.auto&&(this.barCount=1)}},{key:"addRow",value:function(){this.rows.length<6&&this.rows.push(new v(this.rows.length))}},{key:"subtractRow",value:function(){this.rows.length>1&&this.rows.pop()}},{key:"addTileToRow",value:function(t){this.rows[t].addTile()}},{key:"subtractTileFromRow",value:function(t){this.rows[t].subtractTile()}},{key:"rowsAddable",value:function(){return this.rows.length<6}},{key:"rowsSubtractable",value:function(){return this.rows.length>1}}]),t}(),v=function(){function t(e){Object(s.a)(this,t),this.tiles=[],this.row=e,this.randomise()}return Object(l.a)(t,[{key:"randomise",value:function(){for(var t=b[Math.floor(Math.random()*b.length)],e=0;e<t;e++)this.addTile(!0)}},{key:"addTile",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.tiles.length<9&&this.tiles.push(new g(this.row,this.tiles.length,t))}},{key:"subtractTile",value:function(){this.tiles.length>1&&this.tiles.pop()}},{key:"tilesAddable",value:function(){return this.tiles.length<9}},{key:"tilesSubtractable",value:function(){return this.tiles.length>1}}]),t}(),g=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(s.a)(this,t),this.note=0,this.row=e,this.col=n,this.isPlaying=!1,o&&this.randomise()}return Object(l.a)(t,[{key:"change",value:function(){this.note=(this.note+1)%6}},{key:"randomise",value:function(){Math.random()>.3&&(this.note=Math.floor(Math.random()*(m.length-1))+1)}},{key:"midiNote",value:function(){return m[this.note]+(this.row+2).toString()}}]),t}(),O=w,j=n(51),k=(n(223),["#FFFFFF","#F70F0F","#FCD318","#344D90","#A3A3A3","#212121"]),E=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.tile,n=t.composition,o=t.updateComposition,i=t.border,r=k[e.note],s=100/n.rows[e.row].tiles.length+"%";return a.a.createElement("div",{className:"Tile",style:{width:s,background:r,border:i.string},onClick:function(){return o(function(t){t.change(e.row,e.col)})}},a.a.createElement("div",{className:e.isPlaying?"TileFlasher playing":"TileFlasher"}))}}]),e}(o.Component),C=n(52),x=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.desktop,n=t.children,o=this.props,i=o.style,r=o.enabled,s=o.onClick;e&&r||(i=Object(C.a)({},i,{opacity:0,cursor:"default"}));return a.a.createElement("div",{className:"compButton",onClick:e&&r?s:void 0,style:i},n)}}]),e}(o.Component),T=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.add,n=t.buttonSize,o=t.row,i=t.height,r=t.updateComposition,s=t.border,l=e?o.tilesAddable():o.tilesSubtractable(),c={height:i-2*s.value+"px",lineHeight:i+"px",width:n+"px",borderRadius:e?"0px 10px 10px 0px":"10px 0 0 10px"},u=e?function(){return r(function(t){t.addTileToRow(o.row)})}:function(){return r(function(t){t.subtractTileFromRow(o.row)})},h=e?"+":"\u2013";return a.a.createElement(x,Object.assign({},this.props,{onClick:u,style:c,enabled:l}),h)}}]),e}(o.Component),S=(n(224),function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.row,o=e.composition,i=e.updateComposition,r=e.boardSize,s=e.border,l=(r-2*e.buttonSize-2*s.value)/o.rows.length,c={height:l+"px",borderBottom:0===n.row?s.string:"",borderTop:n.row===o.rows.length-1?s.string:"",borderLeft:s.string,borderRight:s.string};return a.a.createElement("div",{className:"Row"},a.a.createElement(T,Object.assign({},this.props,{add:!1,height:l})),a.a.createElement(j.Swipeable,{onSwipeRight:function(){return i(function(t){t.subtractTileFromRow(n.row)})},onSwipeLeft:function(){return i(function(t){t.addTileToRow(n.row)})}},a.a.createElement("div",{className:"RowInner",style:c},n.tiles.map(function(e,n){return a.a.createElement(E,Object.assign({},t.props,{tile:e,key:n}))}))),a.a.createElement(T,Object.assign({},this.props,{add:!0,height:l})))}}]),e}(o.Component)),R=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.add,n=t.composition,o=t.buttonSize,i=t.updateComposition,r=e?n.rowsAddable():n.rowsSubtractable(),s={display:"block",lineHeight:o+"px",height:o+"px",margin:"0 "+o+"px",borderRadius:e?"10px 10px 0 0":"0 0 10px 10px"},l=e?function(){return i(function(t){t.addRow()})}:function(){return i(function(t){t.subtractRow()})},c=e?"+":"\u2013";return a.a.createElement(x,Object.assign({},this.props,{onClick:l,style:s,enabled:r}),c)}}]),e}(o.Component),A=(n(225),function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.composition,o=e.boardSize,i=e.marginTop,r=e.updateComposition,s=o.toString()+"px";return a.a.createElement("div",{className:"Board",style:{width:s,height:s,marginTop:i}},a.a.createElement(R,Object.assign({},this.props,{add:!0})),a.a.createElement(j.Swipeable,{onSwipeUp:function(){return r(function(t){t.subtractRow()})},onSwipeDown:function(){return r(function(t){t.addRow()})}},a.a.createElement("div",{className:"BoardInner"},n.rows.slice().reverse().map(function(e,n){return a.a.createElement(S,Object.assign({},t.props,{key:n,row:e}))}))),a.a.createElement(R,Object.assign({},this.props,{add:!1})))}}]),e}(o.Component)),M=n(125),N=n.n(M),F=n(32),P=n.n(F),z=n(129),B=n.n(z),D=n(130),W=n.n(D),I=n(126),L=n.n(I),H=n(127),U=n.n(H),J=n(128),Q=n.n(J),q=n(131),G=n.n(q),K=n(68),V=n(124),$=n.n(V),_=Object(K.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),X=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.composition,n=t.play,o=t.stop,i=t.updateComposition,r=t.openModal,s={margin:"2px"};return a.a.createElement(K.MuiThemeProvider,{theme:_},a.a.createElement($.a,{position:"static",color:"default",style:{alignItems:"center"}},a.a.createElement(N.a,null,a.a.createElement(P.a,{onClick:n,disabled:e.playing,style:s},a.a.createElement(L.a,null)),a.a.createElement(P.a,{size:"small",onClick:o,disabled:!e.playing,style:s},a.a.createElement(U.a,null)),a.a.createElement(P.a,{size:"small",onClick:function(){return i(function(t){t.randomise()})},disabled:e.randomiseNext,style:s},a.a.createElement(Q.a,null)),a.a.createElement(B.a,{style:s,control:a.a.createElement(W.a,{checked:e.auto,color:"primary",onChange:function(){return i(function(t){return t.toggleAuto()})},value:"AUTO"}),label:"AUTO"}),a.a.createElement(P.a,{size:"small",variant:"contained",onClick:r,style:s},a.a.createElement(G.a,null)))))}}]),e}(o.Component),Y=n(132),Z=n.n(Y),tt=n(35),et=n.n(tt),nt=n(133),ot=n.n(nt);n(319);n(320);var at=function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.modalOpen,n=t.closeModal,o=t.windowDimensions,i=t.desktop?"AboutModal":"AboutModal mobile",r=Object(C.a)({},{fontFamily:"Lato"},{fontWeight:700,textAlign:"center",color:"#212121"}),s=(o.height-400)/2;return a.a.createElement(Z.a,{open:e,onClose:n},a.a.createElement("div",{className:i,style:{top:s}},a.a.createElement(et.a,{variant:"display1",style:r},"Mondrian Sequencer"),a.a.createElement(et.a,{variant:"subtitle2",style:{textAlign:"center"}},"Code: ",a.a.createElement("a",{href:"https://www.github.com/ryanmonro/mondrian",target:"_new"},"github.com/ryanmonro/mondrian")),a.a.createElement(et.a,{variant:"body1",style:{flex:3}},"Each row represents an octave.",a.a.createElement("br",null),"Tile colour determines the note.",a.a.createElement("br",null),"Tile width determines note length.",a.a.createElement("br",null),"Click the edge buttons (or swipe on mobile) to add/subtract tiles or rows.",a.a.createElement("br",null),"Auto mode randomises the board every four bars."),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},a.a.createElement(ot.a,{variant:"contained",onClick:n},"OK"))))}}]),e}(o.Component);p.a.Transport.PPQ=24,p.a.Transport.bpm.value=60;var it=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).updateWindowDimensions=function(){var t=window.innerWidth,e=window.innerHeight,o=t>600,a=e-64,i=a<t?a:t,r=i/200;n.setState({boardSize:i,border:{string:r+"px solid #212121",value:r},buttonSize:o?40:20,marginTop:(a-i)/2,desktop:o,windowDimensions:{height:e,width:t}})},n.state={modalOpen:!1,openModal:function(){return n.setState({modalOpen:!0})},closeModal:function(){return n.setState({modalOpen:!1})},composition:new O,synth:new p.a.PolySynth(8,p.a.Synth).toMaster(),play:function(){p.a.Transport.scheduleRepeat(function(t){var e=4*p.a.Transport.PPQ,o=p.a.Transport.ticks%e,a=n.state.composition,i=a.tilesToPlayAtPosition(o,e),r=!0,s=!1,l=void 0;try{for(var c,u=i[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var h=c.value;n.state.synth.triggerAttackRelease(h.midiNote(),"32n",t)}}catch(d){s=!0,l=d}finally{try{r||null==u.return||u.return()}finally{if(s)throw l}}n.setState(function(t){return{composition:a}})},"1i"),p.a.start(),p.a.Transport.start(),n.state.updateComposition(function(t){t.play()})},stop:function(){p.a.Transport.stop(),p.a.Transport.cancel(),n.state.updateComposition(function(t){t.stop()})},updateComposition:function(t){n.setState(function(e){return t(e.composition),{composition:e.composition}})}},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentDidMount",value:function(){var t=this.state.synth;t.set("oscillator",{type:"sine"}),t.set("volume",-12),t.set("envelope",{release:2}),this.setState({synth:t})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(X,this.state),a.a.createElement(at,this.state),a.a.createElement(A,this.state))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(it,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[134,1,2]]]);
//# sourceMappingURL=main.ce21d3ec.chunk.js.map