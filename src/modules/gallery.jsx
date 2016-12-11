import React from 'react';

import Item from './item';

class Gallery extends React.Component {

  render() {
    return (
      <div className="gallery">
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
