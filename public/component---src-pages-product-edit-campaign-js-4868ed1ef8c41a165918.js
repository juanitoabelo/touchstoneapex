(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"5IPT":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return P}));var l=t("JX7q"),n=t("dI71"),i=t("0HrA"),m=t("G9dV"),s=t("jGo9"),r=t("DAwz"),c=t("paqj"),o=t("eUAm"),u=t("q1tI"),d=t.n(u),p=t("Wbzz"),g=t("vOnD"),h=t("1Yd/"),E=t("vDqi"),y=t.n(E),b=t("Ji2X"),C=t("PoRk"),v=Object(g.e)(m.a).withConfig({displayName:"edit-campaign__Input",componentId:"nujixv-0"})(["margin-bottom:10px;"]),N=Object(g.e)(i.a).withConfig({displayName:"edit-campaign__SelectStyled",componentId:"nujixv-1"})(["margin-bottom:1rem;"]),I=[{value:"1",label:"One Time Billing"},{value:"2",label:"Recurring Billing"},{value:"3",label:"No Billing"}],D=[{value:"Active",label:"Active"},{value:"InActive",label:"InActive"}],S=[{value:"One Time",label:"One Time"},{value:"1 Month",label:"1 Month"},{value:"3 Months",label:"3 Months"},{value:"6 Months",label:"6 Months"},{value:"1 Year",label:"1 Year"},{value:"2 Years",label:"2 Years"}],R="undefined"!=typeof window,P=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).state={CampaignTyData:[],CampaignAddedState:!1,CampaignFieldsAddedState:!1,PageURLState:!1,CampaignListByProductID:[],CampaignTypeDataString:"",CampaignFieldsData:[],LandingPageDataByCampaignIdData:[],CampaignID:"",ProductId:"",CompanyId:"",CampaignName:"",CampaignTypeDataId:"",CampaignStatus:"",BillAmount:"",BillAmountFirstRecur:"",BillAmountRecur:"",BillInterval:"",RetryIntervalDays:"",RetryNum:"",FieldName:"",DisplayName:"",PageURL:""},a.saveState=function(e){a.setState(e)},a.onSaveCampaign=function(e){var t=Object(l.a)(a),n=t.saveState;t.state;y()({method:"get",url:"https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",params:{tblName:"tblCampaigns",queryType:"updateCampaign",CampaignID:a.state.CampaignID,ProductId:a.state.ProductId,CompanyId:a.state.CompanyId,CampaignName:a.state.CampaignName,CampaignTypeDataId:a.state.CampaignTypeDataId,CampaignStatus:a.state.CampaignStatus,BillAmount:a.state.BillAmount,BillAmountFirstRecur:a.state.BillAmountFirstRecur,BillAmountRecur:a.state.BillAmountRecur,BillInterval:a.state.BillInterval,RetryIntervalDays:a.state.RetryIntervalDays,RetryNum:a.state.RetryNum}}).then((function(e){console.log(e,"New Campaign successfully Added"),n({CampaignAddedState:!0})})).catch((function(e){console.log(e,"error")}))},a.onAddPageURL=function(e){var t=Object(l.a)(a),n=t.saveState;t.state;y()({method:"get",url:"https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",params:{tblName:"tblLandingPage",queryType:"addNewLandingPage",CampaignID:a.state.CampaignID,PageURL:a.state.PageURL}}).then((function(e){console.log(e,"New PageURL successfully Added"),n({PageURLState:!0})})).catch((function(e){console.log(e,"error")}))},a.onSaveFieldList=function(e){var t=Object(l.a)(a),n=t.saveState;t.state;y()({method:"get",url:"https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",params:{tblName:"tblCampaignFields",queryType:"addNewCampaignField",CampaignID:a.state.CampaignID,FieldName:a.state.FieldName,DisplayName:a.state.DisplayName}}).then((function(e){console.log(e,"New Campaign successfully Added"),n({CampaignFieldsAddedState:!0})})).catch((function(e){console.log(e,"error")}))},a.onSelectCampaignTypeOption=function(e){a.saveState({CampaignTypeDataId:e.value})},a.onSelectCampaignStatusOption=function(e){a.saveState({CampaignStatus:e.value})},a.onSelectBillingIntervalOption=function(e){a.saveState({BillInterval:e.value})},a.onChangeStatus=function(e){switch(e.target.name){case"FieldName":console.log("Field Name: "+e.target.value),a.saveState({FieldName:e.target.value});break;case"DisplayName":console.log("Display Name: "+e.target.value),a.saveState({DisplayName:e.target.value});break;case"PageURL":console.log("Display PageURL: "+e.target.value),a.saveState({PageURL:e.target.value});break;case"CampaignName":a.saveState({CampaignName:e.target.value});break;case"EditBillAmount":a.saveState({BillAmount:e.target.value});break;case"EditBillAmountFirstRecur":a.saveState({BillAmountFirstRecur:e.target.value});break;case"EditBillAmountRecur":a.saveState({BillAmountRecur:e.target.value});break;case"EditRetryIntervalDays":a.saveState({RetryIntervalDays:e.target.value});break;case"EditRetryNum":console.log("Display PageURL: "+e.target.value),a.saveState({RetryNum:e.target.value})}},a}Object(n.a)(a,e);var t=a.prototype;return t.componentWillUnmount=function(){this.setState({CampaignTyData:[],CampaignAddedState:!1,CampaignFieldsAddedState:!1,PageURLState:!1,CampaignListByProductID:[],CampaignTypeDataString:"",CampaignFieldsData:[],LandingPageDataByCampaignIdData:[],CampaignID:"",ProductId:"",CompanyId:"",CampaignName:"",CampaignTypeDataId:"",CampaignStatus:"",BillAmount:"",BillAmountFirstRecur:"",BillAmountRecur:"",BillInterval:"",RetryIntervalDays:"",RetryNum:"",FieldName:"",DisplayName:"",PageURL:""})},t.componentDidMount=function(){!Object(C.c)()&&R&&(window.location.href="/");var e=this.saveState,a=(this.state,window.location.search),t=new URLSearchParams(a),l=t.get("productID"),n=t.get("campaignID");this.saveState({ProductId:l,CampaignID:n}),console.log("Product id Paremeter:"+l),y.a.get("https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",{params:{tblName:"tblCampaigns",queryType:"getCampaignByProductId",ProductID:l}}).then((function(a){switch(console.log("Compaign Data: "+JSON.stringify(a.data[0].CampaignName)),a.data[0].CampaignType){case"1":e({CampaignTypeDataString:"One Time Billing"});break;case"2":e({CampaignTypeDataString:"Recurring Billing"});break;case"3":e({CampaignTypeDataString:"No Billing"})}e({CampaignListByProductID:a.data,ProductId:a.data[0].ProductID,CompanyId:a.data[0].CompanyID,CampaignName:a.data[0].CampaignName,CampaignTypeDataId:a.data[0].CampaignType,CampaignStatus:a.data[0].CampaignStatus,BillAmount:a.data[0].BillAmount,BillAmountFirstRecur:a.data[0].BillAmountFirstRecur,BillAmountRecur:a.data[0].BillAmountRecur,BillInterval:a.data[0].BillInterval,RetryIntervalDays:a.data[0].RetryIntervalDays,RetryNum:a.data[0].RetryNum})})).catch((function(e){console.log(e)})).then((function(e){console.log(e,"successfull")})),y.a.get("https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",{params:{tblName:"tblCampaignFields",queryType:"getCampaignFieldByCampaignId",CampaignID:n}}).then((function(a){console.log("Campaign Field Name: "+JSON.stringify(a.data)),e({CampaignFieldsData:a.data})})).catch((function(e){console.log(e)})).then((function(e){console.log(e,"successfull")})),y.a.get("https://touchstone-api.abelocreative.com/touchstone-ajax/ajax.php",{params:{tblName:"tblLandingPage",queryType:"getLandingPageByCampaignId",CampaignID:n}}).then((function(a){console.log("Campaign Field Name: "+JSON.stringify(a.data)),e({LandingPageDataByCampaignIdData:a.data})})).catch((function(e){console.log(e)})).then((function(e){console.log(e,"successfull")}))},t.render=function(){var e,a,t,l=this.onSelectCampaignTypeOption,n=this.onSaveCampaign,i=this.onChangeStatus,m=this.onSelectBillingIntervalOption,u=this.onSelectCampaignStatusOption,g=this.onAddPageURL,E=this.onSaveFieldList,y=this.state;this.saveState;return d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,{title:"VIEW/EDIT CAMPAIGN"}),d.a.createElement("div",{className:"content-wrapper px-4 py-4"},d.a.createElement(s.a,null,d.a.createElement(s.b,null,d.a.createElement(b.a,null,d.a.createElement(o.a,null,d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("h1",{className:"text-center mb-5"},"VIEW/EDIT CAMPAIGN"),this.state.CampaignAddedState?d.a.createElement("div",{className:"text-center text-success"},"Successfully Updated Campaign"):null)),d.a.createElement(o.a,{className:"justify-content-center align-items-center mb-5"},d.a.createElement(c.a,{className:"col-lg-12"},d.a.createElement("form",null,d.a.createElement(o.a,{className:"mb-5"},d.a.createElement(c.a,{breakPoint:{xs:12},className:"mb-4"},d.a.createElement("label",null,"Product/Service"),d.a.createElement(p.Link,{className:"color-red text-decoration-none",to:"/product/edit-product?prodId="+this.state.ProductId+"&companyId="+this.state.CompanyId}," ",this.state.CampaignName)),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("label",{htmlFor:"CampaignName"},"Campaign Name"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.CampaignName,id:"CampaignName",className:"CampaignName",name:"CampaignName",onChange:i.bind(this)}))),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("label",{htmlFor:"CampaignType"},"Type"),d.a.createElement(N,{options:I.map((function(e){return{value:e.value,label:e.label}})),placeholder:this.state.CampaignTypeDataString,id:"CampaignType",name:"CampaignType",onChange:l.bind(this)})),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("label",{htmlFor:"EditCampaignStatus"},"Status"),d.a.createElement(N,{options:D.map((function(e){return{value:e.value,label:e.label}})),placeholder:y.CampaignStatus,id:"EditCampaignStatus",name:"EditCampaignStatus",onChange:u.bind(this)})),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("h3",null,"Billing")),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("label",{htmlFor:"EditBillAmount"},"First Charge"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.BillAmount,id:"EditBillAmount",className:"EditBillAmount",name:"EditBillAmount",onChange:i.bind(this)}))),d.a.createElement(c.a,{breakPoint:{xs:12},className:"mb-3"},d.a.createElement("label",{htmlFor:"EditBillTrialDays"},"Trial Length"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.BillTrialDays,id:"EditBillTrialDays",className:"EditBillTrialDays",name:"EditBillTrialDays",onChange:i.bind(this)})),d.a.createElement("small",{className:"d-block"},"Days")),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("label",{htmlFor:"EditBillAmountFirstRecur"},"First Recur $"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.BillAmountFirstRecur,id:"EditBillAmountFirstRecur",className:"EditBillAmountFirstRecur",name:"EditBillAmountFirstRecur",onChange:i.bind(this)}))),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("label",{htmlFor:"EditBillAmountRecur"},"Continuing Recur $"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.BillAmountRecur,id:"EditBillAmountRecur",className:"EditBillAmountRecur",name:"EditBillAmountRecur",onChange:i.bind(this)}))),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("label",{htmlFor:"EditBillInterval"},"Billing Interval:"),d.a.createElement(N,{options:S,placeholder:"Select Billing Interval",id:"EditBillInterval",name:"EditBillInterval",onChange:m.bind(this)})),d.a.createElement(c.a,{breakPoint:{xs:12},className:"mb-3"},d.a.createElement("label",{htmlFor:"EditRetryIntervalDays"},"Retry Interval"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.RetryIntervalDays,id:"EditRetryIntervalDays",className:"EditRetryIntervalDays",name:"EditRetryIntervalDays",onChange:i.bind(this)})),d.a.createElement("small",{className:"d-block"},"Days")),d.a.createElement(c.a,{breakPoint:{xs:12},className:"mb-3"},d.a.createElement("label",{htmlFor:"EditRetryNum"},"# of Retries"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.RetryNum,id:"EditRetryNum",className:"EditRetryNum",name:"EditRetryNum",onChange:i.bind(this)}))),d.a.createElement(c.a,((e={breakPoint:{xs:12}}).breakPoint={md:6},e),d.a.createElement(r.a,{status:"Success",type:"button",shape:"SemiRound",onClick:n,fullWidth:!0},"Save"))),d.a.createElement(o.a,{className:"justify-content-center align-items-center mb-5"},d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("h2",{className:"text-center"},"FIELD LIST")),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("table",{class:"table table-striped"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{scope:"col"},"Field ID"),d.a.createElement("th",{scope:"col"},"Field Name"),d.a.createElement("th",{scope:"col"}," Display Name"))),d.a.createElement("tbody",null,y.CampaignFieldsData.map((function(e){var a=e.CampaignID,t=e.FieldName,l=e.FieldDisplayName;return d.a.createElement("tr",null,d.a.createElement("td",null,a),d.a.createElement("td",null,t),d.a.createElement("td",null,l))}))))),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("form",null,this.state.CampaignFieldsAddedState?d.a.createElement("div",{className:"text-center text-success mb-5"},"Successfully Updated Campaign Field"):null,d.a.createElement(o.a,{className:"mb-5"},d.a.createElement(c.a,{breakPoint:{xs:12},className:"mb-4"},d.a.createElement("label",{htmlFor:"FieldName"},"Field Name:"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.FieldName,id:"FieldName",className:"FieldName",name:"FieldName",onChange:i.bind(this)}))),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("label",{htmlFor:"DisplayName"},"Display Name"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.DisplayName,id:"DisplayName",className:"DisplayName",name:"DisplayName",onChange:i.bind(this)}))),d.a.createElement(c.a,((a={breakPoint:{xs:12}}).breakPoint={md:6},a),d.a.createElement(r.a,{status:"Success",type:"button",shape:"SemiRound",onClick:E,fullWidth:!0},"Add")))))),d.a.createElement(o.a,{className:"justify-content-center align-items-center mb-5"},d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("h2",{className:"text-center"},"LANDING PAGE LIST")),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("table",{class:"table table-striped"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{scope:"col"},"LandingPage ID"),d.a.createElement("th",{scope:"col"},"Campaign ID"),d.a.createElement("th",{scope:"col"},"Page URL"))),d.a.createElement("tbody",null,y.LandingPageDataByCampaignIdData.map((function(e){var a=e.LandingPageID,t=e.CampaignID,l=e.PageURL;return d.a.createElement("tr",null,d.a.createElement("td",null,a),d.a.createElement("td",null,t),d.a.createElement("td",null,l))}))))),d.a.createElement(c.a,{breakPoint:{xs:12}},d.a.createElement("form",null,this.state.PageURLState?d.a.createElement("div",{className:"text-center text-success mb-5"},"Successfully Updated PageURL Field"):null,d.a.createElement(o.a,{className:"mb-5"},d.a.createElement(c.a,{breakPoint:{xs:12},className:"mb-4"},d.a.createElement("label",{htmlFor:"PageURL"},"Page Url:"),d.a.createElement(v,{fullWidth:!0,size:"Small"},d.a.createElement("input",{type:"text",value:this.state.PageURL,id:"PageURL",className:"PageURL",name:"PageURL",onChange:i.bind(this)}))),d.a.createElement(c.a,((t={breakPoint:{xs:12}}).breakPoint={md:6},t),d.a.createElement(r.a,{status:"Success",type:"button",shape:"SemiRound",onClick:g,fullWidth:!0},"Add"))))))))))))))},a}(u.Component)}}]);
//# sourceMappingURL=component---src-pages-product-edit-campaign-js-4868ed1ef8c41a165918.js.map