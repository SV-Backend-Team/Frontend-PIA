import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { ConfigurationComponent } from './configuration/configuration.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'config', component: ConfigurationComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);