export const RECEIVE_CURRENT_PLANET = 'RECEIVE_CURRENT_PLANET';
export const RECEIVE_ALL_PLANETS = 'RECEIVE_ALL_PLANETS';
export const REMOVE_PLANET = 'REMOVE_PLANET';


export const receiveCurrentPlanet = (planet) => {
  return {
    type: RECEIVE_CURRENT_PLANET,
    planet: planet
  }
}

export const receiveAllPlanets = (planets) => {
  return {
    type: RECEIVE_ALL_PLANETS,
    planets: planets
  }

}

export const removePlanet = (name) => {
  return {
    type: REMOVE_PLANET,
    planetName: name
  }
}
