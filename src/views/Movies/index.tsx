import React, { useEffect, useState } from 'react'
import MovieRequestsService from '../../services/Movies/movies.service'
import { Movies } from '../../models/Movies/movies.model'
import { displayRandomMovie } from '../../shared/utils/randomSuggestion'
import { imageLinks } from '../../shared/constants/imageLink'
import './moviesComponent.scss'
import { Space } from 'antd'
import { formatDate } from '../../shared/utils/formatDate'
import SharedButton from '../../shared/Reusable/Button'
import { truncateText } from '../../shared/utils/truncateText'
const MoviesComponent = () => {

const [Movies, setMovies] = useState<Movies>()
const {fetchTopRatedMovies} = MovieRequestsService()

useEffect(()=> {

    const fetchMoviesData = async () => {
        try {
            const data = await fetchTopRatedMovies()
            setMovies(data)
        } catch (err) {
            console.log(err)
        }
    }

    fetchMoviesData()
},[])

const randomMovie = typeof Movies !== 'undefined' ? displayRandomMovie(Movies) : undefined;

  return (
    <div className='movies-component'>
        <div className='image-gradient'></div>
        <div className='image-container'>
            <img src={`${imageLinks.imageLink}${randomMovie?.backdropPath}`} alt={randomMovie?.title}/>
        </div>
        <div className='movie-information'>
            <Space direction='horizontal' size={20}>
            <SharedButton className='play-button'>Play</SharedButton>
            <SharedButton className='watch-later-button'>Add to Watch Later</SharedButton>
            </Space>
            <Space direction='vertical' className='movie-details'>
            <h1>{randomMovie?.title}</h1>
            <p className='movie-overview'>
               {randomMovie?.overview}
            </p>
            <h3>Airing from: <span className='movie-date'>{formatDate(randomMovie?.releaseDate)}</span></h3>
            </Space>
        </div>
    </div>
  )
}

export default MoviesComponent