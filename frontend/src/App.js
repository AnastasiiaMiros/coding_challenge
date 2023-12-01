import './App.css'
import SearchPage from './pages/SearchPage'
import Results from './components/Results'
import {useState } from "react"
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  
  const [countriesData, setCountriesData] = useState([])
  const [resultFound, setResultFound] = useState(true)

  const fetchCountries = (data) => {
    setCountriesData(data)
  }

  const resultsExist = (option) => {
    setResultFound(option)
  }

  return (
    <>
      <SearchPage setData={fetchCountries} data={countriesData} setIfFound={resultsExist}/>
      {
        resultFound === true ? 
        (countriesData.length !== 0 ? <Results data={countriesData}/> : <Home />)
        : <NotFound />
      }
    </>
  );
}

export default App
