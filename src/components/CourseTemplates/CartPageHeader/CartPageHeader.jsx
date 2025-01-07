import './CartPageHeader.scss';

const CartPageHeader = ({title}) => {
  return (
    <div className='cartPageHeader'>
        <div className='cartPageHeader__container'>
            <div className='cartPageHeader__container-text'>
                <h1 className='cartPageHeader__title'>{title}</h1>
            </div>
        
        </div>
    </div>
  )
}

export default CartPageHeader