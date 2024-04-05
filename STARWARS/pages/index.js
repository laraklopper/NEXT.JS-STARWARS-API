import { useState } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

function Home({ data }) {
    const [films, setFilms] = useState(data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchFilmData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://swapi.dev/api/films');
            const newData = await response.json();
            setFilms(newData.results);
        } catch (error) {
            console.error('Failed to fetch film data', error);
            setError('Failed to fetch Film data', error.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div>
                <section className="section1">
                    <div className="row">
                        <div className="col">
                            <button className="apiButton" type="button" onClick={fetchFilmData}>
                                FETCH FILM DATA
                            </button>
                        </div>
                    </div>
                </section>
            <section className="section2">
                    <div className="row">
                        <div className="col">
                            <h2 className="h2">FILM DATA</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {loading ? (
                                <p>Loading...</p>
                            ) : films && films.length > 0 ? (
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
