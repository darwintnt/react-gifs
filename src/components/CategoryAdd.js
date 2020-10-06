import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(category => [inputValue, ...category]);
      setInputValue('');
    }

  };


  return (

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border-solid border-transparent px-4 py-3 w-100" />
      <div className="pt-8 pb-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </div>
    </form>

  )
}

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
}
