export interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

export interface MovieList {
  Search: MovieItem[];
  totalResults: string;
  Response?: string;
  Error?: string;
}
