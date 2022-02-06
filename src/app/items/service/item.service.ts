import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Item} from "../item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this.url)
  }

  searchItems(term: string): Observable<Item[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Item[]>(`${this.url}/?name=${term}`)
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item)
  }

  getItem(id: string | null): Observable<Item> {
    return this.http.get<Item>(`${this.url}/${id}`);
  }

  saveItem(id: string, value: any): Observable<void> {
    return this.http.put<void>(`${this.url}/${id}`, value);
  }
}
