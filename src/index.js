module.exports = function toReadable (number) {
  const nums = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
  }

  const twoNums = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }


  let res = '';

  let numArray = `${number}`.split("");

  if (numArray.length <= 2 && number <= 20) {
    res = nums[number];
    return res;

  }

  if (numArray.length <= 2 && number > 20){
    if (numArray[1] === '0') {
      res = twoNums[numArray[0]];
      return res;

    } else {
      let firstNum = numArray[0];
      let secondNum = numArray[1];
      res = twoNums[firstNum] + ' ' + nums[secondNum];
      return res;

    }
    
  }

  if (numArray.length === 3) {

    let firstNum = numArray[0];
    let secondNum = numArray[1];
    let thirdNum = numArray[2];

    if (secondNum === '0' && thirdNum === '0') {
      res = nums[firstNum] + ' hundred';
      return res;
    }
    

    if (secondNum === '1' && thirdNum === '0') {
      res = nums[firstNum] + ' hundred ' + 'ten';
      return res;
    }


    if (thirdNum === '0') {
      res = nums[firstNum] + ' hundred ' + twoNums[secondNum];
      return res;
    }

    if (secondNum === '0') {
      res = nums[firstNum] + ' hundred ' + nums[thirdNum];
      return res;

    } else if (secondNum === '1') {
      res = nums[firstNum] + ' hundred ' + nums[(secondNum + thirdNum)];
      return res;

    } else {
      res = nums[firstNum] + ' hundred ' + twoNums[secondNum] + ' ' + nums[thirdNum];
      return res;      

    }
  }
}
