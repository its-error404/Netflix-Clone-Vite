import { alias, primitive, serializable } from "serializr";

export class Movie {

@serializable(alias('original_title', primitive()))
originalTitle?: string;

@serializable(alias('overview', primitive()))
overview?: string;

@serializable(alias('release_date', primitive()))
releaseDate?: string;

@serializable(alias('poster_path', primitive()))
posterPath?: string;

}