import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../service/item.service";
import {Router} from "@angular/router";
import {Item} from "../item";
import {AlertMessageService} from "../../layout/alert-message/alert-message.service";
import {AlertMessageType} from "../../layout/alert-message/alert-message.model";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  createItemForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.maxLength(255)],
    price: ['', [Validators.required, Validators.min(0)]],
    amountOfStock: ['', [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder,
              private itemService: ItemService,
              private alertMessageService: AlertMessageService,
              private router: Router) { }

  ngOnInit(): void {}

  onSubmit(){
    const itemToCreate = this.createItemForm.value as Item;
    this.createItemForm.disable();
    this.itemService.createItem(itemToCreate)
      .subscribe({
        next: () => {
          this.alertMessageService.publish({
            title: 'Created a new item',
            description: `Created ${itemToCreate.name}`,
            type: AlertMessageType.SUCCESS
          })
          this.router.navigate(['items']);
          alert("Item created !");
        },
        error: (error) => {
          this.alertMessageService.publish({
            title: `Could not create new item ${itemToCreate.name}`,
            description: error.error.message,
            type: AlertMessageType.DANGER
          });
          this.createItemForm.enable();
      }
    });
  }

  get description(): FormControl {
    return this.createItemForm.get('name') as FormControl;
  }

  get name(): FormControl {
    return this.createItemForm.get('description') as FormControl;
  }

 // countNumberOfCharacters(){
 //   let input = this.description;
 //   // let counter = document.getElementById('counter');
 // }

get itemFormControls() {
    return this.createItemForm.controls;
}

}
