import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormObject } from 'src/app/common/types/form';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements  OnChanges {
  @Input()
  data: FormObject[] | undefined | null;
  items!: {
    [key: string]: number | string;
  };
  formObj: any = {};
  profileForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadForm();
  }


  public loadForm(){

    const obj: any ={};

 this.data?.forEach(key=>{
  this.formObj[key.field] = [''];
  key.mandatory? this.formObj[key.field].push(Validators.required):null;
 })

 console.log(this.formObj);
    this.profileForm = this.fb.group(this.formObj);
  
  }

  public onSubmit(){
    console.log(JSON.stringify(this.profileForm.value, null, 4));
  }

  isFieldValid(field: string) {
    return  !this.profileForm.get(field)?.valid && this.profileForm.get(field)?.touched;
  }


}
