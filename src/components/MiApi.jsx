import { useEffect, useState } from "react"
import ListarPokemones from "./ListarPokemones"
import Ordenar from "./Ordenar"

const MiApi = ({buscarPokemon}) => {
    //estado inicial para almacener datos de la API
    const [pokeDetails, setPokeDetails] = useState([])
    const [reset, setReset] = useState(pokeDetails)
    
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
    
        const detailsData = await Promise.all(detailsPromises)

        setPokeDetails(detailsData)
        setReset(detailsData)
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    //Filtro de busqueda a través del input de Buscador.jsx
    const aplicarBusqueda = pokeDetails.filter((pokemon) => {
        return (
            pokemon.name.toLowerCase().includes(buscarPokemon.toLowerCase()) ||
            pokemon.id.toString().includes(buscarPokemon.toString())
        )
    })

    const ordenarAlf = () => {
        const ordenAlf = [...aplicarBusqueda]
        ordenAlf.sort((x, y) => x.name.localeCompare(y.name))
        setPokeDetails(ordenAlf)
    }

    const ordenarNum = () => {
        const ordenNum = [...aplicarBusqueda]
        ordenNum.sort((x, y) => x.id - y.id)
        setPokeDetails(ordenNum)
    }

    const resetear = () => {
        setPokeDetails(reset)
    }

    //console.log(pokeDetails, aplicarBusqueda)
    return(
        <>  
            <Ordenar 
                ordenarAlf={ordenarAlf}
                ordenarNum={ordenarNum}
                reset={resetear}
            />
            <div className="container text-center d-flex">
                <ListarPokemones pokeDetails={aplicarBusqueda}/>
            </div>
        </>
    )
}

export default MiApi