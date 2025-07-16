import './TextLinkSmall.scss'

const TextLinkSmall = ({text, source}) => {
  return (
    <a href={source}>
        <span className='text-linkSmall-copy'>{text}</span>
    </a>
  )
}

export default TextLinkSmall