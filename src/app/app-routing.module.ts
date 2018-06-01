import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'no-auth',
    pathMatch: 'full',
    //canActivate: [AuthGuardService],
  },
  {
    path: 'no-auth',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './components/no-auth/no-auth.module#NoAuthModule',
      }
    ]
  }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }