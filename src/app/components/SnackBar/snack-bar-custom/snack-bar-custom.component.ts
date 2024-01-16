
import {Component, Inject, inject} from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';


  @Component({
    selector: 'app-message',
    templateUrl: './snack-bar-custom.component.html',
    styleUrl: './snack-bar-custom.component.less',
    standalone: true,
    imports: [MatButtonModule],

  })

export class SnackBarCustomComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
    snackBarRef = inject(MatSnackBarRef);
}
