import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar' ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatButtonModule } from '@angular/material/button' ;
import { RouterLink, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-nav-menu',
    imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        RouterLink
    ],
    templateUrl: './nav-menu.component.html',
    styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent implements OnInit, OnDestroy {
  private destroySubject = new Subject();
  isLoggedIn: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) {
    this.authService.authStatus
      .pipe(takeUntil(this.destroySubject))
      .subscribe(result => {
        this.isLoggedIn = result;
      })
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  ngOnDestroy(): void {
    this.destroySubject.next(true);
    this.destroySubject.complete();
  }
}
