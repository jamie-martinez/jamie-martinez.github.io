//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("index_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_538","HYPE_dtl_538",!0==(null!=a&&10>a||false==!0)?"HYPE-538.full.min.js":"HYPE-538.thin.min.js"),false==!0&&(a=a||l("HYPE_w_538","HYPE_wdtl_538","HYPE-538.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 500;\n\t\tvar menuFadeOut = 2700;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n}",identifier:"60"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 250;\n\t\tvar menubFadeOut = 2300;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"65"},{name:"untitledFunction3",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menuc');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menucDelta = 250;\n\t\tvar menucFadeOut = 2400;\n\n\t\tif (scroll > menucDelta){\n\t\t\tmenuc.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menucDelta){\n\t\t\tmenuc.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenuc.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n\n}",identifier:"127"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_538(c,e,{"18":{p:1,n:"teachers-homepage.jpg",g:"84",o:true,t:"@1x"},"10":{p:1,n:"footer.jpg",g:"138",o:true,t:"@1x"},"19":{p:1,n:"teachers-homepage_2x.jpg",g:"84",o:true,t:"@2x"},"11":{p:1,n:"footer_2x.jpg",g:"138",o:true,t:"@2x"},"0":{p:1,n:"teachers-sticky.jpg",g:"86",o:true,t:"@1x"},"12":{p:1,n:"card-text.png",g:"151",o:true,t:"@1x"},"1":{p:1,n:"teachers-sticky_2x.jpg",g:"86",o:true,t:"@2x"},"20":{p:1,n:"newsletter-callout-1.jpg",g:"158",o:true,t:"@1x"},"2":{p:1,n:"schools-sticky.jpg",g:"123",o:true,t:"@1x"},"13":{p:1,n:"card-text_2x.png",g:"151",o:true,t:"@2x"},"3":{p:1,n:"schools-sticky_2x.jpg",g:"123",o:true,t:"@2x"},"21":{p:1,n:"newsletter-callout-1_2x.jpg",g:"158",o:true,t:"@2x"},"14":{p:1,n:"card-hover.png",g:"149",o:true,t:"@1x"},"4":{p:1,n:"districts-sticky.jpg",g:"125",o:true,t:"@1x"},"5":{p:1,n:"districts-sticky_2x.jpg",g:"125",o:true,t:"@2x"},"15":{p:1,n:"card-hover_2x.png",g:"149",o:true,t:"@2x"},"22":{p:1,n:"district-homepage.jpg",g:"159",o:true,t:"@1x"},"6":{p:1,n:"about-homepage.jpg",g:"128",o:true,t:"@1x"},"23":{p:1,n:"district-homepage_2x.jpg",g:"159",o:true,t:"@2x"},"16":{p:1,n:"schools-homepage.jpg",g:"117",o:true,t:"@1x"},"7":{p:1,n:"about-homepage_2x.jpg",g:"128",o:true,t:"@2x"},"8":{p:1,n:"newsletter-slideout.jpg",g:"146",o:true,t:"@1x"},"17":{p:1,n:"schools-homepage_2x.jpg",g:"117",o:true,t:"@2x"},"9":{p:1,n:"newsletter-slideout_2x.jpg",g:"146",o:true,t:"@2x"}},h,[],d,[{n:"For Teachers",o:"1",X:[0]},{n:"For Schools",o:"14",X:[1]},{n:"For Districts",o:"88",X:[2]},{n:"About",o:"17",X:[3]}],[{A:{a:[{p:4,h:"60"}]},o:"3",p:"600px",x:0,cA:false,Z:4157,Y:1440,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"67":{i:"67",n:"newsletter-slideout",z:0.24,b:[],a:[{f:"c",y:0,z:0.09,i:"e",e:0,s:1,o:"168"},{f:"c",y:0.09,z:0,i:"cY",e:"0",s:"1",o:"171"},{f:"c",y:0.09,z:0.06,i:"e",e:1,s:0,o:"171"},{y:0.09,i:"cY",s:"0",z:0,o:"171",f:"c"},{y:0.09,i:"e",s:0,z:0,o:"168",f:"c"},{f:"c",y:0.12,z:0.12,i:"b",e:3818,s:3499,o:"160"},{y:0.15,i:"e",s:1,z:0,o:"171",f:"c"},{y:0.24,i:"b",s:3818,z:0,o:"160",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["163","166","167","165","164","162","170","169","160","168","171","161"],v:{"162":{x:"visible",k:"div",c:1440,d:40,z:24,e:1,a:0,j:"absolute",b:0},"165":{b:7,z:2,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"162",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"17"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"About",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"160":{h:"138",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:3499,j:"absolute",r:"inline",c:1440,k:"div",z:21,d:339},"171":{h:"146",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:3378,j:"absolute",cY:"1",z:18,k:"div",c:1440,d:440,r:"inline",e:0},"168":{h:"158",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:3377,j:"absolute",cY:"0",z:19,k:"div",c:1440,d:120.83199999999999,r:"inline",e:1},"163":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"162",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Teachers",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"166":{b:7,z:5,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"162",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"14"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Schools",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"161":{h:"84",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",r:"inline",c:1440,k:"div",z:13,d:3797},"169":{c:184,d:82,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"67",p:3,z:false,symbolOid:"2"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:22,O:0,D:"#D8DDE4",P:0,a:809,b:3400},"164":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"162",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"170":{h:"86",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",a:0,j:"absolute",b:-90,c:1440,k:"div",z:23,d:90,r:"inline"},"167":{b:7,z:4,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"162",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"88"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Districts",x:"visible",I:"None",a:725,y:"preserve",J:"None"}}},{A:{a:[{p:4,h:"65"}]},o:"16",p:"600px",x:1,cA:false,Z:3555,Y:1440,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"44":{i:"44",n:"card hover",z:0.1,b:[],a:[{f:"153",y:0,z:0.07,i:"d",e:250,s:0,o:"172"},{f:"c",y:0.03,z:0.07,i:"e",e:1,s:0,o:"173"},{y:0.07,i:"d",s:250,z:0,o:"172",f:"c"},{y:0.1,i:"e",s:1,z:0,o:"173",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["178","177","180","181","179","176","183","175","173","174","172","182"],v:{"176":{x:"visible",k:"div",c:1440,d:40,z:13,e:1,a:0,j:"absolute",b:0},"182":{h:"117",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",r:"inline",c:1440,k:"div",z:8,d:3515},"179":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"176",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"174":{h:"149",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"172",c:300,k:"div",z:1,d:250,r:"inline"},"180":{b:7,z:4,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"176",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"88"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Districts",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"177":{b:7,z:5,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"176",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Schools",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"183":{h:"123",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",a:0,j:"absolute",b:-90,c:1440,k:"div",z:12,d:90,r:"inline"},"172":{k:"div",x:"hidden",c:300,d:0,z:9,r:"inline",a:955,j:"absolute",b:1310},"175":{c:298,d:249,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:10,P:0,D:"#D8DDE4",aC:{a:[{b:"44",p:3,z:true,symbolOid:"15"}]},a:955,aD:{a:[{b:"44",p:3,z:false,symbolOid:"15"}]},b:1311},"181":{b:7,z:2,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"176",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"17"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"About",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"178":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"176",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Teachers",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"173":{h:"151",p:"no-repeat",x:"visible",a:32,q:"100% 100%",b:57,j:"absolute",bF:"172",z:2,k:"div",c:236,d:137,r:"inline",e:0}}},{A:{a:[{p:4,h:"127"}]},o:"96",p:"600px",x:2,cA:false,Z:3829,Y:1440,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"95":{i:"95",n:"card hover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["185","184","188","190","191","187","189","186"],v:{"187":{b:7,z:2,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"186",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"17"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"About",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"190":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"186",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"14"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Schools",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"186":{x:"visible",k:"div",c:1440,d:40,z:9,e:1,a:0,j:"absolute",b:0},"189":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"186",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"185":{h:"125",p:"no-repeat",x:"visible",i:"menuc",q:"100% 100%",a:0,j:"absolute",b:-90,c:1440,k:"div",z:11,d:90,r:"inline"},"188":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"186",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Teachers",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"191":{b:7,z:5,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"186",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Districts",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"184":{h:"159",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",r:"inline",c:1440,k:"div",z:10,d:3789}}},{o:"19",p:"600px",x:3,cA:false,Z:2770,Y:1440,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["198","195","197","193","194","196","192"],v:{"193":{b:7,z:4,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"192",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"88"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Districts",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"196":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"192",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"192":{x:"visible",k:"div",c:1440,d:40,z:1,e:1,a:0,j:"absolute",b:0},"195":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"192",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Teachers",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"198":{h:"128",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",r:"inline",c:1440,k:"div",z:7,d:2730},"194":{b:7,z:2,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"192",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"About",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"197":{b:7,z:5,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"192",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"14"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"For Schools",x:"visible",I:"None",a:610,y:"preserve",J:"None"}}}],{},g,{"153":[[0,0,0.0000000000,0.3696,0.7662,1.0162,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
