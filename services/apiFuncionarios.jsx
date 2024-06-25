import axios from 'axios'

const api = axios.create({baseURL: 'https://reqres.in'})

export async function getFuncionarios() {
    try {
        const response = await api.get('/api/users')
        return response.data.data
    }
    catch(error) {
        console.error(`Erro ao buscar funcionários: ${error.message}`)
    }
}