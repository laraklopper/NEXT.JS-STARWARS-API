import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch'

//Index Page
function Home({ data }) {
    return (
        <Layout>
            <section className="section">
                <div className='content'>
                    <h1 className='h1'>DATA</h1>
                    <div className='dataContainer'>
                        <ul className='dataList'>
                            {data.map(item => (
                                <li className="listItem" key={item.show.id}>
                                    <div className='data'>
                                        <p>{item.show.name}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            {/* JSX RENDERING */}
            <style jsx>
                {`
                .dataContainer {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    padding: 10px;
                }
                .dataList {
                    display: flex;
                    flex-wrap: wrap;
                    list-style-type: none;
                    width: 89%;
                    padding: 10px;
                    margin: 10px;
                    border: 2px;
                    border-style: solid;
                    border-color: black;
                }
                .listItem {
                    border-radius: 5px;
                    border-style: solid;
                    border-color: black;
                    margin: 5px;
                    padding: 10px;
                    width:30%;
                }
                .data p {
                    margin: 0;
                }
            `}
            </style>
        </Layout>
    )
}


export async function getServerSideProps() {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await response.json()
    return {
        props: { data }
    }
}

export default Home
