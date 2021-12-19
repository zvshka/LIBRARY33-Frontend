import { useState } from "react"
import { useSelector } from "react-redux"
import Button from "../components/Button"
import colors from '../style/Colors.module.css'
import stylesheet from '../style/CreateObj.module.css'
import URLConst from "./URLConst"

const CreatePublisher = () => {
    const accessToken = useSelector(state => state.auth.accessToken)

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URLConst}/publishers`, {
            method: 'POST',
            body: JSON.stringify({ name, address }),
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${accessToken}` }
        }).then(res => res.json()).then(res => console.log(res))
        alert(`Издательство ${name} создано`)
    }

    return <div className={stylesheet.CreateObj}>
        <p>Создание издательства</p>
        <div className={`${colors.bggray}`}><input placeholder="name" onChange={e => setName(e.target.value)} /></div>
        <div className={`${colors.bggray}`}><input placeholder="address" onChange={e => setAddress(e.target.value)} /></div>
        <Button gold onClick={handleSubmit}>Create</Button>
    </div>

}
export default CreatePublisher