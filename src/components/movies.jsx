import React, { Component } from "react";
import { getMovie, getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    console.log(movie);
    let movies = this.state.movies.filter((m) => m._id !== movie._id);
    //  this.setState({ movies: movies });
    this.setState({ movies });
  };

  render() {
    console.log("movies-------------", this.state.movies);

    if (this.state.movies.length === 0)
      return <p>there is no moives in the database</p>;

    return (
      <div>
        <p> Showing {this.state.movies.length} moives in the database </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              // genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
              // numberInStock: 6,
              // dailyRentalRate: 2.5,
              this.state.movies.map((movie) => {
                return (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
