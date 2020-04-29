import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class/class.service';
import { Class } from 'src/app/shared/models/class.model';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  public class: Class;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.getClass(1);
  }

  public getClass(classId: number): void {
    this.classService.getClass(classId).subscribe(ClassModel => this.class = ClassModel);
  }

}
