import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/submit/register/register.component';
import { FormComponent } from './pages/submit/login/form.component';
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'register',
                component: RegisterComponent
            },
            // Outras rotas específicas do HomeComponent, se houver
        ]
    },
    {
        path: 'login',
        component: FormComponent
    }



];


