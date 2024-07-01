import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDirectoryTableComponent } from './student-directory-table.component';

describe('StudentDirectoryTableComponent', () => {
  let component: StudentDirectoryTableComponent;
  let fixture: ComponentFixture<StudentDirectoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDirectoryTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDirectoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
