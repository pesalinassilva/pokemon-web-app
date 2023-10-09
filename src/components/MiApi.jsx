import { useEffect, useState } from "react"
import ListarPokemones from "./ListarPokemones"
import Ordenar from "./Ordenar"
import Buscador from './Buscador'

const MiApi = () => {
    //estado inicial para almacener datos de la API
    const [pokeData, setPokeData] = useState([])
    const [pokemones, setPokemones] = useState(pokeData)
    const [fraseBusqueda, setFraseBusqueda] = useState('')
    const [ordenAlfabetico, setOrdenAlfabetico] = useState(null)
    const [ordenId, setOrdenId] = useState(null)

    
    //Función asincrona para llenado de la API
    const getData = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        const response = await fetch (url)
        const data = await response.json()

        const detailsPromises = data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url)
            const dataDetails = await response.json()
            return dataDetails;
        })
        
        const detailsData = await Promise.all(detailsPromises)  //se utiliza un Promise.all para que dentro del map se espere que se cumplan todas las promesas antes de agregarlas a detailsData

        setPokeData(detailsData) //Estado para mantener la data original en caso de que sea necesario.
        setPokemones(detailsData)   //estado para trabajar la información
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    //Filtro de busqueda a través del input de Buscador.jsx

    const buscar = (e) => {
        const textoBusqueda = e.target.value
        const aplicarBusqueda = pokeData.filter((pokemon) => {
            return (
                pokemon.name.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
                pokemon.id.toString().includes(textoBusqueda.toString())
                )
            })
        setFraseBusqueda(textoBusqueda)
        setPokemones(aplicarBusqueda)
    }

    //Función para ordenar alfabeticamente
    const ordenarAlf = () => {
        const ordenAlf = [...pokemones]
        if (ordenAlfabetico){
            setPokemones(pokemones.reverse())
            setOrdenAlfabetico(null)
        }else{
            ordenAlf.sort((nombre1, nombre2) => nombre1.name.localeCompare(nombre2.name))
            setOrdenAlfabetico(ordenAlf)
            setPokemones(ordenAlf)
        }
    }

    //funcion para ordenar según id
    const ordenarNum = () => {
        const ordenNum = [...pokemones]
        if (ordenId){
            setPokemones(pokemones.reverse())
            setOrdenId(null)
        }else{
            ordenNum.sort((id1, id2) => id1.id - id2.id)
            setOrdenId(ordenNum)
            setPokemones(ordenNum)
        }
    }

    return(
        <>  
            <Buscador 
                fraseBusqueda={fraseBusqueda}
                buscar={buscar}
            />
            <Ordenar 
                ordenarAlf={ordenarAlf}
                ordenarNum={ordenarNum}
            />
            <div className="container text-center d-flex">
                <ListarPokemones pokemones={pokemones}/>
            </div>
        </>
    )
}

export default MiApi