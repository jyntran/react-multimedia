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
        <article className="caption message">
          <div className="message-body">
            <div className="content">
              <h1>{this.props.current.name}</h1>
              <p>{this.props.current.date}</p>
            </div>
          </div>
        </article>
      </div> 
    )
  }

}

export default Exhibit;
