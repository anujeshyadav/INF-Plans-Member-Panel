(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[146],{2401:function(e,t,a){"use strict";a.r(t),a.d(t,"AddEquityCash",(function(){return S}));var n=a(52),l=a(14),r=a(15),s=a(17),c=a(16),i=a(1),o=a.n(i),u=a(1150),m=a(1148),p=a(1149),d=a(173),h=a(1153),f=a(804),g=a(803),y=a(787),b=a(800),v=a(57),E=a(802),T=a.n(E),_=a(170),S=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.changeHandler1=function(e){r.setState({allScript:e.target.value})},r.submitHandler=function(e){e.preventDefault();var t={script_type:r.state.script_type,cash_scrpt_name:r.state.allScript,active_value:r.state.active_value,active_value2:r.state.active_value2,call_type:r.state.call_type,SL:r.state.SL,sl_type:!1,T1:r.state.T1,t1_type:!1,T2:r.state.T2,t2_type:!1,T3:r.state.T3,t3_type:!1,T4:r.state.T4,t4_type:!1,t5_type:!1,qty:r.state.qty,type:"Cash"};console.log(t),_.a.post("/admin/add_equityCash",t).then((function(e){console.log(e.data.data),T()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/trade/equityCashList")})).catch((function(e){console.log(e)}))},r.state={script_type:"",scriptName:"",active_value:"",active_value2:"",call_type:"",SL:"",sl_type:!1,T1:"",t1_type:!1,T2:"",t2_type:!1,T3:"",t3_type:!1,T4:"",t4_type:!1,t5:"",t5_type:!1,qty:"",pl_type:"",profit_loss_amt:"",expiryDate:"",updateexpiryDate:""},r.state={type:"",scriptN:[],expdateI:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.a.get("/admin/getCashScript").then((function(t){console.log(t.data.data),e.setState({scriptN:t.data.data})})).catch((function(e){console.log(e)})),_.a.get("/admin/datelist").then((function(e){console.log(e.data.data[0]._id)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e;return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(p.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Equity Cash")),o.a.createElement(p.a,null,o.a.createElement(v.b,{render:function(e){var t=e.history;return o.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/trade/equityCashList")}},"Back")}}))),o.a.createElement(h.a,null,o.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,{className:"mb-2"},o.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(g.a,null,"Script Name*"),o.a.createElement(y.a,{type:"select",name:"cash_scrpt_name",value:this.state.cash_scrpt_name,onChange:this.changeHandler1},o.a.createElement("option",null,"Select Script"),null===(e=this.state.scriptN)||void 0===e?void 0:e.map((function(e){return o.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.scriptName)})))),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,{for:"exampleSelect"},"Equity Script"),o.a.createElement(b.a,{id:"exampleSelect",name:"script_type",type:"select",required:!0,value:this.state.script_type,onChange:this.changeHandler},o.a.createElement("option",null,"Select Script"),o.a.createElement("option",null,"BUY"),o.a.createElement("option",null,"SELL"))),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,{for:"exampleSelect"},"Call Type*"),o.a.createElement(b.a,{id:"exampleSelect",name:"call_type",type:"select",required:!0,resource:"",value:this.state.call_type,onChange:this.changeHandler},o.a.createElement("option",null,"Select Call Type"),o.a.createElement("option",null,"Intraday"),o.a.createElement("option",null,"BTST"),o.a.createElement("option",null,"Short Term"),o.a.createElement("option",null,"Intraday or BTST"),o.a.createElement("option",null,"Intraday (Risky)"),o.a.createElement("option",null,"Intraday (Trailed)"),o.a.createElement("option",null,"Intraday (Re-entry)"),o.a.createElement("option",null,"Intraday (Re-entry- Trailed)"),o.a.createElement("option",null,"Intraday (Hero-Zero)"))),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Active Value*"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Active Value",name:"active_value",required:!0,value:this.state.active_value,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Range Value*"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Max. Value Price",name:"active_value2",required:!0,value:this.state.active_value2,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"SL*"),o.a.createElement(b.a,{name:"SL",type:"number",required:!0,placeholder:"Enter Stop Loss",value:this.state.SL,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"T\u20b9 1* "),o.a.createElement(b.a,{type:"number",required:!0,placeholder:"Enter Target 1",name:"T1",value:this.state.T1,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"T\u20b9 2"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Target 2",name:"T2",value:this.state.T2,onChange:this.changeHandler}))," ",o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"T\u20b9 3"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Target 3",name:"T3",value:this.state.T3,onChange:this.changeHandler}))," ",o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"T\u20b9 4"),o.a.createElement(b.a,{type:"number",placeholder:"Enter Target 4",name:"T4",value:this.state.T4,onChange:this.changeHandler}))," ",o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Quantity*"),o.a.createElement(b.a,{type:"number",name:"qty",required:!0,placeholder:"Enter Quantity",value:this.state.qty,onChange:this.changeHandler}))),o.a.createElement(m.a,null,o.a.createElement(d.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add Equity Cash"))))))}}]),a}(i.Component);t.default=S},800:function(e,t,a){"use strict";var n=a(6),l=a(10),r=a(12),s=a(13),c=a(1),i=a.n(c),o=a(2),u=a.n(o),m=a(5),p=a.n(m),d=a(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,s=e.bsSize,c=e.valid,o=e.invalid,u=e.tag,m=e.addon,f=e.plaintext,g=e.innerRef,y=Object(l.a)(e,h),b=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),T="form-control";f?(T+="-plaintext",E=u||"input"):"file"===r?T+="-file":"range"===r?T+="-range":b&&(T=m?null:"form-check-input"),y.size&&v.test(y.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=y.size,delete y.size);var _=Object(d.mapToCssModules)(p()(t,o&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,T),a);return("input"===E||u&&"function"===typeof u)&&(y.type=r),y.children&&!f&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete y.children),i.a.createElement(E,Object(n.a)({},y,{ref:g,className:_,"aria-invalid":o}))},t}(i.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},803:function(e,t,a){"use strict";var n=a(6),l=a(10),r=a(1),s=a.n(r),c=a(2),i=a.n(c),o=a(5),u=a.n(o),m=a(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:d,order:d,offset:d})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,r=e.hidden,c=e.widths,i=e.tag,o=e.check,d=e.size,h=e.for,f=Object(l.a)(e,p),g=[];c.forEach((function(t,n){var l=e[t];if(delete f[t],l||""===l){var r,s=!n;if(Object(m.isObject)(l)){var c,i=s?"-":"-"+t+"-";r=y(s,t,l.size),g.push(Object(m.mapToCssModules)(u()(((c={})[r]=l.size||""===l.size,c["order"+i+l.order]=l.order||0===l.order,c["offset"+i+l.offset]=l.offset||0===l.offset,c))),a)}else r=y(s,t,l),g.push(r)}}));var b=Object(m.mapToCssModules)(u()(t,!!r&&"sr-only",!!o&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),a);return s.a.createElement(i,Object(n.a)({htmlFor:h},f,{className:b}))};b.propTypes=f,b.defaultProps=g,t.a=b},804:function(e,t,a){"use strict";var n=a(6),l=a(10),r=a(12),s=a(13),c=a(1),i=a.n(c),o=a(2),u=a.n(o),m=a(5),p=a.n(m),d=a(4),h=["className","cssModule","inline","tag","innerRef"],f={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,s=e.tag,c=e.innerRef,o=Object(l.a)(e,h),u=Object(d.mapToCssModules)(p()(t,!!r&&"form-inline"),a);return i.a.createElement(s,Object(n.a)({},o,{ref:c,className:u}))},t}(c.Component);g.propTypes=f,g.defaultProps={tag:"form"},t.a=g}}]);
//# sourceMappingURL=146.2b9767eb.chunk.js.map