import tpl from './include/parent.xtpl';

import Xtemplate from 'xtemplate-runtime';

console.log(new Xtemplate(tpl).render({
  x:1
}));

console.log('-----------------');

import tpl2 from './extend/page.xtpl';

console.log(new Xtemplate(tpl2).render({
  x:2
}));
