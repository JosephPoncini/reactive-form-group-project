import { Injectable, inject } from '@angular/core';
import { Student } from '../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient);

  getStudentData() {
    return this.http.get<Student[]>(`https://formassignmentbackend.azurewebsites.net/User/GetAllUsers`)
  }
}
