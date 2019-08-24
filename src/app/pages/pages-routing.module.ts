import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OtherComponent } from './other/other.component';
import { BlankComponent } from './blank/blank.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { Error404Component } from './error-404/error-404.component';
// import { UsersComponent } from './users/users.component';
// import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'buttons',
      component: ButtonsComponent,
    },
    {
      path: 'cards',
      component: CardsComponent,
    },
    {
      path: 'colors',
      component: ColorsComponent,
    },
    {
      path: 'borders',
      component: BordersComponent,
    },
    {
      path: 'animations',
      component: AnimationsComponent,
    },
    {
      path: 'other',
      component: OtherComponent,
    },
    {
      path: 'blank',
      component: BlankComponent,
    },
    {
      path: 'charts',
      component: ChartsComponent,
    },
    {
      path: 'tables',
      component: TablesComponent,
    },
    // {
    //   path: '404',
    //   component: Error404Component,
    // },
    // {
    //   path: 'tables',
    //   loadChildren: () => import('./tables/tables.module')
    //     .then(m => m.TablesModule),
    // },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
