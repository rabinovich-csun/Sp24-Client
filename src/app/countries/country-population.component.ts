import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryPopulation } from './country-population';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-country-population',
    imports: [RouterLink],
    templateUrl: './country-population.component.html'
})
export class CountryPopulationComponent implements OnInit {
  id:number;
  countryPopulation!: CountryPopulation;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    this.id = -1;
  }

  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : this.id;
    let url = `${environment.baseUrl}api/Countries/Population/${this.id}`;
    this.http.get<CountryPopulation>(url).subscribe(result => {
      this.countryPopulation = result;
    });
  }

}
