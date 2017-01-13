(function(){
  'use strict';

  var Fruits = require('../app/oop-lab.js');
  var Mango = require('../app/oop-lab.js');

  describe("Create a Fruits class that can pollinate and produce more fruits", function() {

    it("The fruit should be a type of `object`, and an instance of the `Fruits` class", function() {
      var  orange = new Fruits('Culinary', 'Orange');
      expect(typeof orange).toEqual(typeof {});
      expect(orange instanceof Fruits).toBeTruthy();
    });

    it("The fruit name should defualt to 'fruit'.", function() {
      var apple = new Fruits();
      expect(apple.name).toEqual('fruit');
    });

    it("The fruit name and type should be a property of the fruit.", function() {
      var apple  = new Fruits('Culinary', 'Apple');
      expect(apple.name).toBe('Apple');
      expect(apple.type).toBe('Culinary');
    });

    it("The fruit shoud not be edible if it is not culinary and shoud not produce fruit if not pollinated.", function() {
      var ivy  = new Fruits('Non culinary', 'Ivy');
      expect(ivy.isEdible).toBe(false);

      var avocardo = new Fruits('Culinary', 'Avocardo');
      expect(avocardo.isEdible).toBeTruthy();
      avocardo.pollinate(5);
      expect(avocardo.noOfFruits).toBe('You have 125 fruits.');
      expect((function(){return new Fruits('Culinary', 'Lemmon');}()).noOfFruits).toBe("Please plant the fruit.");
    });

    it("The fruit should taste bitter if cocoa and sour if lime.", function() {
      var lime  = new Fruits('Culinary', 'Lime');
      expect(lime.taste).toBe('sour');
      expect(lime.isEdible).toBeTruthy();

      var cocoa = new Fruits('Culinary', 'Cocoa');
      cocoa.pollinate(4)
      expect(cocoa.noOfFruits).toBe('You have 100 fruits.');
      expect(cocoa.type).toBeTruthy();
    });

    it("The fruit planted should be an instance of the Fruits class.", function() {
      var mango  = new Mango('Culinary', 'Apple');
      var babyMango = mango.pollinate(7);
      expect(babyMango instanceof Fruits).toBeTruthy();
      expect(typeof babyMango.pollinate).toBe(typeof (function (){}));
      expect(mango.noOfFruits).toBe(babyMango.noOfFruits);
    });

  });
})();