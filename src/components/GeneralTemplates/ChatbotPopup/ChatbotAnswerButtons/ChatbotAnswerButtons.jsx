import './ChatbotAnswerButtons.scss'

const ChatbotAnswerButtons = ({label, handleBtnClick}) => {
  return (
    <button onClick={() => handleBtnClick(label)}>{label}</button>
  )
}

export default ChatbotAnswerButtons