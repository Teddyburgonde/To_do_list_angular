import { Component } from '@angular/core';
import { DashboardComponent} from "./component/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [DashboardComponent]
})
export class AppComponent {
  title = 'TodoList';
  show = true;
}
