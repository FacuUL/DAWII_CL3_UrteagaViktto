import { Component } from '@angular/core';
import { LocationService } from '../location.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Location {
  id: number;
  name: string;
 }

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css'
})
export class Pregunta4Component {
  locations: Location[] = [];

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getEvenIdLocations().subscribe(
      (data) => {
        this.locations = data;
      },
      (error) => {
        console.error('Error al obtener los locations', error);
      }
    );
  }
}
