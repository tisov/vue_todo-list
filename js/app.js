(function(t){function e(e){for(var n,d,s=e[0],a=e[1],l=e[2],c=0,p=[];c<s.length;c++)d=s[c],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&p.push(i[d][0]),i[d]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var a=o[s];0!==i[a]&&(n=!1)}n&&(r.splice(e--,1),t=d(d.s=o[0]))}return t}var n={},i={app:0},r=[];function d(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=t,d.c=n,d.d=function(t,e,o){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)d.d(o,n,function(e){return t[e]}.bind(null,n));return o},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=a;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"22f0":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("todo-list",{attrs:{todos:t.todos,"max-width":420},on:{todoComplete:t.todoComplete,delTodo:t.delTodo}})],1)},r=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"todo",staticClass:"todo"},[o("h2",{staticClass:"todo-head"},[t._v("Todos")]),o("ul",{staticClass:"todo-list"},t._l(t.todos,(function(e){return o("li",{key:e.id,staticClass:"todo-item",class:{done:e.done}},[o("label",[o("div",{staticClass:"checkbox"},[o("input",{attrs:{type:"checkbox"},domProps:{checked:e.done},on:{change:function(o){return t.todoDone(e.id)}}}),o("span",{staticClass:"markcheck"})])]),t._v(" "+t._s(e.title)+" "),o("span",{staticClass:"todo-del",on:{click:function(o){return t.$emit("delTodo",e.id)}}})])})),0),o("div",{staticClass:"todo-footer"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Type new todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Add Todo")])])])])},s=[],a={props:{todos:[Array],maxWidth:{type:[Number],default:400}},data:()=>({title:""}),methods:{todoDone(t){this.$emit("todoComplete",t)},addTodo(){if(""===this.title)return;const t={id:Math.random(),title:this.title,done:!1};this.todos.push(t),this.title=""}},mounted(){this.$refs.todo.style.maxWidth=`${this.maxWidth}px`}},l=a,u=(o("82f1"),o("2877")),c=Object(u["a"])(l,d,s,!1,null,null,null),p=c.exports,f={name:"app",data:()=>({todos:[{id:1,title:"Todo item 1",done:!1},{id:2,title:"Todo item 2",done:!0},{id:3,title:"Todo item 3",done:!1}]}),methods:{todoComplete(t){this.todos.find(e=>e.id===t?e.done=!e.done:"")},delTodo(t){this.todos=this.todos.filter(e=>e.id!==t)}},components:{TodoList:p}},h=f,m=(o("cf25"),Object(u["a"])(h,i,r,!1,null,null,null)),v=m.exports;n["a"].config.productionTip=!1,n["a"].config.devtools=!0,new n["a"]({render:t=>t(v)}).$mount("#app")},"82f1":function(t,e,o){"use strict";var n=o("22f0"),i=o.n(n);i.a},cf25:function(t,e,o){"use strict";var n=o("fea6"),i=o.n(n);i.a},fea6:function(t,e,o){}});