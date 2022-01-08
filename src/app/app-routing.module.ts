import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'movie-list',
    loadChildren: () => import('./pages/movies/movie-list/movie-list.module').then(m => m.MovieListPageModule)
  },
  {
    path: 'movie-detail/:id',
    loadChildren: () => import('./pages/movies/movie-detail/movie-detail.module').then(m => m.MovieDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
