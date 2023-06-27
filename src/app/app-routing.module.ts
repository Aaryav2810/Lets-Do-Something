import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full',
  },
  {
    path: 'hello',
    loadChildren: () => import('./pages/splash/splash.module').then(module => module.SplashModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then(module => module.ExploreModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(module => module.HistoryModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
