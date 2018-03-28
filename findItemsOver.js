var findItemsOver = function (object2, number){
  var list2 = [];
  for(var i =0; i < object2.length; i++){
  	if(object2[i].qty > number){
     list2.push(object2[i]);
  	}
  }
  return list2;
}
