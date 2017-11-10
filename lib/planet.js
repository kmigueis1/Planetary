
class Planet {
  constructor(radius, speed, orbitalRadius, orbitalCenter, color, name = ''){
    this.radius = radius;
    this.speed = speed;
    this.orbitalRadius = orbitalRadius;
    this.orbitalCenter = orbitalCenter;
    this.color = color;
    this.name = name;
  }
}

export default Planet;
