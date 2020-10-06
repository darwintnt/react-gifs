import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';
import { Loading } from './Loading';


export const CategoryGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category.toUpperCase()}</h3>

      <Loading status={loading} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {
          images.map((gif) => (
            <GifGridItem
              key={gif.id}
              {...gif} />
          ))
        }
      </div>
    </>
  )
}
