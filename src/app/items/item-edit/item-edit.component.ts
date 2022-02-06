import { Component, OnInit } from '@angular/core';
import {flatMap, mergeMap, Observable, tap} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Item} from "../item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item$!: Observable<Item>;
  itemForm!: FormGroup;

  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      id: '',
      name: '',
      description: '',
      price: '',
      amountOfStock: ''
    });
    this.item$ = this.route.paramMap.pipe(
      mergeMap(param => this.itemService.getItem(param.get('id'))),
      tap(item => this.itemForm.patchValue(item))
    );
  }

  save(value: Item): void {
    console.log(value.name)
    this.itemService.saveItem(value.id, value).subscribe(_ => this.router.navigateByUrl('/items'))
  }

}
