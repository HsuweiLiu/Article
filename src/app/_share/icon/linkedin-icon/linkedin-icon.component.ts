import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'icon-linkedin',
  templateUrl: './linkedin-icon.svg',
  styleUrls: ['../icon.component.scss']
})
export class LinkedinIconComponent {

  @Input('class') customClassName = '';
  @HostBinding('class')

  get hostClasses() {
    return [
      'icon',
      this.customClassName,
    ].join(' ');
  }
}
