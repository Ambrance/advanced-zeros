module.exports = function getZerosCount(number, base) {
    let includesCount = [];
    for (let j = 2; j <= base; j++) {
      let baseArr = [];
      while (base % j == 0) {
        baseArr.push(j);
        base /= j;
      }
      if (baseArr.length !== 0) {
        let res = 0;
        for (let k = 1; number / Math.pow(baseArr[0], k) > 1; k++) {
          res += Math.floor(number / Math.pow(baseArr[0], k));
        }
        includesCount.push(Math.floor(res / baseArr.length));
      }
    }
    let zerosCount = Math.min(...includesCount);
    return zerosCount;
}