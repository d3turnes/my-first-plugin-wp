!function(){"use strict";var e,t={978:function(){var e=window.wp.element,t=window.wp.blocks,n=window.wp.blockEditor;(0,t.registerBlockType)("extendscode/basic-block",{apiVersion:1,title:"Example: Basic (esnext) - index.js",description:"Bloque básico (esnext) index.js",icon:"star-half",category:"widgets",attributes:{message:{type:"string",default:"Basic Block"}},supports:{align:["wide","full"]},edit:t=>{const{attributes:{message:r},setAttributes:i,className:s}=t;return(0,e.createElement)("div",{className:s},(0,e.createElement)("h1",null,(0,e.createElement)(n.RichText,{tagName:"p",className:s,onChange:e=>i({message:e}),value:r})))},save:()=>null})}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,e=[],r.O=function(t,n,i,s){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],s=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,s<o&&(o=s));if(a){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,i,s]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,s,o=n[0],a=n[1],c=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(c)var u=c(r)}for(t&&t(n);l<o.length;l++)s=o[l],r.o(e,s)&&e[s]&&e[s][0](),e[o[l]]=0;return r.O(u)},n=self.webpackChunkmy_first_plugin=self.webpackChunkmy_first_plugin||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=r.O(void 0,[46],(function(){return r(978)}));i=r.O(i)}();