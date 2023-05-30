function calculator(num1, num2, operator) {

  let num1 = prompt('первое число');
num1 = Number(num1);

let num2 = prompt('второе число');
num2 = Number(num2);

  
  const operator = prompt('оператор (/,+,*,-)');


  switch (operator) {
    case '+':
        alert (num1+ num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
        if (num2 !== 0) {
        alert (num1 / num2);
      } else {
       alert ("can not divide by 0");
      }
        break;
    case '*':
        alert (num1 * num2);
        
     
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

  
}


module.exports = calculator



