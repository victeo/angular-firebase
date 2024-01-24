import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConnectionService } from '../../services/firebase/connection.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterModule, MatButtonModule, MatIconModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.less'
})
export class NavbarComponent {

    constructor(private UserService: UserService, public auth: ConnectionService) { }

    show(): boolean {
        return this.UserService.lsLogged();
    }

    sair():void{
        this.auth.signOut();
    }


}
