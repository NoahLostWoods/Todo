import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html', // Usa il file HTML esterno
  styleUrls: ['./todo.component.scss'],  // Usa il file CSS esterno

})
export class TodoComponent {
  newTodo = '';
  todos = signal<string[]>([]);

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.update(todos => [...todos, this.newTodo.trim()]);
      this.newTodo = '';
    }
  }
}
