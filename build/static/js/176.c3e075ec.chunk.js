(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[176],{2424:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var n=t(51),l=t(13),r=t(14),s=t(16),c=t(15),o=t(0),i=t.n(o),m=t(1141),d=t(1142),p=t(1139),u=t(1140),h=t(1143),g=t(172),E=t(1146),b=t(796),f=t(795),N=t(794),y=t(169),C=(t(27),t(797)),S=t.n(C),v=t(56),w=t(837),k=t(838),T=t(811),H=t.n(T),_=(t(847),t(804),function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).onEditorStateChange=function(e){r.setState({editorState:e,desc:H()(Object(w.convertToRaw)(e.getCurrentContent()))})},r.onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log(r.state);var a=new FormData;a.append("title",r.state.title),a.append("desc",r.state.desc),a.append("chart_type",r.state.chart_type),a.append("image",r.state.selectedFile,r.state.selectedName);var t=r.props.match.params.id;y.a.post("/admin/edit_trendingChart/".concat(t),a).then((function(e){console.log(e.data),S()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/explore/Trupee/tradingViewCharts")})).catch((function(e){console.log(e)}))},r.state={title:"",desc:"",image:"",chart_type:"",selectedName:"",selectedFile:null},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("/admin/getone_charts/".concat(a)).then((function(a){console.log(a),e.setState({title:a.data.data.title,desc:a.data.data.desc,image:a.data.data.image,chart_type:a.data.data.chart_type})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(p.a,{listTag:"div"},i.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(u.a,{href:"/app/explore/Trupee/tradingViewCharts",tag:"a"},"Trading View Charts List"),i.a.createElement(u.a,{active:!0},"Edit Trading View Charts"))))),i.a.createElement(h.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Trading View Charts")),i.a.createElement(d.a,null,i.a.createElement(v.b,{render:function(e){var a=e.history;return i.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/explore/Trupee/tradingViewCharts")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Title"),i.a.createElement(N.a,{required:!0,type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Image"),i.a.createElement(N.a,{type:"file",name:"image",onChange:this.onChangeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(f.a,{for:"exampleSelect"},"Equity Script"),i.a.createElement(N.a,{id:"exampleSelect",name:"chart_type",type:"select",value:this.state.chart_type,onChange:this.changeHandler},i.a.createElement("option",null,"Select Chart"),i.a.createElement("option",null,"INDEX"),i.a.createElement("option",null,"Stock"),"\\")),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Descripition"),i.a.createElement(k.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(o.Component))},804:function(e,a,t){}}]);
//# sourceMappingURL=176.c3e075ec.chunk.js.map