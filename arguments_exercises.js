function sum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(x,y){
    return x + y;
  });
}

// console.log(sum(1,2,3,4));

Function.prototype.myBind = function (obj) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments).slice(1);
  return function() {
    return fn.apply(obj, args);
  };
};
//
// function Cat(name) {
//   this.name = name;
//   this.addHello = function(n, n2, n3) {
//     return "Hello, " + this.name + n + n2 + n3;
//   };
// }
//
// var cat = new Cat("Markov");
//
// var test = cat.addHello.myBind(cat, "!","1","t");
//
// console.log(test());

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum (num) {
    numbers.push(num);
    if(numbers.length === numArgs) {
      return numbers.reduce(function(x,y){
        return x + y;
      });
    }
    else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// var sum = curriedSum(3);
// console.log(sum(1)(3)(5));

Function.prototype.curry = function (numArgs) {
  var args = [];
  var that = this;

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6);

console.log(sumThree.curry(3)(4)(20)(6));
