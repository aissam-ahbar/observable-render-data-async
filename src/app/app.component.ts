import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Create an observable that emits a value every 1s = 1000 ms.
  public observable$: Observable<number> = interval(1000);
}
