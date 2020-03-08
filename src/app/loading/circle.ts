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
        return Math.round((this.x - this.baseCircleX) / this.scale);
    }

    get yTransform(): number {
        return Math.round((this.y - this.baseCircleY) / this.scale);
    }

    constructor(radius: number, x: number, y: number){
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
}