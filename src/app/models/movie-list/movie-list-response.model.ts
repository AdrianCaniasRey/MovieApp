export interface MovieResponseItem {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}

export interface MovieResponseList {
    Search: MovieResponseItem[];
    totalResults: string;
    Response?: string;
    Error?: string;
}
