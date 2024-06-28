import { ChangeEvent, useEffect, useState } from "react"
import User from "../../components/User/User"
import axios from "axios"


export interface TPops {
    name: string,
    id: number,
    username: string,
    email: string,
    password: number
}

const MainPage = () => {
    const [id, setId] = useState<number>(1)
    const [user, setUser] = useState<TPops>({
        name: '',
        id: id,
        username: '',
        email: '',
        password: 0
    })
    const [users, setUsers] = useState<TPops[]>([])

    const postUsers = async () => {
        const response = await axios.post('http://localhost:8000/posts', user)
        setUsers([...users, response.data])
        setId(id + 1)
    }
    const getUsers = async () => {
        const response = await fetch('http://localhost:8000/posts')
        const data = await response.json()
        setUsers([...users, ...data])
    }
    useEffect(() => { 
        getUsers()
    }, [])

   

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }
  return (
    <div>

    <form >
        <input type="text" name="name" placeholder="name" value={user.name}  onChange={handleChange}/>
        <input type="text" name="username" placeholder="username" value={user.username}  onChange={handleChange}/>
        <input type="password" name="password" placeholder="password" value={user.password}  onChange={handleChange}/>
        <input type="text" name="email" placeholder="email" value={user.email}  onChange={handleChange}/>
        <button onClick={postUsers}>post it</button>
    </form>
    {user.name}{user.username}{user.password}{user.email}
    {users.map((user) => (
        <div key={user.id}>
            <User info={user}/>
        </div>)
    )}


    </div>
  )
}

export default MainPage