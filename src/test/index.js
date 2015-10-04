var assert = require('chai').assert,
    moduleName = '../../dist/';

describe('Crockford tests', function () {
    it('Write a function that takes an argument and returns that argument.', function () {
        var solution = require(moduleName + 'q1');

        ['a', 'b', 'c'].forEach(function(arg) {
            assert.equal(solution(arg), arg);
        });
    });

    it('Write two binary functions, add and mul, that take two numbers and return their sum and product.', function () {
        var solution = require(moduleName + 'q2')();

        assert.equal(solution.add(3, 2), 5);
        assert.equal(solution.mul(2, 2), 4);
    });

    it('Write a function that takes an argument and returns a function that returns that argument', function () {
        var solution = require(moduleName + 'q3');

        ['plop', {}, 2].forEach(function (argument) {
            var returnedFunction = solution(argument);
            assert(returnedFunction(), argument);
        });
    });

    it('Write a function that adds from two invocations.', function () {
        var solution = require(moduleName + 'q4');
        assert.equal(solution(3)(5), 8);
    });

    it('Write a function that takes a binary function, and makes it callable with two invocations.', function () {
        var applyf = require(moduleName + 'q5');
        var calc = require(moduleName + 'q2')();
        var addf = applyf(calc.add);

        assert.equal(addf(3)(4), 7);
        assert.equal(applyf(calc.mul)(5)(6), 30);
    });
});


/*



 Write a function that takes a function and an argument, and returns a function that can supply a second argument.
 Without writing any new functions, show three ways to create the inc function. Using functions from the previous six problems.
 Write methodize, a function that converts a binary function to a method.
 Write demethodize, a function that converts a method into a binary function.
 Write a function twice that takes a binary function and returns a unary function, that passes it's argument to the binary function twice.
 Write a function composeu that takes two unary functions and returns a unary function that calls them both.
 Write a function composeb thst takes two binary functions and returns a function that calls them both.
 Write a function that allows another function to be only called once.
 Write a factory function that returns two functions that implement an up/down counter.
 Make a revocable function that takes a nice function and returns a revoke function that denies access to the nice function, and an invoke function that can invoke the nice function until it is revoked.
 */