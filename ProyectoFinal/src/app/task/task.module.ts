import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing/task-routing.module';


@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
