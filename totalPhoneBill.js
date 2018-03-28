function totalPhoneBill(bill){
  var list=bill.split(', ');
  var call=[]
  var sms=[]
  for(var b=0;b<list.length;b++){
    if(list[b]==='call'){
      call.push(list[b]);
    }
      else if(list[b]==='sms'){
        sms.push(list[b]);
      }
  }
    var calltotal=call.length*2.75;
    console.log (call);
    var smstotal=sms.length*0.65;
    var totalAmount = calltotal+smstotal;
   console.log( 'R'+totalAmount.toFixed(2))
  return 'R'+totalAmount.toFixed(2);

  }
