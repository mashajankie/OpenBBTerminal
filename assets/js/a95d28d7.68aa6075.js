"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7387],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=g(t,["components","mdxType","originalType","parentName"]),k=m(a),h=n,N=k["".concat(p,".").concat(h)]||k[h]||o[h]||i;return a?r.createElement(N,l(l({ref:e},d),{},{components:a})):r.createElement(N,l({ref:e},d))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=k;var g={};for(var p in e)hasOwnProperty.call(e,p)&&(g[p]=e[p]);g.originalType=t,g.mdxType="string"==typeof t?t:n,l[1]=g;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},42098:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>g,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={title:"ETF",keywords:["stocks, stock, options, option, call, put, earnings, calendar, how-to, guide, scripts, fundamental, analysis, technical, behavioural, analyst, equity, research, api, sdk, application, python, notebook, jupyter"],excerpt:"This guide introduces the ETF SDK in the context of the OpenBB SDK."},l=void 0,g={unversionedId:"guides/intros/etf",id:"guides/intros/etf",title:"ETF",description:"The ETF module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ., after, openbb.etf",source:"@site/content/sdk/guides/intros/etf.md",sourceDirName:"guides/intros",slug:"/guides/intros/etf",permalink:"/sdk/guides/intros/etf",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/guides/intros/etf.md",tags:[],version:"current",frontMatter:{title:"ETF",keywords:["stocks, stock, options, option, call, put, earnings, calendar, how-to, guide, scripts, fundamental, analysis, technical, behavioural, analyst, equity, research, api, sdk, application, python, notebook, jupyter"],excerpt:"This guide introduces the ETF SDK in the context of the OpenBB SDK."},sidebar:"tutorialSidebar",previous:{title:"Economy",permalink:"/sdk/guides/intros/economy"},next:{title:"Forecast SDK",permalink:"/sdk/guides/intros/forecast"}},p={},m=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"etf_by_category",id:"etf_by_category",level:3},{value:"ETF Tickers",id:"etf-tickers",level:3},{value:"Performance Metrics",id:"performance-metrics",level:3},{value:"Holdings",id:"holdings",level:3},{value:"ETF Screener",id:"etf-screener",level:3},{value:"Disc",id:"disc",level:3}],d={toc:m};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ETF module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,n.kt)("inlineCode",{parentName:"p"},"."),", after, ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.etf"),"\n\u200b"),(0,n.kt)("h2",{id:"how-to-use"},"How to Use"),(0,n.kt)("p",null,"\u200bThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nimport pandas as pd\n")),(0,n.kt)("p",null,"\u200bBelow is a brief description of each function within the ETF module:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.candle"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Chart OHLC + Volume + Moving Averages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.disc"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Sub-Module"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Best/Worst/Highest Volume ETFs Today")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.etf_by_category"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Lookup by Category")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.etf_by_name"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Lookup by Name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.holdings"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Holdings and Weights")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.ld"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Lookup by Description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.load"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Get Historical Price Data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.ln"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Lookup by Name (More Details Than ",(0,n.kt)("inlineCode",{parentName:"td"},"by_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.news"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"News Headlines for a Ticker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.overview"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Basic Statistics for an ETF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.scr"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Sub-Module"),(0,n.kt)("td",{parentName:"tr",align:"right"},"ETF Screener")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.summary"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Text Description and Summary of an ETF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.symbols"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Dictionary"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Dictionary of {Ticker:Name}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.weights"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Table or Pie Graph of Sector Weightings")))),(0,n.kt)("p",null,"Alteratively you can print the contents of the ETF SDK with:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.etf)\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"etf_by_category"},"etf_by_category"),(0,n.kt)("p",null,"\u200b\nETFs are categorized into different buckets. Use the code block below as a way to generate a list of all categories:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"etf_list = pd.DataFrame.from_dict(openbb.etf.etf_by_category('')).transpose()\ncategories = list(etf_list['category'].drop_duplicates())\ncategories = pd.DataFrame(categories[1::], columns = ['Type'])\n\u200b\ncategories.head(6)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pacific/Asia ex-Japan Stk")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Large Value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Equity Energy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Foreign Large Blend")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Large Blend")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Multisector Bond")))),(0,n.kt)("p",null,"\u200bReplacing the empty category in the syntax above will return the ETFs within that category:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"etf_category = pd.DataFrame.from_dict(openbb.etf.etf_by_category('Foreign Large Blend')).transpose()\netf_category = etf_category.sort_values(by=['total_assets'], ascending = False)\n\u200b\netf_category.head(2)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"short_name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"long_name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"currency"),(0,n.kt)("th",{parentName:"tr",align:"left"},"summary"),(0,n.kt)("th",{parentName:"tr",align:"left"},"category"),(0,n.kt)("th",{parentName:"tr",align:"left"},"family"),(0,n.kt)("th",{parentName:"tr",align:"left"},"exchange"),(0,n.kt)("th",{parentName:"tr",align:"left"},"market"),(0,n.kt)("th",{parentName:"tr",align:"right"},"total_assets"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VXUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Vanguard Total International St"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Vanguard Total International Stock Index Fund ETF Shares"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The investment seeks to track the performance of a benchmark index that measures the investment return of stocks issued by companies located in developed and emerging markets, excluding the United States."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Foreign Large Blend"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Vanguard"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NGM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"us_market"),(0,n.kt)("td",{parentName:"tr",align:"right"},"379067924480")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fund employs an indexing investment approach designed to track the performance of the FTSE Global All Cap ex US Index, a float-adjusted market-capitalization-weighted index designed to measure equity market performance of companies located in developed and emerging markets, excluding the United States. It invests all, or substantially all, of its assets in the common stocks included in its target index."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VEA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Vanguard FTSE Developed Markets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Vanguard FTSE Developed Markets Index Fund ETF Shares"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The investment seeks to track the performance of the FTSE Developed All Cap ex US Index."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Foreign Large Blend"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Vanguard"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PCX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"us_market"),(0,n.kt)("td",{parentName:"tr",align:"right"},"150540566528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fund employs an indexing investment approach designed to track the performance of the FTSE Developed All Cap ex US Index, a market-capitalization-weighted index that is made up of approximately 3865 common stocks of large-, mid-, and small-cap companies located in Canada and the major markets of Europe and the Pacific region. The adviser attempts to replicate the target index by investing all, or substantially all, of its assets in the stocks that make up the index, holding each stock in approximately the same proportion as its weighting in the index."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"})))),(0,n.kt)("p",null,"\u200b"),(0,n.kt)("h3",{id:"etf-tickers"},"ETF Tickers"),(0,n.kt)("p",null,"A list of all tickers in the specific category can be generated from the index of the above DataFrame, ",(0,n.kt)("inlineCode",{parentName:"p"},"etf_category"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"symbols = etf_category.index.to_list()\n")),(0,n.kt)("h3",{id:"performance-metrics"},"Performance Metrics"),(0,n.kt)("p",null,"This list of tickers can then be used for comparison analysis, or portfolio optimization. For example, comparing the performance metrics of the Foreign Large Blend category:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"performance = openbb.stocks.ca.screener(similar = symbols, data_type = 'performance')\nperformance = performance.sort_values(by=['Perf Quart'])\nperformance.head(5)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Perf Week"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Perf Month"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Perf Quart"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Perf Half"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Perf Year"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Perf YTD"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Volatility W"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Volatility M"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recom"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Avg Volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Rel Volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Change"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Volume"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IFV"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0057"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0531"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0873"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.122"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.2817"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.2657"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0188"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0194"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"26410"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.78"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0158"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13090")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IDLV"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0326"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0814"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0836"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1162"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1756"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1758"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0113"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0121"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"152070"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"26.39"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.003"),(0,n.kt)("td",{parentName:"tr",align:"right"},"29698")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HDMV"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0456"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0873"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0728"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1071"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1709"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1683"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0087"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0081"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"4330"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"26.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0006"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2011")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"DEEF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0457"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1061"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0612"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0997"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.2099"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.2071"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0067"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0122"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"8350"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.08"),(0,n.kt)("td",{parentName:"tr",align:"right"},"25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0031"),(0,n.kt)("td",{parentName:"tr",align:"right"},"244")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"38"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RODM"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0424"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1106"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0428"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1012"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.2015"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1827"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0141"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0139"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"345640"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0011"),(0,n.kt)("td",{parentName:"tr",align:"right"},"125217")))),(0,n.kt)("h3",{id:"holdings"},"Holdings"),(0,n.kt)("p",null,"To peer into the holdings of a specific ETF:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"holdings = openbb.etf.holdings('DIA').reset_index()\nholdings.head(5)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"% Of Etf"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Shares"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UNH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UnitedHealth Group Incorporated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.09%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Goldman Sachs Group, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"7.51%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Home Depot, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"6.03%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AMGN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Amgen Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.61%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MCD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"McDonald's Corporation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.35%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")))),(0,n.kt)("h3",{id:"etf-screener"},"ETF Screener"),(0,n.kt)("p",null,"The ETF screener is also accessible through the SDK. Variables for the screener are set in preset files. The path to their location will depend on the type of installation and operating system; it will be similar to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For a pip/PyPi installation: ",(0,n.kt)("inlineCode",{parentName:"li"},"~/path_to/miniconda3/envs/obb/Lib/site-packages/openbb_terminal/etf/screener/presets/etf_config.ini")),(0,n.kt)("li",{parentName:"ul"},"For a Git Clone & Conda installation: ",(0,n.kt)("inlineCode",{parentName:"li"},"~/path_to/cloned_folder/OpenBBTerminal/openbb_terminal/etf/screener/presets/etf_config.ini")),(0,n.kt)("li",{parentName:"ul"},"For a the EXE/DMG installer bundles: ",(0,n.kt)("inlineCode",{parentName:"li"},"~/path_to_installation/OpenBB Terminal/.OpenBB/openbb_terminal/etf/screener/etf_config.ini"))),(0,n.kt)("p",null,"This file can be copied to the user data folder, ",(0,n.kt)("inlineCode",{parentName:"p"},"~/OpenBBUserData/presets/etf/screener/"),", along with any other user-generated screener presets."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"results = openbb.etf.scr.screen(preset='etf_config.ini')\nresults.head(5)\n")),(0,n.kt)("p",null,"In this example, the configuration file is set to return results with a maximum Beta value of -2."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"index"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Assets"),(0,n.kt)("th",{parentName:"tr",align:"right"},"NAV"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Expense"),(0,n.kt)("th",{parentName:"tr",align:"right"},"PE"),(0,n.kt)("th",{parentName:"tr",align:"left"},"SharesOut"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Div"),(0,n.kt)("th",{parentName:"tr",align:"right"},"DivYield"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"PrevClose"),(0,n.kt)("th",{parentName:"tr",align:"right"},"YrLow"),(0,n.kt)("th",{parentName:"tr",align:"right"},"YrHigh"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Beta"),(0,n.kt)("th",{parentName:"tr",align:"right"},"N_Hold"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CLDS"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.99"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"500,000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7815"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.58"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14.79"),(0,n.kt)("td",{parentName:"tr",align:"right"},"46.43"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-2.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CTEX"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"39.52"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.58"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"100,000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1161"),(0,n.kt)("td",{parentName:"tr",align:"right"},"39.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"39.48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-2.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"KLNE"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.81"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.29"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"250,000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.08"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.37"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5580"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.55"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"31.38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-2.79"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LABD"),(0,n.kt)("td",{parentName:"tr",align:"right"},"97.16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.12293e+06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.26"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"85.28"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-2.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MJIN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.79"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17.45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"160,000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.88"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"282"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.81"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.87"),(0,n.kt)("td",{parentName:"tr",align:"right"},"26.73"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-3.23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2")))),(0,n.kt)("h3",{id:"disc"},"Disc"),(0,n.kt)("p",null,"The current top gainers, losers, and volume for ETFs is returned with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.etf.disc.mover(sort_type = 'decliners')\n\nopenbb.etf.disc.mover(sort_type = 'gainers')\n\nopenbb.etf.disc.mover(sort_type = 'active')\n")),(0,n.kt)("p",null,"With no ",(0,n.kt)("inlineCode",{parentName:"p"},"sort_type")," chosen, it will default to ",(0,n.kt)("inlineCode",{parentName:"p"},"gainers"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"movers = openbb.etf.disc.mover()\nmovers.head(5)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Chg"),(0,n.kt)("th",{parentName:"tr",align:"right"},"%Chg"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Vol"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Semiconductor Bear 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35.3101"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.3101"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.34"),(0,n.kt)("td",{parentName:"tr",align:"left"},"24.5M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ProShares UltraShort Bloomberg Natural Gas"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18.09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.19"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.04"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.4M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MicroSectors FANG & Innovation -3x Inverse Leveraged ETN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.98"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.83"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.74"),(0,n.kt)("td",{parentName:"tr",align:"left"},"160.1K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Dow Jones Internet Bear 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32.14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.91"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"554.2K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily S&P 500 High Beta Bear 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.4652"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3752"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2M")))))}o.isMDXComponent=!0}}]);