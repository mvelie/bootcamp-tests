describe('countAllPaarl', function(){

    it('should check what regNum from Paarl startsWith CJ 64723', function(){
        assert.equal(countAllPaarl('CJ'),true);
    });
    it('should return the endWith of regNum from Paarl CJ 98123', function(){
      assert.equal(countAllPaarl('23'),false);
    });
    });
