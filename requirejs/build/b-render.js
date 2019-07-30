/* eslint-disable */
define(function(require,exports,module){
/*compiled by xtemplate#*/
var tpl = require("./b");
var XTemplateRuntime = require("xtemplate-runtime");
XTemplateRuntime=XTemplateRuntime.default || XTemplateRuntime;
var instance = new XTemplateRuntime(tpl);
module.exports = function(){
return instance.render.apply(instance,arguments);
};
});