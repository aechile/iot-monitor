"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[123],{21821:(f,u,t)=>{t.r(u),t.d(u,{default:()=>D});var e=t(96540),B=t(71468),r=t(72724),E=t(55852),l=t(62930),d=t(29158),p=t(67608),_=t(10096),i=t(31678),o=t(58330);const P=e.createElement("span",null,"Support bundles allow you to easily collect and share Grafana logs, configuration, and data with the Grafana Labs team."),n=e.createElement(E.z9,{icon:"plus",href:"support-bundles/create",variant:"primary"},"New support bundle"),a=c=>({supportBundles:c.supportBundles.supportBundles,isLoading:c.supportBundles.isLoading}),m={loadBundles:o.WJ,removeBundle:o.Hb,checkBundles:o.ac},D=(0,B.connect)(a,m)(({supportBundles:c,isLoading:O,loadBundles:h,removeBundle:A,checkBundles:M})=>{const C=c.some(s=>s.state==="pending");(0,e.useEffect)(()=>{h()},[h]),(0,e.useEffect)(()=>{C&&M()});const v=_.TP.hasPermission(i.AccessControlAction.ActionSupportBundlesCreate),g=_.TP.hasPermission(i.AccessControlAction.ActionSupportBundlesDelete),y=v?n:void 0;return e.createElement(p.Y,{navId:"support-bundles",subTitle:P,actions:y},e.createElement(p.Y.Contents,{isLoading:O},e.createElement("table",{className:"filter-table form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Created on"),e.createElement("th",null,"Requested by"),e.createElement("th",null,"Expires"),e.createElement("th",{style:{width:"32px"}}),e.createElement("th",{style:{width:"1%"}}),e.createElement("th",{style:{width:"1%"}}))),e.createElement("tbody",null,c?.map(s=>e.createElement("tr",{key:s.uid},e.createElement("th",null,(0,r.LE)(s.createdAt*1e3)),e.createElement("th",null,s.creator),e.createElement("th",null,(0,r.LE)(s.expiresAt*1e3)),e.createElement("th",null,s.state==="pending"&&e.createElement(l.y,null)),e.createElement("th",null,e.createElement(E.z9,{fill:"outline",disabled:s.state!=="complete",target:"_self",href:`/api/support-bundles/${s.uid}`},"Download")),e.createElement("th",null,g&&e.createElement(d.K,{onClick:()=>A(s.uid),name:"trash-alt",variant:"destructive",tooltip:"Remove bundle"}))))))))})},58330:(f,u,t)=>{t.d(u,{Hb:()=>i,OS:()=>o,WJ:()=>d,ac:()=>_,iO:()=>P});var e=t(2543),B=t.n(e),r=t(17172),E=t(12131),l=t(8212);function d(n=!1){return async a=>{try{n||a((0,l.sF)());const m=await(0,r.AI)().get("/api/support-bundles");a((0,l.sJ)(m))}finally{a((0,l.kH)())}}}const p=(0,e.throttle)(async n=>{const a=await(0,r.AI)().get("/api/support-bundles");n((0,l.sJ)(a))},1e3);function _(){return async n=>{n(p)}}function i(n){return async a=>{await(0,r.AI)().delete(`/api/support-bundles/${n}`),a(d(!0))}}function o(){return async n=>{try{n((0,l.Y1)());const a=await(0,r.AI)().get("/api/support-bundles/collectors");n((0,l.j7)(a))}catch{n((0,l.pB)("Error loading support bundles data collectors"))}finally{n((0,l.s7)())}}}function P(n){return async a=>{try{await(0,r.AI)().post("/api/support-bundles",n),E.Ny.push("/support-bundles")}catch{a((0,l.NV)("Error creating support bundle"))}}}}}]);

//# sourceMappingURL=SupportBundles.cbbdd876417c6516e99c.js.map