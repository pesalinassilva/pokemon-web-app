const CardDetail = ({pokemonConsultado}) => {
    return (
        <>
            {pokemonConsultado ? 
            <div className="col m-2">
                <div className="card" style={{width: '16rem'}}>
                    <img src={`${pokemonConsultado[0].sprites.front_default}`} className="card-img-top" alt={`imagen de ${pokemonConsultado[0].name}`}></img>
                    <div className="card-body">
                        <div className="card-header">
                            {`${pokemonConsultado[0].name}`}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Propiedad 1</li>
                            <li className="list-group-item">Propiedad 2</li>
                            <li className="list-group-item">Propiedad 3</li>
                        </ul>
                        <a href={`https://www.wikidex.net/wiki/${pokemonConsultado[0].name}`} className="btn btn-primary" target={`_blank`}>Más información</a>
                    </div>
                </div>
            </div>:
            <div className="col m-2">
                <div className="card" style={{width: '16rem'}}>
                    <p>Aca aparecerá la info del pokemon que selecciones!</p>
                </div>
            </div>
            }  
        </>
    )
}

export default CardDetail