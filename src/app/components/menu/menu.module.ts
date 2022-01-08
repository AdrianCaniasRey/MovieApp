import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [MenuComponent],
    exports: [MenuComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        IonicModule
    ],
    providers: [],
    bootstrap: [],
})
export class MenuModule { }
