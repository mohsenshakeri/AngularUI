import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  @Output() showForm=new EventEmitter<boolean>();
  show :boolean=false;
  showPage(){
    this.show=true
    this.showForm.emit(true)
  }
}
