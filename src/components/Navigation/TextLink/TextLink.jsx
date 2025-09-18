import './TextLink.scss'

const TextLink = ({text, handleClick, href}) => {
if (href) {
  return (
    <a href={href}>{text}</a>
  )
}
  return (
    <button className='text-link' onClick={handleClick}>
      <span className='text-link-copy'>{text}</span>
    </button>
  )
}

export default TextLink