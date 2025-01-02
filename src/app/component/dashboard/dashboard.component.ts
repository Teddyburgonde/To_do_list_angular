import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from "../../model/task";
import { CrudService} from "../../service/crud.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [CrudService]
})

export class DashboardComponent implements OnInit {

  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = '';
  editTaskValue : string = '';

  constructor(private crudService: CrudService) {
  }

    ngOnInit(): void {
      this.editTaskValue = '';
      this.addTaskValue = '';
      this.taskObj = new Task();
      this.taskArr = [];
      this.getAllTask();
    }
    getAllTask() {
      this.crudService.getAllTask().subscribe((res: Task[]) => {
        this.taskArr = res;
      }, (err: any)=> {
        alert("Unable to get list of tasks");
      });
    }

  addTask() {
    const newTask = { task_name: this.addTaskValue };
    this.crudService.addTask(newTask).subscribe({
      next: (res: Task) => {
        this.ngOnInit();
        this.addTaskValue = '';
      },
      error: (err: any) => {
        console.error('Error while adding task:', err);
        alert('Failed to add task');
      },
    });
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to update task");
    })
  }

  deleteTask(etask : Task) {
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to delete task");
    });
  }


  call(etask : Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name.toString();
  }

}