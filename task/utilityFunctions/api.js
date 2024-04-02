import fetch from 'isomorphic-unfetch'

export async function fetchData() {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await response.json()
    return data;
}