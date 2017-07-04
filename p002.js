var array = [1];
var sum = 0;
for (var i = 0; i < 100000000; i++) {
	var value = array[i] + ((array[i-1] != undefined) ? array[i-1] : 1);
	if(value > 4000000)
   	break;
  array.push(value);
  sum += (value%2 === 0) ? value : 0;
}
document.getElementById("result").innerHTML = sum;
