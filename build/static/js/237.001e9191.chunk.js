(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[237],{2368:function(e,a,t){"use strict";t.r(a);var r=t(14),n=t(15),i=t(17),l=t(16),c=t(1),s=t.n(c),o=t(173),m=t(1148),d=t(1149),u=t(1150),p=t(1153),g=t(793),f=t(796),h=t(794),E=t(792),N=t(800),w=t(170),v=t(171),S=t(808),z=t(262),P=(t(806),t(570),t(57)),b=t(802),D=t.n(b),y=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Details",field:"scriptName",width:120,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.scriptName))}},{headerName:"Purchase Date",field:"scriptName",width:160,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.scriptName))}},{headerName:"Name",field:"scriptName",width:160,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.scriptName))}},{headerName:"Start Date",field:"scriptName",width:160,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.scriptName))}},{headerName:"End Date",field:"scriptName",width:160,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.scriptName))}},{headerName:"Plan Name",field:"scriptName",width:160,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.scriptName))}},{headerName:"Actions",field:"sortorder",width:250,cellRendererFramework:function(e){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(P.b,{render:function(a){var t=a.history;return s.a.createElement(o.a,{className:"mr-50",size:"25px",color:"primary",onClick:function(){return t.push("/app/scripts/editOption/".concat(e.data._id))}},"Prefilled Application")}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(n.a)(t,[{key:"runthisfunction",value:function(e){var a=this;D()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":w.a.get("/admin/dltEquityScript/".concat(e)).then((function(e){a.getOptionDataList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return s.a.createElement(m.a,{className:"app-user-list"},s.a.createElement(d.a,{sm:"12"}),s.a.createElement(d.a,{sm:"12"},s.a.createElement(u.a,null,s.a.createElement(m.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"Continue Any Application"))),s.a.createElement(p.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(z.a,{className:"ml-50",size:15})),s.a.createElement(h.a,{right:!0},s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(N.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(o.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(v.a.Consumer,null,(function(a){return s.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(s.a.Component);a.default=y}}]);
//# sourceMappingURL=237.001e9191.chunk.js.map