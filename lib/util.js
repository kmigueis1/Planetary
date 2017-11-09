export const speedToAngle = (pixelsPerSecond, radius, framesPerSecond) => {
  //for a perfect circle with a screen refresh of 60 frames per second
  //unsimplified equation is 2pi radians * speed / ( 60 * 2pi radians *  radius)

  return (pixelsPerSecond/(radius * framesPerSecond));
}

export const centerPlanetAt = (planet, x, y, z) => {
  planet.position.set(x,y,z);
}
