import { Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  imports: [...SharedModules],
  templateUrl: './add-dialog.html',
  styleUrl: './add-dialog.scss',
})
export class AddDialog implements OnInit{
  public todoForm: any = FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddDialog>
  ){}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ''
    });
  }

  onDialogCancel(){
    this.dialogRef.close();
  }
  onDialogAdd(){
    let formData = this.todoForm.value;
    if(formData.title != ''){
      this.dialogRef.close(formData.title);
    }
  }

}
