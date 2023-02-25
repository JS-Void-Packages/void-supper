# void-supper
add title method from python to JS.
## Example :
```js
const { upper, sUpper, aUpper } = require('void-supper');

let text = 'hello there';
let text1 = 'insert_text_here';

// convert hello there into Hello There
console.log(upper(text));

// convert insert_text_here into Insert Text Here
console.log(upper(text1));

// convert hello there into Hello there
console.log(sUpper(text));

// convert hello there into hello There
console.log(aUpper(text, 1));
```