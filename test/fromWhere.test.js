describe('fromWhere', function(){

    it('return Bellville if regNum startWith CY', function(){
        assert.equal(fromWhere('CY987'),'Bellville' );
    });
    it('return paarl if startWith CJ', function(){
        assert.equal(fromWhere('CJ864'),'Paarl');
    });
    it('return Cape Town if startWith CA', function(){
        assert.equal(fromWhere('CA9252'),'Cape Town');
      });
      it('return some other place if startWith other regNum', function(){
          assert.equal(fromWhere('CL864'),'Some other place!');
    });
  });
