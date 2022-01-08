import { MovieInfoComponent } from './movie-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [MovieInfoComponent],
    exports: [MovieInfoComponent],
})
export class MovieInfoModule { }
