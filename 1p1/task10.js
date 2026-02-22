class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  static isSquare(rectangle) {
    return rectangle.width === rectangle.height;
  }
}

const rectangle = new Rectangle(8, 7);
console.log(rectangle.area());
console.log(Rectangle.isSquare(rectangle));

const square = new Rectangle(20, 20);
console.log(square.area());
console.log(Rectangle.isSquare(square));
