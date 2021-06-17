/*! For license information please see component---src-pages-modal-overlays-popover-tsx-11d7d32ac37136d0cb83.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"U+2L":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r,o,a=n("q1tI"),i=n.n(a),l=n("vM+S"),c=n("paqj"),s=n("eUAm"),b=n("vOnD");function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u=b.e.div(r||(r=d(["\n  ","\n"])),(function(e){var t=e.theme;return Object(b.d)(o||(o=d(["\n    border: "," solid ",";\n    border-radius: ",";\n    background: ",";\n    box-shadow: ",";\n    color: ",";\n\n    .primitive-overlay {\n      font-family: ",";\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      padding: ",";\n    }\n\n    .arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-left: "," solid transparent;\n      border-right: "," solid transparent;\n      border-bottom: "," solid ",";\n\n      &::after {\n        position: absolute;\n        content: ' ';\n        width: 0;\n        height: 0;\n        top: 3px;\n        left: calc(50% - ",");\n        border-left: "," solid transparent;\n        border-right: "," solid transparent;\n        border-bottom: "," solid ",";\n        clip-path: inset(0 0 2px);\n      }\n    }\n  "])),t.popoverBorderWidth,t.popoverBorderColor,t.popoverBorderRadius,t.popoverBackgroundColor,t.popoverShadow,t.popoverTextColor,t.popoverTextFontFamily,t.popoverTextFontSize,t.popoverTextFontWeight,t.popoverTextLineHeight,t.popoverPadding,t.popoverArrowSize,t.popoverArrowSize,t.popoverArrowSize,t.popoverBorderColor,t.popoverArrowSize,t.popoverArrowSize,t.popoverArrowSize,t.popoverArrowSize,t.popoverBackgroundColor)})),p=n("LXkR"),f=i.a.createElement("span",{className:"arrow"}),m=function(e){var t=i.a.useContext(b.a),n=parseInt(t.popoverArrowSize),r=Math.round(-n-n/2);return i.a.createElement(p.b,{target:e.children,placement:e.placement,trigger:e.trigger,style:e.style,className:e.className,eventListener:e.eventListener,transformSize:15,arrowRound:r,arrowSize:t.popoverArrowSize},i.a.createElement(u,null,f,"string"==typeof e.overlay?i.a.createElement("div",{className:"primitive-overlay"},e.overlay):e.overlay))},v=n("nsSc"),h=n("jGo9"),g=n("DAwz"),y=n("Wbzz"),w=n("1Yd/");function j(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{title:"Popover"}),i.a.createElement(s.a,null,i.a.createElement(c.a,{breakPoint:{xs:12,md:6}},i.a.createElement(h.a,{size:"Tiny"},i.a.createElement("header",null,"Popover Position"),i.a.createElement(h.b,{id:"popoverScroll"},i.a.createElement(m,{className:"with-margin inline-block",trigger:"hover",placement:"left",overlay:"Hello, how are you today?",eventListener:"#popoverScroll"},i.a.createElement(g.a,{fullWidth:!0},"Left")),i.a.createElement(m,{className:"with-margin inline-block",trigger:"hover",placement:"right",overlay:"Hello, how are you today?",eventListener:"#popoverScroll"},i.a.createElement(g.a,{fullWidth:!0},"Right")),i.a.createElement(m,{className:"with-margin inline-block",trigger:"hover",placement:"top",overlay:"Hello, how are you today?",eventListener:"#popoverScroll"},i.a.createElement(g.a,{fullWidth:!0},"Top")),i.a.createElement(m,{className:"with-margin inline-block",trigger:"hover",placement:"bottom",overlay:"Hello, how are you today?",eventListener:"#popoverScroll"},i.a.createElement(g.a,{fullWidth:!0},"Bottom"))))),i.a.createElement(c.a,{breakPoint:{xs:12,md:6}},i.a.createElement(h.a,{size:"Tiny"},i.a.createElement("header",null,"Simple Popovers"),i.a.createElement(h.b,{className:"popoverScroll"},i.a.createElement(m,{eventListener:".popoverScroll",className:"with-margin inline-block",trigger:"click",placement:"top",overlay:i.a.createElement(v.b,{activeIndex:0,fullWidth:!0},i.a.createElement(v.a,{title:"Tab 1",icon:"icon ion-ios-home",responsive:!0},"Content 1"),i.a.createElement(v.a,{title:"Tab 2",icon:"icon ion-ios-star-outline",responsive:!0},"Content 2"))},i.a.createElement(g.a,{fullWidth:!0},"on click")),i.a.createElement(m,{eventListener:".popoverScroll",className:"with-margin inline-block",trigger:"hover",placement:"top",overlay:i.a.createElement(h.a,{className:"popover-card"},i.a.createElement("header",null,"Hello!"),i.a.createElement(h.b,null,"Hello, how are you today?"))},i.a.createElement(g.a,{fullWidth:!0},"on hover")),i.a.createElement(m,{eventListener:".popoverScroll",className:"with-margin inline-block",trigger:"focus",placement:"top",overlay:i.a.createElement(h.a,{className:"popover-card"},i.a.createElement("header",null,"Hello!"),i.a.createElement(h.b,null,"Hello, how are you today?"))},i.a.createElement(g.a,{fullWidth:!0},"on focus")),i.a.createElement(l.a,{className:"with-margin inline-block",placement:"bottom",items:[{title:"Profile",link:{to:"/modal-overlays/tooltip"}},{title:"Log out",link:{to:"/logout"}}],Link:y.Link},i.a.createElement(g.a,{fullWidth:!0},"Context Menu")))))))}},eUAm:function(e,t,n){"use strict";var r,o,a,i,l,c,s,b,d,u,p=n("q1tI"),f=n.n(p),m=n("vOnD"),v=n("rZKo");function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g=m.e.div(r||(r=h(["\n  display: flex;\n  flex-wrap: wrap;\n  ","\n"])),(function(e){return Object(m.d)(o||(o=h(["\n    margin-right: ","px;\n    margin-left: ","px;\n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  "])),Object(v.d)(e.theme)/-2,Object(v.d)(e.theme)/-2,e.reverse&&"flex-direction: row-reverse;",e.start&&Object(v.b)(e.start)(a||(a=h(["\n      justify-content: flex-start;\n    "]))),e.center&&Object(v.b)(e.center)(i||(i=h(["\n      justify-content: center;\n    "]))),e.end&&Object(v.b)(e.end)(l||(l=h(["\n      justify-content: flex-end;\n    "]))),e.top&&Object(v.b)(e.top)(c||(c=h(["\n      align-items: flex-start;\n    "]))),e.middle&&Object(v.b)(e.middle)(s||(s=h(["\n      align-items: center;\n    "]))),e.bottom&&Object(v.b)(e.bottom)(b||(b=h(["\n      align-items: flex-end;\n    "]))),e.around&&Object(v.b)(e.around)(d||(d=h(["\n      justify-content: space-around;\n    "]))),e.between&&Object(v.b)(e.between)(u||(u=h(["\n      justify-content: space-between;\n    "]))))}));t.a=function(e){return f.a.createElement(g,e,e.children)}},nsSc:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return y}));var r,o,a=n("q1tI"),i=n.n(a),l=n("vOnD"),c=n("9Ayz");function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=l.e.div(r||(r=s(["\n  ","\n"])),(function(e){var t=e.theme,n=e.fullWidth;return Object(l.d)(o||(o=s(["\n    display: block;\n    background-color: ",";\n    border-radius: ",";\n    box-shadow: ",";\n    .tabs {\n      border-bottom: "," "," ",";\n      display: flex;\n      flex-direction: row;\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      ","\n\n      .tab {\n        cursor: pointer;\n        margin-bottom: -1px;\n        text-align: center;\n        position: relative;\n        &.active a::before {\n          display: block;\n        }\n        a {\n          background-color: ",";\n          padding: ",";\n          color: ",";\n          font-family: ",";\n          font-size: ",";\n          font-weight: ",";\n          line-height: ",";\n          text-transform: ",";\n          display: flex;\n          align-items: center;\n          position: relative;\n          text-decoration: none;\n\n          &::before {\n            display: none;\n            position: absolute;\n            content: '';\n            width: 100%;\n            border-radius: 3px;\n            bottom: -2px;\n            left: 0;\n            background-color: ",";\n            height: ",";\n          }\n          .tabs-icon {\n            vertical-align: middle;\n          }\n\n          .tabs-icon + span {\n            margin-",": 0.5rem;\n          }\n        }\n\n        &.active {\n          a {\n            background-color: ",";\n            color: ",";\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n        &:focus {\n          a {\n            background-color: ",";\n            color: ",";\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n\n        &:hover {\n          a {\n            color: ",";\n            background-color: ",";\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n        &.disabled {\n          & > * {\n            opacity: 0.5;\n          }\n          cursor: default;\n          pointer-events: none;\n          a {\n            background-color: ",";\n            color: ",";\n            cursor: default;\n            pointer-events: none;\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n\n        &.responsive {\n          @media screen and (max-width: ",") {\n            a span {\n              display: none;\n            }\n          }\n        }\n      }\n    }\n    .tab-content {\n      flex: 1;\n      -ms-flex: 1 1 auto;\n      overflow: auto;\n      background-color: ",";\n      color: ",";\n      font-family: ",";\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      padding: ",";\n      ","\n    }\n  "])),t.tabsetBackgroundColor,t.tabsetBorderRadius,t.tabsetShadow,t.tabsetDividerWidth,t.tabsetDividerStyle,t.tabsetDividerColor,n&&"justify-content: space-around;",t.tabsetTabBackgroundColor,t.tabsetTabPadding,t.tabsetTabTextColor,t.tabsetTabTextFontFamily,t.tabsetTabTextFontSize,t.tabsetTabTextFontWeight,t.tabsetTabTextLineHeight,t.tabsetTabTextTransform,t.tabsetTabUnderlineColor,t.tabsetTabUnderlineWidth,"rtl"===t.dir?"right":"left",t.tabsetTabActiveBackgroundColor,t.tabsetTabActiveTextColor,t.tabsetTabActiveUnderlineColor,t.tabsetTabFocusBackgroundColor,t.tabsetTabFocusTextColor,t.tabsetTabFocusUnderlineColor,t.tabsetTabHoverTextColor,t.tabsetTabHoverBackgroundColor,t.tabsetTabHoverUnderlineColor,t.tabsetTabDisabledBackgroundColor,t.tabsetTabDisabledTextColor,t.tabsetTabDisabledUnderlineColor,t.tabsetTabTextHideBreakpoint,t.tabsetContentBackgroundColor,t.tabsetContentTextColor,t.tabsetContentTextFontFamily,t.tabsetContentTextFontSize,t.tabsetContentTextFontWeight,t.tabsetContentTextLineHeight,t.tabsetContentPadding,Object(c.g)(t.tabsetScrollbarColor,t.tabsetScrollbarBackgroundColor,t.tabsetScrollbarWidth))})),d=n("n82m"),u=n("BgrJ");function p(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){return i.a.createElement("div",{className:"tab-content"},e.children)},w=function(e){var t,n=v(i.a.useState([]),2),r=n[0],o=n[1],a=v(i.a.useState(null!==(t=e.activeIndex)&&void 0!==t?t:0),2),l=a[0],c=a[1];return i.a.useEffect((function(){e.activeIndex&&c(e.activeIndex)}),[e.activeIndex]),i.a.useEffect((function(){var t=[];i.a.Children.forEach(e.children,(function(e){(e.props.icon||e.props.title)&&t.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props))})),o(t)}),[e.children]),i.a.createElement(b,{className:e.className,style:e.style,fullWidth:e.fullWidth},i.a.createElement("ul",{className:"tabs"},r.map((function(t,n){var r=["tab"];return n===l&&r.push("active"),t.responsive&&r.push("responsive"),t.disabled&&r.push("disabled"),t.className&&r.push.apply(r,p(t.className.split(" "))),i.a.createElement("li",{style:t.style,key:n,className:r.join(" "),onClick:function(){return!t.disabled&&function(t){"function"==typeof e.onSelect&&e.onSelect(t),c(t)}(n)}},i.a.createElement("a",null,t.icon&&i.a.createElement(u.c,{icon:t.icon,className:"tabs-icon"}),t.title&&i.a.createElement("span",null,t.title)),t.badge&&i.a.createElement(d.a,{status:t.badge.status,position:t.badge.position},t.badge.title))}))),i.a.Children.map(e.children,(function(e,t){if(t===l&&e.props.children)return e})))}},paqj:function(e,t,n){"use strict";n("ToJy");var r,o,a,i,l,c,s,b,d=n("q1tI"),u=n.n(d),p=n("vOnD"),f=n("rZKo");function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v=Object.keys(f.c),h=Object(p.d)(r||(r=m(["\n  ","\n"])),(function(e){var t=e.breakPoint,n=e.theme;return t&&Object.keys(t).sort((function(e,t){return v.indexOf(e)-v.indexOf(t)})).map((function(e){return"number"==typeof t[e]?Object(f.b)(e)(o||(o=m(["\n            flex: 0 0 ","%;\n            max-width: ","%;\n            display: block;"])),100/Object(f.e)(n)*t[e],100/Object(f.e)(n)*t[e]):t[e]?Object(f.b)(e)(a||(a=m(["\n            flex-grow: 1;\n            flex-basis: 0;\n            max-width: 100%;\n            display: block;"]))):Object(f.b)(e)(i||(i=m(["display: none;"])))}))})),g=Object(p.d)(l||(l=m(["\n  ","\n"])),(function(e){var t=e.offset,n=e.theme;return t&&Object.keys(t).map((function(e){return Object(f.b)(e)(c||(c=m(["\n          margin-",": \n          ","%;"])),"rtl"==n.dir?"right":"left",100/Object(f.e)(n)*t[e])}))})),y=p.e.div(s||(s=m(["\n  ","\n"])),(function(e){var t=e.theme,n=e.first,r=e.last,o=e.order;return Object(p.d)(b||(b=m(["\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ","px;\n  padding-left: ","px;\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),Object(f.d)(t)/2,Object(f.d)(t)/2,h,g,n&&"order: -1;",r&&"order: ".concat(Object(f.e)(t)+1,";"),o&&"order: ".concat(o,";"))}));t.a=function(e){return u.a.createElement(y,e,e.children)}}}]);
//# sourceMappingURL=component---src-pages-modal-overlays-popover-tsx-11d7d32ac37136d0cb83.js.map