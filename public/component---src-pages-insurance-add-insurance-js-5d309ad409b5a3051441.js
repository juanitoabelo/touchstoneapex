(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{WrAz:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t("dI71"),l=t("0HrA"),r=t("G9dV"),o=t("jGo9"),c=t("DAwz"),i=(t("Wbzz"),t("paqj")),d=t("eUAm"),s=t("q1tI"),m=t.n(s),u=t("vOnD"),p=t("1Yd/"),h=t("vDqi"),P=t.n(h),b=t("Ji2X"),O=t("PoRk"),G=Object(u.e)(r.a).withConfig({displayName:"add-insurance__Input",componentId:"sc-1o4xrrs-0"})(["margin-bottom:10px;"]),E=Object(u.e)(l.a).withConfig({displayName:"add-insurance__SelectStyled",componentId:"sc-1o4xrrs-1"})(["margin-bottom:1rem;"]),S=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],v=[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"}],C="undefined"!=typeof window,f=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={Name:"",GradeRes:"",GradePHP:"",GradeIOP:"",GradeOP:"",GradeDET:"",JCHOO:"",CARF:""},a.saveState=function(e){a.setState(e)},a.onAddInsurance=function(){P()({method:"get",url:"https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",params:{tblName:"tblInsurance",queryType:"addInsuranceData",Name:a.state.Name,GradeRes:a.state.GradeRes,GradePHP:a.state.GradePHP,GradeIOP:a.state.GradeIOP,GradeOP:a.state.GradeOP,GradeDET:a.state.GradeDET,JCHOO:a.state.JCHOO,CARF:a.state.CARF}}).then((function(e){console.log(e,"New Insurance data successfully Added")})).catch((function(e){console.log(e,"error")}))},a.onChangeStatus=function(e){a.saveState({Name:e.target.value})},a.onSelectGradeResOption=function(e){a.saveState({GradeRes:e.value})},a.onSelectGradePHPOption=function(e){a.saveState({GradePHP:e.value})},a.onSelectGradeIOPOption=function(e){a.saveState({GradeIOP:e.value})},a.onSelectGradeOPOption=function(e){a.saveState({GradeOP:e.value})},a.onSelectGradeDETOption=function(e){a.saveState({GradeDET:e.value})},a.onSelectJCHOOption=function(e){a.saveState({JCHOO:e.value})},a.onSelectCARFOption=function(e){a.saveState({CARF:e.value})},a}Object(n.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){!Object(O.c)()&&C&&(window.location.href="/")},t.render=function(){var e,a,t=this.onChangeStatus,n=this.onAddInsurance,l=this.onSelectCARFOption,r=this.onSelectJCHOOption,s=this.onSelectGradeDETOption,u=this.onSelectGradeOPOption,h=this.onSelectGradeIOPOption,P=this.onSelectGradeResOption,O=this.onSelectGradePHPOption;return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{title:"Add Insurance"}),m.a.createElement("div",{className:"content-wrapper px-4 py-4"},m.a.createElement(o.a,null,m.a.createElement(o.b,null,m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(i.a,{breakPoint:{xs:12}},m.a.createElement("h1",{className:"text-center mb-5"},"Add Insurance"))),m.a.createElement(d.a,{className:"justify-content-center align-items-center mb-5"},m.a.createElement(i.a,{className:"col-lg-12"},m.a.createElement("form",null,m.a.createElement(d.a,null,m.a.createElement(i.a,{breakPoint:{xs:12}},m.a.createElement("label",{htmlFor:"Name"},"Name"),m.a.createElement(G,{fullWidth:!0,size:"Medium",className:"Name"},m.a.createElement("input",{type:"text",placeholder:"",id:"Name",name:"Name",onChange:t.bind(this)}))),m.a.createElement(i.a,{breakPoint:{xs:12}},m.a.createElement("label",{htmlFor:"GradeRes"},"GradeRes"),m.a.createElement(E,{options:v,placeholder:"Select",id:"GradeRes",name:"GradeRes",onChange:P.bind(this)})),m.a.createElement(i.a,{breakPoint:{xs:12}},m.a.createElement("label",{htmlFor:"GradePHP"},"GradePHP"),m.a.createElement(E,{options:v,placeholder:"Select",id:"GradePHP",name:"GradePHP",onChange:O.bind(this)})),m.a.createElement(i.a,{breakPoint:{xs:12}},m.a.createElement("label",{htmlFor:"GradeIOP"},"GradeIOP"),m.a.createElement(E,{options:v,placeholder:"Select",id:"GradeIOP",name:"GradeIOP",onChange:h.bind(this)})),m.a.createElement(i.a,{breakPoint:{xs:12}},m.a.createElement("label",{htmlFor:"GradeOP"},"GradeOP"),m.a.createElement(E,{options:v,placeholder:"Select",id:"GradeOP",name:"GradeOP",onChange:u.bind(this)})),m.a.createElement(i.a,{breakPoint:{xs:12}},m.a.createElement("label",{htmlFor:"GradeDET"},"GradeDET"),m.a.createElement(E,{options:v,placeholder:"Select",id:"GradeDET",name:"GradeDET",onChange:s.bind(this)})),m.a.createElement(i.a,{breakPoint:{xs:12}},m.a.createElement("label",{htmlFor:"JCHO"},"JCHO"),m.a.createElement(E,{options:S,placeholder:"Select",id:"JCHO",name:"JCHO",onChange:r.bind(this)})),m.a.createElement(i.a,{breakPoint:{xs:12}},m.a.createElement("label",{htmlFor:"CARF"},"CARF"),m.a.createElement(E,{options:S,placeholder:"Select",id:"CARF",name:"CARF",onChange:l.bind(this)})),m.a.createElement(i.a,((e={breakPoint:{xs:12}}).breakPoint={md:9},e)),m.a.createElement(i.a,((a={breakPoint:{xs:12}}).breakPoint={md:3},a),m.a.createElement(c.a,{status:"Success",type:"button",shape:"SemiRound",onClick:n,fullWidth:!0},"Save")))))))))))},a}(s.Component)}}]);
//# sourceMappingURL=component---src-pages-insurance-add-insurance-js-5d309ad409b5a3051441.js.map