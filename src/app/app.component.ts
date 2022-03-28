import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .greater {
      color: red;
    },
    .lesser {
      color: black;
    }
  `]
})
export class AppComponent {
  title = 'angular_directives';

  showHideButton = true;
  count: number = 0;
  clicks: Array<number> = [];

  showHide() {
    this.showHideButton = !this.showHideButton;
    this.count = this.count + 1;
    this.clicks.push(this.count);
  }

  getColor(item: number) {
    return item > 5 ? 'blue': '';
  }
}
