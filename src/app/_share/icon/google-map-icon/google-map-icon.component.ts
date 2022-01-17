import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'icon-google-map',
  templateUrl: './google-map-icon.svg',
  styleUrls: ['../icon.component.scss']
})
export class GoogleMapIconComponent {

  @Input('class') customClassName = '';
  @HostBinding('class')

  get hostClasses() {
    return [
      'icon',
      this.customClassName,
    ].join(' ');
  }
}
