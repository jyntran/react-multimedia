import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    return (
      <div className="gallery-item tile is-parent"
          onClick={this.props.select.bind(this, this.props.data)}
          >
          <img className="gallery-item-image" src={this.props.data.thumb}/>
     </div>
    )
  }
}

export default Item;

