import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreViewComponent } from './components/explore-view/explore-view.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ExploreViewComponent,
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [
    ApiService,
  ]
})
export class ExploreModule { }
