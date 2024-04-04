import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";

function home() {

    const fetchData = async() =>{
        try {
            const response = await fetch('http https://swapi.dev/api/films', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            console.error('Failed to fetch data');
        }
    }

    return(
        <Layout>
            <div>
                <section>
                    <div>
                        <div>
                            {/* <button className="apiButton" onClick={fetchData}>
                                FETCH DATA
                            </button> */}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default home