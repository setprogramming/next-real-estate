import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '33ac877ccbmsh493e810e5edf2c3p186e9fjsnb773485ceaaa',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          },
        })

    return data
}