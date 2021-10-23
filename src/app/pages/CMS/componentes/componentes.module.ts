import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuLateralComponent
  ],
  exports: [
    HeaderComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule
  ]
})

export class ComponentesModule { }
