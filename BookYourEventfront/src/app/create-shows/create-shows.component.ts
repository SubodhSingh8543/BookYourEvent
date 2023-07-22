// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { MatDialog } from '@angular/material/dialog';
// import { UpdateUserDialogComponent,Show } from '../update-user-dialog/update-user-dialog.component';

// export interface Movies  {
//   description: string,
//   duration: string,
//   genre: string,
//   id: string,
//   language: string,
//   poster: string,
//   releaseDate: string,
//   title: string,
// }

// // {
// //   "description": "Very nice",
// //   "duration": "2:30",
// //   "genre": "Hollywood",
// //   "id": "64b6b437327e759a59b35e88",
// //   "language": "English",
// //   "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAxLjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00004883-emknagcqew-portrait.jpg",
// //   "releaseDate": "07/07/2017",
// //   "title": "abcdefgh"
// // }

// @Component({
//   selector: 'app-create-shows',
//   templateUrl: './create-shows.component.html',
//   styleUrls: ['./create-shows.component.css']
// })
// export class CreateShowsComponent implements OnInit {
//   users: Movies[] = [];

//   constructor(private http: HttpClient, private dialog: MatDialog) {}


//   ngOnInit() {
//     this.fetchUsers();
//   }

//   fetchUsers() {
//     this.http.get<Movies[]>('http://localhost:11000/movies').subscribe(
//       (data) => {
//         this.users = data;
//       },
//       (error) => {
//         console.error('Error fetching users:', error);
//       }
//     );
//   }

//   deleteUser(userId: string) {
//   //   if (confirm('Are you sure you want to delete this user?')) {
//   //     // Make API call to delete user with given ID
//   //     this.http.delete(`http://localhost:11000/shows/${userId}`).subscribe(
//   //       () => {
//   //         // Update the list of users after successful deletion
//   //         this.users = this.users.filter((user) => user.id !== userId);
//   //         alert('User deleted successfully!');
//   //       },
//   //       (error) => {
//   //         console.error('Error deleting user:', error);
//   //       }
//   //     );
//   //   }
//   }

//   openUpdateDialog(user: Movies): void {
//   //   const dialogRef = this.dialog.open(UpdateUserDialogComponent, {
//   //     width: '400px',
//   //     data: user
//   //   });
  
//   //   dialogRef.afterClosed().subscribe((result: User) => {
//   //     if (result) {
//   //       // Perform update operation or update the user in the list
//   //       const index = this.users.findIndex(u => u.id === result.id);
//   //       if (index !== -1) {
//   //         this.users[index] = result;
//   //         // Perform API call to update user data
//   //         this.http.put(`http://localhost:11000/users/${result.id}`, result).subscribe(
//   //           () => {
//   //             // Update successful
//   //             alert('User updated successfully!');
//   //           },
//   //           (error) => {
//   //             console.error('Error updating user:', error);
//   //           }
//   //         );
//   //       }
//   //     }
//   //   });
//   }
// }



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UpdateShowDialogComponent, Show } from '../update-show-dialog/update-show-dialog.component';

export interface Movies  {
  description: string,
  duration: string,
  genre: string,
  id: string,
  language: string,
  poster: string,
  releaseDate: string,
  title: string,
}

@Component({
  selector: 'app-create-shows',
  templateUrl: './create-shows.component.html',
  styleUrls: ['./create-shows.component.css']
})
export class CreateShowsComponent implements OnInit {
  users: Movies[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<Movies[]>('http://localhost:11000/movies').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser(userId: string) {
    // Delete user logic (if needed)
  }

  openUpdateDialog(movie: Movies) {
    const show: Show = {
      available_seats: 0, // Set default or initial value for available_seats
      category: '',
      date: '',
      end_time: '',
      movie_id: movie.id, // Use the ID from the selected movie
      rating: 0, // Set default or initial value for rating
      start_time: '',
      ticket_price: 0, // Set default or initial value for ticket_price
      venue: ''
    };
  
    const dialogRef = this.dialog.open(UpdateShowDialogComponent, {
      width: '400px',
      data: show // Pass the created show object to the modal component
    });
  
    dialogRef.afterClosed().subscribe((updatedShow: Show) => {
      if (updatedShow) {
        // Perform the POST request with the updatedShow object
        // Use the HttpClient to make the POST request
        this.http.post('http://localhost:11000/shows', updatedShow).subscribe(
          () => {
            // Handle successful response (if needed)
            alert('Show updated successfully!');
          },
          (error) => {
            console.error('Error updating show:', error);
          }
        );
      }
    });
  }
  
}
