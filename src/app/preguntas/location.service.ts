import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { locations } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }

  listarLocations(): Observable<locations[]>{
    return this.http.get<locations[]>("https://rickandmortyapi.com/api/location");
  }
}
