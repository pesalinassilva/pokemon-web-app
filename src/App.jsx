import './App.css'
import MiApi from './components/MiApi'
import Encabezado from './components/Encabezado'
import Footer from './components/Footer'

function App() {

  return (
    <div className='container text-light' style={{width: '100%'}}>
        <Encabezado />
        <MiApi/>
        <Footer />
    </div>
  )
}

export default App
