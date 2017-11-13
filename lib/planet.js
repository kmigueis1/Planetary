
class Planet {
  constructor(radius, speed, orbitalRadius, orbitalCenter, color, eccentricity, name = ''){
    this.radius = radius;
    this.speed = speed;
    this.orbitalRadius = orbitalRadius;
    this.orbitalCenter = orbitalCenter;
    this.color = color;
    this.name = name;
    this.eccentricity = eccentricity;
  }
}

export default Planet;
