import React from 'react';

import Gallery from './modules/gallery';
import Exhibit from './modules/exhibit';

export default class ReactMultimedia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: {}
    };

    this.select = this.select.bind(this);
  }

  select(obj) {
    this.setState({
      current: obj
    });
  }

  render() {
    return (
      <div className="reactMultimedia">
        <Gallery
          items={this.props.items}
          select={this.select}
          />
        <Exhibit
          current={this.state.current}
          />
      </div>
    )
  }
}

