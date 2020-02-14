/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
function multi (string){
  if(string.length === 0){
    return false;
  }
  let matchOpenBracket;
  let character;
  let array = [];
  let opening = ['[','{','('];
  let closeing = [']','}',')'];
  for (let i = 0;i < string.length;i++){
    character = string[i];
    if(closeing.indexOf(character) > -1){
      matchOpenBracket = opening[closeing.indexOf(character)];
      if(array.length === 0 || (array.pop() != matchOpenBracket)){
        return false;
      }
    }else{
      array.push(character);
    }
  }return (array.length === 0);
}
module.exports = multi;