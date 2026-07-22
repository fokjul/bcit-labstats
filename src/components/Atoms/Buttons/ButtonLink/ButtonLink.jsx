import './ButtonLink.scss'

const ButtonLink = ({label, handleClick, className = 'button-link-underline'}) => {
    return (
        <button className={className} onClick={handleClick}>
          <span className={`${className}-copy`}>{label}</span>
        </button>
      )
}

export default ButtonLink