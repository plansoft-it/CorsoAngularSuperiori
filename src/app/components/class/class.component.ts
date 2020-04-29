import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class/class.service';
import { Class } from 'src/app/shared/models/class.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  public class: Class;

  constructor(
    private classService: ClassService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getClass(params.class_id));
  }

  public getClass(classId: number): void {
    this.classService.getClass(classId).subscribe(ClassModel => this.class = ClassModel);
  }

}
