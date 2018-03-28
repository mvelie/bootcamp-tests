describe('countAllFromTown', function(){

    it('should show how many from a Town', function(){
        assert.equal(countAllFromTown('CL'),true);
    });
    it('should show how many from a Town', function(){
      assert.equal(countAllFromTown('23'),false);
    });
    });
