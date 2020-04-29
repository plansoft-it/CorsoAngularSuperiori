import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListComponent } from './components/class/class-list.component';
import { ClassComponent } from './components/class/class.component';
import { StudentComponent } from './components/student/student.component';


const routes: Routes = [
  { path: '', component: ClassListComponent },
  { path: 'classes', component: ClassListComponent },
  { path: 'classes/:class_id', component: ClassComponent },
  { path: 'students/:student_id', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
