import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { ToastController } from '@ionic/angular';
import { DeviceService } from './device.service';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private device: DeviceService,
    private toastController: ToastController
  ) { }


  async show(message: string) {
    const device = await this.device.getPlatform();
    if (device === 'web') {
      const toast = await this.toastController.create({
        message,
        duration: 2000
      });
      toast.present();
    } else {
      Toast.show({
        text: message,
      });
    }
  }
}
