import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  getTodoList(){
    return this.http.get<any>(`assets/mock/todos.json`);
  }
}
