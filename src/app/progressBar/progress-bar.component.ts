import { Component, ElementRef, EventEmitter, Inject, OnInit, HostListener, Input } from '@angular/core';
import { WindowRef } from '../services/window-ref.service';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})

export class ProgressBar {
  bar: Object;
  maxBarWidth: Number;
  barValue: Number;
  winRef: Window;

  constructor(private el: ElementRef, 
              private windowRef: WindowRef) {
    this.winRef = windowRef.nativeWindow;
  };

  // Change barValue on scrolling
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.barValue = this.winRef.pageYOffset;
  };

  ngOnInit(): void {
    // Set init values for progress-bar
    this.maxBarWidth = this.winRef.document.body.scrollHeight - this.winRef.innerHeight;
    this.bar = this.el;
  }
}
