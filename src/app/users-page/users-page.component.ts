import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  usersList: any[] = [];

  filteredUsersList: any[] = [];

  userSearch: string = '';

  filteredUserList: any[] = [];
  constructor (
    private usersService: UserService,
  ) { }

  ngOnInit(): void {

    this.usersService.getUsers()
      .subscribe({
        next: ( users: any[] ) => {
          this.usersList = users;
          this.filterUsers();
        }
      })
  }

  filterUsers ( userSearch: string = this.userSearch ): void {
    this.filteredUsersList = this.usersList
      .filter(
        ( user ) => ( user.userName.toLowerCase() ).includes( userSearch.toLowerCase() ) || userSearch === ''
      )
  }

}
