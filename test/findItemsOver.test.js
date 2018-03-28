describe('findItemsOver', function(){

  var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},
  ];
    it('should  return products that have quantity higher than the threshold', function(){
        assert.deepEqual(findItemsOver(itemList, 25),[{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });
    it('should  return the products that have a quantity higher than 20', function(){
      assert.deepEqual(findItemsOver(itemList,7),[{name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27}]);
    });
    });
