import { Component } from '@angular/core';

import {trigger, transition, style, animate, state} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'fadeInOut',
      [
        transition(
        ':enter', [
          style({ opacity: 0 }),
          animate('500ms', style({ opacity: 1 }))
        ]
      ),
      transition(
        ':leave', [
          style({ opacity: 1 }),
          animate('200ms', style({ opacity: 0 })),
        ]
      )]
    )
  ]
})
export class AppComponent {
  title = 'app';
  datetime = '';
  
  public focusDateInSidebar(){
  
  }
  
  public blurDateInSidebar(){
  
  }
  
  public changeEvent(){
  
  }
}
