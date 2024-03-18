import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from "./nav-menu/nav-menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        HomeComponent,
        HttpClientModule,
        NavMenuComponent
    ]
})
export class AppComponent {
  title = 'AngClient';
}
