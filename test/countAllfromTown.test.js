describe('countAllFromTown', function(){

    it('should check which are from a Town', function(){
        assert.equal(countAllFromTown('CL'),true);
    });
    it('should check which are from a Town', function(){
      assert.equal(countAllFromTown('23'),false);
    });
    });
