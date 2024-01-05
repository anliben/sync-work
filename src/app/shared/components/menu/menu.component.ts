import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  items: Array<PoMenuItem> = [];

  constructor(
    private service: MenuService
  ) { }

  ngOnInit() {
    this.service.getItemsMenu().subscribe((res) => {
      this.items = res;
    })
  }

}
