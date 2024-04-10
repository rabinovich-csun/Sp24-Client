import { Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { CountryPopulationComponent } from './countries/country-population.component';
import { CitiesComponent } from './cities/cities.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'countrypopulation/:id', component: CountryPopulationComponent },
    { path: 'countries', component: CountriesComponent },
    { path: 'cities', component: CitiesComponent },
    { path: 'login', component: LoginComponent }
];
