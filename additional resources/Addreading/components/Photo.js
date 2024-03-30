/* In the ./components/Photo.js component we are trying to access the image file from a static directory. */
import CommentsFunctionality from './InteractiveButtons'// Component for interactive buttons (like, comment)
import Link from 'next/link'// Component for client-side navigation

/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.

Also notice that we pass the image id through as as a query string
which means, on click we go to /photo?id=0. 
So the Link component accepts a query where we can add our own query strings. 
In this case we simply get the id from the props and pass it on.*/

// Define the component as a functional component
export default (props) => {
    return (
        <div className="photoComponent">
        {/* Container for the photo and associated metadata */}
            <div style={{flex: '1 0 auto'}}>
                    {/* Link to the individual photo page */}
                <Link href={{ pathname: '/photo', query: { id: props.id } }}>
                        {/* Image element displaying the photo */}
                    <img src={`/static/art/${props.data.image}.jpg`} alt=""/>
                </Link>
                <div className="meta">
                    {/* Tagline for the photo */}
                    <p className="tagline">{props.data.tagline}</p>
                    {/* Interactive buttons for liking and commenting */}
                    <CommentsFunctionality 
                        LikesEntry={() => props.LikesEntry(props.data.id)}// Function for liking the photo
                        commentsNum={props.data.comments.length}// Number of comments
                        likes={props.data.likes} />{/* Number of likes */}
                </div>
            </div>
                {/* Component-specific styles */}
            <style>{`
            /* Styles for the photo component */
                .photoComponent {
                    display: flex;
                    flex-direction: column;
                    width: 29.3333333333%;
                    float: left;
                    margin: 2% 2% 20px 2%;
                    font-size: 1.6rem;
                    //height: 400px;
                    background: var(--white);
                    color: #AD0044;
                    box-shadow: -12px 16px 75px -27px rgba(0,0,0,1);
                    margin-bottom: -50px;
                    margin-top: 100px;
                    overflow: auto;
                }
                 /* Styles for the image */

                img{
                    width: 80%;
                    margin: 10%;
                }
                 /* Styles for the tagline */
                .tagline{
                    margin-bottom: 10px; // kind of hack
                }
            `}</style>
        </div>
    )
}
