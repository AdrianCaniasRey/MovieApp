export interface MovieItemResponse {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}

export interface MovieListResponse {
    Search: MovieItemResponse[];
    totalResults: string;
    Response?: string;
    Error?: string;
}
