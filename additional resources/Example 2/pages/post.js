import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

/* Here we once again use getInitialProps. This time we retrieve
data from the TVMaze API using the ID passed through from index.js.
The first argument of the function is the context object. 
It has a query field that we can use to fetch information.
In our example, we picked the show ID from query params and fetched its show data from the TVMaze API. */
Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post