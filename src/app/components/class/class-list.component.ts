import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/shared/models/class.model';
import { ClassService } from 'src/app/services/class/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassListComponent implements OnInit {

  public classes: Class[];

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
  }

  public getClasses(): void {
    this.classService.getClasses().subscribe(ClassesModel => this.classes = ClassesModel);
  }
}
