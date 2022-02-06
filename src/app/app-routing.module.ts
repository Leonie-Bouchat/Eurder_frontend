import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsOverviewComponent} from "./items/items-overview/items-overview.component";
import {ItemCreateComponent} from "./items/item-create/item-create.component";
import {CustomerOverviewComponent} from "./customers/customer-overview/customer-overview.component";
import {ItemComponent} from "./items/item/item.component";
import {ItemEditComponent} from "./items/item-edit/item-edit.component";

const routes: Routes = [
  {path:'items', component: ItemsOverviewComponent },
  {path:'items/create', component: ItemCreateComponent},
  {path: 'items/:id', component: ItemComponent},
  {path: 'items/:id/edit', component: ItemEditComponent},
  {path:'customers', component: CustomerOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
