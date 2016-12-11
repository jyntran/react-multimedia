import React from 'react';
import ReactPlayer from 'react-player';

class Exhibit extends React.Component {

  render() {
    const exhibitStyle = {
     backgroundImage: "url(" + this.props.current.imageURL + ")"
    };

    return (
      <div className="exhibit"
        style={exhibitStyle}
        >
        <div className="video">
          <ReactPlayer className="embed" url={this.props.current.videoURL}/>
        </div>
      </div> 
    )
  }

}

export default Exhibit;
