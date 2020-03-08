import { Component, OnInit, Input } from '@angular/core';
import { Circle } from '../home/circle';

@Component({
  selector: 'app-masked-layer',
  templateUrl: './masked-layer.component.html',
  styleUrls: ['./masked-layer.component.css']
})
export class MaskedLayerComponent implements OnInit {

  @Input() circles: Circle[] = [];

  constructor() { }

  ngOnInit() {
  }

}
