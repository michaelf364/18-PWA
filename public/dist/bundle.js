!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){var t,o=[];function r(e){var n,t,o,r;(window.indexedDB||(console.log("Your browser doesn't support a stable version of IndexedDB."),0))&&(n="transactions",t="TransactionStore",o="add",r=e,new Promise((function(e){var c,a,u,i=window.indexedDB.open(n,2);i.onupgradeneeded=function(){i.result.createObjectStore(t,{keyPath:"_id",autoIncrement:!0})},i.onerror=function(){console.log("There was an error")},i.onsuccess=function(){if(c=i.result,a=c.transaction(t,"readwrite"),u=a.objectStore(t),c.onerror=function(){console.log("error")},"put"===o)u.put(r);else if("get"===o){var n=u.getAll();n.onsuccess=function(){e(n.result)}}else if("delete"===o)u.delete(r._id);else if("add"===o){console.log(u,r);var l=u.add(r);l.onsuccess=function(e){console.log("success",e)},l.onerror=function(e){console.log("error",e)}}a.oncomplete=function(){c.close()}}}))).then((function(){console.log("added to DB")}))}function c(){var e=o.reduce((function(e,n){return e+parseInt(n.value)}),0);document.querySelector("#total").textContent=e}function a(){var e=document.querySelector("#tbody");e.innerHTML="",o.forEach((function(n){var t=document.createElement("tr");t.innerHTML="\n      <td>".concat(n.name,"</td>\n      <td>").concat(n.value,"</td>\n    "),e.appendChild(t)}))}function u(){var e=o.slice().reverse(),n=0,r=e.map((function(e){var n=new Date(e.date);return"".concat(n.getMonth()+1,"/").concat(n.getDate(),"/").concat(n.getFullYear())})),c=e.map((function(e){return n+=parseInt(e.value)}));t&&t.destroy();var a=document.getElementById("myChart").getContext("2d");t=new Chart(a,{type:"line",data:{labels:r,datasets:[{label:"Total Over Time",fill:!0,backgroundColor:"#6666ff",data:c}]}})}function i(e){var n=document.querySelector("#t-name"),t=document.querySelector("#t-amount"),i=document.querySelector(".form .error");if(""!==n.value&&""!==t.value){i.textContent="";var l={name:n.value,value:t.value,date:(new Date).toISOString()};e||(l.value*=-1),o.unshift(l),u(),a(),c(),fetch("/api/transaction",{method:"POST",body:JSON.stringify(l),headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.errors?i.textContent="Missing Information":(n.value="",t.value="")})).catch((function(){r(l),n.value="",t.value=""}))}else i.textContent="Missing Information"}fetch("/api/transaction").then((function(e){return e.json()})).then((function(e){o=e,c(),a(),u()})),document.querySelector("#add-btn").onclick=function(){i(!0)},document.querySelector("#sub-btn").onclick=function(){i(!1)}}]);