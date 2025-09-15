import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-entity',
  imports: [RouterOutlet],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.css',
  standalone: true,
})
export class EntityComponent {
  listBtn = signal([{
    text: 'Page Config',
    href: '/page-config',
  }, {
    text: 'Test CD',
    href: '/test-change-detection',
  }, {
    text: 'test-form',
    href: '/test-form',
  }])

  constructor(public router: Router, public activateRoute: ActivatedRoute) {
  }


  navigatePage(href: string) {
    this.router.navigate([href], {relativeTo: this.activateRoute});
  }

  navigateBack() {
    this.router.navigate(['']);
  }
}
