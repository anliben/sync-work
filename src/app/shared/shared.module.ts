import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PoModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
