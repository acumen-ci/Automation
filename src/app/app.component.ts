import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'acumen-automation-test';

  menuItems$: Observable<any[]> | undefined;

  menuFavourites: Observable<any[]> | undefined;

  favouriteItems: Record<string, boolean> = {};

  constructor (
    private menuService: MenuService,
  ) {}

  ngOnInit (): void {

    this.menuFavourites = this.menuService.getMenuFavourites()
      .pipe(
        tap(
          ( values: any[] ) => {
            let total: Record<string, boolean> = {};

            values.forEach(
              ( val: any ) => {
                total[ val.label ] = true;
              }
            );

            this.favouriteItems = total;
          }
        )
      );
    this.menuItems$ = this.menuService.getMenu();
  }

  toggleMenuitemFavour ( menuItem: any ): void {
    this.menuService.toggleFavourites( menuItem );
  }
}
