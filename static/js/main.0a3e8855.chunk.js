(this["webpackJsonpnote-taking"]=this["webpackJsonpnote-taking"]||[]).push([[0],{17:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(4),i=n.n(a),r=(n(17),n(3)),s=n(10),u=n(1),j=function(t){var e=t.addNote,n=Object(c.useState)(""),o=Object(s.a)(n,2),a=o[0],i=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter Note",name:"note",value:a,onChange:function(t){i(t.target.value)}}),Object(u.jsx)("button",{onClick:function(){e(a),i("")},children:"Add Note \u2795 "})]})};n(23);var d=function(){var t=Object(r.c)((function(t){return t.notes})),e=Object(r.b)();return Object(u.jsxs)("div",{className:"App",children:["Note Taking App",Object(u.jsx)(j,{addNote:function(t){e(function(t){return{type:"ADD_NOTE",payload:t}}(t))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("ul",{className:"listStyle",children:t.map((function(t){return Object(u.jsx)("li",{children:t},t)}))})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))},b=n(12),O=n(11),h=n(9),p={notes:[]},f=Object(b.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_NOTE":return Object(h.a)(Object(h.a)({},t),{},{notes:[].concat(Object(O.a)(t.notes),[e.payload])});default:return t}}));i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(r.a,{store:f,children:Object(u.jsx)(d,{})})}),document.getElementById("root")),l()}},[[24,1,2]]]);
//# sourceMappingURL=main.0a3e8855.chunk.js.map