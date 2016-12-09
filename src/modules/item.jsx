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
      <div className="item tile is-parent">
        <figure className="image"
          onClick={this.props.select.bind(this, this.props.data)}
          >
          <img src={this.props.data.thumb}/>
        </figure>
     </div>
    )
  }
}

export default Item;

