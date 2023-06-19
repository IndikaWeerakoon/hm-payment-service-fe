import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedItem = 'employee';

  updateSelectedItem(item: string) {
    this.selectedItem = item;
  }

  //
  isActivate(item: string) {
    return item === this.selectedItem ? 'active' : '';
  }
}
