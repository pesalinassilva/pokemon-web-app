import { useState } from "react"
import CardDetail from "./CardDetail"

const ListarPokemones = ({pokemones}) => {

    const [details, setDetails] = useState(null)

    const consultarDetails = (pokeId) => {
        const pokemonConsultado = pokemones.filter(pokemon => pokemon.id == pokeId)
        window.scrollTo(0,0)
        setDetails(pokemonConsultado)
    }

        //pasar primera letra a mayuscula
    const nombreMayus = (nombre) => {
        var primeraLetra = nombre.charAt(0).toUpperCase()
        var resto = nombre.slice(1)
        var nombreFinal = primeraLetra + resto
        return nombreFinal
    }

    return (
        <>  

            <div className="row mb-4">
                {pokemones.map((pokemon) =>
                    <button className="col btn btn-info" key={pokemon.id}>
                        <div className="m-2 card" style={{width: '15rem'}} onClick={()=> {consultarDetails(pokemon.id)}}>
                                <p>{`${pokemon.id}`}</p>
                                <img src={`${pokemon.sprites.front_default}`} className="card-img-top" alt={`imagen de ${pokemon.name}`}></img>
                                <h5 className="card-text fs-6">{nombreMayus(pokemon.name)}</h5>
                        </div>
                    </button>
                )}
            </div>
            <div className="row">
                <CardDetail
                    pokemonConsultado={details}
                    nombreMayus={nombreMayus}
                />
            </div>
        </>
    )
}

export default ListarPokemones