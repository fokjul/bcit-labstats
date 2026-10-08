import './LeaveFeedbackButton.scss';

const LeaveFeedbackButton = ({ handleBtnClick = () => {} }) => {
  return (
    <button
      type='button'
      className='leaveFeedbackButton'
      onClick={handleBtnClick}
    >
      Leave feedback
    </button>
  );
};

export default LeaveFeedbackButton;
