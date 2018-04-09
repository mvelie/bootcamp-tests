describe('countRegNumber', function(){

    it('takes in a string parameter that looks like this CA 182736,CY 523519,CJ 812328', function(){
        assert.equal(countRegNumber('3'),true );
    });
    it('check the number of regNum', function(){
      assert.equal(countRegNumber('CA9865,CJ44576,CL76839,EC7775'),4);
    });
    it('return undefined ', function(){
      assert.notEqual(countRegNumber('GP 98765,EC 98762,CJ 29567'),'');
    });
    });
