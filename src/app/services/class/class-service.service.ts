import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Class } from 'src/app/shared/models/class.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  constructor(private httpService: HttpClient) { }

  public getClass(id: number): Observable<Class> {
    return this.httpService.get<Class>(`${environment.SERVER_URL}/classes/${id}`).pipe(
      map(data => new Class().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }

  public getClasses() {
    return this.httpService.get<Class[]>(`${environment.SERVER_URL}/classes`).pipe(
      map(classesData => classesData.map(classData => new Class().deserialize(classData))),
      catchError(() => throwError('User not found'))
    );
  }
}
