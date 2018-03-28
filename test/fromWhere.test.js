describe('fromWhere', function(){

    it('return reg numbers from where exactly', function(){
        assert.equal(fromWhere('CY'),'Bellville' );
    });
    it('return reg numbers from where exactly', function(){
        assert.equal(fromWhere('CJ'),'Paarl');
    });
    it('return reg numbers from where exactly', function(){
        assert.equal(fromWhere('CA'),'Cape Town');
      });
    });
