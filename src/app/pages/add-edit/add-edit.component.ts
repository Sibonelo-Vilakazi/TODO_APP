import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  buttonText : string ='';
  constructor(private activateRoute : ActivatedRoute , private todoService : TodoService) { }
  todoData : any = {
    name : '',
  }
  ngOnInit(): void {
    this.buttonText = "ADD TODO"

    this.activateRoute.url.subscribe((url : any) => {
      this.buttonText = (url[0].path =='add') ? "ADD TODO" : "EDIT TODO";
      
      
      if(this.buttonText.toLowerCase().includes('edit')){
        
        this.activateRoute.paramMap.subscribe((paramMap : any) => {

          console.log(paramMap)

          if(paramMap.params.id){
            let id = paramMap.params.id as number;
            
            this.todoService.getTodoList().subscribe((data : any ) =>{
              this.todoData = data.filter((todo : any ) => todo.id == id)[0];
              let date  = new Date(this.todoData.createdDate)
              let datepipe = new DatePipe("en-US");
              this.todoData.createdDate = datepipe.transform(date.toString(),'yyyy-MM-dd')
            }, (error : any) => {
            console.log(error)
            })
          }

        },(error : any) =>{
          console.log(error)
        })
        

      }
    })
  }

}
