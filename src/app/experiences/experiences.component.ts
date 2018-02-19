import { Component } from '@angular/core';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.less']
})  

export class ExperiencesComponent {
  mainTitle: string;
  constructor(){
    this.mainTitle = 'Experiences';
  }
}
