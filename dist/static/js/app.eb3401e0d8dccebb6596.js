webpackJsonp([1],{"6L1D":function(t,e){},J0qW:function(t,e){},"K+5M":function(t,e){},KVmQ:function(t,e){},MACr:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},n,!1,function(t){s("K+5M")},null,null).exports,o=s("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-container"},[s("div",{staticClass:"title"},[t._v("小游戏集合")]),t._v(" "),s("div",{staticClass:"menu-wrap"},[s("a",{staticClass:"menu-item",attrs:{href:"index.html#/snake"}},[t._v("贪吃蛇")]),t._v(" "),s("a",{staticClass:"menu-item",attrs:{href:"index.html#/eliminate"}},[t._v("消消乐")]),t._v(" "),s("a",{staticClass:"menu-item",attrs:{href:"index.html#/pop-block"}},[t._v("消灭方块")]),t._v(" "),s("a",{staticClass:"menu-item",attrs:{href:"index.html#/drag-block"}},[t._v("拖动方块")]),t._v(" "),s("a",{staticClass:"menu-item",attrs:{href:"index.html#/draw"}},[t._v("画板")]),t._v(" "),s("a",{staticClass:"menu-item",attrs:{href:"index.html#/date"}},[t._v("日历")]),t._v(" "),s("a",{staticClass:"menu-item",attrs:{href:"index.html#/color"}},[t._v("烧脑颜色")])]),t._v(" "),s("div",{staticClass:"abort-us"},[s("a",{attrs:{href:"index.html#/abort-us"}},[t._v("关于作品")])])])}]};var c=s("VU/8")({name:"HelloWorld",data:function(){return{}}},r,!1,function(t){s("KVmQ")},"data-v-0f5a1711",null).exports,l=s("rdLu"),h=s.n(l),u={name:"Snake",data:function(){return{snakeBody:[1],food:0,direction:"RIGHT",gameOver:!1,speed:400}},watch:{snakeBody:"checkRule"},created:function(){this.init()},mounted:function(){var t=this;document.onkeydown=function(e){t.keyUp(e)}},methods:{checkRule:function(){var t=h.a.uniq(this.snakeBody);if(t.length!==this.snakeBody.length)this.stop();else switch(t.length){case 3:this.changeSpeed(300);break;case 6:this.changeSpeed(200);break;case 10:this.changeSpeed(100);break;case 20:this.changeSpeed(50)}},changeSpeed:function(t){clearInterval(this.intId),this.speed=t,this.move()},restart:function(){this.snakeBody=[1],this.direction="RIGHT",this.gameOver=!1,this.speed=400,this.init()},stop:function(){clearInterval(this.intId),this.gameOver=!0},isSnake:function(t){return h.a.indexOf(this.snakeBody,t)>-1},isHead:function(t){return h.a.last(this.snakeBody)===t},changeDirection:function(t){this.direction=t},touch:function(t){t.clientY<168?this.direction="TOP":t.clientY>328&&t.clientY<488?this.direction="DOWN":t.clientX>window.innerWidth/2?this.direction="RIGHT":t.clientX<window.innerWidth/2&&(this.direction="LEFT")},move:function(){var t=this;this.intId=setInterval(function(){var e=h.a.last(t.snakeBody),s=[];if(e===t.food?(s=t.snakeBody,t.food=h.a.random(1,1536)):s=h.a.rest(t.snakeBody),e>1536)s.push(e-1536);else if(e<1)s.push(1536+e);else switch(t.direction){case"LEFT":s.push(e-1);break;case"TOP":s.push(e-32);break;case"RIGHT":s.push(e+1);break;case"DOWN":s.push(e+32);break;default:s.push(e+1)}t.snakeBody=s},this.speed)},keyUp:function(t){37===t.keyCode?this.direction="LEFT":38===t.keyCode?this.direction="TOP":39===t.keyCode?this.direction="RIGHT":40===t.keyCode&&(this.direction="DOWN")},init:function(){this.food=h.a.random(1,1536),this.move()}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"snake-container"},[s("div",{staticClass:"game-panel"},t._l(1536,function(e){return s("div",{key:e,staticClass:"col-item",class:{snake:t.isSnake(e),food:t.food==e,"snake-head":t.isHead(e)}})})),t._v(" "),s("div",{staticClass:"source-wrap"},[t._v("\n    得分： "+t._s(t.snakeBody.length-1)+"\n  ")]),t._v(" "),s("div",{staticClass:"operation"},[s("div",{staticClass:"operation-item operation-top-down",on:{click:function(e){t.changeDirection("TOP")}}},[t._v("上")]),t._v(" "),s("div",{staticClass:"operation-left-right-col"},[s("div",{staticClass:"operation-item",on:{click:function(e){t.changeDirection("LEFT")}}},[t._v("左")]),t._v(" "),s("div",{staticClass:"operation-item-block"}),t._v(" "),s("div",{staticClass:"operation-item",on:{click:function(e){t.changeDirection("RIGHT")}}},[t._v("右")])]),t._v(" "),s("div",{staticClass:"operation-item operation-top-down",on:{click:function(e){t.changeDirection("DOWN")}}},[t._v("下")])]),t._v(" "),t.gameOver?s("div",{staticClass:"game-over"},[s("span",{staticClass:"game-over-text"},[t._v("GAME OVER")]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"restart",on:{click:t.restart}},[t._v("重新开始")])]):t._e()])},staticRenderFns:[]};var v=s("VU/8")(u,d,!1,function(t){s("J0qW")},"data-v-d44d05c2",null).exports,f=s("BO1k"),m=s.n(f),k=s("woOf"),p=s.n(k),g={name:"eliminate",data:function(){return{gamePanel:[9,9,9,9,9,9,9,9,9,9],blockColors:{},colors:["red","yellow","blue","green"],source:0}},created:function(){this.init()},methods:{cleanBlock:function(t){var e=this,s=this.blockColors[t];-1!==h.a.indexOf(this.colors,s)&&(this.getNeedCleanBlock(parseInt(t),[parseInt(t)]),setTimeout(function(){if(e.needCleanBlock.length>=3){e.cleaning(e.needCleanBlock);var t=new Audio;t.src="http://data.huiyi8.com/2017/gha/03/17/1702.mp3",t.play(),e.source+=e.needCleanBlock.length}},300))},cleaning:function(t){var e=p()({},this.blockColors),s=!0,i=!1,n=void 0;try{for(var a,o=m()(t);!(s=(a=o.next()).done);s=!0){e[a.value]="cleared"}}catch(t){i=!0,n=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw n}}this.blockColors=e,this.blockDown(t)},blockDown:function(t){var e=!0,s=!1,i=void 0;try{for(var n,a=m()(t);!(e=(n=a.next()).done);e=!0){var o=n.value;delete this.blockColors[o]}}catch(t){s=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(s)throw i}}var r=h.a.groupBy(t,function(t){return t%10});for(var c in r){for(var l=r[c],u=[],d=h.a.max(l);d>10;d-=10)u.push(d);var v=h.a.difference(u,l);for(var f in u)h.a.isEmpty(v)?this.fullBlock(u[f]):this.blockColors[u[f]]=this.blockColors[v.shift()]}},fullBlock:function(t){this.blockColors[t]=h.a.sample(this.colors)},getNeedCleanBlock:function(t,e){var s=this,i=this.blockColors[t],n=!1;if(-1===h.a.indexOf(e,t+1)&&i===this.blockColors[t+1]&&(n=!0,e.push(t+1),setTimeout(function(){s.getNeedCleanBlock(t+1,e)},0)),-1===h.a.indexOf(e,t-1)&&i===this.blockColors[t-1]&&(n=!0,e.push(t-1),setTimeout(function(){s.getNeedCleanBlock(t-1,e)},0)),-1===h.a.indexOf(e,t+10)&&i===this.blockColors[t+10]&&(n=!0,e.push(t+10),setTimeout(function(){s.getNeedCleanBlock(t+10,e)},0)),-1===h.a.indexOf(e,t-10)&&i===this.blockColors[t-10]&&(n=!0,e.push(t-10),setTimeout(function(){s.getNeedCleanBlock(t-10,e)},0)),!n)return this.needCleanBlock=e,e},init:function(){for(var t in this.gamePanel)for(var e in h.a.range(this.gamePanel[t])){var s=parseInt(t)+1+""+(parseInt(e)+1);this.blockColors[s]=h.a.sample(this.colors)}}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"game-panel"},t._l(t.gamePanel,function(e,i){return s("div",{key:e+i,staticClass:"row"},t._l(e,function(e,n){return s("div",{key:"col"+n,staticClass:"col",class:t.blockColors[i+1+""+e],on:{click:function(s){t.cleanBlock(i+1+""+e)}}})}))})),t._v(" "),s("div",{staticClass:"game-panel",staticStyle:{"margin-top":"10px","line-height":"1.6"}},[s("div",[t._v("得分： "+t._s(t.source))]),t._v(" "),s("div",{staticClass:"rule-text"},[t._v("\n      点击三个以上连续的同色方块即可消除方块\n    ")]),t._v(" "),s("div",{staticClass:"rule-text"},[t._v("\n      Design By Kody & Vivien\n    ")])])])},staticRenderFns:[]};var y=s("VU/8")(g,C,!1,function(t){s("tUXl")},"data-v-a23e9864",null).exports,b={name:"popBlock",data:function(){return{x:20,y:120,blockColors:{},colors:["#b23aee","#ff7f24","#0000ff","#008000"],currentSource:0,targetSource:1500,step:1,showTip:!1,clearCount:0,source:0,showStepOverTip:!1,lessCount:0,stepOverSource:0,over:!1}},mounted:function(){console.warn("Design by Kody Wang, Thank you, play my game!");var t=window.innerWidth,e=window.innerHeight;this.x=(t-320)/2,this.y=(e-320)/2,this.canvas=document.getElementById("myCanvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=t,this.canvas.height=e,this.ctx.fillStyle="#FFF8DC",this.ctx.fillRect(0,0,t,e),this.init()},methods:{click:function(t){var e=this;if(!this.clearing){var s=parseInt((t.clientX-this.x)/32),i=parseInt(parseInt((t.clientY-this.y)/32));if(!(s<0||s>9||i<0||i>9)){var n=parseInt(i+""+s);h.a.has(this.blockColors,n)&&(this.getNeedCleanBlock(n,[n]),setTimeout(function(){if(e.needCleanBlock.length>=2){var t=new Audio;t.src="http://data.huiyi8.com/2017/gha/03/17/1702.mp3",t.play(),e.clean(e.needCleanBlock)}},300))}}},clean:function(t){var e=this,s=!0,i=!1,n=void 0;try{for(var a,o=m()(t);!(s=(a=o.next()).done);s=!0){var r=a.value;this.ctx.clearRect(this.x+32*parseInt(r%10),this.y+32*parseInt(r/10),30,30),delete this.blockColors[r]}}catch(t){i=!0,n=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw n}}this.addSource(t),this.clearing=!0,setTimeout(function(){e.blockDown(t),window.requestAnimationFrame(e.draw),e.clearing=!1},300)},draw:function(){for(var t in this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),this.ctx.fillStyle="#FFF8DC",this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight),this.ctx.strokeStyle="#ccc",this.ctx.rect(this.x,this.y,320,320),this.ctx.stroke(),h.a.range(10))for(var e in h.a.range(10)){var s=parseInt(t+e);h.a.has(this.blockColors,s)&&(this.ctx.fillStyle=this.blockColors[s],this.ctx.fillRect(this.x+32*e,this.y+32*t,30,30))}},addSource:function(t){var e=t.length;this.source=e*e*5,this.clearCount=e,this.showTip=!0,this.currentSource+=this.source},blockDown:function(t){var e=h.a.groupBy(t,function(t){return t%10});for(var s in e){for(var i=e[s],n=[],a=h.a.max(i);a>=0;a-=10)n.push(a);var o=h.a.difference(n,i),r=!0,c=!1,l=void 0;try{for(var u,d=m()(n);!(r=(u=d.next()).done);r=!0){var v=u.value;if(h.a.isEmpty(o))this.ctx.clearRect(this.x+32*parseInt(v%10),this.y+32*parseInt(v/10),30,30),delete this.blockColors[v];else{var f=o.shift();if(h.a.has(this.blockColors,f)){var k=this.blockColors[f];this.blockColors[v]=k,this.ctx.fillStyle=k,this.ctx.fillRect(this.x+32*parseInt(v%10),this.y+32*parseInt(v/10),30,30)}else this.ctx.clearRect(this.x+32*parseInt(v%10),this.y+32*parseInt(v/10),30,30),delete this.blockColors[v]}}}catch(t){c=!0,l=t}finally{try{!r&&d.return&&d.return()}finally{if(c)throw l}}}this.leftMove()},leftMove:function(){var t=h.a.groupBy(this.blockColors,function(t,e){return e%10});if(h.a.size(t)<10){var e=[],s=!0,i=!1,n=void 0;try{for(var a,o=m()(h.a.range(10));!(s=(a=o.next()).done);s=!0){var r=a.value;h.a.has(t,r)||e.push(r)}}catch(t){i=!0,n=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw n}}e=h.a.sortBy(e,function(t){return-t});var c=!0,l=!1,u=void 0;try{for(var d,v=m()(e);!(c=(d=v.next()).done);c=!0)for(var f=d.value+1;f<=9;f++){var k=!0,p=!1,g=void 0;try{for(var C,y=m()(h.a.range(f,100,10));!(k=(C=y.next()).done);k=!0){var b=C.value;if(h.a.has(this.blockColors,b)){var x=this.blockColors[b],_=b-1;this.blockColors[_]=x,this.ctx.fillStyle=x,this.ctx.fillRect(this.x+32*parseInt(_%10),this.y+32*parseInt(_/10),30,30),this.ctx.clearRect(this.x+32*parseInt(b%10),this.y+32*parseInt(b/10),30,30),delete this.blockColors[b]}}}catch(t){p=!0,g=t}finally{try{!k&&y.return&&y.return()}finally{if(p)throw g}}}}catch(t){l=!0,u=t}finally{try{!c&&v.return&&v.return()}finally{if(l)throw u}}}this.checkIsCanClear()},checkIsCanClear:function(){for(var t in this.blockColors)if(this.hasNearbyBlock(t))return;this.gameOver()},hasNearbyBlock:function(t){var e=this.blockColors[t],s=!1;return parseInt((t+1)/10)===parseInt(t/10)&&e===this.blockColors[t+1]&&(s=!0),parseInt((t-1)/10)===parseInt(t/10)&&e===this.blockColors[t-1]&&(s=!0),e===this.blockColors[t+10]&&(s=!0),e===this.blockColors[t-10]&&(s=!0),s},getNeedCleanBlock:function(t,e){var s=this,i=this.blockColors[t],n=!1;if(parseInt((t+1)/10)===parseInt(t/10)&&-1===h.a.indexOf(e,t+1)&&i===this.blockColors[t+1]&&(n=!0,e.push(t+1),setTimeout(function(){s.getNeedCleanBlock(t+1,e)},0)),parseInt((t-1)/10)===parseInt(t/10)&&-1===h.a.indexOf(e,t-1)&&i===this.blockColors[t-1]&&(n=!0,e.push(t-1),setTimeout(function(){s.getNeedCleanBlock(t-1,e)},0)),-1===h.a.indexOf(e,t+10)&&i===this.blockColors[t+10]&&(n=!0,e.push(t+10),setTimeout(function(){s.getNeedCleanBlock(t+10,e)},0)),-1===h.a.indexOf(e,t-10)&&i===this.blockColors[t-10]&&(n=!0,e.push(t-10),setTimeout(function(){s.getNeedCleanBlock(t-10,e)},0)),!n)return this.needCleanBlock=e,e},startGame:function(){for(var t in this.ctx.strokeStyle="#ccc",this.ctx.rect(this.x,this.y,320,320),h.a.range(10))for(var e in h.a.range(10)){var s=parseInt(t+e);this.ctx.fillStyle=h.a.sample(this.colors),this.blockColors[s]=this.ctx.fillStyle,this.ctx.fillRect(this.x+32*e,this.y+32*t,30,30)}this.ctx.stroke(),this.ctx.beginPath()},restartGame:function(){this.currentSource=0,this.step=1,this.targetSource=1500,this.showStepOverTip=!1,this.over=!1,this.startGame()},gameOver:function(){var t=this;this.lessCount=h.a.size(this.blockColors),this.stepOverSource=this.lessCount>10?0:100*(10-this.lessCount),this.showStepOverTip=!0,this.currentSource+=this.stepOverSource,this.currentSource<this.targetSource?this.over=!0:(this.step+=1,this.targetSource=1500+3e3*(this.step-1),setTimeout(function(){t.showStepOverTip=!1,t.startGame()},2e3))},init:function(){this.startGame()}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("canvas",{attrs:{id:"myCanvas"},on:{click:t.click}}),t._v(" "),s("div",{staticClass:"game-panel"},[s("div",[t._v("第"+t._s(t.step)+"关")]),t._v(" "),s("div",[t._v("目标分数： "+t._s(t.targetSource))]),t._v(" "),s("div",[t._v("当前分数： "+t._s(t.currentSource))]),t._v(" "),t.showTip?s("div",{staticClass:"tip"},[t._v("消除"+t._s(t.clearCount)+"个，获得"+t._s(t.source)+"分")]):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showStepOverTip,expression:"showStepOverTip"}],staticClass:"tip"},[t._v("剩余"+t._s(t.lessCount)+"个，奖励"+t._s(t.stepOverSource)+"分")])]),t._v(" "),t.over?s("div",{staticClass:"game-over"},[s("div",{staticClass:"over-text"},[t._v("游戏结束")]),t._v(" "),s("div",{staticClass:"restart",on:{click:t.restartGame}},[t._v("重新开始")])]):t._e()])},staticRenderFns:[]};var _=s("VU/8")(b,x,!1,function(t){s("fSXl")},"data-v-7d5360b0",null).exports,w={name:"DragBlock",data:function(){return{blockColor:[],dragColor:[],dragBlock:{size:2,type:"square"},source:0,isOver:!1}},created:function(){console.warn("Design by Kody Wang, Thank you, play my game!"),this.changeDragBlock()},methods:{restart:function(){this.isOver=!1,this.blockColor=[],this.source=0,this.changeDragBlock()},hasColor:function(t){return h.a.indexOf(this.blockColor,t)>-1},dragHasColor:function(t){return h.a.indexOf(this.dragColor,t)>-1},changeDragBlock:function(){this.dragColor=[],this.dragBlock.type=h.a.sample(["row-line","col-line","square","square-bend-top-left","square-bend-top-right","square-bend-bottom-left","square-bend-bottom-right"]),this.dragBlock.type.indexOf("line")>-1?this.dragBlock.size=h.a.random(1,5):this.dragBlock.size=h.a.random(2,3),this.dragColor=this.getIndexs([],10),this.checkIsOver()},start:function(t){this.moveBlock=this.$refs.moveBlock},move:function(t){t.preventDefault(),this.moveBlock.style.position="fixed",this.moveBlock.style.top=t.touches[0].pageY-60+"px",this.moveBlock.style.left=t.touches[0].pageX-30+"px"},end:function(t){var e=Math.round((t.changedTouches[0].pageX-(window.innerWidth-320)/2)/32),s=10*Math.round(t.changedTouches[0].pageY/32)+e-1-10;this.pushBlock(s),this.moveBlock.style.position="static"},pushBlock:function(t){var e=this.getIndexs([],t),s=!0;if(!h.a.isEmpty(e)){var i=!0,n=!1,a=void 0;try{for(var o,r=m()(e);!(i=(o=r.next()).done);i=!0){var c=o.value;(this.hasColor(c)||c<10||c>109)&&(s=!1)}}catch(t){n=!0,a=t}finally{try{!i&&r.return&&r.return()}finally{if(n)throw a}}if(s){var l=!0,u=!1,d=void 0;try{for(var v,f=m()(e);!(l=(v=f.next()).done);l=!0){var k=v.value;this.blockColor.push(k)}}catch(t){u=!0,d=t}finally{try{!l&&f.return&&f.return()}finally{if(u)throw d}}this.source+=e.length,this.checkIsLine(),this.changeDragBlock()}}},checkIsLine:function(){var t=this,e=h.a.groupBy(this.blockColor,function(t){return t%10}),s=h.a.groupBy(this.blockColor,function(t){return parseInt(t/10)});h.a.each(e,function(e){10===e.length&&(t.blockColor=h.a.difference(t.blockColor,e),t.source+=10)}),h.a.each(s,function(e){10===e.length&&(t.blockColor=h.a.difference(t.blockColor,e),t.source+=10)})},checkIsOver:function(){var t=h.a.range(10,110),e=h.a.difference(t,this.blockColor),s=!0,i=!1,n=void 0;try{for(var a,o=m()(e);!(s=(a=o.next()).done);s=!0){var r=a.value,c=!0,l=this.getIndexs([],r);if(h.a.isEmpty(l))c=!1;else{var u=!0,d=!1,v=void 0;try{for(var f,k=m()(l);!(u=(f=k.next()).done);u=!0){var p=f.value;(this.hasColor(p)||p<10||p>109)&&(c=!1)}}catch(t){d=!0,v=t}finally{try{!u&&k.return&&k.return()}finally{if(d)throw v}}}if(c)return}}catch(t){i=!0,n=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw n}}this.isOver=!0},getIndexs:function(t,e){if("row-line"===this.dragBlock.type)for(var s=0;s<this.dragBlock.size;s++){if(parseInt((e+s)/10)!==parseInt(e/10))return[];t.push(e+s)}if("col-line"===this.dragBlock.type)for(var i=0;i<10*this.dragBlock.size;i+=10)t.push(e+i);if(this.dragBlock.type.indexOf("square")>-1&&10-e%10<this.dragBlock.size)return[];if("square"===this.dragBlock.type)for(var n=0;n<10*this.dragBlock.size;n+=10)for(var a=0;a<this.dragBlock.size;a++)t.push(e+n+a);if("square-bend-top-left"===this.dragBlock.type){for(var o=0;o<this.dragBlock.size;o++)t.push(e+o);for(var r=0;r<10*this.dragBlock.size;r+=10)t.push(e+r)}if("square-bend-top-right"===this.dragBlock.type){for(var c=0;c<this.dragBlock.size;c++)t.push(e+c);for(var l=0;l<10*this.dragBlock.size;l+=10)t.push(e+this.dragBlock.size-1+l)}if("square-bend-bottom-left"===this.dragBlock.type){for(var u=0;u<this.dragBlock.size;u++)t.push(e+10*(this.dragBlock.size-1)+u);for(var d=0;d<10*this.dragBlock.size;d+=10)t.push(e+d)}if("square-bend-bottom-right"===this.dragBlock.type){for(var v=0;v<this.dragBlock.size;v++)t.push(e+10*(this.dragBlock.size-1)+v);for(var f=0;f<10*this.dragBlock.size;f+=10)t.push(e+this.dragBlock.size-1+f)}return h.a.uniq(t)}}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"game-panel"},t._l(10,function(e){return s("div",{key:e+"row",staticClass:"row"},t._l(10,function(i){return s("div",{key:i+"col",staticClass:"col",class:{red:t.hasColor(10*e+i-1)}})}))})),t._v(" "),s("div",{staticClass:"game-panel"},[t._v("得分："+t._s(t.source))]),t._v(" "),s("div",{staticClass:"game-panel move-panel"},[s("div",{ref:"moveBlock",staticClass:"drag-wrap",on:{touchstart:t.start,touchmove:t.move,touchend:t.end}},t._l(5,function(e){return s("div",{key:e+"drag-row",staticClass:"row"},t._l(5,function(i){return s("div",{key:i+"drag-col",staticClass:"col white",class:{red:t.dragHasColor(10*e+i-1)}})}))}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOver,expression:"isOver"}],staticClass:"over-panel"},[s("div",{staticClass:"over-text"},[t._v("无处可放")]),t._v(" "),s("div",[t._v("最终得分： "+t._s(t.source))]),t._v(" "),s("span",{staticClass:"restart",on:{click:t.restart}},[t._v("重新开始")])])])},staticRenderFns:[]};var B=s("VU/8")(w,j,!1,function(t){s("OX0+")},"data-v-eeee302c",null).exports,D={name:"Canvas",data:function(){return{x:0,y:0,color:"#000",size:1}},computed:{isPc:function(){for(var t=navigator.userAgent.toLowerCase(),e=["android","iphone","symbianos","windows phone","ipad","ipod"],s=!0,i=0;i<e.length;i++)if(t.indexOf(e[i])>0){s=!1;break}return s}},mounted:function(){this.canvas=document.getElementById("myCanvas"),this.ctx=this.canvas.getContext("2d")},methods:{start:function(t){this.x=t.touches[0].pageX-t.touches[0].target.offsetLeft,this.y=t.touches[0].pageY-t.touches[0].target.offsetTop,this.ctx.moveTo(this.x,this.y),this.ctx.lineTo(this.x+1,this.y+1),this.ctx.stroke(),this.ctx.beginPath()},move:function(t){t.preventDefault(),this.ctx.moveTo(this.x,this.y);var e=t.touches[0].pageX-t.touches[0].target.offsetLeft,s=t.touches[0].pageY-t.touches[0].target.offsetTop;this.ctx.lineTo(e,s),this.x=e,this.y=s,this.ctx.stroke(),this.ctx.beginPath()},end:function(t){},mouseDown:function(t){this.drawing=!0,this.x=t.offsetX,this.y=t.offsetY,this.ctx.moveTo(this.x,this.y),this.ctx.lineTo(this.x+1,this.y+1),this.ctx.stroke(),this.ctx.beginPath()},mouseMove:function(t){if(this.drawing){t.preventDefault(),this.ctx.moveTo(this.x,this.y);var e=t.offsetX,s=t.offsetY;this.ctx.lineTo(e,s),this.x=e,this.y=s,this.ctx.stroke(),this.ctx.beginPath()}},mouseUp:function(t){this.drawing=!1},clearCanvas:function(){this.color="#000",this.size=1,this.canvas.height=this.canvas.height},changeColor:function(t){this.color=t,this.ctx.strokeStyle=t},changeLineWidth:function(t){this.size=t,this.ctx.lineWidth=t},getImage:function(){var t=document.createElement("img");t.src=this.canvas.toDataURL("image/png");var e=this.$refs.imageBox;e.hasChildNodes()?e.replaceChild(t,e.lastChild):e.appendChild(t)}}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"draw-container"},[t.isPc?s("canvas",{attrs:{id:"myCanvas",width:"300",height:"300"},on:{mousedown:function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?"button"in e&&0!==e.button?null:t.mouseDown(e):null},mousemove:t.mouseMove,mouseup:t.mouseUp}}):s("canvas",{attrs:{id:"myCanvas",width:"300",height:"300"},on:{touchstart:t.start,touchmove:t.move,touchend:t.end}}),t._v(" "),s("div",{staticClass:"footer"},[s("div",{on:{click:t.clearCanvas}},[t._v("清空")]),t._v(" "),s("div",{staticClass:"red",class:{active:"red"==t.color},on:{click:function(e){t.changeColor("red")}}}),t._v(" "),s("div",{staticClass:"yellow",class:{active:"yellow"==t.color},on:{click:function(e){t.changeColor("yellow")}}}),t._v(" "),s("div",{staticClass:"green",class:{active:"green"==t.color},on:{click:function(e){t.changeColor("green")}}}),t._v(" "),s("div",{staticClass:"black",class:{active:"#000"==t.color},on:{click:function(e){t.changeColor("#000")}}}),t._v(" "),s("div",{class:{active:"#fff"==t.color},on:{click:function(e){t.changeColor("#fff")}}},[t._v("橡皮")]),t._v(" "),s("div",{staticClass:"width1",class:{active:1==t.size},on:{click:function(e){t.changeLineWidth(1)}}}),t._v(" "),s("div",{staticClass:"width2",class:{active:2==t.size},on:{click:function(e){t.changeLineWidth(2)}}}),t._v(" "),s("div",{staticClass:"width3",class:{active:3==t.size},on:{click:function(e){t.changeLineWidth(3)}}}),t._v(" "),s("div",{staticClass:"width5",class:{active:5==t.size},on:{click:function(e){t.changeLineWidth(5)}}})]),t._v(" "),s("div",{on:{click:t.getImage}},[t._v("生成图片("+t._s(t.isPc?"可右键图片另存":"可长按保存")+")")]),t._v(" "),s("div",{ref:"imageBox"})])},staticRenderFns:[]};var z=s("VU/8")(D,O,!1,function(t){s("6L1D")},"data-v-764d2539",null).exports,I={data:function(){return{blockCount:20,colors:["red","yellow","blue","green"],blockColors:{}}},created:function(){this.init()},computed:{blockSize:function(){return 1/this.blockCount*100+"%"}},methods:{clearBlock:function(t){this.selectedColor=t,console.log(Date.now()),this.getNeedCleanBlock(1,[1],this.changeSelectColor)},changeSelectColor:function(){var t=p()({},this.blockColors),e=!0,s=!1,i=void 0;try{for(var n,a=m()(this.needCleanBlock);!(e=(n=a.next()).done);e=!0){t[n.value]=this.selectedColor}}catch(t){s=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(s)throw i}}this.blockColors=t},getNeedCleanBlock:function(t,e,s){var i=this.blockColors[t],n=!1;t%this.blockCount!=0&&-1===h.a.indexOf(e,t+1)&&i===this.blockColors[t+1]&&(n=!0,e.push(t+1),this.getNeedCleanBlock(t+1,e,s)),t%this.blockCount!=1&&-1===h.a.indexOf(e,t-1)&&i===this.blockColors[t-1]&&(n=!0,e.push(t-1),this.getNeedCleanBlock(t-1,e,s)),-1===h.a.indexOf(e,t+this.blockCount)&&i===this.blockColors[t+this.blockCount]&&(n=!0,e.push(t+this.blockCount),this.getNeedCleanBlock(t+this.blockCount,e,s)),-1===h.a.indexOf(e,t-this.blockCount)&&i===this.blockColors[t-this.blockCount]&&(n=!0,e.push(t-this.blockCount),this.getNeedCleanBlock(t-this.blockCount,e,s)),n||(this.needCleanBlock=e,console.log("finished",e,Date.now()),s())},init:function(){for(var t=1;t<=this.blockCount*this.blockCount;t++)this.blockColors[t]=h.a.sample(this.colors)}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"color-container"},[s("div",{staticClass:"game-panel"},t._l(t.blockCount*t.blockCount,function(e,i){return s("div",{key:i,style:"width: "+t.blockSize+"; height: "+t.blockSize+";"},[s("div",{staticClass:"col-item",class:t.blockColors[e]})])})),t._v(" "),s("div",{staticClass:"color-btn-wrap"},t._l(t.colors,function(e){return s("div",{key:e,staticClass:"color-btn",class:e,on:{click:function(s){t.clearBlock(e)}}})})),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rule-wrap"},[e("div",[this._v("游戏规则：")]),this._v(" "),e("div",[this._v("点击下方色块，以左上角为原点，逐步吞噬相邻颜色，直到所有颜色统一")])])}]};var F=s("VU/8")(I,S,!1,function(t){s("dMV+")},"data-v-3eafb831",null).exports,M=s("PJh5"),T=s.n(M),Y={props:["startDate","endDate","dates"],data:function(){return{year:parseInt(T()().format("YYYY")),mounth:parseInt(T()().format("MM")),thisMounth:parseInt(T()().format("MM")),today:parseInt(T()().format("DD")),weeks:["日","一","二","三","四","五","六"],activeDay:null,activeMounth:null,selectDay:[]}},created:function(){T.a.locale("zh-cn")},computed:{startDateFormat:function(){return T()(this.startDate).subtract(1,"days").format("YYYY-MMDD")},endDateFormat:function(){return T()(this.endDate).add(1,"days").format("YYYY-MMDD")},datesFormat:function(){return h.a.map(this.dates,function(t){return T()(t).format("YYYY-MMDD")})},mounthFormat:function(){return this.mounth<10?"0"+this.mounth:this.mounth},getDays:function(){var t=this,e=[],s=h.a.indexOf(this.weeks,T()(this.year+"-"+this.mounthFormat+"-01").format("dd")),i=T()(this.year+"-"+this.mounthFormat).daysInMonth();return h.a.range(s).map(function(){e.push({day:"",disable:!0})}),h.a.range(1,i+1).map(function(s){e.push({day:s,disable:!t.isBetween(s)})}),e}},methods:{lastMounth:function(){this.mounth>1?this.mounth-=1:(this.year-=1,this.mounth=12)},nextMounth:function(){this.mounth<12?this.mounth+=1:(this.year+=1,this.mounth=1)},isBetween:function(t){if(this.startDate&&this.endDate)return T()(this.year+"-"+this.mounthFormat+"-"+t).isBetween(this.startDateFormat,this.endDateFormat);if(this.dates&&this.dates.length>0){var e=T()(this.year+"-"+this.mounthFormat+"-"+t).format("YYYY-MMDD");return h.a.indexOf(this.datesFormat,e)>-1}return!0},selectDate:function(t){if(t)if(this.startDate&&this.endDate)T()(this.year+"-"+this.mounthFormat+"-"+t).isBetween(this.startDateFormat,this.endDateFormat)&&(this.activeDay=t,this.activeMounth=this.mounthFormat,this.$emit("selectedDate",T()(this.year+"-"+this.activeMounth+"-"+this.activeDay).format("YYYY-MMDD")));else if(this.dates&&this.dates.length>0){var e=T()(this.year+"-"+this.mounthFormat+"-"+t).format("YYYY-MMDD");h.a.indexOf(this.datesFormat,e)>-1&&(this.activeDay=t,this.activeMounth=this.mounthFormat,this.$emit("selectedDate",T()(this.year+"-"+this.activeMounth+"-"+this.activeDay).format("YYYY-MMDD")))}else this.activeDay=t,this.activeMounth=this.mounthFormat,this.$emit("selectedDate",T()(this.year+"-"+this.activeMounth+"-"+this.activeDay).format("YYYY-MMDD"))}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"date-select-container"},[s("div",{},[s("div",{staticClass:"mounth-wrap"},[s("div",{staticClass:"last",on:{click:t.lastMounth}}),t._v(" "),s("div",[t._v(t._s(t.year)+"年"+t._s(t.mounth)+"月")]),t._v(" "),s("div",{staticClass:"next",on:{click:t.nextMounth}})]),t._v(" "),s("div",{staticClass:"week-wrap font-size-12"},t._l(t.weeks,function(e,i){return s("div",{key:i,staticClass:"week-item"},[t._v(t._s(e))])})),t._v(" "),s("div",{staticClass:"day-wrap font-size-14"},t._l(t.getDays,function(e,i){return s("div",{key:i,staticClass:"day",class:{today:e.day==t.today&&t.mounth==t.thisMounth,active:e.day==t.activeDay&&t.mounth==t.activeMounth,disable:e.disable},on:{click:function(s){t.selectDate(e.day)}}},[s("div",{staticClass:"day-text"},[t._v(t._s(e.day))])])}))])])},staticRenderFns:[]};var R=s("VU/8")(Y,N,!1,function(t){s("MACr")},"data-v-df96b062",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"abort-container"},[s("div",[s("h2",{staticStyle:{"text-align":"center"}},[t._v("关于作品")]),t._v(" "),s("p",[t._v("\n      这个游戏集合是我平时利用空余时间边想边写，慢慢积累出来的（还在持续更新中，后续还会有新的游戏加入）。\n      目的是为了更好的掌握前端相关知识和技能，同时也完成了我儿时的心愿（我终于也能写出来游戏了！！！），\n      游戏界面超级简陋，没有任何美化，原谅我只有一双程序猿的手，没有一颗设计师的心，界面美化和交互设计只能等后面有空再整整了。\n    ")]),t._v(" "),s("p",[t._v("大家玩的开心就好，欢迎提issue。")]),t._v(" "),s("p",[t._v("源码地址："),s("a",{attrs:{href:"https://github.com/kodyWang1994"}},[t._v("https://github.com/kodyWang1994")])]),t._v(" "),s("p",[t._v("欢迎提意见报bug！谢谢大家！")])])])}]};var q=s("VU/8")({},E,!1,function(t){s("xbiN")},"data-v-7968dbf9",null).exports;i.a.use(o.a);var P=new o.a({routes:[{path:"/",name:"Home",component:c},{path:"/snake",name:"Snake",component:v},{path:"/eliminate",name:"Eliminate",component:y},{path:"/pop-block",name:"PopBlock",component:_},{path:"/drag-block",name:"DragBlock",component:B},{path:"/draw",name:"Draw",component:z},{path:"/color",name:"Color",component:F},{path:"/date",name:"Date",component:R},{path:"/abort-us",name:"AbortUs",component:q}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:P,components:{App:a},template:"<App/>"})},"OX0+":function(t,e){},"dMV+":function(t,e){},fSXl:function(t,e){},tUXl:function(t,e){},uslO:function(t,e,s){var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(a(t))}function a(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id="uslO"},xbiN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eb3401e0d8dccebb6596.js.map