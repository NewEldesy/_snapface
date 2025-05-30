import { Component } from '@angular/core'; // OnInit is not needed anymore
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet // Add RouterOutlet here
    // FaceSnapListComponent is removed
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { // Removed OnInit implementation

}