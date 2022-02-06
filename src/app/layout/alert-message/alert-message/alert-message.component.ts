import { Component, OnInit } from '@angular/core';
import {AlertMessageService} from "../alert-message.service";

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  alertMessages$ = this.alertMessageService.messages();

  constructor(private alertMessageService: AlertMessageService) { }

  ngOnInit(): void {
  }

}
