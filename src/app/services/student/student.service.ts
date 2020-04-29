import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Student } from 'src/app/shared/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpService: HttpClient) { }

  public getStudent(id: number): Observable<Student> {
    return this.httpService.get<Student>(`${environment.SERVER_URL}/students/${id}`).pipe(
      map(data => new Student().deserialize(data)),
      catchError(() => throwError('Student not found'))
    );
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.httpService.put(`${environment.SERVER_URL}/students/${student.id}`, student).pipe(
      map(data => new Student().deserialize(data)),
      catchError(() => throwError('Student not found'))
    );
  }
}
