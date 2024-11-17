"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[839],{2839:(e,a,t)=>{t.d(a,{offchainLookup:()=>g,offchainLookupSignature:()=>y});var r=t(7299),s=t(2582),n=t(116),o=t(9567);class c extends n.C{constructor(e){let{callbackSelector:a,cause:t,data:r,extraData:s,sender:n,urls:c}=e;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",c&&["  Gateway URL(s):",...c.map((e=>`    ${(0,o.ID)(e)}`))],`  Sender: ${n}`,`  Data: ${r}`,`  Callback selector: ${a}`,`  Extra data: ${s}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class l extends n.C{constructor(e){let{result:a,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.ID)(t)}`,`Response: ${(0,s.A)(a)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class d extends n.C{constructor(e){let{sender:a,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${a}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=t(5572),i=t(5323),f=t(7862),h=t(9309),p=t(9356);var b=t(650),w=t(1081);const y="0x556f1830",m={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,a){let{blockNumber:t,blockTag:n,data:o,to:y}=a;const{args:g}=(0,i.W)({data:o,abi:[m]}),[k,C,O,x,L]=g;try{if(!function(e,a){if(!(0,p.P)(e))throw new h.M({address:e});if(!(0,p.P)(a))throw new h.M({address:a});return e.toLowerCase()===a.toLowerCase()}(y,k))throw new d({sender:k,to:y});const a=await async function(e){let{data:a,sender:t,urls:r}=e,n=new Error("An unknown error occurred.");for(let c=0;c<r.length;c++){const e=r[c],d=e.includes("{data}")?"GET":"POST",i="POST"===d?{data:a,sender:t}:void 0;try{const r=await fetch(e.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(i),method:d});let o;if(o=r.headers.get("Content-Type")?.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){n=new u.Ci({body:i,details:o?.error?(0,s.A)(o.error):r.statusText,headers:r.headers,status:r.status,url:e});continue}if(!(0,w.q)(o)){n=new l({result:o,url:e});continue}return o}catch(o){n=new u.Ci({body:i,details:o.message,url:e})}}throw n}({data:O,sender:k,urls:C}),{data:o}=await(0,r.T)(e,{blockNumber:t,blockTag:n,data:(0,b.xW)([x,(0,f.h)([{type:"bytes"},{type:"bytes"}],[a,L])]),to:y});return o}catch(M){throw new c({callbackSelector:x,cause:M,data:o,extraData:L,sender:k,urls:C})}}}}]);
//# sourceMappingURL=839.c60af4c5.chunk.js.map