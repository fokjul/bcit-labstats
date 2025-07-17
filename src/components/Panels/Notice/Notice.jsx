import './Notice.scss'

const Notice = ({heading = '', descr, type}) => {
  return (
    <div className ={`noticePanel ${type}`}>
        <span className='noticePanel__heading'>{heading}</span>
        <p className='noticePanel__descr'>{descr}</p>
    </div>
  )
}

export default Notice;