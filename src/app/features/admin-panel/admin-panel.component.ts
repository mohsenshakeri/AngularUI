import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  show:boolean=false;
  EnterCode:boolean=false;
  resetPassword: boolean=false;

  showMainForm(s:boolean){
    this.show=s
  }
  hideMainForm(){
    this.show=false;
  }

  showEnterCode(){
    this.show=false;
    this.EnterCode = true;
  }
  hideEnterCode(){
    this.EnterCode = false;
  }

  showResetPassword(){
    this.show=false;
    this.EnterCode=false;
    this.resetPassword=true;
  }
  hideResetPassword(){
    this.resetPassword=false;
  }

  //-------------
  otpArray = Array(4).fill(0);
  otp: string[] = ['', '', '', ''];

  moveFocus(event: KeyboardEvent, index: number) {
    const target = event.target as HTMLInputElement;
    if (target.value && index < this.otpArray.length - 1) {
      const next = target.parentElement?.children[index + 1] as HTMLInputElement;
      next?.focus();
    } else if (event.key === 'Backspace' && index > 0 && !target.value) {
      const prev = target.parentElement?.children[index - 1] as HTMLInputElement;
      prev?.focus();
    }
  }

  submit() {
    const code = this.otp.join('');
    console.log('Entered OTP:', code);
  }

  resendCode() {
    console.log('Resending code...');
  }
}

