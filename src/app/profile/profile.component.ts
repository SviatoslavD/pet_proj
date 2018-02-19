import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})

export class ProfileComponent{
  mainTitle: string;
  subTitle: string

  constructor(){
    this.mainTitle = 'FrontEnd Developer';
    this.subTitle = 'making the web awesom';
  }
}
