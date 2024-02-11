import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { MovieRequests } from "../../shared/constants/movieRequests";
import { deserialize } from "serializr";
import { Movie } from "../../models/Movies/movies.model";

const MovieRequestsService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetchTopRatedMovies = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(MovieRequests.topRated);
      console.log(response.data.results)
      const moviesData = deserialize(Movie, response.data.results)
      setLoading(false);
      return moviesData
    } catch (error: any) {
      setLoading(false);
      setError(error);
      console.error("Error fetching top rated movies:", error);
      throw error;
    }
  };

  return {
    fetchTopRatedMovies,
    loading,
    error,
  };
};

export default MovieRequestsService;
