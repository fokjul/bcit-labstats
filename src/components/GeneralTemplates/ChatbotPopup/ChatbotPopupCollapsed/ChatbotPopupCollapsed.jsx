import './ChatbotPopupCollapsed.scss';

const ChatbotPopupCollapsed = ({handleCloseChatbotPopup}) => {
  return (
    <div className='chatbotPopupCollapsed'>
        <div className='chatbotPopupCollapsed__header'>
            <p className='chatbotPopupCollapsed__header-title'>Hi, I am ICES Virtual Assistant</p>
            <button 
                type='button'
                className='chatbotPopupCollapsed__header-button' 
                onClick={handleCloseChatbotPopup}>
            </button>
        </div>
        <div className='chatbotPopupCollapsed__body'>
            <p>Let me help you find answers faster!</p>
            <p></p>
        </div>
        
    </div>
  )
}

export default ChatbotPopupCollapsed