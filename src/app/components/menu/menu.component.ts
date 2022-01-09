import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Device } from '@capacitor/device';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  icon: string;

  constructor(
    private router: Router,
    private menu: MenuController
  ) { }

  async ngOnInit() {
    this.icon = await this.getPlatformIcon();
  }

  navigate(url: string) {
    this.router.navigate([url]);
    this.menu.close();
  }

  openWeb() {
    Browser.open({ url: 'https://ionicframework.com/' });
  }

  private async getPlatformIcon(): Promise<string> {
    const mobile = ['android', 'ios'];
    const plarform = await (await Device.getInfo())?.platform;
    if (mobile.includes(plarform)) {
      return plarform === 'android' ? 'logo-android' : 'logo-apple';
    }
    return 'earth';
  }

}
