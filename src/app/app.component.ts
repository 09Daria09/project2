import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeeWorldComponent } from './see-world/see-world.component'; 
import { DealsComponent } from './deals/deals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SeeWorldComponent, DealsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project2';
}
