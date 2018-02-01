describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })

    it("should raise an exception for n > 100", function(){
        var f = function(){
            Util.factorial(101);
        }
        expect(f).toThrow('Unable to compute factorial for n > 100');
    })
});

describe("Util - Arrangement", function() {
    var testCases = [
        {
			r : 0,
            n : 0,
			arrangement : -9999
        },
        {
			r : 0,
            n : 1,
			arrangement : 1
        },
        {
			r : 1,
            n : 2,
			arrangement : 2
        },
        {
			r : 2,
            n : 4,
			arrangement : 12
        },
        {
			r : 3,
            n : 4,
			arrangement : 24
        }
    ];
   
    testCases.forEach(function(testCase) {
        it("should returns " + testCase.arrangement + " when n = " + testCase.n + " and r = " + testCase.r, function() {
            var result = Util.arrangement(testCase.n, testCase.r);
            expect(result).toEqual(testCase.arrangement);
        })
    })
});

describe("Util - Combination", function() {
    var testCases = [
        {
			r : 0,
            n : 0,
			combination : 1
        },
        {
			r : 0,
            n : 1,
			combination : 1
        },
        {
			r : 1,
            n : 2,
			combination : 2
        },
        {
			r : 2,
            n : 4,
			combination : 6
        },
        {
			r : 3,
            n : 4,
			combination : 4
        }
    ];
   
	//n! / (n - r)!r!
	//24/0*1
   
    testCases.forEach(function(testCase) {
        it("should returns " + testCase.combination + " when n = " + testCase.n + " and r = " + testCase.r, function() {
            var result = Util.combination(testCase.n, testCase.r);
            expect(result).toEqual(testCase.combination);
        })
    })
});

describe("IsPrime", function(){
    var testCases = [
        {
            n : 0,
            prime : true
        },
        {
            n : 5,
            prime : false
        },
        {
            n : 10,
            prime : true
        },
        {
            n : 15,
            prime : true
        },
        {
            n : 20,
            prime : false
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.prime + " when n = " + testCase.n, function(){
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.prime);
        })

    })
});

describe("SumPrime", function(){
    var testCases = [
        {
            n : 0,
            smprime : 0
        },
        {
            n : 5,
            smprime : 12
        },
        {
            n : 10,
            smprime : 24
        },
        {
            n : 15,
            smprime : 50
        },
        {
            n : 20,
            smprime : 57
        },
        {
            n : 25,
            smprime : 45
        },
        {
            n : 30,
            smprime : 60
        },
        {
            n : 35,
            smprime : 180
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.smprime + " when n = " + testCase.n, function(){
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.smprime);
        })

    })
});

describe("FizzBuzz", function(){
    var testCases = [
        {
            n : 15,
            fb : [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.fb + " when n = " + testCase.n, function(){
            var result = Util.fizzBuzz(testCase.n);
            expect(result).toEqual(testCase.fb);
        })

    })
});

describe("Cipher", function(){
    var testCases = [
        {
            text : "Test Unitaire",
            res : "Uftu Vojubjsf"
        },
        {
            phrase : "un fils",
            cipher : "vo gjmt"
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.res + " when text = " + testCase.text, function(){
            var result = Util.cipher(testCase.text);
            expect(result).toEqual(testCase.res);
        })

    })
});