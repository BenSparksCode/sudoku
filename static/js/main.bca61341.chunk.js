(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{14:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(7),c=r.n(n),l=(r(14),r(1)),i=r(2),u=r(3),s=r(4),d=r.n(s),f=function e(t){if(v(t))return{board:t,solved:!0};for(var r,a,o=!1,n=0;n<9&&!o;n++)for(var c=0;c<9;c++)if(0===t[n][c]){r=n,a=c,o=!0;break}for(var i=m(t,r,a),u=0;u<9;u++)if(0!==i[u]){t[r][a]=u+1;for(var s=[],d=0;d<9;d++)s.push(Object(l.a)(t[d]));var f=e(s);if(f.solved)return f}return t[r][a]=0,{board:t,solved:!1}},v=function(e){for(var t=0;t<e.length;t++)if(e[t].some((function(e){return 0===e})))return!1;return!0},m=function(e,t,r){for(var a=new Array(9).fill(1),o=0;o<9;o++)0!==e[t][o]&&(a[e[t][o]-1]=0);for(var n=0;n<9;n++)0!==e[n][r]&&0!==a[e[n][r]-1]&&(a[e[n][r]-1]=0);for(var c=3*Math.ceil((t+.001)/3),l=3*Math.ceil((r+.001)/3),i=c-3;i<c;i++)for(var u=l-3;u<l;u++)0!==e[i][u]&&0!==a[e[i][u]-1]&&(a[e[i][u]-1]=0);return a},b=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[r],e[r]=a}},g=Object(a.createContext)(),k=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],w={initialBoard:k,workingBoard:k,difficulty:9,solved:!1},E=function(e){var t=Object(a.useState)(w),r=Object(u.a)(t,2),n=r[0],c=r[1],s=function(e){c(Object(i.a)({},n,{},{workingBoard:e}))};return o.a.createElement(g.Provider,{value:{sudokuState:n,changeCellValue:function(e,t,r){var a=Object(l.a)(n.workingBoard);a[e-1][t-1]=r,s(a)},generateNewBoard:function(){for(var e=function(e){var t=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],r=[1,2,3,4,5,6,7,8,9];b(r);for(var a=0;a<3;a++)for(var o=0;o<3;o++)t[a][o]=r[3*a+o];b(r);for(var n=0;n<3;n++)for(var c=0;c<3;c++)t[3+n][3+c]=r[3*n+c];b(r);for(var l=0;l<3;l++)for(var i=0;i<3;i++)t[6+l][6+i]=r[3*l+i];t=f(t).board;for(var u=1;u<82;u++)r[u]=u;b(r);for(var s=0,d=0,v=0;v<e;v++)s=Math.ceil(r[v]/9)-1,d=r[v]%9,t[s][d]=0;return t}(n.difficulty),t=[],r=0;r<9;r++)t.push(Object(l.a)(e[r]));c(Object(i.a)({},n,{},{initialBoard:e,workingBoard:t,solved:!1}))},solveBoard:function(){for(var e=[],t=0;t<9;t++)e.push(Object(l.a)(n.workingBoard[t]));var r=f(e);r.solved?c(Object(i.a)({},n,{},{solved:!0,workingBoard:r.board})):s(r.board)},checkSolution:function(){for(var e=[],t=0;t<9;t++)e.push(Object(l.a)(n.workingBoard[t]));(function(e){for(var t=JSON.stringify([1,2,3,4,5,6,7,8,9]),r=0;r<9;r++)if(JSON.stringify(Object(l.a)(e[r]).sort())!==t)return console.log(JSON.stringify(Object(l.a)(e[r]).sort())),console.log(t),console.log("Failed on row ",r),!1;for(var a=function(r){var a=e.map((function(e){return e[r]}));if(JSON.stringify(a.sort())!==t)return console.log(JSON.stringify(a.sort())),console.log(t),console.log("Failed on col ",r),{v:!1}},o=0;o<9;o++){var n=a(o);if("object"===typeof n)return n.v}for(var c=0;c<9;c++){for(var i=[],u=0;u<3;u++)for(var s=0;s<3;s++)i.push(e[u+3*Math.floor(c/3)][s+c%3*3]);if(JSON.stringify(i.sort())!==t)return console.log(JSON.stringify(i.tempGrid())),console.log(t),console.log("Failed on subgrid ",c),!1}return!0})(e)?(c(Object(i.a)({},n,{},{solved:!0})),d()({text:"Correct!",duration:2e3,newWindow:!0,close:!1,gravity:"top",position:"center",backgroundColor:"green"}).showToast()):(c(Object(i.a)({},n,{},{solved:!1})),d()({text:"Wrong, try again.",duration:2e3,newWindow:!0,close:!1,gravity:"top",position:"center",backgroundColor:"red"}).showToast())},setDifficulty:function(e){c(Object(i.a)({},n,{},{difficulty:e}))}}},e.children)},h=function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"Sudoku"))},p=function(e){var t=e.row,r=e.col,n=e.value,c=Object(a.useContext)(g),l=c.sudokuState,i=c.changeCellValue,u=0===l.initialBoard[t-1][r-1];return u?o.a.createElement("div",{onKeyPress:function(e){return function(e){var a=e.key;a.match("^[0-9]$")&&i(t,r,parseInt(a))}(e)},tabIndex:0,className:"editable sudoku-square"},0===n?"":n):o.a.createElement("div",{tabIndex:0,className:"uneditable sudoku-square"},0===n?"":n)},N=function(e){var t,r=e.gridNum,n=Object(a.useContext)(g).sudokuState,c=n.workingBoard,l=n.solved,i=[1,2,3].map((function(e){return e+3*Math.floor(r/3-.01)}));return t=r%3===0?[7,8,9]:[1,2,3].map((function(e){return e+3*(r%3-1)})),o.a.createElement("div",{className:l?"sudoku-subgrid-solved":"sudoku-subgrid"},o.a.createElement("div",{className:"sudoku-subgrid-row"},t.map((function(e){return o.a.createElement(p,{row:i[0],col:e,value:c[i[0]-1][e-1]})}))),o.a.createElement("div",{className:"sudoku-subgrid-row"},t.map((function(e){return o.a.createElement(p,{row:i[1],col:e,value:c[i[1]-1][e-1]})}))),o.a.createElement("div",{className:"sudoku-subgrid-row"},t.map((function(e){return o.a.createElement(p,{row:i[2],col:e,value:c[i[2]-1][e-1]})}))))},O=function(){var e=Object(a.useContext)(g).sudokuState.solved,t=[1,2,3,4,5,6,7,8,9];return o.a.createElement("div",{className:(e?"solved":"unsolved")+" sudoku-board"},o.a.createElement("div",{className:"sudoku-board-row"},t.slice(0,3).map((function(e){return o.a.createElement(N,{gridNum:e})}))),o.a.createElement("div",{className:"sudoku-board-row"},t.slice(3,6).map((function(e){return o.a.createElement(N,{gridNum:e})}))),o.a.createElement("div",{className:"sudoku-board-row"},t.slice(6,9).map((function(e){return o.a.createElement(N,{gridNum:e})}))))},y=r(8),j=function(){var e=Object(a.useContext)(g),t=e.sudokuState,r=e.generateNewBoard,n=e.solveBoard,c=e.checkSolution,l=e.setDifficulty,i=t.difficulty,s=Object(a.useState)(!1),d=Object(u.a)(s,2),f=d[0],v=d[1];return o.a.createElement("div",{className:"all-controls"},o.a.createElement("div",{className:"controls-container"},o.a.createElement("button",{className:"btn btn-new",onClick:r},"New"),o.a.createElement("button",{className:"btn btn-solve",onClick:n},"Solve"),o.a.createElement("button",{className:"btn btn-check",onClick:c},"Check")),o.a.createElement("div",{className:"control-options-container"},o.a.createElement("button",{className:"btn ",onClick:function(){v(!f)}}," Settings \u25be "),o.a.createElement(y.Collapse,{isOpened:f},o.a.createElement("div",{className:"slider-container"},o.a.createElement("p",null,"Difficulty: ",Math.floor((i-8)/56*100),"%"),o.a.createElement("input",{type:"range",min:"9",max:"64",value:i,class:"slider",id:"myRange",onChange:function(e){return function(e){l(e.target.value)}(e)}})))))};var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(E,null,o.a.createElement(O,null),o.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,r){e.exports=r(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.bca61341.chunk.js.map