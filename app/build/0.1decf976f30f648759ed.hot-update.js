webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,o){(function(t){o(82),o(47),o(48),o(52),o(78),t.tag2("curve-editor",'<icons></icons> <resize-handle type="top"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <curve adc="{this.CLASSES[\'curve-editor__right\']}"></curve>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";var e=this;o(43),this.CLASSES=o(56);var s=o(77),i=t,r=i.store;r.subscribe(this.update.bind(this)),this.on("mount",function(){var t=new s(e.root,{});t.on("pan",function(t){e.x=t.deltaX,e.y=t.deltaY,e.update()}),t.on("panend",function(t){var o=t.deltaX,s=t.deltaY,i=r.getState().present.translate;e.x=e.y=0,r.dispatch({type:"EDITOR_TRANSLATE",data:{x:i.x+o,y:i.y+s}})})}),this.getStyle=function(){var t=r.getState().present.translate,o=(e.x||0)+t.x,s=(e.y||0)+t.y,i="transform: translate("+o+"px, "+s+"px)";return""+mojs.h.prefix.css+i+"; "+i}})}).call(e,o(2))}});