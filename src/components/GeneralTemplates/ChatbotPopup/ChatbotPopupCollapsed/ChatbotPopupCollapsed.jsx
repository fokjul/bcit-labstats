import './ChatbotPopupCollapsed.scss';

const ChatbotPopupCollapsed = ({handleCloseChatbotPopup, handleOpenChatbotPopup}) => {
  return (
    <div className='chatbotPopupCollapsed'>
        <div className='chatbotPopupCollapsed__header'>
            <p className='chatbotPopupCollapsed__header-title'>BCIT AI Assistant</p>
            <button 
                type='button'
                className='chatbotPopupCollapsed__header-button' 
                onClick={handleCloseChatbotPopup}>
            </button>
        </div>
        <div className='chatbotPopupCollapsed__body'>
            <p>Have a question? Let our AI help</p>
             <div className='chatbotPopupCollapsed__body-input'>
                <input type="text" placeholder='Save your time — ask AI now!' id='chatbotIinput' name='chatbotIinput' onFocus={handleOpenChatbotPopup}/>
            </div>
        </div>
        
    </div>
  )
}

export default ChatbotPopupCollapsed