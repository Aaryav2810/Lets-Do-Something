import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashViewComponent } from './components/splash-view/splash-view.component';

const routes: Routes = [
  { path: '', component: SplashViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplashRoutingModule { }