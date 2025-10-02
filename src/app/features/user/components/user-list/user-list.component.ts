import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  listUser = [
    {
      userName : 'Ali Rezaei', 
      bookingDate : '12 Sep 25',
      tripID : 'trip-0012',
      destination : 'Shiraz',
      category : 'Cultural',
      amountPay : '$120,000'
    },
    {
      userName : 'Sara Mohamm', 
      bookingDate : '04 Aug 25',
      tripID : 'trip-0012',
      destination : 'Shiraz',
      category : 'Cultural',
      amountPay : '$120,000'
    },
    {
      userName : 'John Smith', 
      bookingDate : '12 sep 25',
      tripID : 'trip-0012',
      destination : 'Shiraz',
      category : 'Cultural',
      amountPay : '$120,000'
    },
    {
      userName : 'Sara Mohamm', 
      bookingDate : '04 Aug 25',
      tripID : 'trip-0012',
      destination : 'Shiraz',
      category : 'Cultural',
      amountPay : '$120,000'
    },
        {
      userName : 'Ali Rezaei', 
      bookingDate : '12 sep 25',
      tripID : 'trip-0012',
      destination : 'Shiraz',
      category : 'Cultural',
      amountPay : '$120,000'
    },
        {
      userName : 'Maryam Kar', 
      bookingDate : '12 sep 25',
      tripID : 'trip-0012',
      destination : 'Shiraz',
      category : 'Cultural',
      amountPay : '$120,000'
    },
    {
      userName : 'AHazel Pink', 
      bookingDate : '12 sep 25',
      tripID : 'trip-0012',
      destination : 'Shiraz',
      category : 'Cultural',
      amountPay : '$120,000'
    },
  ]
}
