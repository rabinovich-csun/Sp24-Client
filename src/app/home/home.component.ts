import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  baseUrl = "https://localhost:7048/";
  public forecasts: WeatherForecast[] = [];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast').subscribe({
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
