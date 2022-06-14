import sumValues from "/assets/modules/test-module.js"

let h1 = document.getElementById('result');
let result = sumValues(12, 7)

h1.innerText = result;

console.log(result);
