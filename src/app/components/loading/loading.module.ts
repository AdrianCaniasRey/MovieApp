import { LoadingComponent } from './loading.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';



@NgModule({
    declarations: [LoadingComponent],
    exports: [LoadingComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        IonicModule,
        LottieModule
    ],
    providers: [],
    bootstrap: [],
})
export class LoadingComponentModule { }
