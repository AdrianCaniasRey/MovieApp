import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  private initializeApp() {
    // Set background color of status bar in android
    StatusBar.setBackgroundColor({ color: '#3880ff' });
  }
}
