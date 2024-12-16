import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AnimateComponent } from './animate/animate.component';

export const routes: Routes = [
    // { path: '', component: HomeComponent, title: 'Home Page' },
    // { path: 'details/:id', component: DetailsComponent, title: 'Details Page' }
    { path: '', component: AnimateComponent }
];
