const express = require('express')
const router = express.Router()
const axios = require('axios')


router.get('/api/countries/:search', async (req, res) => {
    const search = req.params.search
    const fields = ['name', 'currencies', 'region', 'capital', 'independent', 'unMember', 'subregion', 
    'languages', 'flags', 'maps', 'population', 'timezones']
    const endpoint = `https://restcountries.com/v3.1/name/${search}?fields=${fields.toString()}`

    try {
        const apiResponse = await axios.get(endpoint)
        data = apiResponse.data
        res.send(data)
    } catch (error) {
        if(error.code === "ERR_BAD_REQUEST"){
            res.status(404).send('Not Found')
        } else {
            console.error('Error fetching data from API', error)
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }
})

module.exports = router