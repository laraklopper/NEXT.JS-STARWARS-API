import Layout from '../components/Layout';

function Data({ film }) {
   

    if (!film) return <Layout><p>Loading...</p></Layout>;

    console.log(film.title);
    console.log(film.director);
    console.log(film.producer);
    console.log(film.release_date);

    
    return (
        <Layout>
            <div className='apiDetails'>
                <section id='section1'>
                    <div className='headingRow'>
                        <div className='headingCol'>
                            <h2 className='h2'>{film.title}</h2>
                        </div>
                    </div>
                    <div className='outputRow'>
                        <div className='outputCol'>
                            
                            <label className='dataLabel'>DIRECTOR:</label>
                            <p className='dataDetail'>{film.director}</p>
                        </div>
                   <div className='outputCol'>
                            <label className='dataLabel'>PRODUCER:</label>
                            <p className='dataDetail'>{film.producer}</p>
                   </div>
                    </div>
                    <div className='outputRow'>
                        <div className='outputCol'>
                            <label className='dataLabel'>RELEASE DATE:</label>
                            <p className='dataDetail'>{film.release_date}</p>
                        </div>

                        <div className='outputCol'>
                            <label className='dataLabel'>OPENING CRAWL:</label>
                                <p className='crawlData'> {film.opening_crawl}</p>
                        </div>
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
                .row{
                    display:flex;
                }
                .outputRow{
                    display:flex;
                    width: 100%;
                    align-items: baseline;
                }
                .outputCol{
                    display: flex;
                    width:50%;
                    align-items: baseline;
                        padding-left: 5px;
                    padding-right: 5px;
                    padding-top: 2px;
                    padding-bottom: 2px;
                        background-color: #949494;
                        margin:5px;
                        border-radius: 10px;
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
                    margin-left: 5px;
                }
                .crawlData{
                      font-weight: bold;
                    color:#242424;
                    text-align: justify;
                    font-size: 18px;
                    margin-left: 5px;

                }
                .dataLabel{
                    font-weight: bold;
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
