import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-entity',
  imports: [RouterOutlet],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.css',
  standalone: true,
})
export class EntityComponent {
  constructor(public router: Router, public activateRoute: ActivatedRoute) {

  }

  navigatePage(arg0: number) {
    this.router.navigate([`page${ arg0 }`], {relativeTo: this.activateRoute});
  }

  navigateBack() {
    this.router.navigate(['']);
  }
}
