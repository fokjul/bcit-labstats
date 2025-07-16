import './TextLink.scss'

const TextLink = ({text, handleClick}) => {
  return (
    <button className='text-link' onClick={handleClick}>
      <span className='text-link-copy'>{text}</span>
    </button>
  )
}

export default TextLink