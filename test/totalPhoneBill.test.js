describe('totalPhoneBill', function(){

    it('should return total phone bill', function(){
        assert.equal(totalPhoneBill('call'),'R2.75');
    });
    it('should return total phone bill', function(){
      assert.equal(totalPhoneBill('sms'),"R0.65");
    });
    });
