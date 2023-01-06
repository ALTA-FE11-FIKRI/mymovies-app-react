type GenreType = {
    id?: number;
    name?: string;
};

export interface VideoType {
    id?: string;
    key?: string;
    name?: string;
};

export interface MovieType {
    id?: number;
    title?: string;
    poster_path?: string;
    overview?: string;
    release_date?: string;
    runtime?: number;
    genres?: GenreType[];
    videos?: {
        result: VideoType[];
    };
};