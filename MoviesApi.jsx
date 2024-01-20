import axios from "axios";
import React, { useState, useEffect } from "react";
// import "./movieapi.css"

function Moviesapi() {
    let [state, setState] = useState(false)
    let [movie, setMovie] = useState("")
    console.log(state, "this is state");

    useEffect(() => {
        async function getmoviesdata() {
            try {
                let { data: { Search } } = await axios.get(`https://www.omdbapi.com/?s=${movie}}&apikey=8f9acc2`)
                setState(Search)
                console.log(Search);
            }
            catch (Error) {
                setState(false)
                console.log(Error)
            }
        }
        getmoviesdata()
    }, [movie])


    function getmoviename(e) {
        setMovie(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div>
            <input onChange={getmoviename} type="text" placeholder="Serach Movie" />

            {state && state.map(({ Title, Poster, Year, imdbID }) => {
                console.log(Title, Poster, Year, imdbID);
                return (
                          <div  key={imdbID}>
                        <h1>MovieName:{Title}</h1>
                        <img height="190px" width="150px" src={Poster} alt="" />
                        <h2>Year:{Year}</h2>
                    </div>
                   
                  )
            })
            }
        </div>
    )
}
export default Moviesapi