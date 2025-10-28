import './ChatbotPopupExpanded.scss';
import { useState } from 'react';
import ButtonIcon from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon';
import ChatbotAnswerButtons from '../ChatbotAnswerButtons/ChatbotAnswerButtons';

const ChatbotPopupExpanded = ({handleBtnClick}) => {

const [selectedSuggestion, setSelectedSuggestion] = useState('')

const handleSuggestionBtnClick = (value) => {
    setSelectedSuggestion(value)
}


  return (
    <div className='chatbotPopup'>
        <div className='chatbotPopup__header'>
            <p className='chatbotPopup__header-title'>ICES Virtual Assistant</p>
            <button type='button' className='chatbotPopup__header-button chatbotPopup__header-button--expanded' onClick={handleBtnClick}></button>
        </div>
        <div className='chatbotPopup__body'>
            <div className='chatbotPopup__body-content'>
                <div>
                    <p>What do you want to know?</p>
                </div>
                <div className='chatbotPopup__body-content-suggestions'>
                    <ChatbotAnswerButtons
                        label='What is the service fee for general application?'
                        handleBtnClick={handleSuggestionBtnClick}
                        
                    />
                    <ChatbotAnswerButtons
                        label='What are the requirements for general application?'
                        handleBtnClick={handleSuggestionBtnClick}
                    />
                    <ChatbotAnswerButtons
                        label='How can I apply for general application?'
                        handleBtnClick={handleSuggestionBtnClick}
                    />
                </div>
            </div>
            <div className='chatbotPopup__body-input'>
                <input type="text" placeholder='Ask ICES...' id='chatbotIinput' name='chatbotIinput' value={selectedSuggestion} onChange={(e) => setSelectedSuggestion(e.target.value)}/>
                <ButtonIcon 
                    handleBtnClick={()=> {}}
                    id='chatbotPopup__body-input-btn'
                />
            </div>
        </div>
        
    </div>
  )
}

export default ChatbotPopupExpanded