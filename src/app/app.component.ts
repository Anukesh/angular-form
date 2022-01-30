import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormDataService } from './services/form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-forms';
  formData: any = [];
  constructor(private formDataService: FormDataService){
  }

  ngOnInit(): void {
      this.formData = this.formDataService.getFormData();
  }
}
