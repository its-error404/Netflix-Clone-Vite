
import {serializable, alias, list, primitive} from 'serializr';

export class Movies { 

	@serializable(alias('adult', primitive()))
	adult?: boolean;

	@serializable(alias('backdrop_path', primitive()))
	backdropPath?: string;

	@serializable(alias('genre_ids', list(primitive())))
	genreIds?: number[] = [];

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('original_language', primitive()))
	originalLanguage?: string;

	@serializable(alias('original_title', primitive()))
	originalTitle?: string;

	@serializable(alias('overview', primitive()))
	overview?: string;

	@serializable(alias('popularity', primitive()))
	popularity?: number;

	@serializable(alias('poster_path', primitive()))
	posterPath?: string;

	@serializable(alias('release_date', primitive()))
	releaseDate?: string;

	@serializable(alias('title', primitive()))
	title?: string;

	@serializable(alias('video', primitive()))
	video?: boolean;

	@serializable(alias('vote_average', primitive()))
	voteAverage?: number;

	@serializable(alias('vote_count', primitive()))
	voteCount?: number;

}