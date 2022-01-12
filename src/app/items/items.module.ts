import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsOverviewComponent } from './items-overview/items-overview.component';
import {SearchFilterPipe} from "../pipes/search-filter.pipe";
import { ItemCreateComponent } from './item-create/item-create.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [
    ItemsOverviewComponent,
    SearchFilterPipe,
    ItemCreateComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }
