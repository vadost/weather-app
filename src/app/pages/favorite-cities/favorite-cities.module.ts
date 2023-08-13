import { NgModule } from '@angular/core';

import { FavoriteCitiesRoutingModule } from './favorite-cities-routing.module';
import { FavoriteCitiesComponent } from './components/favorite-cities.component';
import { FavoriteCitiesContainerComponent } from './favorite-cities.container.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FavoriteCitiesComponent,
    FavoriteCitiesContainerComponent
  ],
  imports: [
    SharedModule,
    FavoriteCitiesRoutingModule
  ]
})
export class FavoriteCitiesModule { }
