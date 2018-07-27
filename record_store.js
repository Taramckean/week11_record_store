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

RecordStore.prototype.sellRecord = function (record) {
  this.balance += record.price;
};

RecordStore.prototype.reportFinances = function() {
  return "The balance is " + this.balance +
   ". The inventory value is " + _.reduce(this.inventory, (accumulator, item) => accumulator += item.price, 0);
};


module.exports = RecordStore;
