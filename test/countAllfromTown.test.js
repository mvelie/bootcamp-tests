describe('countAllFromTown', function(){

    it('should check how many are from a Town', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341'),3);
    });
    it('should check how many are not from a Town', function(){
      assert.notEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341'),2);
    });
    });
