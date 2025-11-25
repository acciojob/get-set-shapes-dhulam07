//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get width(){
		return (this._width);
	}
	get height(){
		return (this._height);
	}
	getArea(){
		console.log(this.width * this.height);
	}
}

class Square extends Animal {
	constructor(side){
		super(side,side);
	}
	getArea(){
		return (this.width * this.height);
	}
	getPerimeter(){
		return (this.width *4);
	}
}

// Creating a Rectangle instance
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

// Creating a Square instance
const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28



// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
