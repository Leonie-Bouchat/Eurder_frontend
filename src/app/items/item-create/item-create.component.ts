import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ItemService} from "../service/item.service";
import {Router} from "@angular/router";
import {Item} from "../item";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private itemService: ItemService,
              // private alertMessageService: AlertMessageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createItemForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.maxLength(255)],
    price: ['', Validators.required],
    amountOfStock: ['', Validators.required]
  })

  onSubmit(){
    const itemToCreate = this.createItemForm.value as Item;
    this.createItemForm.disable();
    this.itemService.createItem(itemToCreate)
      .subscribe({
        next: () => {
          this.router.navigate(['items']);
          alert("Item created !");
        }
      })

  }

}
