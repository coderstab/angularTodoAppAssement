import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormControl , Validators } from '@angular/forms'
import { fTask } from '../model/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  form !: FormGroup;
  task: fTask[] = [];
  done: fTask[] = [];
  updatedId !: any;
  isEditEnabled: Boolean=false;


  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      item: ['', Validators.required]
    })
  }

  addTask(){
    console.log("hit")
        this.task.push({
          description:this.form.value.item,
          done:false
        })
      }
      editTask(item:fTask, i:number){
        this.form.controls['item'].setValue(item.description);
        this.updatedId = i;
        this.isEditEnabled =true;

          
          

      }
      deleteTask(i :number){
          this.task.splice(i,1);
      }

      updateTask(){
         this.task[this.updatedId].description = this.form.value.item;
         this.task[this.updatedId].done = false;
         this.form.reset();
         this.updatedId = undefined;
         this.isEditEnabled = false;
      }
  
}
