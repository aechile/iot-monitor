"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1515],{33809:(y,d,e)=>{e.r(d),e.d(d,{SupportBundlesCreateUnconnected:()=>C,default:()=>A});var t=e(96540),D=e(71468),s=e(42418),B=e(88575),l=e(10880),E=e(67061),c=e(55852),O=e(72235),_=e(67608),p=e(58330);const P=t.createElement("span",null,"Choose the components for the support bundle. The support bundle will be available for 3 days after creation."),a=u=>({collectors:u.supportBundles.supportBundleCollectors,isLoading:u.supportBundles.createBundlePageLoading,loadCollectorsError:u.supportBundles.loadBundlesError,createBundleError:u.supportBundles.createBundleError}),n={loadSupportBundleCollectors:p.OS,createSupportBundle:p.iO},i=(0,D.connect)(a,n),C=({collectors:u,isLoading:g,loadCollectorsError:M,createBundleError:m,loadSupportBundleCollectors:v,createSupportBundle:T})=>{const I=o=>{const r=Object.keys(o).filter(f=>o[f]);T({collectors:r})};(0,t.useEffect)(()=>{v()},[v]);const L=u.reduce((o,r)=>({...o,[r.uid]:r.default}),{});return t.createElement(_.Y,{navId:"support-bundles",pageNav:{text:"Create support bundle"},subTitle:P},t.createElement(_.Y.Contents,{isLoading:g},M&&t.createElement(s.F,{title:M,severity:"error"}),m&&t.createElement(s.F,{title:m,severity:"error"}),!!u.length&&t.createElement(O.l,{defaultValues:L,onSubmit:I,validateOn:"onSubmit"},({register:o})=>t.createElement(t.Fragment,null,[...u].sort((r,f)=>r.displayName.localeCompare(f.displayName)).map(r=>t.createElement(B.D,{key:r.uid},t.createElement(l.S,{...o(r.uid),label:r.displayName,id:r.uid,description:r.description,defaultChecked:r.default,disabled:r.includedByDefault}))),t.createElement(E.B,null,t.createElement(c.$n,{type:"submit"},"Create"),t.createElement(c.z9,{href:"/support-bundles",variant:"secondary"},"Cancel"))))))},A=i(C)},58330:(y,d,e)=>{e.d(d,{Hb:()=>_,OS:()=>p,WJ:()=>E,ac:()=>O,iO:()=>P});var t=e(2543),D=e.n(t),s=e(17172),B=e(12131),l=e(8212);function E(a=!1){return async n=>{try{a||n((0,l.sF)());const i=await(0,s.AI)().get("/api/support-bundles");n((0,l.sJ)(i))}finally{n((0,l.kH)())}}}const c=(0,t.throttle)(async a=>{const n=await(0,s.AI)().get("/api/support-bundles");a((0,l.sJ)(n))},1e3);function O(){return async a=>{a(c)}}function _(a){return async n=>{await(0,s.AI)().delete(`/api/support-bundles/${a}`),n(E(!0))}}function p(){return async a=>{try{a((0,l.Y1)());const n=await(0,s.AI)().get("/api/support-bundles/collectors");a((0,l.j7)(n))}catch{a((0,l.pB)("Error loading support bundles data collectors"))}finally{a((0,l.s7)())}}}function P(a){return async n=>{try{await(0,s.AI)().post("/api/support-bundles",a),B.Ny.push("/support-bundles")}catch{n((0,l.NV)("Error creating support bundle"))}}}}}]);

//# sourceMappingURL=SupportBundlesCreate.8ab68baa3389f586ea78.js.map