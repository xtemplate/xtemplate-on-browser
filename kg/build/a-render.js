define(function(require,exports,module){
/*compiled by xtemplate#3.3.1*/
var tpl = require("./a");
var XTemplateRuntime = require("kg/xtemplate/3.3.1/runtime");
var instance = new XTemplateRuntime(tpl);
module.exports = function(){
return instance.render.apply(instance,arguments);
};
});