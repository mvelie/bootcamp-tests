function countAllPaarl(regNum){
  console.log(regNum);
  var count =regNum.split(', ');
  var paarl =[];
  for(var i=0;i<count.length;i++){
    if(count[i].startsWith('CJ')){
       paarl.push(count[i])
       }
       }
       return paarl.length;
       }
