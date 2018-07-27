const assert = require("assert");
const Record  = require("../record");
const Customer  = require("../customer");

describe("Customer", function(){
  let customer1;

  beforeEach(function(){
    record1 = new Record("Shakira", "Hips Dont Lie", "Pop", 2);
    record2 = new Record("The Temptations","Papa Was A Rolling Stone", "Soul", 3);
    record3 = new Record("Sean Paul", "Like Glue", "Dancehall", 5);
    record4 = new Record("Toots and The Maytals","54-46 Was My Number", "Ska", 4);
    record5 = new Record("Beenie Man","King of the Dancehall", "Dancehall", 3);
    customer1 = new Customer("Tara", 20);
  });

  it('should have a name', function(){
    assert.deepStrictEqual(customer1.name, "Tara");
  });

  it('should have some money', function(){
    assert.deepStrictEqual(customer1.cash, 20);
  });

  it('should have money which goes down when a customer buys a record', function(){
    customer1.buy(record1);
    assert.deepStrictEqual(customer1.cash, 18);
    assert.deepStrictEqual(customer1.collection.length, 1);
  })

  it('should have money that goes up when a customer sells a record', function(){
    customer1.collection.push(record5);
    customer1.sell(record5);
    assert.deepStrictEqual(customer1.collection.length, 0);
    assert.deepStrictEqual(customer1.cash, 23);
  })

  it('shouldnt be able to buy a record if she cant afford it', function(){
    customer1.cash = 1;
    customer1.buy(record4);
    assert.deepStrictEqual(customer1.collection.length, 0);
    assert.deepStrictEqual(customer1.cash, 1);
  })

  it('should be able to view the total value of their collection', function(){
    customer1.buy(record1);
    customer1.buy(record2);
    customer1.buy(record3);
    customer1.buy(record4);
    customer1.buy(record5);
    let actual = customer1.calculateCollectionTotalValue();
    assert.deepStrictEqual(actual, 17);
  });

  it('should be able to view their total value of records for a certain genre', function(){
    customer1.buy(record3);
    customer1.buy(record5);
    let actual = customer1.calculateRecordValueByGenre('Dancehall');
    assert.deepStrictEqual(actual, 8);
  })


});
