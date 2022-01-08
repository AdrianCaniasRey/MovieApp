import { ReactiveFormsModule } from '@angular/forms';
import { MovieSearchFormComponent } from './movie-search-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule
    ],
    declarations: [MovieSearchFormComponent],
    exports: [MovieSearchFormComponent],
})
export class MovieSearchFormModule { }
