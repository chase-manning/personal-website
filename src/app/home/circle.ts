export class Circle {
    baseCircleRadius: number = 135;
    baseCircleX: number = 245;
    baseCircleY: number = 145;

    radius: number;
    x: number;
    y: number;

    get scale(): number {
        return this.radius / this.baseCircleRadius;
    }

    get xTransform(): number {
        return this.x - this.baseCircleX;
    }

    get yTransform(): number {
        return this.y - this.baseCircleY;
    }

    constructor(radius: number, x: number, y: number){
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
}