define(function(require,exports,module){
var tpl = require("./a");
var XTemplateRuntime = require("xtemplate/runtime");
var instance = new XTemplateRuntime(tpl);
return function(){
return instance.render.apply(instance,arguments);
};
});