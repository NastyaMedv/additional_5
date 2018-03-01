module.exports = function check(str, bracketsConfig) {
  // your solution
  /*for (int i = 0; i < bracketsConfig.length; i++) {
    pair[0][i] = bracketsConfig[i][0];
    pair[1][i] = bracketsConfig[i][0];
  }*/

  var stek = [];
  stek[0] = str[0];

  function check(sym) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      for (var j = 0; j < 2; j++) {
        if (sym == bracketsConfig[i][j]) {
          return true;
        }
      }
    }
    return false;
  }

  function pair(open,close) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      if ((open == bracketsConfig[i][0])&&(close == bracketsConfig[i][1])) {
        return true;
        }
      }
    return false;
  }

  for (var i = 1; i < str.length; i++) {
    if (check(str[i])) {
      if (pair(stek[stek.length-1],str[i])) {
        stek.length = stek.length - 1;
      } else {
        stek[stek.length] = str[i];
      }
    }
  }

  if (stek.length == 0) {
    return true;
  } else {
    return false;
  }
}
