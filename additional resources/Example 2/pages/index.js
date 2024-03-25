import Layout from '../components/MyLayout.js'
import Link from 'next/link'
/*First of all we need to install isomorphic-unfetch. 
That's the library we are going to use to fetch data. 
It's a simple implementation of the browser fetch API, but works both in client and server environments. */
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

/*In practice, we usually need to fetch data from a remote data source. 
Next.js comes with a standard API to fetch data for pages. 
We do it using an async function called getInitialProps.
With that, we can fetch data for a given page via a remote data source and pass it as props to our page. 
We can write our getInitialProps to work on both server and the client. So, Next.js can use it on both client and server.
In the code below, we are fetching Batman TV shows and passing them into our page as the 'shows' prop. */
Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index