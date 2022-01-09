import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  async getPlatform(): Promise<string> {
    console.log('[DeviceService] getPlatform');
    return await (await Device.getInfo())?.platform;
  }
}
