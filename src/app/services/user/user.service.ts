import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList = [
    {
      id: 1,
      userName: 'Steve',
      email: 'steve@example.com',
      userState: 'active'
    },
    {
      id: 2,
      userName: 'Maria',
      email: 'maria@example.com',
      userState: 'active'
    },
    {
      id: 3,
      userName: 'Jason',
      email: 'jason@example.com',
      userState: 'inactive'
    },
    {
      id: 4,
      userName: 'Estelle',
      email: 'estelle@example.com',
      userState: 'inactive'
    },
    {
      id: 5,
      userName: 'Baff',
      email: 'baff@example.com',
      userState: 'active'
    },
    {
      id: 6,
      userName: 'Tapashya',
      email: 'tapashya@example.com',
      userState: 'inactive'
    }
  ];

  userListObservable: ReplaySubject<any[]> = new ReplaySubject( 1 );

  constructor() { }

  getUsers (): Observable<any[]> {
    const userStorage = localStorage.getItem( 'user-userList' );

    if ( userStorage ) {
      this.userList = JSON.parse( userStorage );
    }

    this.userListObservable.next( this.userList );
    return this.userListObservable;
  }

  getUserById ( id: number ): Observable<any> {
    const user = this.userList.find(user => user.id === id );

    if ( user ) {
      return of( user );
    } else {
      return throwError({ status: 404 });
    }
  }

  deleteUserById ( userId: number ): void {
    const userIndex = this.userList.findIndex(user => user.id === userId );

    this.userList.splice( userIndex, 1 );
    localStorage.setItem( 'user-userList', JSON.stringify( this.userList ) );

    this.userListObservable.next( this.userList );
  }
}
