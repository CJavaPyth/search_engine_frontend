import '../styles/Home.css';
import Searchbar from '../components/Searchbar';
import Datatable from '../components/Datatable';
import { useState, useEffect } from 'react';

function Home() {

    const baseUrl = "http://localhost:8080/apis";

    // const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [peopleSearched, setPeopleSearched] = useState("")

    async function fetchUserData() {
        try {
            const response = await fetch(`${baseUrl}/findAll`)
            .then(response => {
                return response.json()
            })
            .then(data => {setItems(data)})
            
        }
        catch (error) {
            console.log(error);
        }
    }

    const showSearchResultsHandler = (peopleQuery) => {
        setPeopleSearched(peopleQuery)
        console.log(peopleQuery);
    }


    useEffect(() => {
        fetchUserData()
    }, [])

    
    console.log(items)

    return <div className="home">
        <Searchbar onSearchChange={showSearchResultsHandler}/>
        <Datatable people={items} searchResults={peopleSearched}/>
    </div>
}

export default Home;


