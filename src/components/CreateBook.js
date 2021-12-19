import { useState } from "react"
import { useSelector } from "react-redux"
import Button from "../components/Button"
import colors from '../style/Colors.module.css'
import stylesheet from '../style/CreateObj.module.css'
import URLConst from "./URLConst"

const CreateBook = () => {
    const accessToken = useSelector(state => state.auth.accessToken)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [authors, setAuthors] = useState([])
    const [publisher, setPublisher] = useState('')
    const [styles, setStyles] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URLConst}/books`, {
            method: 'POST',
            body: JSON.stringify({ title, description, authors, publisher, styles }),
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${accessToken}` }
        }).then(res => res.json()).then(res => console.log(res))
        alert(`Книга ${title} создана`)
    }

    return <div className={stylesheet.CreateObj}>
        <p>Создание книги</p>
        <div className={`${colors.bggray}`}><input placeholder="title" onChange={e => setTitle(e.target.value)} /></div>
        <div className={`${colors.bggray}`}><input placeholder="description" onChange={e => setDescription(e.target.value)} /></div>
        <div className={`${colors.bggray}`}><input placeholder="authors" onChange={e => setAuthors(e.target.value.split(' ').map(Number))} /></div>
        <div className={`${colors.bggray}`}><input placeholder="publisher" onChange={e => setPublisher(Number(e.target.value))} /></div>
        <div className={`${colors.bggray}`}><input placeholder="styles" onChange={e => setStyles(e.target.value.split(' ').map(Number))} /></div>
        <Button gold onClick={handleSubmit}>Create</Button>
    </div>

}
export default CreateBook