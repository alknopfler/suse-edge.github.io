"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[6277],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||n;return a?o.createElement(h,i(i({ref:t},u),{},{components:a})):o.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:2,title:"Create a simple container image based on Tumbleweed using OBS (openSUSE Build Service)"},i=void 0,l={unversionedId:"dev_howto/create-a-simple-container-image-obs",id:"dev_howto/create-a-simple-container-image-obs",title:"Create a simple container image based on Tumbleweed using OBS (openSUSE Build Service)",description:"Create the project to host the assets",source:"@site/docs/dev_howto/create-a-simple-container-image-obs.md",sourceDirName:"dev_howto",slug:"/dev_howto/create-a-simple-container-image-obs",permalink:"/docs/dev_howto/create-a-simple-container-image-obs",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/dev_howto/create-a-simple-container-image-obs.md",tags:[],version:"current",lastUpdatedBy:"Eduardo M\xednguez",lastUpdatedAt:1689168236,formattedLastUpdatedAt:"Jul 12, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Create a simple container image based on Tumbleweed using OBS (openSUSE Build Service)"},sidebar:"docs",previous:{title:"Create a package (RPM or Container image) using OBS (openSUSE Build Service)",permalink:"/docs/dev_howto/create-package-obs"},next:{title:"Create a custom single-iso image (using SLE Micro installer and combustion image) to use it on Virtual CD-ROM",permalink:"/docs/dev_howto/create-a-single-iso-image-customized"}},s={},p=[{value:"Create the project to host the assets",id:"create-the-project-to-host-the-assets",level:2},{value:"Enable container builds in the project config",id:"enable-container-builds-in-the-project-config",level:2},{value:"Add the Tumbleweed images repository",id:"add-the-tumbleweed-images-repository",level:2},{value:"Create a package for the subproject",id:"create-a-package-for-the-subproject",level:2},{value:"Create the Dockerfile",id:"create-the-dockerfile",level:2},{value:"Upload the Dockerfile",id:"upload-the-dockerfile",level:2},{value:"Build results",id:"build-results",level:2},{value:"Resulting images",id:"resulting-images",level:2},{value:"Modify the Dockerfile file via CLI",id:"modify-the-dockerfile-file-via-cli",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-the-project-to-host-the-assets"},"Create the project to host the assets"),(0,r.kt)("p",null,"In this case it will be a ",(0,r.kt)("em",{parentName:"p"},"subproject"),' of the "home:foobar" project'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://build.opensuse.org/"},"https://build.opensuse.org/")),(0,r.kt)("li",{parentName:"ul"},"Log in"),(0,r.kt)("li",{parentName:"ul"},'Select "Your Home Project" (Left Nav menu)'),(0,r.kt)("li",{parentName:"ul"},'Select the "Subprojects" tab'),(0,r.kt)("li",{parentName:"ul"},'Press "Create Subproject" (In Left Nav menu);'),(0,r.kt)("li",{parentName:"ul"},"Fill in the name (e.g. containers).")),(0,r.kt)("h2",{id:"enable-container-builds-in-the-project-config"},"Enable container builds in the project config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Select "Your Home Project" (Left Nav menu)'),(0,r.kt)("li",{parentName:"ul"},'Select the "Subprojects" tab'),(0,r.kt)("li",{parentName:"ul"},"Select the subproject you have created (e.g. containers)"),(0,r.kt)("li",{parentName:"ul"},'Select the "Project Config" tab'),(0,r.kt)("li",{parentName:"ul"},"Paste the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'%if "%_repository" == "images"\nType: docker\nRepotype: none\nPatterntype: none\nBuildEngine: podman\n%endif\n')),(0,r.kt)("h2",{id:"add-the-tumbleweed-images-repository"},"Add the Tumbleweed images repository"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the subproject home page (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://build.opensuse.org/repositories/home:foobar:containers"},"https://build.opensuse.org/repositories/home:foobar:containers"),")"),(0,r.kt)("li",{parentName:"ul"},'Select the "Repositories" tab'),(0,r.kt)("li",{parentName:"ul"},'Press the "Add from a Project" button'),(0,r.kt)("li",{parentName:"ul"},'Fill in "Project" field with "',(0,r.kt)("inlineCode",{parentName:"li"},"openSUSE:Templates:Images:Tumbleweed"),'"'),(0,r.kt)("li",{parentName:"ul"},'Choose "images" in Repositories dropdown'),(0,r.kt)("li",{parentName:"ul"},'Rename it as "images" (this is important as it will be later on used in the registry path)'),(0,r.kt)("li",{parentName:"ul"},"Unselect all the architectures you don't need")),(0,r.kt)("h2",{id:"create-a-package-for-the-subproject"},"Create a package for the subproject"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://build.opensuse.org/project/show/home:foobar:containers"},"https://build.opensuse.org/project/show/home:foobar:containers")),(0,r.kt)("li",{parentName:"ul"},'Press "Create Package" button'),(0,r.kt)("li",{parentName:"ul"},"Fill in the name (e.g. mytoolbox).")),(0,r.kt)("h2",{id:"create-the-dockerfile"},"Create the Dockerfile"),(0,r.kt)("p",null,"Create a simple Dockerfile locally, something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The container image tag needs to be specified as follows:\n#!BuildTag: mytoolbox:latest\n \nFROM opensuse/tumbleweed\nRUN zypper -n in traceroute iputils netcat-openbsd curl && \\\n    zypper clean -a\n")),(0,r.kt)("h2",{id:"upload-the-dockerfile"},"Upload the Dockerfile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://build.opensuse.org/package/show/home:foobar:containers/mytoolbox"},"https://build.opensuse.org/package/show/home:foobar:containers/mytoolbox")),(0,r.kt)("li",{parentName:"ul"},'Press the "Add File" button'),(0,r.kt)("li",{parentName:"ul"},"Choose the file and upload it")),(0,r.kt)("h2",{id:"build-results"},"Build results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://build.opensuse.org/package/show/home:foobar:containers/mytoolbox"},"https://build.opensuse.org/package/show/home:foobar:containers/mytoolbox")),(0,r.kt)("li",{parentName:"ul"},"Images will appear in Build Results section"),(0,r.kt)("li",{parentName:"ul"},'Press the "Refresh" button in Build Results section'),(0,r.kt)("li",{parentName:"ul"},"Wait for build results.")),(0,r.kt)("h2",{id:"resulting-images"},"Resulting images"),(0,r.kt)("p",null,"If everything went as it should, the container image will be hosted at the ",(0,r.kt)("a",{parentName:"p",href:"https://registry.opensuse.org/"},"openSUSE registry")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://registry.opensuse.org/"},"https://registry.opensuse.org/")),(0,r.kt)("li",{parentName:"ul"},'On the search bar, type "project=^home:foobar:" and press enter'),(0,r.kt)("li",{parentName:"ul"},"Click on the package icon or name (home/foobar/containers/images/mytoolbox)"),(0,r.kt)("li",{parentName:"ul"},"Expand the tag (latest) to see the Image IDs, arch, build time, etc as well as the ",(0,r.kt)("inlineCode",{parentName:"li"},"podman pull")," command.")),(0,r.kt)("h2",{id:"modify-the-dockerfile-file-via-cli"},"Modify the Dockerfile file via CLI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"osc")," via your favourite package manager (see ",(0,r.kt)("a",{parentName:"li",href:"https://en.opensuse.org/openSUSE:OSC"},"https://en.opensuse.org/openSUSE:OSC"),")"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"osc checkout home:foobar:containers"),". It will ask your username/password and a method to store the password safely."),(0,r.kt)("li",{parentName:"ul"},"Navigate to the downloaded project ",(0,r.kt)("inlineCode",{parentName:"li"},"cd home\\:foobar\\:containers/mytoolbox/")),(0,r.kt)("li",{parentName:"ul"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," as you please"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"osc commit")," and put a proper commit message"),(0,r.kt)("li",{parentName:"ul"},"The build will be automatically triggered")))}m.isMDXComponent=!0}}]);