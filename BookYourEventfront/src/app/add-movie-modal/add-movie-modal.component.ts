import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

export interface Movie {
  description: string;
  duration: string;
  genre: string;
  language: string;
  poster: string;
  releaseDate: string;
  title: string;
}

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.css'],
})
export class AddMovieModalComponent {

  movie: Movie = {
    description: '',
    duration: '',
    genre: '',
    language: '',
    poster: '',
    releaseDate: '',
    title: '',
  };

  constructor(
    public dialogRef: MatDialogRef<AddMovieModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient // Inject the HttpClient
  ) {}
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Perform post request here using the movie object
    this.http.post('http://localhost:11000/movies', this.movie).subscribe(
      (response) => {
        console.log('Movie added successfully:', response);
        // Close the dialog after successful POST
        alert("movie added successfully")
        this.dialogRef.close();
        // You can perform other actions after the POST request is successful
      },
      (error) => {
        alert("failed to added movie")
        console.error('Error adding movie:', error);
        // You can handle the error here, e.g., show an error message
      }
    );
  }
}
