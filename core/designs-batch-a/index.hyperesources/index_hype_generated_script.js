//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"47"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 9000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\t\n}",identifier:"48"},{name:"untitledFunction3",source:"function(hypeDocument, element, event) {\t\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menuc');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menucDelta = 100;\n\t\tvar menucFadeOut = 9000;\n\n\t\tif (scroll > menucDelta){\n\t\t\tmenuc.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menucDelta){\n\t\t\tmenuc.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menucFadeOut){\n\t\t\tmenuc.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\t\n}",identifier:"107"},{name:"untitledFunction4",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menud');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menudDelta = 300;\n\t\tvar menudFadeOut = 9000;\n\n\t\tif (scroll > menudDelta){\n\t\t\tmenud.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menudDelta){\n\t\t\tmenud.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menudFadeOut){\n\t\t\tmenud.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n}",identifier:"109"},{name:"untitledFunction5",source:"function(hypeDocument, element, event) {\t\t\t\t\n\t\t\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('pdp');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar pdpDelta = 0;\n\t\tvar pdpFadeOut = 800;\n\n\t\tif (scroll > pdpDelta){\n\t\t\tpdp.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= pdpDelta){\n\t\t\tpdp.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > pdpFadeOut){\n\t\t\tpdp.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\t\n\n\t\n}",identifier:"152"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"3":{p:1,n:"nav-dropdown-1.png",g:"513",o:true,t:"@1x"},"12":{p:1,n:"sticky-nav_2x.png",g:"505",o:true,t:"@2x"},"21":{p:1,n:"vision.jpg",g:"509",o:true,t:"@1x"},"4":{p:1,n:"nav-dropdown-1_2x.png",g:"513",o:true,t:"@2x"},"30":{p:1,n:"homepage_2x.png",g:"392",o:true,t:"@2x"},"13":{p:1,n:"students-text.png",g:"527",o:true,t:"@1x"},"5":{p:1,n:"nav-dropdown-2.png",g:"523",o:true,t:"@1x"},"22":{p:1,n:"vision_2x.jpg",g:"509",o:true,t:"@2x"},"6":{p:1,n:"nav-dropdown-2_2x.png",g:"523",o:true,t:"@2x"},"14":{p:1,n:"students-text_2x.png",g:"527",o:true,t:"@2x"},"7":{p:1,n:"sticky-nav-2.png",g:"470",o:true,t:"@1x"},"23":{p:1,n:"giving-opp-card.jpg",g:"555",o:true,t:"@1x"},"8":{p:1,n:"sticky-nav-2_2x.png",g:"470",o:true,t:"@2x"},"15":{p:1,n:"students-icon.png",g:"529",o:true,t:"@1x"},"24":{p:1,n:"giving-opp-card_2x.jpg",g:"555",o:true,t:"@2x"},"9":{p:1,n:"sticky-nav-3.png",g:"472",o:true,t:"@1x"},"16":{p:1,n:"students-icon_2x.png",g:"529",o:true,t:"@2x"},"25":{p:1,n:"quiz-card.jpg",g:"565",o:true,t:"@1x"},"17":{p:1,n:"take-quiz-text.png",g:"550",o:true,t:"@1x"},"26":{p:1,n:"quiz-card_2x.jpg",g:"565",o:true,t:"@2x"},"18":{p:1,n:"take-quiz-text_2x.png",g:"550",o:true,t:"@2x"},"27":{p:1,n:"quiz.jpg",g:"511",o:true,t:"@1x"},"19":{p:1,n:"giving-opportunities.jpg",g:"507",o:true,t:"@1x"},"28":{p:1,n:"quiz_2x.jpg",g:"511",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"29":{p:1,n:"homepage.png",g:"392",o:true,t:"@1x"},"-2":{n:"blank.gif"},"10":{p:1,n:"sticky-nav-3_2x.png",g:"472",o:true,t:"@2x"},"0":{n:"marbling2.mp4",g:"338",t:"video/mp4"},"1":{p:1,n:"b-mouse.png",g:"387",t:"@1x"},"11":{p:1,n:"sticky-nav.png",g:"505",o:true,t:"@1x"},"2":{n:"video-loop.mp4",g:"398",t:"video/mp4"},"20":{p:1,n:"giving-opportunities_2x.jpg",g:"507",o:true,t:"@2x"}},h,[],d,[{n:"Homepage",o:"30",X:[0]},{n:"Giving Opportunities",o:"402",X:[1]},{n:"Vision",o:"434",X:[2]},{n:"Quiz",o:"474",X:[3]}],[{A:{a:[{p:4,h:"47"}]},o:"32",p:"600px",cA:false,Y:1440,Z:3534,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"553":{i:"553",n:"quiz btn hover",z:0.03,b:[],a:[{f:"c",y:0,z:0,i:"e",e:1,s:0,o:"597"},{f:"c",y:0,z:0.03,i:"b",e:1113,s:1105,o:"597"},{f:"c",y:0,z:0.03,i:"a",e:633,s:625,o:"597"},{f:"c",y:0,z:0.03,i:"c",e:182,s:184,o:"597"},{f:"c",y:0,z:0.03,i:"d",e:54,s:56,o:"597"},{y:0,i:"e",s:1,z:0,o:"597",f:"c"},{y:0.03,i:"a",s:633,z:0,o:"597",f:"c"},{y:0.03,i:"c",s:182,z:0,o:"597",f:"c"},{y:0.03,i:"b",s:1113,z:0,o:"597",f:"c"},{y:0.03,i:"d",s:54,z:0,o:"597",f:"c"}],f:30},"517":{i:"517",n:"about dropdown",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"574"},{y:0.06,i:"e",s:1,z:0,o:"574",f:"c"}],f:30},"522":{i:"522",n:"give dropdown",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"589"},{y:0.06,i:"e",s:1,z:0,o:"589",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:15.02,b:[],a:[{y:0,p:1,i:"Video Track",z:15.02,o:"586",f:"a"},{y:0,i:"e",s:0,z:0,o:"574",f:"c"},{y:0,i:"b",s:2118,z:0,o:"596",f:"535"},{y:0,i:"d",s:0,z:0,o:"596",f:"535"},{y:0,i:"e",s:0,z:0,o:"597",f:"c"}],f:30},"532":{i:"532",n:"students hover",z:0.06,b:[],a:[{y:0,i:"b",s:-12,z:0,o:"595",f:"a"},{y:0,i:"d",s:52,z:0,o:"595",f:"a"},{f:"535",y:0,z:0.06,i:"d",e:28,s:0,o:"596"},{f:"535",y:0,z:0.06,i:"b",e:2104,s:2118,o:"596"},{f:"535",y:0,z:0.06,i:"b",e:2140,s:2126,o:"592"},{f:"535",y:0,z:0.06,i:"b",e:2026,s:2034,o:"593"},{y:0.06,i:"b",s:2104,z:0,o:"596",f:"c"},{y:0.06,i:"d",s:28,z:0,o:"596",f:"c"},{y:0.06,i:"b",s:2140,z:0,o:"592",f:"c"},{y:0.06,i:"b",s:2026,z:0,o:"593",f:"c"}],f:30}},bZ:180,O:["583","577","575","578","579","581","580","576","574","589","590","585","584","587","582","591","588","586","598","600","597","599","593","594","595","596","592"],n:"Untitled Layout","_":0,v:{"580":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"575",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"434"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Vision",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"593":{h:"529",p:"no-repeat",x:"visible",a:415,q:"100% 100%",b:2034,j:"absolute",dB:"img",z:34,k:"div",c:170,d:86,r:"inline",cQ:0.5,cR:0.5},"585":{c:1440,d:810,I:"None",r:"inline",J:"None",K:"None",g:"rgba(0, 0, 0, 0.500)",L:"None",M:0,N:0,bF:"584",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:4,P:0,D:"#D8DDE4",a:0,b:0},"577":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"575",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"598":{c:188,d:60,I:"None",J:"None",K:"None",g:"#408FDE",L:"None",M:0,N:0,bF:"600",A:"#FCD450",x:"visible",j:"absolute",B:"#FCD450",k:"div",O:0,C:"#FCD450",z:1,P:0,D:"#FCD450",a:-1,b:0},"581":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"575",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"402"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Ways to Give",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"600":{x:"visible",k:"div",aD:{a:[{b:"553",p:3,z:false,symbolOid:"31"}]},c:187,d:60,z:36,r:"inline",a:626,aC:{a:[{b:"553",p:3,z:true,symbolOid:"31"}]},j:"absolute",b:1105},"594":{c:100,d:100,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:37,P:0,D:"#D8DDE4",aC:{a:[{b:"532",p:3,z:true,symbolOid:"31"}]},a:451,aD:{a:[{b:"532",p:3,z:false,symbolOid:"31"}]},b:2041},"586":{bI:1.3,aR:"1",x:"visible",bE:"398",bJ:1.1159018987341769,b:60,a:0,j:"absolute",z:2,k:"video",aO:"0",d:750,bF:"584",c:1440,aQ:"1",aH:"1"},"578":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"575",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"599":{h:"550",p:"no-repeat",x:"visible",a:-14,q:"100% 100%",b:20,j:"absolute",dB:"img",z:2,k:"div",bF:"600",d:22,c:212,cQ:0.5,r:"inline",cR:0.5},"590":{h:"392",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:31,k:"div",c:1440,d:3494,r:"inline"},"582":{c:24,d:45,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"517",p:3,z:true,symbolOid:"31"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:49,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:614,b:61},"574":{h:"513",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:44,k:"div",c:1440,d:285,r:"inline",e:0},"595":{c:4,d:70,I:"None",J:"None",K:"None",g:"#FCD450",L:"None",M:0,N:0,bF:"596",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:-1,b:-41},"587":{c:160,d:45,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"517",p:3,z:false,symbolOid:"31"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:48,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:454,b:61},"579":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"575",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"591":{c:102,d:45,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"522",p:3,z:false,symbolOid:"31"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:46,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:654,b:61},"583":{h:"505",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-80,a:0,j:"absolute",z:39,k:"div",dB:"img",d:80,c:1440,r:"inline"},"575":{x:"visible",k:"div",c:1440,d:40,z:28,e:1,a:0,j:"absolute",b:0},"596":{k:"div",x:"hidden",c:2,d:0,z:38,a:500,j:"absolute",b:2118},"588":{c:24,d:45,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"522",p:3,z:true,symbolOid:"31"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:47,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:756,b:61},"592":{h:"527",p:"no-repeat",x:"visible",a:425,q:"100% 100%",b:2126,j:"absolute",dB:"img",z:33,k:"div",c:148,d:22,r:"inline",cQ:0.5,cR:0.5},"584":{k:"div",x:"visible",c:1440,d:810,z:30,a:0,j:"absolute",b:40},"576":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"575",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"474"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Quiz",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"597":{c:184,d:56,I:"Solid",r:"inline",e:0,J:"Solid",K:"Solid",L:"Solid",M:2,N:2,A:"#FCD450",x:"visible",j:"absolute",B:"#FCD450",k:"div",O:2,C:"#FCD450",z:35,P:2,D:"#FCD450",a:625,b:1105},"589":{h:"523",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:43,k:"div",c:1440,d:285,r:"inline",e:0}}},{A:{a:[{p:4,h:"48"}]},o:"431",p:"600px",cA:false,Y:1440,Z:3408,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"427":{i:"427",n:"btn hover",z:0,b:[],a:[],f:30},"430":{i:"430",n:"explore dropdown",z:0,b:[],a:[],f:30},"426":{i:"426",n:"hand hover",z:0,b:[],a:[],f:30},"429":{i:"429",n:"create dropdown",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[{y:0,i:"e",s:0,z:0,o:"611",f:"c"}],f:30},"428":{i:"428",n:"shop dropdown",z:0,b:[],a:[],f:30},"558":{i:"558",n:"giving opp card hover",z:0.06,b:[],a:[{f:"c",y:0,z:0,i:"e",e:1,s:0,o:"611"},{f:"535",y:0,z:0.06,i:"b",e:1006,s:998,o:"611"},{f:"535",y:0,z:0.06,i:"a",e:88,s:80,o:"611"},{y:0,i:"e",s:1,z:0,o:"611",f:"c"},{y:0.06,i:"b",s:1006,z:0,o:"611",f:"c"},{y:0.06,i:"a",s:88,z:0,o:"611",f:"c"}],f:30}},bZ:180,O:["602","608","603","604","605","606","607","609","601","610","611"],n:"Untitled Layout","_":1,v:{"603":{x:"visible",k:"div",c:1440,d:40,z:28,e:1,a:0,j:"absolute",b:0},"606":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"603",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"402"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Ways to Give",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"609":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"603",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"474"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Quiz",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"602":{h:"470",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-80,a:0,j:"absolute",z:39,k:"div",dB:"img",d:80,c:1440,r:"inline"},"605":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"603",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"30"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"608":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"603",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"611":{c:396,d:366,I:"Solid",r:"inline",e:0,J:"Solid",K:"Solid",L:"Solid",M:2,N:2,A:"#FCD450",x:"visible",j:"absolute",B:"#FCD450",k:"div",O:2,C:"#FCD450",z:37,P:2,D:"#FCD450",a:80,b:998},"601":{h:"507",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:36,k:"div",c:1440,d:3368,r:"inline"},"604":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"603",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"607":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"603",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"434"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Vision",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"610":{aD:{a:[{b:"558",p:3,z:false,symbolOid:"403"}]},h:"555",x:"visible",a:-120,q:"100% 100%",b:813,dB:"img",j:"absolute",z:38,k:"div",p:"no-repeat",d:740,c:800,cQ:0.5,r:"inline",cR:0.5,aC:{a:[{b:"558",p:3,z:true,symbolOid:"403"}]}}}},{A:{a:[{p:4,h:"107"}]},o:"463",p:"600px",cA:false,Y:1440,Z:5446,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"462":{i:"462",n:"explore dropdown",z:0,b:[],a:[],f:30},"458":{i:"458",n:"hand hover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:4.09,b:[],a:[{f:"c",p:2,y:4.09,z:0,i:"ActionHandler",s:{a:[{i:0,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"31"}]},o:"kTimelineDefaultIdentifier"}],f:30},"459":{i:"459",n:"btn hover",z:0,b:[],a:[],f:30},"460":{i:"460",n:"shop dropdown",z:0,b:[],a:[],f:30},"461":{i:"461",n:"create dropdown",z:0,b:[],a:[],f:30}},bZ:180,O:["612","614","613","615","617","618","616","619","620"],n:"Untitled Layout","_":2,v:{"616":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"613",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{p:0}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Vision",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"619":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"613",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"474"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Quiz",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"612":{h:"472",p:"no-repeat",x:"visible",i:"menuc",q:"100% 100%",b:-80,a:0,j:"absolute",z:36,k:"div",dB:"img",d:80,c:1440,r:"inline"},"615":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"613",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"618":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"613",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"402"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Ways to Give",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"614":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"613",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"617":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"613",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"30"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"620":{h:"509",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:35,k:"div",c:1440,d:5406,r:"inline"},"613":{x:"visible",k:"div",c:1440,d:40,z:28,e:1,a:0,j:"absolute",b:0}}},{A:{a:[{p:4,h:"107"}]},o:"500",p:"600px",cA:false,Y:1440,Z:850,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"567":{i:"567",n:"quiz card hover",z:0.03,b:[],a:[{f:"c",y:0,z:0,i:"e",e:1,s:0,o:"629"},{f:"535",y:0,z:0.03,i:"b",e:417,s:409,o:"629"},{f:"535",y:0,z:0.03,i:"a",e:417,s:409,o:"629"},{y:0,i:"e",s:1,z:0,o:"629",f:"c"},{y:0.03,i:"b",s:417,z:0,o:"629",f:"c"},{y:0.03,i:"a",s:417,z:0,o:"629",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:4.09,b:[],a:[{y:0,i:"e",s:0,z:0,o:"629",f:"c"},{f:"c",p:2,y:4.09,z:0,i:"ActionHandler",s:{a:[{i:0,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"31"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["623","622","625","628","626","627","624","621","630","629"],n:"Untitled Layout","_":3,v:{"629":{c:286,d:236,I:"Solid",r:"inline",e:0,J:"Solid",K:"Solid",L:"Solid",M:2,N:2,A:"#FCD450",x:"visible",j:"absolute",B:"#FCD450",k:"div",O:2,C:"#FCD450",z:30,P:2,D:"#FCD450",a:409,b:409},"622":{x:"visible",k:"div",c:1440,d:40,z:28,e:1,a:0,j:"absolute",b:0},"625":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"622",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"628":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"622",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"30"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Homepage",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"621":{h:"511",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:29,k:"div",c:1440,d:810,r:"inline"},"624":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"622",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{p:0}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Quiz",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"627":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"622",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"434"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Vision",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"630":{aD:{a:[{b:"567",p:3,z:false,symbolOid:"475"}]},h:"565",x:"visible",a:264,q:"100% 100%",b:289,dB:"img",j:"absolute",z:31,k:"div",p:"no-repeat",d:480,c:580,cQ:0.5,r:"inline",cR:0.5,aC:{a:[{b:"567",p:3,z:true,symbolOid:"475"}]}},"623":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"622",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"626":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"622",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"402"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Ways to Give",x:"visible",I:"None",a:610,y:"preserve",J:"None"}}}],{},g,{"535":[[0,0,0.6268,0,0.08926,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
