import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from '../task-form/task-form.component';


const routes: Routes = [{
  path: 'form',
  component: TaskFormComponent
}]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule { }