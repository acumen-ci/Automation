import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-overview-page',
  templateUrl: './user-overview-page.component.html',
  styleUrls: ['./user-overview-page.component.scss']
})
export class UserOverviewPageComponent implements OnInit {

  user: Observable<any> | undefined;

  userError: boolean = false;
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe({
        next: ( { userId }: Params ) => {
          this.getUserById( parseInt( userId ) );
        }
      })
  }

  getUserById ( id: number ): void {
    this.user = this.userService.getUserById( id )
      .pipe(
        catchError(( error ) => {
          this.userError = true;
          return throwError( error )
        })
      );
  }

  deleteUser(userId: number ): void {
    const confirmDelete = confirm( 'Are you sure you want to delete this user?');

    if ( confirmDelete ) {
      this.userService.deleteUserById( userId );

      this.router.navigate(['/', 'users'] );
    }
  }

}

