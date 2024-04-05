import Layout from '../components/Layout';

function Data({ film }) {
   

    if (!film) return <Layout><p>Loading...</p></Layout>;

    console.log(film.title);

    
    return (
        <Layout>
            <div className='apiDetails'>
                <section id='section1'>
                    <h3 className='h2'>{film.title}</h3>
                    <div>
                        <label className='dataLabel'>DIRECTOR:</label>
                        <p className='dataDetail'>{film.director}</p>
                    </div>
                    <div>
                        <label className='dataLabel'>PRODUCER</label>
                        <p className='dataDetail'>{film.producer}</p>
                    </div>
                    <div>
                        <label className='dataLabel'>RELEASE DATE:</label>

                    </div>
                    
                    <p className='dataDetail'>{film.release_date}</p>
                    <div>
                        <label className='dataLabel'>OPENING CRAWL:</label> 
                        <p className='dataDetail'> {film.opening_crawl}</p>
                    </div>
                </section>
            </div>
            <style>
                {`
                #section1{
                margin-top: 10px;
                margin-bottom:5px;
                margin-left:5px;
                margin-right:5px;
                padding: 15px;
                 background-color: #A3A3A3;
                }
                .h2{
                    font-weight: bold;
                    color:yellow; 
                    text-transform: uppercase;
                    text-align: center;
                }
                .dataDetail{
                    font-weight: bold;
                    color:#242424;
                    font-size: 18px;
                }
                .dataLabel{
                    font-weight: bold
                }
                `}
            </style>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    try {
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        const film = await response.json();
        return {
            props: { film },
        };
    } catch (error) {
        console.error('Failed to fetch film data', error);
        return {
            props: { film: null }, 
        };
    }
}

export default Data;
