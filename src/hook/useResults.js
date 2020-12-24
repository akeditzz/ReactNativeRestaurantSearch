import {useEffect,useState} from 'react'
import googleSearch from '../api/googleSearch'

export default ()=>{
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const SearchApi = async (searchTerm) => {
        try {
            const results = await googleSearch.get('/textsearch/json', {
                params: {
                    query: searchTerm,
                    type: 'restaurants',
                    region: 'IN',
                    key: 'AIzaSyDe8czBn6mAxLBjEMAIUIvW50eII_y1-XU'
                }
            })
            setErrorMessage(null)
            setResults(results.data.results)
            console.log(results.data)
        } catch (error) {
            setErrorMessage('Something went wrong')
            console.log(error)
        }

    }

    useEffect(() => {
        SearchApi('restaurants')
    }, [])

    return [SearchApi,results,errorMessage]
}