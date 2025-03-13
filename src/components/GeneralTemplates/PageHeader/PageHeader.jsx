import './PageHeader.scss';

const PageHeader = ({title}) => {
  return (
    <div className='pageHeader'>
        <div className='pageHeader__container'>
            <div className='pageHeader__container-text'>
                <h1 className='pageHeader__title'>{title}</h1>
            </div>
        
        </div>
    </div>
  )
}

export default PageHeader