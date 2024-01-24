import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';


@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.less'
})
export class HomeAdminComponent {
    panelOpenState = false;

}
