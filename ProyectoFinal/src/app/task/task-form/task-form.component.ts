import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  public taskFormGroup: FormGroup = new FormGroup({
    title: new FormControl(),
    code: new FormControl(),
    endDate: new FormControl()
  });

  public onSubmit(){}

  constructor() { }

  ngOnInit(): void {
  }

}
