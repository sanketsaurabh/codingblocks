//scopes

//1. let

let y=20;

if(true){
	y=30
	console.log(y); // o/p:30
}
console.log(y); // o/p:30

//2. const

const b = 20;

if(true){
	const b=30;
	console.log(b); // o/p:30
}
console.log(b); // o/p:20

//3. var

var p = 20;

if(true){
	var p=30;
	console.log(p); // o/p:30
}
console.log(p); // o/p:30


//--------------HOF

function fun(){
	console.log('inside fun');
	let x = 0;
	function innerFun(){
		x++;
	console.log(x);

	}
	return innerFun;
}

let f = fun();
f();