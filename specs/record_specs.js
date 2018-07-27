const assert = require("assert");
const Record  = require("../record");


describe("Record", function(){
    let record1, record2, record3, record4;

    beforeEach(function(){
      record1 = new Record("Shakira", "Hips Don't Lie", "Pop", 2);
      record2 = new Record("The Temptations","Papa Was A Rolling Stone", "Soul", 3);
      record3 = new Record("Sean Paul", "Like Glue", "Dancehall", 5);
      record4 = new Record("Toots and The Maytals","54-46 Was My Number", "Ska", 4);
    });

    it('should have an artist' , function(){
      assert.deepStrictEqual(record3.artist, "Sean Paul")
    });


    it('should have a name', function(){
      assert.deepStrictEqual(record1.title, "Hips Don't Lie")
    });

    it('should have a genre', function(){
      assert.deepStrictEqual(record4.genre, "Ska")
    });

    it('should have a price', function(){
      assert.deepStrictEqual(record4.price, 4)
    });

    it('should be able to print out properites as a string', function(){
      let expected = record3.printProperties();
      let actual = ["Sean Paul", "Like Glue", "Dancehall", "5"];
      assert.deepStrictEqual(expected, actual)
    })



  });
