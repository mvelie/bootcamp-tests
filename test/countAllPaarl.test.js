describe('countAllPaarl', function(){

    it('should check regNum from Paarl startsWith what?', function(){
        assert.equal(countAllPaarl('CJ'),true);
    });
    it('should return the endWith of regNum from Paarl', function(){
      assert.equal(countAllPaarl('23'),false);
    });
    });
