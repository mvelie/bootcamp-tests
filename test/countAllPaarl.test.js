describe('countAllPaarl', function(){

    it('should check how many from Paarl CJ 64723, CA 746, CL 36575', function(){
        assert.equal(countAllPaarl('CJ 64723'),1);
    });
    it('should return how many from other places CJ 98123, GP 735, MP 39766, CL 5457 ', function(){
      assert.notEqual(countAllPaarl(' GP 735, MP 39766, CL 5457'),3);
    });
    });
