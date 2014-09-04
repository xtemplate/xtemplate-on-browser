KISSY.add(function(S,require,exports,module){
var tpl = require("./b");
var XTemplateRuntime = require("kg/xtemplate/1.3.0/runtime");
var instance = new XTemplateRuntime(tpl);
return function(){
return instance.render.apply(instance,arguments);
};
});