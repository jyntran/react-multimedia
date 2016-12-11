import React from 'react';

import Main from './main';
import Item from './item';

class Gallery extends React.Component {

  render() {
    return (
      <div className="gallery">
        <Main/>
        <div className="container">
          {this.props.items.map((result) => (
            <Item
              key={result.name}
              data={result}
              select={this.props.select}
              />
          ))}
        </div>
      </div> 
    )
  }

}

export default Gallery;
