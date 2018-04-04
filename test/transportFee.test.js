describe('transportFee', function(){

    it('should check which shift', function(){
        assert.equal(transportFee('morning'),"R20");
    });
    it('should check which shift', function(){
      assert.equal(transportFee('afternoon'),"R10");
    });
    it('should check which shift', function(){
      assert.equal(transportFee('night'),"free");
    });
    });
