describe('isWeekday', function(){

    it('should confirm if it is a weekday', function(){
        assert.equal(isWeekday('Monday'),true );
    });
    it('should confirm if it is a weekday', function(){
        assert.equal(isWeekday('Saturday'),false );
    });
    });
