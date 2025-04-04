import Image from 'next/image'
import React, { Suspense } from 'react'


export async function generateStaticParams() {
    // Fetch popular movies to pre-render
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    
    return data.results.map((movie) => ({
      id: movie.id.toString(),
    }));
  }
  


export default async function MoviePage({params}) {
    const movieId = params.id
    const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`, {next: {revalidate: 10000}})
    const movie = await res.json()
  return (
    <Suspense fallback={true}>
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-4 mt-10'>
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            className='rounded-lg '>
            </Image>
            <div className='p-4 '>
                <h2 className='text-lg mb-3 font-bold'>
                     {movie.title || movie.name}
                </h2>
                <p className='text-lg mb-3'>{movie.overview}</p>
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>Date Released:</span>
                    {movie.release_date || movie.first_air_date}
                </p>
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>Rating</span>
                    {movie.vote_count}
                </p>
            </div>
        </div>
    </div>
    </Suspense>
  )
}
