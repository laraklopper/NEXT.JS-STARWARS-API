import Layout from '../components/Layout';//Import the Layout function component

// Define Data component
function Data({ film }) {
   
    // If film data is not available, display a loading message using the Layout component
    if (!film) return <Layout><p>Loading...</p></Layout>;

   //Log film details in the console for debugging purposes
    console.log(film.title);//Log the film title in the console for debugging purposes
    console.log(film.director);//Log the director in the console for debugging purposes
    console.log(film.producer);//Log the film producer in the console for debugging purposes
    console.log(film.release_date);//Log the release date in the console for debugging purposes

    //============JSX RENDERING==============
   
    return (
        <Layout>
            <div className='apiDetails'>
                <section id='section1'>
                {/* Heading row */}
                    <div className='headingRow'>
                        <div className='headingCol'>
                {/* Display film title */}
                            <h2 className='h2'>{film.title}</h2>
                        </div>
                    </div>
                {/* Output rows */}
                    <div className='outputRow'>
                        <div className='outputCol'>
                             {/* Display director */}
                            <label className='dataLabel'>DIRECTOR:</label>
                            <p className='dataDetail'>{film.director}</p>
                        </div>
                        {/* Display producer */}
                   <div className='outputCol'>
                            <label className='dataLabel'>PRODUCER:</label>
                            <p className='dataDetail'>{film.producer}</p>
                   </div>
                    </div>
                    <div className='outputRow'>
                        <div className='outputCol'>
                            {/* Display release date */}
                            <label className='dataLabel'>RELEASE DATE:</label>
                            <p className='dataDetail'>{film.release_date}</p>
                        </div>
                        {/* Display opening crawl */}
                        <div className='outputCol'>
                            <label className='dataLabel'>OPENING CRAWL:</label>
                                <p className='crawlData'> {film.opening_crawl}</p>
                        </div>
                    </div>
                 
                </section>
            </div>
               {/* Styling using CSS-in-JS */}

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
    const { id } = context.query;// Extract the 'id' property from the 'context.query' object using object destructuring
    try {
         // Fetch film data from the SWAPI API (Star Wars) based on the ID
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        const film = await response.json(); // Parse the response as JSON
        return {//Return the film data props
            props: { film },
        };
    } catch (error) {
       // Handle errors if fetching data fails
        console.error('Failed to fetch film data', error);//Log an error message in the console for debugging purposes
       // Return null as film data if an error occurs
        return {
            props: { film: null }, 
        };
    }
}

export default Data;// Export the Data component as default

