"use strict";(self.webpackChunklgadocusaurus=self.webpackChunklgadocusaurus||[]).push([[921],{1590:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(1308),o=(n(6687),n(1590));const l={sidebar_position:2,title:"Floor Map Module"},a="Introduction",i={unversionedId:"riverwalk/riverwalk-map",id:"riverwalk/riverwalk-map",title:"Floor Map Module",description:"The floor map module created for RiverWalk utilizes the HubSpot React Boilerplate template, and is uploaded via the",source:"@site/docs/riverwalk/riverwalk-map.md",sourceDirName:"riverwalk",slug:"/riverwalk/riverwalk-map",permalink:"/riverwalk/riverwalk-map",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Floor Map Module"},sidebar:"tutorialSidebar",previous:{title:"HubSpot Modules",permalink:"/riverwalk/hubspot-modules"},next:{title:"InnSeason Resort",permalink:"/category/innseason-resort"}},s={},p=[{value:"Technology Used",id:"technology-used",level:3},{value:"Essential Links",id:"essential-links",level:3},{value:"Repository",id:"repository",level:3},{value:"Steps to Run",id:"steps-to-run",level:3},{value:"Project Structure",id:"project-structure",level:2},{value:"App.js",id:"appjs",level:4},{value:"App.scss",id:"appscss",level:4},{value:"Index.js",id:"indexjs",level:4},{value:"/modules/fields.json",id:"modulesfieldsjson",level:4},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The floor map module created for RiverWalk utilizes the HubSpot React Boilerplate template, and is uploaded via the\nHubSpot CLI tool. "),(0,o.kt)("p",null,"Because of the limited file size that HubSpot supports, Webpack must minimize this package and all included packages\nbefore being uploaded to HubSpot. This is done automatically upon successfully running this package."),(0,o.kt)("p",null,"The container folder of this project is ",(0,o.kt)("inlineCode",{parentName:"p"},"HubSpotThreeJS"),"."),(0,o.kt)("h3",{id:"technology-used"},"Technology Used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React"),(0,o.kt)("li",{parentName:"ul"},"ThreeJS"),(0,o.kt)("li",{parentName:"ul"},"HubSpot"),(0,o.kt)("li",{parentName:"ul"},"HubSpot CLI"),(0,o.kt)("li",{parentName:"ul"},"React Three Fiber"),(0,o.kt)("li",{parentName:"ul"},"React Three Drei"),(0,o.kt)("li",{parentName:"ul"},"JavaScript"),(0,o.kt)("li",{parentName:"ul"},"CSS")),(0,o.kt)("h3",{id:"essential-links"},"Essential Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/HubSpot/cms-react-boilerplate"},"HubSpot React CRM Boilerplate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli"},"HubSpot CLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields"},"HubSpot Fields Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"},"React-Three-Fiber Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/"},"three.js Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/drei"},"React-Three-Drei Documentation"))),(0,o.kt)("h3",{id:"repository"},"Repository"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lgaGit/HubSpotThreeJS"},"https://github.com/lgaGit/HubSpotThreeJS")),(0,o.kt)("h3",{id:"steps-to-run"},"Steps to Run"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download & Install HubSpot CLI. "),(0,o.kt)("li",{parentName:"ol"},"Log in to the RiverWalk account on HubSpot via HubSpot CLI."),(0,o.kt)("li",{parentName:"ol"},"Clone the GitHub Repository. ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/thomaslanenh/HubSpotThreeJS")),(0,o.kt)("li",{parentName:"ol"},"Navigate via command line to the cloned repository."),(0,o.kt)("li",{parentName:"ol"},"Type ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run"),".")),(0,o.kt)("p",null,"Changes to code will automatically be pushed to HubSpot."),(0,o.kt)("h2",{id:"project-structure"},"Project Structure"),(0,o.kt)("p",null,"I believe everything is retained to the /src folder. There shouldn't be any components used in this project, but the\nfolder and some test components do exist within that folder. Essential files are listed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/src",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/images"),(0,o.kt)("li",{parentName:"ul"},"/modules",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"fields.json"))),(0,o.kt)("li",{parentName:"ul"},"App.js"),(0,o.kt)("li",{parentName:"ul"},"App.scss"),(0,o.kt)("li",{parentName:"ul"},"Index.js")))),(0,o.kt)("h4",{id:"appjs"},"App.js"),(0,o.kt)("p",null,"This is the heart and soul of the project. All logic is in here, including 3D calculations and retrieving data from\nHubSpot. "),(0,o.kt)("p",null,"The custom module runs off of ThreeJS with the wrapper React based functionality in React-Three-Fiber. "),(0,o.kt)("h4",{id:"appscss"},"App.scss"),(0,o.kt)("p",null,"The CSS file that controls stylization of the 3D plane and supporting apps."),(0,o.kt)("h4",{id:"indexjs"},"Index.js"),(0,o.kt)("p",null,"The basic structure of the React application. Provides the container for ThreeJS to latch onto and build upon."),(0,o.kt)("h4",{id:"modulesfieldsjson"},"/modules/fields.json"),(0,o.kt)("p",null,"This sets up and makes live the points of data collection within HubSpot that can then be retrieved within the React\ncode. Field's are grouped per floor. To find out more information on how to set up fields or modify then, reference\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields"},"HubSpot Fields Documentation"),"."),(0,o.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,o.kt)("p",null,"As of this moment, the module only supports a developer defined number of floors. Each additional floor needed has\nto be coded in to the state management within React & respective fields added to ",(0,o.kt)("inlineCode",{parentName:"p"},"fields.json")," for manipulation by the\nusers on the front end."))}c.isMDXComponent=!0}}]);