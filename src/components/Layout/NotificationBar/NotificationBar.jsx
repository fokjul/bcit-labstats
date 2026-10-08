import './NotificationBar.scss';
import { useEffect, useRef, useState } from 'react';
import { xmark, arrowForwardBlue } from '../../../assets/icons';

const NotificationBar = ({
  text = 'Preview Flexible Learning Winter courses now. Registration opens Oct 22. Seats are limited so plan ahead!'
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const barRef = useRef(null);

  // Publishes the bar's rendered height so fixed-position elements on
  // mobile (e.g. CookieOverlay) can sit a fixed gap above it instead of
  // overlapping, even as the bar's height changes with text wrap or gets
  // dismissed.
  useEffect(() => {
    const setHeightVar = (height) => {
      document.documentElement.style.setProperty('--notification-bar-height', `${height}px`);
    };

    if (!isVisible || !barRef.current) {
      setHeightVar(0);
      return;
    }

    const el = barRef.current;
    setHeightVar(el.offsetHeight);

    const resizeObserver = new ResizeObserver(() => setHeightVar(el.offsetHeight));
    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
      setHeightVar(0);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className='notificationBar' ref={barRef}>
      <div className='notificationBar__content'>
        <svg
          className='notificationBar__icon'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' />
          <line x1='12' y1='11' x2='12' y2='16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
          <circle cx='12' cy='8' r='1' fill='currentColor' />
        </svg>
        <p className='notificationBar__text'>
          {text}
          <img src={arrowForwardBlue} alt='' className='notificationBar__chevron' />
        </p>
      </div>
      <button
        type='button'
        className='notificationBar__close'
        onClick={() => setIsVisible(false)}
        aria-label='Dismiss notification'
      >
        <img src={xmark} alt='' />
      </button>
    </div>
  );
};

export default NotificationBar;
