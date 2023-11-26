import { Component } from '@angular/core';
import { LocationService } from '../location.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css'
})
export class Pregunta4Component {
  locations: Location[] = [];
  displayedColumns: string[] = ['id', 'name','type','dimension','residents','url','created'];

  constructor(private locationService: LocationService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.locationService.listarLocations()
      .subscribe(
        (data) => {
          this.locations = data 
        },
        (error) => {
          this.snackBar.open('Error al consumir API Rest', 'OK', {duration: 50000})
        }        
      )
  }
}
