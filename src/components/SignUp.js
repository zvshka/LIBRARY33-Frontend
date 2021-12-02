import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { login } from '../features/auth/authSlice'

const SignUp = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:5000/auth/register', {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify({email, username, password, firstName, lastName}),
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json()).then(res => console.log(res))
        const response = await fetch('http://localhost:5000/auth/login', {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify({'username': username, 'password': password}),
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        console.log(response)
        dispatch(login(response))
    }

    return <>
    <input placeholder="username" onChange={e => setUsername(e.target.value)} />
    <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
    <input placeholder="first name" onChange={e => setFirstName(e.target.value)} />
    <input placeholder="last name" onChange={e => setLastName(e.target.value)} />
    <button onClick={handleSubmit}>Create</button>
    </>
}
export default SignUp