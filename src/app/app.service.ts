import { Injectable } from '@angular/core';

import { Tasks } from './tasks';
import { TASKS } from './mock-tasks.model';

@Injectable()
export class TaskService {
  getTasks(): Promise<Tasks[]> {
    return Promise.resolve(TASKS);
  }

  getTasksSlowly(): Promise<Tasks[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getTasks()), 2000);
    });
  }
}
