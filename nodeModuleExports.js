var nodeFuncExpr = require('./nodeFunctionExpression');
var nodeMultiExports = require('./nodeModuleMultiExports');

nodeFuncExpr.sayHi();

nodeFuncExpr.sayBye();

console.log(nodeMultiExports.counter(['1', '2', '5']));
console.log(nodeMultiExports.adder(1,2));
console.log(nodeMultiExports.pi);
console.log(nodeMultiExports.subtracter(4,1));
