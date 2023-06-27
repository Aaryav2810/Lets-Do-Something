import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryHeaderComponent } from './components/history-header/history-header.component';
import { HistoryViewComponent } from './components/history-view/history-view.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [
    HistoryHeaderComponent,
    HistoryViewComponent,
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    CardModule,
  ],
  providers: [
  ]
})
export class HistoryModule { }
