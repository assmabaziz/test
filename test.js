function calculator(str) {
  const split = str.split(" ");
  const str1 = split[0];
  const str2 = split[2];
  const op = split[1];
  if(split.length != 3)
    throw new Error("Incorrect");
  const number1 = +str1;
  const number2 = +str2;
  if(!isNaN(number1) && !isNaN(number2)) {
      if(!Number.isInteger(number1) || !Number.isInteger(number2))
        throw new Error("Incorrect");
      if(number1 < 1 || number1 > 10 || number2 < 1 || number2 > 10)
        throw new Error("Incorrect");
      return calculate(number1, number2, op);
  } else if(isNaN(number1) && isNaN(number2)) {
    const rom1 = roman2arabic(str1);
    const rom2 = roman2arabic(str2);
    if(rom1 < 1 || rom1 > 10 || rom2 < 1 || rom2 > 10)
      throw new Error("Incorrect");
    const result = calculate(rom1, rom2, op);
    if(result > 0)
      return arabic2roman(result);
    else if(result < 1)
      return "";
  }
  throw new Error("Incorrect");
}

function calculate(num1, num2, oprt) {
  switch (oprt) {
    case "+":
      return String(Math.trunc(num1 + num2));
    case "-":
      return String(Math.trunc(num1 - num2));
    case "*":
      return String(Math.trunc(num1 * num2));
    case "/":
      return String(Math.trunc(num1 / num2));
    default:
      throw new Error("Incorrect");
  }
}

const digits = {
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function roman2arabic(str) {
  if(!/^[IVXLCDMZ]+$/i.test(str))
    throw new Error("Incorrect roman number format: " + str);
  return str
    .toUpperCase()
    .split("")
    .reduce(function (r, v, i, arr) {
      const [a, b, c] = [
        digits[arr[i]],
        digits[arr[i + 1]],
        digits[arr[i + 2]],
      ];
      if (b && c && a <= b && b < c)
        throw new Error("Incorrect roman number format: " + str);
      return b > a ? r - a : r + a;
    }, 0);
}

function arabic2roman(num) {
  if(!/^\-?\d+$/.test(num + ""))
    throw new Error("Can`t convert that arabic numeric to roman: " + num);
    if(num < 1)
      return "";
    let result = "";
    for (let key in digits)
      while (num >= digits[key]) {
        result += key;
        num -= digits[key];
      }
    return result;
}

module.exports = calculator