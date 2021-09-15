const Calculator= require('./02-calculator.js')

class FancyCalculator extends Calculator{
	constructor(){
		super()

	}
	setTotal(newTotal){
		return this.total= newTotal
	}
	modulo(num){
		return this.total=this.total % num
	}
	squared(){
		return this.total= this.total * this.total
	}
}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
