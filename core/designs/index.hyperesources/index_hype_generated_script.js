//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"47"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 9000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\t\n}",identifier:"48"},{name:"untitledFunction3",source:"function(hypeDocument, element, event) {\t\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menuc');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menucDelta = 100;\n\t\tvar menucFadeOut = 9000;\n\n\t\tif (scroll > menucDelta){\n\t\t\tmenuc.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menucDelta){\n\t\t\tmenuc.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menucFadeOut){\n\t\t\tmenuc.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\t\n}",identifier:"107"},{name:"untitledFunction4",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menud');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menudDelta = 300;\n\t\tvar menudFadeOut = 9000;\n\n\t\tif (scroll > menudDelta){\n\t\t\tmenud.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menudDelta){\n\t\t\tmenud.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menudFadeOut){\n\t\t\tmenud.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n}",identifier:"109"},{name:"untitledFunction5",source:"function(hypeDocument, element, event) {\t\t\t\t\n\t\t\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('pdp');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar pdpDelta = 0;\n\t\tvar pdpFadeOut = 800;\n\n\t\tif (scroll > pdpDelta){\n\t\t\tpdp.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= pdpDelta){\n\t\t\tpdp.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > pdpFadeOut){\n\t\t\tpdp.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\t\n\n\t\n}",identifier:"152"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"10":{p:1,n:"sticky-nav-3.png",g:"472",o:true,t:"@1x"},"2":{p:1,n:"sticky-nav.png",g:"400",o:true,t:"@1x"},"15":{p:1,n:"quiz.jpg",g:"501",o:true,t:"@1x"},"-2":{n:"blank.gif"},"3":{p:1,n:"sticky-nav_2x.png",g:"400",o:true,t:"@2x"},"11":{p:1,n:"sticky-nav-3_2x.png",g:"472",o:true,t:"@2x"},"4":{p:1,n:"homepage.png",g:"392",o:true,t:"@1x"},"16":{p:1,n:"quiz_2x.jpg",g:"501",o:true,t:"@2x"},"5":{p:1,n:"homepage_2x.png",g:"392",o:true,t:"@2x"},"12":{n:"video-loop.mp4",g:"398",t:"video/mp4"},"6":{p:1,n:"vision.jpg",g:"466",o:true,t:"@1x"},"13":{p:1,n:"giving-overview.jpg",g:"503",o:true,t:"@1x"},"7":{p:1,n:"vision_2x.jpg",g:"466",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"0":{n:"marbling2.mp4",g:"338",t:"video/mp4"},"8":{p:1,n:"sticky-nav-2.png",g:"470",o:true,t:"@1x"},"14":{p:1,n:"giving-overview_2x.jpg",g:"503",o:true,t:"@2x"},"1":{p:1,n:"b-mouse.png",g:"387",t:"@1x"},"9":{p:1,n:"sticky-nav-2_2x.png",g:"470",o:true,t:"@2x"}},h,[],d,[{n:"Homepage",o:"30",X:[0]},{n:"Giving Overview",o:"402",X:[1]},{n:"Vision",o:"434",X:[2]},{n:"Quiz",o:"474",X:[3]}],[{A:{a:[{p:4,h:"47"}]},o:"32",p:"600px",cA:false,Y:1440,Z:3989,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"246":{i:"246",n:"shop dropdown",z:0,b:[],a:[],f:30},"168":{i:"168",n:"hand hover",z:0,b:[],a:[],f:30},"239":{i:"239",n:"btn hover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:15.02,b:[],a:[{y:0,p:1,i:"Video Track",z:15.02,o:"515",f:"a"}],f:30},"250":{i:"250",n:"create dropdown",z:0,b:[],a:[],f:30},"254":{i:"254",n:"explore dropdown",z:0,b:[],a:[],f:30}},bZ:180,O:["505","508","506","509","510","512","511","507","516","514","515","513"],n:"Untitled Layout","_":0,v:{"508":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"506",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"514":{c:1440,d:750,I:"None",r:"inline",J:"None",K:"None",g:"rgba(0, 0, 0, 0.250)",L:"None",M:0,N:0,bF:"513",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:4,P:0,D:"#D8DDE4",a:0,b:0},"512":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"506",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"402"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Ways to Give",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"506":{x:"visible",k:"div",c:1440,d:40,z:28,e:1,a:0,j:"absolute",b:0},"515":{bI:1.3,aR:"1",x:"visible",bE:"398",bJ:1.1159018987341769,b:0,a:0,j:"absolute",z:2,k:"video",aO:"0",d:750,bF:"513",c:1440,aQ:"1",aH:"1"},"510":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"506",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"509":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"506",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"507":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"506",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"474"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Quiz",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"513":{k:"div",x:"visible",c:1440,d:750,z:30,a:0,j:"absolute",b:40},"516":{h:"392",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:31,k:"div",c:1440,d:3949,r:"inline"},"505":{h:"400",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-85,a:0,j:"absolute",z:32,k:"div",dB:"img",d:85,c:1440,r:"inline"},"511":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"506",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"434"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Vision",x:"visible",I:"None",a:725,y:"preserve",J:"None"}}},{A:{a:[{p:4,h:"48"}]},o:"431",p:"600px",cA:false,Y:1440,Z:3172,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"428":{i:"428",n:"shop dropdown",z:0,b:[],a:[],f:30},"430":{i:"430",n:"explore dropdown",z:0,b:[],a:[],f:30},"429":{i:"429",n:"create dropdown",z:0,b:[],a:[],f:30},"426":{i:"426",n:"hand hover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"427":{i:"427",n:"btn hover",z:0,b:[],a:[],f:30}},bZ:180,O:["518","524","519","520","521","522","523","525","517"],n:"Untitled Layout","_":1,v:{"525":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"519",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"474"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Quiz",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"518":{h:"470",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-85,a:0,j:"absolute",z:36,k:"div",dB:"img",d:85,c:1440,r:"inline"},"521":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"519",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"30"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"524":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"519",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"517":{h:"503",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:35,k:"div",c:1440,d:3132,r:"inline"},"520":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"519",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"523":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"519",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"434"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Vision",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"519":{x:"visible",k:"div",c:1440,d:40,z:28,e:1,a:0,j:"absolute",b:0},"522":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"519",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"402"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Ways to Give",x:"visible",I:"None",a:610,y:"preserve",J:"None"}}},{A:{a:[{p:4,h:"107"}]},o:"463",p:"600px",cA:false,Y:1440,Z:5233,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"462":{i:"462",n:"explore dropdown",z:0,b:[],a:[],f:30},"458":{i:"458",n:"hand hover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:4.09,b:[],a:[{f:"c",p:2,y:4.09,z:0,i:"ActionHandler",s:{a:[{i:0,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"31"}]},o:"kTimelineDefaultIdentifier"}],f:30},"459":{i:"459",n:"btn hover",z:0,b:[],a:[],f:30},"460":{i:"460",n:"shop dropdown",z:0,b:[],a:[],f:30},"461":{i:"461",n:"create dropdown",z:0,b:[],a:[],f:30}},bZ:180,O:["526","528","527","529","531","532","530","533","534"],n:"Untitled Layout","_":2,v:{"528":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"527",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"531":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"527",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"30"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"534":{h:"466",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:34,k:"div",c:1440,d:5193,r:"inline"},"527":{x:"visible",k:"div",c:1440,d:40,z:28,e:1,a:0,j:"absolute",b:0},"530":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"527",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{p:0}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Vision",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"533":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"527",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"474"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Quiz",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"526":{h:"472",p:"no-repeat",x:"visible",i:"menuc",q:"100% 100%",b:-85,a:0,j:"absolute",z:35,k:"div",dB:"img",d:85,c:1440,r:"inline"},"529":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"527",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"532":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"527",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"402"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Ways to Give",x:"visible",I:"None",a:610,y:"preserve",J:"None"}}},{A:{a:[{p:4,h:"107"}]},o:"500",p:"600px",cA:false,Y:1440,Z:850,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"498":{i:"498",n:"create dropdown",z:0,b:[],a:[],f:30},"495":{i:"495",n:"hand hover",z:0,b:[],a:[],f:30},"499":{i:"499",n:"explore dropdown",z:0,b:[],a:[],f:30},"496":{i:"496",n:"btn hover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:4.09,b:[],a:[{f:"c",p:2,y:4.09,z:0,i:"ActionHandler",s:{a:[{i:0,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"31"}]},o:"kTimelineDefaultIdentifier"}],f:30},"497":{i:"497",n:"shop dropdown",z:0,b:[],a:[],f:30}},bZ:180,O:["537","536","539","542","540","541","538","535"],n:"Untitled Layout","_":3,v:{"538":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"536",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{p:0}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Quiz",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"541":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"536",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"434"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Vision",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"537":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"536",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"540":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"536",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"402"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Ways to Give",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"536":{x:"visible",k:"div",c:1440,d:40,z:28,e:1,a:0,j:"absolute",b:0},"539":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"536",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"542":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"536",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"30"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"535":{h:"501",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:29,k:"div",c:1440,d:810,r:"inline"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
