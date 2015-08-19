function log () {

	var args = Array.prototype.slice.call(arguments);
	console.log.apply(console, args);	
	// return args;

}

// var my_object = {
//     '0': 'zero',
//     '1': 'one',
//     '2': 'two',
//     '3': 'three',
//     '4': 'four',
//     length: 5
// };
// var sliced = Array.prototype.slice.call(my_object, my_object);

// console.log(sliced);

var a = [1,{"one":1},2,3,4,5,6];

// console.log(a);