import { Circle } from './circle';
import { Slice } from './slice';

export class Layer {

    //Settings
    totalDepth: number = 24;
    layerDepth: number = 12;
    middleLayerCount: number = 6;

    circles: Circle[];
    layerIndex: number;

    constructor(circles: Circle[], layerIndex: number) {
        this.circles = circles;
        this.layerIndex = layerIndex;
    }

    get maskId(): string {
        return 'maskId' + this.layerIndex;
    }


    get startingDepth(): number {
        return this.totalDepth * (this.layerIndex - 1);
    }

    get shadowSlice(): Slice {
        let xTranslate: number = Math.round(this.startingDepth + this.totalDepth);
        let yTranslate: number = Math.round(this.startingDepth + this.totalDepth);
        return new Slice('red', xTranslate, yTranslate);
    }

    get middleSlices(): Slice[] {
        let middleTranslates: Slice[] = [];

        let i = 1;
        while (i <= this.middleLayerCount) {
            let xTranslate: number = Math.round(this.startingDepth + (this.layerDepth / this.middleLayerCount) * i);
            let yTranslate: number = Math.round(this.startingDepth + (this.layerDepth / this.middleLayerCount) * i);
            let newTranslate: Slice = new Slice('red', xTranslate, yTranslate);
            middleTranslates.push(newTranslate);
            i++;
        }

        return middleTranslates;
    }

    get topSlice(): Slice {
        return new Slice('red', this.startingDepth, this.startingDepth);
    }
}