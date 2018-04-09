describe("findItemsOver20", function(){

  var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},
  ];
    it('should  return the products that have a quantity higher than 20', function(){
      var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];
        assert.deepEqual(findItemsOver20(itemList), 2);
    });
    it('should  return products higher than 8 ', function(){
      var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];
      assert.notDeepEqual(findItemsOver20(itemList),3);
    });
    it('should  return products lower than 2 ', function(){
      var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];
      assert.notDeepEqual(findItemsOver20(itemList),0);
    });
    it('should check if there are items less than 20 of over', function(){
      var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];
        assert.notDeepEqual(findItemsOver20(itemList),true);
      });
    });
