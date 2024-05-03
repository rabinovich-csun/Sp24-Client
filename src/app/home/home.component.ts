import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public forecasts: WeatherForecast[] = [];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>(`${environment.baseUrl}weatherforecast`).subscribe({
      next: result => this.forecasts = result,
      error: e => console.error(e)
    });
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;

}
