webpackHotUpdatemojs_curve_editor(0,{82:function(t,a,e){(function(t){t.tag2("resize-handle",'<div style="width:100px;height: 100px; background: #000;"></div> <icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=this,o=e(86),p=a(o),i=e(87),n=a(i),l=e(77);l=(0,n["default"])(l);var d=this.opts.type.type,c=e(85);this.applyClass=c["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+c["resize-handle--"+this.opts.type],e(83),e(50),this.on("mount",function(){new l(s.root).on("tap",function(t){console.log("tap");var a=t.deltaX,e=t.deltaY;p["default"].dispatch({type:"EDITOR_RESIZE",data:{x:a,y:e,type:d}}),t.stopPropagation()}).on("tapend",function(t){console.log("tapend");var a=t.deltaX,e=t.deltaY;p["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:a,y:e,type:d}}),t.stopPropagation()})})})}).call(a,e(2))}});