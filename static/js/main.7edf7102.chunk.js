(this["webpackJsonpuser-registration"]=this["webpackJsonpuser-registration"]||[]).push([[0],{11:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"personalInfo",(function(){return h})),a.d(r,"addressInfo",(function(){return O})),a.d(r,"paymentInfo",(function(){return f}));var n,c=a(0),s=a.n(c),o=a(7),l=a.n(o),u=a(5),i=a(9),b=a.n(i),m=a(12),j=a(1),d=function(e){var t=e.errorCode;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:" Something went wrong"}),Object(j.jsxs)("h4",{children:[" Error Code: ",t,", Please try again "]})]})},N=(a(11),function(e){var t=e.paymentDataId;return Object(j.jsxs)("div",{className:"success",children:[Object(j.jsx)("h2",{children:" Data successful saved"}),Object(j.jsxs)("h3",{className:"paymentId",children:["paymentDataId: ",t]})]})});!function(e){e.PERSONAL_INFO="personalInfo",e.ADDRESS_INFO="addressInfo",e.PAYMENT_INFO="paymentInfo"}(n||(n={}));var p="Input field cant blank",h=function(e){return function(t){t({type:n.PERSONAL_INFO,payload:e})}},O=function(e){return function(t){t({type:n.ADDRESS_INFO,payload:e})}},f=function(e){return function(t){t({type:n.PAYMENT_INFO,payload:e})}},g=a(3),x=a(6),v={firstName:"",lastName:"",streetName:"",city:"",accountOwner:"",ibnNumber:"",phoneNumber:null,houseNumber:"",zipCode:""},I=function(e,t){var a=t.firstName,r=t.lastName,n=t.phoneNumber;return Object(x.a)(Object(x.a)({},e),{},{firstName:a,lastName:r,phoneNumber:n})},S=function(e,t){var a=t.streetName,r=t.houseNumber,n=t.zipCode,c=t.city;return Object(x.a)(Object(x.a)({},e),{},{streetName:a,houseNumber:r,zipCode:n,city:c})},y=function(e,t){var a=t.owner,r=t.iban;return Object(x.a)(Object(x.a)({},e),{},{accountOwner:a,ibnNumber:r})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.PERSONAL_INFO:return I(e,t.payload);case n.ADDRESS_INFO:return S(e,t.payload);case n.PAYMENT_INFO:return y(e,t.payload);default:return e}},C=Object(g.c)({registration:w}),F=a(13),T=Object(g.d)(C,{},Object(g.a)(F.a)),D=a(4),E=a(15),P=a.n(E),z=(a(45),s.a.memo((function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),o=Object(u.a)(s,2),l=o[0],i=o[1],h=Object(c.useState)(),O=Object(u.a)(h,2),f=O[0],x=O[1],v=Object(c.useState)(""),I=Object(u.a)(v,2),S=I[0],y=I[1],w=Object(D.b)(),C=Object(g.b)(r,w).paymentInfo,F=Object(D.c)((function(e){return e.registration}));Object(c.useEffect)((function(){localStorage.getItem("paymentInfo")&&T()}),[]);var T=function(){C({owner:String(localStorage.getItem("owner")),iban:String(localStorage.getItem("iban"))})},E=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.customerId=Math.floor(99*Math.random()+1),e.prev=1,e.next=4,fetch("/default/wunderfleet-recruiting-backend-dev-save-payment-data",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(200===(a=e.sent).status){e.next=12;break}throw r={statusText:a.statusText,status:a.status},i(!1),x(a.status),new Error(JSON.stringify(r));case 12:return e.next=14,a.json();case 14:n=e.sent,i(!1),y(n.paymentDataId);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0);case 22:localStorage.clear();case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[!a&&!f&&!S&&Object(j.jsxs)("form",{className:"form",onSubmit:function(e){i(!0),e.preventDefault();var t={owner:e.currentTarget.accountOwner.value,iban:e.currentTarget.ibnNumber.value};e.currentTarget.accountOwner.value.length&&e.currentTarget.ibnNumber.value.length?(C(t),function(e){localStorage.setItem("paymentInfo","paymentInfo"),localStorage.setItem("owner",e.owner),localStorage.setItem("iban",e.iban)}(t),E(t)):alert(p)},children:[Object(j.jsx)("h3",{className:"text-center",children:" Payment Information "}),Object(j.jsxs)("div",{className:"form-step form-step-active",children:[Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{htmlFor:"accountOwner",children:"Account Owner"}),Object(j.jsx)("input",{type:"text",name:"accountOwner",id:"accountOwner",defaultValue:F.accountOwner})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{htmlFor:"ibnNumber",children:"IBAN Number"}),Object(j.jsx)("input",{type:"text",name:"ibnNumber",id:"ibnNumber",defaultValue:F.ibnNumber})]}),Object(j.jsxs)("div",{className:"btns-group",children:[Object(j.jsx)("button",{className:"btn btn-prev",onClick:function(){return n(!0)},children:"Previous"}),Object(j.jsx)("button",{className:"btn btn-next",children:"Submit"})]})]})]}),a&&Object(j.jsx)(A,{}),f&&Object(j.jsx)(d,{errorCode:f}),S&&!f&&Object(j.jsx)(N,{paymentDataId:S}),Object(j.jsx)("div",{className:"loader",children:l&&Object(j.jsx)(P.a,{type:"Oval",color:"#00BFFF",height:50,width:50})})]})}))),A=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(D.b)(),o=Object(c.useState)(!1),l=Object(u.a)(o,2),i=l[0],b=l[1],m=Object(D.c)((function(e){return e.registration})),d=Object(g.b)(r,s).addressInfo;Object(c.useEffect)((function(){localStorage.getItem("addressInfo")&&N()}),[]);var N=function(){d({streetName:String(localStorage.getItem("streetName")),city:String(localStorage.getItem("city")),houseNumber:Number(localStorage.getItem("houseNumber")),zipCode:Number(localStorage.getItem("zipCode"))})};return Object(j.jsxs)("div",{children:[!a&&!i&&Object(j.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),e.currentTarget.streetName.value.length&&e.currentTarget.houseNumber.value.length&&e.currentTarget.city.value.length&&e.currentTarget.zipCode.value){var t={streetName:e.currentTarget.streetName.value,houseNumber:e.currentTarget.houseNumber.value,city:e.currentTarget.city.value,zipCode:e.currentTarget.zipCode.value};n(!0),d(t),a=t,localStorage.setItem("addressInfo","addressInfo"),localStorage.setItem("streetName",a.streetName),localStorage.setItem("city",a.city),localStorage.setItem("houseNumber",String(a.houseNumber)),localStorage.setItem("zipCode",String(a.zipCode))}else n(!1),alert(p);var a},children:[Object(j.jsx)("h3",{className:"text-center",children:" Address Information "}),Object(j.jsxs)("div",{className:"form-step form-step-active",children:[Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{htmlFor:"streetName",children:"Street Name"}),Object(j.jsx)("input",{type:"text",name:"streetName",placeholder:"Street Name",id:"streetName",defaultValue:m.streetName})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{htmlFor:"houseNumber",children:"House Number"}),Object(j.jsx)("input",{type:"text",name:"houseNumber",placeholder:"House Number",id:"houseNumber",defaultValue:m.houseNumber})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{htmlFor:"zipCode",children:"Zip Code"}),Object(j.jsx)("input",{type:"text",name:"zipCode",id:"zipCode",placeholder:"Zip Code",defaultValue:m.zipCode})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",name:"city",id:"city",placeholder:"City",defaultValue:m.city})]}),Object(j.jsxs)("div",{className:"btns-group",children:[Object(j.jsx)("button",{className:"btn btn-prev",onClick:function(){b(!0),n(!1)},children:"Previous"}),Object(j.jsx)("button",{className:"btn btn-next",children:"Next"})]})]})]}),a&&!i&&Object(j.jsx)(z,{}),i&&Object(j.jsx)(k,{})]})},k=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(D.b)(),o=Object(g.b)(r,s).personalInfo,l=Object(D.c)((function(e){return e.registration}));Object(c.useEffect)((function(){b()}),[]);var i=function(e){localStorage.setItem("personalInfo","personalInfo"),localStorage.setItem("firstName",e.firstName),localStorage.setItem("lastName",e.lastName),localStorage.setItem("phoneNumber",String(e.phoneNumber))},b=function(){localStorage.getItem("personalInfo")&&o({firstName:String(localStorage.getItem("firstName")),lastName:String(localStorage.getItem("lastName")),phoneNumber:Number(localStorage.getItem("phoneNumber"))})};return Object(j.jsxs)("div",{children:[!a&&Object(j.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),e.currentTarget.firstName.value.length&&e.currentTarget.lastName.value.length&&e.currentTarget.phoneNumber.value.length){n(!0);var t={firstName:e.currentTarget.firstName.value,lastName:e.currentTarget.lastName.value,phoneNumber:e.currentTarget.phoneNumber.value};o(t),i(t)}else n(!1),alert(p)},children:[Object(j.jsx)("h3",{className:"text-center",children:" Personal Information "}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(j.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name",defaultValue:l.firstName})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(j.jsx)("input",{type:"text",name:"lastName",id:"lastName",placeholder:"Last Name",defaultValue:l.lastName})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{htmlFor:"phoneNumber",children:"Number"}),Object(j.jsx)("input",{type:"text",name:"phoneNumber",id:"phoneNumber",placeholder:"Phone Number",defaultValue:l.phoneNumber})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-next btn-next-width",children:"Next"})})]}),a&&Object(j.jsx)(A,{})]})};var V=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(k,{})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(D.a,{store:T,children:Object(j.jsx)(V,{})})}),document.getElementById("root")),_()}},[[46,1,2]]]);
//# sourceMappingURL=main.7edf7102.chunk.js.map