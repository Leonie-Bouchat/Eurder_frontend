import { Component, OnInit } from '@angular/core';
import {mergeMap, Observable} from "rxjs";
import {Item} from "../item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item$!: Observable<Item>;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.item$ = this.route.paramMap
      .pipe(
        mergeMap(param => this.itemService.getItem(param.get('id')))
      );
  }

}
