const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let dinosaur1;
let dinosaur2;
let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 30);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 40);
    dinosaur4 = new Dinosaur('triceratops', 'herbivore', 40);

    let dinosaurs = [dinosaur1, dinosaur2, dinosaur3]

    park = new Park('Jurrasic Park', 100, dinosaurs);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dinosaur4);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDino(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3, dinosaur4]);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
