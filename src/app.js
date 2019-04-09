const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const AllPlanets = require('./views/all_planets.js')
const PlanetInfo = require('./views/planet_info.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('Working');
  const selectElement = document.querySelector('nav');
  const allPlanetsNav = new AllPlanets(selectElement);
  allPlanetsNav.bindEvents();

  const displayPlanetInfo = document.querySelector('#planet-details');
  const selectedPlanetInfo = new PlanetInfo(displayPlanetInfo);
  selectedPlanetInfo.bindEvents();

  const selectedPlanetInfomodel = new SolarSystem(planetsData);
  selectedPlanetInfomodel.bindEvents();

});
