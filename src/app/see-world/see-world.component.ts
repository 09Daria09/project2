import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { articles } from '../articles';

@Component({
  selector: 'app-see-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './see-world.component.html',
  styleUrls: ['./see-world.component.css'] 
})
export class SeeWorldComponent {
  articles = articles; 

  
  constructor() { }

}
