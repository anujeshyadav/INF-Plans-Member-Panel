(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[244],{2357:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),i=t(16),l=t(15),c=t(0),s=t.n(c),o=t(1141),u=t(1142),d=t(1143),m=t(1146),g=t(786),f=t(789),p=t(787),h=t(785),v=t(794),E=t(172),w=t(797),b=t.n(w),S=t(169),N=t(801),z=t(170),P=t(304),y=t(301),C=t(437),D=t(259),k=(t(800),t(56)),x=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Reffrel Code",field:"refral_Code",width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.refral_Code))}},{headerName:"Mobile",field:"mobile",width:120,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.mobile))}},{headerName:"WaslletID",field:"walletid",width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.walletId))}},{headerName:"Amount",field:"amount",width:200,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.amount))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Deactive"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"sortorder",width:120,cellRendererFramework:function(a){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(k.b,{render:function(e){var t=e.history;return s.a.createElement(P.a,{className:"mr-50",color:"green",size:20,onClick:function(){return t.push("/app/users/viewUsers/".concat(a.data._id))}})}}),s.a.createElement(k.b,{render:function(e){var t=e.history;return s.a.createElement(y.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return t.push("/app/users/editUsers/".concat(a.data._id))}})}}),s.a.createElement(C.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(a.data._id)}}))}}]},e.allUserLis=function(){S.a.get("/admin/getuser").then((function(a){var t=a.data.data;e.setState({rowData:t})}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.allUserLis()}},{key:"runthisfunction",value:function(e){var a=this;b()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":S.a.get("/admin/deletuser/".concat(e)).then((function(e){a.allUserLis()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return s.a.createElement(o.a,{className:"app-user-list"},s.a.createElement(u.a,{sm:"12"}),s.a.createElement(u.a,{sm:"12"},s.a.createElement(d.a,null,s.a.createElement(o.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"All Users List"))),s.a.createElement(m.a,{className:"py-0"},null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(D.a,{className:"ml-50",size:15})),s.a.createElement(p.a,{right:!0},s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(v.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(E.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(z.a.Consumer,null,(function(a){return s.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(s.a.Component);a.default=x}}]);
//# sourceMappingURL=244.f714f82e.chunk.js.map