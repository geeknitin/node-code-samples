var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}

module.exports.adder = function(a, b){
    return `The sum of two numbers is ${a+b}`;
}

var subtracter = function(a,b){
    return `The difference of two numbers is ${a-b}`;
}

var pi = 3.142;

module.exports.counter = counter;
module.exports.pi = pi;


//works tested
// module.exports = {
//      subtracter
// }

//works tested
// module.exports = {
//     subtracter: subtracter
// }
