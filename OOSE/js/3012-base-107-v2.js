function getIPs(n){var i,o,u,t;try{var f={},r=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,e=!!window.webkitRTCPeerConnection;r||(i=iframe.contentWindow,r=i.RTCPeerConnection||i.mozRTCPeerConnection||i.webkitRTCPeerConnection,e=!!i.webkitRTCPeerConnection);o={optional:[{RtpDataChannels:!0}]};u=undefined;e&&(u={iceServers:[{urls:"stun:stun.services.mozilla.com"}]});t=new r(u,o);hCand=function(t){try{var i=/([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(t)[1]}catch(r){}i&&(/(10|192|172)\.[\d]+\.[\d]+\.[\d]+/.test(i)||(f[i]===undefined&&n(i),f[i]=!0))};t.onicecandidate=function(n){n.candidate&&hCand(n.candidate.candidate)};t.createDataChannel("");t.createOffer(function(n){t.setLocalDescription(n,function(){},function(){})},function(){});setTimeout(function(){if(t.localDescription){var n=t.localDescription.sdp.split("\n");n.forEach(function(n){n.indexOf("a=candidate:")===0&&hCand(n)})}},1e3)}catch(s){}}function aspError(n,t,i){return n!="System.ASP_Error"&&i.indexOf('<font face="Arial" size=2>')!=-1&&i.indexOf("error")!=-1?(i=i.replace(/([\<][\/]*(font|p)( face[\=][\"]Arial[\"] size[\=]2)*[\>]|^[\s]+|[\s]+$)/gi,"").replace(/[\s]+/gi," "),xSend("System.ASP_Error","loc="+encodeURIComponent(document.location)+
"&sv="+encodeURIComponent(n)+"&dv="+encodeURIComponent(t)+"&rv="+encodeURIComponent(i),function(){}),i):!1}function xSend(n,t,i){var r,u,f;typeof n=="string"&&(n={s:n,d:t,cb:i});n.stm||(n.stm=(new Date).getTime());document.xtt=0;r=document.location+"";n.xTest=r.indexOf("//test.")!=-1&&!n.noLog&&!document.noLog&&(n.s+"").indexOf("Facebook.Heat_save")==-1&&(n.s+"").indexOf("System.ASP_Error")==-1;u=r.match(/[\&\?]fbuid[\=]([\d]+)/i);u&&u.length&&(n.uid=u[1]);try{n.objXML=new XMLHttpRequest}catch(e){n.objXML=new ActiveXObject("Microsoft.XMLHTTP")}if(n.noencode||(n.s=escape(n.s)),n.tURL=n.furl?n.furl:"/api/"+
n.s+(n.uid?"&fbuid="+n.uid:"")+"&tt="+n.stm+(document.utf||n.utf?"&utf=y":""),n.tURL=n.tURL.replace(/[\+]/gi,"%20"),n.fLive&&r.indexOf("//test.")!=-1&&(n.tURL="https://"+(document.location.host+"").replace(/test./gi,"www.")+n.tURL+"&cors=y"),n.log=function(t,i){if(n.xTest)try{if(i&&i.substr(0,1)=="{"){var r=JSON.parse(i);r?(console.log(r),console.groupCollapsed(t),console.log(i),console.groupEnd()):console.log(i)}else i&&i.length>110?(console.groupCollapsed(t),console.log(i),console.groupEnd()):console.log(t+": "+i)}catch(u){}},n.xTest)try{console.groupEnd();console.groupCollapsed("XURLVR",n.tURL);console.trace();n.start=performance.now()}catch(e){n.log("XURLVR",n.tURL)}return n.wait&&(f=typeof n.wait=="number",setWait(f?n.wait:1,f?0:n.wait)),n.emsg&&typeof sys=="object"&&sys.manage&&(n.oecb=n.ecb,n.ecb=function(n,t){sys.manage.newMsg(t.emsg+(!n||!n.error?"":": "+n.error),"error ontop");t.oecb&&t.oecb(n,t)}),n.d?(n.log("XPOST",decodeURIComponent(n.d)),n.objXML.open("POST",n.tURL,n.cb?!0:!1),n.objXML.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.objXML.send(n.d)):(n.log("XGET",decodeURIComponent(n.s)),n.objXML.open("GET",n.tURL,n.cb?!0:!1),n.objXML.send(null)),n.catchErr=function(n){return function(){if(document.xtt=(new Date).getTime()-n.stm,n.isErr=n.noErr?0:aspError(n.s,n.d,n.objXML.responseText),n.xTest){n.log("XRESP",n.objXML.responseText);try{console.log("%d, %fms, %fkb",n.objXML.status,Math.round((performance.now()-n.start)*1e3)/1e3,Math.round((n.objXML.responseText+"").length*100/1024)/100);console.groupEnd();n.isErr&&console.error(n.isErr)}catch(t){}}}}(n),n.cb?(n.cb!==!0&&(n.objXML.onreadystatechange=function(n){return function(){if(n.objXML.readyState==4){n.wait&&setWait(0,typeof n.wait=="number"?0:n.wait);n.catchErr();var t=n.objXML.responseText+"";if(n.json)
{if(t.substr(0,1)=="{")try{t=JSON.parse(t)}catch(i){t={error:"Failed to parse JSON"}}else t={error:t};if(n.ecb&&(t.error||t.error==="")){n.ecb!=1&&n.ecb(t,n);return}}n.cb(t,n)}}}(n)),n):(n.catchErr(),n.objXML.responseText)}function qsV(n,t){t=t?t:document.location+"";try{return new RegExp("[\\?\\&\\#]"+n+"[\\=]([^\\&\\?\\=\\#]+)").exec(t)[1]}catch(i){}return""}function abTID(n){var i,t,r="abtid",e,u,o,f;for(n&&(t=n,i=n),typeof localStorage=="object"&&(n?localStorage.setItem(r,t):(i=localStorage.getItem(r),i&&(t=i))),typeof sessionStorage=="object"&&(i=sessionStorage.getItem(r),i?t||(i=t):t&&sessionStorage.setItem(r,t)),i=0,e=(document.cookie+"").split(";"),u=0;u<e.length;u++)o=e[u].split("="),o[0].replace(/[\s]/gi,"")==r&&(i=o[1].replace(/[\s]/gi,""));return i?t||(t=i):t&&(f=new Date,f.setFullYear(f.getFullYear()+10),document.cookie=r+"="+t+"; SameSite=None; Secure; expires="+f.toUTCString()),typeof quiz=="object"&&t&&!quiz.vid&&(quiz.vid=t),t}function addExp(n){var t="",i,r;return typeof localStorage=="object"&&(i=localStorage.getItem("exp"),i&&(t=mixExp(t,i))),typeof sessionStorage=="object"&&(i=sessionStorage.getItem("exp"),i&&(t=mixExp(t,i))),r=/exp[\=]([^\=\;]+)/.exec(document.cookie+""),r&&r[1]&&(t=mixExp(t,r[1])),t?mixExp(t,n):n}function mixExp(n,t){if(!t)return n;if(!n)return t;var i=(n?n+"":"").split(":"),r=(t?t+"":"").split(":");return r[1]||(r[1]=""),i[1]||(i[1]=""),i[0]=mixExpS(i[0],r[0]),i[1]=mixExpS(i[1],r[1]),i[0]&&i[1]&&(i[0]=i[0].replace(/(^|[\,\_\:])[\d]+(?=[\,\_\:]|$)/gi,function(n){return function(t){var i="";return/^[^\d]/.test(t)&&(i=t.substr(0,1),t=t.substr(1)),new RegExp("(^|[\\,\\_\\:])"+
t+"(?=[\\,\\_\\:]|$)","").test(n)&&(t=""),i+t}}(i[1])).replace(/((^|[\_\:])[\,]+|[\,]+([\_\:]|$))/g,"").replace(/[\,]+/gi,",")),i[0]==="_"&&(i[0]=""),i[1]==="_"&&(i[1]=""),i[0]+(i[1]?(i[0]?":":"")+i[1]:"")}function mixExpS(n,t){var i,e,r,f,u;if(!t)return n;if(!n)return t;for(i=(n?n+"":"").split("_"),e=(t?t+"":"").split("_"),e[1]||(e[1]=""),i[1]||(i[1]=""),r=0;r<2;r++)for(f=e[r].split(","),u=0;u<f.length;u++)f[u]&&(","+i[0]+","+i[1]+",").indexOf(","+f[u]+",")==-1&&(i[r]=(i[r]?i[r]+",":"")+f[u]);return i[0]+(i[1]?"_"+i[1]:"")}function mixV1(){}function abTrack(){var t=document.querySelectorAll("SCRIPT[src*='3012-base-107']"),i,p,r,w,n,u,c,l,e,a,o,s,v,y;t&&t[0]&&(i=t[t.length-1].getAttribute("t"),p=t[t.length-1].getAttribute("log"));var h=abTID(),b=new Fingerprint({screen_resolution:!0,canvas:!0,ie_activex:!0}).get(),f=document.body.getAttribute("p")+"";if(f=="Dashboard"&&typeof sys=="object"&&sys.pages&&sys.pages.pg&&(r=sys.pages.pg,f+=r.c=="dashboard"?"":"/"+r.c+(r.tab?"/"+r.tab:"")),w=window.innerWidth>768?1200:window.innerWidth>480?768:window.innerWidth>320?480:320,n=document.location.search+"",n&&n.substr(0,1)=="?"&&(n=n.substr(1)),u="",!h&&/(matchtype|device)[\=]/i.test(n))for(c=n.substr(1).split("&"),l={},e=0;e<c.length;e++)
a=c[e].split("="),l[a[0]]=a[1],u="&aw="+encodeURIComponent(JSON.stringify(l));f=="take-quiz"&&typeof quiz=="object"&&(u+="&qp="+quiz.ref);i&&(o=addExp(i.replace(/[\;]/g,"_")),typeof localStorage=="object"&&localStorage.setItem("exp",o),typeof sessionStorage=="object"&&sessionStorage.setItem("exp",o),s=new Date,s.setFullYear(s.getFullYear()+10),document.cookie="exp="+o+"; SameSite=None; Secure; expires="+
s.toUTCString(),typeof gEventS=="function"&&(v=(i+";").split(";"),gEventS("AB",v[0],v[1])));try{if(p){if(document.cls||typeof PerformanceObserver!="function"||(document.cls={score:0,list:[]},document.clsC=function(n){if(n.id)return"#"+n.id;var t=n.tagName+(n.className?"."+Array.prototype.slice.call(n.classList).join("."):""),i=Array.prototype.slice.call(document.querySelectorAll(t));return t+(i.length>1?"["+i.indexOf(n)+"]":"")},new PerformanceObserver(function(n){for(var h=n.getEntries(),t,e,o,i,r,u,s,f=0;f<h.length;f++)if(t=h[f],!t.hadRecentInput){for(e={sources:[],score:t.value,start:t.startTime,duration:t.duration,recentInput:t.hadRecentInput,lastInput:t.lastInputTime},o=0;o<t.sources.length;o++){i=t.sources[o];r={sel:document.clsC(i.node),from:{},to:{}};for(u in i.currentRect)r.from[u]=i.currentRect[u];delete r.from.toJSON;for(u in i.previousRect)r.to[u]=i.previousRect[u];delete r.to.toJSON;e.sources.push(r)}s=document.cls;s.score+=e.score;s.list.push(e)}}).observe({type:"layout-shift",buffered:!0})),document.readyState!="complete"){setTimeout(abTrack,100);return}document.cls&&(abLog.cls=document.cls,u="&path="+encodeURIComponent((document.location.pathname+"").substr(1))+"&log="+encodeURIComponent(JSON.stringify(abLog)))}}catch(k){}xSend({s:"System.AB_Track",noLog:1,d:"fp="+encodeURIComponent(b)+"&p="+encodeURIComponent(f)+"&qs="+encodeURIComponent(n)+"&ss="+encodeURIComponent(w)+(h?"&id="+encodeURIComponent(h):"")+(i?"&t="+encodeURIComponent(i):"")+(document.ip2?"&ip2="+encodeURIComponent(document.ip2):"")+u,cb:function(n){n&&parseInt(n)>0&&abTID(parseInt(n))}});typeof sys=="object"&&(y=function(){if(typeof
gObj=="object"){var n={vid:abTID(),fp:new Fingerprint({screen_resolution:!0,canvas:!0,ie_activex:!0}).get()};document.ip2&&(n.ip2=document.ip2);gObj.abtrack=n}return!0},sys.qlist?sys.qlist.saveCheck.push(y):sys.createCB("qlist",y))}function tEventS(n,t,i,r,u,f){document.gEventT||(document.gEventT=[]);var e=i+":"+r+":"+u;return document.gEventT[e]||document.gEventBlock?f&&f():(tEvent(n,t,i,r,u,0,f),document.gEventT[e]=1),!0}function tEvent(n,t,i,r,u,f,e){gEvent(i,r,u,f,e);var o=abTID();o&&xSend({s:"System.AB_Track_E",noLog:1,d:"tid="+n+"&tv="+t+"&vid="+encodeURIComponent(o)+(i?"&ct="+encodeURIComponent(i):"")+(r?"&ac="+encodeURIComponent(r):"")+(u?"&lb="+encodeURIComponent(u):"")+(f?"&v="+encodeURIComponent(f):""),cb:function(){}})}function elog(){var t,n;if(typeof exp=="object"){for(t=[],n=0;n<exp.length;n++)t.push(exp[n].v[0]+" ("+exp[n].id+") = "+exp[n].n.toUpperCase()+" ("+exp[n].v[exp[n].n=="a"?1:2]+")");t.sort();console.log(t.join("\n"))}}var hCand,abLog;(function(n,t,i){typeof module!="undefined"&&module.exports?module.exports=i():typeof define=="function"&&define.amd?define(i):t[n]=i()})("Fingerprint",this,function(){"use strict";var n=function(n){var t,i;t=Array.prototype.forEach;i=Array.prototype.map;this.each=function(n,i,r){var u,e,f;if(n!==null)if(t&&n.forEach===t)n.forEach(i,r);else if(n.length===+n.length){for(u=0,e=n.length;u<e;u++)if(i.call(r,n[u],u,n)==={})return}else for(f in n)if(n.hasOwnProperty(f)&&i.call(r,n[f],f,n)==={})return};this.map=function(n,t,r){var u=[];return n==null?u:i&&n.map===i?n.map(t,r):(this.each(n,function(n,i,f){u[u.length]=t.call(r,n,i,f)}),u)};typeof n=="object"?(this.hasher=n.hasher,this.screen_resolution=n.screen_resolution,this.screen_orientation=n.screen_orientation,this.canvas=n.canvas,this.ie_activex=n.ie_activex):typeof n=="function"&&(this.hasher=n)};return n.prototype={get:function(){var n=[],t;return n.push(navigator.userAgent),n.push(navigator.language),n.push(screen.colorDepth),this.screen_resolution&&(t=this.getScreenResolution(),typeof t!="undefined"&&n.push(this.getScreenResolution().join("x"))),n.push((new Date).getTimezoneOffset()),n.push(this.hasSessionStorage()),n.push(this.hasLocalStorage()),n.push(!!window.indexedDB),document.body?n.push(typeof document.body.addBehavior):n.push(typeof undefined),n.push(typeof window.openDatabase),n.push(navigator.cpuClass),n.push(navigator.platform),n.push(navigator.doNotTrack),n.push(this.getPluginsString()),this.canvas&&this.isCanvasSupported()&&n.push(this.getCanvasFingerprint()),this.hasher?this.hasher(n.join("###"),31):this.murmurhash3_32_gc(n.join("###"),31)},murmurhash3_32_gc:function(n,t){var o,h,r,s,f,e,i,u;for(o=n.length&3,h=n.length-o,r=t,f=3432918353,e=461845907,u=0;u<h;)i=n.charCodeAt(u)&255|(n.charCodeAt(++u)&255)<<8|(n.charCodeAt(++u)&255)<<16|(n.charCodeAt(++u)&255)<<24,++u,i=(i&65535)*f+(((i>>>16)*f&65535)<<16)&4294967295,i=i<<15|i>>>17,i=(i&65535)*e+(((i>>>16)*e&65535)<<16)&4294967295,r^=i,r=r<<13|r>>>19,s=(r&65535)*5+(((r>>>16)*5&65535)<<16)&4294967295,r=(s&65535)+27492+(((s>>>16)+58964&65535)<<16);i=0;switch(o){case 3:i^=(n.charCodeAt(u+2)&255)<<16;case 2:i^=(n.charCodeAt(u+1)&255)<<8;case 1:i^=n.charCodeAt(u)&255;i=(i&65535)*f+(((i>>>16)*f&65535)<<16)&4294967295;i=i<<15|i>>>17;i=(i&65535)*e+(((i>>>16)*e&65535)<<16)&4294967295;r^=i}return r^=n.length,r^=r>>>16,r=(r&65535)*2246822507+(((r>>>16)*2246822507&65535)<<16)&4294967295,r^=r>>>13,r=(r&65535)*3266489909+(((r>>>16)*3266489909&65535)<<16)&4294967295,r^=r>>>16,r>>>0},hasLocalStorage:function(){try{return!!window.localStorage}catch(n){return!0}},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(n){return!0}},isCanvasSupported:function(){var n=document.createElement("canvas");return!!(n.getContext&&n.getContext("2d"))},isIE:function(){return navigator.appName==="Microsoft Internet Explorer"?!0:navigator.appName==="Netscape"&&/Trident/.test(navigator.userAgent)?!0:!1},getPluginsString:function(){return this.isIE()&&this.ie_activex?this.getIEPluginsString():this.getRegularPluginsString()},getRegularPluginsString:function(){return this.map(navigator.plugins,function(n){var t=this.map(n,function(n){return[n.type,n.suffixes].join("~")}).join(",");return[n.name,n.description,t].join("::")},this).join(";")},getIEPluginsString:function(){if(window.ActiveXObject)return this.map(["ShockwaveFlash.ShockwaveFlash","AcroPDF.PDF","PDF.PdfCtrl","QuickTime.QuickTime","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer","SWCtl.SWCtl","WMPlayer.OCX","AgControl.AgControl","Skype.Detection"],function(n){try{return new ActiveXObject(n),n}catch(t){return null}}).join(";");return""},getScreenResolution:function(){return this.screen_orientation?screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height]:[screen.height,screen.width]},getCanvasFingerprint:function(){var t=document.createElement("canvas"),n=t.getContext("2d"),i="http://valve.github.io";return n.textBaseline="top",n.font="14px 'Arial'",n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.fillText(i,2,15),n.fillStyle="rgba(102, 204, 0, 0.7)",n.fillText(i,4,17),t.toDataURL()}},n});getIPs(function(n){n&&(document.ip2+"").indexOf(n)==-1&&(document.ip2=(document.ip2?document.ip2+",":"")+n)});abLog={};document&&"loaded;interactive;complete".indexOf(document.readyState)!=-1?abTrack():attachE(window,"DOMContentLoaded",abTrack)