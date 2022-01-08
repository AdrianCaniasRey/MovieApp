import { MovieCardComponent } from './movie-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [MovieCardComponent],
    exports: [MovieCardComponent],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class MovieCardModule { }
