import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { UserOverviewPageComponent } from './user-overview-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserOverviewPageComponent,
  }
]


@NgModule({
  declarations: [
    UserOverviewPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild( routes ),
  ]
})
export class UserOverviewPageModule { }
