const Park = function (name, price, dinosaurs) {
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDino = function (dinosaur) {
  this.dinosaurs.pop(dinosaur);
}

module.exports = Park;
