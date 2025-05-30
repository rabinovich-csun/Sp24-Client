import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
    RouterOutlet,
    NavMenuComponent
]
})
export class AppComponent implements OnInit {
  title = "World Cities";
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.init();
  }
}
