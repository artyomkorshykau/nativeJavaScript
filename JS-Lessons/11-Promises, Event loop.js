import {useState} from "react";
import axios from "axios";

const configOMB = {
    baseURL: 'https://www.omdbapi.com/'
}

const key = '?apikey=e810974d&'
const axiosInstance = axios.create(configOMB)

const API = {
    searchFilmsByTitle: (title) => {
        return axiosInstance.get(`${key}s=${title}`)
    },
    searchFilmsByType: (title, type) => {
        return axiosInstance.get(`${key}s=${title}&type=${type}`)
    }
}

const Films = () => {

    const [searchName, setSearchName] = useState('')
    const [searchResult, setSearchResult] = useState('')
    const [searchNameByType, setSearchNameByType] = useState('')
    const [searchResultByType, setSearchResultByType] = useState('')

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(res => {
                if (res.data.Response === 'True') {
                    setSearchResult(JSON.stringify(res.data.Search))
                } else {
                    setSearchResult(res.data.Error)
                }
            })
    }

    const searchByFilm = (e) => {
        const type = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : ''
        API.searchFilmsByType(searchNameByType, type)
            .then(res => {
                if (res.data.Response === 'True') {
                    setSearchResultByType(JSON.stringify(res.data.Search))
                } else {
                    setSearchResultByType(res.data.Error)
                }
            })
    }

    return <div>
        <h1>Promises</h1>
        <div>
            <h3><p>Search by name:</p></h3>
            <input type="text" value={searchName} onChange={(e) => {
                setSearchName(e.currentTarget.value)
            }}/>
            <button onClick={searchFilm}>Search</button>
            <div>
                {searchResult}
            </div>
            <h3><p>Search by type:</p></h3>
            <input type="text" value={searchNameByType} onChange={(e) => {
                setSearchNameByType(e.currentTarget.value)
            }}/>
            <button onClick={searchByFilm} data-t={'movie'}>Movies</button>
            <button onClick={searchByFilm} data-t={'series'}>Series</button>
            <div>
                {searchResultByType}
            </div>
        </div>
    </div>

}

export default Films
