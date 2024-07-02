import { Component } from '@angular/core';
import { StudentDirectoryTableComponent } from '../student-directory-table/student-directory-table.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-student-directory',
  standalone: true,
  imports: [ StudentDirectoryTableComponent, NavbarComponent],
  templateUrl: './student-directory.component.html',
  styleUrl: './student-directory.component.css'
})
export class StudentDirectoryComponent {
  
}
