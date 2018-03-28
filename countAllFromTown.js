function countAllFromTown(regNum){
  console.log(regNum);
  //var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
  var count =regNum.split(',');
  var from =[];
  for (var g=0;g<count.length;g++){
    if(count[g].startsWith('CL')){
       from.push(count[g])
  }
  }
  return from.length;
}
