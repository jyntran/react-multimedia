import React from 'react';

import Gallery from './modules/gallery.jsx';
import Exhibit from './modules/exhibit.jsx';

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

  componentDidMount() {
    this.select(this.items[0]);
  }

  render() {
    return (
      <div id="main">
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

