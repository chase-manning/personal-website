import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  convertNumberToColor(number: number): string {
    let colorSeed: string = this.convertBaseTenToBaseSixteen(Math.round(number));
    return '#' + colorSeed + colorSeed + colorSeed;
  }

  convertBaseTenToBaseSixteen(number: number): string {
    return number.toString(16);
  }

  constructor() { }
}
