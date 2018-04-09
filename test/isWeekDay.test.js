describe('isWeekday', function(){

    it('should confirm if it is a weekday', function(){
        assert.equal(isWeekday('Monday'),true );
    });
    it('should check if friday the first day of the week', function(){
        assert.notEqual(isWeekday('friday'),false );
    });
    it('should check which day is the third day of the week', function(){
        assert.equal(isWeekday('wednesday'),true);
    });
    });
