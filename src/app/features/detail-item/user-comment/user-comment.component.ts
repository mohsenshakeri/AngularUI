import { Component } from '@angular/core';

@Component({
  selector: 'app-user-comment',
  standalone: false,
  templateUrl: './user-comment.component.html',
  styleUrl: './user-comment.component.scss'
})
export class UserCommentComponent {
  userComment = [
    {
      id: 1,
      image : 'assets/user-comment-images/user1.jpg',
      name : 'Elham Akbari',
      date : 'Mar 12 2020',
      comment : 'I had a wonderful stay at Hotel Almas 2! The rooms were clean and spacious, the staff were very friendly, and the location couldn’t be better—just a short walk to the Imam Reza Shrine. Highly recommended!'
    },
    {
      id: 2,
      image : 'assets/user-comment-images/user2.jpg',
      name : 'Mohammad Rezaei',
      date : 'Mar 12 2020',
      comment : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
      id: 3,
      image : 'assets/user-comment-images/user3.jpg',
      name : 'Sara Ahmadi',
      date : 'Mar 12 2020',
      comment : 'I had a wonderful stay at Hotel Almas 2! The rooms were clean and spacious, the staff were very friendly, and the location couldn’t be better—just a short walk to the Imam Reza Shrine. Highly recommended!'
    },
    {
      id: 4,
      image : 'assets/user-comment-images/user4.jpg',
      name : 'Maryam Ebadi',
      date : 'Mar 12 2020',
      comment : 'I had a wonderful stay at Hotel Almas 2! The rooms were clean and spacious, the staff were very friendly, and the location couldn’t be better—just a short walk to the Imam Reza Shrine. Highly recommended!'
    }
  ];
}
