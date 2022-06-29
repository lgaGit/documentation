"use strict";(self.webpackChunklgadocusaurus=self.webpackChunklgadocusaurus||[]).push([[914],{1590:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},s),{},{components:r})):n.createElement(h,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(1308),o=(r(6687),r(1590));const i={sidebar_position:1,title:"TOSync WordPress Plugin"},a="Introduction",l={unversionedId:"team-oneil/tosync-plugin",id:"team-oneil/tosync-plugin",title:"TOSync WordPress Plugin",description:"This plugin was made to handle the syncing of order & booking data to Team O'Neil's HubSpot account.",source:"@site/docs/team-oneil/tosync-plugin.md",sourceDirName:"team-oneil",slug:"/team-oneil/tosync-plugin",permalink:"/team-oneil/tosync-plugin",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"TOSync WordPress Plugin"},sidebar:"tutorialSidebar",previous:{title:"Team O'Neil",permalink:"/category/team-oneil"},next:{title:"RiverWalk Resort",permalink:"/category/riverwalk-resort"}},p={},u=[{value:"Technologies Used",id:"technologies-used",level:2},{value:"Repository",id:"repository",level:2},{value:"Server Directory",id:"server-directory",level:2},{value:"Build Instructions",id:"build-instructions",level:2},{value:"Core Functions",id:"core-functions",level:2},{value:"Useful Functions",id:"useful-functions",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Partial Payments",id:"partial-payments",level:4},{value:"Products",id:"products",level:4}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This plugin was made to handle the syncing of order & booking data to Team O'Neil's HubSpot account."),(0,o.kt)("p",null,'Orders that are considered "On Hold" or "Failed" are ',(0,o.kt)("em",{parentName:"p"},"not")," imported."),(0,o.kt)("h2",{id:"technologies-used"},"Technologies Used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WordPress (",(0,o.kt)("a",{parentName:"li",href:"https://www.teamoneil.com"},"https://www.teamoneil.com"),")"),(0,o.kt)("li",{parentName:"ul"},"HubSpot"),(0,o.kt)("li",{parentName:"ul"},"HubSpot API"),(0,o.kt)("li",{parentName:"ul"},"PHP"),(0,o.kt)("li",{parentName:"ul"},"ENV file to hold API Key.")),(0,o.kt)("h2",{id:"repository"},"Repository"),(0,o.kt)("p",null,"Code for this plugin can be found at the following GitHub location:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lgaGit/TOSync"},"https://github.com/lgaGit/TOSync")),(0,o.kt)("h2",{id:"server-directory"},"Server Directory"),(0,o.kt)("p",null,"The Plugin is loaded onto the live Team O'Neil server at the following location:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"/wp-content/plugins/TOSync")),(0,o.kt)("h2",{id:"build-instructions"},"Build Instructions"),(0,o.kt)("p",null,"None. Runs off of the Team O'Neil WordPress PHP server."),(0,o.kt)("h2",{id:"core-functions"},"Core Functions"),(0,o.kt)("p",null,"printout() - Runs the plugin on each order update."),(0,o.kt)("p",null,"neworder_creation($order_id) - Runs the plugin on each order creation"),(0,o.kt)("p",null,"neworder_delegator($order_id, $order) - Function that runs the plugin."),(0,o.kt)("p",null,"mainplugin($orderid, $order) - Runs the main plugin."),(0,o.kt)("h2",{id:"useful-functions"},"Useful Functions"),(0,o.kt)("p",null,"write_to_log('message) - Logs to the hubspotlog.txt file."),(0,o.kt)("h2",{id:"known-issues"},"Known Issues"),(0,o.kt)("h4",{id:"partial-payments"},"Partial Payments"),(0,o.kt)("p",null,"Partial Payment orders were not importing into HubSpot correctly, due to WooCommerce not passing into the order complete hook the parent order. There is currently a delegation function\nto try to retrieve the parent order from the partial payment order:\n$order = get_woocommerce_order($order_id);"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    $orderdata = $order->get_data();\n\n    $order_parent_id = $orderdata['parent_id'];\n    write_to_log('Parent ID: ' . $order_parent_id);\n\n    if ($order_parent_id != 0){\n        $parentorder = get_woocommerce_order($order_parent_id);\n        mainplugin($order_parent_id, $parentorder);\n    }\n    else {\n        mainplugin($order_id, $order);\n    }\n    if ($order_parent_id != 0){\n        $parentorder = get_woocommerce_order($order_parent_id);\n        mainplugin($order_parent_id, $parentorder);\n    }\n    else {\n        mainplugin($order_id, $order);\n    }\n")),(0,o.kt)("p",null,"If a Partial Payment doesn't correctly link to HubSpot, the fix is the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Delete the deal in HubSpot"),(0,o.kt)("li",{parentName:"ol"},"Open the order on WooCommerce"),(0,o.kt)("li",{parentName:"ol"},"Click update")),(0,o.kt)("p",null,"This will force a update to the database and HubSpot."),(0,o.kt)("h4",{id:"products"},"Products"),(0,o.kt)("p",null,"When a new product is created by Team O'Neil, it needs to be added to the code base in order to be able to be imported into HubSpot. This involves creating the product within HubSpot and then\nretrieving the product number, of which is then added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"set_product_id")," switch case function. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    // solar turbines\n        case 37106:\n            return 1407904381;\n            break;\n")),(0,o.kt)("p",null,"Solar Turbines are identified in the switch case statement with two ids:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"37106 - Retrieved from WooCommerce Product Admin Screen Link (",(0,o.kt)("a",{parentName:"li",href:"https://teamoneil.com/wp-admin/post.php?post=37106&action=edit"},"https://teamoneil.com/wp-admin/post.php?post=37106&action=edit"),")"),(0,o.kt)("li",{parentName:"ul"},"1407904381 - Retrieved from HubSpot API Call to the products endpoint for Team O'Neil. (",(0,o.kt)("a",{parentName:"li",href:"https://api.hubapi.com/crm/v3/objects/products?limit=10&archived=false&hapikey=YOUR_HUBSPOT_API_KEY"},"https://api.hubapi.com/crm/v3/objects/products?limit=10&archived=false&hapikey=YOUR_HUBSPOT_API_KEY"),")")),(0,o.kt)("p",null,"HubSpot Product API Documentation is found at ",(0,o.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/api/crm/products"},"https://developers.hubspot.com/docs/api/crm/products"),"."))}d.isMDXComponent=!0}}]);