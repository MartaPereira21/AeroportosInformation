import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Country} from '../_models/country'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countryUrl:string='https://restcountries.eu/rest/v2/name/'

  constructor(public http:HttpClient) { 

   }
   
  getCountry(country : string): Observable<Country> {
    
    return this.http.get<Country>(this.countryUrl + country);
  }
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient){}
}

