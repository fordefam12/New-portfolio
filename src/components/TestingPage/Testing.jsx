import '../../js/AnimatedResponsiveImageGrid/js/jquery.gridrotator'
import "../../js/AnimatedResponsiveImageGrid/css/demo.css";
import "../../js/AnimatedResponsiveImageGrid/css/fallback.css";
import "../../js/AnimatedResponsiveImageGrid/css/style.css";
import { Component } from 'react';
import $ from 'jquery';

class GridRotator extends Component {
  componentDidMount() {
    this.initializeGridRotator();
  }

  initializeGridRotator() {
    $(this.gridRotatorRef).gridrotator({
      // Configure your options here
    });
  }

  componentWillUnmount() {
    // Clean up and destroy the gridrotator when the component unmounts
    $(this.gridRotatorRef).gridrotator('destroy');
  }

  render() {
    return (
      <div ref={(el) => (this.gridRotatorRef = el)}>
        {/* Add your gridrotator content here */}
      </div>
    );
  }
}

export default GridRotator;
