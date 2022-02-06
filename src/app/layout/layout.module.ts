import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { AlertMessageComponent } from './alert-message/alert-message/alert-message.component';



@NgModule({
    declarations: [
        HeaderComponent,
        LayoutComponent,
        FooterComponent,
        AlertMessageComponent
    ],
    exports: [
        LayoutComponent,
        AlertMessageComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
