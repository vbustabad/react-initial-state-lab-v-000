import React from 'react';

class ImageSlider extends React.Component {
  constructor() {
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div className="current-slide">
        I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}

export default ImageSlider;
