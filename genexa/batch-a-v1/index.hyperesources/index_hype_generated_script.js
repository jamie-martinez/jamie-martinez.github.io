//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("index_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_538","HYPE_dtl_538",!0==(null!=a&&10>a||false==!0)?"HYPE-538.full.min.js":"HYPE-538.thin.min.js"),false==!0&&(a=a||l("HYPE_w_538","HYPE_wdtl_538","HYPE-538.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\t\tmenu = hypeDocument.getElementById('menu');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 250;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n}",identifier:"693"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\t\t\n\t\t\tmenub = hypeDocument.getElementById('menub');\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menubDelta = 250;\n\n\t\tif (scroll > menubDelta){\n\t\t\tmenub.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menubDelta){\n\t\t\tmenub.classList.remove('sticky')\n\t\t}\n\t};\t\n\t\n\n\n\t\n}",identifier:"696"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_538(c,e,{"3":{p:1,n:"Product%20Page-v1.jpg",g:"706",o:true,t:"@1x"},"4":{p:1,n:"HeroText.png",g:"711",t:"@1x"},"0":{p:1,n:"Triangle.png",g:"677",t:"@1x"},"5":{n:"Hero-v2.mp4",g:"713",t:"video/mp4"},"1":{p:1,n:"Home2-World.png",g:"685",t:"@1x"},"6":{p:1,n:"Product%20Page%20Alt-v1.jpg",g:"728",o:true,t:"@1x"},"2":{p:1,n:"Homepage-v1.png",g:"701",t:"@1x"}},h,[],d,[{n:"Home",o:"407",X:[0]},{n:"Product",o:"1",X:[1]},{n:"Product Alt",o:"715",X:[2]}],[{A:{a:[{p:4,h:"693"}]},o:"411",p:"600px",x:0,cA:false,Z:4293,Y:1440,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"462":{i:"462",n:"Button Hover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:20,b:[],a:[{y:0,p:1,i:"Video Track",z:12.01,o:"755",f:"a"},{f:"c",p:2,y:14.15,z:0,i:"ActionHandler",s:{a:[{i:1.5,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"410"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["754","752","747","755","753","756","749","750","751","748"],v:{"749":{b:7,z:5,K:"None",c:69,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"748",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Home",x:"visible",I:"None",a:602,y:"preserve",J:"None"},"752":{h:"701",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",r:"inline",c:1440,k:"div",z:26,d:4253},"755":{aR:true,x:"visible",bE:"713",a:0,b:-22,j:"absolute",bF:"753",c:1440,k:"video",z:2,d:684,aO:false,aQ:true,aH:true},"748":{x:"visible",k:"div",c:1440,d:40,z:21,e:1,a:0,j:"absolute",b:0},"751":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"748",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"754":{h:"711",p:"no-repeat",x:"visible",a:380,q:"100% 100%",b:290,j:"absolute",r:"inline",c:680,k:"div",z:27,d:224},"747":{c:1440,d:685,I:"None",r:"inline",J:"None",K:"None",g:"rgba(0, 0, 0, 0.400)",L:"None",M:0,N:0,bF:"753",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",a:0,b:0},"750":{b:7,z:4,K:"None",c:69,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"748",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:0.5,p:1,g:2,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Product 1",x:"visible",I:"None",a:682,y:"preserve",J:"None"},"753":{k:"div",x:"hidden",c:1440,d:685,z:22,a:0,j:"absolute",b:119},"756":{b:7,z:6,K:"None",c:69,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"748",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:0.5,p:1,g:2,e:"715"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Product 2",x:"visible",I:"None",a:762,y:"preserve",J:"None"}}},{A:{a:[{p:4,h:"696"}]},o:"3",p:"600px",x:1,cA:false,Z:6974,Y:1440,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"30":{i:"30",n:"Button Hover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:20,b:[],a:[],f:30},"41":{i:"41",n:"Play Button Hover",z:0,b:[],a:[],f:30},"35":{i:"35",n:"Shop Hover",z:0,b:[],a:[],f:30}},bZ:180,O:["764","763","762","761","760","757","758","759"],v:{"759":{h:"677",p:"no-repeat",x:"visible",a:706,q:"100% 100%",b:644,j:"absolute",r:"inline",c:27,k:"div",z:17,d:21},"762":{b:7,z:4,K:"None",c:69,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"760",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Product 1",x:"visible",I:"None",a:682,y:"preserve",J:"None"},"758":{h:"685",p:"no-repeat",x:"visible",a:179,q:"100% 100%",b:366,j:"absolute",r:"inline",c:1082,k:"div",z:18,d:108},"761":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"760",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"764":{b:7,z:6,K:"None",c:69,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"760",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:0.5,p:1,g:2,e:"715"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Product 2",x:"visible",I:"None",a:762,y:"preserve",J:"None"},"757":{h:"706",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",r:"inline",c:1440,k:"div",z:20,d:6934},"760":{x:"visible",k:"div",c:1440,d:40,z:21,e:1,a:0,j:"absolute",b:0},"763":{b:7,z:5,K:"None",c:69,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"760",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:0.5,p:1,g:2,e:"407"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Home",x:"visible",I:"None",a:602,y:"preserve",J:"None"}}},{A:{a:[{p:4,h:"696"}]},o:"727",p:"600px",x:2,cA:false,Z:6974,Y:1440,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"724":{i:"724",n:"Button Hover",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:20,b:[],a:[],f:30},"725":{i:"725",n:"Shop Hover",z:0,b:[],a:[],f:30},"726":{i:"726",n:"Play Button Hover",z:0,b:[],a:[],f:30}},bZ:180,O:["772","771","770","769","768","767","766","765"],v:{"772":{b:7,z:6,K:"None",c:69,L:"None",d:19,aS:3,M:0,e:0.29999999999999999,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"768",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Product 2",x:"visible",I:"None",a:762,y:"preserve",J:"None"},"765":{h:"677",p:"no-repeat",x:"visible",a:706,q:"100% 100%",b:644,j:"absolute",r:"inline",c:27,k:"div",z:17,d:21},"768":{x:"visible",k:"div",c:1440,d:40,z:20,e:1,a:0,j:"absolute",b:0},"771":{b:7,z:5,K:"None",c:69,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"768",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:0.5,p:1,g:2,e:"407"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Home",x:"visible",I:"None",a:602,y:"preserve",J:"None"},"767":{h:"728",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",r:"inline",c:1440,k:"div",z:19,d:6934},"770":{b:7,z:4,K:"None",c:69,L:"None",d:19,aS:3,M:0,e:0.59999999999999998,bD:"none",N:0,aT:3,O:0,g:"#333333",aU:3,P:0,bF:"768",aV:3,j:"absolute",aI:4,k:"div",aJ:4,aK:4,X:-0.32954499999999998,aL:4,A:"#A0A0A0",Y:19,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:11,aA:{a:[{d:0.5,p:1,g:2,e:"1"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"Product 1",x:"visible",I:"None",a:682,y:"preserve",J:"None"},"766":{h:"685",p:"no-repeat",x:"visible",a:179,q:"100% 100%",b:366,j:"absolute",r:"inline",c:1082,k:"div",z:18,d:108},"769":{c:1440,d:40,I:"None",J:"None",K:"None",g:"#D3D5D7",L:"None",M:0,N:0,bF:"768",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
