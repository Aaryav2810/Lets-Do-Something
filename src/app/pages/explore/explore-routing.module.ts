import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreViewComponent } from './components/explore-view/explore-view.component';

const routes: Routes = [
  { path: '', component: ExploreViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
