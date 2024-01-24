import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './services/guards/user.guard';
import { AdminGuard } from './services/guards/admin.guard';


// Components
import { RegisterComponent } from './pages/submit/register/register.component';
import { FormComponent } from './pages/submit/login/form.component';
import { HomeComponent } from './pages/home/home.component';
import { MyProfileComponent } from './pages/my-profile/my-profile/my-profile.component';


// Admin components
import { HomeAdminComponent } from './admin/home-admin/home-admin/home-admin.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'my-profile',
                canActivate: [UserGuard],
                component: MyProfileComponent,
                children: [
                    {
                        path: 'edit',
                        component: RegisterComponent
                    },
                    {
                        path: 'courses',
                        component: RegisterComponent
                    },
                ]
            },
        ]
    },
    {
        path: 'login',
        component: FormComponent
    },
    {
        path: 'admin',
        component: HomeAdminComponent,
        canActivate: [AdminGuard],
        children: []
    }



];


