"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2212],{7521:(V,I,t)=>{t.d(I,{A:()=>r});var h=t(32196),e=t(96540),E=t(13544),y=t(14578),f=t(55852),D=t(76442);const n=(0,h.css)({textAlign:"center"}),M=(0,h.css)({maxWidth:"700px",margin:"0 auto"}),r=({title:u,buttonIcon:A,buttonLink:C,buttonTitle:S,buttonDisabled:z,onClick:Z,proTip:W,proTipLink:P,proTipLinkTitle:K,proTipTarget:$,infoBox:T,infoBoxTitle:v})=>{const _=()=>e.createElement(e.Fragment,null,W?e.createElement("span",{key:"proTipFooter"},e.createElement(y.I,{name:"rocket"}),e.createElement(e.Fragment,null," ProTip: ",W," "),P&&e.createElement("a",{href:P,target:$,className:"text-link"},K)):"",T?e.createElement("div",{key:"infoBoxHtml",className:`grafana-info-box ${M}`},v&&e.createElement("h5",null,v),e.createElement("div",{dangerouslySetInnerHTML:T})):""),Y=_()?"":(0,h.css)({marginBottom:"20px"}),o=C?f.z9:f.$n,i=e.createElement(o,{size:"lg",onClick:Z,href:C,icon:A,className:Y,"data-testid":E.Tp.components.CallToActionCard.buttonV2(S),disabled:z},S);return e.createElement(D.c,{className:n,message:u,footer:_(),callToActionElement:i})}},31084:(V,I,t)=>{t.d(I,{Y:()=>n});var h=t(96540),e=t(41053),E=t(10096),y=t(31678),f=t(37425),D=t(85927);const n=({teamId:M,roleOptions:d,disabled:r,roles:u,onApplyRoles:A,pendingRoles:C,apply:S=!1,maxWidth:z,width:Z,isLoading:W})=>{const[{loading:P,value:K=u||[]},$]=(0,e.A)(async()=>{try{if(u)return u;if(S&&C?.length)return C;if(E.TP.hasPermission(y.AccessControlAction.ActionTeamsRolesList)&&M>0)return await(0,D.xN)(M)}catch(_){console.error("Error loading options",_)}return[]},[M,C,u]);(0,h.useEffect)(()=>{$()},[$]);const T=async _=>{S?A&&A(_):(await(0,D.G3)(_,M),await $())},v=E.TP.hasPermission(y.AccessControlAction.ActionTeamsRolesAdd)&&E.TP.hasPermission(y.AccessControlAction.ActionTeamsRolesRemove);return h.createElement(f.n,{apply:S,onRolesChange:T,roleOptions:d,appliedRoles:K,isLoading:P||W,disabled:r,basicRoleDisabled:!0,canUpdateRoles:v,maxWidth:z,width:Z})}},54939:(V,I,t)=>{t.d(I,{o:()=>D});var h=t(96540),e=t(24705),E=t(10096),y=t(31678),f=t(85927);const D=n=>{const[M,d]=(0,h.useState)(n),{value:r=[]}=(0,e.A)(async()=>E.TP.licensedAccessControlEnabled()&&E.TP.hasPermission(y.AccessControlAction.ActionRolesList)?(0,f.RL)(M):Promise.resolve([]),[M]);return[{roleOptions:r},d]}},39745:(V,I,t)=>{t.d(I,{A:()=>Y,u:()=>_});var h=t(32196),e=t(96540),E=t(97594),y=t(41987),f=t(13544),D=t(14110),n=t(32264),M=t(84167),d=t(88575),r=t(21594),u=t(60029),A=t(20333),C=t(15648),S=t(29678),z=t(55852),Z=t(3911),W=t(59429),P=t(8484),K=t(74513),$=t(65615),T=t(2769);function v(){const l=K.Yj.map(c=>({value:c.code,label:c.name})).sort((c,N)=>c.value===K.wi?1:N.value===K.wi?-1:c.label.localeCompare(N.label));return[{value:"",label:(0,P.t)("common.locale.default","Default")},...l]}class _ extends e.PureComponent{constructor(g){super(g),this.onSubmitForm=async c=>{if(c.preventDefault(),this.props.onConfirm?await this.props.onConfirm():!0){const{homeDashboardUID:F,theme:U,timezone:J,weekStart:H,language:G,queryHistory:b}=this.state;await this.service.update({homeDashboardUID:F,theme:U,timezone:J,weekStart:H,language:G,queryHistory:b}),window.location.reload()}},this.onThemeChanged=c=>{this.setState({theme:c.value}),c.value&&(0,T.K)(c.value,!0)},this.onTimeZoneChanged=c=>{typeof c=="string"&&this.setState({timezone:c})},this.onWeekStartChanged=c=>{this.setState({weekStart:c})},this.onHomeDashboardChanged=c=>{this.setState({homeDashboardUID:c})},this.onLanguageChanged=c=>{this.setState({language:c}),(0,D.rR)("grafana_preferences_language_changed",{toLanguage:c,preferenceType:this.props.preferenceType})},this.service=new $.W(g.resourceUri),this.state={theme:"",timezone:"",weekStart:"",language:"",queryHistory:{homeTab:""}},this.themeOptions=(0,E.k)(n.$.featureToggles.extraThemes).map(c=>({value:c.id,label:i(c)})),this.themeOptions.unshift({value:"",label:(0,P.t)("shared-preferences.theme.default-label","Default")})}async componentDidMount(){const g=await this.service.load();this.setState({homeDashboardUID:g.homeDashboardUID,theme:g.theme,timezone:g.timezone,weekStart:g.weekStart,language:g.language,queryHistory:g.queryHistory})}render(){const{theme:g,timezone:c,weekStart:N,homeDashboardUID:F,language:U}=this.state,{disabled:J}=this.props,H=o(),G=v(),b=this.themeOptions.find(j=>j.value===g)??this.themeOptions[0];return e.createElement("form",{onSubmit:this.onSubmitForm,className:H.form},e.createElement(M.n,{label:e.createElement(P.x6,{i18nKey:"shared-preferences.title"},"Preferences"),disabled:J},e.createElement(d.D,{label:(0,P.t)("shared-preferences.fields.theme-label","Interface theme")},e.createElement(r.l6,{options:this.themeOptions,value:b,onChange:this.onThemeChanged,inputId:"shared-preferences-theme-select"})),e.createElement(d.D,{label:e.createElement(u.J,{htmlFor:"home-dashboard-select"},e.createElement("span",{className:H.labelText},e.createElement(P.x6,{i18nKey:"shared-preferences.fields.home-dashboard-label"},"Home Dashboard"))),"data-testid":"User preferences home dashboard drop down"},e.createElement(W.b,{value:F,onChange:j=>this.onHomeDashboardChanged(j?.uid??""),defaultOptions:!0,isClearable:!0,placeholder:(0,P.t)("shared-preferences.fields.home-dashboard-placeholder","Default dashboard"),inputId:"home-dashboard-select"})),e.createElement(d.D,{label:(0,P.t)("shared-dashboard.fields.timezone-label","Timezone"),"data-testid":f.Tp.components.TimeZonePicker.containerV2},e.createElement(A.U,{includeInternal:!0,value:c,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})),e.createElement(d.D,{label:(0,P.t)("shared-preferences.fields.week-start-label","Week start"),"data-testid":f.Tp.components.WeekStartPicker.containerV2},e.createElement(C.l,{value:N||"",onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})),e.createElement(d.D,{label:e.createElement(u.J,{htmlFor:"locale-select"},e.createElement("span",{className:H.labelText},e.createElement(P.x6,{i18nKey:"shared-preferences.fields.locale-label"},"Language")),e.createElement(S.y,{featureState:y.Ay.beta})),"data-testid":"User preferences language drop down"},e.createElement(r.l6,{value:G.find(j=>j.value===U),onChange:j=>this.onLanguageChanged(j.value??""),options:G,placeholder:(0,P.t)("shared-preferences.fields.locale-placeholder","Choose language"),inputId:"locale-select"}))),e.createElement(z.$n,{type:"submit",variant:"primary","data-testid":f.Tp.components.UserProfile.preferencesSaveButton},e.createElement(P.x6,{i18nKey:"common.save"},"Save")))}}const Y=_,o=(0,Z.N)(()=>({labelText:(0,h.css)({marginRight:"6px"}),form:(0,h.css)({width:"100%",maxWidth:"600px"})}));function i(l){switch(l.id){case"dark":return(0,P.t)("shared.preferences.theme.dark-label","Dark");case"light":return(0,P.t)("shared.preferences.theme.light-label","Light");case"system":return(0,P.t)("shared.preferences.theme.system-label","System preference");default:return l.name}}},76323:(V,I,t)=>{t.d(I,{J:()=>f});var h=t(32196),e=t(96540),E=t(14110),y=t(40845);const f=({text:n="PRO",className:M,experimentId:d,eventVariant:r="",...u})=>{const A=(0,y.of)(D);return(0,e.useEffect)(()=>{d&&(0,E.Xp)(d,"test",r)},[d,r]),e.createElement("span",{className:(0,h.cx)(A.badge,M),...u},n)},D=n=>({badge:(0,h.css)`
      margin-left: ${n.spacing(1.25)};
      border-radius: ${n.shape.borderRadius(5)};
      background-color: ${n.colors.success.main};
      padding: ${n.spacing(.25,.75)};
      color: white; // use the same color for both themes
      font-weight: ${n.typography.fontWeightMedium};
      font-size: ${n.typography.pxToRem(10)};
    `})},35538:(V,I,t)=>{t.d(I,{pL:()=>e,z5:()=>y});var h=t(32264);const e=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function E(){const f=h.$.licenseInfo?.trialExpiry;return!!(f&&f>0)}const y=()=>E()&&h.$.featureToggles.featureHighlights},92886:(V,I,t)=>{t.r(I),t.d(I,{default:()=>Ae});var h=t(25508),e=t(96540),E=t(24180),y=t(16817),f=t(33378),D=t(67608),n=t(32196),M=t(14110),d=t(40845),r=t(14578),u=t(55852);const A=({featureName:a,className:s,children:m,text:p,featureId:O,eventVariant:x="",size:R="md",...L})=>{const B=(0,d.of)(C,R);return(0,e.useEffect)(()=>{(0,M.Xp)(`feature-highlights-${O}`,"test",x)},[x,O]),e.createElement("div",{className:(0,n.cx)(B.box,s),...L},e.createElement(r.I,{name:"rocket",className:B.icon}),e.createElement("div",{className:B.inner},e.createElement("p",{className:B.text},"You\u2019ve discovered a Pro feature! ",p||`Get the Grafana Pro plan to access ${a}.`),e.createElement(u.z9,{variant:"secondary",size:R,className:B.button,href:"https://grafana.com/profile/org/subscription",target:"__blank",rel:"noopener noreferrer"},"Upgrade")))},C=(a,s)=>{const m=a.shape.borderRadius(2),p=s==="md"?"body":"bodySmall";return{box:(0,n.css)`
      display: flex;
      align-items: center;
      position: relative;
      border-radius: ${m};
      background: ${a.colors.success.transparent};
      padding: ${a.spacing(2)};
      color: ${a.colors.success.text};
      font-size: ${a.typography[p].fontSize};
      text-align: left;
      line-height: 16px;
      margin: ${a.spacing(0,"auto",3,"auto")};
      max-width: ${a.breakpoints.values.xxl}px;
      width: 100%;
    `,inner:(0,n.css)`
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    `,text:(0,n.css)`
      margin: 0;
    `,button:(0,n.css)`
      background-color: ${a.colors.success.main};
      font-weight: ${a.typography.fontWeightLight};
      color: white;

      &:hover {
        background-color: ${a.colors.success.main};
      }

      &:focus-visible {
        box-shadow: none;
        color: ${a.colors.text.primary};
        outline: 2px solid ${a.colors.primary.main};
      }
    `,icon:(0,n.css)`
      margin: ${a.spacing(.5,1,.5,.5)};
    `}},S=({listItems:a,image:s,featureUrl:m,featureName:p,description:O,caption:x,action:R})=>{const L=(0,d.of)(z);return e.createElement("div",{className:L.container},e.createElement("div",{className:L.content},e.createElement("h3",{className:L.title},"Get started with ",p),O&&e.createElement("h6",{className:L.description},O),e.createElement("ul",{className:L.list},a.map((B,Q)=>e.createElement("li",{key:Q},e.createElement(r.I,{name:"check",size:"xl",className:L.icon})," ",B))),R?.link&&e.createElement(u.z9,{variant:"primary",href:R.link},R.text),R?.onClick&&e.createElement(u.$n,{variant:"primary",onClick:R.onClick},R.text),m&&e.createElement(u.z9,{fill:"text",href:m,className:L.link,target:"_blank",rel:"noreferrer noopener"},"Learn more")),e.createElement("div",{className:L.media},e.createElement("img",{src:P(s),alt:"Feature screenshot"}),x&&e.createElement("p",{className:L.caption},x)))},z=a=>({container:(0,n.css)`
      display: flex;
      justify-content: space-between;
    `,content:(0,n.css)`
      width: 45%;
      margin-right: ${a.spacing(4)};
    `,media:(0,n.css)`
      width: 55%;

      img {
        width: 100%;
      }
    `,title:(0,n.css)`
      color: ${a.colors.text.maxContrast};
    `,description:(0,n.css)`
      color: ${a.colors.text.primary};
      font-weight: ${a.typography.fontWeightLight};
    `,list:(0,n.css)`
      list-style: none;
      margin: ${a.spacing(4,0,2,0)};

      li {
        display: flex;
        align-items: flex-start;
        color: ${a.colors.text.primary};
        padding: ${a.spacing(1,0)};
      }
    `,icon:(0,n.css)`
      color: ${a.colors.success.main};
      margin-right: ${a.spacing(1)};
    `,link:(0,n.css)`
      margin-left: ${a.spacing(2)};
    `,caption:(0,n.css)`
      font-weight: ${a.typography.fontWeightLight};
      margin: ${a.spacing(1,0,0)};
    `}),Z=({featureName:a,description:s,featureUrl:m,image:p})=>{const O=useStyles2(W);return React.createElement("div",{className:O.container},React.createElement("h3",{className:O.title},"Get started with ",a),s&&React.createElement("h6",{className:O.description},s),React.createElement(LinkButton,{fill:"text",href:m,target:"_blank",rel:"noreferrer noopener"},"Learn more"),React.createElement("div",{className:O.media},React.createElement("img",{src:P(p),alt:"Feature screenshot"})))},W=a=>({container:css`
      overflow: auto;
      height: 100%;
    `,title:css`
      color: ${a.colors.text.maxContrast};
    `,description:css`
      color: ${a.colors.text.primary};
      font-weight: ${a.typography.fontWeightLight};
    `,media:css`
      width: 100%;
      margin-top: ${a.spacing(2)};

      img {
        width: 100%;
      }
    `}),P=a=>a.startsWith("http")?a:"/public/img/enterprise/highlights/"+a;var K=t(2913),$=t(17422),T=t(16233),v=t(31678),_=t(71468),Y=t(56034),o=t(39268),i=t(14186),l=t(10354),g=t(9025),c=t(25469),N=t(7521),F=t(35538),U=t(33667);const J=a=>a.groups,H=(a,s)=>a.team.id===parseInt(s,10)?a.team:null;function G(a){return{groups:J(a.team)}}const b={loadTeamGroups:U.aK,addTeamGroup:U.It,removeTeamGroup:U.nC},j=(0,_.connect)(G,b),q="Sync LDAP, OAuth or SAML groups with your Grafana teams.";class se extends e.PureComponent{constructor(s){super(s),this.onToggleAdding=()=>{this.setState({isAdding:!this.state.isAdding})},this.onNewGroupIdChanged=m=>{this.setState({newGroupId:m.target.value})},this.onAddGroup=m=>{m.preventDefault(),this.props.addTeamGroup(this.state.newGroupId),this.setState({isAdding:!1,newGroupId:""})},this.onRemoveGroup=m=>{this.props.removeTeamGroup(m.groupId)},this.state={isAdding:!1,newGroupId:""}}componentDidMount(){this.fetchTeamGroups()}async fetchTeamGroups(){await this.props.loadTeamGroups()}isNewGroupValid(){return this.state.newGroupId.length>1}renderGroup(s){const{isReadOnly:m}=this.props;return e.createElement("tr",{key:s.groupId},e.createElement("td",null,s.groupId),e.createElement("td",{style:{width:"1%"}},e.createElement(u.$n,{size:"sm",variant:"destructive",onClick:()=>this.onRemoveGroup(s),disabled:m,"aria-label":`Remove group ${s.groupId}`},e.createElement(r.I,{name:"times"}))))}render(){const{isAdding:s,newGroupId:m}=this.state,{groups:p,isReadOnly:O}=this.props,x=oe();return e.createElement("div",null,(0,F.z5)()&&e.createElement(A,{featureId:"team-sync",eventVariant:"trial",featureName:"team sync",text:"Add a group to enable team sync for free during your trial of Grafana Pro."}),e.createElement("div",{className:"page-action-bar"},(!(0,F.z5)()||p.length>0)&&e.createElement(e.Fragment,null,e.createElement("h3",{className:"page-sub-heading"},"External group sync"),e.createElement(Y.m,{placement:"auto",content:q},e.createElement(r.I,{className:(0,n.cx)(x.icon,"page-sub-heading-icon"),name:"question-circle"}))),e.createElement("div",{className:"page-action-bar__spacer"}),p.length>0&&e.createElement(u.$n,{className:"pull-right",onClick:this.onToggleAdding,disabled:O},e.createElement(r.I,{name:"plus"})," Add group")),e.createElement(g.a,{in:s},e.createElement("div",{className:"cta-form"},e.createElement(c.J,{onClick:this.onToggleAdding}),e.createElement("form",{onSubmit:this.onAddGroup},e.createElement(o.C,null,e.createElement(i.I,{label:"Add External Group",tooltip:"LDAP Group Example: cn=users,ou=groups,dc=grafana,dc=org."},e.createElement(l.p,{type:"text",id:"add-external-group",placeholder:"",value:m,onChange:this.onNewGroupIdChanged,disabled:O})),e.createElement(u.$n,{type:"submit",disabled:O||!this.isNewGroupValid(),style:{marginLeft:4}},"Add group"))))),p.length===0&&!s&&((0,F.z5)()?e.createElement(ee,{action:{onClick:this.onToggleAdding,text:"Add group"}}):e.createElement(N.A,{onClick:this.onToggleAdding,buttonIcon:"users-alt",title:"There are no external groups to sync with",buttonTitle:"Add group",proTip:q,proTipLinkTitle:"Learn more",proTipLink:"https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-team-sync/",proTipTarget:"_blank",buttonDisabled:O})),p.length>0&&e.createElement("div",{className:"admin-list-table"},e.createElement("table",{className:"filter-table filter-table--hover form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"External Group ID"),e.createElement("th",{style:{width:"1%"}}))),e.createElement("tbody",null,p.map(R=>this.renderGroup(R))))))}}const ee=({action:a})=>{const s=(0,d.$j)();return e.createElement(S,{action:a,listItems:["Stop managing user access in two places - assign users to groups in SAML, LDAP or Oauth, and manage access at a Team level in Grafana","Update users\u2019 permissions immediately when you add or remove them from an LDAP group, with no need for them to sign out and back in"],image:`team-sync-${s.isLight?"light":"dark"}.png`,featureName:"team sync",featureUrl:"https://grafana.com/docs/grafana/latest/enterprise/team-sync",description:"Team Sync makes it easier for you to manage users\u2019 access in Grafana, by immediately updating each user\u2019s Grafana teams and permissions based on their single sign-on group membership, instead of when users sign in."})},re=(0,_.connect)(G,b)(se),oe=()=>({icon:(0,n.css)({opacity:.7,"&:hover":{opacity:1}})});var ie=t(5108);const ce=a=>{const s=T.TP.hasPermissionInMetadata(v.AccessControlAction.ActionTeamsPermissionsWrite,a.team);return e.createElement(ie.x,{title:"",addPermissionTitle:"Add member",buttonLabel:"Add member",emptyLabel:"There are no members in this team or you do not have the permissions to list the current members.",resource:"teams",resourceId:a.team.id,canSetPermissions:s})};var le=t(49785),me=t(67061),de=t(84167),k=t(88575),ue=t(31084),ge=t(54939),Ee=t(39745);const pe={updateTeam:U.n7},he=(0,_.connect)(null,pe)(({team:a,updateTeam:s})=>{const m=T.TP.hasPermissionInMetadata(v.AccessControlAction.ActionTeamsWrite,a),p=T.TP.user.orgId,[{roleOptions:O}]=(0,ge.o)(p),{handleSubmit:x,register:R,formState:{errors:L}}=(0,le.mN)({defaultValues:a}),B=T.TP.hasPermission(v.AccessControlAction.ActionTeamsRolesAdd)&&T.TP.hasPermission(v.AccessControlAction.ActionTeamsRolesRemove),Q=T.TP.hasPermissionInMetadata(v.AccessControlAction.ActionTeamsRolesList,a)&&T.TP.hasPermission(v.AccessControlAction.ActionRolesList),X=async w=>{s(w.name,w.email||"")};return e.createElement(me.B,{direction:"column",gap:3},e.createElement("form",{onSubmit:x(X),style:{maxWidth:"600px"}},e.createElement(de.n,{label:"Team details"},e.createElement(k.D,{label:"Name",disabled:!m,required:!0,invalid:!!L.name,error:"Name is required"},e.createElement(l.p,{...R("name",{required:!0}),id:"name-input"})),T.TP.licensedAccessControlEnabled()&&Q&&e.createElement(k.D,{label:"Role"},e.createElement(ue.Y,{teamId:a.id,roleOptions:O,disabled:!B,maxWidth:"100%"})),e.createElement(k.D,{label:"Email",description:"This is optional and is primarily used to set the team profile avatar (via gravatar service).",disabled:!m},e.createElement(l.p,{...R("email"),placeholder:"team@email.com",type:"email",id:"email-input"})),e.createElement(u.$n,{type:"submit",disabled:!m},"Update"))),e.createElement(Ee.u,{resourceUri:`teams/${a.id}`,disabled:!m,preferenceType:"team"}))});var fe=t(78319),Pe=(a=>(a.Members="members",a.Settings="settings",a.GroupSync="groupsync",a))(Pe||{});const te=["members","settings","groupsync"],Te=(0,h.Mz)([a=>a.team,(a,s)=>s],(a,s)=>H(a,s)),ve=(0,h.Mz)([a=>a.navIndex,(a,s)=>s,(a,s,m)=>m],(a,s,m)=>{const p=(0,fe.X)(s);return(0,$.tc)(a,`team-${s}-${m}`,p).main}),ae=e.memo(()=>{const a=(0,e.useRef)((0,f.a)("teamsync")),s=(0,E.g)(),m=(0,e.useMemo)(()=>parseInt(s.id,10),[s]),p=(0,v.useSelector)(X=>Te(X,m));let O="members";(!p||!T.TP.hasPermissionInMetadata(v.AccessControlAction.ActionTeamsPermissionsRead,p))&&(O="settings");const x=s.page??O,R=(0,v.useSelector)(X=>ve(X,x,m)),L=(0,v.useDispatch)(),{loading:B}=(0,y.A)(async()=>L((0,U.eo)(m)),[m]),Q=()=>{const X=te.includes(x)?x:te[0],w=T.TP.hasPermissionInMetadata(v.AccessControlAction.ActionTeamsRead,p),ne=T.TP.hasPermissionInMetadata(v.AccessControlAction.ActionTeamsPermissionsRead,p),ye=T.TP.hasPermissionInMetadata(v.AccessControlAction.ActionTeamsPermissionsWrite,p);switch(X){case"members":if(ne)return e.createElement(ce,{team:p});case"settings":return w&&e.createElement(he,{team:p});case"groupsync":if(a.current){if(ne)return e.createElement(re,{isReadOnly:!ye})}else if(K.Ay.featureToggles.featureHighlights)return e.createElement(e.Fragment,null,e.createElement(A,{featureName:"team sync",featureId:"team-sync"}),e.createElement(ee,null))}return null};return e.createElement(D.Y,{navId:"teams",pageNav:R},e.createElement(D.Y.Contents,{isLoading:B},p&&Object.keys(p).length!==0&&Q()))});ae.displayName="TeamPages";const Ae=ae},33667:(V,I,t)=>{t.d(I,{Bu:()=>r,It:()=>v,To:()=>C,Vk:()=>Z,aK:()=>T,eo:()=>A,n7:()=>$,nC:()=>_,nM:()=>S,yd:()=>z});var h=t(2543),e=t.n(h),E=t(17172),y=t(82467),f=t(10096),D=t(80714),n=t(31678),M=t(78319),d=t(34655);function r(o=!1){return async(i,l)=>{const{query:g,page:c,perPage:N,sort:F}=l().teams;if(!f.TP.hasPermission(n.AccessControlAction.ActionTeamsRead)){i((0,d.Q9)({teams:[],totalCount:0,page:1,perPage:N,noTeams:!0}));return}const U=await(0,E.AI)().get("/api/teams/search",(0,D.F)({query:g,page:c,perpage:N,sort:F}));let J=!1;if(o&&(J=U.teams.length===0),f.TP.licensedAccessControlEnabled()&&f.TP.hasPermission(n.AccessControlAction.ActionTeamsRolesList)){i((0,d.dJ)());const H=U?.teams.map(b=>b.id),G=await(0,E.AI)().post("/api/access-control/teams/roles/search",{teamIds:H});U.teams.forEach(b=>{b.roles=G?G[b.id]||[]:[]}),i((0,d.jE)())}i((0,d.Q9)({noTeams:J,...U}))}}const u=(0,h.debounce)(o=>o(r()),500);function A(o){return async i=>{const l=await(0,E.AI)().get(`/api/teams/${o}`,(0,D.F)());i((0,d.$T)(l)),i((0,y.Vz)((0,M.R)(l)))}}function C(o){return async i=>{await(0,E.AI)().delete(`/api/teams/${o}`),await f.TP.fetchUserPermissions(),i(r())}}function S(o){return async i=>{i((0,d.L5)(o)),u(i)}}function z(o){return async i=>{i((0,d.EC)(o)),i(r())}}function Z({sortBy:o}){const i=o.length?`${o[0].id}-${o[0].desc?"desc":"asc"}`:void 0;return async l=>{l((0,d.$u)(i)),l(r())}}function W(){return async(o,i)=>{const l=i().team.team,g=await getBackendSrv().get(`/api/teams/${l.id}/members`);o(teamMembersLoaded(g))}}function P(o){return async(i,l)=>{const g=l().team.team;await getBackendSrv().post(`/api/teams/${g.id}/members`,{userId:o}),i(W())}}function K(o){return async(i,l)=>{const g=l().team.team;await getBackendSrv().delete(`/api/teams/${g.id}/members/${o}`),i(W())}}function $(o,i){return async(l,g)=>{const c=g().team.team;await(0,E.AI)().put(`/api/teams/${c.id}`,{name:o,email:i}),l(A(c.id))}}function T(){return async(o,i)=>{const l=i().team.team,g=await(0,E.AI)().get(`/api/teams/${l.id}/groups`);o((0,d.tC)(g))}}function v(o){return async(i,l)=>{const g=l().team.team;await(0,E.AI)().post(`/api/teams/${g.id}/groups`,{groupId:o}),i(T())}}function _(o){return async(i,l)=>{const g=l().team.team;await(0,E.AI)().delete(`/api/teams/${g.id}/groups?groupId=${encodeURIComponent(o)}`),i(T())}}function Y(o){return async i=>{await getBackendSrv().put(`/api/teams/${o.teamId}/members/${o.userId}`,{permission:o.permission}),i(W())}}},78319:(V,I,t)=>{t.d(I,{R:()=>M,X:()=>d});var h=t(33378),e=t(76323),E=t(2913),y=t(16233),f=t(35538),D=t(31678);const n={avatarUrl:"public/img/user_profile.png",id:1,name:"Loading",email:"loading",memberCount:0,permission:D.TeamPermissionLevel.Member,accessControl:{isEditor:!1},orgId:0,updated:""};function M(r){const u={img:r.avatarUrl,id:"team-"+r.id,subTitle:"Manage members and settings",url:"",text:r.name,children:[{active:!1,icon:"sliders-v-alt",id:`team-settings-${r.id}`,text:"Settings",url:`org/teams/edit/${r.id}/settings`}]};(r===n||y.TP.hasPermissionInMetadata(D.AccessControlAction.ActionTeamsPermissionsRead,r))&&u.children.unshift({active:!1,icon:"users-alt",id:`team-members-${r.id}`,text:"Members",url:`org/teams/edit/${r.id}/members`});const A={active:!1,icon:"sync",id:`team-groupsync-${r.id}`,text:"External group sync",url:`org/teams/edit/${r.id}/groupsync`},C=r===n;return(0,f.z5)()&&(A.tabSuffix=()=>(0,e.J)({experimentId:C?"":"feature-highlights-team-sync-badge",eventVariant:"trial"})),(0,h.a)("teamsync")?(C||y.TP.hasPermissionInMetadata(D.AccessControlAction.ActionTeamsPermissionsRead,r))&&u.children.push(A):E.Ay.featureToggles.featureHighlights&&u.children.push({...A,tabSuffix:()=>(0,e.J)({experimentId:C?"":"feature-highlights-team-sync-badge"})}),u}function d(r){const u=M(n);let A;for(const C of u.children)if(C.id.indexOf(r)>0){C.active=!0,A=C;break}return{main:u,node:A}}}}]);

//# sourceMappingURL=TeamPages.801b5ab484e57f163c8c.js.map