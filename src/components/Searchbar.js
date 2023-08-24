import { Container, TextField } from "@mui/material";
import { useState, useEffect } from 'react';

export default function SearchBar(props) {

  const baseUrl = "http://localhost:8080/apis";

//   const onSearchChange = (value) => {
//     console.log(value)
//     sendSearchQuery(value)
//   }


//   function sendSearchQuery(query) {
//         fetch(`${baseUrl}/fuzzySearch/${query}`)
//         .then((response) => {
//           response.json()
//         })
//         .then(console.log(response.json()))
// }


    const [query, setQuery] = useState("")
    const [peopleSearched, setPeopleSearched] = useState("")

    const fetchData = (value) => {
      fetch(`${baseUrl}/fuzzySearch/${value}`)
      .then((response) => response.json())
      .then((json) => {
        setPeopleSearched(json)
        console.log(peopleSearched)
      });

      props.onSearchChange(peopleSearched);
  
    }


    const onSearchChange = (value) => {
      
      console.log(value);
      if (value.length !== 0 )
        {
          fetchData(value)
        }
      else {
      
        console.log("in else:", value);
        setPeopleSearched(value);
        console.log("people searched is: ", peopleSearched)
      }
      
    }

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5, alignItems: 'center', ml: 75}}>
        <TextField  type="search" id="search" label="Search employee records" sx={{ width: 600}} onChange={(e) => onSearchChange(e.target.value)}/>
      </Container>
    </>
  );
}