(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[184],{2439:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(52),l=t(14),o=t(15),r=t(17),s=t(16),c=t(1),i=t.n(c),m=t(1148),d=t(1149),u=t(1146),p=t(1147),h=t(1150),b=t(173),E=t(1153),g=t(804),f=t(803),y=t(800),N=t(170),v=(t(28),t(802)),S=t.n(v),C=t(57),O=t(834),k=t(835),T=t(812),F=t.n(T),H=(t(846),t(809),function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=a.call(this,e)).onEditorStateChange=function(e){o.setState({editorState:e,desc:F()(Object(O.convertToRaw)(e.getCurrentContent()))})},o.onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]})},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),console.log(o.state);var a=new FormData;a.append("title",o.state.title),a.append("desc",o.state.desc),a.append("img",o.state.selectedFile);var t=o.props.match.params.id;N.a.post("/admin/editOportunity/".concat(t),a).then((function(e){console.log(e.data.data),S()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))},o.state={title:"",image:"",selectedName:"",selectedFile:null,editorState:O.EditorState.createEmpty(),desc:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/admin/getoneOportunity/".concat(a)).then((function(a){console.log(a.data.data),e.setState({title:a.data.data.title,desc:a.data.data.desc,image:a.data.data.image})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/explore/Trupee/opportunity",tag:"a"},"Opportunity List"),i.a.createElement(p.a,{active:!0},"Edit Opportunity"))))),i.a.createElement(h.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Opportunity")),i.a.createElement(d.a,null,i.a.createElement(C.b,{render:function(e){var a=e.history;return i.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/explore/Trupee/opportunity")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Title"),i.a.createElement(y.a,{required:!0,type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Image"),i.a.createElement(y.a,{type:"file",name:"image",onChange:this.onChangeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Descripition"),i.a.createElement(k.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(c.Component))},809:function(e,a,t){}}]);
//# sourceMappingURL=184.46739ec0.chunk.js.map