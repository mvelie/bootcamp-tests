var findItemsOver20 = function (myObject){
  var liist = [];
  for(var i =0; i < myObject.length; i++){
  	if(myObject[i].qty > 20){
     liist.push(myObject[i]);
  	}
  }
  return liist.length;
}
