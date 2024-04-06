import Layout from '../components/Layout';

// Define Data component
function Data({ film }) {

   // If film data is not available, display a loading message
    if (!film) return <Layout><p>Loading...</p></Layout>;

  // Log film details in the console for debugging purposes
    console.log(film.title);
    console.log(film.director);
    console.log(film.producer);
    console.log(film.release_date);

  //=========JSX RENDERING================
  
    return (
        <Layout>
		// Render only if film data is available
            {film ? ( 
                <div className='apiDetails'>
                    <section id='section1'>
                        <div className='headingRow'>
                            <div className='headingCol'>
                                {/* Film title */}
                                <h2 className='h2'>{film.title}</h2>
                            </div>
                        </div>
                   // Render only if director data is available  
                        {film.director && (
                            <div className='outputRow'>
                                <div className='outputCol'>
                                    {/* Director */}
                                    <label className='dataLabel'>
                                        DIRECTOR:
                                    </label>
                                    <p className='dataDetail'>{film.director}</p>
                                </div>
                            </div>
                        )}
                        // Render only if producer data is available
                        {film.producer && ( 
                            <div className='outputRow'>
                                <div className='outputCol'>
                                    {/* Producer */}
                                    <label className='dataLabel'>PRODUCER:</label>
                                    <p className='dataDetail'>{film.producer}</p>
                                </div>
                            </div>
                        )}
                    // Render only if release date data is available
                        {film.release_date && ( 
                            <div className='outputRow'>
                                <div className='outputCol'>
                                    {/* Release Date */}
                                    <label className='dataLabel'>RELEASE DATE:</label>
                                    <p className='dataDetail'>{film.release_date}</p>
                                </div>
                            </div>
                        )}
		            	// Render only if opening crawl data is available
                        {film.opening_crawl && ( 
                            <div className='outputRow'>
                                <div className='outputCol'>
                                    {/* Opening Crawl */}
                                    <label className='dataLabel'>
                                      OPENING CRAWL:
                                    </label>
                                    <p className='crawlData'>
                                      {film.opening_crawl}</p>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            ) : (
                <div className="row">
                    <div className="col">
                        <p id="dataMessage">
                          No data to display
                        </p>
                    </div>
                </div>
            )}
           <style>
            {/* Styles here */}
            </style>
        </Layout>
    );
}

// Function to fetch film data based on the ID
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

// Export the Data component 
export default Data;
