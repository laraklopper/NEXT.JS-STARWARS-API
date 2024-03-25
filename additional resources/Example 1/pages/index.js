import Layout from '../components/MyLayout.js'
import Link from 'next/link'

/*We are passing data via a query string parameter (a query param). 
In our case, it's the “title” query param. 
We do this with our PostLink component as shown below.

In the example below we also use route Masking. 
This is a unique feature of Next.js. 
Basically, it will show a different URL on the browser than the actual URL that your app sees.
We've add a route mask to our blog post URL.
In the <Link> element, we have used another prop called “as”. 
That's the URL which we need to show on the browser. 
The URL your app sees is mentioned in the “href” prop. 


Route masking can cause problems when you try reload/refresh a page.
This is because, as we have configured the link below, when you try
refresh a the page for a particular blog post it will use the route /post/title
where title is the titel of the post. This won't work because we only have three pages: index.js, about.js and post.js.

To fix this we create a custom server API. See instructions for this here: https://nextjs.org/docs/#custom-server-and-routing*/
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="post1" title="Hello Next.js"/>
      <PostLink id="post2" title="Learn Next.js is awesome"/>
      <PostLink id="post3" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
