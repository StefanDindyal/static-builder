// function log () {

// 	var args = Array.prototype.slice.call(arguments);
// 	console.log.apply(console, args);
// 	return false;
	// return args;

// }

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

// var a = [1,{"one":1},2,3,4,5,6];

// console.log(a);

// function app(){
// 	return "Hello World!";
// }

function App(){
	this.list = {};
}

App.prototype.put = function(key, value){
	this.list[key] = value;
}

App.prototype.show = function(){
	return this.list;
}

var app = new App();

app.put("person","stefan");
app.put("age",12);
app.put(12,1234);

console.log(app.show());