import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailPageRoutingModule } from './movie-detail-routing.module';

import { MovieDetailPage } from './movie-detail.page';
import { MovieInfoModule } from 'src/app/components/movie-info/movie-info.module';
import { LoadingComponentModule } from 'src/app/components/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailPageRoutingModule,
    MovieInfoModule,
    LoadingComponentModule
  ],
  declarations: [MovieDetailPage]
})
export class MovieDetailPageModule { }
