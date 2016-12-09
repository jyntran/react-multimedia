import React from 'react';
import { render } from 'react-dom';
import ReactGallery from './build/react-gallery';

class App extends React.Component {

  render() {
    const items = [
      {
        "name": "Billboard #451",
        "date": "2016",
        "type": "video",
        "videoURL": "https://vimeo.com/194400074",
        "thumb": "https://i.vimeocdn.com/video/606346317_640x360.jpg"
      }
    ];


    return (
      <ReactGallery
        items={items}
        />
    );
  }

}

render(<App/>, document.getElementById('app'));
