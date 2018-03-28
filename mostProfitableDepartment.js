function mostProfitableDepartment(profitable){
var most={}
var depart=0;
  var data='';
  for(var n=0;n<profitable.length;n++){
  var Sale = profitable[n];
    if(most[Sale.department] === undefined){
    most[Sale.department]=0
    }
  most[Sale.department] += Sale.sales
  }
  for(var oni in most){
    if (most[oni]>depart ){
      depart = most[oni]
      data=oni
    }
  }
 return data
}
