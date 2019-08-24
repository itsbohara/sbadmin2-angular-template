import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Error404Component } from './pages/error-404/error-404.component';

const routes: Routes = [
  
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard-pages.module')
  //     .then(m => m.DashboardPagesModule),
  // },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ]
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { 
      path: '**',
      component: Error404Component
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
