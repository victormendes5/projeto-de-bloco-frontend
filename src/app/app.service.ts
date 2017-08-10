import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';

@Injectable()
export class TaskService {

  private tasksUrl = 'api/tasks';

  constructor(private http: Http) { }

  getTasks(): Promise<Array<Task>> {
    return this.http
      .get(this.tasksUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Task[];
      })
      .catch(this.handleError);
  }

  getCategories(): Promise<Array<Task>> {
    return this.http
      .get(this.tasksUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Task[];
      })
      .catch(this.handleError);
  }

  getTask(id: number): Promise<Task> {
    return this.getTasks()
      .then(tasks => tasks.find(task => task.id === id));
  }

  create(name: string): Promise<Task> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.tasksUrl, JSON.stringify({nome: name}), {headers: headers})
      .toPromise()
      .then(res => res.json().data as Task)
      .catch(this.handleError);
  }

  delete(task: Task): Promise<Response> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.tasksUrl}/${task.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // private post(task: Task): Promise<Task> {
  //   const headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //
  //   return this.http
  //     .post(this.tasksUrl, JSON.stringify(task), { headers: headers })
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  // private put(task: Task): Promise<Task> {
  //   const headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //
  //   const url = `${this.tasksUrl}/${task.id}`;
  //
  //   return this.http
  //     .put(url, JSON.stringify(task), { headers: headers })
  //     .toPromise()
  //     .then(() => task)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro', error);
    return Promise.reject(error.message || error);
  }

}
