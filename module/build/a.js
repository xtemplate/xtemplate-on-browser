modulex.add(function(require,exports,module){
module.exports = function a(scope,buffer,undefined){
var tpl = this;var pos = tpl.pos = {line:1, col:1};
var nativeCommands = tpl.root.nativeCommands;
var utils = tpl.root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
buffer.append('');
var id0 = scope.resolve(["x"]);
buffer.writeEscaped(id0);
buffer.append('');
var option1 = {escape: 1};
var params2 = [];
params2.push('./b');
option1.params = params2;
require("./b");
var callRet3
pos.line = 1; pos.col = 15;
callRet3 = includeCommand.call(tpl, scope, option1, buffer);
if(callRet3 && callRet3.isBuffer){
buffer = callRet3;
callRet3 = undefined;
}
buffer.writeEscaped(callRet3);
return buffer;
};
module.exports.TPL_NAME = module.name;
});