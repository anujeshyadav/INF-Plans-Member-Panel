(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[207],{2346:function(e,t,a){"use strict";a.r(t);var n=a(14),i=a(15),r=a(17),l=a(16),c=a(1),s=a.n(c),o=a(1150),u=a(1148),d=a(1149),m=a(1153),g=a(793),f=a(796),p=a(794),h=a(792),v=a(800),S=a(173),b=a(57),E=a(808),w=a(170),z=a(304),N=a(440),P=a(262),y=a(171),A=(a(806),a(802)),D=a.n(A),C=a(882),k=a.n(C),x=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Descriptions",field:"desc",width:200,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",{className:"mt-1"},k()(e.data.desc)))}},{headerName:"Actions",field:"sortorder",width:200,cellRendererFramework:function(t){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(b.b,{render:function(e){var a=e.history;return s.a.createElement(z.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return a.push("/app/pageSetUp/about/editAboutUs/".concat(t.data._id))}})}}),s.a.createElement(N.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(t.data._id)}}))}}]},e.allAboutList=function(){w.a.get("/admin/getAbout_us").then((function(t){var a=t.data.data;e.setState({rowData:a})}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.allAboutList()}},{key:"runthisfunction",value:function(e){var t=this;D()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":w.a.get("/admin/dlt_abtus/".concat(e)).then((function(e){t.allAboutList()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{className:"overflow-hidden agGrid-card"},s.a.createElement(u.a,{className:"m-1"},s.a.createElement(d.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"AboutUs List"))),s.a.createElement(d.a,{className:"pt-4"}),s.a.createElement(m.a,{className:"py-0"},null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(P.a,{className:"ml-50",size:15})),s.a.createElement(p.a,{right:!0},s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(v.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(S.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(y.a.Consumer,null,(function(t){return s.a.createElement(E.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))}}]),a}(s.a.Component);t.default=x},883:function(e,t){}}]);
//# sourceMappingURL=207.53b5a25e.chunk.js.map