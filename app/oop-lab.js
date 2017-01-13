function Fruits(type, name = "fruit") {
  this.type= type;
  this.name = name;
  this.isEdible = type === "Culinary" ? true : false;
  if (this.isEdible === true && name === "Lime") {  // assigns edibility based on type
    this.taste = "sour";
  } else if (this.isEdible === true && name === "Cocoa") {
    this.taste = "bitter";
  } else {
    this.taste = "sweet";
  }
  // produces more fruits based on number of seeds
  this.pollinate = function(seed = 0) {
    this.noOfFruits = seed > 1 ? `You have ${seed * 25} fruits.` : "You have no seeds to pollinate."
    var newFruits = Object.assign(new Fruits(), this);
    return newFruits;
  }

}
Mango.prototype = new Fruits();
Mango.prototype.constructor = Mango;
function Mango(type, name = "fruit") {
  this.type = type;
  this.name = name;
}

module.exports = Fruits, Mango;