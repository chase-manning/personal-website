import { Circle } from './circle';
import { Translate } from '../components/masked-layer/translate';

export class Layer {

    //Settings
    totalDepth: number = 24;
    layerDepth: number = 12;
    middleLayerCount: number = 6;

    circles: Circle[];
    startingTranslate: Translate;

    constructor(circles: Circle[], startingTranslate: Translate){
        this.circles = circles;
        this.startingTranslate = startingTranslate;
    }
}