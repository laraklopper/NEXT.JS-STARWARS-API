import Layout from '../components/Layout';//Import the Layout component

// Define Data component
function Data({ film }) {

    // If film data is not available, display a loading message
    if (!film) return <Layout><p>Loading...</p></Layout>;

    console.log(film.title);//Log the film title in the console for debugging purposes
    console.log(film.director);//Log the director in the console for debugging purposes
    console.log(film.producer);//Log the film producer in the console for debugging purposes
    console.log(film.release_date);//Log the release date in the console for debugging purposes


    //=========JSX RENDERING===========

    return (

        <Layout>      
            <div className='apiDetails'>
                {/* Section 1 */}
                <section id='section1'>
                    {/* Heading Row */}
                    <div className='headingRow'>
                        <div className='headingCol'>
                            {/* Film title */}
                            <h2 className='h2'>{film.title}</h2>
                        </div>
                    </div>
                    {/* Output Rows */}
                    <div className='outputRow'>
                        <div className='outputCol'>
                             {/*Director*/}
                            <label className='dataLabel'>DIRECTOR:</label>
                            <p className='dataDetail'>{film.director}</p>
                        </div>
                   <div className='outputCol'>
                            {/* Producer */}
                            <label className='dataLabel'>PRODUCER:</label>
                            <p className='dataDetail'>{film.producer}</p>
                   </div>
                    </div>
                    <div className='outputRow'>
                        <div className='outputCol'>
                            {/* Release Date */}
                            <label className='dataLabel'>RELEASE DATE:</label>
                            <p className='dataDetail'>{film.release_date}</p>
                        </div>
                        <div className='outputCol'>
                            {/* Opening Crawl */}
                            <label className='dataLabel'>OPENING CRAWL:</label>
                                <p className='crawlData'> {film.opening_crawl}</p>
                        </div>
                    </div>
                </section>
            </div>
            {/* JSX Styling */}
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

// Function to fetch film data based on the ID
export async function getServerSideProps(context) {
    // Extract the 'id' property from the 'context.query' object using object destructurin
    const { id } = context.query;
    try {
        // Fetch film data from the SWAPI API (Star Wars) based on the ID
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        const film = await response.json(); // Parse the response as JSON
        return {
            props: { film },
        };
    } 
    catch (error) {
        // Handle errors if fetching data fails
        console.error('Failed to fetch film data', error); //Log an error message in the console for debugging purposes
        // Return null as film data if an error occurs
        return {
            props: { film: null }, 
        };
    }
}

export default Data;// Export the Data component 
