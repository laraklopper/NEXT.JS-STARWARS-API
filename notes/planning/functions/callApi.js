import fetch from 'isomorphic-unfetch'

const callAPI = async () => {
  const url = `https://city-by-api-ninjas.p.rapidapi.com/v1/city?name=${city}`
  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8de9ae9d72msh7f81545ca36cc82p12ed14jsn731fcedd1cba',
            'X-RapidAPI-Host': 'city-by-api-ninjas.p.rapidapi.com'
        }
    }
	try {	
		const response = await fetch(url, options)
        const data = await response.json()
        return data;
	} catch (err) {
    console.error(error);
        return null;
	}
};

export default callApi;
