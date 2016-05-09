var Xtemplate = require('xtemplate/lib/runtime');
document.getElementById('result').innerHTML = new Xtemplate(require('./xtpl/a.xtpl')).render({
  x: 1,
  y: 2,
  arr: [1, 2, 3, 4, 5, 6, 7,12],
});