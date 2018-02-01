Util = {};

/**
 * Calcule la factorielle d'un nombre n. Exp : 5! = 5 * 4 * 3 * 2 * 1
 * @param {number} n
 * @returns {number}
 */
Util.factorial = function(n) {
	if (0 === n)
		return 1;
	
	return n * Util.factorial(n-1);
};

/**
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.arrangement = function(n, r) {
	if (n - r === 0)
		return -9999;
	
	return Util.factorial(n) / Util.factorial(n - r);
};

/**
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.combination = function(n, r) {
	var dividende = (Util.factorial(n - r)*Util.factorial(r));
	if (dividende === 0)
		return -9999;
	
	return Util.factorial(n) / dividende;
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
    if(n < 2)
        return false;
    if(n == 2)
        return true;
	
    for(var i = 2; i < n; ++i) {
        if(n % i === 0)
            return false;
    }
	return true;
};


/**
 * Additionne l'ensemble des nombres de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
    var r = 0;
	if (n < 2)
		return -9999;

    for (var i = 2; i < n; ++i) {
        if(Util.isPrime(i))
            r += i;
    }
    return r;
};


/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
	var r, fizz, buzz, tab;
	/*if (n%3 === 0)
		fizz = true;
	if (n%5 === 0)
		buzz = true;
	
	if (fizz)
		r = "Fizz";
	if (buzz)
		r += "Buzz";*/
	
	tab = [];
    for (var i = 1; i < n+1 ; ++i) {
		r = "", fizz = false, buzz = false;
		if (i%3 === 0)
			fizz = true;
		if (i%5 === 0)
			buzz = true;
		
		if (fizz)
			r = "Fizz";
		if (buzz)
			r += "Buzz";
		if (!fizz && !buzz)
			r = i;
        tab.push(r);
	}
	
	return tab;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
	var r = "";
	for (var i = 0; i < phrase.length; ++i)
		r += String.fromCharCode(phrase.charCodeAt(i)+1);
	
	return r;
};