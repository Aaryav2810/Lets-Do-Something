import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashViewComponent } from './components/splash-view/splash-view.component';
import { HttpClientModule } from '@angular/common/http';
import { SplashRoutingModule } from './splash-routing.module';

@NgModule({
  declarations: [
    SplashViewComponent
  ],
  imports: [
    CommonModule,
    SplashRoutingModule,
    HttpClientModule,
  ]
})
export class SplashModule { }
