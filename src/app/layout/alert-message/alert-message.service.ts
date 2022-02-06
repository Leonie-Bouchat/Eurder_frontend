import { Injectable } from '@angular/core';
import {AlertMessage} from "./alert-message.model";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  private messages$$ = new Subject<AlertMessage>();

  publish(alertMessage: AlertMessage) {
    this.messages$$.next(alertMessage);
  }

  messages(): Observable<AlertMessage> {
    return this.messages$$.asObservable();
  }

  constructor() { }
}
