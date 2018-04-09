describe('findItemsOver', function(){
  var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},
  ];
    it('should  return products that have quantity lower than the threshold', function(){
      var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
        assert.notDeepEqual(findItemsOver(itemList,),{name : 'apples', qty : 10},{name : 'apples', qty : 3})
    });
    it('should  return products that have qty higher than threshold', function(){
      var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
      assert.notDeepEqual(findItemsOver(itemList,2),[{name : 'pears', qty : 37},
      {name : 'bananas', qty : 27}]);
    });
    it('check if there are no items in the list at all', function(){
      var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
      assert.notDeepEqual(findItemsOver(itemList),'there are items');
    });
    it('check if all the items over the threshold', function(){
      var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
      assert.notDeepEqual(findItemsOver(itemList),false);
    });
  });
