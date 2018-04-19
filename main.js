var testTerrarium = new terra.Terrarium(50, 50);

terra.registerCreature({
  type: 'blueMass',
  color: [25, 0, 85],
  size: 5,
  initialEnergy: 5,
  maxEnergy: 20,
  wait: function() {
    // photosynthesis :)
    this.energy += 2;
  },
  move: false,
  reproduceLv: 0.65
});

terra.registerCreature({
  type: 'pinkThing',
  color: [255, 0, 155],
  maxEnergy: 50,
  size: 10,   
  
  initialEnergy: 10,
  size: 20
});
terra.registerCreature({
  color: [55, 0, 85],
  size: 5,
  initialEnergy: 5,
  maxEnergy: 20,
  wait: function() {
    // photosynthesis :)
    this.energy += 2;
  },
  move: false,
  reproduceLv: 0.65
    
});
terra.registerCreature({
  type: 'pinkThingCounter',
  color: [241, 24, 105],
  size: 30,   
  initialEnergy: 20,
  reproduceLv: 0.6,
  sustainability: 3
});

testTerrarium.grid = testTerrarium.makeGridWithDistribution([['blueMass', 50], ['pinkThing', 5], ['blueMassCounter', 200],['pinkThingCounter', 10]]);
testTerrarium.animate();

