import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-countries',
    imports: [RouterLink],
    templateUrl: './countries.component.html',
    styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {
  public countries!: Country[];

  constructor(private http: HttpClient) {  }
  ngOnInit(): void {
    this.getData()
  }

  getData() {
    var url = environment.baseUrl + 'api/Countries';
    this.http.get<Country[]>(url)
    .subscribe({
      next: result => this.countries = result,
      error: e => console.error(e)
    })
  }


}
