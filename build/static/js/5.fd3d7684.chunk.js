(this.webpackJsonpburger_builder=this.webpackJsonpburger_builder||[]).push([[5],{105:function(e,r,n){e.exports={Order:"Order_Order__ONkZd"}},109:function(e,r,n){"use strict";n.r(r);var t=n(5),a=n(6),i=n(8),o=n(7),u=n(0),c=n.n(u),s=n(14),d=n(105),p=n.n(d),l=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return c.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return c.a.createElement("div",{className:p.a.Order},c.a.createElement("p",null,"Ingredients: ",t),c.a.createElement("p",null,"Price: ",c.a.createElement("strong",null," ",Number.parseFloat(e.price).toFixed(2)," RUPEES")))},m=n(17),b=n(41),f=n(15),h=n(40),g=function(e){Object(i.a)(n,e);var r=Object(o.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrder(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=c.a.createElement(h.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return c.a.createElement(l,{key:e.id,ingredients:e.ingredients,price:e.price})}))),c.a.createElement("div",null,e)}}]),n}(u.Component);r.default=Object(s.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrder:function(r,n){return e(f.e(r,n))}}}))(Object(b.a)(g,m.a))}}]);
//# sourceMappingURL=5.fd3d7684.chunk.js.map