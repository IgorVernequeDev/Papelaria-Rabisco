import CardFuncionarios from '@/components/CardFuncionarios'

export default function CardList(props) {
    const { funcionarios } = props
    return (
        <div className='container mt-5 ms-2'>
            <div className='row w-100'>
                {funcionarios.map(function (funcionario, index){
                    return (
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4' key={index}>
                            <CardFuncionarios
                            email={funcionario.email}
                            first_name={funcionario.first_name}
                            last_name={funcionario.last_name}
                            avatar={funcionario.avatar}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}