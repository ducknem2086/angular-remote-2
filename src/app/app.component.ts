import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-remote-21231231skjdhfgjkshdf';
  userAgent = new BehaviorSubject(null);

  constructor() {
    this.userAgent.pipe(takeUntilDestroyed()).subscribe()
  }


}
