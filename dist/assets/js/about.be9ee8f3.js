(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{b0c0:function(t,e,n){var u=n("83ab"),c=n("9bf2").f,o=Function.prototype,r=o.toString,b=/^\s*function ([^ (]*)/,i="name";u&&!(i in o)&&c(o,i,{configurable:!0,get:function(){try{return r.call(this).match(b)[1]}catch(t){return""}}})},f820:function(t,e,n){"use strict";n.r(e);var u=n("5c40"),c=n("9ff4");function o(t,e){return Object(u["p"])(),Object(u["e"])(u["b"],null,[Object(u["i"])("h2",null,"路由名："+Object(c["E"])(t.routeName),1),Object(u["i"])("h1",null,"vue3-ref："+Object(c["E"])(t.number),1),Object(u["i"])("h2",null,"computed：当前数据的两倍："+Object(c["E"])(t.doubleNum),1),Object(u["i"])("p",null,[Object(u["i"])("button",{onClick:e[1]||(e[1]=function(e){return t.add(e)})},"增加")]),Object(u["i"])("h2",null,"获取Vuex中的值："+Object(c["E"])(t.testNum),1),Object(u["i"])("p",null,[Object(u["i"])("button",{onClick:e[2]||(e[2]=function(e){return t.update(e)})},"更新Vuex中的值")])],64)}n("b0c0");var r=n("a1e9"),b={name:"About",setup:function(){var t=Object(u["k"])(),e=t.ctx,n=Object(r["h"])(12),c=function(){n.value++},o=function(){e.$store.commit("setTest",n)},b=Object(u["d"])((function(){return 2*n.value})),i=Object(u["d"])((function(){return e.$store.state.test})),l=Object(u["d"])((function(){return e.$router.currentRoute.value.name}));return Object(u["w"])(n,(function(){console.log("监控number数据为".concat(n.value))}),{lazy:!0}),Object(u["w"])(b,(function(){console.log("监控doubleNum数据为".concat(b.value))})),{routeName:l,number:n,doubleNum:b,testNum:i,add:c,update:o}}};b.render=o;e["default"]=b}}]);