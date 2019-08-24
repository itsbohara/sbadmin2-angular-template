
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { SbathemeComponent } from './sbatheme.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SbathemeComponent],
  imports: [    
    RouterModule.forChild([]),
    CommonModule
  ],
  // exports: [SbathemeComponent]
})

export class SbathemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SbathemeModule,
      providers: [
        // {provide: UserServiceConfig, useValue: config }
      ]
    };
  }


  // static forRoot(
  //   // nbThemeOptions?: NbThemeOptions, 
  //   // nbJSThemes?: NbJSThemeOptions[], 
  //   // nbMediaBreakpoints?: NbMediaBreakpoint[], 
  //   // layoutDirection?: NbLayoutDirection
  //   ):
  //    ModuleWithProviders;
  
 }
 