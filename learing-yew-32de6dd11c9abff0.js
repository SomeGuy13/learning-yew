let S=0,T=`string`,O=1,V=`Object`,Q=`utf-8`,N=null,P=`undefined`,X=4,U=`function`,L=128,K=Array,R=Error,W=FinalizationRegistry,Y=Object,M=undefined;var w=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_ref__he63f9aff93f19765(c,d,v(e))}finally{b[u++]=M}});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==N){return `${a}`};if(b==T){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==N){return `Symbol`}else{return `Symbol(${b})`}};if(b==U){const b=a.name;if(typeof b==T&&b.length>S){return `Function(${b})`}else{return `Function`}};if(K.isArray(a)){const b=a.length;let c=`[`;if(b>S){c+=l(a[S])};for(let d=O;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>O){d=c[O]}else{return toString.call(a)};if(d==V){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return V}};if(a instanceof R){return `${a.name}: ${a.message}\n${a.stack}`};return d});var G=((a,b)=>{});var C=((a,b)=>{a=a>>>S;const c=B();const d=c.subarray(a/X,a/X+ b);const e=[];for(let a=S;a<d.length;a++){e.push(f(d[a]))};return e});var y=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf1a11171dc21370d(b,c,g(d))});var g=(a=>{if(d===b.length)b.push(b.length+ O);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var J=(async(b)=>{if(a!==M)return a;if(typeof b===P){b=new URL(`learing-yew-32de6dd11c9abff0_bg.wasm`,import.meta.url)};const c=F();if(typeof b===T||typeof Request===U&&b instanceof Request||typeof URL===U&&b instanceof URL){b=fetch(b)};G(c);const {instance:d,module:e}=await E(await b,c);return H(d,e)});var I=(b=>{if(a!==M)return a;const c=F();G(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return H(d,b)});var r=(()=>{if(q===N||q.byteLength===S){q=new Int32Array(a.memory.buffer)};return q});var z=(a=>a===M||a===N);var c=(a=>b[a]);var H=((b,c)=>{a=b.exports;J.__wbindgen_wasm_module=c;q=N;A=N;i=N;a.__wbindgen_start();return a});var F=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>S});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/X+ O]=z(d)?S:d;r()[a/X+ S]=!z(d)});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/X+ O]=z(d)?S:d;r()[a/X+ S]=!z(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>S});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/X+ O]=z(d)?S:d;r()[a/X+ S]=!z(d)});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>S});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==O){b.a=S;return !0};const c=!1;return c});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new R();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,O)}});b.wbg.__wbg_queueMicrotask_f61ee94ee663068b=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===U;return b});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=C(b,c).slice();a.__wbindgen_free(b,c*X,X);console.error(...d)});b.wbg.__wbg_body_874ccb42daaab363=(a=>{const b=c(a).body;return z(b)?S:g(b)});b.wbg.__wbg_createElement_03cf347ddad1c8c0=function(){return D(((a,b,d)=>{const e=c(a).createElement(k(b,d));return g(e)}),arguments)};b.wbg.__wbg_createElementNS_93f8de4acdef6da8=function(){return D(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===S?M:k(b,d),k(e,f));return g(h)}),arguments)};b.wbg.__wbg_createTextNode_ea32ad2506f7ae78=((a,b,d)=>{const e=c(a).createTextNode(k(b,d));return g(e)});b.wbg.__wbg_instanceof_Element_813f33306edae612=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_230708ae7f4baac5=((b,d)=>{const e=c(d).namespaceURI;var f=z(e)?S:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_setinnerHTML_95222f1a2e797983=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_outerHTML_eb21059e86b1e9f4=((b,d)=>{const e=c(d).outerHTML;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_removeAttribute_0c021c98a4dc7402=function(){return D(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_setAttribute_f7ffa687ef977957=function(){return D(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_instanceof_Window_cee7a886d55e7df5=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_eb7fd66bde3ee213=(a=>{const b=c(a).document;return z(b)?S:g(b)});b.wbg.__wbg_setchecked_50e21357d62a8ccd=((a,b)=>{c(a).checked=b!==S});b.wbg.__wbg_value_99f5294791d62576=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_setvalue_bba31de32cdbb32c=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_value_ffef403d62e3df58=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_setvalue_cbab536654d8dd52=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_parentNode_e3a5ee563364a613=(a=>{const b=c(a).parentNode;return z(b)?S:g(b)});b.wbg.__wbg_parentElement_45a9756dc74ff48b=(a=>{const b=c(a).parentElement;return z(b)?S:g(b)});b.wbg.__wbg_childNodes_535387effca84f4e=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_lastChild_d22dbf81f92f163b=(a=>{const b=c(a).lastChild;return z(b)?S:g(b)});b.wbg.__wbg_nextSibling_87d2b32dfbf09fe3=(a=>{const b=c(a).nextSibling;return z(b)?S:g(b)});b.wbg.__wbg_setnodeValue_d1cec51282858afe=((a,b,d)=>{c(a).nodeValue=b===S?M:k(b,d)});b.wbg.__wbg_textContent_528ff517a0418a3e=((b,d)=>{const e=c(d).textContent;var f=z(e)?S:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_cloneNode_ea49a704f0699b2e=function(){return D((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_insertBefore_2be91083083caa9e=function(){return D(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_removeChild_660924798c7e128c=function(){return D(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_addEventListener_bc4a7ad4cc72c6bf=function(){return D(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_ef56f954a86c7472=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_dfffc3b2ba786fb8=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_bubbles_31126fc08276cf99=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_ae95595adf5ae83d=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_bd8a0336a042e053=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_get_0ee8ea3c7c984c45=((a,b)=>{const d=c(a)[b>>>S];return g(d)});b.wbg.__wbg_length_161c0d89c6535c1d=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_cfecb3965268594c=((a,b)=>{const c=new Function(k(a,b));return g(c)});b.wbg.__wbg_call_3f093dd26d5569f8=function(){return D(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_632630b5cec17f21=(()=>{const a=new Y();return g(a)});b.wbg.__wbg_self_05040bd9523805b9=function(){return D((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_adc720039f2cb14f=function(){return D((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_622105db80c1457d=function(){return D((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f56b013ed9bcf359=function(){return D((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===M;return b});b.wbg.__wbg_from_58c79ccfb68060f5=(a=>{const b=K.from(c(a));return g(b)});b.wbg.__wbg_is_bd5dc4ae269cba1c=((a,b)=>{const d=Y.is(c(a),c(b));return d});b.wbg.__wbg_resolve_5da6faf2c96fd1d5=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_f9e58f5a50f43eae=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_set_961700853a212a39=function(){return D(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new R(k(a,b))});b.wbg.__wbindgen_closure_wrapper330=((a,b,c)=>{const d=t(a,b,96,w);return g(d)});b.wbg.__wbindgen_closure_wrapper487=((a,b,c)=>{const d=x(a,b,160,y);return g(d)});return b});var E=(async(a,b)=>{if(typeof Response===U&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===U){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var B=(()=>{if(A===N||A.byteLength===S){A=new Uint32Array(a.memory.buffer)};return A});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:O,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=S;s.unregister(f)}}};g.original=f;s.register(g,f,f);return g});var e=(a=>{if(a<132)return;b[a]=d;d=a});var x=((b,c,d,e)=>{const f={a:b,b:c,cnt:O,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=S;try{return e(c,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(c,f.b);s.unregister(f)}else{f.a=c}}};g.original=f;s.register(g,f,f);return g});var p=((a,b,c)=>{if(c===M){const c=n.encode(a);const d=b(c.length,O)>>>S;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,O)>>>S;const f=j();let g=S;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==S){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,O)>>>S;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written;e=c(e,d,g,O)>>>S};m=g;return e});var j=(()=>{if(i===N||i.byteLength===S){i=new Uint8Array(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>S;return h.decode(j().subarray(a,a+ b))});var v=(a=>{if(u==O)throw new R(`out of js stack`);b[--u]=a;return u});let a;const b=new K(L).fill(M);b.push(M,N,!0,!1);let d=b.length;const h=typeof TextDecoder!==P?new TextDecoder(Q,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw R(`TextDecoder not available`)}};if(typeof TextDecoder!==P){h.decode()};let i=N;let m=S;const n=typeof TextEncoder!==P?new TextEncoder(Q):{encode:()=>{throw R(`TextEncoder not available`)}};const o=typeof n.encodeInto===U?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=N;const s=typeof W===P?{register:()=>{},unregister:()=>{}}:new W(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let u=L;let A=N;export default J;export{I as initSync}