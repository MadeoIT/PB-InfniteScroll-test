import React from 'react';
import Unsplash from 'unsplash-js'
const version = 'v1';
const ImageGrid = require(`./${version}/ImageGrid`).default;

const unsplash = new Unsplash({
  applicationId: '82e02d4a38540b64f0deaa5bf4c4016bb4f37c144ceadb7a44612f5554b7eeb0',
  secret: '5cb5cd0fd150b71a80257cf3d6025c3a8358ba77b659af2ed3260a21610ecb4d'
})

export default class Dashboard extends React.Component {

  constructor(props: any) {
    super(props);

    this.state = {
      images: []
    }
  }

  async componentDidMount() {
    const imagesStored = localStorage.getItem('images');
    if(!!imagesStored) {
      this.setState({images: JSON.parse(imagesStored)});
      return;
    }
    unsplash.users.photos('franckinjapan', 1, 50)
      .then(data => data.json())
      .then(json => {
        localStorage.setItem('images', JSON.stringify(json))
        this.setState({images: json})
      })

  }

  render() {
    console.log(this.state.images)
    return (
      <ImageGrid 
        images={this.state.images}
      />
    )
  }
};
