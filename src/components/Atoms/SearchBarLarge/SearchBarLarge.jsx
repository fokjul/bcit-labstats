import React from 'react';
import './SearchBarLarge.scss';
import { search } from '../../../assets/icons'

const SearchBarLarge = ({placeholder = 'Search', value, onChange}) => {
  return (
    <>
       <div className='searchBar'>
        <input className='searchBar__input' placeholder={placeholder} value={value} onChange={onChange}/>
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