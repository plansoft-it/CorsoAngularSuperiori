import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular101';

  constructor(private location: Location) { }

  shouldShowBackButton() {
    return (!this.location.isCurrentPathEqualTo('') && !this.location.isCurrentPathEqualTo('classes'));
  }

  goBack() {
    this.location.back();
  }
}
