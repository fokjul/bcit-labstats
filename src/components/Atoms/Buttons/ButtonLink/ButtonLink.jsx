import './ButtonLink.scss'

const ButtonLink = ({label, handleClick}) => {
    return (
        <button className='button-link' onClick={handleClick}>
          <span className='button-link-copy'>{label}</span>
        </button>
      )
}

export default ButtonLink