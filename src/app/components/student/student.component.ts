import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public student: Student;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getStudent(params.student_id));
  }

  public getStudent(classId: number): void {
    this.studentService.getStudent(classId).subscribe(StudentModel => this.student = StudentModel);
  }

  public updateStudent(): void {
    this.studentService.updateStudent(this.student).subscribe(StudentModel => this.student = StudentModel);
  }

}
