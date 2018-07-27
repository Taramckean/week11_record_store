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


Customer.prototype.calculateRecordValueByGenre = function (genre) {
  let genreRecords = _.filter(this.inventory, {"genre": genre});
  return _.reduce(genreRecords, (accumulator, record) => accumulator += record.price, 0);
};

Customer.prototype.calculateRecordValueByGenre = function (genre) {
genreRecords =  _.filter(this.collection, {"genre": genre});
  return _.reduce(genreRecords, (accumulator, record) => accumulator += record.price, 0);
};

Customer.prototype.findMostValuableRecord = function () {
  return _.maxBy(this.collection, 'price');
};

Customer.prototype.sortByMostValuable = function () {
  let sortedArray =  _.sortBy(this.collection, 'price');
  return sortedArray.reverse();
};

Customer.prototype.sortByLeastValuable = function () {
  return _.sortBy(this.collection, 'price');
};

Customer.prototype.compareDifferenceInCollectionValue = function (customer) {
  let a = this.calculateCollectionTotalValue();
  let b = customer.calculateCollectionTotalValue();
    if (a > b){return this;}
      else if (b > a) { return customer;}
        return "Both are good";
};

module.exports = Customer;
