"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[40266],{68926:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(66252),o=n(2262),r=n(42119);const l=(0,a.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=(0,r.yj)(),n=(0,o.iH)();(0,a.YP)((()=>t.path),(()=>n.value.focus()));const l=({target:e})=>{const t=document.querySelector(e.hash);if(t){const e=()=>{t.removeAttribute("tabindex"),t.removeEventListener("blur",e)};t.setAttribute("tabindex","-1"),t.addEventListener("blur",e),t.focus(),window.scrollTo(0,0)}};return()=>[(0,a.h)("span",{ref:n,tabindex:"-1"}),(0,a.h)("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:l},"Skip to content")]}})},40266:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(66252),o=n(97621),r=n(49963),l=n(35205);const s=(0,a.aZ)({name:"FadeSlideY",setup(e,{slots:t}){const n=(0,l.P$)(),o=n.resolve,s=n.pending;return()=>(0,a.h)(r.uT,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:o,onBeforeLeave:s},(()=>{var e;return null===(e=t.default)||void 0===e?void 0:e.call(t)}))}});var u=n(68926);const i=(0,a.aZ)({name:"Layout",setup(){const e=(0,l.BV)(),t=(0,l.X6)(),n=(0,o.Vi)(),r=(0,o.I2)(),i=(0,l.XA)(),c=(0,a.Fl)((()=>t.value.blog.sidebarDisplay||e.value.blog.sidebarDisplay||"mobile"));return()=>[(0,a.h)(u.Z),(0,a.h)((0,a.up)("CommonWrapper"),{},{default:()=>r.value.home?(0,a.h)((0,a.up)("HomePage")):(0,a.h)(s,(()=>(0,a.h)((0,a.up)("NormalPage"),{key:n.value.path}))),..."none"!==c.value?{navScreenBottom:()=>(0,a.h)((0,a.up)("BloggerInfo"))}:{},...i.value||"always"!==c.value?{}:{sidebar:()=>(0,a.h)((0,a.up)("BloggerInfo"))}})]}})}}]);