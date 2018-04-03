describe('isFromBellville', function(){

    it('return reg numbers from Bellville only', function(){
        assert.equal(isFromBellville('CY 789 , CY 476'),true );
    });

    it('return reg numbers from other place', function(){
        assert.equal(isFromBellville('CJ 789 , CJ 476'),false );
    });
    });
