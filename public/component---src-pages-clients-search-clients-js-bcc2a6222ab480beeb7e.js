(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1UGr":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var l=t("JX7q"),n=t("dI71"),r=(t("ToJy"),t("0HrA")),o=t("G9dV"),c=t("jGo9"),i=t("DAwz"),s=(t("Wbzz"),t("paqj")),m=t("eUAm"),u=t("q1tI"),d=t.n(u),p=t("vOnD"),b=t("1Yd/"),h=t("vDqi"),v=t.n(h),E=t("Ji2X"),g=t("PoRk"),f=t("kzC8"),C=Object(p.e)(o.a).withConfig({displayName:"search-clients__Input",componentId:"au1kwd-0"})(["margin-bottom:10px;"]),y=Object(p.e)(r.a).withConfig({displayName:"search-clients__SelectStyled",componentId:"au1kwd-1"})(["margin-bottom:1rem;"]),N=(p.e.div.withConfig({displayName:"search-clients__ErrorStyle",componentId:"au1kwd-2"})(["width:100%;display:flex;flex-direction:column;align-items:center;margin-bottom:2rem;small{margin-bottom:3rem;}h1{margin-bottom:0.5rem;}a{max-width:20rem;}"]),"undefined"!=typeof window),k=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={company:{label:"All",value:0},searchBy:{label:"Email",value:"EmailAddress"},searchFor:"",data:[],loader:"",error:!1,errorMsg:"",perpage:10,current:0,pagination:1},a.saveState=function(e){a.setState(e)},a.onChangeDropdown=function(e,t){var l;a.saveState(((l={})[e]={label:t.label,value:t.value},l))},a.onChangeInputText=function(e){a.saveState({searchFor:e.target.value})},a.onSearchLeads=function(){var e=Object(l.a)(a),t=e.state,n=t.company,r=t.searchBy,o=t.searchFor,c=e.saveState;c({loader:"Loading!!!",error:!1,errorMsg:"",data:[]}),v.a.get("https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",{params:{tblName:"tblClients",queryType:"searchClientsByCompanyForBy",company:n.value,searchBy:r.value,searchFor:o}}).then((function(e){var a=e.data,t=!1,l="";a.length<=0&&(t=!0,l=f.c),c({data:a,error:t,errorMsg:l})})).catch((function(e){console.log(e),c({error:"error"})}))},a.pageFunc=function(e,t,l,n,r){if(void 0===n&&(n=0),r.preventDefault(),void 0===e)return"type required";if(void 0===t)return"perpage required";if(void 0===l)return"max required";var o=a.state,c=o.pagination,i=o.current,s=o.data,m=Object(f.j)({lengthData:s.length,pagination:c,current:i,perpage:t,max:l,number:n,type:e});a.saveState(m)},a.sortCol=function(e){var t,l=a.state,n=l.data,r=l.toggleDate,o=l.toggleFName,c=l.toggleLName,i=l.toggleEmailAddress,s=l.toggleHomePhone,m=l.toggleService;n.sort((function(a,l){var n,u="",d="";switch(e){case"Date":u=a.Date.toUpperCase(),d=l.Date.toUpperCase(),n=r,t={toggleDate:!r};break;case"FirstName":u=a.FirstName.toUpperCase(),d=l.FirstName.toUpperCase(),n=o,t={toggleFName:!o};break;case"LastName":u=a.LastName.toUpperCase(),d=l.LastName.toUpperCase(),n=c,t={toggleLName:!c};break;case"EmailAddress":u=a.EmailAddress.toUpperCase(),d=l.EmailAddress.toUpperCase(),n=i,t={toggleEmailAddress:!i};break;case"HomePhone":u=a.HomePhone.toUpperCase(),d=l.HomePhone.toUpperCase(),n=s,t={toggleHomePhone:!s};break;case"Service":null!=a.Service&&(u=a.Service.toUpperCase()),null!=l.Service&&(d=l.Service.toUpperCase()),n=m,t={toggleService:!m};break;default:u=a.Date.toUpperCase(),d=l.Date.toUpperCase(),n=r}return Object(f.o)(u,d,n)})),a.saveState(Object.assign({data:n},t))},a.display=function(e){var t=e.data,n=e.loader,r=e.error,o=e.errorMsg,c=e.current,i=e.perpage,s=e.pagination;if(void 0!==t&&t.length>0){var m=Object(l.a)(a),u=(m.editViewProduct,m.pageFunc),p=m.sortCol,b=t.slice(c,c+i),h=Math.floor(t.length/i)+(Math.floor(t.length%i)>0?1:0);return d.a.createElement("div",null,d.a.createElement("table",{className:"table table-striped table-hover"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{scope:"col",onClick:p.bind(Object(l.a)(a),"Date")},"DATE"),d.a.createElement("th",{scope:"col",onClick:p.bind(Object(l.a)(a),"FirstName")},"FIRST NAME"),d.a.createElement("th",{scope:"col",onClick:p.bind(Object(l.a)(a),"LastName")},"LAST NAME"),d.a.createElement("th",{scope:"col",onClick:p.bind(Object(l.a)(a),"EmailAddress")},"EMAIL"),d.a.createElement("th",{scope:"col",onClick:p.bind(Object(l.a)(a),"HomePhone")},"HOME #"),d.a.createElement("th",{scope:"col",onClick:p.bind(Object(l.a)(a),"Service")},"SERVICE"))),d.a.createElement("tbody",null,b.map((function(e){var a=e.ClientID,t=e.Date,l=e.FirstName,n=e.LastName,r=e.EmailAddress,o=e.HomePhone,c=e.Service;return d.a.createElement("tr",{key:a},d.a.createElement("td",null,t),d.a.createElement("td",null,d.a.createElement("a",{className:"color-red text-decoration-none",href:"/product/edit-product?leadID="+a},l)),d.a.createElement("td",null,d.a.createElement("a",{className:"color-red text-decoration-none",href:"/product/edit-product?leadID="+a},n)),d.a.createElement("td",null,d.a.createElement("a",{className:"color-red text-decoration-none",href:"/product/edit-product?leadID="+a},r)),d.a.createElement("td",null,o),d.a.createElement("td",null,c))})))),d.a.createElement("nav",{"aria-label":"Page navigation example"},d.a.createElement("ul",{class:"pagination"},d.a.createElement("li",{class:"page-item"},d.a.createElement("a",{href:"/#",class:"page-link",onClick:u.bind(Object(l.a)(a),"first",i,h,0)},"«")),d.a.createElement("li",{class:"page-item"},d.a.createElement("a",{href:"/#",class:"page-link",onClick:u.bind(Object(l.a)(a),"prev",i,h,0)},"‹")),Object(f.h)(h,u,i,s),d.a.createElement("li",{class:"page-item"},d.a.createElement("a",{href:"/#",class:"page-link",onClick:u.bind(Object(l.a)(a),"next",i,h,0)},"›")),d.a.createElement("li",{class:"page-item"},d.a.createElement("a",{href:"/#",class:"page-link",onClick:u.bind(Object(l.a)(a),"last",i,h,0)},"»")))))}if(r)switch(o){case f.c:return d.a.createElement("table",{className:"table table-striped table-hover"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"DATE"),d.a.createElement("th",null,"FIRST NAME"),d.a.createElement("th",null,"LAST NAME"),d.a.createElement("th",null,"EMAIL"),d.a.createElement("th",null,"HOME #"),d.a.createElement("th",null,"SERVICE"))))}return n},a}Object(n.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){!Object(g.c)()&&N&&(window.location.href="/")},t.render=function(){var e,a,t,l,n,r=this.onSearchLeads,o=this.onChangeDropdown,u=this.onChangeInputText,p=this.display,h=this.state,v=h.company,g=h.searchBy,N=h.searchFor;return d.a.createElement(d.a.Fragment,null,d.a.createElement(b.a,{title:"CLIENT ADMIN"}),d.a.createElement("div",{className:"content-wrapper px-4 py-4"},d.a.createElement(c.a,null,d.a.createElement(c.b,null,d.a.createElement(E.a,null,d.a.createElement(m.a,null,d.a.createElement(s.a,{breakPoint:{xs:12}},d.a.createElement("h1",{className:"text-center mb-5"},"CLIENT ADMIN"))),d.a.createElement(m.a,{className:"justify-content-center align-items-center mb-5"},d.a.createElement(s.a,{className:"col-lg-12"},d.a.createElement(c.a,null,d.a.createElement(c.b,{className:"p-5"},d.a.createElement(m.a,null,d.a.createElement(s.a,((e={breakPoint:{xs:12}}).breakPoint={md:4},e),d.a.createElement("label",{htmlFor:"CompanyID"},"Company"),d.a.createElement(y,{options:f.l,placeholder:v.label,value:v.value,id:"CompanyID",name:"CompanyID",onChange:o.bind(this,"company")})),d.a.createElement(s.a,((a={breakPoint:{xs:12}}).breakPoint={md:4},a),d.a.createElement("label",{htmlFor:"SearchVal"},"Search For"),d.a.createElement(C,{fullWidth:!0,size:"Medium",className:"notes"},d.a.createElement("input",{type:"text",placeholder:N,value:N,id:"SearchVal",name:"SearchVal",onChange:u.bind(this)}))),d.a.createElement(s.a,((t={breakPoint:{xs:12}}).breakPoint={md:4},t),d.a.createElement("label",{htmlFor:"SearchBy"},"Search By"),d.a.createElement(y,{options:f.n,placeholder:g.label,value:g.value,id:"SearchBy",name:"SearchBy",onChange:o.bind(this,"searchBy")})),d.a.createElement(s.a,((l={breakPoint:{xs:12}}).breakPoint={md:6},l),d.a.createElement(i.a,{status:"Success",type:"button",shape:"SemiRound",onClick:r},"View Clients"))))))),d.a.createElement(m.a,{className:"justify-content-center align-items-center mb-4"},d.a.createElement(s.a,((n={breakPoint:{xs:12}}).breakPoint={md:12},n),d.a.createElement("h2",{className:"mb-0"},"Results"))),d.a.createElement(m.a,{className:"mb-5"},d.a.createElement(s.a,{id:"main_view"},p(h))))))))},a}(u.Component)},kzC8:function(e,a,t){"use strict";t.d(a,"h",(function(){return r})),t.d(a,"i",(function(){return o})),t.d(a,"c",(function(){return c})),t.d(a,"j",(function(){return i})),t.d(a,"d",(function(){return s})),t.d(a,"o",(function(){return m})),t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return p})),t.d(a,"e",(function(){return b})),t.d(a,"m",(function(){return h})),t.d(a,"l",(function(){return v})),t.d(a,"n",(function(){return E})),t.d(a,"f",(function(){return g})),t.d(a,"k",(function(){return f}));var l=t("q1tI"),n=t.n(l),r=function(e,a,t,l){var r,o=[],c=1,i=5;l>1&&(c=l,i+=l);for(var s=e>i?i:e,m=e>i,u=c;u<=s;u++)r={},l===u&&(r={fontWeight:600,textDecoration:"underline"}),o[u]=n.a.createElement("li",{className:"page-item",key:u},n.a.createElement("a",{className:"page-link",style:r,href:"/#",onClick:a.bind(void 0,null,t,e,u)},u));if(m){var d=s;1===l&&(d+=1),o[d]=n.a.createElement("li",{className:"page-item"},n.a.createElement("button",{className:"page-link",style:r},"..."))}return o},o=function(e,a,t){return n.a.createElement("div",null,n.a.createElement("input",{type:"number",value:t,onChange:a.bind(void 0,e)}),"/",e)},c="no-product",i=function(e){var a,t,l,n=e.lengthData,r=e.pagination,o=e.current,c=e.perpage,i=e.max,s=e.number;switch(e.type){case"prev":a=1===r?1:r-1,l=o-c,0===o&&(l=o),t=Object.assign({},t,{current:l,pagination:a});break;case"next":a=r===i?i:r+1,l=o+c,o===n-n%c&&(l=o),t=Object.assign({},t,{current:l,pagination:a});break;case"first":t=Object.assign({},t,{pagination:1,current:0});break;case"last":t=Object.assign({},t,{current:c*i-c,pagination:i});break;default:l=s*c-c,1===s&&(l=0),s===n&&(l=n-n%c),t=Object.assign({},t,{current:l,pagination:s})}return t},s=function(e){return null!=e?e.toUpperCase():""},m=function(e,a,t){return e<a?t?1:-1:e>a?t?-1:1:0},u=["None","SP (Self Pay)","NFU (Needs Followup)","NS (Needs Scholarship)","RL (Revisit Later)","TY (Too Young)","TO (Too Old)","M (Medicaid)","PI (Private Insurance)","L (Location)","NC (No Call)"],d=[];d[4]="Phone Call",d[5]="Missed Call",d[6]="Form Fill";var p=[].concat(d),b={Active:"Success",Referred:"Success",Deactivated:"Success",Admin:"Success",All:"Success"},h=[{value:"EmailAddress",label:"Email"},{value:"FirstName",label:"First Name"},{value:"LastName",label:"Last Name"},{value:"CompanyName",label:"Company Name"},{value:"HomePhone",label:"Home Phone"},{value:"WorkPhone",label:"WorkPhone"},{value:"CellPhone",label:"CellPhone"}],v=[{value:"0",label:"All"},{value:"12",label:"Advanced Recovery Systems"},{value:"1",label:"Apex Notes"},{value:"20",label:"At The Crossroads"},{value:"3",label:"Cedar Ridge"},{value:"22",label:"Clearview Girls Academy"},{value:"2",label:"Clearview Horizon"},{value:"7",label:"Elevations"},{value:"21",label:"Elk Mountain"},{value:"10",label:"Family First"},{value:"6",label:"Family Positive Impact"},{value:"16",label:"Gulf Coast Treatment Center"},{value:"13",label:"Journey Pure"},{value:"9",label:"Makana"},{value:"4",label:"MiBoSpi Recovery"},{value:"17",label:"Newport Academy"},{value:"14",label:"Palm Shores Behavioral Health Center"},{value:"8",label:"Red Frog"},{value:"19",label:"Second Chances of Southern Utah"},{value:"23",label:"Soulegria"},{value:"5",label:"Therapy Insider"},{value:"18",label:"Visions Teen Center"},{value:"11",label:"Voyage Recovery"},{value:"15",label:"Voyage Recovery Center"}],E=[{value:"EmailAddress",label:"Email"},{value:"FirstName",label:"First Name"},{value:"LastName",label:"Last Name"},{value:"HomePhone",label:"Home Phone"},{value:"WorkPhone",label:"WorkPhone"},{value:"CellPhone",label:"CellPhone"},{value:"First4",label:"First 4"},{value:"Last4",label:"Last 4"}],g=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)},f=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"}]}}]);
//# sourceMappingURL=component---src-pages-clients-search-clients-js-bcc2a6222ab480beeb7e.js.map