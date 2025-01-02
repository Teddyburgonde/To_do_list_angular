import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    DashboardComponent
  ]
})
export class AppComponent {
  title = 'TodoList';
  show = true;
}
