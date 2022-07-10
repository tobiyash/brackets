module.exports = function check(str, bracketsConfig) {
  // your solution

  let OPEN_BRACKETS = [];
  let CLOSE_BRACKETS = [];
  // let BRACKETS_PAIR = {};

  for (let i = 0; i < bracketsConfig.length; i++){
    for (let j = 0; j < bracketsConfig[i].length; j++){
      if (j === 0){
        OPEN_BRACKETS.push(bracketsConfig[i][0]);
      }else if(j === 1){
        CLOSE_BRACKETS.push(bracketsConfig[i][1]);
      }
    }
  }

  // for (let i = 0; i < OPEN_BRACKETS.length; i++){
  //   let key = OPEN_BRACKETS[i];
  //   let value = CLOSE_BRACKETS[i];
  //   BRACKETS_PAIR[key] = value;
  // }

  // console.log(BRACKETS_PAIR);
  // console.log(OPEN_BRACKETS);
  // console.log(CLOSE_BRACKETS);
  

  let stack = [];

  for (let i = 0; i < str.length; i++){
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (CLOSE_BRACKETS.includes(currentSymbol) && stack.includes(OPEN_BRACKETS[CLOSE_BRACKETS.indexOf(currentSymbol)])){
      if(topElement === OPEN_BRACKETS[CLOSE_BRACKETS.indexOf(currentSymbol)]) stack.pop(currentSymbol);
    }else if(OPEN_BRACKETS.includes(currentSymbol)){
      stack.push(currentSymbol);
    }else return false;
    
  }
  
  return stack.length === 0;  
}