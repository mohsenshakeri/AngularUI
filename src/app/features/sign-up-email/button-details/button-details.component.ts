import { Component } from '@angular/core';

@Component({
  selector: 'app-button-details',
  standalone: false,
  templateUrl: './button-details.component.html',
  styleUrl: './button-details.component.scss'
})
export class ButtonDetailsComponent {
  detail=['Full Name', 'Email', 'Password', 'Confirm Password'];
}
