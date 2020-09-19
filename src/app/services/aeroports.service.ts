import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aeroport } from '../_models/aeroport';

@Injectable({
  providedIn: 'root'
})

export class AeroportsService {
  private airportUrl:string='https://ourairport-data-search.p.rapidapi.com/airports-in/'

  constructor(public http:HttpClient) { 

   
  

   }
   
  getAeropot(country : string, region : string): Observable<Aeroport> {
     
    const headerDict = {
      'x-rapidapi-host': 'ourairport-data-search.p.rapidapi.com',
      'x-rapidapi-key': '117d9b8c81msh1a240e46cd59febp155ef4jsn7192263a36ca'

    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    console.log("aqui"); 
    return this.http.get<Aeroport>(this.airportUrl + country+'/'+region, requestOptions);
  }
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient){}
}

