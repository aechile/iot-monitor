"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1698],{67004:(A,B,g)=>{g.d(B,{Hj:()=>L,bP:()=>O,h:()=>M});var p=g(32196),c=g(46942),I=g.n(c),u=g(96540),_=g(84140),b=g(8066),S=g(40845),D=g(14578),w=g(48543);const M=40,R="#a00",E=(r,d)=>({mainGroup:(0,p.css)`
    cursor: pointer;
    font-size: 10px;
    transition: opacity 300ms;
    opacity: ${d==="inactive"?.5:1};
  `,mainCircle:(0,p.css)`
    fill: ${r.components.panel.background};
  `,filledCircle:(0,p.css)`
    fill: ${R};
  `,hoverCircle:(0,p.css)`
    opacity: 0.5;
    fill: transparent;
    stroke: ${r.colors.primary.text};
  `,text:(0,p.css)`
    fill: ${r.colors.text.primary};
    pointer-events: none;
  `,titleText:(0,p.css)`
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    background-color: ${(0,_.A)(r.colors.background.primary).setAlpha(.6).toHex8String()};
    width: 140px;
  `,statsText:(0,p.css)`
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 70px;
  `,textHovering:(0,p.css)`
    width: 200px;
    & span {
      background-color: ${(0,_.A)(r.colors.background.primary).setAlpha(.8).toHex8String()};
    }
  `,clickTarget:(0,p.css)`
    fill: none;
    stroke: none;
    pointer-events: fill;
  `}),L=r=>Math.ceil(r*.075),O=(0,u.memo)(function(d){const{node:l,onMouseEnter:v,onMouseLeave:h,onClick:x,hovering:N}=d,C=(0,S.$j)(),m=E(C,N),F=N==="active",a=l.nodeRadius?.values[l.dataFrameRowIndex]||M,t=L(a);return l.x!==void 0&&l.y!==void 0?u.createElement("g",{"data-node-id":l.id,className:m.mainGroup,"aria-label":`Node: ${l.title}`},u.createElement("circle",{"data-testid":`node-circle-${l.id}`,className:l.highlighted?m.filledCircle:m.mainCircle,r:a,cx:l.x,cy:l.y}),F&&u.createElement("circle",{className:m.hoverCircle,r:a-3,cx:l.x,cy:l.y,strokeWidth:t}),u.createElement(k,{node:l}),u.createElement("g",{className:m.text,style:{pointerEvents:"none"}},u.createElement(P,{node:l,hovering:N}),u.createElement("foreignObject",{x:l.x-(F?100:70),y:l.y+a+5,width:F?"200":"140",height:"40"},u.createElement("div",{className:I()(m.titleText,F&&m.textHovering)},u.createElement("span",null,l.title),u.createElement("br",null),u.createElement("span",null,l.subTitle)))),u.createElement("rect",{"data-testid":`node-click-rect-${l.id}`,onMouseEnter:()=>{v(l.id)},onMouseLeave:()=>{h(l.id)},onClick:e=>{x(e,l)},className:m.clickTarget,x:l.x-a-5,y:l.y-a-5,width:a*2+10,height:a*2+50})):null});function P({node:r,hovering:d}){const l=(0,S.$j)(),v=E(l,d),h=d==="active";return r.x!==void 0&&r.y!==void 0?r.icon?u.createElement("foreignObject",{x:r.x-35,y:r.y-20,width:"70",height:"40"},u.createElement("div",{style:{width:70,overflow:"hidden",display:"flex",justifyContent:"center",marginTop:-4}},u.createElement(D.I,{"data-testid":`node-icon-${r.icon}`,name:r.icon,size:"xxxl"}))):u.createElement("foreignObject",{x:r.x-(h?100:35),y:r.y-15,width:h?"200":"70",height:"40"},u.createElement("div",{className:I()(v.statsText,h&&v.textHovering)},u.createElement("span",null,r.mainStat&&(0,w.Xq)(r.mainStat.config,r.mainStat.values[r.dataFrameRowIndex])),u.createElement("br",null),u.createElement("span",null,r.secondaryStat&&(0,w.Xq)(r.secondaryStat.config,r.secondaryStat.values[r.dataFrameRowIndex])))):null}function k(r){const{node:d}=r,l=d.arcSections.find(m=>m.values[d.dataFrameRowIndex]>=1),v=(0,S.$j)(),h=d.nodeRadius?.values[d.dataFrameRowIndex]||M,x=L(h);if(l)return u.createElement("circle",{fill:"none",stroke:v.visualization.getColorByName(l.config.color?.fixedColor||""),strokeWidth:x,r:h,cx:d.x,cy:d.y});const N=d.arcSections.filter(m=>m.values[d.dataFrameRowIndex]!==0);if(N.length===0)return u.createElement("circle",{fill:"none",stroke:d.color?G(d.color,d.dataFrameRowIndex,v):"gray",strokeWidth:x,r:h,cx:d.x,cy:d.y});const{elements:C}=N.reduce((m,F,a)=>{const t=F.config.color?.fixedColor||"",e=F.values[d.dataFrameRowIndex],n=u.createElement(T,{key:a,r:h,x:d.x,y:d.y,startPercent:m.percent,percent:e+m.percent>1?1-m.percent:e,color:v.visualization.getColorByName(t),strokeWidth:x});return m.elements.push(n),m.percent=m.percent+e,m},{elements:[],percent:0});return u.createElement(u.Fragment,null,C)}function T({r,x:d,y:l,startPercent:v,percent:h,color:x,strokeWidth:N=2}){const C=v+h,m=d+Math.sin(2*Math.PI*v)*r,F=l-Math.cos(2*Math.PI*v)*r,a=d+Math.sin(2*Math.PI*C)*r,t=l-Math.cos(2*Math.PI*C)*r,e=h>.5?"1":"0";return u.createElement("path",{fill:"none",d:`M ${m} ${F} A ${r} ${r} 0 ${e} 1 ${a} ${t}`,stroke:x,strokeWidth:N})}function G(r,d,l){return r.config.color?(0,b.Qi)(r).getCalculator(r,l)(0,r.values[d]):r.values[d]}},48543:(A,B,g)=>{g.d(B,{AG:()=>S,BJ:()=>M,BR:()=>x,CP:()=>F,K0:()=>C,Tl:()=>m,Xq:()=>T,_d:()=>h,a0:()=>b,tF:()=>D});var p=g(85404),c=g(25352),I=g(11261),u=g(24293),_=g(67004);function b(a,t,e,n=1){const o=a.x2-a.x1,i=a.y2-a.y1,s=Math.sqrt(o*o+i*i),y=(a.x2-a.x1)/s,f=(a.y2-a.y1)/s,U=n-n/10;return{x1:a.x1+y*(t+5),y1:a.y1+f*(t+5),x2:a.x2-y*(e+3+U),y2:a.y2-f*(e+3+U)}}function S(a){const t={...a,fields:a.fields.map(n=>({...n,name:n.name.toLowerCase()}))},e=new p.L(t);return{id:e.getFieldByName(c.u.id.toLowerCase()),title:e.getFieldByName(c.u.title.toLowerCase()),subTitle:e.getFieldByName(c.u.subTitle.toLowerCase()),mainStat:e.getFieldByName(c.u.mainStat.toLowerCase()),secondaryStat:e.getFieldByName(c.u.secondaryStat.toLowerCase()),arc:w(a,c.u.arc),details:w(a,c.u.detail),color:e.getFieldByName(c.u.color),icon:e.getFieldByName(c.u.icon),nodeRadius:e.getFieldByName(c.u.nodeRadius.toLowerCase()),highlighted:e.getFieldByName(c.u.highlighted.toLowerCase()),fixedX:e.getFieldByName(c.u.fixedX.toLowerCase()),fixedY:e.getFieldByName(c.u.fixedY.toLowerCase())}}function D(a){const t={...a,fields:a.fields.map(n=>({...n,name:n.name.toLowerCase()}))},e=new p.L(t);return{id:e.getFieldByName(c.u.id.toLowerCase()),source:e.getFieldByName(c.u.source.toLowerCase()),target:e.getFieldByName(c.u.target.toLowerCase()),mainStat:e.getFieldByName(c.u.mainStat.toLowerCase()),secondaryStat:e.getFieldByName(c.u.secondaryStat.toLowerCase()),details:w(a,c.u.detail.toLowerCase()),highlighted:e.getFieldByName(c.u.highlighted.toLowerCase()),thickness:e.getFieldByName(c.u.thickness.toLowerCase()),color:e.getFieldByName(c.u.color.toLowerCase()),strokeDasharray:e.getFieldByName(c.u.strokeDasharray.toLowerCase())}}function w(a,t){return a.fields.filter(e=>e.name.match(new RegExp("^"+t)))}function M(a,t){if(!(t||a))return{nodes:[],edges:[]};if(a){const e=S(a);if(!e.id)throw new Error("id field is required for nodes data frame.");const n=e.fixedX&&e.fixedX.values.every(s=>Number.isFinite(s))&&e.fixedY&&e.fixedY.values.every(s=>Number.isFinite(s));if(!n&&(e.fixedX&&e.fixedX.values.some(y=>Number.isFinite(y))||e.fixedY&&e.fixedY.values.some(y=>Number.isFinite(y))))throw new Error("If fixedX and fixedY fields are present, the values have to be all filled and valid");const o={};for(let s=0;s<e.id.values.length;s++){const y=e.id.values[s];o[y]=k(y,e,s)}let i=t?R(t,D(t),o):[];for(const s of i)o[s.target].incoming++;return{nodes:Object.values(o),edges:i,hasFixedPositions:n,legend:e.arc.map(s=>({color:s.config.color?.fixedColor??"",name:s.config.displayName||s.name}))}}else{t=t;const e={},n=D(t);for(let s=0;s<t.length;s++){const{source:y,target:f}=O(n,s);e[f.id]=e[f.id]||f,e[y.id]=e[y.id]||y,E(n.mainStat)&&(e[f.id].mainStatNumeric=(e[f.id].mainStatNumeric??0)+n.mainStat.values[s]),E(n.secondaryStat)&&(e[f.id].secondaryStatNumeric=(e[f.id].secondaryStatNumeric??0)+n.secondaryStat.values[s]),e[f.id].incoming++}let o=R(t,n,e);return{nodes:L(e,n),edges:o,hasFixedPositions:!1}}}function R(a,t,e){if(!t.id)throw new Error("id field is required for edges data frame.");return t.id.values.map((n,o)=>{const i=t.target?.values[o],s=t.source?.values[o],y=e[s],f=e[i];return{id:n,dataFrameRowIndex:o,source:s,target:i,sourceNodeRadius:y.nodeRadius?y.nodeRadius.values[y.dataFrameRowIndex]:_.h,targetNodeRadius:f.nodeRadius?f.nodeRadius.values[f.dataFrameRowIndex]:_.h,mainStat:t.mainStat?T(t.mainStat.config,t.mainStat.values[o]):"",secondaryStat:t.secondaryStat?T(t.secondaryStat.config,t.secondaryStat.values[o]):"",highlighted:t.highlighted?.values[o]||!1,thickness:t.thickness?.values[o]||1,color:t.color?.values[o],strokeDasharray:t.strokeDasharray?.values[o]}})}function E(a){return a&&a.type===I.PU.number}function L(a,t){const e=[],n=[],o=E(t.secondaryStat)?{...t.secondaryStat,values:e}:void 0,i=E(t.mainStat)?{...t.mainStat,values:n}:void 0;return Object.values(a).map((s,y)=>{if(i||o){const f={...s};return i&&(f.mainStat=i,n.push(s.mainStatNumeric),f.dataFrameRowIndex=y),o&&(f.secondaryStat=o,e.push(s.secondaryStatNumeric),f.dataFrameRowIndex=y),f}return s})}function O(a,t){const e=a.target?.values[t],n=a.source?.values[t];return{target:P(e,t),source:P(n,t)}}function P(a,t){return{id:a,title:a,subTitle:"",dataFrameRowIndex:t,incoming:0,arcSections:[],highlighted:!1}}function k(a,t,e){return{id:a,title:t.title?.values[e]||"",subTitle:t.subTitle?.values[e]||"",dataFrameRowIndex:e,incoming:0,mainStat:t.mainStat,secondaryStat:t.secondaryStat,arcSections:t.arc,color:t.color,icon:t.icon?.values[e]||"",nodeRadius:t.nodeRadius,highlighted:t.highlighted?.values[e]||!1,x:t.fixedX?.values[e]??void 0,y:t.fixedY?.values[e]??void 0}}function T(a,t){if(typeof t=="string")return t;{const e=a.decimals||2;return Number.isFinite(t)?t.toFixed(e)+(a.unit?" "+a.unit:""):""}}function G(a){const t=d();for(let e=0;e<a;e++)t.add(r(e));return t}function r(a){return{id:a.toString(),title:`service:${a}`,subtitle:"service",arc__success:.5,arc__errors:.5,mainstat:.1,secondarystat:2,color:.5,icon:"database",noderadius:40}}function d(){const a={[NodeGraphDataFrameFieldNames.id]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.title]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.subTitle]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.mainStat]:{values:[],type:FieldType.number},[NodeGraphDataFrameFieldNames.secondaryStat]:{values:[],type:FieldType.number},[NodeGraphDataFrameFieldNames.arc+"success"]:{values:[],type:FieldType.number,config:{color:{mode:FieldColorModeId.Fixed,fixedColor:"green"}}},[NodeGraphDataFrameFieldNames.arc+"errors"]:{values:[],type:FieldType.number,config:{color:{mode:FieldColorModeId.Fixed,fixedColor:"red"}}},[NodeGraphDataFrameFieldNames.color]:{values:[],type:FieldType.number,config:{color:{mode:FieldColorModeId.ContinuousGrYlRd}}},[NodeGraphDataFrameFieldNames.icon]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.nodeRadius]:{values:[],type:FieldType.number}};return new MutableDataFrame({name:"nodes",fields:Object.entries(a).map(([t,e])=>({...e,name:t}))})}function l(a){const t=v();for(const e of a)t.add({id:e.source+"--"+e.target,...e});return t}function v(){const a={[NodeGraphDataFrameFieldNames.id]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.source]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.target]:{values:[],type:FieldType.string},[NodeGraphDataFrameFieldNames.mainStat]:{values:[],type:FieldType.number},[NodeGraphDataFrameFieldNames.secondaryStat]:{values:[],type:FieldType.number}};return new MutableDataFrame({name:"edges",fields:Object.entries(a).map(([t,e])=>({...e,name:t}))})}function h(a){if(a.length===0)return{top:0,right:0,bottom:0,left:0,center:{x:0,y:0}};const t=a.reduce((o,i)=>(i.x>o.right&&(o.right=i.x),i.x<o.left&&(o.left=i.x),i.y>o.bottom&&(o.bottom=i.y),i.y<o.top&&(o.top=i.y),o),{top:1/0,right:-1/0,bottom:-1/0,left:1/0}),e=t.top+(t.bottom-t.top)/2,n=t.left+(t.right-t.left)/2;return{...t,center:{x:n,y:e}}}function x(a,t){let e=a.filter(n=>!!(n.meta?.preferredVisualisationType==="nodeGraph"||n.name==="nodes"||n.name==="edges"||n.refId==="nodes"||n.refId==="edges"||new p.L(n).getFieldByName(c.u.id)));return t&&(e=N(e,t)),e}const N=(a,t)=>a.map(e=>{if(new p.L(e).getFieldByName(c.u.source.toLowerCase())){if(t?.edges?.mainStatUnit){const o=e.fields.find(i=>i.name.toLowerCase()===c.u.mainStat);o&&(o.config={...o.config,unit:t.edges.mainStatUnit})}if(t?.edges?.secondaryStatUnit){const o=e.fields.find(i=>i.name.toLowerCase()===c.u.secondaryStat);o&&(o.config={...o.config,unit:t.edges.secondaryStatUnit})}}else{if(t?.nodes?.mainStatUnit){const o=e.fields.find(i=>i.name.toLowerCase()===c.u.mainStat);o&&(o.config={...o.config,unit:t.nodes.mainStatUnit})}if(t?.nodes?.secondaryStatUnit){const o=e.fields.find(i=>i.name.toLowerCase()===c.u.secondaryStat);o&&(o.config={...o.config,unit:t.nodes.secondaryStatUnit})}if(t?.nodes?.arcs?.length)for(const o of t.nodes.arcs){const i=e.fields.find(s=>s.name.toLowerCase()===o.field?.toLowerCase());i&&o.color&&(i.config={...i.config,color:{fixedColor:o.color,mode:u.Y.Fixed}})}}return e}),C=(a,t,e)=>{const n=t.find(o=>o.id===e);return n?[...new Set(a.filter(o=>n.source===o.id||n.target===o.id).map(o=>o.id))]:[]},m=(a,t,e)=>{const n=a.find(o=>o.id===e);if(n){const o=t.filter(i=>i.source===n.id||i.target===n.id);return[...new Set(o.flatMap(i=>a.filter(s=>i.source===s.id||i.target===s.id).map(s=>s.id)))]}return[]},F=a=>a.reduce((t,e)=>{const n=e.fields.filter(o=>o.name==="source");return e.name==="edges"||n.length?t.edges.push(e):t.nodes.push(e),t},{edges:[],nodes:[]})}}]);

//# sourceMappingURL=1698.28f9f7baabb49bcba609.js.map