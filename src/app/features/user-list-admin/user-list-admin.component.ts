import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list-admin',
  standalone: false,
  templateUrl: './user-list-admin.component.html',
  styleUrl: './user-list-admin.component.scss'
})
export class UserListAdminComponent {
  userList = [
    {
      id: 1,
      image : 'assets/user-list-images/id1.png',
      userName : 'Sara Mohammadi',
      userID : 'U-1001',
      email : 'sara.m@example.com',
      role : 'User',
      statusUser : 'Active',
      joinedDate : 'Sep 20, 2025'
    },
    {
      id: 2,
      image : 'assets/user-list-images/id2.png',
      userName : 'Maryam Nik',
      userID : 'U-1001',
      email : 'maryam.n@example.com',
      role : 'Admin',
      statusUser : 'Active',
      joinedDate : 'Sep 20, 2025'
    },
    {
      id: 3,
      image : 'assets/user-list-images/id3.png',
      userName : 'Ali Reza',
      userID : 'U-1001',
      email : 'ali.r@example.com',
      role : 'User',
      statusUser : 'Banned',
      joinedDate : 'Sep 20, 2025'
    },
    {
      id: 4,
      image : 'assets/user-list-images/id4.png',
      userName : 'Sara Mohammadi',
      userID : 'U-1001',
      email : 'sara.m@example.com',
      role : 'User',
      statusUser : 'Pending',
      joinedDate : 'Sep 20, 2025'
    },
    {
      id: 5,
      image : 'assets/user-list-images/id5.png',
      userName : 'John Kennedy',
      userID : 'U-1001',
      email : 'john.k@example.com',
      role : 'User',
      statusUser : 'Active',
      joinedDate : 'Sep 20, 2025'
    },
    {
      id: 6,
      image : 'assets/user-list-images/id6.png',
      userName : 'Sara Mohammadi',
      userID : 'U-1001',
      email : 'sara.m@example.com',
      role : 'User',
      statusUser : 'Active',
      joinedDate : 'Sep 20, 2025'
    },
    {
      id: 7,
      image : 'assets/user-list-images/id7.png',
      userName : 'Sara Mohammadi',
      userID : 'U-1001',
      email : 'sara.m@example.com',
      role : 'User',
      statusUser : 'Active',
      joinedDate : 'Sep 20, 2025'
    },
    {
      id: 8,
      image : 'assets/user-list-images/id8.png',
      userName : 'Sara Mohammadi',
      userID : 'U-1001',
      email : 'sara.m@example.com',
      role : 'User',
      statusUser : 'Active',
      joinedDate : 'Sep 20, 2025'
    },
  ];


  //users = [...this.userList];
  activeTab = 'active';
  showTab = [...this.userList];
  userStr: string='';
  index : number=0;
  search(){
    const term = this.userStr.toLowerCase();

    if (this.userStr.trim() !== '') {
      this.showTab = this.userList.filter((i) => i.userName.toLowerCase().includes(term));
    }else{
      this.showTab=[...this.userList];
      this.activeTab = 'active';
    }
  }

  personalDetails = [
    {
      id : 1,
      img : 'assets/user-details/id1.jpg',
      fullName : 'Hazel Pink',
      gender : 'Male',
      role : 'User',
      birthday : 'March 15, 1992',
      addressLine : 'No 22, Valiasr Street',
      city : 'Tehran',
      country : 'Iran',
      phone : '+98 912 345 6789',
      email : 'Maryam@example.com'
    },
    {
      id : 2,
      img : 'assets/user-details/id2.jpg',
      fullName : 'Hazel Pink',
      gender : 'Male',
      role : 'User',
      birthday : 'March 15, 1992',
      addressLine : 'No 22, Valiasr Street',
      city : 'Tehran',
      country : 'Iran',
      phone : '+98 912 345 6789',
      email : 'Maryam@example.com'
    },
    {
      id : 3,
      img : 'assets/user-details/id3.jpg',
      fullName : 'Hazel Pink',
      gender : 'Male',
      role : 'User',
      birthday : 'March 15, 1992',
      addressLine : 'No 22, Valiasr Street',
      city : 'Tehran',
      country : 'Iran',
      phone : '+98 912 345 6789',
      email : 'Maryam@example.com'
    },
    {
      id : 4,
      img : 'assets/user-details/id4.jpg',
      fullName : 'Hazel Pink',
      gender : 'Male',
      role : 'User',
      birthday : 'March 15, 1992',
      addressLine : 'No 22, Valiasr Street',
      city : 'Tehran',
      country : 'Iran',
      phone : '+98 912 345 6789',
      email : 'Maryam@example.com'
    },
    {
      id : 5,
      img : 'assets/user-details/id5.jpg',
      fullName : 'Hazel Pink',
      gender : 'Male',
      role : 'User',
      birthday : 'March 15, 1992',
      addressLine : 'No 22, Valiasr Street',
      city : 'Tehran',
      country : 'Iran',
      phone : '+98 912 345 6789',
      email : 'Maryam@example.com'
    },
    {
      id : 6,
      img : 'assets/user-details/id6.jpg',
      fullName : 'Hazel Pink',
      gender : 'Male',
      role : 'User',
      birthday : 'March 15, 1992',
      addressLine : 'No 22, Valiasr Street',
      city : 'Tehran',
      country : 'Iran',
      phone : '+98 912 345 6789',
      email : 'Maryam@example.com'
    },
    {
      id : 7,
      img : 'assets/user-details/id7.jpg',
      fullName : 'Hazel Pink',
      gender : 'Male',
      role : 'User',
      birthday : 'March 15, 1992',
      addressLine : 'No 22, Valiasr Street',
      city : 'Tehran',
      country : 'Iran',
      phone : '+98 912 345 6789',
      email : 'Maryam@example.com'
    },
    {
      id : 8,
      img : 'assets/user-details/id8.jpg',
      fullName : 'Hazel Pink',
      gender : 'Male',
      role : 'User',
      birthday : 'March 15, 1992',
      addressLine : 'No 22, Valiasr Street',
      city : 'Tehran',
      country : 'Iran',
      phone : '+98 912 345 6789',
      email : 'Maryam@example.com'
    },
  ];
  userDetails = [...this.personalDetails];
  show : boolean = false;
  showPersonalDetails(id : number){
    this.index = id-1;
    this.show = true;
  }

  //----------- active tab ------------
  filterByStatus(status: string) {
    if (status === 'Active') this.activeTab = 'active';
    else if (status === 'Pending') this.activeTab = 'inactive';
    else if (status === 'Banned') this.activeTab = 'banned';

    this.userStr = '';
    this.showTab = this.userList.filter(u => u.statusUser === status);
  }
}
