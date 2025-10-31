import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModules } from '../../shared/shared-modules';

@Component({
  selector: 'app-calculator-page',
  imports: [ReactiveFormsModule, SharedModules],
  standalone: true,
  templateUrl: './calculator-page.html',
  styleUrl: './calculator-page.scss',
})
export class CalculatorPage implements OnInit {
  public calculateForm: any = FormGroup;
  public result: number = 0;
  constructor(private formBuilder: FormBuilder){}
  
  ngOnInit(){
    this.calculateForm = this.formBuilder.group({
      textField1: '',
      textField2: ''
    });
  }

  onAdd(){
    console.log('this is add function');
    var formData = this.calculateForm.value;
    if(this.validateForm(formData)) this.result = parseInt(formData.textField1) + parseInt(formData.textField2);
  }

  validateForm(formData: any): boolean{
    return formData.textField1 != '' && formData.textField2 != '';
  }

  onSubtract(){
    console.log('this is subtract function');
    var formData = this.calculateForm.value;

    if(this.validateForm(formData)) this.result = formData.textField1 - formData.textField2;

  }

}
