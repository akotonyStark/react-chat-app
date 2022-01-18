import './App.css'
import BottomPane from './components/BottomPane'
import LeftPane from './components/LeftPane'
import MainPane from './components/MainPane'

function App() {
  return (
    <div className='App'>
      <div className='content'>
        <div className='leftPane'>
          <LeftPane />
        </div>
        <div className='mainPane'>
          <MainPane />
          <div className='bottomPane'>
            <BottomPane />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
