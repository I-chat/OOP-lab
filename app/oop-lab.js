function Fruits(type, name = "fruit") {
  this.type= type;
  this.name = name;
  this.isEdible = type === "Culinary" ? true : false;
  if (this.isEdible === true && name === "lime") {  // assigns edibility based on type
    this.taste = "sour";
  } else if (this.isEdible === true && name === "cocoa") {
    this.taste = "bitter";
  } else {
    this.taste = "sweet";
  }
  this.noOfFruits = "Please plant the fruit."
  // produces more fruits based on number of seeds
  this.pollinate = function(seed = 0) {
    this.noOfFruits = seed >= 5 ? "You have " + seed * 25 + " fruits." : "You have " + seed * 100 + " Fruits."
    var newFruits = Object.assign(new Fruits(), this);
    return newFruits;
  }

}
module.exports = Fruits