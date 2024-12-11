import './TopMenuMobile.scss';

const TopMenuMobile = () => {
  return (
    <div className='mobileMenu'>
        <button className='mobileMenu__button' type='submit'>
        <FontAwesomeIcon icon="fa-regular fa-bars" />
            
        </button>
    </div>
  )
}

export default TopMenuMobile