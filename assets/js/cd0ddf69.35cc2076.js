"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[666],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(i),d=n,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return i?r.createElement(h,s(s({ref:t},u),{},{components:i})):r.createElement(h,s({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<a;c++)s[c]=i[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4471:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=i(7462),n=(i(7294),i(3905));const a={sidebar_position:1,title:"SLE Micro on X86_64 on libvirt (virt-install)"},s="Intro",o={unversionedId:"quickstart/slemicro-virt-install-x86_64",id:"quickstart/slemicro-virt-install-x86_64",title:"SLE Micro on X86_64 on libvirt (virt-install)",description:"Libvirtd",source:"@site/docs/quickstart/slemicro-virt-install-x86_64.md",sourceDirName:"quickstart",slug:"/quickstart/slemicro-virt-install-x86_64",permalink:"/quickstart/slemicro-virt-install-x86_64",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/quickstart/slemicro-virt-install-x86_64.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SLE Micro on X86_64 on libvirt (virt-install)"},sidebar:"docs",previous:{title:"SLE Micro on OSX on Apple Silicon (UTM)",permalink:"/quickstart/slemicro-utm-aarch64"},next:{title:"K3s on SLE Micro",permalink:"/quickstart/k3s-on-slemicro"}},l={},c=[{value:"Libvirtd",id:"libvirtd",level:2},{value:"Virt-install",id:"virt-install",level:2},{value:"Convert the raw image to qcow2",id:"convert-the-raw-image-to-qcow2",level:2},{value:"Create the VM",id:"create-the-vm",level:2},{value:"Access to the vm",id:"access-to-the-vm",level:2},{value:"Delete the VM",id:"delete-the-vm",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"intro"},"Intro"),(0,n.kt)("h2",{id:"libvirtd"},"Libvirtd"),(0,n.kt)("p",null,"The libvirtd program is the server side daemon component of the libvirt virtualization management system.\nThis daemon runs on host servers and performs required management tasks for virtualized guests. This includes activities such as starting, stopping and migrating guests between host servers, configuring and manipulating networking, and managing storage for use by guests.\nThe libvirt client libraries and utilities connect to this daemon to issue tasks and collect information about the configuration and resources of the host system and guests.\n(see ",(0,n.kt)("a",{parentName:"p",href:"https://libvirt.org/manpages/libvirtd.html"},"https://libvirt.org/manpages/libvirtd.html"),")"),(0,n.kt)("h2",{id:"virt-install"},"Virt-install"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"virt-install"),' is a command line tool for creating new KVM , Xen, or Linux container guests using the "libvirt" hypervisor management library. See the EXAMPLES section at the end of this document to quickly get started.\n',(0,n.kt)("inlineCode",{parentName:"p"},"virt-install")," tool supports both text based & graphical installations, using VNC or SDL graphics, or a text serial console. The guest can be configured to use one or more virtual disks, network interfaces, audio devices, physical USB or PCI devices, among others.\nThe installation media can be held locally or remotely on NFS , HTTP , FTP servers. In the latter case ",(0,n.kt)("inlineCode",{parentName:"p"},"virt-install")," will fetch the minimal files necessary to kick off the installation process, allowing the guest to fetch the rest of the OS distribution as needed. PXE booting, and importing an existing disk image (thus skipping the install phase) are also supported."),(0,n.kt)("p",null,"To see more details about virt-install options, please visit ",(0,n.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/virt-install"},"https://linux.die.net/man/1/virt-install"),"\nTo see more details about virt-manager and the graphical interface, please visit ",(0,n.kt)("a",{parentName:"p",href:"https://virt-manager.org/"},"https://virt-manager.org/")),(0,n.kt)("h1",{id:"image-based-process-step-by-step"},"Image-based process step by step"),(0,n.kt)("p",null,"We have to create the image based and prepare the image with ignition and combustion files.\nBasically we will use the following documents as reference to create the image changing the base SLEMicro image to be downloaded (",(0,n.kt)("strong",{parentName:"p"},"in this case will be SLE Micro x86_64"),"):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prerequisites: ",(0,n.kt)("a",{parentName:"li",href:"https://suse-edge.github.io/quickstart/slemicro-utm-aarch64#prerequisites"},"https://suse-edge.github.io/quickstart/slemicro-utm-aarch64#prerequisites"),"  (Remember to download the x86_64 image)"),(0,n.kt)("li",{parentName:"ul"},"Image preparation: ",(0,n.kt)("a",{parentName:"li",href:"https://suse-edge.github.io/quickstart/slemicro-utm-aarch64#image-preparation"},"https://suse-edge.github.io/quickstart/slemicro-utm-aarch64#image-preparation")),(0,n.kt)("li",{parentName:"ul"},"Ignition & Combustion files: ",(0,n.kt)("a",{parentName:"li",href:"https://suse-edge.github.io/quickstart/slemicro-utm-aarch64#ignition--combustion-files"},"https://suse-edge.github.io/quickstart/slemicro-utm-aarch64#ignition--combustion-files"))),(0,n.kt)("p",null,"After following the previous steps, at this point you should have a folder with the following files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"slemicro.raw (SLE-Micro.x86_64-5.4.0-Default-GM.raw)"),(0,n.kt)("li",{parentName:"ul"},"ignition-and-combustion.iso")),(0,n.kt)("p",null,"The base image SLE Micro with the customization based on ignition and combustion."),(0,n.kt)("h2",{id:"convert-the-raw-image-to-qcow2"},"Convert the raw image to qcow2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"qemu-img convert -O qcow2 SLE-Micro.x86_64-5.4.0-Default-GM.raw slemicro\n")),(0,n.kt)("h2",{id:"create-the-vm"},"Create the VM"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"virt-install --name MyVM --memory 4096 --vcpus 4 --disk ./slemicro --import --cdrom ./ignition-and-combustion.iso --network default --osinfo detect=on,name=sle-unknown\n")),(0,n.kt)("p",null,"After a couple of seconds, the VM will boot up and will configure itself\nusing the ignition and combustion scripts, including registering itself\nto SCC"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"virsh list\n Id   Nombre          State\n----------------------------------\n 14   MyVM          running\n")),(0,n.kt)("h2",{id:"access-to-the-vm"},"Access to the vm"),(0,n.kt)("p",null,"You can access to the VM using virsh console:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"virsh console MyVM\n\nConnected to domain MyVM\n")),(0,n.kt)("p",null,"or using ssh directly and the user set in the ignition file (in this case root)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"virsh domifaddr MyVM\n Nombre     MAC address          Protocol     Address\n-------------------------------------------------------------------------------\n vnet14     52:54:00:f0:be:e5    ipv4         192.168.122.221/24\n \nssh root@192.168.122.221\n")),(0,n.kt)("h2",{id:"delete-the-vm"},"Delete the VM"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"virsh destroy MyVM ; virsh undefine MyVM\n")))}p.isMDXComponent=!0}}]);