import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Location {
  id: number;
  name: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) {}

  getEvenIdLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl).pipe(
      map((response: any) => {
        return response.results.filter((location: Location) => location.id % 2 === 0);
      })
    );
  }
}
