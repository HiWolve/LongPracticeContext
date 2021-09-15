function boundFuncTimer(obj, func, delay) {
  // Your code here
  setTimeout(function(){
    return func.apply(obj)
  },delay)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
