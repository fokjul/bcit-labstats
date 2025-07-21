import './Notice.scss'

const Notice = ({heading = '', descr, type}) => {
  return (
    <div className ={`noticePanel ${type}`}>
        <span className='noticePanel__descr'><strong>{heading}</strong>{descr}</span>
    </div>
  )
}

export default Notice;