import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // or .Default
})
export class AppComponent {

  sidenavItems = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Customer', path: '/customer' },
  ];
  
  constructor(private detect: ChangeDetectorRef){
    // this.detect.detach();
    // this.detect.reattach();
    // this.detect.detectChanges(); // after few seconds for example
  }
  
  

}
