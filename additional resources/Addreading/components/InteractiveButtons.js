// Import necessary icons from the react-icons library
import { MdModeComment, MdFavoriteBorder } from 'react-icons/md'

// Define the component as a functional component
export default ({likes, LikesEntry, commentsNum}) => (
    <div className="meta">
    {/* Like button with the heart icon */}
        <button className="heart" onClick={LikesEntry} ><MdFavoriteBorder />{likes}</button>
    {/* Paragraph displaying the number of comments with a comment icon */}
        <p><MdModeComment />{ commentsNum }</p>
            {/* Component-specific styles */}
        <style>{`
        /* Styles for the metadata container */
        .meta{
            padding: 5px;
            background: var(--light-gray);
            border-top: 1px solid #dce2e4;
            overflow: auto;
        }
        /* Styles for the paragraph inside the metadata */
        .meta p {
            padding-top: 9px;
        }
         /* Styles for the like button and paragraph */
        .meta button, .meta p{
            border: none;
            background: transparent;
            margin-top: 5px;
            float: left;
            width: 50%;
            text-align: center;
            padding: 9px 0;
            margin-top: 10px;
            color: var(--green);
            outline: none;
        }
         /* Styles for the icons inside the metadata */
        .meta svg {
            font-size: 1.3rem;
            margin-right: 3px;
        }
        `}</style>
    </div>
)

