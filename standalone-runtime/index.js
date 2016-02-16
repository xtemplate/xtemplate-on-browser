var Xtemplate = require('xtemplate/lib/runtime');
document.getElementById('result').innerHTML = new Xtemplate(require('./xtpl/a.xtpl')).render({
  x: 1,
  y: 2
});