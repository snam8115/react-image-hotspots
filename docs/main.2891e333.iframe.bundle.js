(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./ImageHotspots.stories.js":"./src/ImageHotspots.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/ImageHotspots.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return ImageHotspots_stories_Default})),__webpack_require__.d(__webpack_exports__,"LandscapeInLandscape",(function(){return ImageHotspots_stories_LandscapeInLandscape})),__webpack_require__.d(__webpack_exports__,"LandscapeInPortrait",(function(){return ImageHotspots_stories_LandscapeInPortrait})),__webpack_require__.d(__webpack_exports__,"PortraitInPortrait",(function(){return ImageHotspots_stories_PortraitInPortrait})),__webpack_require__.d(__webpack_exports__,"PortraitInLandscape",(function(){return ImageHotspots_stories_PortraitInLandscape})),__webpack_require__.d(__webpack_exports__,"CustomBackground",(function(){return ImageHotspots_stories_CustomBackground}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Hotspot_Hotspot=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Hotspot,_React$Component);var _super=_createSuper(Hotspot);function Hotspot(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Hotspot),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Hotspot,[{key:"render",value:function render(){var _this$props=this.props,x=_this$props.x,y=_this$props.y,content=_this$props.content,_this$props$style=_this$props.style,style=void 0===_this$props$style?{fontFamily:"Sans-Serif",background:"white",boxShadow:"0px 0px 2px 0px rgba(0,0,0,0.5)",pointerEvents:"auto"}:_this$props$style,hotspotStyle=Object.assign({position:"absolute",display:"block",top:y+"%",left:x+"%"},style);return Object(jsx_runtime.jsx)("div",{style:hotspotStyle,children:content})}}]),Hotspot}(react_default.a.Component);Hotspot_Hotspot.propTypes={x:prop_types_default.a.number,y:prop_types_default.a.number,content:prop_types_default.a.element,style:prop_types_default.a.object},Hotspot_Hotspot.__docgenInfo={description:"",methods:[],displayName:"Hotspot",props:{x:{description:"percentage from the left of the image to show this hotspot",type:{name:"number"},required:!1},y:{description:"percentage from the top of the image to show this hotspot",type:{name:"number"},required:!1},content:{description:"the content of the hotspot",type:{name:"element"},required:!1},style:{description:"the style of the hotspot",type:{name:"object"},required:!1}}};var src_Hotspot=Hotspot_Hotspot;function ImageHotspots_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function ImageHotspots_toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function ImageHotspots_setPrototypeOf(o,p){return ImageHotspots_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},ImageHotspots_setPrototypeOf(o,p)}function ImageHotspots_createSuper(Derived){var hasNativeReflectConstruct=function ImageHotspots_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=ImageHotspots_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=ImageHotspots_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function ImageHotspots_possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function ImageHotspots_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function ImageHotspots_getPrototypeOf(o){return ImageHotspots_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},ImageHotspots_getPrototypeOf(o)}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hotspot.js"]={name:"Hotspot",docgenInfo:Hotspot_Hotspot.__docgenInfo,path:"src/Hotspot.js"});var ImageHotspots_ImageHotspots=function(_React$Component){!function ImageHotspots_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&ImageHotspots_setPrototypeOf(subClass,superClass)}(ImageHotspots,_React$Component);var _super=ImageHotspots_createSuper(ImageHotspots);function ImageHotspots(props){var _this;return function ImageHotspots_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ImageHotspots),(_this=_super.call(this,props)).componentDidMount=function(){var _this$props=_this.props,hideFullscreenControl=_this$props.hideFullscreenControl,hideZoomControls=_this$props.hideZoomControls,hideMinimap=_this$props.hideMinimap,hotspots=_this$props.hotspots,background=_this$props.background,_this$container$curre=_this.container.current,width=_this$container$curre.offsetWidth,height=_this$container$curre.offsetHeight,orientation=width>height?"landscape":"portrait",ratio="landscape"===orientation?width/height:height/width;_this.setState({container:{width:width,height:height,ratio:ratio,orientation:orientation,background:background},hideFullscreenControl:hideFullscreenControl,hideZoomControls:hideZoomControls,hideMinimap:hideMinimap,hotspots:hotspots}),window.addEventListener("resize",_this.onWindowResize)},_this.componentWillUnmount=function(){window.removeEventListener("resize",_this.onWindowResize)},_this.startDrag=function(event,element){var cursorX=event.clientX,cursorY=event.clientY;"image"===element&&_this.setState((function(state){return Object.assign({},state,{cursorX:cursorX,cursorY:cursorY,dragging:!0})})),event.preventDefault()},_this.whileDrag=function(event){var _this$state=_this.state,image=_this$state.image,minimap=_this$state.minimap,cursorX=event.clientX,cursorY=event.clientY,deltaX=cursorX-_this.state.cursorX,deltaY=cursorY-_this.state.cursorY,newOffsetX=image.offsetX+deltaX,newOffsetY=image.offsetY+deltaY;_this.setState((function(state){return Object.assign({},state,{cursorX:cursorX,cursorY:cursorY,image:Object.assign({},image,{offsetX:newOffsetX,offsetY:newOffsetY}),minimap:Object.assign({},minimap,{offsetX:-minimap.width/image.width*newOffsetX,offsetY:-minimap.height/image.height*newOffsetY})})}))},_this.stopDrag=function(){var _this$state2=_this.state,container=_this$state2.container,image=_this$state2.image,minimap=_this$state2.minimap,deltaX=container.width-image.width-image.offsetX,deltaY=container.height-image.height-image.offsetY,offsetXMax=container.orientation===image.orientation?-Math.abs(image.width-container.width):-Math.abs(container.width-image.width),offsetYMax=container.orientation===image.orientation?-Math.abs(container.height-image.height):-Math.abs(image.height-container.height);_this.setState((function(state){return Object.assign({},state,{image:Object.assign({},state.image,{offsetX:image.offsetX>=0?0:deltaX>=0?offsetXMax:image.offsetX,offsetY:image.offsetY>=0?container.height>image.height?container.height/2-image.height/2:0:deltaY>=0?container.height>image.height?container.height/2-image.height/2:offsetYMax:image.offsetY}),minimap:Object.assign({},state.minimap,{offsetX:image.offsetX>=0||image.width<container.width?0:deltaX>=0?-minimap.height/image.height*offsetXMax:-minimap.height/image.height*image.offsetX,offsetY:image.offsetY>=0||image.height<container.height?0:deltaY>=0?-minimap.height/image.height*offsetYMax:-minimap.height/image.height*image.offsetY}),dragging:!1})}))},_this.onImageLoad=function(_ref){var image=_ref.target,initialWidth=image.offsetWidth,initialHeight=image.offsetHeight,_this$state3=_this.state,container=_this$state3.container,minimap=_this$state3.minimap,hideZoomControls=_this$state3.hideZoomControls,hideMinimap=_this$state3.hideMinimap,orientation=initialWidth>initialHeight?"landscape":"portrait",ratio="landscape"===orientation?initialWidth/initialHeight:initialHeight/initialWidth,width=container.orientation===orientation?"landscape"===orientation?ratio>=container.ratio?container.width:container.height*ratio:ratio>=container.ratio?container.height/ratio:container.width:"landscape"===orientation?container.width:container.height/ratio,height=container.orientation===orientation?"landscape"===orientation?ratio>=container.ratio?container.width/ratio:container.height:ratio>=container.ratio?container.height:container.width*ratio:"landscape"===orientation?container.width/ratio:container.height,resizable=initialWidth>width||initialHeight>height;_this.setState((function(prevState){return Object.assign({},prevState,{image:Object.assign({},prevState.image,{initialWidth:initialWidth,initialHeight:initialHeight,width:width,height:height,scale:1,ratio:ratio,orientation:orientation,offsetX:0,offsetY:container.height/2-height/2}),minimap:Object.assign({},minimap,{width:"landscape"===orientation?minimap.initialSize:minimap.initialSize/ratio,height:"portrait"===orientation?minimap.initialSize:minimap.initialSize/ratio,guideWidth:"landscape"===orientation?minimap.initialSize:minimap.initialSize/ratio,guideHeight:"portrait"===orientation?minimap.initialSize:minimap.initialSize/ratio}),hideZoomControls:hideZoomControls||!resizable,hideMinimap:hideMinimap||!resizable,resizable:resizable,draggable:!1})}))},_this.onWindowResize=function(){var _this$container$curre2=_this.container.current,width=_this$container$curre2.offsetWidth,height=_this$container$curre2.offsetHeight,orientation=width>height?"landscape":"portrait",ratio="landscape"===orientation?width/height:height/width;_this.setState({container:{width:width,height:height,ratio:ratio,orientation:orientation}}),_this.zoom(_this.state.image.scale)},_this.toggleFullscreen=function(){_this.state.fullscreen?(_this.exitFullscreen(),_this.setState({fullscreen:!1})):(_this.requestFullscreen(_this.container.current),_this.setState({fullscreen:!0}))},_this.zoom=function(scale){if(scale>0){var _this$state4=_this.state,container=_this$state4.container,image=_this$state4.image,minimap=_this$state4.minimap,width=container.orientation===image.orientation?"landscape"===image.orientation?image.ratio>=container.ratio?container.width*scale:container.height*image.ratio*scale:image.ratio>=container.ratio?container.height/image.ratio*scale:container.width*scale:"landscape"===image.orientation?container.width*scale:container.height/image.ratio*scale,height=container.orientation===image.orientation?"landscape"===image.orientation?image.ratio>=container.ratio?container.width/image.ratio*scale:container.height*scale:image.ratio>=container.ratio?container.height*scale:container.width*image.ratio*scale:"landscape"===image.orientation?container.width/image.ratio*scale:container.height*scale,guideWidth=container.width>=width?minimap.width:minimap.width/(width/container.width),guideHeight=container.height>=height?minimap.height:minimap.height/(height/container.height),deltaX=Math.round(width-image.width),deltaY=Math.round(height-image.height),guideDeltaX=Math.round(guideWidth-minimap.guideWidth),guideDeltaY=Math.round(guideHeight-minimap.guideHeight),offsetX=image.offsetX-deltaX/2,offsetY=image.offsetY-deltaY/2,guideOffsetX=Math.round(minimap.offsetX-guideDeltaX/2),guideOffsetY=Math.round(minimap.offsetY-guideDeltaY/2),offsetXMax=-Math.abs(Math.round(container.width-width)),offsetYMax=-Math.abs(Math.round(container.height-height)),guideOffsetXMax=Math.round(minimap.width-guideWidth),guideOffsetYMax=Math.round(minimap.height-guideHeight);image.initialWidth>width&&image.initialHeight>height&&_this.setState((function(prevState){return{image:Object.assign({},prevState.image,{width:width,height:height,scale:scale,offsetX:offsetX>=0||container.width>width?0:image.offsetX<=offsetXMax?offsetXMax:offsetX,offsetY:container.height>height?container.height/2-height/2:offsetY>=0?0:image.offsetY<offsetYMax?offsetYMax:offsetY}),minimap:Object.assign({},prevState.minimap,{guideWidth:guideWidth,guideHeight:guideHeight,offsetX:guideOffsetX<=0?0:minimap.offsetX<guideOffsetXMax?guideOffsetX:guideOffsetXMax,offsetY:guideOffsetY<=0||height<container.height?0:minimap.offsetY<guideOffsetYMax?guideOffsetY:guideOffsetYMax}),draggable:scale>1}})),1===scale&&_this.setState((function(prevState){return{image:Object.assign({},prevState.image,{offsetX:0,offsetY:container.height/2-height/2}),minimap:Object.assign({},prevState.minimap,{offsetX:0,offsetY:0})}}))}},_this.requestFullscreen=function(element){element.requestFullscreen?element.requestFullscreen():element.mozRequestFullScreen?element.mozRequestFullScreen():element.webkitRequestFullscreen?element.webkitRequestFullscreen():element.msRequestFullscreen&&element.msRequestFullscreen()},_this.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},_this.render=function(){var _this$props2=_this.props,src=_this$props2.src,alt=_this$props2.alt,hotspots=_this$props2.hotspots,background=_this$props2.background,_this$state5=_this.state,container=_this$state5.container,image=_this$state5.image,minimap=_this$state5.minimap,fullscreen=_this$state5.fullscreen,dragging=_this$state5.dragging,hideFullscreenControl=_this$state5.hideFullscreenControl,hideZoomControls=_this$state5.hideZoomControls,hideMinimap=_this$state5.hideMinimap,draggable=_this$state5.draggable,imageLoaded=image.initialWidth&&image.initialHeight,containerStyle={width:"100%",height:"100%",position:"relative",overflow:"hidden",textAlign:"center",background:background||container.background},imageStyle={position:"relative",left:image.offsetX,top:image.offsetY},hotspotsStyle={position:"absolute",top:image.offsetY,left:image.offsetX,right:image.offsetX>=0?0:"auto",margin:"auto",pointerEvents:"none"},topControlsStyle={position:"absolute",top:10,right:10,pointerEvents:_this.state.dragging?"none":"auto"},bottomControlsStyle={position:"absolute",bottom:10,right:10,pointerEvents:_this.state.dragging?"none":"auto"},buttonStyle={width:"25px",height:"25px",border:"none",background:"#fff",boxShadow:"0px 0px 2px 0px rgba(0,0,0,0.5)"},minimapStyle={width:minimap.width,height:minimap.height,position:"absolute",display:"block",bottom:10,left:10,background:"#fff",boxShadow:"0px 0px 2px 0px rgba(0,0,0,0.5)",pointerEvents:"none"},guideStyle={width:minimap.guideWidth,height:minimap.guideHeight,position:"absolute",display:"block",left:minimap.offsetX,top:minimap.offsetY,border:"1px solid rgba(64, 139, 252, 0.8)",background:"rgba(64, 139, 252, 0.1)",pointerEvents:"none"};return imageLoaded&&("landscape"===container.orientation?imageStyle.height=image.height:imageStyle.width=image.width,"landscape"===image.orientation?(hotspotsStyle.width=image.width,hotspotsStyle.height=image.width/image.ratio):(hotspotsStyle.width=image.height/image.ratio,hotspotsStyle.height=image.height)),Object(jsx_runtime.jsxs)("div",{ref:_this.container,style:containerStyle,onMouseOut:function onMouseOut(event){dragging&&_this.stopDrag(event)},onBlur:function onBlur(event){dragging&&_this.stopDrag(event)},children:[src&&Object(jsx_runtime.jsx)("img",{src:src,alt:alt,onLoad:_this.onImageLoad,style:imageStyle,onMouseDown:function onMouseDown(event){!hideZoomControls&&draggable&&_this.startDrag(event,"image")},onMouseMove:function onMouseMove(event){!hideZoomControls&&dragging&&_this.whileDrag(event)},onMouseUp:function onMouseUp(event){dragging&&_this.stopDrag(event)}}),hotspots&&Object(jsx_runtime.jsx)("div",{style:hotspotsStyle,children:hotspots.map((function(hotspot,i){return Object(jsx_runtime.jsx)(src_Hotspot,Object.assign({},hotspot),i)}))}),!hideFullscreenControl&&Object(jsx_runtime.jsx)("div",{style:topControlsStyle,children:Object(jsx_runtime.jsx)("button",{style:buttonStyle,onClick:function onClick(){return _this.toggleFullscreen()},children:fullscreen?"X":"FS"})}),!hideZoomControls&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)("div",{style:bottomControlsStyle,children:[draggable&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("button",{style:buttonStyle,onClick:function onClick(){return _this.zoom(1)},children:"Fit"}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{})]}),Object(jsx_runtime.jsx)("button",{style:buttonStyle,onClick:function onClick(){return _this.zoom(image.scale+1)},children:"+"}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("button",{style:buttonStyle,onClick:function onClick(){return _this.zoom(image.scale-1)},children:"-"})]}),!hideMinimap&&Object(jsx_runtime.jsxs)("div",{style:minimapStyle,children:[src&&Object(jsx_runtime.jsx)("img",{src:src,width:minimapStyle.width,height:minimapStyle.height}),Object(jsx_runtime.jsx)("div",{style:guideStyle})]})]})]})},_this.state={container:{width:void 0,height:void 0,ratio:void 0,orientation:void 0,background:void 0},image:{initialWidth:void 0,initialHeight:void 0,width:void 0,height:void 0,scale:void 0,ratio:void 0,orientation:void 0,offsetX:void 0,offsetY:void 0},minimap:{initialSize:100,width:void 0,height:void 0,guideWidth:void 0,guideHeight:void 0,offsetX:0,offsetY:0},hideFullscreenControl:!1,hideZoomControls:!1,hideMinimap:!1,resizable:void 0,draggable:void 0,cursorX:void 0,cursorY:void 0,mcursorX:void 0,mcursorY:void 0,dragging:void 0,isGuideDragging:void 0,hotspots:[]},_this.container=react_default.a.createRef(),_this}return function ImageHotspots_createClass(Constructor,protoProps,staticProps){return protoProps&&ImageHotspots_defineProperties(Constructor.prototype,protoProps),staticProps&&ImageHotspots_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ImageHotspots)}(react_default.a.Component);ImageHotspots_ImageHotspots.propTypes={src:prop_types_default.a.string,alt:prop_types_default.a.string,hotspots:prop_types_default.a.array},ImageHotspots_ImageHotspots.__docgenInfo={description:"",methods:[{name:"componentDidMount",docblock:null,modifiers:[],params:[],returns:null},{name:"componentWillUnmount",docblock:null,modifiers:[],params:[],returns:null},{name:"startDrag",docblock:null,modifiers:[],params:[{name:"event",type:null},{name:"element",type:null}],returns:null},{name:"whileDrag",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"stopDrag",docblock:null,modifiers:[],params:[],returns:null},{name:"onImageLoad",docblock:null,modifiers:[],params:[{name:"{ target: image }",type:null}],returns:null},{name:"onWindowResize",docblock:null,modifiers:[],params:[],returns:null},{name:"toggleFullscreen",docblock:null,modifiers:[],params:[],returns:null},{name:"zoom",docblock:null,modifiers:[],params:[{name:"scale",type:null}],returns:null},{name:"requestFullscreen",docblock:null,modifiers:[],params:[{name:"element",type:null}],returns:null},{name:"exitFullscreen",docblock:null,modifiers:[],params:[],returns:null},{name:"render",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ImageHotspots",props:{src:{description:"",type:{name:"string"},required:!1},alt:{description:"",type:{name:"string"},required:!1},hotspots:{description:"",type:{name:"array"},required:!1}}};var src_ImageHotspots=ImageHotspots_ImageHotspots;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ImageHotspots.js"]={name:"ImageHotspots",docgenInfo:ImageHotspots_ImageHotspots.__docgenInfo,path:"src/ImageHotspots.js"});var landscape=__webpack_require__("./src/landscape.jpg"),landscape_default=__webpack_require__.n(landscape),portrait=__webpack_require__("./src/portrait.jpg"),portrait_default=__webpack_require__.n(portrait),ImageHotspots_stories_hotspots=[{x:10,y:20,content:Object(jsx_runtime.jsx)("span",{style:{padding:10},children:"Hotspot1"})},{x:50,y:10,content:Object(jsx_runtime.jsx)("span",{style:{padding:10},children:"Hotspot2"})},{x:30,y:40,content:Object(jsx_runtime.jsx)("span",{style:{padding:10},children:"Hotspot3"})},{x:50,y:60,content:Object(jsx_runtime.jsx)("span",{style:{padding:10},children:"Hotspot4"})}],ImageHotspots_stories_Default=(__webpack_exports__.default={title:"Image Hostpots",component:src_ImageHotspots},function Default(args){return Object(jsx_runtime.jsx)("div",{style:{width:"100%",height:"90vh"},children:Object(jsx_runtime.jsx)(src_ImageHotspots,Object.assign({},args))})});ImageHotspots_stories_Default.displayName="Default",ImageHotspots_stories_Default.args={src:landscape_default.a,alt:"Sample image",hideFullscreenControl:!1,hideZoomControls:!1,hotspots:ImageHotspots_stories_hotspots,hideMinimap:!1};var ImageHotspots_stories_LandscapeInLandscape=function LandscapeInLandscape(args){return Object(jsx_runtime.jsx)("div",{style:{width:"450px",height:"300px"},children:Object(jsx_runtime.jsx)(src_ImageHotspots,Object.assign({},args))})};ImageHotspots_stories_LandscapeInLandscape.displayName="LandscapeInLandscape",ImageHotspots_stories_LandscapeInLandscape.args={src:landscape_default.a,alt:"Sample image",hideFullscreenControl:!1,hideZoomControls:!1,hotspots:ImageHotspots_stories_hotspots,hideMinimap:!1};var ImageHotspots_stories_LandscapeInPortrait=function LandscapeInPortrait(args){return Object(jsx_runtime.jsx)("div",{style:{width:"250px",height:"300px"},children:Object(jsx_runtime.jsx)(src_ImageHotspots,Object.assign({},args))})};ImageHotspots_stories_LandscapeInPortrait.displayName="LandscapeInPortrait",ImageHotspots_stories_LandscapeInPortrait.args={src:landscape_default.a,alt:"Sample image",hideFullscreenControl:!1,hideZoomControls:!1,hotspots:ImageHotspots_stories_hotspots,hideMinimap:!1};var ImageHotspots_stories_PortraitInPortrait=function PortraitInPortrait(args){return Object(jsx_runtime.jsx)("div",{style:{width:"250px",height:"300px"},children:Object(jsx_runtime.jsx)(src_ImageHotspots,Object.assign({},args))})};ImageHotspots_stories_PortraitInPortrait.displayName="PortraitInPortrait",ImageHotspots_stories_PortraitInPortrait.args={src:portrait_default.a,alt:"Sample image",hideFullscreenControl:!1,hideZoomControls:!1,hotspots:ImageHotspots_stories_hotspots,hideMinimap:!1};var ImageHotspots_stories_PortraitInLandscape=function PortraitInLandscape(args){return Object(jsx_runtime.jsx)("div",{style:{width:"450px",height:"300px"},children:Object(jsx_runtime.jsx)(src_ImageHotspots,Object.assign({},args))})};ImageHotspots_stories_PortraitInLandscape.displayName="PortraitInLandscape",ImageHotspots_stories_PortraitInLandscape.args={src:portrait_default.a,alt:"Sample image",hideFullscreenControl:!1,hideZoomControls:!1,hotspots:ImageHotspots_stories_hotspots,hideMinimap:!1};var ImageHotspots_stories_CustomBackground=function CustomBackground(args){return Object(jsx_runtime.jsx)("div",{style:{width:"450px",height:"300px"},children:Object(jsx_runtime.jsx)(src_ImageHotspots,Object.assign({},args))})};ImageHotspots_stories_CustomBackground.displayName="CustomBackground",ImageHotspots_stories_CustomBackground.args={src:portrait_default.a,alt:"Sample image",background:"lightGray"},ImageHotspots_stories_Default.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <div style={{ width: '100%', height: '90vh' }}>\n      <ImageHotspots {...args} />\n    </div>\n  )\n}"}},ImageHotspots_stories_Default.parameters),ImageHotspots_stories_LandscapeInLandscape.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <div style={{ width: '450px', height: '300px' }}>\n      <ImageHotspots {...args} />\n    </div>\n  )\n}"}},ImageHotspots_stories_LandscapeInLandscape.parameters),ImageHotspots_stories_LandscapeInPortrait.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <div style={{ width: '250px', height: '300px' }}>\n      <ImageHotspots {...args} />\n    </div>\n  )\n}"}},ImageHotspots_stories_LandscapeInPortrait.parameters),ImageHotspots_stories_PortraitInPortrait.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <div style={{ width: '250px', height: '300px' }}>\n      <ImageHotspots {...args} />\n    </div>\n  )\n}"}},ImageHotspots_stories_PortraitInPortrait.parameters),ImageHotspots_stories_PortraitInLandscape.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <div style={{ width: '450px', height: '300px' }}>\n      <ImageHotspots {...args} />\n    </div>\n  )\n}"}},ImageHotspots_stories_PortraitInLandscape.parameters),ImageHotspots_stories_CustomBackground.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <div style={{ width: '450px', height: '300px' }}>\n      <ImageHotspots {...args} />\n    </div>\n  )\n}"}},ImageHotspots_stories_CustomBackground.parameters),ImageHotspots_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ImageHotspots.stories.js"]={name:"Default",docgenInfo:ImageHotspots_stories_Default.__docgenInfo,path:"src/ImageHotspots.stories.js"}),ImageHotspots_stories_LandscapeInLandscape.__docgenInfo={description:"",methods:[],displayName:"LandscapeInLandscape"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ImageHotspots.stories.js"]={name:"LandscapeInLandscape",docgenInfo:ImageHotspots_stories_LandscapeInLandscape.__docgenInfo,path:"src/ImageHotspots.stories.js"}),ImageHotspots_stories_LandscapeInPortrait.__docgenInfo={description:"",methods:[],displayName:"LandscapeInPortrait"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ImageHotspots.stories.js"]={name:"LandscapeInPortrait",docgenInfo:ImageHotspots_stories_LandscapeInPortrait.__docgenInfo,path:"src/ImageHotspots.stories.js"}),ImageHotspots_stories_PortraitInPortrait.__docgenInfo={description:"",methods:[],displayName:"PortraitInPortrait"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ImageHotspots.stories.js"]={name:"PortraitInPortrait",docgenInfo:ImageHotspots_stories_PortraitInPortrait.__docgenInfo,path:"src/ImageHotspots.stories.js"}),ImageHotspots_stories_PortraitInLandscape.__docgenInfo={description:"",methods:[],displayName:"PortraitInLandscape"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ImageHotspots.stories.js"]={name:"PortraitInLandscape",docgenInfo:ImageHotspots_stories_PortraitInLandscape.__docgenInfo,path:"src/ImageHotspots.stories.js"}),ImageHotspots_stories_CustomBackground.__docgenInfo={description:"",methods:[],displayName:"CustomBackground"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ImageHotspots.stories.js"]={name:"CustomBackground",docgenInfo:ImageHotspots_stories_CustomBackground.__docgenInfo,path:"src/ImageHotspots.stories.js"})},"./src/landscape.jpg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/landscape.0dc3cf23.jpg"},"./src/portrait.jpg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/portrait.e252521a.jpg"},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);