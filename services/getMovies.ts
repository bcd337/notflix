export type Movies = { id: number, title: string, backdrop_path: string }

async function getMovies({ genre, signal }: { genre: number, signal: AbortSignal }) {
  const data = new URLSearchParams({
    api_key: process.env.NEXT_PUBLIC_API_KEY || '',
    language: 'en-US',
    page: '1',
    with_genres: genre.toString(),
    sort_by: 'popularity.desc',
  })

  const resMovies = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/discover/movie?${data.toString()}`, 
    {signal}
  ).then((res) => res.json())

  const movies: Movies[] = resMovies.results

  return movies.map(({ id, title, backdrop_path }) => ({ id, title, backdrop_path }))
}

export default getMovies
