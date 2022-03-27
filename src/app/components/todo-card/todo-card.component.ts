import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() todoCount : number =0;
  @Input() todo !: Todo;

  constructor() { }

  ngOnInit(): void {
    
  }

}
