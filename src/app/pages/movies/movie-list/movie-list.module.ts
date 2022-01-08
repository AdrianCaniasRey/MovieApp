import { MovieCardModule } from './../../../components/movie-card/movie-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MovieListPageRoutingModule } from './movie-list-routing.module';

import { MovieListPage } from './movie-list.page';
import { MovieSearchFormModule } from 'src/app/components/movie-search-form/movie-search-form.module';
import { LoadingComponentModule } from 'src/app/components/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MovieListPageRoutingModule,
    MovieCardModule,
    MovieSearchFormModule,
    LoadingComponentModule
  ],
  declarations: [MovieListPage]
})
export class MovieListPageModule { }
