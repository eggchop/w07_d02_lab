const PubSub = require('../helpers/pub_sub.js')

const PlanetInfo = function(container){
  this.container = container;

}

PlanetInfo.prototype.bindEvents = function() {
  PubSub.subscribe('display-planet-info', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });
};

PlanetInfo.prototype.render = function(planet){
  const planetInfo = document.createElement('p');
  planetInfo.textContent = `Name ${planet.name} Orbit ${planet.orbit}
  Day ${planet.day} SurfaceArea ${planet.surfaceArea} Volume ${planet.volume}
  Gravity ${planet.gravity} Moons ${planet.moons} Image is Here yo`;
  this.container.innerHTML = '';
  this.container.appendChild(planetInfo);
};


// gravity: 0.38,
// moons: 0,
// image: 'images/mercury.jpg'

module.exports = PlanetInfo;
