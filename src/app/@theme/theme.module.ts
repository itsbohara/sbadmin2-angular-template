import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
} from './components';

import { SBAMainLayoutComponent } from './layouts';
 //todo requires for routing from theme components
// import { RouterModule } from '@angular/router';

const COMPONENTS = [
    TopbarComponent,
    // SidebarComponent,
    FooterComponent,
    // SBAMainLayoutComponent
    // OneColumnLayoutComponent,
    // ThreeColumnsLayoutComponent,
    // TwoColumnsLayoutComponent,
];

@NgModule({
    // imports: [CommonModule, ...NB_MODULES],
    imports: [
        // RouterModule.forChild([]),
        CommonModule],
    exports: [CommonModule, ...COMPONENTS],

    declarations: [...COMPONENTS],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{             
            ngModule: ThemeModule,
            providers: [
                // ...SbathemeModule.forRoot().providers
            ]        
        }
    }
  }