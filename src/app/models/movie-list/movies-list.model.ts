export interface MovieItem {
  title: string;
  year: string;
  imdbID: string;
  poster: string;
}

export interface MovieList {
  movies: MovieItem[];
  totalResults: string;
}
