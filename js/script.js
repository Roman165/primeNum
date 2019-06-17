(function () {
	'use strict';
	
	var array = [1,2,4,9]

	function map(fn, array){

    var narr = [];
	for(var i=0; i<array.length; i++){
		narr.push(square(array[i]))

	}      
		return narr
	}
	// console.log(narr); 

	function square(x) { 

		return x * x; 

	} 

	console.log(array); 
	console.log(map(square, array)); 


})();

