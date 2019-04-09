const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('planet-selection', (evt) => {
    const selectedIndex = evt.detail;
    // console.log('this is index:',selectedIndex);
    this.publishPlanetDetail(selectedIndex);
    // console.log('this:', this);
  });
};
SolarSystem.prototype.publishPlanetDetail = function(planetIndex){
  const selectedPlanet = this.planets[planetIndex];
  // console.log('selected planet',selectedPlanet);
  PubSub.publish('display-planet-info', selectedPlanet)
  // console.log('planet info - outgoing:',selectedPlanet);
};
module.exports = SolarSystem;
