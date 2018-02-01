describe("Util - Factorial", function() {
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
            n : 4,
            factorial : 24
        },     
    ];
   
    testCases.forEach(function(testCase) {
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function() {
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    })
});

describe("Util - Arrangement", function() {
    var testCases = [

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
            isPrime : false
        },
		{
            n : 4,
            isPrime : false
        },
        {
            n : 16,
            isPrime : false
        },

    ];

    testCases.forEach(function(testCase) {
        it("should returns " + testCase.isPrime + " when n = " + testCase.n, function() {
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.isPrime);
        })
    })
});

describe("SumPrime", function(){
    var testCases = [
        {
            n : 4,
            sumPrime : 5
        },
        {
            n : 12,
            sumPrime : 28
        },
        {
            n : 16,
            sumPrime : 41
        },
        {
            n : 20,
            sumPrime : 77
        },
    ];
	
	testCases.forEach(function(testCase) {
        it("should returns " + testCase.sumPrime + " when n = " + testCase.n, function() {
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.sumPrime);
        })
    })
});

describe("FizzBuzz", function(){

    var tab = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz"];
    it("should returns " + tab + " when n = 15", function() {
        var result = Util.fizzBuzz(15);
        expect(result).toEqual(tab);
    });
});

describe("Cipher", function(){
    var testCases = [
		{
            phrase : "Unitaire",
            cipher : "Vojubjsf"
        },
        {
            phrase : "france",
            cipher : "gsbodf"
        }
    ];
	
	testCases.forEach(function(testCase) {
        it("should returns " + testCase.cipher + " when phrase = " + testCase.phrase, function() {
            var result = Util.cipher(testCase.phrase);
            expect(result).toEqual(testCase.cipher);
        })
    })
});