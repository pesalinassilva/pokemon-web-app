const Ordenar = ({ordenarNum, ordenarAlf, reset}) => {
    return (
        <>
            <button type="button" className="btn btn-primary m-1" onClick={ordenarAlf}>Ordenar Alfabeticamente</button>
            <button type="button" className="btn btn-primary m-1" onClick={ordenarNum}>Ordenar según número de pokemon</button>
            <button type="button" className="btn btn-primary m-1" onClick={reset}>Volver a empezar</button>
        </>
    )
}

export default Ordenar