import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.less'
})
export class MyProfileComponent {

}
