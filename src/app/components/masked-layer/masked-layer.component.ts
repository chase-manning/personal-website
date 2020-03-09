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

  constructor() { 
  }

  ngOnInit() {
  }

}
