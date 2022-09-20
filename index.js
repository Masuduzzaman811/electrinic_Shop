function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let  expensive = BigInt(-1);
  for(let i = 0; i < keyboards.length; ++i){
      for(let j= 0; j < drives.length; ++j){
          const exp = BigInt(keyboards[i]) + BigInt(drives[j]);
          if( (exp <= BigInt(b)) && (exp > expensive)){
              expensive = exp;
          }
      }
  }
  return expensive;

}
