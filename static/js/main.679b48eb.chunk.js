(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(5),c=n.n(r),o=(n(14),n(15),n(16),n(7)),s=n(3),i=n.n(s),u=(n(17),{controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,hash:!1,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!1,embedded:!1,help:!0,showNotes:!1,autoPlayMedia:null,preloadIframes:null,autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:i.a.navigateNext,defaultTiming:120,mouseWheel:!1,hideInactiveCursor:!0,hideCursorTime:5e3,hideAddressBar:!0,previewLinks:!1,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",viewDistance:3,parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,display:"block"});function m(e){var t=e.options,n=e.children;return Object(a.useEffect)(function(){i.a.initialize(Object(o.a)({},u,t))}),l.a.createElement("div",{className:"reveal"},l.a.createElement("div",{className:"slides"},n))}function d(e){var t=e.children;return l.a.createElement("section",null,t)}var h=n(2);function E(e){var t=e.code;return l.a.createElement(h.a,Object.assign({},h.b,{language:"jsx",code:t,theme:void 0}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,c=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return l.a.createElement("div",r({line:e,key:t}),e.map(function(e,t){return l.a.createElement("span",c({token:e,key:t}))}))}))})}var p="const ResponsibleComponent = () => {\n    const [data, setData] = useState({});\n    useEffect(() =>\n        fetchData()\n            .then(setData)\n    );\n    \n    return (\n        <ChildComponentWithData data={data} />\n    );\n}",g="const MultipleRenderOfSameComponent = () => (\n    <Wrapper>\n        <ResponsibleComponent />\n        <ResponsibleComponent />\n        <ResponsibleComponent />\n    </Wrapper>\n)";function f(e){var t=e.code;return l.a.createElement(h.a,Object.assign({},h.b,{language:"json",code:t,theme:void 0}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,c=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return l.a.createElement("div",r({line:e,key:t}),e.map(function(e,t){return l.a.createElement("span",c({token:e,key:t}))}))}))})}var y='{\n    "id": "string",\n    "themes": [\n        {\n            "id": "string",\n            "title": "string",\n            "newsletters": [\n                {\n                    "id": "string",\n                    "title": "string",\n                    "description": "string"\n                }\n            ]\n        }\n    ]\n}',w="const reducer = (state = defaultState, action) => {\n    switch (action.type) {\n        case 'newsletters.save':\n            return { ...state, newsletters: action.newsletters };\n            \n        default:\n            return state;\n    }\n}",v="const fetchNewsletters = () => async dispatch => {\n    const newsletters = await getNewsletters();\n    \n    dispatch({ type: 'newsletters.save', newsletters });\n}";var k='{\n    "id": "string",\n    "themes": [\n        {\n            "id": "string",\n            "title": "string",\n            "newsletters": [\n                {\n                    "id": "string",\n                    "title": "string",\n                    "description": "string"\n                }\n            ]\n        }\n    ]\n}',b="const layoutReducer = (state = defaultState, action) => {\n    switch (action.type) {\n        case 'layout.save':\n            return { ...state, layout: action.layout };\n            \n        default:\n            return state;\n    }\n}",C="export const fetchLayout = async () => {\n    const newsletters = exernalAPI.fetchNewsletters();\n    const layout = {\n        id: newsletters.id,\n        themes: newsletters.themes.map(theme => theme.id)\n    };\n    \n    dispatch({ type: 'layout.save', layout });\n};",x="export const fetchLayout = async () => {\n    const newsletters = exernalAPI.fetchNewsletters();\n    const themes = newsletters.themes.reduce((acc, theme) => ({\n        ...acc,\n        [theme.id]: {\n            id: theme.id,\n            newsletters: theme.newsletters.map(nl => nl.id)\n        },\n    });\n    \n    dispatch({ type: 'layout.save', layout });\n};";var A="const singleFetch = (callback) => {\n    const cached = {};\n    return (arg) => {\n        if (cached[arg]) {\n            return cached[arg];\n        }\n        cached[arg] = callback(arg);\n        return cached[arg];\n    }\n}",N="const singleFetch = (callback, expiration = 5000) => {\n    const cached = {};\n    return (arg) => {\n        if (cached[arg] && cached[arg].timestamp > Date.now() - expiration) {\n            return cached[arg].response;\n        }\n        cached[arg] = {\n            response: callback(arg),\n            timestamp: Date.now()\n        }\n        return cached[arg].response;\n    }\n}";var L=[l.a.createElement(function(){return l.a.createElement(d,null,l.a.createElement("h2",null,"Structuring data access in front-end application"))},{key:"title"}),l.a.createElement(function(){return l.a.createElement(d,null,l.a.createElement(d,null,l.a.createElement("h3",null,"Storing data in modern front-end applications")),l.a.createElement(d,null,l.a.createElement("div",null,l.a.createElement("h4",null,"Component Oriented Conception"),l.a.createElement("p",null,"Each component is responsible for its data"),l.a.createElement(E,{code:p}))),l.a.createElement(d,null,l.a.createElement("div",null,l.a.createElement("h4",null,"Problem"),l.a.createElement("p",null,"We need to centralize the data store to avoid requests duplication while keeping it usable"),l.a.createElement(E,{code:g}))))},{key:"first"}),l.a.createElement(function(){return l.a.createElement(d,null,l.a.createElement(d,null,l.a.createElement("h3",null,"Using a centralized store")),l.a.createElement(d,null,l.a.createElement("h4",null,"Advantages"),l.a.createElement("ul",null,l.a.createElement("li",null,"Using a centralized store helps you manage request concurrency"),l.a.createElement("li",null,"Using a centralized store makes your resources available everywhere in your app"))),l.a.createElement(d,null,l.a.createElement("h4",null,"Drawbacks"),l.a.createElement("ul",null,l.a.createElement("li",null,"A poorly managed store may become a pain to manage"),l.a.createElement("li",null,"It main become hard to scale through your app if not crafted carefully"))))},{key:"centralized"}),l.a.createElement(function(){return l.a.createElement(d,null,l.a.createElement(d,null,l.a.createElement("h3",null,"Crafting your store")),l.a.createElement(d,null,l.a.createElement("h4",null,"Context"),l.a.createElement("p",null,"You may encounter badly crafted api that makes your data messy")),l.a.createElement(d,null,l.a.createElement("h4",null,"Example data model from the API"),l.a.createElement(f,{code:y})),l.a.createElement(d,null,l.a.createElement("h4",null,"Example with Redux (reducer)"),l.a.createElement(E,{code:w})),l.a.createElement(d,null,l.a.createElement("h4",null,"Example with Redux (thunk)"),l.a.createElement(E,{code:v})),l.a.createElement(d,null,l.a.createElement("h4",null,"Major Drawbacks"),l.a.createElement("ul",null,l.a.createElement("li",null,"Our data is strongly coupled with the server data"),l.a.createElement("li",null,"Our data are not easy to use as they are nested"))))},{key:"crafting"}),l.a.createElement(function(){return l.a.createElement(d,null,l.a.createElement(d,null,l.a.createElement("h3",null,"Anti Corruption Layer (ACL)")),l.a.createElement(d,null,l.a.createElement("h4",null,"Role"),l.a.createElement("p",null,"The ACL translates the external dataModel into your own data model.")),l.a.createElement(d,null,l.a.createElement("h4",null,"Isolating concepts"),l.a.createElement(f,{code:k})),l.a.createElement(d,null,l.a.createElement("h4",null,"Isolating concepts"),l.a.createElement(f,{code:k}),l.a.createElement("p",null,"Layout | Theme | Newsletter")),l.a.createElement(d,null,l.a.createElement("h4",null,"Creating a reducer for each concept"),l.a.createElement(E,{code:b})),l.a.createElement(d,null,l.a.createElement("h4",null,"Creating the ACL (layout)"),l.a.createElement(E,{code:C})),l.a.createElement(d,null,l.a.createElement("h4",null,"Creating the ACL (theme)"),l.a.createElement(E,{code:x})),l.a.createElement(d,null,l.a.createElement("p",null,"But we are doing multiple queries for the same data ...")))},{key:"ACL"}),l.a.createElement(function(){return l.a.createElement(d,null,l.a.createElement(d,null,l.a.createElement("h3",null,"Caching API data")),l.a.createElement(d,null,l.a.createElement("h4",null,"Caching policies"),l.a.createElement("ul",null,l.a.createElement("li",null,"Single fetch (memoization)"),l.a.createElement("li",null,"Timed expiration"))),l.a.createElement(d,null,l.a.createElement("h4",null,"Single fetch (memoization)"),l.a.createElement(E,{code:A})),l.a.createElement(d,null,l.a.createElement("h4",null,"Timed expiration"),l.a.createElement(E,{code:N})))},{key:"caching"})];n(18);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null,L))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.679b48eb.chunk.js.map