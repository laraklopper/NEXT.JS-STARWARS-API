import Layout from '../components/Layout';
import Photo from '../components/Photo';
import React, { Component } from 'react';


export default class extends Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/photos')
    const images = await res.json()
    return { images }
  }

  LikesEntry(id){
    const images = this.state.images 
    let image = images.find(image => image.id === id) 
    image.likes = parseInt(image.likes) + 1

     this.setState({
      images
    })

    fetch(`http://localhost:3000/api/photos/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(image)
    })
  }
 render() {
    return (
      <Layout>
        {
          this.props.images.map((image, key) => 
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
