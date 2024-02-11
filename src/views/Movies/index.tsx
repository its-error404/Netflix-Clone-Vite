import React, { useEffect, useState } from 'react'
import MovieRequestsService from '../../services/Movies/movies.service'
import { Movie } from '../../models/Movies/movies.model'

const Movies = () => {

const [Movies, setMovies] = useState<Movie>()
const {fetchTopRatedMovies} = MovieRequestsService()

useEffect(()=> {
    const fetchMoviesData = async () => {
        try {
            const data = await fetchTopRatedMovies()
            console.log(data)
            setMovies(data)
        } catch (err) {
            console.log(err)
        }
    }

    fetchMoviesData()
},[])
  return (
    <div>
        
    </div>
  )
}

export default Movies