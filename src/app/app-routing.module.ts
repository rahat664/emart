import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./auth/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Public-Pages/homepage/homepage.module').then(m => m.HomepageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'admin/login',
    loadChildren: () => import('./admin-pages/admin-login/admin-login.module').then(m => m.AdminLoginModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-pages/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
