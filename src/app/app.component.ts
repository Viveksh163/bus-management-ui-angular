import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bus-management-ui';

  constructor(private router: Router) {
    // Navigate to the desired route when the application starts
    this.router.navigate(['/bus-management']);
  }
}
