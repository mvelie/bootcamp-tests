describe('yearsAgo', function(){

    it('should return how many years ago that was', function(){
        assert.equal(yearsAgo('1998'),20 );
    });
    it('should check how many years now', function(){
        assert.equal(yearsAgo('1993'),25);
    });
    });
