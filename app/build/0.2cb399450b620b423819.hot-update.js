webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,s){(function(t){s(82),s(47),s(48),s(52),s(78),t.tag2("curve-editor",'<icons></icons> <resize-handle type="top" store="{this.opts.store}"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <curve adc="{this.CLASSES[\'curve-editor__right\']}"></curve>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";var e=this;s(43),this.CLASSES=s(56);var o=s(77),i=t,r=i.store;r.subscribe(this.update.bind(this)),this.on("mount",function(){var t=new o(e.root,{});t.on("pan",function(t){e.x=t.deltaX,e.y=t.deltaY,e.update()}),t.on("panend",function(t){var s=t.deltaX,o=t.deltaY,i=r.getState().present.translate;e.x=e.y=0,r.dispatch({type:"EDITOR_TRANSLATE",data:{x:i.x+s,y:i.y+o}})})}),this.getStyle=function(){var t=r.getState().present.translate,s=(e.x||0)+t.x,o=(e.y||0)+t.y,i="transform: translate("+s+"px, "+o+"px)";return""+mojs.h.prefix.css+i+"; "+i}})}).call(e,s(2))}});