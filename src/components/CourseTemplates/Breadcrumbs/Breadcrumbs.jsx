import './Breadcrumbs.scss';
import CartIcon from '../../Atoms/CartIcon/CartIcon';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Breadcrumbs = ({crn, subject}) => {
  return (
    <div className='breadcrumbBar'>
        <div className='breadcrumbBar__container'>
            <ul className='breadcrumbs'>
                <li className='breadcrumbs-item'>test</li>
                <li className='breadcrumbs-item'>test</li>
                { crn && subject 
                  ? <>
                    <li className='breadcrumbs-item'>{subject}</li>
                    <li className='breadcrumbs-item'>{crn}</li>
                    </>
                  : <li className='breadcrumbs-item'>test</li> 
                }
                
            </ul>
            <ul className='breadcrumbs--mobile'>
                <li className='breadcrumbs-item'>flex...</li>
                <li className='breadcrumbs-item'>com...</li>
                <li className='breadcrumbs-item'>{crn}</li>
            </ul>
            {crn && <CartIcon />}
        </div>
        
    </div>
    
  )
}

export default Breadcrumbs