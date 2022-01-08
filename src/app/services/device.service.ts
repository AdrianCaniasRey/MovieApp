import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  async getPlatform(): Promise<string> {
    return await (await Device.getInfo())?.platform;
  }
}
