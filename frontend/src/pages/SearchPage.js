import {useState} from "react"
import axios from "axios"

function SearchPage(props){
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(search){
            findCountries()
        } else {
            props.setData([])
            props.setIfFound(true)
        }
    }

    const findCountries = async() => {
        await axios.get(`http://localhost:4000/api/countries/${search}`)
        .then(res => {
            props.setData(res.data)
            props.setIfFound(true)
        })
        .catch(err => {
            if(err.code === 'ERR_BAD_REQUEST'){
                props.setIfFound(false)
            } else {
                console.log(err)
            }
        })
    }

    return(
        <>
            <form>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find country"></input>
                <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </>
    )
}

export default SearchPage