import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { CategoryGrid } from './components/CategoryGrid';



const GifExpertApp = () => {

  const categoriesDefault = ['One Punch'];

  const [categories, setCategories] = useState(categoriesDefault);


  return (

    <div className="">
      <h1 className="uppercase text-2xl pb-8">Gif Expert App</h1>
      <CategoryAdd setCategories={setCategories} />

      <ol>
        {
          categories.map(category => (
            <CategoryGrid
              key={category}
              category={category} />
          ))
        }
      </ol>

    </div>

  );


}


export default GifExpertApp;