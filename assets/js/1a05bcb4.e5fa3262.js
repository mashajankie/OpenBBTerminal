"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22958],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=o.createContext({}),l=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=l(t.components);return o.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,s=t.originalType,p=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(h,a(a({ref:e},c),{},{components:n})):o.createElement(h,a({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=n.length,a=new Array(s);a[0]=d;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r.mdxType="string"==typeof t?t:i,a[1]=r;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67667:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const s={title:"Options",keywords:["stocks","options","calls","puts","gamma","delta","iv","theta","rho","greeks","charm","vanna","vomma","derivatives","contracts","^SPX","^VIX","^NDX","chains","oi","vol","volume","open","interest","expiration","dte","volatility","underlying"],excerpt:"This guide introduces the Stock Options module, within the context of the OpenBB SDK",geekdocCollapseSection:!0},a=void 0,r={unversionedId:"guides/intros/stocks/options",id:"guides/intros/stocks/options",title:"Options",description:"The Stock Options module of the OpenBB SDK wraps the functions of the Options sub-menu within the OpenBB Terminal. This allows the user greater flexibility when researching and anlayzing options data. Start a Python script of Notebook file by importing the dependencies:",source:"@site/content/sdk/guides/intros/stocks/options.md",sourceDirName:"guides/intros/stocks",slug:"/guides/intros/stocks/options",permalink:"/sdk/guides/intros/stocks/options",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/guides/intros/stocks/options.md",tags:[],version:"current",frontMatter:{title:"Options",keywords:["stocks","options","calls","puts","gamma","delta","iv","theta","rho","greeks","charm","vanna","vomma","derivatives","contracts","^SPX","^VIX","^NDX","chains","oi","vol","volume","open","interest","expiration","dte","volatility","underlying"],excerpt:"This guide introduces the Stock Options module, within the context of the OpenBB SDK",geekdocCollapseSection:!0},sidebar:"tutorialSidebar",previous:{title:"Fundamental Analysis",permalink:"/sdk/guides/intros/stocks/fundamental-analysis"},next:{title:"Sector and Industry Analysis",permalink:"/sdk/guides/intros/stocks/sia"}},p={},l=[{value:"How to Use",id:"how-to-use",level:2}],c={toc:l};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Stock Options module of the OpenBB SDK wraps the functions of the Options sub-menu within the ",(0,i.kt)("a",{parentName:"p",href:"/terminal/guides/intros/stocks/options"},"OpenBB Terminal"),". This allows the user greater flexibility when researching and anlayzing options data. Start a Python script of Notebook file by importing the dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n\nimport pandas as pd\nimport numpy as np\n\nimport matplotlib.pyplot as plt\n\n%matplotlib widget\n")),(0,i.kt)("h2",{id:"how-to-use"},"How to Use"),(0,i.kt)("p",null,"All functions within the Options module are printed with: ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb.stocks.options")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/199891549-1331a65c-6251-4206-b77c-c64dfabe70f4.png",alt:"Options Module Functions",title:"Options Module Functions"})),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/sdk/reference/stocks/options/unu/"},"Unusual Options function")," returns a Tuple containing the DataFrame and a timestamp from when the list was last updated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"unusual_options,timestamp = openbb.stocks.options.unu()\nunusual_options\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/199891691-da3af87e-99c3-4d01-881f-62b6b0d3ae34.png",alt:"Unusual Options",title:"Unusual Options"})),(0,i.kt)("p",null,"Get up to ten years of historical put/call ratios (US equity options only), with the ",(0,i.kt)("inlineCode",{parentName:"p"},"PCR")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pcr_spy = openbb.stocks.options.pcr(symbol = 'SPY', start_date = '2012-11-03')\npcr_spy.rename(columns = {'PCR': 'Put/Call Ratio'})\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/199892365-f0ece3fa-307f-41cd-9326-d515f1d8b716.png",alt:"openbb.stocks.options.pcr",title:"openbb.stocks.options.pcr"})),(0,i.kt)("p",null,"The list of expiration dates is generated with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.options.option_expirations('SPY')\n")),(0,i.kt)("p",null,"Get the raw DataFrame for an options chain from yFinance by using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"SPY221111 = openbb.stocks.options.chains_yf(symbol = 'SPY', expiry = '2022-11-11')\n\nSPY221111\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/199900266-668af99d-ae72-4bca-9b40-14228b25279b.png",alt:"openbb.stocks.options.chains_yf",title:"openbb.stocks.options.chains_yf"})),(0,i.kt)("p",null,"Getting all option chains for the underlying symbol as a single Pandas DataFrame requires a little bit of scripting prior to analysis. This will query Tradier as the data source:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nimport pandas as pd\nimport numpy as np\n\nexpirations = openbb.stocks.options.option_expirations(symbol = 'SPY')\noptions_df: pd.DataFrame = []\n\nfor expirations in expirations:\n    options_df.append(openbb.stocks.options.chains(symbol = 'SPY', expiry = expirations))\n\noptions_df = pd.concat(options_df)\n\noptions_df.set_index(keys = 'symbol', inplace = True)\n\noptions_df\n")),(0,i.kt)("p",null,"Depending on the depth of options available, compiling the data may take upwards of thirty seconds."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/199893166-35ef062d-c16e-464d-a392-378ef4c6a1ee.png",alt:"DataFrame With all Expirations",title:"DataFrame With all Expirations"})))}u.isMDXComponent=!0}}]);