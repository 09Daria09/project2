import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { deals } from '../deals';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {
  deals = deals;

}
