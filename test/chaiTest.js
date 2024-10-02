import { expect } from 'chai'  //To make this work: Add  "type":"module", in package.json
import { should } from 'chai';  // Using Should style
should();
import { assert } from 'chai'



//const expect = require('chai').expect;  >> This was not working
//To run tests: npm run test

describe('Chai Expect', function () {
    it('a equals b', function () {
        let a = 1, b = 1;
        //expect(a).to.be.equals(b);
        expect(a).to.be.equals(b, "a and b are not equal");


    })

    it('validate whether a specific input is an object, or a String, or a number, or a Boolean', function () {

        function myObj() {
            return {
                a: 100,
                b: 'Hello'
            }
        }

        const x = new myObj();
        //const y = new myObj();

        const y = 4;
        //expect(y).to.be.an('object');  >>This will fail if y is not an object

        //expect(x).to.be.an('object');

        //x.a = 3;
        //expect(x).to.be.equals(y, 'x and y are not equal'); >> This will fail if x.a value is changed.


        //expect(x).to.be.deep.equals(y, 'x and y are not equal');



        //expect(x).to.be.an('object').and.to.be.deep.equals(y);


        //arrays
        let numbers = [1, 2, 4, 0];
        expect(numbers).to.be.an('array').that.includes(3);






    })

})

describe('Chai Should', function () {
    it('a equals b', function () {
        let a = 1, b = 1;

        a.should.be.equals(b);

    })

    it('validate whether a specific input is an object, or a String, or a number, or a Boolean', function () {

        function myObj() {
            return {
                a: 100,
                b: 'Hello'
            }
        }

        const x = new myObj();
        const y = new myObj();

        //const x = 4;
        //const y = 4;
        //x.a = 3;

        //should – object comparison with deep.equal or deep.equals
        //x.should.be.deep.equals(y, 'x and y are not equal');

        //should - chaining expressions
        //(x).should.be.an('object').and.to.be.deep.equals(y);



        //arrays
        let numbers = [1, 2, 3, 0];
        //should - arrays
        (numbers).should.be.an('array').that.includes(3);


    })


})

describe('Chai Assert', function () {
    it('a equals b', function () {
        let a = 1, b = 1;

        //assert – simple comparison
        assert.equal(a, b, "a and b are not equal");

    })

    it.only('validate whether a specific input is an object, or a String, or a number, or a Boolean', function () {

        function myObj() {
            return {
                a: 100,
                b: 'Hello'
            }
        }

        const x = new myObj();
        //const y = new myObj();

        //const x = 4;
        //const y = 4;
        //x.a = 3;

        //assert – object comparision
        //assert.deepEqual(x, y, "x and y are not equal");



        //arrays
        let numbers = [1, 2, 3, 0];
        //assert – arrays
        assert.isArray(numbers, 'numbers is not an array');
    })

})
