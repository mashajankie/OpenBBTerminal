"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5022],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(r),d=a,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(b,o(o({ref:e},p),{},{components:r})):n.createElement(b,o({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39573:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(65099),o=r(85162);const i={title:"qtrcontracts",description:"OpenBB SDK Function"},s="qtrcontracts",u={unversionedId:"reference/stocks/gov/qtrcontracts",id:"reference/stocks/gov/qtrcontracts",title:"qtrcontracts",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/stocks/gov/qtrcontracts.md",sourceDirName:"reference/stocks/gov",slug:"/reference/stocks/gov/qtrcontracts",permalink:"/sdk/reference/stocks/gov/qtrcontracts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/gov/qtrcontracts.md",tags:[],version:"current",frontMatter:{title:"qtrcontracts",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"lobbying",permalink:"/sdk/reference/stocks/gov/lobbying"},next:{title:"topbuys",permalink:"/sdk/reference/stocks/gov/topbuys"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],m={toc:c};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qtrcontracts"},"qtrcontracts"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Analyzes quarterly contracts by ticker"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L482"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.gov.qtrcontracts(analysis: str = "total", limit: int = 5)\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"analysis"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"How to analyze.  Either gives total amount or sorts by high/low momentum."),(0,a.kt)("td",{parentName:"tr",align:null},"total"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number to return, by default 5"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dataframe with tickers and total amount if total selected.")))),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,a.kt)("p",null,"Quarterly contracts ","[Source: quiverquant.com]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L446"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.gov.qtrcontracts_chart(analysis: str = "total", limit: int = 5, raw: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"analysis"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Analysis to perform.  Either 'total', 'upmom' 'downmom'"),(0,a.kt)("td",{parentName:"tr",align:null},"total"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number to show"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to display raw data"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Format to export data"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))))}d.isMDXComponent=!0},85162:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:r,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},e)}},65099:(t,e,r)=>{r.d(e,{Z:()=>d});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),s=r(7094),u=r(12466);const p="tabItem_hGfb";var c=r(16550);function m(t){var e;const{lazy:r,block:o,defaultValue:m,values:d,groupId:b,className:k}=t,g=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??g.map((t=>{let{props:{value:e,label:r,attributes:n}}=t;return{value:e,label:r,attributes:n}})),h=(0,i.l)(f,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(e=g.find((t=>t.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==y&&!f.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),{pathname:x,search:O}=(0,c.TH)(),w=function(t,e){const r=t.substring(1).split("&");for(let n=0;n<r.length;n++){let t=r[n].split("=");if(console.log(decodeURIComponent(t[0]),e),decodeURIComponent(t[0])==e)return decodeURIComponent(t[1])}return null}(O,"tab"),[T,E]=(0,a.useState)(w||y),q=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=b){const t=v[b];null!=t&&t!==T&&f.some((e=>e.value===t))&&E(t)}const B=t=>{const e=t.currentTarget,r=q.indexOf(e),n=f[r].value;n!==T&&(D(e),E(n),null!=b&&N(b,String(n)))},C=t=>{var e;let r=null;switch(t.key){case"Enter":B(t);break;case"ArrowRight":{const e=q.indexOf(t.currentTarget)+1;r=q[e]??q[0];break}case"ArrowLeft":{const e=q.indexOf(t.currentTarget)-1;r=q[e]??q[q.length-1];break}}null==(e=r)||e.focus()};return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},f.map((t=>{let{value:e,label:r,attributes:o}=t;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:t=>q.push(t),onKeyDown:C,onClick:B},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p,null==o?void 0:o.className,{"border-b-2 pointer-events-none":T===e,"border-b-2 text-[#669dcb] border-[#669dcb]":T===e&&x.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":T===e&&x.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":T!==e&&x.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":T!==e&&x.startsWith("/terminal")})}),r??e)})),a.createElement("li",{className:"w-full border-b border-grey-400 pointer-events-none py-1 mb-[12px]"})),r?(0,a.cloneElement)(g.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function d(t){const e=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(e)},t))}}}]);