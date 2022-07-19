import { Component } from "react";

class Image extends Component {
  render() {
    return <img src={ this.props.suorce } alt={ this.props.alternativeText }/>;
  }
}

export default Image;