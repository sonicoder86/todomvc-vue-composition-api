(function(e){function t(t){for(var l,r,a=t[0],d=t[1],s=t[2],p=0,u=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(e[l]=d[l]);i&&i(t);while(u.length)u.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],l=!0,a=1;a<o.length;a++){var d=o[a];0!==c[d]&&(l=!1)}l&&(n.splice(t--,1),e=r(r.s=o[0]))}return e}var l={},c={app:0},n=[];function r(t){if(l[t])return l[t].exports;var o=l[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=l,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(o,l,function(t){return e[t]}.bind(null,l));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var i=d;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var l=o("830f"),c=o("5c40");const n={id:"app"},r={class:"todoapp"};function a(e,t){const o=Object(c["r"])("Header"),l=Object(c["r"])("List"),a=Object(c["r"])("Footer"),d=Object(c["r"])("CopyRight");return Object(c["p"])(),Object(c["e"])("div",n,[Object(c["j"])("section",r,[Object(c["j"])(o),e.todosLength?Object(c["j"])(l,{key:0}):Object(c["f"])("",!0),e.todosLength?Object(c["j"])(a,{key:0}):Object(c["f"])("",!0)]),Object(c["j"])(d)])}var d=o("2f62");const s={class:"header"},i=Object(c["j"])("h1",null,"todos",-1);function p(e,t){return Object(c["p"])(),Object(c["e"])("header",s,[i,Object(c["j"])("input",{class:"new-todo",placeholder:"What needs to be done?",value:e.name,onInput:t[1]||(t[1]=t=>e.handleChange(t)),onKeyup:t[2]||(t[2]=t=>e.handleSubmit(t))},null,40,["value"])])}var u=o("a1e9");const b="Enter";var m={setup(){const e=Object(d["b"])(),t=Object(u["g"])({name:""}),o=e=>t.name=e.target.value,l=o=>{o.key===b&&(e.dispatch("onCreate",t.name),t.name="")};return{...Object(u["m"])(t),handleChange:o,handleSubmit:l}}};m.render=p;var j=m;const O={class:"main"},f={class:"todo-list"};function h(e,t){const o=Object(c["r"])("Item");return Object(c["p"])(),Object(c["e"])("section",O,[Object(c["j"])("input",{id:"toggle-all",class:"toggle-all",type:"checkbox",checked:e.areAllCompleted,readonly:""},null,8,["checked"]),Object(c["j"])("label",{htmlFor:"toggle-all",onClick:t[1]||(t[1]=t=>e.onCompleteAll(t))}),Object(c["j"])("ul",f,[(Object(c["p"])(!0),Object(c["e"])(c["b"],null,Object(c["q"])(e.visibleTodos,l=>(Object(c["p"])(),Object(c["e"])(o,{key:l.id,todo:l,onRemove:t[2]||(t[2]=t=>e.onRemove(t)),onUpdate:t[3]||(t[3]=t=>e.onUpdate(t))},null,8,["todo"]))),128))])])}var v=o("9ff4");const g={class:"view"};function C(e,t){return Object(c["p"])(),Object(c["e"])("li",{class:{completed:e.todo.completed,editing:e.editing}},[Object(c["j"])("div",g,[Object(c["j"])("input",{class:"toggle",type:"checkbox",checked:e.todo.completed,onChange:t[1]||(t[1]=t=>e.handleCompleted(t))},null,40,["checked"]),Object(c["j"])("label",{onDblclick:t[2]||(t[2]=t=>e.handleEdit(t))},Object(v["E"])(e.todo.name),33),Object(c["j"])("button",{class:"destroy",onClick:t[3]||(t[3]=t=>e.handleRemove(t))})]),e.editing?(Object(c["p"])(),Object(c["e"])("input",{key:0,class:"edit",value:e.name,onInput:t[4]||(t[4]=t=>e.handleChange(t)),onBlur:t[5]||(t[5]=t=>e.handleBlur(t))},null,40,["value"])):Object(c["f"])("",!0)],2)}var y={props:{todo:{type:Object,required:!0}},setup(e,{emit:t}){const o=Object(u["g"])({editing:!1,name:e.todo.name}),l=()=>t("remove",e.todo.id),c=()=>t("update",{id:e.todo.id,completed:!e.todo.completed}),n=()=>o.editing=!0,r=e=>o.name=e.target.value,a=()=>{t("update",{id:e.todo.id,name:o.name}),o.editing=!1};return{...Object(u["m"])(o),handleRemove:l,handleCompleted:c,handleEdit:n,handleChange:r,handleBlur:a}}};y.render=C;var k=y,w={components:{Item:k},setup(){const e=Object(d["b"])(),t=t=>e.dispatch("onRemove",t),o=t=>e.dispatch("onUpdate",t),l=()=>e.dispatch("onCompleteAll");return{visibleTodos:Object(c["d"])(()=>e.getters.visibleTodos),areAllCompleted:Object(c["d"])(()=>e.getters.areAllCompleted),onRemove:t,onUpdate:o,onCompleteAll:l}}};w.render=h;var S=w;const T={class:"footer"},A={class:"todo-count"},L={class:"filters"};function x(e,t){return Object(c["p"])(),Object(c["e"])("footer",T,[Object(c["j"])("span",A,[Object(c["j"])("strong",null,Object(v["E"])(e.itemsLeft),1),Object(c["j"])("span",null,Object(v["E"])(e.itemText)+" left",1)]),Object(c["j"])("ul",L,[(Object(c["p"])(!0),Object(c["e"])(c["b"],null,Object(c["q"])(e.filterTitles,t=>(Object(c["p"])(),Object(c["e"])("li",{key:t.key},[Object(c["j"])("a",{href:"#",class:{selected:t.key===e.filter},onClick:o=>e.onFilterSelect(t.key)},Object(v["E"])(t.value),11,["onClick"])]))),128))]),e.completedCount?(Object(c["p"])(),Object(c["e"])("button",{key:0,class:"clear-completed",onClick:t[1]||(t[1]=t=>e.onClearCompleted(t))},"Clear completed")):Object(c["f"])("",!0)])}const F={all:"all",active:"active",completed:"completed"};var _={setup(){const e=Object(d["b"])(),t=[{key:F.all,value:"All"},{key:F.active,value:"Active"},{key:F.completed,value:"Completed"}],o=()=>e.dispatch("onClearCompleted"),l=t=>e.dispatch("onFilterSelect",t);return{filterTitles:t,filter:Object(c["d"])(()=>e.state.filter),itemsLeft:Object(c["d"])(()=>e.getters.itemsLeft),completedCount:Object(c["d"])(()=>e.getters.completedCount),itemText:Object(c["d"])(()=>1===e.getters.itemsLeft?" item":" items"),onClearCompleted:o,onFilterSelect:l}}};_.render=x;var R=_;const P={class:"info"},E=Object(c["j"])("p",null,"Double-click to edit a todo",-1),I=Object(c["j"])("p",null,[Object(c["i"])("Created by "),Object(c["j"])("a",{href:"http://github.com/blacksonic/"},"blacksonic")],-1),M=Object(c["j"])("p",null,[Object(c["i"])("Part of "),Object(c["j"])("a",{href:"http://todomvc.com"},"TodoMVC")],-1);function U(e,t){return Object(c["p"])(),Object(c["e"])("footer",P,[E,I,M])}const J={};J.render=U;var q=J;const B="todoapp_todos";class D{static loadTodos(){return JSON.parse(window.localStorage.getItem(B)||"[]")}static storeTodos(e){window.localStorage.setItem(B,JSON.stringify(e))}}var H={components:{CopyRight:q,Header:j,List:S,Footer:R},setup(){const e=Object(d["b"])();return Object(c["n"])(()=>{e.dispatch("onLoad",D.loadTodos()),Object(c["x"])(()=>{D.storeTodos(e.state.todos)})}),{todosLength:Object(c["d"])(()=>e.state.todos.length)}}};H.render=a;var N=H;o("1d55");function K(e){return e.filter(e=>e.completed)}function V(e){return e.filter(e=>!e.completed)}function W(e,t){switch(t){case F.all:return[...e];case F.completed:return K(e);case F.active:return V(e);default:return[...e]}}const z={visibleTodos:e=>W(e.todos,e.filter),areAllCompleted:e=>e.todos.length&&e.todos.every(e=>e.completed),itemsLeft:e=>V(e.todos).length,completedCount:e=>K(e.todos).length};var G=o("ec26");const Q={load:"load",create:"create",remove:"remove",update:"update",completeAll:"complete_all",clearCompleted:"clear_completed",selectFilter:"select_filter"},X=e=>e.length&&K(e).length===e.length,Y={[Q.load]:(e,{todos:t})=>e.todos=t,[Q.create]:(e,{name:t})=>e.todos=[...e.todos,{id:Object(G["a"])(),name:t,completed:!1}],[Q.update]:(e,t)=>e.todos=e.todos.map(e=>e.id===t.id?{...e,...t}:e),[Q.remove]:(e,{id:t})=>e.todos=e.todos.filter(e=>e.id!==t),[Q.completeAll]:e=>{e.todos=e.todos.map(t=>({...t,completed:!X(e)}))},[Q.clearCompleted]:e=>e.todos=V(e.todos)},Z={[Q.selectFilter]:(e,{filter:t})=>e.filter=t},$={onLoad:({commit:e},t)=>e(Q.load,{todos:t}),onCreate:({commit:e},t)=>e(Q.create,{name:t}),onRemove:({commit:e},t)=>e(Q.remove,{id:t}),onUpdate:({commit:e},t)=>e(Q.update,t),onCompleteAll:({commit:e})=>e(Q.completeAll),onClearCompleted:({commit:e})=>e(Q.clearCompleted)},ee={onFilterSelect:({commit:e},t)=>e(Q.selectFilter,{filter:t})},te={...Y,...Z},oe={...$,...ee},le=(e={todos:[],filter:F.all})=>new d["a"].Store({state:e,actions:oe,mutations:te,getters:z}),ce=Object(l["a"])(N);ce.use(le()),ce.mount("app-root")}});
//# sourceMappingURL=app.4e7a82af.js.map