modulex.add(function(require,exports,module){
var tpl = require("./a");
var XTemplateRuntime = require("kg/xtemplate/1.2.4/runtime");
var instance = new XTemplateRuntime(tpl);
return function(){
return instance.render.apply(instance,arguments);
};
});