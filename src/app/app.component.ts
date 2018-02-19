import { Component, ElementRef, ViewChild } from '@angular/core';
import { WindowRef } from './services/window-ref.service';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string;
  sideNavToggle: boolean;
  winRef: Window;

  constructor(private windowRef: WindowRef){
    this.title = 'Tour of Heroes';
    this.sideNavToggle = false;
    this.winRef = this.windowRef.nativeWindow
  }

  /**
   * Open left nav bar
   */
  openNav(): void {
    this.sideNavToggle = !this.sideNavToggle;
  }

  /**
   * On side nav toggle change
   */
  onToggleChange(value: boolean): void {
    this.sideNavToggle = value;
  }

  /**
   * Scrolling on left bar select item to related page part
   */
  onScrolling(className: string): void {
    const el = this.winRef.document.getElementsByClassName(className);
    el[0].scrollIntoView({behavior: 'smooth'});
  }
}