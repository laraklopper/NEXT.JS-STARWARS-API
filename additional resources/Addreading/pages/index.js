/*  In ./pages/Index.js we loop through all the images. For each image we render the above Photo component. */
import Layout from '../components/Layout';
import getPhotos from '../data/data.js'
import Photo from '../components/Photo';
import React, { Component } from 'react'

/* We get data into props in getInitialProps below. All that data is then available through the props.
We loop through each image and render a Photo component. We create that component at ./components/Photo.js. */
export default class extends Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/photos')
    const images = await res.json()
    return { images }
  }
  /*We then inject that data into the component state, via componentWillMount. 
  Basic react stuff - we need access to the data via the state rather than props so that we'll be able to propagate data changes through the app. */
  componentWillMount() {
    this.setState({
      images: this.props.images
    })
  }

  /*When the likes button is clicked, LikesEntry get's triggered. 
  In there we increase the number of likes to the image that's being pressed. 
  That change is pushed back to the state, then we perform a put request where the server also gets the changes.
The button that's being pressed is actually two components deep. 
We pass LikesEntry to the ./components/Photo.js component (via props). 
The Photo component would equally pass LikesEntry to the CommentsFunctionality component in ./components/Photo.js

<CommentsFunctionality 
    LikesEntry={() => 
        props.LikesEntry(props.data.id)}
        commentsNum={props.data.comments.length}
        likes={props.data.likes} />
And lastly the ./components/InteractiveButtons.js get's to use it upon click */
  LikesEntry(id) {
    const images = this.state.images 
    let image = images.find(image => image.id === id) 
    image.likes = parseInt(image.likes) + 1
    // add changes to state
    this.setState({
      images
    })
    fetch(`http://localhost:3000/api/photos/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON. stringify(image)
    })
  }
  render() {
    return (
      <Layout>
         {
          this.state.images.map((image, key) => 
            <Photo 
            LikesEntry={this.LikesEntry.bind(this)}
            id={image._id} 
            key={key} 
            data={image} />)
         }
      </Layout>
    )
  }
}
