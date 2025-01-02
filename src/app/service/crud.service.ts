import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CrudService {

    serviceURl: string;

    constructor(private http: HttpClient) {
        this.serviceURl = 'http://localhost:3000/tasks'
    }

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.serviceURl, task);
    }

    getAllTask(): Observable<Task[]> {
        return this.http.get<Task[]>(this.serviceURl);
    }


    deleteTask(task: Task): Observable<Task> {
        return this.http.delete<Task>(this.serviceURl+'/' + task.id);
    }

    // editTask(task: Task): Observable<Task> {
    //     return this.http.put<Task>(this.serviceURl+ '/'+task.id, task);
    // }

    editTask(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.serviceURl}/${task.id}`, task); // Utilise l'ID pour modifier
    }

}
