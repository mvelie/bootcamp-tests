describe('countRegNumber', function(){

    it('takes in a string parameter that looks like this CA 182736,CY 523519,CJ 812328', function(){
        assert.equal(countRegNumber('3'),true );
    });
    it('check the number of regNum', function(){
      assert.equal(countRegNumber('CA9865,CJ44576'),2);
    });
    it('return invalid regNum', function(){
      assert.equal(countRegNumber('A9865,C44576'),2);
    });
    });
