import { PersonalInfoComponent } from './personal-info.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [PersonalInfoComponent],
    exports: [PersonalInfoComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        IonicModule
    ],
    providers: [],
    bootstrap: [],
})
export class PersonalInfoModule { }
