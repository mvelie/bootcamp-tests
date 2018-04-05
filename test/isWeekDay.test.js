describe('isWeekday', function(){

    it('should confirm if it is a weekday', function(){
        assert.equal(isWeekday('Monday'),true );
    });
    it('should check if Saturday is a weekday', function(){
        assert.equal(isWeekday('Saturday'),false );
    });
    it('should check which day is the first day of the week', function(){
        assert.equal(isWeekday('sunday'),true);
    });
    });
