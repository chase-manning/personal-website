export class Slice {
    xTranslate: number;
    yTranslate: number;
    fill: string;

    constructor(fill: string, xTranslate: number = 0, yTranslate: number = 0){
        this.fill = fill;
        this.xTranslate = xTranslate;
        this.yTranslate = yTranslate;
    }
}