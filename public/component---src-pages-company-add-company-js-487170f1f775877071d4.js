(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{W0cz:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t("dI71"),o=t("0HrA"),l=t("G9dV"),m=t("jGo9"),p=t("DAwz"),r=(t("Wbzz"),t("paqj")),c=t("eUAm"),y=t("q1tI"),i=t.n(y),s=t("vOnD"),u=t("1Yd/"),d=t("vDqi"),C=t.n(d),b=t("Ji2X"),h=t("PoRk"),f=Object(s.e)(l.a).withConfig({displayName:"add-company__Input",componentId:"sc-9wnj7w-0"})(["margin-bottom:10px;"]),T=Object(s.e)(o.a).withConfig({displayName:"add-company__SelectStyled",componentId:"sc-9wnj7w-1"})(["margin-bottom:1rem;"]),v=[{value:"Mutual Referent",label:"Mutual Referent"},{value:"Referent",label:"Referent"},{value:"Resource",label:"Resource"},{value:"Contributor",label:"Contributor"},{value:"Influencer",label:"Influencer"},{value:"Friendly",label:"Friendly"},{value:"Advocate",label:"Advocate"},{value:"Other",label:"Other"}],g="undefined"!=typeof window,E=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).state={CompanyName:"",CompanyType:0,CompanyMemberType:"",CompanyTypeData:[]},a.saveState=function(e){a.setState(e)},a.onAddCompany=function(){C()({method:"get",url:"https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",params:{tblName:"tblCompany",queryType:"addNewCompanyInfo",CompanyName:a.state.CompanyName,CompanyMemberType:a.state.CompanyMemberType,CompanyType:a.state.CompanyType}}).then((function(e){console.log(e,"Added New Company successfull")})).catch((function(e){console.log(e,"error")}))},a.onChangeStatus=function(e){a.saveState({CompanyName:e.target.value})},a.onChangeMemberTypeOptions=function(e){a.saveState({CompanyMemberType:e.value})},a.onChangeCompanyTypeOption=function(e){a.saveState({CompanyType:e.value})},a}Object(n.a)(a,e);var t=a.prototype;return t.componentWillUnmount=function(){this.setState({CompanyName:"",CompanyType:0,CompanyMemberType:"",CompanyTypeData:[]})},t.componentDidMount=function(){!Object(h.c)()&&g&&(window.location.href="/");var e=this.saveState;this.state;C.a.get("https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",{params:{tblName:"tblCompanyType",queryType:"getAllCompanyType"}}).then((function(a){console.log("Company Type Data: "+JSON.stringify(a.data)),e({CompanyTypeData:a.data})})).catch((function(e){console.log(e)})).then((function(e){console.log(e,"successfull")}))},t.render=function(){var e,a,t=this.state,n=this.onChangeMemberTypeOptions,o=this.onChangeCompanyTypeOption,l=this.onChangeStatus,y=this.onAddCompany;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:"Add Company"}),i.a.createElement("div",{className:"content-wrapper px-4 py-4"},i.a.createElement(m.a,null,i.a.createElement(m.b,null,i.a.createElement(b.a,null,i.a.createElement(c.a,null,i.a.createElement(r.a,{breakPoint:{xs:12}},i.a.createElement("h1",{className:"text-center mb-5"},"Add Company"))),i.a.createElement(c.a,{className:"justify-content-center align-items-center mb-5"},i.a.createElement(r.a,{className:"col-lg-12"},i.a.createElement("form",null,i.a.createElement(c.a,null,i.a.createElement(r.a,{breakPoint:{xs:12}},i.a.createElement("label",{htmlFor:"CompanyType"},"Company Type"),i.a.createElement(T,{options:t.CompanyTypeData.map((function(e){return{value:e.CompanyTypeID,label:e.CompanyTypeDesc}})),placeholder:t.CompanyTypeDescription,id:"CompanyType",name:"CompanyType",value:t.CompanyId,onChange:o.bind(this)})),i.a.createElement(r.a,{breakPoint:{xs:12}},i.a.createElement("label",{htmlFor:"MemberType"},"Member Type"),i.a.createElement(T,{options:v,placeholder:"Select",id:"MemberType",name:"MemberType",onChange:n.bind(this)})),i.a.createElement(r.a,{breakPoint:{xs:12}},i.a.createElement("label",{htmlFor:"CompanyName"},"Company Name"),i.a.createElement(f,{fullWidth:!0,size:"Medium",className:"Name"},i.a.createElement("input",{type:"text",placeholder:"",id:"CompanyName",name:"CompanyName",onChange:l.bind(this)}))),i.a.createElement(r.a,((e={breakPoint:{xs:12}}).breakPoint={md:9},e)),i.a.createElement(r.a,((a={breakPoint:{xs:12}}).breakPoint={md:3},a),i.a.createElement(p.a,{status:"Success",type:"button",shape:"SemiRound",onClick:y,fullWidth:!0},"Save")))))))))))},a}(y.Component)}}]);
//# sourceMappingURL=component---src-pages-company-add-company-js-487170f1f775877071d4.js.map