const _ = require("lodash");

const Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
}

Customer.prototype.buy = function (record) {
  if (this.cash >= record.price){
    this.collection.push(record);
    this.cash -= record.price;}
};

Customer.prototype.sell = function (record) {
    _.remove(this.collection, record);
    this.cash += record.price;
};

Customer.prototype.calculateCollectionTotalValue = function () {
  return _.reduce(this.collection, (accumulator, record) => accumulator += record.price, 0);
};

module.exports = Customer;
