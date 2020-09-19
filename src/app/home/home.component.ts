import { Component, OnInit } from '@angular/core';
import { Aeroport, Result } from '../_models/aeroport';
import {AeroportsService}  from '../services/aeroports.service';
import {CountryService}  from '../services/country.service';
import { Country } from '../_models/country';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public aeroport : Aeroport
  public aeroports : Result[]
  public country : string;
  public flag : string;
  public countryResult : Country;
  
  public region : string; 

  constructor(private AeroportsService: AeroportsService,
    private countryService: CountryService) {
    this.aeroport = null;
    this.aeroports=[]
    this.country = '';
    this.region='';
  }


  ngOnInit(): void {  }

  getAeroports(country){

  this.country=country;
    this.countryService.getCountry(country)
    .subscribe(data => {
      this.countryResult = data
      console.log(  this.countryResult);
       const result= this.countryResult!=null? this.countryResult[0]: null
       const country= result.alpha2Code;
       this.flag= result.flag;
       const region = result.topLevelDomain[0]+"-"+result.alpha2Code
      this.AeroportsService.getAeropot(country, region)
      .subscribe(data => {
        this.aeroports = data.results
        
      });
      
    });

    this.AeroportsService.getAeropot(this.country, this.region)
    .subscribe(data => {
      this.aeroports = data.results
      
    });
  }

  
}
