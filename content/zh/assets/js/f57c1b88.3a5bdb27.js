"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),k=o,d=s["".concat(l,".").concat(k)]||s[k]||m[k]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},12685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},c="RocketMQ MQTT \u5feb\u901f\u5f00\u59cb",i={unversionedId:"iot/34RocketMQMQTTQuickStart",id:"iot/34RocketMQMQTTQuickStart",title:"RocketMQ MQTT \u5feb\u901f\u5f00\u59cb",description:"\u7cfb\u7edf\u8981\u6c42",source:"@site/docs/08-iot/34RocketMQMQTTQuickStart.md",sourceDirName:"08-iot",slug:"/iot/34RocketMQMQTTQuickStart",permalink:"/zh/docs/4.x/iot/34RocketMQMQTTQuickStart",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/08-iot/34RocketMQMQTTQuickStart.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ MQTT \u6982\u89c8",permalink:"/zh/docs/4.x/iot/33RocketMQMQTTOverview"},next:{title:"RocketMQ Connect \u6982\u89c8",permalink:"/zh/docs/4.x/\u6570\u636e\u96c6\u6210/25RocketMQ Connect Overview"}},l={},p=[{value:"\u7cfb\u7edf\u8981\u6c42",id:"\u7cfb\u7edf\u8981\u6c42",level:2},{value:"\u90e8\u7f72\u8bf4\u660e",id:"\u90e8\u7f72\u8bf4\u660e",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u793a\u4f8b\u8bf4\u660e",id:"\u793a\u4f8b\u8bf4\u660e",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rocketmq-mqtt-\u5feb\u901f\u5f00\u59cb"},"RocketMQ MQTT \u5feb\u901f\u5f00\u59cb"),(0,o.kt)("h2",{id:"\u7cfb\u7edf\u8981\u6c42"},"\u7cfb\u7edf\u8981\u6c42"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"64\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u63a8\u8350 Linux/Unix/macOS"),(0,o.kt)("li",{parentName:"ul"},"64\u4f4d JDK 1.8+")),(0,o.kt)("h2",{id:"\u90e8\u7f72\u8bf4\u660e"},"\u90e8\u7f72\u8bf4\u660e"),(0,o.kt)("p",null,"\u7531\u4e8eRocketMQ-MQTT\u9879\u76ee\u4f9d\u8d56RocketMQ\u5e95\u5c42\u7684\u591a\u961f\u5217\u5206\u53d1\uff0cRocketMQ\u4ece4.9.3\u7248\u672c\u5f00\u59cb\u652f\u6301\u8fd9\u4e00\u7279\u6027\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u786e\u8ba4RocketMQ\u7684\u7248\u672c\u5347\u7ea7\u52304.9.3\u6216\u66f4\u9ad8\u7248\u672c\uff0c\u5e76\u4e14\u786e\u4fdd\u4ee5\u4e0b\u914d\u7f6e\u9879\u5df2\u5f00\u542f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"enableLmq = true \nenableMultiDispatch = true\n")),(0,o.kt)("p",null,"RocketMQ-MQTT\u7684\u90e8\u7f72\u53c2\u8003\u9879\u76ee\u8bf4\u660e\uff0c\u4e0b\u8f7d\u5de5\u7a0brelease\u7248\u672c\u6216\u76f4\u63a5\u4ece\u6e90\u7801\u6784\u5efa\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/apache/rocketmq-mqtt\ncd rocketmq-mqtt \nmvn -Prelease-all -DskipTests clean install -U \ncd distribution/target/ \ncd bin\nsh mqtt.sh start\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"username=xxx    // \u6743\u9650\u9a8c\u8bc1\u8d26\u6237\u914d\u7f6e\nsecretKey=xxx    // \u6743\u9650\u9a8c\u8bc1\u8d26\u6237\u914d\u7f6e\nNAMESRV_ADDR=xxx  //namesrv\u63a5\u5165\u70b9\neventNotifyRetryTopic=xx   //notify\u91cd\u8bd5topic\uff0c\u63d0\u524d\u521b\u5efa\nclientRetryTopic=xx  //\u5ba2\u6237\u7aef\u6d88\u606f\u91cd\u8bd5topic\uff0c\u63d0\u524d\u521b\u5efa\n")),(0,o.kt)("p",null,"\u5176\u4ed6\u542f\u52a8\u914d\u7f6e\u53c2\u8003\u9879\u76ee",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-mqtt/blob/main/README.md"},"README.md")),(0,o.kt)("h2",{id:"\u793a\u4f8b\u8bf4\u660e"},"\u793a\u4f8b\u8bf4\u660e"),(0,o.kt)("p",null,"RocketMQ-MQTT\u9879\u76ee\u5de5\u7a0b\u4ee3\u7801\u91cc\u9762\u63d0\u4f9b\u4e86\u57fa\u672c\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-mqtt/tree/main/mqtt-example"},"example"),"\u4ee3\u7801\uff0c\u8be6\u89c1\u4ee3\u7801\u793a\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"MqttConsumer\0.java  // MQTT\u5ba2\u6237\u7aef\u542f\u52a8\u8ba2\u9605\u6d88\u606f\nMqttProducer\0.java   // MQTT\u5ba2\u6237\u7aef\u542f\u52a8\u53d1\u5e03\u6d88\u606f\nRocketMQConsumer\0.java //RocketMQ\u5ba2\u6237\u7aef\u542f\u52a8\u8ba2\u9605\u6d88\u606f\nRocketMQProducer\0.java  // RocketMQ\u5ba2\u6237\u7aef\u542f\u52a8\u53d1\u5e03\u6d88\u606f\n")))}s.isMDXComponent=!0}}]);