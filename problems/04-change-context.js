function changeContext(func, obj) {
  let boundFunc= func.call(obj)
  return boundFunc
//return func.call(obj)

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
