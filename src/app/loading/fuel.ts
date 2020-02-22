export class Fuel {
    public id: string;
    public direction: string;
    public size: number;
    public startingPositionLeft: number;
    public startingPositionTop: number;

    constructor(id: string, direction: string, size: number, startingPositionLeft: number, startingPositionTop: number) {
        this.id = id;
        this.direction = direction;
        this.size = size;
        this.startingPositionLeft = startingPositionLeft;
        this.startingPositionTop = startingPositionTop;
    }
}