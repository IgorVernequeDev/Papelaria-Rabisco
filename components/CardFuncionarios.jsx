export default function CardFuncionario(props) {
    return (
        <div className="card align-items-center m-4">
            <div className="card-header w-100 text-center">
                <h5 className="card-title">{props.first_name} {props.last_name}</h5>
            </div>
            <img src={`${props.avatar}`} className="card-img-top w-75 py-4" alt="..." />
            <div className="card-body">
                <p>{props.email}</p>
            </div>
        </div>
    )
}