"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[56172],{17098:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(99170),o=n(5460),s=n(74954);const r=(0,a.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=(0,s.yj)(),n=(0,o.iH)();(0,a.YP)((()=>t.path),(()=>n.value.focus()));const r=({target:e})=>{const t=document.querySelector(e.hash);if(t){const e=()=>{t.removeAttribute("tabindex"),t.removeEventListener("blur",e)};t.setAttribute("tabindex","-1"),t.addEventListener("blur",e),t.focus(),window.scrollTo(0,0)}};return()=>[(0,a.h)("span",{ref:n,tabindex:"-1"}),(0,a.h)("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:r},"Skip to content")]}})},56172:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(92891),o=n(99170),s=n(36232),r=n(65570),c=n(77701),i=n(30884),l=n(15404),u=n(47086),h=n(17098),p=n(52553);const d=(0,o.aZ)({name:"Blog",setup(){const e=(0,a.I2)(),t=(0,p.XA)();return()=>[(0,o.h)(h.Z),(0,o.h)((0,o.up)("CommonWrapper"),{sidebar:!1},{default:()=>e.value.home?(0,o.h)(s.Z):(0,o.h)("main",{class:"page blog",id:"main-content"},(0,o.h)("div",{class:"blog-page-wrapper"},[(0,o.h)(r.Z),(0,o.h)(u.Z,{delay:.16},(()=>(0,o.h)(l.Z)))])),navScreenBottom:()=>(0,o.h)(c.Z),...t.value?{sidebar:()=>(0,o.h)(i.Z)}:{}})]}})}}]);