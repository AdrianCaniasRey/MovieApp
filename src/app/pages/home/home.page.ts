import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  platform: string;
  platformColor: string;

  constructor(
    private device: DeviceService
  ) { }

  ngOnInit(): void {
    this.getPlatform();
  }

  async getPlatform() {
    const platform = await this.device.getPlatform();
    console.log(platform);

    const PLATFORM_TITLE = {
      android: 'Android',
      ios: 'iOS',
      web: 'Web'
    };
    const PLATFORM_COLOR = {
      android: 'success',
      ios: 'light',
      web: 'primary'
    };
    this.platform = PLATFORM_TITLE[platform];
    this.platformColor = PLATFORM_COLOR[platform];
  }

}
