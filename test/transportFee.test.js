describe('transportFee', function(){

    it('should show which shift', function(){
        assert.equal(transportFee('morning'),"R20");
    });
    it('should show which shift', function(){
      assert.equal(transportFee('afternoon'),"R10");
    });
    it('should show which shift', function(){
      assert.equal(transportFee('night'),"free");
    });
    });
