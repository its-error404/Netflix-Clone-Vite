export const displayRandomMovie = (movies: any) => {
    const movie = movies[Math.floor(Math.random() * movies.length)]
    return movie
}