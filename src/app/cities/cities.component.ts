import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { City } from './city';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-cities',
    imports: [
        MatTableModule
    ],
    templateUrl: './cities.component.html'
})
export class CitiesComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'lat', 'lon', 'country'];
  public cities!: City[];

  constructor(private http: HttpClient) {  }
  ngOnInit(): void {
    this.getData()
  }

  getData() {
    var url = environment.baseUrl + 'api/Cities';
    this.http.get<City[]>(url)
    .subscribe({
      next: result => this.cities = result,
      error: e => console.error(e)
    })
  }

}
