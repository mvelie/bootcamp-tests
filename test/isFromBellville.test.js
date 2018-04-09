describe('isFromBellville', function(){

    it('return reg numbers from Bellville only', function(){
        assert.equal(isFromBellville('CY 789 , CY 476,CA 697,DU 985'),true );
    });
    it('check reg number isFromBellville', function(){
        assert.equal(isFromBellville('CJ 789 , CJ 476,CL 864, GD 864, CA 940'),false );
    });
    it('check if there is Bellville regNum', function(){
        assert.equal(isFromBellville('CJ 789 , CJ 476, CA 974 GP 648, CL 267'),false );
    });
  });
