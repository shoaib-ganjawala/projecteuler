function primeFactors(n) {
    // Print the number of 2s that divide n
    while (n%2 === 0) {
      n /= 2;
    }

    // n must be odd at this point.  So we can skip
    // one element (Note i = i +2)
    for (var i = 3; i <= Math.sqrt(n); i = i+2) {
        // While i divides n, print i and divide n
        while (n%i === 0) {
            n /= i;
        }
    }

    // This condition is to handle the case when n
    // is a prime number greater than 2
    if (n > 2)
    	result = n;
}

var result = 0;
primeFactors(600851475143);

document.getElementById("result").innerHTML = result;
