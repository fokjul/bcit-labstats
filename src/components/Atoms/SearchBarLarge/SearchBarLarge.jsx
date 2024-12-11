import React from 'react';
import './SearchBarLarge.scss';
import { search } from '../../../assets/icons'

const SearchBarLarge = () => {
  return (
    <>
       <div className='searchBar'>
        <input className='searchBar__input'/>
        <button className='searchBar__button' type='submit'>
            <img src={search} alt='search icon' className='searchBar__button-icon'/>
        </button>
      </div>
      <div className='searchBar--mobile'>
          <button className='searchBar--mobile__button' type='submit'>
              <img src={search} alt='search icon' className='searchBar--mobile__button-icon'/>
          </button>
      </div>
    </>
    
  )
}

export default SearchBarLarge