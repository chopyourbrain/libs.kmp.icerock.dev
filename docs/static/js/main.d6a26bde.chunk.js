(this["webpackJsonpmultiplatform-libraries"]=this["webpackJsonpmultiplatform-libraries"]||[]).push([[0],{74:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a(36),l=a(41),i=a(37),c=a(42),o=a(0),s=a.n(o),u=a(66),m=a(147),d=a(150),f=a(149),p=a(151),g=a(32),h=a(12),v=a(146),E=a(67),b=a(145),y=a(8),k=a(48),x=a(29),C=a(47),j=a(49),w=a(46),O=a(64),W=a.n(O);function T(){return s.a.createElement(h.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",s.a.createElement(b.a,{color:"inherit",href:"https://icerock.dev/"},"IceRock Development")," ",(new Date).getFullYear(),".")}var N=Object(v.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function S(){return s.a.createElement(u.a,{variant:"contained",color:"primary",style:{margin:"0 16px",width:"fit-content",display:"block"},href:"https://github.com/icerockdev/multiplatform-libraries#how-to-add-own-lib",target:"_blank"},"Submit library")}function K(){return s.a.createElement("div",{style:{margin:"0 auto 16px",display:"flex","justify-content":"center","align-items":"center"}},s.a.createElement(w.a,{href:"https://github.com/icerockdev/multiplatform-libraries","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star icerockdev/multiplatform-libraries on GitHub"},"Star"),s.a.createElement(S,null),s.a.createElement(w.a,{href:"https://github.com/icerockdev/multiplatform-libraries/subscription","data-icon":"octicon-eye","data-size":"large","data-show-count":"true","aria-label":"Watch icerockdev/multiplatform-libraries on GitHub"},"Watch"))}function _(e,t,a){return s.a.createElement(m.a,{className:this.props.classes.card},s.a.createElement(f.a,{className:this.props.classes.cardContent},s.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{display:"flex","justify-content":"space-between"}},e.github.name,s.a.createElement(h.a,{variant:"subtitle1"},"\u2605 ",e.github.stars_count)),s.a.createElement(h.a,{style:{margin:"8px 0"}},e.github.description),s.a.createElement(h.a,null,"Category: ",e.category),s.a.createElement(h.a,null,"Gradle: ",e.path+":"+t.version),s.a.createElement(h.a,null,"Kotlin: ",t.kotlin),s.a.createElement(h.a,null,"Targets: ",a)),s.a.createElement(d.a,null,s.a.createElement(u.a,{size:"small",color:"primary",href:e.github.html_url,target:"_blank"},"GitHub")))}var G=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={libraries:null,selectedKotlinVersion:null,selectedCategory:null,selectedTarget:null},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data.json").then((function(e){return e.json()})).then((function(t){e.setState({libraries:t})})).catch((function(e){}))}},{key:"render",value:function(){var e,t,a=this,n=this.state.libraries,r=function(e){a.setState(e);var t=a;setTimeout((function(){t.setState(e)}),50)};if(null==n)e=s.a.createElement("div",null),t=s.a.createElement(g.a,{container:!0,spacing:4});else{var l=n.flatMap((function(e){return e.versions})).map((function(e){return e.kotlin})).filter((function(e,t,a){return a.indexOf(e)===t})).sort().sort((function(e,t){return e.includes("-")?1:-1})),i=n.map((function(e){return e.category})).filter((function(e,t,a){return a.indexOf(e)===t})),c=n.flatMap((function(e){return e.versions})).flatMap((function(e){return Object.values(e.targets)})).map((function(e){return e.target})).filter((function(e,t,a){return a.indexOf(e)===t})),o=this.state.selectedCategory,u=this.state.selectedKotlinVersion,m=this.state.selectedTarget,d=n.filter((function(e){return""===o||null==o||e.category===o})).map((function(e){var t={};return Object.assign(t,e),t.versions=e.versions.filter((function(e){return""===u||null==u||e.kotlin===u})).filter((function(e){return null==m||""===m||Object.values(e.targets).map((function(e){return e.target})).includes(m)})),t})).filter((function(e){return e.versions.length>0})),f={minWidth:120};e=s.a.createElement("div",{className:this.props.classes.heroButtons},s.a.createElement(K,null),s.a.createElement(g.a,{container:!0,spacing:2,justify:"center"},s.a.createElement(g.a,{item:!0},s.a.createElement(C.a,{variant:"outlined",style:f},s.a.createElement(j.a,null,"Kotlin"),s.a.createElement(k.a,{id:"kotlin-version-selector",value:this.state.selectedKotlinVersion,onChange:function(e){var t=a.state;t.selectedKotlinVersion=e.target.value,r(t)},labelWidth:120},s.a.createElement(x.a,{value:""},s.a.createElement("em",null,"None")),l.map((function(e){return s.a.createElement(x.a,{value:e},e)}))))),s.a.createElement(g.a,{item:!0},s.a.createElement(C.a,{variant:"outlined",style:f},s.a.createElement(j.a,null,"Category"),s.a.createElement(k.a,{id:"category-version-selector",value:this.state.selectedCategory,onChange:function(e){var t=a.state;t.selectedCategory=e.target.value,r(t)},labelWidth:120},s.a.createElement(x.a,{value:""},s.a.createElement("em",null,"None")),i.map((function(e){return s.a.createElement(x.a,{value:e},e)}))))),s.a.createElement(g.a,{item:!0},s.a.createElement(C.a,{variant:"outlined",style:f},s.a.createElement(j.a,null,"Target"),s.a.createElement(k.a,{id:"target-version-selector",value:this.state.selectedTarget,onChange:function(e){var t=a.state;t.selectedTarget=e.target.value,r(t)},labelWidth:120},s.a.createElement(x.a,{value:""},s.a.createElement("em",null,"None")),c.map((function(e){return s.a.createElement(x.a,{value:e},e)})))))),s.a.createElement(h.a,{style:{margin:"16px auto 0",width:"fit-content"}},"Results: ",d.length));var p=d.sort((function(e,t){return e.github.stars_count===t.github.stars_count?0:e.github.stars_count>t.github.stars_count?-1:1})).map((function(e){var t=e.versions[e.versions.length-1],n=Object.keys(t.targets).map((function(e){var a=t.targets[e];return null!=a.target?a.target:a.platform})).filter((function(e,t,a){return a.indexOf(e)===t})).join(", ");return _.call(a,e,t,n)})),v=window.innerWidth<480;t=s.a.createElement(W.a,{columnWidth:v?"100%":"50%",gutterWidth:16,gutterHeight:16,container:!0},p)}return s.a.createElement("main",null,s.a.createElement("div",{className:this.props.classes.heroContent},s.a.createElement(E.a,{maxWidth:"sm"},s.a.createElement(h.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Kotlin Multiplatform libraries"),s.a.createElement(h.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Here is list of Kotlin Multiplatform libraries with auto-fetch information directly from maven repositories."),e)),s.a.createElement(E.a,{className:this.props.classes.cardGrid,maxWidth:"md"},t))}}]),t}(s.a.Component);y.render(s.a.createElement((function(){var e=N();return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,null),s.a.createElement(G,{classes:e}),s.a.createElement("footer",{className:e.footer},s.a.createElement(T,null)))}),null),document.querySelector("#app"))}},[[74,1,2]]]);
//# sourceMappingURL=main.d6a26bde.chunk.js.map