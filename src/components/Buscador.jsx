const Buscador = ({fraseBusqueda, buscar}) => {
    
    return (
        <>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Ingresa el nombre o número de pokemon que deseas revisar"
                onChange={buscar}
                value={fraseBusqueda}
            />
        </>

    )
}

export default Buscador