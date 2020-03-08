import { Circle } from './circle';
import { Translate } from '../components/masked-layer/translate';

export class Layer {

    //Settings
    totalDepth: number = 24;
    layerDepth: number = 12;
    middleLayerCount: number = 6;

    get maskId(): string {
        return 'maskId' + this.layerIndex;
    }

    circles: Circle[];
    layerIndex: number;

    constructor(circles: Circle[], layerIndex: number){
        this.circles = circles;
        this.layerIndex = layerIndex;
    }
}