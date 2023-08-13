import { NgModule } from '@angular/core';
import { ProgressBarContainerComponent } from './progress-bar.container';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ProgressBarContainerComponent,
  ],
  exports: [
    ProgressBarContainerComponent,
  ]
})
export class ProgressBarModule { }
