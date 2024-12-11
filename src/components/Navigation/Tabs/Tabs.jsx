import { renderToPipeableStream } from 'react-dom/server';
import './Tabs.scss';

const Tabs = ({tabClicked, setTabClicked, terms, courseDetails, currentOfferings, setIsViewDetailsClicked}) => {

const handleTabClick = (e) => {
    setTabClicked({
        id: e.target.id,
        isClicked: true
    })
    setIsViewDetailsClicked(prev => ({...prev, isClicked: false}))
}
  return (
    <>
      <ul className='tabBar'>
          {terms?.map((term, index) => {
              return <li id={term} key={index} className={`tabBar__btn ${tabClicked.id === term ? 'selected' : ''}`} onClick={handleTabClick}>{term} </li>
          })}
      </ul>
      <div className='offerings__list'>
        <p>{`Below are ${currentOfferings?.length} offerings of ${courseDetails?.crn} for the ${tabClicked.id} term.`}</p>
      </div>
     
    </>
   

  )
}

export default Tabs