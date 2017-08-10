export class InMemoryDataService {
  createDb() {
    const tasks = [
      { id: 0, nome: 'Varrer o quarto', categoria: 'Casa', feito: false },
      { id: 1, nome: 'Lavar a louça', categoria: 'Casa', feito: true },
      { id: 2, nome: 'Lavar as roupas', categoria: 'Casa', feito: false },
      { id: 3, nome: 'Consertar a porta', categoria: 'Casa', feito: false },
      { id: 4, nome: 'Terminar o relatório', categoria: 'Trabalho', feito: false },
      { id: 5, nome: 'Estudar para a próxima reunião', categoria: 'Trabalho', feito: false },
      { id: 6, nome: 'Enviar email sobre o problema', categoria: 'Trabalho', feito: false },
      { id: 7, nome: 'Levar pó de café', categoria: 'Trabalho', feito: true },
      { id: 8, nome: 'Comprar canetas novas', categoria: 'Trabalho', feito: true },
      { id: 9, nome: 'Estudar Etapa 1', categoria: 'Faculdade', feito: true },
      { id: 10, nome: 'Estudar Etapa 2', categoria: 'Faculdade', feito: true },
      { id: 11, nome: 'Estudar Etapa 3', categoria: 'Faculdade', feito: false },
      { id: 12, nome: 'Fazer TP1', categoria: 'Faculdade', feito: false }
    ];
    return {tasks};
  }
}

export class InMemoryDatacategoryService {
  createDb() {
    const categories = [
      { id: 0, nome: 'Casa' },
      { id: 1, nome: 'Trabalho' },
      { id: 2, nome: 'Faculdade' }
    ];
    return {categories};
  }
}
