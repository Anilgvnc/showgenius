import axios from "axios";

export enum MediaType {
    MOVIE = 'movie',
    TV = 'tv',
    PERSON = 'person'
}

export enum ContentType {
    MOVIE = 0,
    TV = 1
}

export interface Content {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    imdb_id?: string;
}

interface MovieResults {
    movie_results: Content[];
    tv_results: Content[];
}


export default async function FetchMovieDetails(id: string, type: ContentType) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/find/${id}?api_key=${process.env.TMDB_API_KEY}&external_source=imdb_id`);
        const data: MovieResults = response.data;

        // Check if the response is valid
        if (response) {
            if (type === ContentType.MOVIE) {
                return data.movie_results[0];
            }
            else {
                return data.tv_results[0];
            }
        }
    } catch (error) {
        console.error(`Failed to fetch details for IMDB ID ${id}:`, error);
        return null;
    }
}

export async function FetchContent(id: number, type: string) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.TMDB_API_KEY}`);
        const itemWithType = { ...response.data, "media_type": type };
        const data: Content = itemWithType;

        // Check if the response is valid
        if (response) {
            return data;
        }

    } catch (error) {
        console.error(`Failed to fetch details for ${type} ID ${id}:`, error);
        return null;
    }
}

export async function FetchVideo(id: number, type: string) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.TMDB_API_KEY}`)
        const video = response.data.results.find((vid: { site: string; }) => vid.site === 'YouTube');
        if (video) {
            return video.key;
        }
    } catch (error) {
        console.error(error);
    }
}

export async function SearchContent(query: string) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${process.env.TMDB_API_KEY}`);
        const data: Content[] = response.data.results;

        // Check if the response is valid
        if (response) {
            return data;
        }
    } catch (error) {
        console.error(`Failed to search for query ${query}:`, error);
        return null;
    }
}