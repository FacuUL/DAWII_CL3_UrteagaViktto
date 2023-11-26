import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router){

  }

  onNavigateToPreg2Page(): void{
    this.router.navigate(['preg2'], {relativeTo: this.route});
  }

  onNavigateToPreg3Page(): void{
    this.router.navigate(['preg3'], {relativeTo: this.route});
  }

  onNavigateToPreg4Page(): void{
    this.router.navigate(['preg4'], {relativeTo: this.route});
  }
}
