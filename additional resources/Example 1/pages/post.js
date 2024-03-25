import Layout from '../components/MyLayout.js'
import { withRouter } from 'next/router'

/*
We import and use the "withRouter" function from "next/router" this will inject the Next.js router as a property.
withRouter is a React-Router higher-order component. 
According to React’s documentation, “a higher-order component is a function that takes a component and returns a new component. 
Whereas a component transforms props into UI, a higher-order component transforms a component into another component.”

You can use withRouter to get access to the closest <Route>'s match. 
A match object contains information about how a <Route path> matched the URL. 
It includes information about the param, path and URL of the route. withRouter will pass updated match, location, 
and history props to the wrapped component whenever it renders. Find out more about withRouter here: https://reacttraining.com/react-router/core/api/withRouter

In this case, we are using the router's “query” object, which has the query string params.
Therefore, we get the title with props.router.query.title. */
const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))

const Page = props => (
  <Layout>
    <Content />
  </Layout>
)

export default Page