import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuList = [
    {
      label: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      label: 'Users',
      url: '/users',
      icon: 'people',
    },
    {
      label: 'Invalid',
      url: '/invalid-url',
      icon: 'report_problem'
    }
  ]

  favouriteItems: Record<string, any> = {};


  favouriteItemsObservable: ReplaySubject<any[]> = new ReplaySubject(  1 );

  constructor() { }

  getMenu (): Observable<any[]> {
    return of(this.menuList);
  }

  getMenuFavourites (): Observable<any> {
    const storedItems = localStorage.getItem( 'user-favourites' );

    if ( storedItems ) {
      this.favouriteItems = JSON.parse( storedItems );
    }

    this.favouriteItemsObservable.next( Object.values( this.favouriteItems ) );
    return this.favouriteItemsObservable;
  }

  toggleFavourites ( menuItem: any ): void {

    if ( this.favouriteItems[ menuItem.label ] ) {
      delete this.favouriteItems[ menuItem.label ];
    } else {
      this.favouriteItems[ menuItem.label ] = menuItem;
    }

    localStorage.setItem( 'user-favourites', JSON.stringify( this.favouriteItems ) );

    this.favouriteItemsObservable.next( Object.values( this.favouriteItems ));

  }

}
