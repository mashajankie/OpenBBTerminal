"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?o.createElement(b,l(l({ref:t},c),{},{components:n})):o.createElement(b,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var o=n(87462),r=(n(67294),n(3905)),a=n(65099),l=n(85162);const p={title:"plot",description:"OpenBB SDK Function"},i="plot",u={unversionedId:"reference/portfolio/po/plot",id:"reference/portfolio/po/plot",title:"plot",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/portfolio/po/plot.md",sourceDirName:"reference/portfolio/po",slug:"/reference/portfolio/po/plot",permalink:"/sdk/reference/portfolio/po/plot",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/plot.md",tags:[],version:"current",frontMatter:{title:"plot",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"nco",permalink:"/sdk/reference/portfolio/po/nco"},next:{title:"property",permalink:"/sdk/reference/portfolio/po/property"}},c={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plot"},"plot"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Display efficient frontier"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_view.py#L247"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, chart_type: str = "pie", kwargs: Any)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,r.kt)("td",{parentName:"tr",align:null},"PoEngine"),(0,r.kt)("td",{parentName:"tr",align:null},"Portfolio optimization engine, by default None",(0,r.kt)("br",null),"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," to load a portfolio engine"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chart_type"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'Chart type, by default "pie"',(0,r.kt)("br",null),'Options are "pie", "hist", "dd" or "rc"'),(0,r.kt)("td",{parentName:"tr",align:null},"pie"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nd = {\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"SECTOR": {\n                "AAPL": "INFORMATION TECHNOLOGY",\n                "MSFT": "INFORMATION TECHNOLOGY",\n                "AMZN": "CONSUMER DISCRETIONARY",\n            },\n            "CURRENT_INVESTED_AMOUNT": {\n                "AAPL": "100000.0",\n                "MSFT": "200000.0",\n                "AMZN": "300000.0",\n            },\n            "CURRENCY": {\n                "AAPL": "USD",\n                "MSFT": "USD",\n                "AMZN": "USD",\n            },\n        }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"p = openbb.portfolio.po.load(symbols_categories=d)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"['SECTOR', 'CURRENCY']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="heat")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"['ASSET_CLASS',\n 'SECTOR',\n 'INDUSTRY',\n 'COUNTRY',\n 'CURRENCY']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="INDUSTRY", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="COUNTRY", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="heat")\n')),(0,r.kt)("hr",null)),(0,r.kt)(l.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,r.kt)("p",null,"Display efficient frontier"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_view.py#L247"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot_chart(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, chart_type: str = "pie", kwargs: Any)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,r.kt)("td",{parentName:"tr",align:null},"PoEngine"),(0,r.kt)("td",{parentName:"tr",align:null},"Portfolio optimization engine, by default None",(0,r.kt)("br",null),"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," to load a portfolio engine"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chart_type"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'Chart type, by default "pie"',(0,r.kt)("br",null),'Options are "pie", "hist", "dd" or "rc"'),(0,r.kt)("td",{parentName:"tr",align:null},"pie"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nd = {\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"SECTOR": {\n                "AAPL": "INFORMATION TECHNOLOGY",\n                "MSFT": "INFORMATION TECHNOLOGY",\n                "AMZN": "CONSUMER DISCRETIONARY",\n            },\n            "CURRENT_INVESTED_AMOUNT": {\n                "AAPL": "100000.0",\n                "MSFT": "200000.0",\n                "AMZN": "300000.0",\n            },\n            "CURRENCY": {\n                "AAPL": "USD",\n                "MSFT": "USD",\n                "AMZN": "USD",\n            },\n        }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"p = openbb.portfolio.po.load(symbols_categories=d)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"['SECTOR', 'CURRENCY']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="heat")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"['ASSET_CLASS',\n 'SECTOR',\n 'INDUSTRY',\n 'COUNTRY',\n 'CURRENCY']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="INDUSTRY", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="COUNTRY", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="heat")\n')),(0,r.kt)("hr",null))))}d.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(67294),r=n(86010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n},t)}},65099:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(87462),r=n(67294),a=n(86010),l=n(72389),p=n(67392),i=n(7094),u=n(12466);const c="tabItem_hGfb";var s=n(16550);function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:b,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),k=(0,p.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:_}=(0,i.U)(),[T,v]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==T&&h.some((t=>t.value===e))&&v(e)}const S=e=>{const t=e.currentTarget,n=O.indexOf(t),o=h[n].value;o!==T&&(E(t),v(o),null!=b&&_(b,String(o)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()},{pathname:R}=(0,s.TH)();return r.createElement("div",null,r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("_group-tab list-none lg:-ml-7 my-6")},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:C,onClick:S},l,{className:(0,a.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",c,null==l?void 0:l.className,{"border-b-2 pointer-events-none":T===t,"cursor-pointer":T!==t,"border-b-2 text-[#669dcb] border-[#669dcb]":T===t&&R.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":T===t&&R.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":T!==t&&R.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":T!==t&&R.startsWith("/terminal")})}),n??t)})),r.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),n?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,o.Z)({key:String(t)},e))}}}]);