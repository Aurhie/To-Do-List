import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoButtomDeleteAllComponent } from './components/todo-buttom-delete-all/todo-buttom-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//Paginas
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtomDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
