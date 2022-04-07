import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private todoService : TodoService , private router : Router) { }
  todoList : Array<Todo> = []
  ngOnInit(): void {

    this.todoService.getTodoList().subscribe( (data : any ) => {
      this.todoList = data;
      
    })


  }

  redirectToAdd(){  
    this.router.navigateByUrl('add')

  }

}
