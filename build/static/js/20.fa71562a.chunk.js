/*! For license information please see 20.fa71562a.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[20],{1369:function(e,t,a){},1613:function(e,t,a){"use strict";var r=a(14),n=a(15),o=a(17),i=a(16),l=a(1),s=a.n(l),c=a(793),p=a(796),u=a(794),d=a(792),h=a(173),m=a(800),f=a(921),g=a(982),v=a.n(g),y=a(5),b=a.n(y),E=a(902),w=a.n(E),x=a(28),N=a(304),P=a(441),D=a(262),C=a(393),S=a(263),k=a(193),L=a(261),j=a(27),O=a(72),A=a(43),_=a.n(A);function F(){F=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,o=Object.create(n.prototype),i=new N(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return D()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var l=E(i,a);if(l){if(l===p)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=c(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(e,a,i),o}function c(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=s;var p={};function u(){}function d(){}function h(){}var m={};l(m,n,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(P([])));g&&g!==t&&a.call(g,n)&&(m=g);var v=h.prototype=u.prototype=Object.create(m);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(n,o){function i(){return new t((function(r,i){!function r(n,o,i,l){var s=c(e[n],e,o);if("throw"!==s.type){var p=s.arg,u=p.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(u).then((function(e){p.value=e,i(p)}),(function(e){return r("throw",e,i,l)}))}l(s.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=c(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function P(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return d.prototype=h,l(v,"constructor",h),l(h,"constructor",d),d.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new b(s(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),l(v,i,"Generator"),l(v,n,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=P,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:P(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}var I=function(e){return function(){var t=Object(O.a)(F().mark((function t(a){return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("/api/datalist/data",e).then((function(t){a({type:"GET_DATA",data:t.data.data,totalPages:t.data.totalPages,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=a(3),T=a(826),V=a(803),z=a(187),U=a(75),G=a.n(U),H=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}},e.addNew=!1,e.handleSubmit=function(t){null!==e.props.data?e.props.updateData(t):(e.addNew=!0,e.props.addData(t));var a=Object.keys(e.props.dataParams).length?e.props.dataParams:{page:1,perPage:4};e.props.handleSidebar(!1,!0),e.props.getData(a)},e}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(e,t){null!==this.props.data&&null===e.data&&(this.props.data.id!==t.id&&this.setState({id:this.props.data.id}),this.props.data.name!==t.name&&this.setState({name:this.props.data.name}),this.props.data.category!==t.category&&this.setState({category:this.props.data.category}),this.props.data.popularity.popValue!==t.popularity&&this.setState({popularity:Object(R.a)(Object(R.a)({},this.state.popularity),{},{popValue:this.props.data.popularity.popValue})}),this.props.data.order_status!==t.order_status&&this.setState({order_status:this.props.data.order_status}),this.props.data.price!==t.price&&this.setState({price:this.props.data.price}),this.props.data.img!==t.img&&this.setState({img:this.props.data.img})),null===this.props.data&&null!==e.data&&this.setState({id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew&&this.setState({id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew=!1}},{key:"render",value:function(){var e=this,t=this.props,a=t.show,r=t.handleSidebar,n=t.data,o=this.state,i=o.name,l=o.category,c=o.order_status,p=o.price,u=o.popularity,d=o.img;return s.a.createElement("div",{className:b()("data-list-sidebar",{show:a})},s.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},s.a.createElement("h4",null,null!==n?"UPDATE DATA":"ADD NEW DATA"),s.a.createElement(z.a,{size:20,onClick:function(){return r(!1,!0)}})),s.a.createElement(G.a,{className:"data-list-fields px-2 mt-3",options:{wheelPropagation:!1}},this.props.thumbView&&d.length?s.a.createElement(T.a,{className:"text-center"},s.a.createElement("img",{className:"img-fluid",src:d,alt:i}),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mt-2"},s.a.createElement("label",{className:"btn btn-flat-primary",htmlFor:"update-image",color:"primary"},"Upload Image",s.a.createElement("input",{type:"file",id:"update-image",hidden:!0,onChange:function(t){return e.setState({img:URL.createObjectURL(t.target.files[0])})}})),s.a.createElement(h.a,{color:"flat-danger",onClick:function(){return e.setState({img:""})}},"Remove Image"))):null,s.a.createElement(T.a,null,s.a.createElement(V.a,{for:"data-name"},"Name"),s.a.createElement(m.a,{type:"text",value:i,placeholder:"Apple IphoneX",onChange:function(t){return e.setState({name:t.target.value})},id:"data-name"})),s.a.createElement(T.a,null,s.a.createElement(V.a,{for:"data-category"},"Category"),s.a.createElement(m.a,{type:"select",id:"data-category",value:l,onChange:function(t){return e.setState({category:t.target.value})}},s.a.createElement("option",null,"Audio"),s.a.createElement("option",null,"Computers"),s.a.createElement("option",null,"Fitness"),s.a.createElement("option",null,"Appliances"))),s.a.createElement(T.a,null,s.a.createElement(V.a,{for:"data-popularity"},"Popularity"),s.a.createElement(m.a,{type:"number",value:u.popValue,id:"data-popularity",placeholder:"0 - 100%",onChange:function(t){return e.setState({popularity:{popularity:u,popValue:t.target.value}})}})),s.a.createElement(T.a,null,s.a.createElement(V.a,{for:"data-status"},"Order Status"),s.a.createElement(m.a,{type:"select",id:"data-status",value:c,onChange:function(t){return e.setState({order_status:t.target.value})}},s.a.createElement("option",null,"pending"),s.a.createElement("option",null,"canceled"),s.a.createElement("option",null,"delivered"),s.a.createElement("option",null,"on hold"))),s.a.createElement(T.a,null,s.a.createElement(V.a,{for:"data-price"},"Price"),s.a.createElement(m.a,{type:"number",value:p,onChange:function(t){return e.setState({price:t.target.value})},id:"data-price",placeholder:"69.99"})),this.props.thumbView&&d.length<=0?s.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",s.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(t){return e.setState({img:URL.createObjectURL(t.target.files[0])})}})):null),s.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},s.a.createElement(h.a,{color:"primary",onClick:function(){return e.handleSubmit(e.state)}},null!==n?"Update":"Submit"),s.a.createElement(h.a,{className:"ml-1",color:"danger",outline:!0,onClick:function(){return r(!1,!0)}},"Cancel")))}}]),a}(l.Component),W=a(981),Y=a(817),J=(a(1369),a(2060),{"on hold":"warning",delivered:"success",pending:"primary",canceled:"danger"}),$={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},M=function(e){return s.a.createElement("div",{className:"data-list-action"},s.a.createElement(N.a,{className:"cursor-pointer mr-1",size:20,onClick:function(){return e.currentData(e.row)}}),s.a.createElement(P.a,{className:"cursor-pointer",size:20,onClick:function(){e.deleteRow(e.row)}}))},X=function(e){return s.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap"},s.a.createElement("div",{className:"actions-left d-flex flex-wrap"},s.a.createElement(c.a,{className:"data-list-dropdown mr-1"},s.a.createElement(p.a,{className:"p-1",color:"primary"},s.a.createElement("span",{className:"align-middle mr-1"},"Actions"),s.a.createElement(D.a,{size:15})),s.a.createElement(u.a,{tag:"div",right:!0},s.a.createElement(d.a,{tag:"a"},"Delete"),s.a.createElement(d.a,{tag:"a"},"Archive"),s.a.createElement(d.a,{tag:"a"},"Print"),s.a.createElement(d.a,{tag:"a"},"Export"))),s.a.createElement(h.a,{className:"add-new-btn",color:"primary",onClick:function(){return e.handleSidebar(!0,!0)},outline:!0},s.a.createElement(C.a,{size:15}),s.a.createElement("span",{className:"align-middle"},"Add New"))),s.a.createElement("div",{className:"actions-right d-flex flex-wrap mt-sm-0 mt-2"},s.a.createElement(c.a,{className:"data-list-rows-dropdown mr-1 d-md-block d-none"},s.a.createElement(p.a,{color:"",className:"sort-dropdown"},s.a.createElement("span",{className:"align-middle mx-50"},"".concat(e.index[0]," - ").concat(e.index[1]," of ").concat(e.total)),s.a.createElement(D.a,{size:15})),s.a.createElement(u.a,{tag:"div",right:!0},s.a.createElement(d.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(4)}},"4"),s.a.createElement(d.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(10)}},"10"),s.a.createElement(d.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(15)}},"15"),s.a.createElement(d.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(20)}},"20"))),s.a.createElement("div",{className:"filter-section"},s.a.createElement(m.a,{type:"text",onChange:function(t){return e.handleFilter(t)}}))))},q=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={data:[],totalPages:0,currentPage:0,columns:[{name:"Name",selector:"name",sortable:!0,minWidth:"300px",cell:function(e){return s.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Category",selector:"category",sortable:!0},{name:"Popularity",selector:"popularity",sortable:!0,cell:function(e){return s.a.createElement(f.a,{className:"w-100 mb-0",color:e.popularity.color,value:e.popularity.popValue})}},{name:"Order Status",selector:"order_status",sortable:!0,cell:function(e){return s.a.createElement(W.a,{className:"m-0",color:J[e.order_status],text:e.order_status})}},{name:"Price",selector:"price",sortable:!0,cell:function(e){return"$".concat(e.price)}},{name:"Actions",sortable:!0,cell:function(t){return s.a.createElement(M,{row:t,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],allData:[],value:"",rowsPerPage:4,sidebar:!1,currentData:null,selected:[],totalRecords:0,sortIndex:[],addNew:""},e.thumbView=e.props.thumbView,e.handleFilter=function(t){e.setState({value:t.target.value}),e.props.filterData(t.target.value)},e.handleRowsPerPage=function(t){var a=e.props,r=a.parsedFilter,n=a.getData,o=void 0!==r.page?r.page:1;x.a.push("/data-list/list-view?page=".concat(o,"&perPage=").concat(t)),e.setState({rowsPerPage:t}),n({page:r.page,perPage:t})},e.handleSidebar=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({sidebar:t}),!0===a&&e.setState({currentData:null,addNew:!0})},e.handleDelete=function(t){if(e.props.deleteData(t),e.props.getData(e.props.parsedFilter),e.state.data.length-1===0){var a=e.props.thumbView?"/data-list/thumb-view/":"/data-list/list-view/";x.a.push("".concat(a,"list-view?page=").concat(parseInt(e.props.parsedFilter.page-1),"&perPage=").concat(e.props.parsedFilter.perPage)),e.props.getData({page:e.props.parsedFilter.page-1,perPage:e.props.parsedFilter.perPage})}},e.handleCurrentData=function(t){e.setState({currentData:t}),e.handleSidebar(!0)},e.handlePagination=function(t){var a=e.props,r=a.parsedFilter,n=a.getData,o=void 0!==r.perPage?r.perPage:4,i=e.props.thumbView?"/data-list/thumb-view/":"/data-list/list-view/";x.a.push("".concat(i,"list-view?page=").concat(t.selected+1,"&perPage=").concat(o)),n({page:t.selected+1,perPage:o}),e.setState({currentPage:t.selected})},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.getData(this.props.parsedFilter),this.props.getInitialData()}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.thumbView){this.thumbView=!1;var r=[{name:"Image",selector:"img",minWidth:"220px",cell:function(e){return s.a.createElement("img",{src:e.img,height:"100",alt:e.name})}},{name:"Name",selector:"name",sortable:!0,minWidth:"250px",cell:function(e){return s.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Category",selector:"category",sortable:!0},{name:"Popularity",selector:"popularity",sortable:!0,cell:function(e){return s.a.createElement(f.a,{className:"w-100 mb-0",color:e.popularity.color,value:e.popularity.popValue})}},{name:"Order Status",selector:"order_status",sortable:!0,cell:function(e){return s.a.createElement(W.a,{className:"m-0",color:J[e.order_status],text:e.order_status})}},{name:"Price",selector:"price",sortable:!0,cell:function(e){return"$".concat(e.price)}},{name:"Actions",sortable:!0,cell:function(e){return s.a.createElement(M,{row:e,getData:a.props.getData,parsedFilter:a.props.parsedFilter,currentData:a.handleCurrentData,deleteRow:a.handleDelete})}}];this.setState({columns:r})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.columns,r=t.data,n=t.allData,o=t.totalPages,i=t.value,l=t.rowsPerPage,c=t.currentData,p=t.sidebar,u=t.totalRecords,d=t.sortIndex;return s.a.createElement("div",{className:"data-list ".concat(this.props.thumbView?"thumb-view":"list-view")},s.a.createElement(v.a,{columns:a,data:i.length?n:r,pagination:!0,paginationServer:!0,paginationComponent:function(){return s.a.createElement(w.a,{previousLabel:s.a.createElement(S.a,{size:15}),nextLabel:s.a.createElement(k.a,{size:15}),breakLabel:"...",breakClassName:"break-me",pageCount:o,containerClassName:"vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2",activeClassName:"active",forcePage:e.props.parsedFilter.page?parseInt(e.props.parsedFilter.page-1):0,onPageChange:function(t){return e.handlePagination(t)}})},noHeader:!0,subHeader:!0,selectableRows:!0,responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(t){return e.setState({selected:t.selectedRows})},customStyles:$,subHeaderComponent:s.a.createElement(X,{handleSidebar:this.handleSidebar,handleFilter:this.handleFilter,handleRowsPerPage:this.handleRowsPerPage,rowsPerPage:l,total:u,index:d}),sortIcon:s.a.createElement(D.a,null),selectableRowsComponent:Y.a,selectableRowsComponentProps:{color:"primary",icon:s.a.createElement(L.a,{className:"vx-icon",size:12}),label:"",size:"sm"}}),s.a.createElement(H,{show:p,data:c,updateData:this.props.updateData,addData:this.props.addData,handleSidebar:this.handleSidebar,thumbView:this.props.thumbView,getData:this.props.getData,dataParams:this.props.parsedFilter,addNew:this.state.addNew}),s.a.createElement("div",{className:b()("data-list-overlay",{show:p}),onClick:function(){return e.handleSidebar(!1,!0)}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.dataList.data.length!==t.data.length||t.currentPage!==e.parsedFilter.page?{data:e.dataList.data,allData:e.dataList.filteredData,totalPages:e.dataList.totalPages,currentPage:parseInt(e.parsedFilter.page)-1,rowsPerPage:parseInt(e.parsedFilter.perPage),totalRecords:e.dataList.totalRecords,sortIndex:e.dataList.sortIndex}:null}}]),a}(l.Component);t.a=Object(j.b)((function(e){return{dataList:e.dataList}}),{getData:I,deleteData:function(e){return function(t){_.a.post("/api/datalist/delete-data",{obj:e}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},updateData:function(e){return function(t,a){_.a.post("/api/datalist/update-data",{obj:e}).then((function(a){t({type:"UPDATE_DATA",obj:e})}))}},addData:function(e){return function(t,a){var r=a().dataList.params;_.a.post("/api/datalist/add-data",{obj:e}).then((function(a){t({type:"ADD_DATA",obj:e}),t(I(r))}))}},getInitialData:function(){return function(){var e=Object(O.a)(F().mark((function e(t){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/datalist/initial-data").then((function(e){t({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},filterData:function(e){return function(t){return t({type:"FILTER_DATA",value:e})}}})(q)},2060:function(e,t,a){},817:function(e,t,a){"use strict";var r=a(14),n=a(15),o=a(17),i=a(16),l=a(1),s=a.n(l),c=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},s.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),s.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},s.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),s.a.createElement("span",null,this.props.label))}}]),a}(s.a.Component);t.a=c},981:function(e,t,a){"use strict";var r=a(14),n=a(15),o=a(17),i=a(16),l=a(1),s=a.n(l),c=a(187),p=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},s.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?s.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},s.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?s.a.createElement("div",{className:"avatar"},s.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,s.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?s.a.createElement("div",{className:"chip-closable",onClick:function(t){return e.closeChip(t)}},this.props.closableIcon?this.props.closableIcon:s.a.createElement(c.a,null)):null))}}]),a}(s.a.Component);t.a=p}}]);
//# sourceMappingURL=20.fa71562a.chunk.js.map