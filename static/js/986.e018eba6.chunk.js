"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[986],{986:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r=t(5705),i=t(6727),o=t(9434),a=t(3634),u="NOT_FOUND";var c=function(n,e){return n===e};function p(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?c:r,o=t.maxSize,a=void 0===o?1:o,p=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return u}return{get:r,put:function(e,i){r(e)===u&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,s);function f(){var e=l.get(arguments);if(e===u){if(e=n.apply(null,arguments),p){var t=l.getEntries(),r=t.find((function(n){return p(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return f.clearCache=function(){return l.clear()},f}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function l(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var p=u,l=p.memoizeOptions,f=void 0===l?t:l,d=Array.isArray(f)?f:[f],x=s(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=x.length,t=0;t<e;t++)n.push(x[t].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:x,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return i}var f,d,x,h,m,g,v,b,y,j=l(p),w=function(n){return n.contacts.items},Z=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},C=j([w,function(n){return n.filter.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),_=t(168),A=t(7686),F=A.Z.div(f||(f=(0,_.Z)(["\n  display: block;\n  width: 600px;\n  margin-top: 20px;\n  padding: 15px;\n\n  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,\n    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;\n\n  input {\n    padding: 10px;\n  }\n"]))),z=A.Z.label(d||(d=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding-bottom: 15px;\n  font-weight: 600;\n"]))),E=A.Z.button(x||(x=(0,_.Z)(["\n  display: block;\n\n  padding: 10px;\n  border: none;\n\n  color: #fff;\n\n  background-color: #7e57c2;\n  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\n  cursor: pointer;\n"]))),N=t(184),q={name:"",number:""},I=i.Ry().shape({name:i.Z_().min(2).max(70).required(),number:i.Rx().positive().integer().required()}),L=function(){var n=(0,o.v9)(w),e=(0,o.I0)();return(0,N.jsx)(F,{children:(0,N.jsx)(r.J9,{initialValues:q,validationSchema:I,onSubmit:function(t,r){var i=t.name,o=t.number;0!==n.length&&n.some((function(n){return n.name.toLowerCase()===i.toLowerCase()}))?alert("".concat(i," is already in contacts.")):(e((0,a.uK)({name:i,number:o})),r.resetForm())},children:(0,N.jsxs)(r.l0,{children:[(0,N.jsxs)(z,{children:[(0,N.jsx)("span",{children:"Name:"}),(0,N.jsx)(r.gN,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,N.jsx)(r.Bc,{name:"name",component:"div"})]}),(0,N.jsxs)(z,{children:[(0,N.jsx)("span",{children:"Number:"}),(0,N.jsx)(r.gN,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,N.jsx)(r.Bc,{name:"number",component:"div"})]}),(0,N.jsx)(E,{type:"submit",children:"Add contact"})]})})})},R=t(4808),O=A.Z.label(h||(h=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n\n  input {\n    padding: 10px;\n  }\n"]))),S=A.Z.span(m||(m=(0,_.Z)(["\n  font-size: 24px;\n"]))),B=function(){var n=(0,o.I0)();return(0,N.jsxs)(O,{children:[(0,N.jsx)(S,{children:"Find contacts by name"}),(0,N.jsx)("input",{type:"text",name:"filter",onChange:function(e){var t=e.currentTarget.value;n((0,R.M)(t))}})]})},D=A.Z.ul(g||(g=(0,_.Z)(["\n  padding: 0;\n  font-size: 25px;\n"]))),J=A.Z.li(v||(v=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 600px;\n  margin-top: 20px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,\n    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;\n"]))),K=A.Z.span(b||(b=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n"]))),M=A.Z.button(y||(y=(0,_.Z)(["\n  display: block;\n\n  padding: 10px;\n  border: none;\n\n  color: #fff;\n\n  background-color: #7e57c2;\n  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\n  cursor: pointer;\n"]))),P=function(){var n=(0,o.I0)(),e=(0,o.v9)(C);return(0,N.jsx)(D,{children:e.map((function(e){var t=e.name,r=e.number,i=e.id;return(0,N.jsxs)(J,{children:[(0,N.jsxs)(K,{children:[t,": ",r]}),(0,N.jsx)(M,{type:"text",onClick:function(){return function(e){return n((0,a.GK)(e))}(i)},children:"Delete"})]},i)}))})},T=t(2791),W=t(8627),G=t(6353);function U(){var n=(0,o.v9)(w),e=(0,o.I0)(),t=(0,o.v9)(Z),r=(0,o.v9)(k),i=(0,W.a)().isLoggedIn;return(0,T.useEffect)((function(){e((0,a.yF)())}),[e]),(0,N.jsxs)(G.W,{children:[(0,N.jsx)("h1",{children:"Phonebook"}),(0,N.jsx)(L,{}),t&&!r&&(0,N.jsx)("b",{children:"Request in progress..."}),0!==n.length&&i&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("h2",{children:"Contacts"}),(0,N.jsx)(B,{}),(0,N.jsx)(P,{})]})]})}},6353:function(n,e,t){t.d(e,{F:function(){return c},W:function(){return u}});var r,i,o=t(168),a=t(7686),u=a.Z.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 20px;\n"]))),c=a.Z.h1(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n\n  margin-top: 300px;\n  font-size: 80px;\n"])))}}]);
//# sourceMappingURL=986.e018eba6.chunk.js.map