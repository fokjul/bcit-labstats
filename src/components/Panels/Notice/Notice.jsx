import './Notice.scss'

const Notice = ({heading = '', descr, type}) => {
  return (
    <div className ={`noticePanel ${type}`}>
        <p className='noticePanel__heading'>{heading}</p>
        <p className='noticePanel__descr'>{descr}</p>
    </div>
  )
}

export default Notice;