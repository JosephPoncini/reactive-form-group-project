import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { Student } from '../interfaces/interface';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-student-directory-table',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './student-directory-table.component.html',
  styleUrl: './student-directory-table.component.css'
})
export class StudentDirectoryTableComponent implements OnInit {

  dataService = inject(DataService);
  studentList: Student[] | null = null 


  loadStudentData() {
    this.dataService.getStudentData().subscribe((data) => {
      // console.log(list);
      this.studentList = data;
      console.log(this.studentList)
    });
  }

  ngOnInit() {
    // this.loadStudentData();
  }
}
