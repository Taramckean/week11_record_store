const _ = require("lodash");

const RecordStore = function(name, location){
  this.name = name;
  this.location = location;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype.addRecord = function(record) {
  this.inventory.push(record);
};

RecordStore.prototype.listInventory = function () {
  // let newArray = _.map(this.inventory, function(record){return record.printProperties();
  return _.map(this.inventory, record => record.printProperties());
};
//
// _.map([4, 8], square);





module.exports = RecordStore;
