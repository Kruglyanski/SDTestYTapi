(this.webpackJsonpsibdev=this.webpackJsonpsibdev||[]).push([[0],{254:function(e){e.exports=JSON.parse('{"users":[{"id":1,"email":"1@1.ru","password":"123"},{"id":2,"email":"2@2.ru","password":"123"}]}')},276:function(e,t,n){},277:function(e,t,n){},284:function(e,t,n){},288:function(e,t){},290:function(e,t){},326:function(e,t){},327:function(e,t){},384:function(e,t,n){},402:function(e,t,n){},474:function(e,t,n){},475:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(27),i=n.n(a),s=(n(276),n(277),n(278),n(24)),l=n(118),u=n(25),o=n(488),j=n(5),d=function(){var e=Object(s.c)((function(e){return e.auth.isAlertShow})),t=Object(s.c)((function(e){return e.auth.error}));return Object(j.jsx)(j.Fragment,{children:e?Object(j.jsx)(o.a,{message:t,type:"error"}):null})},b=n(477),O=n(478),h=n(486),f=(n(284),n(67)),p=n(23),x=n(41),m=n.n(x),v=n(63),y=n(68),g=n(142),T=n(254),S=Object(y.b)("authReducer/authLogin ",function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,c,a,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.next=3,T;case 3:return c=e.sent,a=c.users.find((function(e){return e.email===n&&e.password===r})).id,i=g.sign({userId:1},"jwtSecret"),localStorage.setItem("userData",JSON.stringify({userId:a,token:i})),e.abrupt("return",{id:a,token:i});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(y.c)({name:"authReducer",initialState:{token:null,userId:null,isAlertShow:!1,error:null,isAuthenticated:!1,form:{email:"",password:""}},reducers:{formChange:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{form:Object(p.a)(Object(p.a)({},e.form),t.payload)})},setIsAuthenticated:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{isAuthenticated:t.payload})},authLogout:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{token:null,userId:null,isAuthenticated:!1})}},extraReducers:function(e){e.addCase(S.fulfilled,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{token:t.payload.token,userId:t.payload.id,error:t.payload.error,isAuthenticated:!!t.payload.token,isAlertShow:!1})})).addCase(S.rejected,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{error:"\u0412\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",isAlertShow:!0})}))}}),I=C.actions,w=I.authLogout,k=I.formChange,F=I.setIsAuthenticated,Q=C.reducer,N=b.a.Header,R=b.a.Content,V=function(e){var t=Object(u.h)(),n=Object(s.b)();return Object(j.jsxs)(b.a,{className:"layout",children:[Object(j.jsx)(N,{children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(f.a,{span:2,children:Object(j.jsx)("div",{className:"logo"})}),Object(j.jsx)(f.a,{span:20,children:Object(j.jsxs)(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:"/search",selectedKeys:t.pathname,children:[Object(j.jsx)(h.a.Item,{children:Object(j.jsx)(l.b,{to:"/search",children:"\u041f\u043e\u0438\u0441\u043a"})},"/search"),Object(j.jsx)(h.a.Item,{children:Object(j.jsx)(l.b,{to:"/favorites",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})},"/favorites")]})}),Object(j.jsx)(f.a,{span:2,children:Object(j.jsx)("div",{className:"logout",children:Object(j.jsx)("a",{href:"/",onClick:function(){localStorage.removeItem("userData"),n(w())},children:"\u0412\u044b\u0439\u0442\u0438"})})})]})}),Object(j.jsx)(R,{style:{padding:"0 50px"},children:e.children})]})},z=n(484),A=(n(384),n(158)),B=n(188),L=n.n(B),q=function(e){return L.a.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=".concat(e,"&type=video&key=AIzaSyDYHTm0YMsvO258SlFP22RFzF-WbAVR1Fo")).then((function(e){return e.data}))},D=function(e,t,n){return L.a.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=".concat(n,"&maxResults=").concat(e,"&type=video&videoType=").concat(t,"&key=AIzaSyDYHTm0YMsvO258SlFP22RFzF-WbAVR1Fo")).then((function(e){return e.data}))},J=Object(y.b)("videoReducer/loadVideos",function(){var e=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=Object(y.b)("videoReducer/loadSavedVideos",function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.max,r=t.sort,c=t.currentQuery,e.next=3,D(n,r,c);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(y.c)({name:"videosReducer",initialState:{items:null,value:"",totalResults:null,isFetched:!1,favorites:[],current:{id:null,currentQuery:"",currentTitle:"",max:25,sort:"any"},queries:[],modalVisible:!1,editedId:null},reducers:{setSearchValue:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{value:t.payload})},setCurrent:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{current:Object(p.a)(Object(p.a)({},e.current),t.payload)})},addQuery:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{favorites:[].concat(Object(A.a)(e.favorites),[t.payload])})},addLocalStorageQueries:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{favorites:[].concat(Object(A.a)(e.favorites),Object(A.a)(t.payload))})},filterFavorites:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{favorites:t.payload})},setModalVisible:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{modalVisible:t.payload})},setEditedId:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{editedId:t.payload})}},extraReducers:function(e){e.addCase(J.fulfilled,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{items:t.payload.items,totalResults:t.payload.pageInfo.totalResults,isFetched:!0})})).addCase(M.fulfilled,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{items:t.payload.items,totalResults:t.payload.pageInfo.totalResults,isFetched:!0})}))}}),P=E.actions,Y=P.setSearchValue,H=P.addQuery,W=P.setCurrent,K=P.addLocalStorageQueries,G=P.setModalVisible,U=P.filterFavorites,X=P.setEditedId,Z=E.reducer,$=n(98),_=n(479),ee=(n(402),n(482)),te={ellipsis:!1,outerCol:24,innerColFirst:6,innerColSecond:18},ne={ellipsis:!0,outerCol:6,innerColFirst:24,innerColSecond:24},re=function(e){var t=e.title,n=e.description,r=e.channelTitle,c=e.img,a=e.isDirectionVertical?ne:te,i=a.ellipsis,s=a.outerCol,l=a.innerColFirst,u=a.innerColSecond;return Object(j.jsx)(_.a,{span:s,style:{marginTop:20,width:"22%",paddingLeft:10,paddingRight:10},children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(_.a,{span:l,children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:t,src:c,style:{width:320}})})}),Object(j.jsx)(_.a,{span:u,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(ee.a.Text,{style:{fontSize:18,width:320},ellipsis:i,children:t})}),Object(j.jsx)("div",{children:Object(j.jsx)(ee.a.Text,{style:{fontSize:14,width:320,color:"gray"},ellipsis:i,children:n})}),Object(j.jsx)("div",{children:Object(j.jsx)(ee.a.Text,{style:{fontSize:14,width:320,color:"gray"},ellipsis:i,children:r})})]})})]})})},ce=n(489),ae=n(490),ie=function(e){var t=e.query,n=Object(s.c)((function(e){return e.videos.items})),c=Object(s.c)((function(e){return e.videos.totalResults})),a=Object(s.c)((function(e){return e.videos.isFetched})),i=Object(r.useState)(!1),l=Object($.a)(i,2),u=l[0],o=l[1],d=function(e){console.log("e",e.currentTarget.title),"vertical"===e.currentTarget.title&&o(!0),"horizontal"===e.currentTarget.title&&o(!1)};return Object(j.jsx)(j.Fragment,{children:n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(O.a,{style:{marginTop:20},children:[Object(j.jsx)(_.a,{span:22,children:a&&Object(j.jsxs)("h2",{children:['\u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "',t||Object(j.jsx)("i",{children:"\u043f\u0443\u0441\u0442\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"}),'" ',Object(j.jsx)("span",{style:{color:"gray"},children:c})]})}),Object(j.jsx)(_.a,{span:1,style:{fontSize:30},children:Object(j.jsx)(ce.a,{title:"horizontal",onClick:d,className:u&&"activeDirectionIcon"})}),Object(j.jsx)(_.a,{span:1,style:{fontSize:30},children:Object(j.jsx)(ae.a,{title:"vertical",onClick:d,className:!u&&"activeDirectionIcon"})})]}),Object(j.jsx)(O.a,{style:{paddingTop:30},justify:"space-between",children:n.map((function(e){return Object(j.jsx)(re,{title:e.snippet.title,description:e.snippet.description,channelTitle:e.snippet.channelTitle,img:e.snippet.thumbnails.medium.url,isDirectionVertical:u},e.id.videoId)}))})]}):null})},se=n(491),le=n(485),ue=n(80),oe=n(480),je=n(121),de=n(81),be=n(259),Oe=n(260),he=n(271),fe=n(267),pe=n(483),xe=n(487),me=function(e){Object(he.a)(n,e);var t=Object(fe.a)(n);function n(){var e;Object(be.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={inputValue:25},e.onChange=function(t){e.setState({inputValue:t}),e.props.setMax(t)},e}return Object(Oe.a)(n,[{key:"render",value:function(){var e=this.state.inputValue;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{style:{fontSize:18,color:"#ccc"},children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(j.jsxs)(O.a,{children:[Object(j.jsx)(_.a,{span:19,children:Object(j.jsx)(pe.a,{min:1,max:50,onChange:this.onChange,value:"number"===typeof e?e:0,style:{marginLeft:"0",marginTop:"5"}})}),Object(j.jsx)(_.a,{span:4,children:Object(j.jsx)(xe.a,{min:1,max:50,value:e,style:{width:100},onChange:this.onChange})})]})]})}}]),n}(c.a.Component),ve=function(e){var t=e.saveButtonTitle,n=e.cancelButtonTitle,c=(e.searchQuery,Object(s.c)((function(e){return e.videos.favorites}))),a=Object(s.c)((function(e){return e.videos.current})),i=Object(s.c)((function(e){return e.videos.editedId})),l=Object(s.b)(),u=Object(r.useState)(null),o=Object($.a)(u,2),d=o[0],b=o[1];Object(r.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify({favorites:c}))}),[c]),Object(r.useEffect)((function(){b(c.find((function(e){return e.id==i})))}),[i]);var h=function(e){var t;l(W((t={},Object(ue.a)(t,e.target.name,e.target.value),Object(ue.a)(t,"id",Math.random()),t)))},f=d||a;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(oe.a,{labelCol:{span:8},wrapperCol:{span:24},layout:"vertical",initialValues:{requiredMark:!0},children:[Object(j.jsx)(oe.a.Item,{style:{color:"black"},label:"\u0417\u0430\u043f\u0440\u043e\u0441",children:Object(j.jsx)(z.a,{value:f.currentQuery,name:"currentQuery",onChange:h,placeholder:f.currentQuery})}),Object(j.jsx)(oe.a.Item,{required:!0,name:"title",rules:[{message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}],label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",children:Object(j.jsx)(z.a,{value:f.currentTitle,name:"currentTitle",onChange:h,placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})}),Object(j.jsx)(oe.a.Item,{label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e",children:Object(j.jsxs)(je.a,{value:f.sort,onChange:function(e){l(W({sort:e}))},children:[Object(j.jsx)(je.a.Option,{value:"any",children:"\u0411\u0435\u0437 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(j.jsx)(je.a.Option,{value:"episode",children:"\u042d\u043f\u0438\u0437\u043e\u0434\u044b"}),Object(j.jsx)(je.a.Option,{value:"movie",children:"\u0424\u0438\u043b\u044c\u043c\u044b"})]})}),Object(j.jsx)(me,{setMax:function(e){l(W({max:e}))}}),Object(j.jsx)(oe.a.Item,{children:Object(j.jsxs)(O.a,{style:{marginTop:20},children:[Object(j.jsx)(_.a,{span:12,push:12,children:Object(j.jsx)(de.a,{type:"default",htmlType:"submit",onClick:function(){l(W({currentTitle:""})),l(G(!1))},children:n})}),Object(j.jsx)(_.a,{span:12,push:7,children:Object(j.jsx)(de.a,{type:"primary",disabled:!f.currentQuery.length,htmlType:"submit",onClick:function(){var e=c.filter((function(e){return e.id!=i}));l(U(e)),l(H(a)),localStorage.setItem("favorites",JSON.stringify({favorites:c})),l(W({currentTitle:""})),l(G(!1))},children:t})})]})})]})})},ye=function(e){var t=e.saveButtonTitle,n=e.cancelButtonTitle,r=e.modalTitle,c=e.searchQuery,a=Object(s.c)((function(e){return e.videos.modalVisible}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(le.a,{footer:null,title:r,visible:a,onOk:console.log("ok"),closable:!1,children:Object(j.jsx)(ve,{saveButtonTitle:t,cancelButtonTitle:n,searchQuery:c})})})},ge=z.a.Search,Te=function(){var e=Object(s.c)((function(e){return e.videos.isFetched})),t=(Object(s.c)((function(e){return e.videos.items})),Object(s.c)((function(e){return e.videos.value}))),n=Object(s.c)((function(e){return e.videos.current})),r=Object(s.c)((function(e){return e.auth.userId})),c=Object(s.b)(),a=function(){var e=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(J(t));case 2:c(W({currentQuery:t,userId:r})),c(Y(""));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(e){c(Y(e.currentTarget.value))},l=e?Object(j.jsx)(se.a,{onClick:function(){return c(G(!0))}}):Object(j.jsx)("span",{});return Object(j.jsx)(j.Fragment,{children:e?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("div",{className:"searchTitle",children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(j.jsx)(ge,{placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?",enterButton:"\u041d\u0430\u0439\u0442\u0438",value:t,onChange:i,size:"large",onSearch:a,suffix:l})]}),Object(j.jsx)(ie,{query:n.currentQuery}),Object(j.jsx)(ye,{saveButtonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",cancelButtonTitle:"\u041d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c",modalTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",searchQuery:n.currentQuery})]}):Object(j.jsx)("div",{className:"searchContainer",children:Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("div",{className:"searchTitle",children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(j.jsx)(ge,{placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?",enterButton:"\u041d\u0430\u0439\u0442\u0438",size:"large",onChange:i,onSearch:a,value:t})]})})})},Se=n(481),Ce=n(492),Ie=n(493),we=n(494),ke=function(){var e=Object(s.c)((function(e){return e.videos.favorites})),t=Object(s.b)(),n=Object(r.useState)(""),c=Object($.a)(n,2),a=c[0],i=c[1],l=Object(u.g)(),o=function(){var n=Object(v.a)(m.a.mark((function n(r){var c,a,i,s;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l.push("/search"),c=e.find((function(e){return e.id==r.currentTarget.id})),a=c.max,i=c.sort,s=c.currentQuery,n.next=4,t(M({max:a,sort:i,currentQuery:s}));case 4:t(W({currentQuery:s})),l.push("/search");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(n){t(G(!0)),i(e.find((function(e){return e.id==n.currentTarget.id})).currentQuery),t(X(n.currentTarget.id))},b=function(n){var r=e.filter((function(e){return e.id!=n.currentTarget.id}));t(U(r))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"searchTitle",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(j.jsx)(Se.b,{size:"small",header:null,footer:null,dataSource:e,renderItem:function(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)(Se.b.Item,{children:Object(j.jsxs)(O.a,{style:{fontSize:18,width:"100%"},children:[Object(j.jsx)(_.a,{span:18,children:Object(j.jsx)("p",{style:{margin:0},children:t.currentTitle})}),Object(j.jsx)(_.a,{span:1,children:Object(j.jsx)(Ce.a,{id:t.id,onClick:o})}),Object(j.jsx)(_.a,{span:1,children:Object(j.jsx)(Ie.a,{id:t.id,onClick:d})}),Object(j.jsx)(_.a,{span:1,children:Object(j.jsx)(we.a,{id:t.id,onClick:b})})]})}),e.length>1&&Object(j.jsx)("hr",{})]})}}),Object(j.jsx)(ye,{saveButtonTitle:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",cancelButtonTitle:"\u041d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c",modalTitle:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",searchQuery:a})]})},Fe=(n(474),n(270)),Qe=function(){Fe.b.info("L: 1@1.ru, P: 123")},Ne=function(){return Object(j.jsx)(de.a,{type:"primary",onClick:Qe,children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430"})},Re=function(){var e=Object(s.c)((function(e){return e.auth.form})),t=Object(s.b)(),n=JSON.parse(localStorage.getItem("userData")),c=JSON.parse(localStorage.getItem("favorites"));Object(r.useEffect)((function(){n&&t(F(g.verify(n.token,"jwtSecret")))}),[]),Object(r.useEffect)((function(){c&&t(K(c.favorites))}),[]);var a=function(e){t(k(Object(ue.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Ne,{style:{marginLeft:"auto",marginRight:"auto"}}),Object(j.jsx)("div",{className:"formWrap",children:Object(j.jsxs)(oe.a,{name:"basic",initialValues:{remember:!0},children:[Object(j.jsx)("div",{className:"authLogo"}),Object(j.jsx)("div",{className:"authTitle",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)(oe.a.Item,{label:"\u041b\u043e\u0433\u0438\u043d",name:"username",rules:[{message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",required:!0}],children:Object(j.jsx)(z.a,{value:e.email,name:"email",onChange:a})}),Object(j.jsx)(oe.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0}],children:Object(j.jsx)(z.a.Password,{value:e.password,name:"password",onChange:a})}),Object(j.jsx)(oe.a.Item,{children:Object(j.jsx)(de.a,{type:"primary",htmlType:"submit",onClick:function(){t(S(e))},children:"\u0412\u043e\u0439\u0442\u0438"})})]})})]})};var Ve=function(){var e=Object(s.c)((function(e){return e.auth.isAuthenticated}));return Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{className:"App",children:e?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{path:"/search",exact:!0,children:Object(j.jsx)(V,{children:Object(j.jsx)(Te,{})})}),Object(j.jsx)(u.b,{path:"/favorites",exact:!0,children:Object(j.jsx)(V,{children:Object(j.jsx)(ke,{})})}),Object(j.jsx)(u.a,{to:"/search"})]})]}):Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{path:"/",exact:!0,children:Object(j.jsx)(Re,{})}),Object(j.jsx)(u.a,{to:"/"})]})})})},ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,495)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},Ae=n(55),Be=Object(Ae.c)({videos:Z,auth:Q}),Le=Object(y.a)({reducer:Be});i.a.render(Object(j.jsx)(s.a,{store:Le,children:Object(j.jsx)(Ve,{})}),document.getElementById("root")),ze()}},[[475,1,2]]]);
//# sourceMappingURL=main.c345f2a3.chunk.js.map