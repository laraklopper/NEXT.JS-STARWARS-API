import { useState } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";


function Home({ data }) {
    //State variables
    const [films, setFilms] = useState(data);
    const [display, setDisplay] = useState(false)
    const [error, setError] = useState(null);

    //Function to fetch data from Api
    const fetchFilmData = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/films');
            const newData = await response.json();
            setFilms(newData.results);
            setDisplay(true)
        } catch (error) {
            console.error('Failed to Film data', error);
            setError('Failed to fetch filmData'. error)
        }
    };

    

    //=================JSX RENDERING==========================
    return (
        <Layout>
            <div>
                <section>
                    <div className="row">
                        <div className="col">
                            <button className="apiButton" type="button" onClick={fetchFilmData}>
                                FETCH FILM DATA
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className="h2">DATA</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {display && films && films.length > 0 ? (
                                <ul>
                                    {films.map((film, index) => (
                                        <li key={index}>
                                            <div className="data">
                                               <Link href={`/data`}>
                                                    <p>{film.title}</p>
                                                </Link> 
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                 <p>{error ? error : "No data available"}</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
export async function getServerSideProps() {
    try {
        const response = await fetch("https://swapi.dev/api/films");
        const data = await response.json();
        return {
            props: { data: data.results },
        };
    } catch (error) {
        console.error('Failed to fetch film data', error);
        return {
            props: { data: [] }, 
        };
    }
}

export default Home;
