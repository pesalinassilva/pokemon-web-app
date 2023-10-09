import './App.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import { useState } from 'react'
import Encabezado from './components/Encabezado'

function App() {

  const [busqueda, setBusqueda] = useState('')

  return (
    <div className='container' style={{width: '100%'}}>
        <Encabezado />
        <Buscador 
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />
        <MiApi buscarPokemon={busqueda}/>
    </div>
  )
}

export default App
