import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormObject } from '../common/types/form';


@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient) { }

  public getFormData(){
    return this.http.get<FormObject[]>("./assets/data/to-render.json");
  }
}
