// Import necessary modules and components from React and Next.js
import { useState } from "react";;// Import the React module to use React functionalities
import Layout from "../components/Layout";//Import the Layout function component
import Link from "next/link";//Import Link from Next.js for client side navigation
import fetch from "isomorphic-unfetch";// Import fetch function from "isomorphic-unfetch"


// Home component function
function Home({ data }) {
    //====STATE VARIABLES===============
    const [films, setFilms] = useState(data);// State for storing film data
    const [display, setDisplay] = useState(false);// State for controlling display of fetched data
    const [error, setError] = useState(null);// State for handling errors

    //Funtion to fetch film data
     const fetchFilmData = async () => {
        try {
            // Fetch film data from the SWAPI API
            const response = await fetch('https://swapi.dev/api/films');// Parse the response to JSON
            const newData = await response.json();
            setFilms(newData.results);//Update the films state to show fetched data
            setDisplay(true);// Set display state to true to show the fetched data
        } catch (error) {
            console.error('Failed to Film data', error);//Log a error message in the console for debugging purposes
            setError('Failed to fetch filmData'. error); //set the error state
        }
    };

    //==============JSX RENDERING=================

    return (
        <Layout>
            <div id="app">
                <section id="section1">
                    <div className="heading">
                        {/* Section to film data */}
                        <div className="col">
                            <h2 className="h2">FILMS</h2>
                        </div>
                    </div>
                    <div className="dataRow">
                        <div id="btnCol">
                            {/* Button to trigger fetching of film data */}
                            <button className="apiButton" type="button" onClick={fetchFilmData}>
                                FETCH FILM DATA
                            </button>
                        </div>
                        <div  id="dataCol">
                            {/* Conditional rendering based on display flag and presence of film data */}
                            {display && films && films.length > 0 ? (
                                // Render film data as a list
                                <ul className="apiOutput">
                                    {films.map((film, index) => (
                                        <li key={index} className="data">
                                            <div className="dataOutput">
                                                {/* Create a link to navigate to the details page to display individual 
                                                film details. 
                                                `<Link href={/data?id=${index}} className="dataItem">`: Creates a link that 
                                                when clicked navigates to the page specified in the `href` attribute.The ${index} part is used 
                                                to dynamically generate the URL with the id query parameter set to the value of the index variable.
                                                This allows for dynamic routing based on the index of the film in the array.*/}
                                                <Link href={`/data?id=${index}`} className="dataItem">
                                                    <p className="itemText">{film.title}</p>
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                    // Display an error message if there's no data available message
                                <p id="error message">{error ? error : "No data available"}</p>
                            )}
                        </div>
                        <div className="blankCol"></div>
                    </div>
                </section>
            </div>
            {/* Styling using CSS-in-JS */}
            <style jsx>
                {`
                //Section 1
                #section1{
                 margin-top: 10px;
                margin-bottom:5px;
                margin-left:5px;
                margin-right:5px;
                padding: 10px;
                 background-color: #A3A3A3;
                }
                //heading
                #heading{
                    display:flex;
                    width: 100%;                   
                }
               .dataItem:hover {
                    background-color: silver;
                }
                .row{
                    display: flex;
                    width:100%;
                }
             
                //Button
                #btnCol{
                    width:20%;
                    display: flex;
                    padding:10px;
                }
                .apiButton{
                position: fixed;
                border-radius: 15px;
                width: 196px;
                height: 50px;
                margin-left: 50px;
                margin-right: 0px;
                margin-bottom: 0px;
                margin-top: 10px;
                font-size: 15px;
                font-weight: 800;
                    background-color: #858585;
                    color:#F5F5F5;
        
                        
                }
                   // Data 
                .dataRow{
                    display: flex;
                    width:100%;
                    padding:10px;
                    
                }
                .itemText{
                    color:white;
                    font-weight: bold;
                    padding-top: 0px;
                    padding-left: 5px;
                    padding-bottom: 0px
                    padding-right: 7px;
                    display:flex;
                    margin: 5px;
                    width:100%;
                }
                .apiOutput{
                    width:100%;
                    padding:10px;
                    display:flex;
                    width: 90%;
                    list-style-type:none;
                    flex-wrap: wrap;      
                }
                .dataOutput{
                    width:100%;
                    display:flex
                    margin:2px;
                }
                .data{
                    margin-top:3px;
                    margin-left:3px;
                    margin-right:4px;
                    margin-bottom:2px;
                    padding:2px;
                    width:45%;
                    border: 2px solid black;
                    background-color: #636566;
                    border-radius: 10px;
                    color: #32383e;
                }
                #dataCol{
                    width:33%;
                    display: flex;
                    padding:10px;
                    background-color:#808080;
                    
                    border-radius: 20px 0px 20px 0px;
                }
                #blankCol{
                    width:33%;
                    display: flex;
                    padding:10px;
                }
                //Error message
                #errorMessage{
                    font-weight: bold;
                    color:#32383e;
                }
            
                `}
            </style>
        </Layout>
    );
}

// Function to fetch initial film data on server side
export async function getServerSideProps() {
    try {
        // Fetch film data from SWAPI (Star Wars) API
        const response = await fetch("https://swapi.dev/api/films");
        const data = await response.json();//Parse the response data as JSON
        // Return the fetched data as props
        return {
            props: { data: data.results },     

        };
    } catch (error) {
        console.error('Failed to fetch film data', error);//Log an error message in the console for debugging purposes
        return {
            // Return an empty array as props in case of error
            props: { data: [] },
        };
    }
}

// Export the Home component as default
export default Home;
