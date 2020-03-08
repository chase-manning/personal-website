import { Component, OnInit, Input } from '@angular/core';
import { Circle } from '../loading/circle';

@Component({
  selector: 'app-masked-layer',
  templateUrl: './masked-layer.component.html',
  styleUrls: ['./masked-layer.component.css']
})
export class MaskedLayerComponent implements OnInit {

  @Input() circles: Circle[];
  @Input() isDropShadow: boolean;
  @Input() isMiddleLayer: boolean;
  @Input() translateX: number;
  @Input() translateY: number;

  constructor() { 
  }

  ngOnInit() {
  }

}
