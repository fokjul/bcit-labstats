import './ChatLauncher.scss';

const ChatLauncher = ({ handleBtnClick = () => {} }) => {
  return (
    <button
      type='button'
      className='chatLauncher'
      onClick={handleBtnClick}
      aria-label='Open chat'
    />
  );
};

export default ChatLauncher;
