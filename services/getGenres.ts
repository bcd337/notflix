export type Genres = { id: number, name: string }

async function getGenres(signal?: AbortSignal) {
  const data = new URLSearchParams({
    api_key: process.env.NEXT_PUBLIC_API_KEY || '',
    language: 'en-US',
  })

  const { genres } = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?${data.toString()}`,
    { signal }
  ).then((res) => res.json())
  
  return genres as Genres[]
}

export default getGenres
