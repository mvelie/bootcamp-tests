describe('transportFee', function(){

    it('check the cost for morning shift', function(){
        assert.equal(transportFee('morning'),"R20");
    });
    it('shoul check cost for afternoon shift', function(){
      assert.equal(transportFee('afternoon'),"R10");
    });
    it('should check if its a night shift how much is a transportFee ', function(){
      assert.equal(transportFee('night'),"free");
    });
    });
