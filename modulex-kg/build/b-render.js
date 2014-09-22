modulex.add(function(require,exports,module){
var tpl = require("./b");
var XTemplateRuntime = require("kg/xtemplate/3.0.1/runtime");
var instance = new XTemplateRuntime(tpl);
return function(){
return instance.render.apply(instance,arguments);
};
});