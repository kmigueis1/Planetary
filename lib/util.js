export const speedToAngle = (pixelsPerSecond, radius, framesPerSecond) => {
  //for a perfect circle with a screen refresh of 60 frames per second
  //unsimplified equation is 2pi radians * speed / ( 60 * 2pi radians *  radius)

  return (pixelsPerSecond/(radius * framesPerSecond));
};

export const centerPlanetAt = (planet, x, y, z) => {
  planet.position.set(x,y,z);
};

export const planetColors = (color) => {
  const colors = {
    "aqua": 0xa2eeec,
    "blue": 0xb8c7ff,
    "red": 0xf9b5c6,
    "pale yellow": 0xf9e796,
    "tan": 0xfdd8c4
  };
  return colors[color];
};
