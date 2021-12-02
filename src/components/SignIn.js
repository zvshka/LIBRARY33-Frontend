import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { login } from '../features/auth/authSlice'

const SignUp = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
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
    <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
    <button onClick={handleSubmit}>Sign In</button>
    </>
}
export default SignUp