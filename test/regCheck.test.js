describe('regCheck', function(){

    it('check if a registration number is for GP, L, EC, MP', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true );
    });
    it('check if a registration number is for GP, L, EC, MP', function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'),false );
    });
    });
