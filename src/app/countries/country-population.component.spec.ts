import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPopulationComponent } from './country-population.component';

describe('CountryPopulationComponent', () => {
  let component: CountryPopulationComponent;
  let fixture: ComponentFixture<CountryPopulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPopulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
