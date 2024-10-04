const chai = await import('chai');
import { should } from 'chai';  // Using Should style
should();


//const expect = require('chai').expect;  >> This was not working
//To run tests: npm run test

describe('Expect Vs Should', function () {

    // const expect = chai.expect; — expect requires just a reference to the expect function.
    // const should = chai.should(); — whereas with the should require, see the function as being executed as we see here.

    //expect interface provides a function as a starting point for chaining language assertions. expect(a).to.be.equals(b);
    //Whereas should interface extends Object.Prototype to provide a single getter as the starting point for language assertions. a.should.be.equals(b);

    //Expect works on Node Js as well as in all browsers; 
    //but should works on Node Js and all modern browsers except Internet Explorer.

    it('Check existance of object using should', function () {

        // Given that should works by extending Object.Prototype there are some scenarios where should will not work.
        // For example, if we want to check the existence of an object, consider below code:

        //normal scenario:
        // function writeToAFile(error) {
        //     error.should.not.exist();
        // }

        //writeToAFile(1);

        //Above assertion will fail as expected if error value is '1'
        //If error is null or undefined, it will give error saying, "Cannot read property 'should' of undefined".
        // That means we cannot use this command if the value is null or undefined,
        //as undefined and null haven't been extended with the should chain starter.
        // In such cases, we need to order the should command as: should.not.exist(error);


        function writeToAFile1(error) {
            should().not.exist(error);
        }

        writeToAFile1(null);


    })

    //To run tests from terminal: npm run test test\chaiTest2.js


})

describe('Chai configurations', function () {

    it.only('Configurations', function () {

        //These are default values for conifgutations:

        //chai.config.showDiff = true; //configure whether or not the showDiff flag should be included in the thrown

        //chai.config.truncateThreshold = 40; //configuration sets length threshold for actual and expected values in assertion errors. 
        //If this threshold is exceeded, the value is truncated.

        //chai.config.includeStack = false; //configure stack trace is included in Assertion error message. 

        chai.config.showDiff = false; // turn off reporter diff display
        chai.config.truncateThreshold = 0; // disable truncating
        chai.config.includeStack = true; // turn on stack trace

        var a = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 3
                }
            }
        };

        var b = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 4
                }
            }
        };
        a.should.deep.equal(b);
    });
});








