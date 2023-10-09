import { useState } from "react"
import CardDetail from "./CardDetail"

const ListarPokemones = ({pokeDetails}) => {

    const [details, setDetails] = useState(null)

    const consultarDetails = (pokeId) => {
        const pokemonConsultado = pokeDetails.filter(pokemon => pokemon.id == pokeId)
        setDetails(pokemonConsultado)
    }

    return (
        <>  

            <div className="row">
                {pokeDetails.map((pokemon) =>
                    <div className="col" key={pokemon.id}>
                        <div className="m-2 card" style={{width: '15rem'}} onClick={()=> {consultarDetails(pokemon.id)}}>
                                <p>{`${pokemon.id}`}</p>
                                <img src={`${pokemon.sprites.front_default}`} className="card-img-top" alt={`imagen de ${pokemon.name}`}></img>
                                <h5 className="card-text fs-6">{`${pokemon.name}`}</h5>
                        </div>
                    </div>
                )}
            </div>
            <div className="row">
                <CardDetail pokemonConsultado={details}/>
            </div>
        </>
    )
}

export default ListarPokemones