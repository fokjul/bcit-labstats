import './ChatbotPopupCollapsed.scss';
import ButtonIcon from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon';

const ChatbotPopupCollapsed = ({handleCloseChatbotPopup, handleOpenChatbotPopup}) => {
  return (
    <div className='chatbotPopupCollapsed'>
        <div className='chatbotPopupCollapsed__header'>
            <p className='chatbotPopupCollapsed__header-title'>ICES Virtual Assistant</p>
            <button 
                type='button'
                className='chatbotPopupCollapsed__header-button' 
                onClick={handleCloseChatbotPopup}>
            </button>
        </div>
        <div className='chatbotPopupCollapsed__body'>
            <p>Have a question about applications?</p>
            {/* <p>Save time — ask ICES now.</p> */}
             <div className='chatbotPopupCollapsed__body-input'>
                <input type="text" placeholder='Save your time— ask ICES now!' id='chatbotIinput' name='chatbotIinput' onFocus={handleOpenChatbotPopup}/>
                {/* <ButtonIcon 
                    handleBtnClick={()=> {}}
                    id='chatbotPopup__body-input-btn'
                /> */}
            </div>
        </div>
        
    </div>
  )
}

export default ChatbotPopupCollapsed