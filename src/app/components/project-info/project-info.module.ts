import { LottieModule } from 'ngx-lottie';
import { ProjectInfoComponent } from './project-info.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [ProjectInfoComponent],
    exports: [ProjectInfoComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        IonicModule,
        LottieModule
    ],
    providers: [],
    bootstrap: [],
})
export class ProjectInfoModule { }
