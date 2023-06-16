"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,title:"*Draft* Architecture and Concepts"},i="SUSE Adaptive Telco Infrastructure Platform (ATIP)",c={unversionedId:"product/atip/architecture",id:"product/atip/architecture",title:"*Draft* Architecture and Concepts",description:"SUSE ATIP is a platform designed for hosting modern, cloud native, Telco applications at scale from core to edge.",source:"@site/docs/product/atip/architecture.md",sourceDirName:"product/atip",slug:"/product/atip/architecture",permalink:"/docs/product/atip/architecture",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/product/atip/architecture.md",tags:[],version:"current",lastUpdatedBy:"Eduardo M\xednguez",lastUpdatedAt:1686915205,formattedLastUpdatedAt:"Jun 16, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"*Draft* Architecture and Concepts"},sidebar:"docs",previous:{title:"*Draft* Introduction",permalink:"/docs/product/atip/introduction"},next:{title:"*Draft* Prerequisites and Assumptions",permalink:"/docs/product/atip/requirements"}},l={},s=[{value:"Components",id:"components",level:2},{value:"ATIP Architecture",id:"atip-architecture",level:2},{value:"Example deployment flows",id:"example-deployment-flows",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"suse-adaptive-telco-infrastructure-platform-atip"},"SUSE Adaptive Telco Infrastructure Platform (ATIP)"),(0,o.kt)("p",null,"SUSE ATIP is a platform designed for hosting modern, cloud native, Telco applications at scale from core to edge. "),(0,o.kt)("p",null,"This page explains the architecture and concepts used in ATIP. Knowledge of this will assist in deploying and using ATIP."),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("p",null,"Components used in ATIP, versions, roles etc"),(0,o.kt)("h2",{id:"atip-architecture"},"ATIP Architecture"),(0,o.kt)("p",null,"Architecture of ATIP, relationship between components etc"),(0,o.kt)("h2",{id:"example-deployment-flows"},"Example deployment flows"),(0,o.kt)("p",null,"Example high level sequences for deployment and use of ATIP in common scenarios"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Management on central site, edge sites with Multus + SRIOV"),(0,o.kt)("li",{parentName:"ul"},"Management on Public cloud, edge sites with RT kernel"),(0,o.kt)("li",{parentName:"ul"},"etc")))}d.isMDXComponent=!0}}]);