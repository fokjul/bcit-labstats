import './Breadcrumbs.scss';
import CartIcon from '../../Atoms/CartIcon/CartIcon';

const Breadcrumbs = ({crn, subject}) => {
  return (
    <div className='breadcrumbBar'>
        <div className='breadcrumbBar__container'>
            <ul className='breadcrumbs'>
                <li className='breadcrumbs-item'>level 1</li>
                <li className='breadcrumbs-item'>level 2</li>
                { crn && subject 
                  ? <>
                    <li className='breadcrumbs-item'>{subject}</li>
                    <li className='breadcrumbs-item'>{crn}</li>
                    </>
                  : <li className='breadcrumbs-item'>level 3</li> 
                }
                
            </ul>
            <ul className='breadcrumbs--mobile'>
                <li className='breadcrumbs-item'>level 1</li>
                <li className='breadcrumbs-item'>level 2</li>
                <li className='breadcrumbs-item'>{crn}</li>
            </ul>
            {crn && <CartIcon />}
        </div>
        
    </div>
    
  )
}

export default Breadcrumbs