import './CookieOverlay.scss';
import FormButton from '../../Atoms/Buttons/FormButton/FormButton';

const CookieOverlay = ({ title, children, isOverlayOpen, btnLabel = 'submit', handlePrimaryBtnClick, secondaryBtn = false, secondaryBtnLabel, handleSecondaryBtnClick }) => {

  return (
    isOverlayOpen &&
    <div className='cookieOverlay'>
        <div className='cookieOverlay__title'>
            <h4>{title}</h4>
        </div>
        <div className='cookieOverlay__content'>
            {children}
        </div>
        <div className='cookieOverlay__btn'>
            <FormButton
                value={btnLabel}
                type='submit'
                handleBtnClick={handlePrimaryBtnClick}
                isButtonDisabled={false}
            />
            {secondaryBtn && (
                <FormButton
                    value={secondaryBtnLabel}
                    type='button'
                    handleBtnClick={handleSecondaryBtnClick}
                    isButtonDisabled={false}
                    className='formBtnSecondary'
                />
            )}
        </div>
    </div>
  );
};

export default CookieOverlay;
