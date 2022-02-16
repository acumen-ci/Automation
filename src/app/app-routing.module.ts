import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home-page/home-page.module')
      .then(( module ) => module.HomePageModule )
  },
  {
    path: 'users',
    loadChildren: () => import('./users-page/users-page.module')
      .then(( module ) => module.UsersPageModule )
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    loadChildren: () => import('./error-page/error-page.module')
      .then(( module ) => module.ErrorPageModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
