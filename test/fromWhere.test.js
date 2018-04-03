describe('fromWhere', function(){

    it('return Bellville if startWith CY', function(){
        assert.equal(fromWhere('CY'),'Bellville' );
    });
    it('return paarl if startWith CJ', function(){
        assert.equal(fromWhere('CJ'),'Paarl');
    });
    it('return CApe Town if startWith CA', function(){
        assert.equal(fromWhere('CA'),'Cape Town');
      });
      it('return some other place if startWith other regNum', function(){
          assert.equal(fromWhere('CL'),'Some other place!');
    });
  });
