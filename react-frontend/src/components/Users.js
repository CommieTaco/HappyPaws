import { useEffect, useState } from 'react'
import Table from './Table'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const usersList = await fetchUsers()
            setUsers(usersList)
        }

        getUsers()
    })

    // Fetch all users from DB
    const fetchUsers = async () => {
        const res = await fetch('http://localhost:9090/api/pets')
        console.log("Res: ",res)
        const data = await res.json()
        console.log("Data: ", data)
        return data
    }

    return (
        <div>
            <h3>Yeet</h3>
            {/* <Table tableHeaders={users}/> */}
        </div>
    )
}

export default Users
