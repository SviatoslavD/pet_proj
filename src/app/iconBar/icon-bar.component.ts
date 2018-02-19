import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.less']
})

export class IconBar {
  iconBarItems: object;
  constructor() {
    this.iconBarItems = ['profile', 'experiences', 'abilities', 'projects', 'contact'];
  }

  @Output() iconBarItemChange = new EventEmitter(); 

  // Select menu item
  selectItem(section: string): void {
    this.iconBarItemChange.emit(section);
  }
}
