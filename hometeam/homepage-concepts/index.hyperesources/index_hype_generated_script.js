//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 100;\n\t\tvar menuFadeOut = 9000;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menuFadeOut){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n}",identifier:"47"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 100;\n\t\tvar menubFadeOut = 9000;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menubFadeOut){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\t\n}",identifier:"48"},{name:"untitledFunction3",source:"function(hypeDocument, element, event) {\t\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menuc');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menucDelta = 100;\n\t\tvar menucFadeOut = 9000;\n\n\t\tif (scroll > menucDelta){\n\t\t\tmenuc.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menucDelta){\n\t\t\tmenuc.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menucFadeOut){\n\t\t\tmenuc.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\t\n}",identifier:"107"},{name:"untitledFunction4",source:"function(hypeDocument, element, event) {\t\n\t\t\t\n\t\t\n\t\t\tmenu = hypeDocument.getElementById('menud');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menudDelta = 100;\n\t\tvar menudFadeOut = 9000;\n\n\t\tif (scroll > menudDelta){\n\t\t\tmenud.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menudDelta){\n\t\t\tmenud.classList.remove('sticky')\n\t\t}\n\t\tif (scroll > menudFadeOut){\n\t\t\tmenud.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n}",identifier:"109"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"10":{p:1,n:"homepage-a-2_2x.png",g:"59",o:true,t:"@2x"},"2":{p:1,n:"homepage-b_2x.png",g:"18",o:true,t:"@2x"},"-2":{n:"blank.gif"},"3":{p:1,n:"homepage-b-sticky.png",g:"49",o:true,t:"@1x"},"11":{p:1,n:"homepage-a-3.png",g:"94",o:true,t:"@1x"},"4":{p:1,n:"homepage-b-sticky_2x.png",g:"49",o:true,t:"@2x"},"5":{p:1,n:"homepage-a-sticky.jpg",g:"51",o:true,t:"@1x"},"12":{p:1,n:"homepage-a-3_2x.png",g:"94",o:true,t:"@2x"},"6":{p:1,n:"homepage-a-sticky_2x.jpg",g:"51",o:true,t:"@2x"},"7":{p:1,n:"homepage-a.png",g:"38",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"0":{n:"hero-vid.mp4",g:"16",t:"video/mp4"},"8":{p:1,n:"homepage-a_2x.png",g:"38",o:true,t:"@2x"},"1":{p:1,n:"homepage-b.png",g:"18",o:true,t:"@1x"},"9":{p:1,n:"homepage-a-2.png",g:"59",o:true,t:"@1x"}},h,[],d,[{n:"Concept A",o:"30",X:[0]},{n:"Concept A 2",o:"56",X:[1]},{n:"Concept A 3",o:"71",X:[2]},{n:"Concept B",o:"1",X:[3]}],[{A:{a:[{p:4,h:"47"}]},o:"32",p:"600px",cA:false,Y:1440,Z:7872,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:7.14,b:[],a:[{y:0,p:1,i:"Video Track",z:7.14,o:"113",f:"a"}],f:30}},bZ:180,O:["111","116","115","117","118","119","120","121","110","114","113","112"],n:"Untitled Layout","_":0,v:{"120":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"115",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"71"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A-3<br>",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"117":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"115",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"112":{k:"div",x:"hidden",c:1440,d:810,z:1,a:0,j:"absolute",b:40},"115":{x:"visible",k:"div",c:1440,d:40,z:8,e:1,a:0,j:"absolute",b:0},"121":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"115",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"110":{h:"38",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:2,k:"div",c:1440,d:7832,r:"inline"},"118":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"115",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"113":{aR:"1",x:"visible",bE:"16",a:0,b:0,j:"absolute",bF:"112",c:1440,k:"video",z:5,d:810,aO:"0",aQ:"1",aH:"1"},"116":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"115",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"111":{h:"51",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",b:-65,a:0,j:"absolute",z:9,k:"div",dB:"img",d:65,c:1440,r:"inline"},"119":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"115",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"56"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A-2",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"114":{c:1440,d:810,I:"None",J:"None",K:"None",g:"rgba(0, 0, 0, 0.200)",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:6,bF:"112",D:"#D8DDE4",P:0,a:0,F:"left",b:0}}},{A:{a:[{p:4,h:"107"}]},o:"58",p:"600px",cA:false,Y:1440,Z:7872,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:7.14,b:[],a:[{y:0,p:1,i:"Video Track",z:7.14,o:"125",f:"a"}],f:30}},bZ:180,O:["133","130","126","127","129","128","131","132","122","124","125","123"],n:"Untitled Layout","_":1,v:{"128":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"126",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A-2",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"123":{k:"div",x:"hidden",c:1440,d:810,z:1,a:0,j:"absolute",b:40},"126":{x:"visible",k:"div",c:1440,d:40,z:3,e:1,a:0,j:"absolute",b:0},"132":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"126",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"129":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"126",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"30"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"124":{c:1440,d:810,I:"None",J:"None",K:"None",g:"rgba(0, 0, 0, 0.400)",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:6,bF:"123",D:"#D8DDE4",P:0,a:0,F:"left",b:0},"130":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"126",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"127":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"126",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"122":{h:"59",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:2,k:"div",c:1440,d:7832,r:"inline"},"133":{h:"51",p:"no-repeat",x:"visible",i:"menuc",q:"100% 100%",b:-65,a:0,j:"absolute",z:10,k:"div",dB:"img",d:65,c:1440,r:"inline"},"125":{bI:0,aR:"1",x:"visible",bE:"16",a:0,b:0,j:"absolute",bF:"123",z:5,k:"video",aO:"0",d:810,c:1440,aQ:"1",aH:"1"},"131":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"126",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"71"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A-3<br>",x:"visible",I:"None",a:725,y:"preserve",J:"None"}}},{A:{a:[{p:4,h:"109"}]},o:"73",p:"600px",cA:false,Y:1440,Z:7872,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:7.14,b:[],a:[{y:0,p:1,i:"Video Track",z:7.14,o:"142",f:"a"}],f:30}},bZ:180,O:["145","135","134","136","137","138","139","140","144","143","142","141"],n:"Untitled Layout","_":2,v:{"139":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"134",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A-3<br>",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"134":{x:"visible",k:"div",c:1440,d:40,z:12,e:1,a:0,j:"absolute",b:0},"140":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"134",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"145":{h:"51",p:"no-repeat",x:"visible",i:"menud",q:"100% 100%",b:-65,a:0,j:"absolute",z:13,k:"div",dB:"img",d:65,c:1440,r:"inline"},"137":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"134",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"30"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"143":{c:1440,d:810,I:"None",J:"None",K:"None",g:"rgba(0, 0, 0, 0.400)",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:6,bF:"141",D:"#D8DDE4",P:0,a:0,F:"left",b:0},"135":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"134",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"141":{k:"div",x:"hidden",c:1440,d:810,z:1,a:0,j:"absolute",b:40},"138":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"134",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"56"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A-2",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"144":{w:"",h:"94",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:11,k:"div",c:1440,d:7832.0000000000009,r:"inline"},"136":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"134",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5},"142":{bI:0,aR:"1",x:"visible",bE:"16",a:0,b:0,j:"absolute",bF:"141",z:5,k:"video",aO:"0",d:810,c:1440,aQ:"1",aH:"1"}}},{A:{a:[{p:4,h:"48"}]},o:"3",p:"600px",cA:false,Y:1440,Z:8308,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:7.14,b:[],a:[{y:0,p:1,i:"Video Track",z:7.14,o:"149",f:"a"},{f:"c",p:2,y:7.14,z:0,i:"ActionHandler",s:{a:[{i:0,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["146","152","151","153","154","155","156","157","150","148","147","149"],n:"Untitled Layout","_":3,v:{"156":{b:7,z:8,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"151",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"71"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A-3<br>",x:"visible",I:"None",a:725,y:"preserve",J:"None"},"151":{x:"visible",k:"div",c:1440,d:40,z:3,e:1,a:0,j:"absolute",b:0},"148":{c:1440,d:810,I:"None",J:"None",K:"None",g:"rgba(0, 0, 0, 0.200)",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:5,bF:"147",D:"#D8DDE4",P:0,a:0,F:"left",b:0},"154":{b:7,z:6,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"151",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"30"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A",x:"visible",I:"None",a:495,y:"preserve",J:"None"},"157":{b:7,z:9,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"151",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept B",x:"visible",I:"None",a:840,y:"preserve",J:"None"},"146":{h:"49",p:"no-repeat",x:"visible",i:"menub",q:"100% 100%",b:-70,a:0,j:"absolute",z:9,k:"div",dB:"img",d:70,c:1440,r:"inline"},"152":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"151",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"149":{aR:"1",x:"visible",bE:"16",a:0,b:56,j:"absolute",bF:"147",c:1440,k:"video",z:6,d:810,aO:"0",aQ:"1",aH:"1"},"150":{h:"18",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",dB:"img",z:2,k:"div",c:1440,d:8268,r:"inline"},"155":{b:7,z:7,K:"None",c:99,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,dB:"button",O:0,g:"#333333",aU:3,P:0,bF:"151",aV:3,j:"absolute",k:"div",aI:4,aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"56"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Concept A-2",x:"visible",I:"None",a:610,y:"preserve",J:"None"},"147":{k:"div",x:"hidden",c:1440,d:810,z:1,a:0,j:"absolute",b:40},"153":{G:"#CA3725",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",v:"bold",w:"PROTOTYPE NAVIGATION<br>",bF:"151",A:"#CA3725",x:"visible",yy:"nowrap",B:"#CA3725",y:"preserve",j:"absolute",C:"#CA3725",z:5,k:"div",D:"#CA3725",aS:8,aT:8,a:34,b:5}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
