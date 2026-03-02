var slugify = require('slugify');

let a = slugify('some string') // some string 
console.log(a);
// slugify comvert some string -> some_string

const b = slugify('some string','_');
console.log(b);

const c = slugify('some st&&(*shah)', '_');
console.log(c);