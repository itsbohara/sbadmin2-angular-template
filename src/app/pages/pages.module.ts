import { NgModule } from '@angular/core';
// import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { UsersComponent } from './users/users.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OtherComponent } from './other/other.component';
import { BlankComponent } from './blank/blank.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { SidebarComponent } from '../@theme/components';
import { SBAMainLayoutComponent } from '../@theme/layouts';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
// import { SBAMainLayoutComponent } from './layouts';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    // DashboardModule,
    // MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    SBAMainLayoutComponent,
    SidebarComponent,
    DashboardComponent,
    // UsersComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent,
    BlankComponent,
    ChartsComponent,
    TablesComponent
  ],
})
export class PagesModule {
}
