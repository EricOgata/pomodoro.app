(this["webpackJsonppomodoro.app.front"]=this["webpackJsonppomodoro.app.front"]||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),r=t(4),o=t.n(r),s=(t(10),t(2)),c=t(1),u=t.n(c),m=(t(12),function(){var e=Object(i.useContext)(E),n=e.session,t=e.timer,r=Object(i.useState)({minutes:t.remainingTime.minutes().toString(),seconds:t.remainingTime.seconds().toString()}),o=Object(s.a)(r,2),c=o[0],m=o[1];function S(e,n){m({minutes:e,seconds:n})}return Object(i.useEffect)((function(){S(t.remainingTime.minutes().toString(),t.remainingTime.seconds().toString())}),[t]),function(e,n){var t=Object(i.useRef)();Object(i.useEffect)((function(){t.current=e}),[e]),Object(i.useEffect)((function(){var e=setInterval((function(){t.current()}),n);return function(){return clearInterval(e)}}),[n])}((function(){t.isRunning&&(t.remainingTime.asSeconds()>0?t.setRemainingTime(t.remainingTime.subtract(1,"seconds")):n.sessionType===O.WORKING_SESSION?(t.setRemainingTime(u.a.duration(5,"minutes")),n.setSessionType(O.RESTING_SESSION)):(t.setRemainingTime(u.a.duration(25,"minutes")),n.setSessionType(O.WORKING_SESSION)),S(t.remainingTime.minutes().toString(),t.remainingTime.seconds().toString()))}),1e3),a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"".concat(c.minutes,":").concat(c.seconds)))}),S=function(e){var n=e.onClick,t=e.children;return a.a.createElement("button",{onClick:n},t)},l=function(){var e=Object(i.useContext)(E).session;return a.a.createElement("h3",null,function(){switch(e.sessionType){case O.WORKING_SESSION:return"Working Session";case O.RESTING_SESSION:return"Resting Session";case O.LONG_RESTING_SESSION:return"Long Resting Session";default:return""}}())},E=a.a.createContext(null),O={WORKING_SESSION:"WORKING_SESSION",RESTING_SESSION:"RESTING_SESSION",LONG_RESTING_SESSION:"LONG_RESTING_SESSION"},f=function(){var e=Object(i.useState)(O.WORKING_SESSION),n=Object(s.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(!1),c=Object(s.a)(o,2),f=c[0],N=c[1],g=Object(i.useState)(u.a.duration(25,"minutes")),I=Object(s.a)(g,2),d=I[0],T=I[1],R=function(){var e=t===O.WORKING_SESSION?25:5;T(u.a.duration(e,"minutes"))};return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Pomodoro Timer"),a.a.createElement(E.Provider,{value:{session:{sessionType:t,setSessionType:r},timer:{remainingTime:d,setRemainingTime:T,isRunning:f,setIsRunning:N}}},a.a.createElement(m,null),a.a.createElement(l,null),a.a.createElement("div",null,a.a.createElement(S,{onClick:function(){return N(!0)}},"Start"),a.a.createElement(S,{onClick:function(){return N(!1)}},"Pause"),a.a.createElement(S,{onClick:R},"Restart"),a.a.createElement(S,{onClick:function(){N(!1),R()}},"Stop")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.5cf92bfb.chunk.js.map