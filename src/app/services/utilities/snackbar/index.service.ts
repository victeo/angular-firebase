import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarCustomComponent } from '../../../components/SnackBar/snack-bar-custom/snack-bar-custom.component';


@Injectable({
    providedIn: 'root'
})
export class IndexService {

    constructor(private snackBar: MatSnackBar) { }

    /**
  * Displays a customized Snackbar with the provided message, an optional panel class, and an optional icon.
  *
  * @param {string} msg - The message to be displayed in the Snackbar.
  * @param {string} [panelClass] - The panel class to be applied to the Snackbar. Can be empty, 'primary', 'success','danger','warning', or 'info'.
  * @param {string} [icon] - The icon to be displayed in the Snackbar. Should be a valid term from [Google Icons](https://fonts.google.com/icons). If not provided, the default 'warning' icon will be used.
  *
  * @example
  * snackbarService.open('Operation successful', 'success', 'check_circle');
  *
  * @remarks
  * - The default duration of the Snackbar is set to 500000 milliseconds (approximately 8 minutes).
  * - The default positions of the Snackbar are horizontally on the right and vertically at the top.
  *
  * @example
  * this.snackbarService.open('Error processing request', 'warning', 'error');
  * In this example, a Snackbar will be displayed with the error message, the panel class 'warning', and the 'error' icon obtained from [Google Icons](https://fonts.google.com/icons).
  * If no icon is provided, the default 'warning' icon will be displayed.
  *
  * @note Make sure to provide valid icons from [Google Icons](https://fonts.google.com/icons). Otherwise, the default icon will be used.
  */
    open(msg: string, panelClass?: string, icon?: string): void {
        this.snackBar.openFromComponent(SnackBarCustomComponent, {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: panelClass || 'default-class',
            data: { message: msg, icon: icon || 'warning' } // Passando os dados para o componente
        });
    }
}
