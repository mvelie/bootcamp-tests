describe('regCheck', function(){

    it('check if a registration number is for GP, L, EC, MP', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true );
    });
    it('check if the regNum can be for other place', function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'),false );
    });
    it('return undefined', function(){
        assert.equal(regCheck('CL 124,CY 567,CL 345, CJ 456,CL 341'),'');
    });
    });
