var arr = [];

function isPalindrome(str, mul) {
	return str.split("").reverse().join("");
}

function activate() {
	for(var i=999; i>=0; i--) {
		for(var j=999; j>=0; j--) {
			if((i*j).toString() == isPalindrome((i*j).toString())) {
        arr.push(i*j);
			}
		}
	}
}

activate();
document.getElementById("result").innerHTML =
Math.max.apply(Math, arr);
