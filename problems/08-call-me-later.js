// Your code here

class CallCenter{
	constructor(name){
		this.name = name;

	}



	callMeLater(delay){
		setTimeout(() => {this.sayHello()}, delay) }

		sayHello(){
			console.log(`Hello this is ${this.name}`)
		}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
