# BookYourEvent

Welcome to BookYourEvent, where your extraordinary experiences begin! Immerse yourself in a world of seamless entertainment as you explore and book tickets to a myriad of events. From thrilling movies, enchanting concerts, adrenaline-pumping sports events, to mesmerizing theatrical performances, your entertainment journey awaits at your fingertips. Enjoy the ease of online ticketing and unlock a treasure trove of unforgettable memories with BookYourEvent.

## Deployed App

<!-- Add the link to your deployed application here -->
https://deployed-site.whatever

## Entity Relationship (ER) Diagram
This diagram provides a visual representation of the entities and their relationships within the BookMyEntertainment platform.
<img width="971" alt="Screenshot 2023-07-24 at 3 59 07 PM" src="https://github.com/SubodhSingh8543/BookYourEvent/assets/112638063/f37f6c3a-88ba-4aa3-b2df-c4653481b6cb">



## Features

- *Homepage:* Online ticket booking for movies, concerts, sports events, and theatrical performances.
- *Authentication:* User registration and login for personalized experiences.
- *Event Discovery:* Explore a vast array of entertainment events, including movies, concerts, sports matches, plays, and more, with detailed information on dates, venues, and showtimes.
- *Shows Page:* View all the shows related to a particular movie, including matinee, evening, late night, start time, end time, seats, price, location, and release date information.
- *Multiple Languages:* Enjoy a multilingual platform to cater to a diverse audience and provide a user-friendly experience for all.
- *Multiple Generes:* Enjoy a multiple genere movies.
- *MyBookings:* View your booked movie list.
- *Help Center:* Access reliable customer support to address any queries, concerns, or issues related to bookings or the app.
- *Admin Side:* Manage all user activity, movies, and shows functionality.

## Design Decisions or Assumptions

- Responsive Design: The application is designed to be responsive and accessible on various devices.
- Modular Architecture: BookMyEntertainment is developed using a modular architecture for code reusability and scalability.
- RESTful API: The backend follows RESTful principles for clear and consistent API structure.
- Secure Authentication: User authentication and login processes use secure industry-standard methods.
- Data Validation: Input data is thoroughly validated on both client-side and server-side to prevent security vulnerabilities.
- Error Handling and Logging: Proper error handling and logging mechanisms are implemented to catch and log unexpected errors or exceptions.
- Database Optimization: The database design is optimized for efficient data retrieval and storage.

## API Endpoints (For Backend Applications)

### Movie Page

Here you can get all the movies with their details information.

| Method | Endpoint        | Description                              |
| ------ | --------------- | ---------------------------------------- |
| GET    | /api/movies     | Get all the movies with their details.  |

### Shows Page

Here you can get all the shows related to a particular movie.

| Method | Endpoint          | Description                              |
| ------ | ----------------- | ---------------------------------------- |
| GET    | /api/shows        | Get all the shows.                       |
| POST   | /api/bookshow     | Book a show for a specific movie.        |

### Users Management Page

The user management page allows the admin to perform CRUD operations on the user profiles.

| Method | Endpoint              | Description                               |
| ------ | --------------------- | ----------------------------------------- |
| GET    | /api/users            | Get a list of all logged-in users.        |
| PUT    | /api/users/:user_id   | Update a user's information.              |
| DELETE | /api/users/:user_id   | Delete a user's information.              |

### Movies Management Page

The movie management page allows the admin to perform CRUD operations on the movies.

| Method | Endpoint               | Description                              |
| ------ | ---------------------- | ---------------------------------------- |
| GET    | /api/movies            | Get a list of all movies available.      |
| GET    | /api/movies/s          | Get a list of all movies available.      |
| GET    | /api/movies/:movie_id  | Get details of a particular movie.       |
| PUT    | /api/movies/:movie_id  | Update details of a particular movie.    |
| DELETE | /api/movies/:movie_id  | Delete a particular movie.               |

### Shows Management Page

The shows management page allows the admin to perform CRUD operations on the shows.

| Method | Endpoint               | Description                              |
| ------ | ---------------------- | ---------------------------------------- |
| GET    | /api/shows             | Get a list of all shows available.       |
| PUT    | /api/shows/:show_id    | Update a show's information.             |
| POST   | /api/shows/:show_id    | Create a new show for a specific movie.  |
| DELETE | /api/shows/:show_id    | Delete a show for a specific movie.      |

### Booking Page

Here users can see their booked movie list.

| Method | Endpoint           | Description                                  |
| ------ | ------------------ | -------------------------------------------- |
| GET    | /api/bookshow      | Get a list of all bookings made by the user.|
| DELETE | /api/bookshow/:show_id | Cancel a booking made by the user.         |


## Installation & Getting Started

```bash
# Clone the repository
git clone https://github.com/Namrata0407/BookMyEntertainment.git

# Install dependencies and navigate to the project directory
cd BookMyEntertainment
npm install

# Set up environment variables
Create a .env file in the root directory and add the necessary environment variables (e.g., database connection string, API keys).

# Run the application
npm start

# For the backend
cd BookMyEntertainment
python app.py
