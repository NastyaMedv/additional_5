module.exports = function check(str, bracketsConfig) {

  var stek = [];
  stek[0] = str[0];

  function pair(open,close) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      if ((open == bracketsConfig[i][0])&&(close == bracketsConfig[i][1]))
        return true;
      }
    return false;
  }

  for (var i = 1; i < str.length; i++) {
      if (pair(stek[stek.length-1],str[i])) {
        stek.length = stek.length - 1;
      } else {
        stek[stek.length] = str[i];
      }
  }

return (stek.length == 0) ? true : false;
}
