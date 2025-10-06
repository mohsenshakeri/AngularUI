import { Component } from '@angular/core';
declare var grecaptcha: any;
@Component({
  selector: 'app-sign-up-email',
  standalone: false,
  templateUrl: './sign-up-email.component.html',
  styleUrl: './sign-up-email.component.scss'
})
export class SignUpEmailComponent {
  captchaResponse: string | null = null;

  onCaptchaResolved(token: string | null) {
    this.captchaResponse = token;
    console.log('✅ reCAPTCHA Token:', token);
  }
}
