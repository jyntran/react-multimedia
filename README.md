# react-multimedia

A React component that displays images and video with gallery thumbnails.


## Installation 

	npm i react-multimedia --save


## Example

```javascript
import React from 'react';
import {render} from 'react-dom';

import {ReactMultimedia} from 'react-multimedia';

import 'react-multimedia/style.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const items = [
      {
        "name": "Billboard #451",
        "date": "2016",
        "type": "video",
        "videoURL": "https://vimeo.com/194400074",
        "thumb": "https://i.vimeocdn.com/video/606346317_640x360.jpg"
      },
      {
        "name": "Mountains",
        "date": "",
        "type": "image",
        "imageURL": "https://images.unsplash.com/photo-1459539235056-5045ca20e525?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=",
        "thumb": "https://images.unsplash.com/photo-1459539235056-5045ca20e525?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop="
      }
    ];

    return (
      <ReactMultimedia items={items}/>
    )
  }
}

render(<App/>, document.getElementById('app'));
```
