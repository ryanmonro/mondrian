(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(20)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(8),r=a.n(o),s=(a(15),a(2)),c=a(3),l=a(6),u=a(4),h=a(5),d=(a(16),a(1)),p=(a(17),{black:"#212121",red:"#F70F0F",yellow:"#FCD318",blue:"#344D90",grey:"#A3A3A3",white:"#FFFFFF"}),b=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.playing?"Tile playing":"Tile",style:{width:this.props.width}},i.a.createElement("div",{className:"TileInner",onClick:this.props.functions.change,"data-row":this.props.row,"data-col":this.props.col,style:{background:(t=this.props.value,p[Object.keys(p)[t]])}}));var t}}]),e}(n.Component),v=(a(18),function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"tileIsPlaying",value:function(t,e){var a=this.props.position/100;return a>=t/e&&a<=(t+1)/e}},{key:"render",value:function(){var t=this,e=this.props,a=e.data,n=e.row,o=e.functions;return i.a.createElement("div",{className:"RowOuter","data-row":n},i.a.createElement("div",{className:"rowButton subtract",onClick:o.subtract,style:{lineHeight:this.props.height}},"\u2013"),i.a.createElement("div",{className:"Row",style:{height:this.props.height}},a.map(function(e,r){return i.a.createElement(b,{value:e,key:r,row:n,col:r,functions:o,width:(100/a.length).toString()+"%",playing:t.tileIsPlaying(r,a.length)})})),i.a.createElement("div",{className:"rowButton add",onClick:o.add,style:{lineHeight:this.props.height}},"+"))}}]),e}(n.Component)),m=(a(19),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={data:t.data,functions:{change:a.change.bind(Object(d.a)(Object(d.a)(a))),add:a.addTile.bind(Object(d.a)(Object(d.a)(a))),subtract:a.subtractTile.bind(Object(d.a)(Object(d.a)(a)))}},a.addRow=a.addRow.bind(Object(d.a)(Object(d.a)(a))),a.subtractRow=a.subtractRow.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"change",value:function(t){var e=t.target.dataset,a=e.row,n=e.col,i=this.state.data,o=i[a][n];i[a][n]=(o+1)%6,this.setState({data:i})}},{key:"addTile",value:function(t){var e=this.state.data,a=t.target.parentNode.dataset.row;e[a].length<9&&(e[a].push(0),this.setState({data:e}))}},{key:"subtractTile",value:function(t){var e=this.state.data,a=t.target.parentNode.dataset.row;e[a].length>1&&(e[a].pop(),this.setState({data:e}))}},{key:"addRow",value:function(){var t=this.state.data;t.length<8&&(t.push([0,0,0,0]),this.setState({data:t}))}},{key:"subtractRow",value:function(){var t=this.state.data;t.length>1&&(t.pop(),this.setState({data:t}))}},{key:"render",value:function(){var t=this,e=this.state.data;return i.a.createElement("div",{className:"Board"},i.a.createElement("div",{className:"rowButton long subtract",onClick:this.subtractRow},"\u2013"),e.map(function(a,n){return i.a.createElement(v,{data:a,key:n,row:n,functions:t.state.functions,position:t.props.position,height:(800/e.length).toString()+"px"})}),i.a.createElement("div",{className:"rowButton long add",onClick:this.addRow},"+"))}}]),e}(n.Component));function f(){for(var t=[],e=Math.ceil(8*Math.random()),a=0;a<e;a++){for(var n=[],i=Math.ceil(8*Math.random()),o=0;o<i;o++)n.push(Math.floor(6*Math.random()));t.push(n)}return t}var w=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={data:f(),position:1},a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval(function(){var e=t.state.position;100===e?e=1:e++,t.setState({position:e})},20)}},{key:"render",value:function(){var t=this.state.data;return i.a.createElement("div",{className:"App"},i.a.createElement(m,{data:t,position:this.state.position}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.987b2522.chunk.js.map