"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4737],{27013:(P,l,e)=>{e.r(l),e.d(l,{plugin:()=>z});var m=e(40187),c=e(1932),a=e(96540),u=e(54625),d=e(61765),g=e(38894),f=e(21594),v=e(14186),p=e(15292),E=e(94753),A=e(91409),y=e(2913),r=e(60021);const S=[{value:r.Oz.mimir,label:"Mimir",description:"https://grafana.com/oss/mimir/. An open source, horizontally scalable, highly available, multi-tenant, long-term storage for Prometheus."},{value:r.Oz.cortex,label:"Cortex",description:"https://cortexmetrics.io/"},{value:r.Oz.prometheus,label:"Prometheus",description:"https://prometheus.io/. Does not support editing configuration via API, so contact points and notification policies are read-only."}],C=o=>{const{options:t,onOptionsChange:n}=o;return(0,a.useEffect)(()=>{t.jsonData.implementation||n((0,c.jM)(t,s=>{s.jsonData.implementation=r.Oz.mimir}))},[t,n]),a.createElement(a.Fragment,null,a.createElement("h3",{className:"page-heading"},"Alertmanager"),a.createElement("div",{className:"gf-form-group"},a.createElement("div",{className:"gf-form-inline"},a.createElement("div",{className:"gf-form"},a.createElement(g.I,{width:13},"Implementation"),a.createElement(f.l6,{width:40,options:S,value:t.jsonData.implementation||r.Oz.mimir,onChange:s=>n({...t,jsonData:{...t.jsonData,implementation:s.value}})}))),a.createElement("div",{className:"gf-form-inline"},a.createElement(v.I,{label:"Receive Grafana Alerts",tooltip:"When enabled, Grafana-managed alerts are sent to this Alertmanager.",labelWidth:26},a.createElement(p.K,{value:t.jsonData.handleGrafanaManagedAlerts??!1,onChange:s=>{n((0,c.jM)(t,i=>{i.jsonData.handleGrafanaManagedAlerts=s.currentTarget.checked}))}}))),t.jsonData.handleGrafanaManagedAlerts&&a.createElement(E.E,{variant:"bodySmall",color:"secondary"},"Make sure to enable the alert forwarding on the ",a.createElement(u.Link,{to:"/alerting/admin"},"settings page"),".")),a.createElement(A.t,{defaultUrl:"",dataSourceConfig:t,showAccessOptions:!0,onChange:n,sigV4AuthToggleEnabled:y.config.sigV4AuthEnabled,renderSigV4Editor:a.createElement(d._r,{...o}),secureSocksDSProxyEnabled:!1}))};var D=e(62467),I=e(75505),h=e(17172),M=e(92240),j=e(88467);class O extends m.mA{constructor(t){super(t),this.instanceSettings=t}query(){return(0,D.of)({data:[]})}_request(t){const n={headers:{},method:"GET",url:this.instanceSettings.url+t};return(this.instanceSettings.basicAuth||this.instanceSettings.withCredentials)&&(this.instanceSettings.withCredentials=!0),this.instanceSettings.basicAuth&&(n.headers.Authorization=this.instanceSettings.basicAuth),(0,I.s)((0,h.AI)().fetch(n))}async testDatasource(){let t;const n=this.instanceSettings.url,s=n?await(0,M.O5)(n):{lazyConfigInit:!1};if(this.instanceSettings.jsonData.implementation===r.Oz.prometheus){try{if(t=await this._request("/alertmanager/api/v2/status"),t&&t?.status===200)return{status:"error",message:"It looks like you have chosen Prometheus implementation, but detected a Mimir or Cortex endpoint. Please update implementation selection and try again."}}catch{}try{t=await this._request("/api/v2/status")}catch{}}else{try{if(t=await this._request("/api/v2/status"),t&&t?.status===200)return{status:"error",message:"It looks like you have chosen a Mimir or Cortex implementation, but detected a Prometheus endpoint. Please update implementation selection and try again."}}catch{}try{t=await this._request("/alertmanager/api/v2/status")}catch(i){if((0,h.NF)(i)&&s.lazyConfigInit&&(0,j.CZ)(i)?.includes("the Alertmanager is not configured"))return{status:"success",message:"Health check passed.",details:{message:"Mimir Alertmanager without the fallback configuration has been discovered."}}}}return t?.status===200?{status:"success",message:"Health check passed."}:{status:"error",message:"Health check failed."}}}const z=new m.tD(O).setConfigEditor(C)}}]);

//# sourceMappingURL=alertmanagerPlugin.02e90eb67acc37ab97ec.js.map