import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  categories = ['Casa', 'Trabalho', 'Faculdade'];
  tasks = [
    { nome: 'Varrer o quarto', categoria: 'Casa', feito: false },
    { nome: 'Lavar a louça', categoria: 'Casa', feito: true },
    { nome: 'Lavar as roupas', categoria: 'Casa', feito: false },
    { nome: 'Consertar a porta', categoria: 'Casa', feito: false },
    { nome: 'Terminar o relatório', categoria: 'Trabalho', feito: false },
    { nome: 'Estudar para a próxima reunião', categoria: 'Trabalho', feito: false },
    { nome: 'Enviar email sobre o problema', categoria: 'Trabalho', feito: false },
    { nome: 'Levar pó de café', categoria: 'Trabalho', feito: true },
    { nome: 'Comprar canetas novas', categoria: 'Trabalho', feito: true },
    { nome: 'Estudar Etapa 1', categoria: 'Faculdade', feito: true },
    { nome: 'Estudar Etapa 2', categoria: 'Faculdade', feito: true },
    { nome: 'Estudar Etapa 3', categoria: 'Faculdade', feito: false },
    { nome: 'Fazer TP1', categoria: 'Faculdade', feito: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  validate(newTask, category) {
    if (this.tasks.filter(task => task.nome === newTask && task.categoria === category).length > 0) {
      console.log('contém o elemento');
    } else {
      this.tasks.push({
        nome: newTask,
        categoria: category,
        feito: false
      });
      console.log('Não contém o elemento');
    }
  }

  add(event, newTask, category) {
    if (newTask !== '') {
      this.validate(newTask, category);
    }
  }

}
