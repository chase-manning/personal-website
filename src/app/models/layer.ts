import { Circle } from './circle';

export class Layer {

    circles: Circle[];

    constructor(circles: Circle[]){
        this.circles = circles;
    }
}