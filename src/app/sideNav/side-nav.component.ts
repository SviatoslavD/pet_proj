import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
  
export class SideNav {
  menuItems: object;
  constructor() {
    this.menuItems = ['profile', 'experiences', 'abilities', 'projects', 'contact'];
  }

  @Input() toggle: boolean;
  @Output() toggleChange = new EventEmitter();
  @Output() selectMenuItemChange = new EventEmitter();

  // On nav bar close
  closeNav(): void {
    this.toggle = false;
    this.toggleChange.emit(this.toggle);
  }

  // Select menu item
  selectItem(section: string): void {
    this.selectMenuItemChange.emit(section);
  }
}
