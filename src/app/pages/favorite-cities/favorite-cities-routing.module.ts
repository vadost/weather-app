import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteCitiesContainerComponent } from './favorite-cities.container.component';
import { FavoriteCitiesGuard } from './guards/favorite-cities.guard';

const routes: Routes = [{ path: '', component: FavoriteCitiesContainerComponent, canActivate: [FavoriteCitiesGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteCitiesRoutingModule { }
