(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"l7+O":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a("dI71"),o=a("0HrA"),c=a("G9dV"),r=a("jGo9"),l=a("DAwz"),i=(a("Wbzz"),a("paqj")),m=a("eUAm"),u=a("q1tI"),s=a.n(u),d=a("vOnD"),p=a("1Yd/"),h=a("vDqi"),P=a.n(h),D=a("Ji2X"),f=a("PoRk"),b=Object(d.e)(c.a).withConfig({displayName:"add-product__Input",componentId:"sc-2gnusa-0"})(["margin-bottom:10px;"]),y=Object(d.e)(o.a).withConfig({displayName:"add-product__SelectStyled",componentId:"sc-2gnusa-1"})(["margin-bottom:1rem;"]),E="undefined"!=typeof window,C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={CompanyData:[],ProductDataName:"",ProductDataId:"",ProductDescription:""},t.saveState=function(e){t.setState(e)},t.onSaveProduct=function(e){P()({method:"get",url:"https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",params:{tblName:"tblProducts",queryType:"addProductInfo",ProductCompanyID:t.state.ProductDataId,ProductDataName:t.state.ProductDataName,ProductDescription:t.state.ProductDescription}}).then((function(e){console.log(e,"New Product Info successfully Added")})).catch((function(e){console.log(e,"error")}))},t.onSelectCompanyOption=function(e){t.saveState({ProductDataId:e.value})},t.onChangeProductName=function(e){t.saveState({ProductDataName:e.target.value})},t.onChangeProductDescription=function(e){t.saveState({ProductDescription:e.target.value})},t}Object(n.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.setState({CompanyData:[],ProductDataName:"",ProductDataId:"",ProductDescription:""})},a.componentDidMount=function(){!Object(f.c)()&&E&&(window.location.href="/");var e=this.saveState;P.a.get("https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",{params:{tblName:"tblCompany",queryType:"getAllCompanyInfo"}}).then((function(t){console.log("Company Data: "+JSON.stringify(t.data)),e({CompanyData:t.data})})).catch((function(e){console.log(e)})).then((function(e){console.log(e,"successfull")}))},a.render=function(){var e,t,a,n=this.onChangeProductName,o=this.onSelectCompanyOption,c=this.onSaveProduct,u=this.onChangeProductDescription,d=this.state;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:"ADD PRODUCT/SERVICE"}),s.a.createElement("div",{className:"content-wrapper px-4 py-4"},s.a.createElement(r.a,null,s.a.createElement(r.b,null,s.a.createElement(D.a,null,s.a.createElement(m.a,null,s.a.createElement(i.a,{breakPoint:{xs:12}},s.a.createElement("h1",{className:"text-center mb-5"},"ADD PRODUCT/SERVICE"))),s.a.createElement(m.a,{className:"justify-content-center align-items-center mb-5"},s.a.createElement(i.a,{className:"col-lg-12"},s.a.createElement("form",null,s.a.createElement(m.a,null,s.a.createElement(i.a,{breakPoint:{xs:12}},s.a.createElement("label",{htmlFor:"ProductName"},"Product/Service Name"),s.a.createElement(b,{fullWidth:!0,size:"Small",className:"notes"},s.a.createElement("input",{type:"text",placeholder:"",id:"ProductName",className:"ProductName",name:"ProductName",onChange:n.bind(this)}))),s.a.createElement(i.a,{breakPoint:{xs:12}},s.a.createElement("label",{htmlFor:"CompanyID"},"Company"),s.a.createElement(y,{options:d.CompanyData.map((function(e){return{value:e.companyId,label:e.companyName}})),placeholder:"Select Company",id:"CompanyID",name:"CompanyID",onChange:o.bind(this)})),s.a.createElement(i.a,((e={breakPoint:{xs:12}}).breakPoint={md:12},e),s.a.createElement("label",{htmlFor:"ProductDescription"},"Product/Service Description"),s.a.createElement(b,{fullWidth:!0,shape:"Round"},s.a.createElement("textarea",{rows:5,placeholder:"",name:"ProductDescription",id:"ProductDescription",onChange:u.bind(this)}))),s.a.createElement(i.a,((t={breakPoint:{xs:12}}).breakPoint={md:6},t)),s.a.createElement(i.a,((a={breakPoint:{xs:12}}).breakPoint={md:6},a),s.a.createElement(l.a,{status:"Success",type:"button",shape:"SemiRound",onClick:c,fullWidth:!0},"Save")))))))))))},t}(u.Component)}}]);
//# sourceMappingURL=component---src-pages-product-add-product-js-fe131277cdf636103819.js.map