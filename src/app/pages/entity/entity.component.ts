import { routes } from './../../app.routes';
import { Component, importProvidersFrom } from '@angular/core';
import { ActivatedRoute, provideRouter, Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ENTITY_ROUTE } from './entity.routing';

@Component({
  selector: 'app-entity',
  standalone: true,
  imports: [RouterOutlet, 

  ],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.css'
})
export class EntityComponent {
  constructor(public router:Router,public activateRoute:ActivatedRoute)  {
    
  }
  navigatePage(arg0: number) {
    this.router.navigate([`page${arg0}`],{relativeTo:this.activateRoute});
  }
  navigateBack(){
    this.router.navigate(['']);
  }
}
