import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../item";

@Component({
  selector: 'app-items-overview',
  templateUrl: './items-overview.component.html',
  styleUrls: ['./items-overview.component.css']
})
export class ItemsOverviewComponent implements OnInit {

  items: Item[] = [];
  searchTerm?: string;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items)
  }

  getStockUrgency(stock:number):string {
    if(stock <= 2) {return 'LOW'}
    else if (stock <=5) {return 'MEDIUM'}
    else {return 'HIGH'}
  }

  search(term: string): void {
    this.searchTerm = term;
  }
}
