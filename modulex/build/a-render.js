define(function(require,exports,module){
/*compiled by xtemplate#*/
var tpl = require("./a");
var XTemplateRuntime = require("xtemplate/4.3.0/runtime");
var instance = new XTemplateRuntime(tpl);
module.exports = function(){
return instance.render.apply(instance,arguments);
};
});