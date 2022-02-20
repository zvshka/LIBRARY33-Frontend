import { useState } from "react"
import { useSelector } from "react-redux"
import Button from "../components/Button"
import colors from '../style/Colors.module.css'
import stylesheet from '../style/CreateObj.module.css'
import URLConst from "./URLConst"

const CreateStyle = () => {
    const accessToken = useSelector(state => state.auth.accessToken)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URLConst}/styles`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${accessToken}` }
        }).then(res => res.json()).then(res => console.log(res))
        alert(`Жанр ${name} создан`)
    }

    return <div className={stylesheet.CreateObj}>
        <p>Создание жанра</p>
        <div className={`${colors.bggray}`}><input placeholder="Название" onChange={e => setName(e.target.value)}/></div>
        <div className={`${colors.bggray}`}><textarea placeholder="Описание" onChange={e => setDescription(e.target.value)}></textarea></div>
        <Button gold onClick={handleSubmit}>Создать</Button>
    </div>

}
export default CreateStyle