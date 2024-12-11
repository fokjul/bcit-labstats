import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import './App.scss'


function App() {

  return (
    <Router>
      <div className='app'>
        <div className='wrapper'>
        <AppRoutes /> {/* Render all routes */}
        </div>
      </div>
    </Router>
  )
}

export default App
