import React from 'react';

export const GifGridItem = ({ id, title, url }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white animate__animated animate__backInUp animate__delay-2s">
        <img className="w-full" src={url} alt={title} />
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{title}</p>
        </div>
    </div>
  )
}
