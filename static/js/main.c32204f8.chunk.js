(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),i=c.n(n),a=c(18),r=c.n(a),o=(c(53),c(7)),l=(c(54),c(55),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("f1db8cc6d7b9448b8f241c9ba7c4368e","&redirect_uri=").concat("https://sameermohdmomin.github.io/Spotify-clone/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var j=function(){return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("img",{src:"https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif",alt:"logo"}),Object(s.jsx)("a",{href:l,children:"LOGIN WITH SPOTIFY"})]})},d=c(29),b=c.n(d);c(56),c(57);var u=function(e){var t=e.title,c=e.Icon;return Object(s.jsxs)("div",{className:"sidebarOption",children:[c&&Object(s.jsx)(c,{className:"sidebaroption_icon"}),c?Object(s.jsxs)("h4",{children:[t," "]}):Object(s.jsx)("p",{children:t})]})},O=Object(n.createContext)(),h=function(e){var t=e.initialState,c=e.reducer,i=e.children;return Object(s.jsx)(O.Provider,{value:Object(n.useReducer)(c,t),children:i})},m=function(){return Object(n.useContext)(O)},x=c(30),f=c.n(x),p=c(21),v=c.n(p),g=c(33),y=c.n(g);var _=function(){var e,t=m(),c=Object(o.a)(t,2),n=c[0].playlists;return c[1],Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("img",{src:"https://imgix.bustle.com/uploads/image/2018/10/5/32a337c4-a6e9-4c0e-b512-010bb98e0049-spotify-logo.png?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70",className:"logo"}),Object(s.jsx)(u,{Icon:f.a,title:"Home"}),Object(s.jsx)(u,{Icon:v.a,title:"Search"}),Object(s.jsx)(u,{Icon:y.a,title:"Your Labrary"}),Object(s.jsx)("div",{className:"playlist",children:"PLAYLISTS"}),Object(s.jsx)("hr",{}),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return Object(s.jsx)(u,{title:e.name})}))]})},N=(c(63),c(64),c(82));var S=function(){var e,t=m(),c=Object(o.a)(t,2),n=c[0].user;return c[1],Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)("div",{className:"header_left",children:[Object(s.jsx)(v.a,{}),Object(s.jsx)("input",{type:"text",placeholder:"Search Album, Songs And Artist"})]}),Object(s.jsxs)("div",{className:"header_right",children:[Object(s.jsx)(N.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:null===n||void 0===n?void 0:n.display_name}),Object(s.jsx)("h4",{children:null===n||void 0===n?void 0:n.display_name})]})]})},E=c(34),k=c.n(E),w=c(36),T=c.n(w),I=c(35),L=c.n(I);c(65);var P=function(e){var t=e.track;return Object(s.jsxs)("div",{className:"songrow",children:[Object(s.jsx)("img",{className:"songrow_album",src:t.album.images[0].url,alt:""}),Object(s.jsxs)("div",{className:"songrow_info",children:[Object(s.jsx)("h1",{children:t.name}),Object(s.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})};var A=function(e){var t=e.spotify,c=m(),n=Object(o.a)(c,2),i=n[0].discover_weekly;return n[1],Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)(S,{spotify:t}),Object(s.jsxs)("div",{className:"body_info",children:[Object(s.jsx)("img",{className:"discover",src:null===i||void 0===i?void 0:i.images[0].url,alt:"discover weekly"}),Object(s.jsxs)("div",{className:"body_info_text",children:[Object(s.jsx)("strong",{children:"PLAYLIST"}),Object(s.jsx)("h2",{children:"DISCOVER WEEKLY"}),Object(s.jsx)("p",{children:null===i||void 0===i?void 0:i.description})]})]}),Object(s.jsxs)("div",{className:"body_songs",children:[Object(s.jsxs)("div",{className:"body_icons",children:[Object(s.jsx)(k.a,{fontSize:"large",className:"body_shuffle"}),Object(s.jsx)(L.a,{}),Object(s.jsx)(T.a,{})]}),null===i||void 0===i?void 0:i.tracks.items.map((function(e){return Object(s.jsx)(P,{track:e.track})}))]})]})},C=(c(66),c(39)),R=c.n(C),Y=c(38),D=c.n(Y),F=c(40),z=c.n(F),K=c(37),U=c.n(K),W=c(41),V=c.n(W),B=c(80),H=c(81),J=c(43),M=c.n(J),Q=c(42),X=c.n(Q);var q=function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("div",{className:"footer_left",children:[Object(s.jsx)("img",{className:"album_logo",src:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/03/honey-singh-1584262330.jpg"}),Object(s.jsx)("p",{children:"Album and song"})]}),Object(s.jsxs)("div",{className:"footer_center",children:[Object(s.jsx)(U.a,{className:"footer_green"}),Object(s.jsx)(D.a,{className:"footer_icon"}),Object(s.jsx)(R.a,{fontSize:"large",className:"footer_icon"}),Object(s.jsx)(z.a,{className:"footer_icon"}),Object(s.jsx)(V.a,{className:"footer_green"})]}),Object(s.jsx)("div",{className:"footer_right",children:Object(s.jsxs)(B.a,{container:!0,spacing:2,children:[Object(s.jsx)(B.a,{item:!0,children:Object(s.jsx)(X.a,{})}),Object(s.jsx)(B.a,{item:!0,children:Object(s.jsx)(M.a,{})}),Object(s.jsx)(B.a,{item:!0,xs:!0,children:Object(s.jsx)(H.a,{})})]})})]})};c(67);var G=function(e){var t=e.spotify;return Object(s.jsxs)("div",{className:"player",children:[Object(s.jsxs)("div",{className:"player_body",children:[Object(s.jsx)(_,{}),Object(s.jsx)(A,{spotify:t})]}),Object(s.jsx)(q,{})]})},Z=new b.a;var $=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],i=t[1],a=m(),r=Object(o.a)(a,2),l=r[0].user,d=r[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(d({type:"SET_TOKEN",token:t}),i(t),Z.setAccessToken(t),Z.getMe().then((function(e){d({type:"SET_USER",user:e})})),Z.getUserPlaylists().then((function(e){d({type:"SET_PLAYLISTS",playlists:e})})),Z.getPlaylist("37i9dQZF1DX8xfQRRX1PDm").then((function(e){return d({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})}))),console.log("i have a token",c)}),[]),console.log("hello",l),console.log("hey",c),Object(s.jsx)("div",{className:"App",children:c?Object(s.jsx)(G,{spotify:Z}):Object(s.jsx)(j,{})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))},te=c(11),ce=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(te.a)(Object(te.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(te.a)(Object(te.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(te.a)(Object(te.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(h,{initialState:{user:null,playlists:[],playing:!1,item:null,token:null},reducer:ce,children:Object(s.jsx)($,{})})}),document.getElementById("root")),ee()}},[[68,1,2]]]);
//# sourceMappingURL=main.c32204f8.chunk.js.map