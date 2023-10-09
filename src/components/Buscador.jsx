const Buscador = ({busqueda, setBusqueda}) => {
    
    const guardarBusqueda = (e) => {
        setBusqueda(e.target.value)
    }

    return (
        <>
        <input
            type="text"
            className="form-control mb-3"
            placeholder="Ingresa el nombre o número de pokemon que deseas revisar"
            onChange={guardarBusqueda}
            value={busqueda}
        />
            {/* <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Ingresa el nombre o número de pokemon que deseas revisar"
                    onChange={guardarBusqueda}
                    value={busqueda}
                />
                <button className="btn btn-outline-secondary mb-3" type="button" id="button-addon2" onClick={guardarBusqueda}>Buscar</button>
            </div> */}
        </>

    )
}

export default Buscador