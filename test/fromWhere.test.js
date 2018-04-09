describe('fromWhere', function(){

    it('return the regNum that is from Bellville CY987,CA 6378, GP 768, MP 87461 ', function(){
        assert.equal(fromWhere('CY 987'),'Bellville' );
    });
    it('return the regNum that is from Paarl GR 7382,CJ864, GP 4721 ', function(){
        assert.equal(fromWhere('CJ 864'),'Paarl');
    });
    it('return the regNum from Cape town CA 9252, FC 7658, CL 4342 ', function(){
        assert.equal(fromWhere('CA 9252'),'Cape Town');
      });
      it('return some other place if startWith other regNum', function(){
          assert.equal(fromWhere('CL864, CA 3569, GP 1345, MP 2767'),'Some other place!');
    });
  });
