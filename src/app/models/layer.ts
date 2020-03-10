import { Circle } from './circle';
import { Slice } from './slice';
import { ColorService } from '../services/color.service';

export class Layer {

    //Settings
    totalDepth: number = 24;
    layerDepth: number = 12;
    middleLayerCount: number = 6;
    colourChangeSpeed: number = 1/3;

    circles: Circle[];
    layerIndex: number;
    colourService: ColorService;

    constructor(circles: Circle[], layerIndex: number) {
        this.circles = circles;
        this.layerIndex = layerIndex;
        this.colourService = new ColorService();
    }

    get maskId(): string {
        return 'maskId' + this.layerIndex;
    }

    get startingColorNumber(): number {
        return 255 - this.totalDepth * (this.layerIndex - 1) * this.colourChangeSpeed;
    }

    get startingDepth(): number {
        return this.totalDepth * (this.layerIndex - 1);
    }

    get shadowSlice(): Slice {
        let xTranslate: number = Math.round(this.startingDepth + this.totalDepth);
        let yTranslate: number = Math.round(this.startingDepth + this.totalDepth);
        return new Slice('black', xTranslate, yTranslate);
    }

    get middleSlices(): Slice[] {
        let middleTranslates: Slice[] = [];

        let i = 1;
        while (i <= this.middleLayerCount) {
            let color: string = this.colourService.convertNumberToColor(this.startingColorNumber - i * 5);
            let xTranslate: number = Math.round(this.startingDepth + (this.layerDepth / this.middleLayerCount) * i);
            let yTranslate: number = Math.round(this.startingDepth + (this.layerDepth / this.middleLayerCount) * i);
            let newTranslate: Slice = new Slice(color, xTranslate, yTranslate);
            middleTranslates.push(newTranslate);
            i++;
        }

        return middleTranslates.reverse();
    }

    get topSlice(): Slice {
        let color: string = this.colourService.convertNumberToColor(this.startingColorNumber);
        return new Slice(color, this.startingDepth, this.startingDepth);
    }
}