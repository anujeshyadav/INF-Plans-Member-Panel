(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[213],{2415:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),i=a(16),l=a(15),c=a(0),s=a.n(c),o=a(1141),u=a(1142),d=a(1143),m=a(172),p=a(1146),f=a(786),g=a(789),h=a(787),E=a(785),S=a(794),v=a(56),w=a(801),P=a(170),N=a(301),b=a(437),z=a(259),y=a(169),D=(a(800),a(797)),k=a.n(D),x=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150},{headerName:"Month",field:"month",width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.month))}},{headerName:"Year",field:"year",width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.year))}},{headerName:"Discount Price",field:"dst_price",width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.dst_price))}},{headerName:"MRP",field:"mrp",width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.mrp))}},{headerName:"Actions",field:"sortorder",width:180,cellRendererFramework:function(t){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(v.b,{render:function(e){var a=e.history;return s.a.createElement(N.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return a.push("/app/explore/Trupee/editPS/".concat(t.data._id))}})}}),s.a.createElement(b.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(t.data._id)}}))}}]},e.performanceSheetList=function(){y.a.get("/admin/getPerSheet").then((function(t){var a=t.data.data;JSON.stringify(a),e.setState({rowData:a})})).catch((function(e){console.log(e.response)}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.performanceSheetList()}},{key:"runthisfunction",value:function(e){var t=this;k()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":y.a.get("/admin/dltPerSheet/".concat(e)).then((function(e){t.performanceSheetList()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return s.a.createElement(o.a,{className:"app-user-list"},s.a.createElement(u.a,{sm:"12"}),s.a.createElement(u.a,{sm:"12"},s.a.createElement(d.a,{className:"overflow-hidden agGrid-card"},s.a.createElement(o.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"Performance Sheet List")),s.a.createElement(u.a,null,s.a.createElement(v.b,{render:function(e){var t=e.history;return s.a.createElement(m.a,{className:" btn btn-success float-right",onClick:function(){return t.push("/app/explore/Trupee/addPS")}},"Add")}}))),s.a.createElement(p.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(f.a,{className:"p-1 ag-dropdown"},s.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(z.a,{className:"ml-50",size:15})),s.a.createElement(h.a,{right:!0},s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(S.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(P.a.Consumer,null,(function(t){return s.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(s.a.Component);t.default=x}}]);
//# sourceMappingURL=213.720c99b5.chunk.js.map