import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  items = [
    {
      id: 1,
      image : 'assets/id1.jpg',
      name : 'Ali Rezaei',
      bookingDate : '12 Sep 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 2,
      image : 'assets/id2.jpg',
      name : 'Sara Mohamm',
      bookingDate : '04 Aug 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 3,
      image : 'assets/id3.jpg',
      name : 'John Smith',
      bookingDate : '12 Sep 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 4,
      image : 'assets/id4.jpg',
      name : 'Sara Mohamm',
      bookingDate : '04 Aug 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 5,
      image : 'assets/id5.jpg',
      name : 'Ali Rezaei',
      bookingDate : '12 Sep 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 6,
      image : 'assets/id6.jpg',
      name : 'Maryam Kar',
      bookingDate : '12 Sep 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 7,
      image : 'assets/id7.jpg',
      name : 'Hazel Pink',
      bookingDate : '04 Aug 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
  ]
}
