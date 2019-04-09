const PubSub = require('../helpers/pub_sub.js')

const AllPlanets = function(element) {
  this.element = element;
}

AllPlanets.prototype.bindEvents = function() {
  this.element.addEventListener('click', (evt) => {
    // console.log('this.element:',this.element);
    const planetIndex = evt.target.value;
    PubSub.publish('planet-selection', planetIndex);
    console.log('planet index is', planetIndex);
  })

}

module.exports = AllPlanets;
