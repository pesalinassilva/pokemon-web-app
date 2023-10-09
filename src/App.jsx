import './App.css'
import MiApi from './components/MiApi'
import Encabezado from './components/Encabezado'

function App() {

  return (
    <div className='container' style={{width: '100%'}}>
        <Encabezado />
        <MiApi/>
    </div>
  )
}

export default App
