(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[125],{2344:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(52),s=t(14),r=t(15),i=t(17),l=t(16),c=t(1),o=t.n(c),d=t(1148),u=t(1149),f=t(1146),m=t(1147),p=t(1150),b=t(173),h=t(1153),g=t(804),v=t(803),y=t(800),O=t(170),E=(t(802),t(57)),j=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.state={title:"",image:"",selectedName:"",selectedFile:null,userMobile:"",desc:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;O.a.get("/admin/getoneFeedback/".concat(a)).then((function(a){console.log(a.data.data),e.setState({title:a.data.data.title,desc:a.data.data.desc,image:a.data.data.image,userMobile:a.data.data.userid.mobile})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(f.a,{listTag:"div"},o.a.createElement(m.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(m.a,{href:"/app/explore/Trupee/opportunity",tag:"a"},"View Feedback"),o.a.createElement(m.a,{active:!0},"View Feedback"))))),o.a.createElement(p.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Feedback")),o.a.createElement(u.a,null,o.a.createElement(E.b,{render:function(e){var a=e.history;return o.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/feedback/FeedBackList")}},"Back")}}))),o.a.createElement(h.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(d.a,null,o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Title"),o.a.createElement(y.a,{required:!0,type:"text",disabled:!0,name:"title",value:this.state.title,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Mobile"),o.a.createElement(y.a,{required:!0,type:"text",disabled:!0,name:"userMobile",value:this.state.userMobile,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Description"),o.a.createElement(y.a,{required:!0,type:"textarea",disabled:!0,name:"desc",value:this.state.desc,onChange:this.changeHandler})))))))}}]),t}(c.Component)},800:function(e,a,t){"use strict";var n=t(6),s=t(10),r=t(12),i=t(13),l=t(1),c=t.n(l),o=t(2),d=t.n(o),u=t(5),f=t.n(u),m=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,o=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),O=d||("select"===r||"textarea"===r?r:"input"),E="form-control";b?(E+="-plaintext",O=d||"input"):"file"===r?E+="-file":"range"===r?E+="-range":v&&(E=u?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var j=Object(m.mapToCssModules)(f()(a,o&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,E),t);return("input"===O||d&&"function"===typeof d)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(m.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(O,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":o}))},a}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},803:function(e,a,t){"use strict";var n=t(6),s=t(10),r=t(1),i=t.n(r),l=t(2),c=t.n(l),o=t(5),d=t.n(o),u=t(4),f=["className","cssModule","hidden","widths","tag","check","size","for"],m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,c=e.tag,o=e.check,m=e.size,p=e.for,b=Object(s.a)(e,f),h=[];l.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,i=!n;if(Object(u.isObject)(s)){var l,c=i?"-":"-"+a+"-";r=g(i,a,s.size),h.push(Object(u.mapToCssModules)(d()(((l={})[r]=s.size||""===s.size,l["order"+c+s.order]=s.order||0===s.order,l["offset"+c+s.offset]=s.offset||0===s.offset,l))),t)}else r=g(i,a,s),h.push(r)}}));var v=Object(u.mapToCssModules)(d()(a,!!r&&"sr-only",!!o&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),t);return i.a.createElement(c,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},804:function(e,a,t){"use strict";var n=t(6),s=t(10),r=t(12),i=t(13),l=t(1),c=t.n(l),o=t(2),d=t.n(o),u=t(5),f=t.n(u),m=t(4),p=["className","cssModule","inline","tag","innerRef"],b={children:d.a.node,inline:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,o=Object(s.a)(e,p),d=Object(m.mapToCssModules)(f()(a,!!r&&"form-inline"),t);return c.a.createElement(i,Object(n.a)({},o,{ref:l,className:d}))},a}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=125.75cd604a.chunk.js.map