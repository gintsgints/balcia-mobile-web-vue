import{l as C,m as a,c as h,r as v,S as z,T as P,U as j,V as x,W as B,X as A,Q as H,b as U,Y as $}from"./index-9c83cfaf.js";import{s as q,w as L,a as k,I as Q,z as X,M as _}from"./VBtn-22fe8a68.js";function Y(e){return{aspectStyles:h(()=>{const o=Number(e.aspectRatio);return o?{paddingBottom:String(1/o*100)+"%"}:void 0})}}const G=C()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...q()},setup(e,o){let{slots:u}=o;const{aspectStyles:s}=Y(e),{dimensionStyles:m}=L(e);return k(()=>{var r;return a("div",{class:"v-responsive",style:m.value},[a("div",{class:"v-responsive__sizer",style:s.value},null),(r=u.additional)==null?void 0:r.call(u),u.default&&a("div",{class:["v-responsive__content",e.contentClass]},[u.default()])])}),{}}}),Z=C()({name:"VImg",directives:{intersect:Q},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...X()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:u,slots:s}=o;const m=v(""),r=v(),l=v(e.eager?"loading":"idle"),d=v(),f=v(),i=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=h(()=>i.value.aspect||d.value/f.value||0);z(()=>e.src,()=>{y(l.value!=="idle")}),z(g,(t,n)=>{!t&&n&&r.value&&S(r.value)}),P(()=>y());function y(t){if(!(e.eager&&t)&&!(j&&!t&&!e.eager)){if(l.value="loading",i.value.lazySrc){const n=new Image;n.src=i.value.lazySrc,S(n,null)}i.value.src&&x(()=>{var n,c;if(u("loadstart",((n=r.value)==null?void 0:n.currentSrc)||i.value.src),(c=r.value)!=null&&c.complete){if(r.value.naturalWidth||R(),l.value==="error")return;g.value||S(r.value,null),b()}else g.value||S(r.value),w()})}}function b(){var t;w(),l.value="loaded",u("load",((t=r.value)==null?void 0:t.currentSrc)||i.value.src)}function R(){var t;l.value="error",u("error",((t=r.value)==null?void 0:t.currentSrc)||i.value.src)}function w(){const t=r.value;t&&(m.value=t.currentSrc||t.src)}let I=-1;function S(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const c=()=>{clearTimeout(I);const{naturalHeight:V,naturalWidth:W}=t;V||W?(d.value=W,f.value=V):!t.complete&&l.value==="loading"&&n!=null?I=window.setTimeout(c,n):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,f.value=1)};c()}const T=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),D=()=>{var c;if(!i.value.src||l.value==="idle")return null;const t=a("img",{class:["v-img__img",T.value],src:i.value.src,srcset:i.value.srcset,alt:"",sizes:e.sizes,ref:r,onLoad:b,onError:R},null),n=(c=s.sources)==null?void 0:c.call(s);return a(_,{transition:e.transition,appear:!0},{default:()=>[B(n?a("picture",{class:"v-img__picture"},[n,t]):t,[[$,l.value==="loaded"]])]})},E=()=>a(_,{transition:e.transition},{default:()=>[i.value.lazySrc&&l.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",T.value],src:i.value.lazySrc,alt:""},null)]}),F=()=>s.placeholder?a(_,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!s.error)&&a("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,M=()=>s.error?a(_,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&a("div",{class:"v-img__error"},[s.error()])]}):null,O=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=v(!1);{const t=z(g,n=>{n&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),t())})}return k(()=>B(a(G,{class:["v-img",{"v-img--booting":!N.value}],style:{width:U(e.width==="auto"?d.value:e.width)},aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(H,null,[a(D,null,null),a(E,null,null),a(O,null,null),a(F,null,null),a(M,null,null)]),default:s.default}),[[A("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:m,image:r,state:l,naturalWidth:d,naturalHeight:f}}});export{Z as V};