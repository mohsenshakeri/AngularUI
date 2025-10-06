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
      image : 'assets/Frame id 1.png',
      name : 'Ali Rezaei',
      bookingDate : '12 Sep 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 2,
      image : 'assets/Frame id 2.png',
      name : 'Sara Mohamm',
      bookingDate : '04 Aug 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 3,
      image : 'assets/Frame id 3.png',
      name : 'John Smith',
      bookingDate : '12 Sep 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 4,
      image : 'assets/Frame id 4.png',
      name : 'Sara Mohamm',
      bookingDate : '04 Aug 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 5,
      image : 'assets/Frame id 5.png',
      name : 'Ali Rezaei',
      bookingDate : '12 Sep 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 6,
      image : 'assets/Frame id 6.png',
      name : 'Maryam Kar',
      bookingDate : '12 Sep 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
    {
      id: 7,
      image : 'assets/Frame id 7.png',
      name : 'Hazel Pink',
      bookingDate : '04 Aug 25',
      tripID: 'trip-0012',
      destination: 'Shiraz',
      category : 'cultural',
      amount : '$120,000'
    },
  ];

  users = [...this.items];

  userName: string='';
  
  searchUser(){
    const term = this.userName.toLowerCase();

    if (this.userName.trim() !== '') {
      return this.users = this.users.filter((i) => i.name.toLowerCase().includes(term));
    }else{
      return this.users=[...this.items];
    }
  }
}

