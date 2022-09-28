import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  getTodoList(){
    return this.http.get<any>(`${environment.apiUrl}/Tasks/getAllUserTasks`);
  }
}
