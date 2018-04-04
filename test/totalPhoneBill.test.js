describe('totalPhoneBill', function(){

    it('should return cost of a call', function(){
        assert.equal(totalPhoneBill('call'),'R2.75');
    });
    it('should return cost of a sms', function(){
      assert.equal(totalPhoneBill('sms'),"R0.65");
    });
    it('should return cost if no call or sms made', function(){
      assert.equal(totalPhoneBill('total'),"R0.00");
    });
    });
