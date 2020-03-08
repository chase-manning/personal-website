import { Component, OnInit, Input } from '@angular/core';
import { Circle } from '../../models/circle';
import { Translate } from './translate';
import { Layer } from 'src/app/models/layer';

@Component({
  selector: 'app-masked-layer',
  templateUrl: './masked-layer.component.html',
  styleUrls: ['./masked-layer.component.css']
})
export class MaskedLayerComponent implements OnInit {

  //Inputs
  @Input() layer: Layer;
  @Input() mouseXMultiplier: number;
  @Input() mouseYMultiplier: number;

  get shadowTranslate(): Translate {
    let xTranslate: number = Math.round(this.layer.startingTranslate.xTranslate +  this.layer.totalDepth * this.mouseXMultiplier);
    let yTranslate: number = Math.round(this.layer.startingTranslate.yTranslate +  this.layer.totalDepth * this.mouseYMultiplier);
    return new Translate(xTranslate, yTranslate);
  }

  get middleTranslates(): Translate[] {
    let middleTranslates: Translate[] = [];

    let i = 1;
    while (i <= this.layer.middleLayerCount) {
      let xTranslate: number = Math.round(this.layer.startingTranslate.xTranslate + (this.layer.layerDepth / this.layer.middleLayerCount) * i * this.mouseXMultiplier);
      let yTranslate: number = Math.round(this.layer.startingTranslate.yTranslate + (this.layer.layerDepth / this.layer.middleLayerCount) * i * this.mouseYMultiplier);
      let newTranslate: Translate = new Translate(xTranslate, yTranslate);
      middleTranslates.push(newTranslate);
      i++;
    }

    return middleTranslates;
  }


  constructor() { 
  }

  ngOnInit() {
  }

}
