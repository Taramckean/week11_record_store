const assert = require("assert");
const Record  = require("../record");
const RecordStore  = require("../record_store");

describe("RecordStore", function(){
    let recordStore;

    beforeEach(function(){
      record1 = new Record("Shakira", "Hips Dont Lie", "Pop", 2);
      record2 = new Record("The Temptations","Papa Was A Rolling Stone", "Soul", 3);
      record3 = new Record("Sean Paul", "Like Glue", "Dancehall", 5);
      record4 = new Record("Toots and The Maytals","54-46 Was My Number", "Ska", 4);
      recordStore = new RecordStore("Stevie's Store", "Glasgow");
    });

    it('should have a name', function(){
      assert.deepStrictEqual(recordStore.name, "Stevie's Store");
    });

    it('should have a location', function(){
      assert.deepStrictEqual(recordStore.location, "Glasgow");
    });

    it('should have an empty Inventory initally', function(){
      assert.deepStrictEqual(recordStore.inventory.length, 0);
    });

    it('should have a balance which starts at 0', function(){
      assert.deepStrictEqual(recordStore.balance, 0);
    });

    it('should be able to add a record to inventory', function(){
      recordStore.addRecord(record1);
      assert.deepStrictEqual(recordStore.inventory.length, 1);
    });

    it('should be able to print out a list of the shops inventory', function(){
      recordStore.addRecord(record1);
      recordStore.addRecord(record2);
      recordStore.addRecord(record3);
      recordStore.addRecord(record4);
      let actual = recordStore.listInventory()[0];
      let expected =  ['Shakira', 'Hips Dont Lie', 'Pop', '2']
      assert.deepStrictEqual(actual, expected);
    })

  });
  // Create a method that prints out the Record's properties as a string.
  // Create a method that lists the Record Shop's inventory - ie implements the above method on every record in the shop.
  // Create a method so the Record Store can sell a Record and adjusts the Store's balance to account for the Record being sold.
  // Create a method that reports the financial situation of the Store, showing the balance and value of inventory.
  // Create a method that allows the store to view all Records of a given Genre.
