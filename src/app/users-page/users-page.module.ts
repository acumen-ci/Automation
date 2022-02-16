import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './users-page.component';


const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    children: [
      {
        path: ':userId',
        loadChildren: () => import( './components/user-overview-page/user-overview-page.module' )
          .then(( module ) => module.UserOverviewPageModule )
      }
    ]
  }
]

@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild( routes ),
  ]
})
export class UsersPageModule { }
